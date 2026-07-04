import { INLINE_QUESTIONS } from '../data-inline.js';

export class QuestionLoader {
  constructor(storage = null) {
    this.storage = storage;
    this.questions = [];
    this.usedIds = new Set();
  }

  async load() {
    const customEnabled = this.storage?.get('use-custom-questions') !== false;
    const custom = customEnabled ? this._validCustomQuestions() : [];
    this.questions = [...(INLINE_QUESTIONS || []), ...custom];
    return this.questions;
  }

  _validCustomQuestions() {
    const payload = this.storage?.get('custom-questions');
    const questions = Array.isArray(payload?.questions) ? payload.questions : Array.isArray(payload) ? payload : [];
    return questions.filter(q => q && q.id && q.question && q.explanation && (typeof q.correctAnswer === 'string' || typeof q.correctAnswer === 'boolean'));
  }

  shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  getQuestions(count = 10, category = null, difficulty = null) {
    let pool = this.questions.filter(q => q && q.id && !this.usedIds.has(q.id));

    if (category) {
      pool = pool.filter(q => q.category === category);
    }
    if (difficulty) {
      pool = pool.filter(q => q.difficulty === difficulty);
    }

    // Se pool esgotado, resetar e tentar novamente
    if (pool.length === 0) {
      this.usedIds.clear();
      pool = this.questions.filter(q => q && q.id);
      if (category) pool = pool.filter(q => q.category === category);
      if (difficulty) pool = pool.filter(q => q.difficulty === difficulty);
    }

    pool = this.shuffle(pool);
    const selected = pool.slice(0, count);
    selected.forEach(q => { if (q && q.id) this.usedIds.add(q.id); });
    return selected;
  }

  reset() {
    this.usedIds.clear();
  }
}
