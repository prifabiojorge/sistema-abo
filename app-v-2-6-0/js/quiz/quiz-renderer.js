export class QuizRenderer {
  constructor(eventBus) {
    this.bus = eventBus;
    this.container = document.getElementById('quiz-content');
    this._bindEvents();
  }

  _bindEvents() {
    this.bus.on('quiz:started', (data) => this.renderStart(data));
    this.bus.on('quiz:question', (data) => this.renderQuestion(data));
    this.bus.on('quiz:feedback', (data) => this.renderFeedback(data));
    this.bus.on('quiz:results', (data) => this.renderResults(data));
  }

  renderStart({ total }) {
    this.container.innerHTML = `
      <div class="quiz-intro">
        <h3>Quiz ABO/Rh</h3>
        <p>${total} perguntas</p>
        <div class="quiz-progress"><div class="quiz-progress__bar bar-w-0"></div></div>
      </div>
    `;
  }

  renderQuestion({ index, total, question }) {
    if (!question) {
      console.error('[QuizRenderer] Questão undefined!', { index, total });
      this.container.innerHTML = '<p class="quiz-error">Erro ao carregar questão. Tente reiniciar o quiz.</p>';
      return;
    }
    const progress = ((index) / total) * 100;
    let optionsHtml = '';

    if (question.type === 'true_false') {
      optionsHtml = `
        <button class="quiz-option" data-value="true">Verdadeiro</button>
        <button class="quiz-option" data-value="false">Falso</button>
      `;
    } else if (question.options) {
      const shuffled = [...question.options].sort(() => Math.random() - 0.5);
      optionsHtml = shuffled.map(opt => `
        <button class="quiz-option" data-value="${opt.id}">${opt.text}</button>
      `).join('');
    }

    this.container.innerHTML = `
      <div class="quiz-question">
        <div class="quiz-header">
          <span class="quiz-counter">${index + 1}/${total}</span>
        </div>
        <div class="quiz-progress"><div class="quiz-progress__bar ${this._progressClass(progress)}"></div></div>
        <p class="quiz-text">${question.question}</p>
        <div class="quiz-options">${optionsHtml}</div>
      </div>
    `;

    this.container.querySelectorAll('.quiz-option').forEach(btn => {
      btn.addEventListener('mouseenter', () => { if (window.playSound) window.playSound('hover'); });
      btn.addEventListener('click', () => {
        if (window.playSound) window.playSound('click');
        this.bus.emit('quiz:answer', { optionId: btn.dataset.value });
      });
    });
  }

  renderFeedback({ isCorrect, correctAnswer, explanation, points, streak }) {
    if (window.playSound) window.playSound(isCorrect ? 'correct' : 'wrong');
    const options = this.container.querySelectorAll('.quiz-option');
    options.forEach(btn => {
      btn.disabled = true;
      const val = btn.dataset.value;
      if (val === String(correctAnswer)) {
        btn.classList.add('quiz-option--correct');
      } else if (btn.classList.contains('quiz-option--selected')) {
        btn.classList.add('quiz-option--wrong');
      }
    });

    // Remove feedback anterior para evitar acúmulo
    const oldFeedback = this.container.querySelector('.quiz-feedback');
    if (oldFeedback) oldFeedback.remove();

    const feedback = document.createElement('div');
    feedback.className = `quiz-feedback ${isCorrect ? 'quiz-feedback--correct' : 'quiz-feedback--wrong'}`;
    feedback.innerHTML = `
      <strong>${isCorrect ? '✅ Correto!' : '❌ Incorreto'}</strong>
      ${isCorrect ? `<span class="quiz-points">+${points} pts</span>` : ''}
      ${streak >= 3 ? `<span class="quiz-streak">🔥 Streak x${streak}</span>` : ''}
      <p>${explanation}</p>
      <button id="btn-quiz-advance" class="btn btn--primary u-mt-4 u-w-full">Avançar →</button>
    `;
    this.container.appendChild(feedback);

    const advanceBtn = document.getElementById('btn-quiz-advance');
    if (advanceBtn) {
      advanceBtn.addEventListener('click', () => {
        this.bus.emit('quiz:advance');
      });
    }
  }

  renderResults({ score, correct, total, bestStreak, percentage }) {
    if (window.playSound) window.playSound('complete');
    let message = '';
    if (percentage >= 90) message = '🏆 Excelente! Você é um especialista!';
    else if (percentage >= 70) message = '👏 Muito bem! Continue estudando!';
    else if (percentage >= 50) message = '👍 Bom! Dá para melhorar!';
    else message = '📚 Continue estudando! Você vai conseguir!';

    this.container.innerHTML = `
      <div class="quiz-results">
        <h3>Resultado do Quiz</h3>
        <div class="quiz-results__score">${score} pts</div>
        <p>${correct}/${total} acertos (${percentage}%)</p>
        <p>🔥 Melhor streak: ${bestStreak}</p>
        <p class="quiz-results__message">${message}</p>
        <div class="quiz-results__actions">
          <button id="btn-replay-quiz" class="btn btn--primary">🔄 Jogar Novamente</button>
          <button id="btn-reset-quiz" class="btn btn--secondary">↺ Resetar</button>
          <a href="#home" class="btn btn--ghost" data-nav="home">🏠 Início</a>
        </div>
      </div>
    `;

    const replayBtn = document.getElementById('btn-replay-quiz');
    if (replayBtn) {
      replayBtn.addEventListener('click', () => {
        this.bus.emit('quiz:restart');
      });
    }

    const resetBtn = document.getElementById('btn-reset-quiz');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        this.bus.emit('quiz:reset');
      });
    }
  }

  _progressClass(value) {
    const step = Math.max(0, Math.min(100, Math.round(value / 10) * 10));
    return `bar-w-${step}`;
  }
}
