export class QuizEngine {
  constructor(eventBus, state, storage) {
    this.bus = eventBus;
    this.state = state;
    this.storage = storage;
    this.questions = [];
    this.currentIndex = 0;
    this.answers = [];
    this.score = 0;
    this.streak = 0;
    this.bestStreak = 0;
    this.status = 'idle';
  }

  start(questions) {
    if (!questions || questions.length === 0) {
      console.error('[QuizEngine] Nenhuma questão disponível!');
      this.bus.emit('quiz:error', { message: 'Não foi possível carregar as questões.' });
      return;
    }
    this.questions = questions.filter(q => q && q.id);
    this.currentIndex = 0;
    this.answers = [];
    this.score = 0;
    this.streak = 0;
    this.bestStreak = 0;
    this.status = 'question';
    this.bus.emit('quiz:started', { total: this.questions.length });
    this._startQuestion();
  }

  _startQuestion() {
    this.status = 'question';
    this.bus.emit('quiz:question', {
      index: this.currentIndex,
      total: this.questions.length,
      question: this.questions[this.currentIndex]
    });
  }

  answer(optionId) {
    if (this.status !== 'question') return;

    const question = this.questions[this.currentIndex];
    const isCorrect = optionId === question.correctAnswer;

    if (isCorrect) {
      this.streak++;
      if (this.streak > this.bestStreak) this.bestStreak = this.streak;
      const multiplier = this.streak >= 10 ? 5 : this.streak >= 5 ? 3 : this.streak >= 3 ? 2 : 1;
      const points = 10 * multiplier;
      this.score += points;
    } else {
      this.streak = 0;
    }

    this.answers.push({
      questionId: question.id,
      selected: optionId,
      correct: isCorrect
    });

    this.status = 'feedback';
    this.bus.emit('quiz:feedback', {
      isCorrect,
      correctAnswer: question.correctAnswer,
      explanation: question.explanation,
      points: isCorrect ? (10 * (this.streak >= 10 ? 5 : this.streak >= 5 ? 3 : this.streak >= 3 ? 2 : 1)) : 0,
      streak: this.streak
    });
  }

  advance() {
    if (this.status !== 'feedback') return;
    this._next();
  }

  _next() {
    this.currentIndex++;
    if (this.currentIndex >= this.questions.length) {
      this._finish();
    } else {
      this._startQuestion();
    }
  }

  _finish() {
    this.status = 'results';
    const correctCount = this.answers.filter(a => a.correct).length;
    const result = {
      score: this.score,
      correct: correctCount,
      total: this.questions.length,
      bestStreak: this.bestStreak,
      percentage: Math.round((correctCount / this.questions.length) * 100)
    };

    this._persist(result);
    this.bus.emit('quiz:results', result);
  }

  _persist(result) {
    const saved = this.storage.get('quiz-history') || [];
    saved.push({ ...result, date: new Date().toISOString() });
    if (saved.length > 20) saved.shift();
    this.storage.set('quiz-history', saved);

    const scoreData = this.storage.get('score') || { total: 0 };
    scoreData.total = (scoreData.total || 0) + result.score;
    scoreData.lastUpdated = new Date().toISOString();
    this.storage.set('score', scoreData);
  }

  destroy() {
    // Timer removido
  }
}
