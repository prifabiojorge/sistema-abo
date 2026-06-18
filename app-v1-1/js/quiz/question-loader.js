import { INLINE_QUESTIONS } from '../data-inline.js';

export class QuestionLoader {
  constructor() {
    this.questions = [];
    this.usedIds = new Set();
  }

  async load() {
    this.questions = INLINE_QUESTIONS || [];
    return this.questions;
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
