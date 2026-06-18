import { INLINE_MYTHS } from '../data-inline.js';

export class MythsScreen {
  constructor(bus, storage, achievements) {
    this.bus = bus;
    this.storage = storage;
    this.achievements = achievements;
    this.myths = [];
    this.completed = new Set();
    this.container = document.getElementById('myths-content');
  }

  async init() {
    this.myths = INLINE_MYTHS || [];

    const saved = this.storage.get('myths-completed');
    if (saved) this.completed = new Set(saved);

    this.bus.on('screen:change', ({ to }) => {
      if (to === 'myths') this.render();
    });
  }

  render() {
    if (!this.container) return;

    const progress = Math.round((this.completed.size / this.myths.length) * 100);

    this.container.innerHTML = `
      <div class="myths-intro">
        <p>Teste seus conhecimentos! Cada card apresenta uma afirmação. Você acha que é MITO ou FATO?</p>
        <div class="myths-progress">
          <div class="myths-progress__bar" style="width:${progress}%"></div>
          <span>${this.completed.size}/${this.myths.length}</span>
        </div>
      </div>
      <div class="myths-grid">
        ${this.myths.map((myth, idx) => this._renderCard(myth, idx)).join('')}
      </div>
    `;

    this.myths.forEach((myth, idx) => {
      const card = this.container.querySelector(`[data-myth="${myth.id}"]`);
      if (!card) return;

      const buttons = card.querySelectorAll('.myth-btn');
      buttons.forEach(btn => {
        btn.addEventListener('click', () => {
          const guess = btn.dataset.guess;
          this._reveal(card, myth, guess);
        });
      });
    });
  }

  _renderCard(myth, idx) {
    const isCompleted = this.completed.has(myth.id);
    const isRevealed = isCompleted;

    return `
      <div class="myth-card ${isRevealed ? 'myth-card--revealed' : ''}" data-myth="${myth.id}">
        <div class="myth-card__front">
          <span class="myth-card__icon">${myth.icon}</span>
          <p class="myth-card__statement">${myth.statement}</p>
          ${!isRevealed ? `
            <div class="myth-card__actions">
              <button class="myth-btn myth-btn--myth" data-guess="myth">MITO</button>
              <button class="myth-btn myth-btn--fact" data-guess="fact">FATO</button>
              <button class="myth-btn myth-btn--partial" data-guess="partial">PARCIAL</button>
            </div>
          ` : `
            <div class="myth-card__result">
              <span class="myth-result__label myth-result__label--${myth.answer}">${myth.answerLabel}</span>
            </div>
          `}
        </div>
        ${isRevealed ? `
          <div class="myth-card__back">
            <p>${myth.explanation}</p>
            <small>Referência: ${myth.references.join(', ')}</small>
          </div>
        ` : ''}
      </div>
    `;
  }

  _reveal(card, myth, guess) {
    this.completed.add(myth.id);
    this.storage.set('myths-completed', Array.from(this.completed));

    const isCorrect = this._isCorrect(guess, myth.answer);
    if (window.playSound) window.playSound(isCorrect ? 'correct' : 'wrong');

    card.classList.add('myth-card--revealed');
    card.innerHTML = `
      <div class="myth-card__front">
        <span class="myth-card__icon">${myth.icon}</span>
        <p class="myth-card__statement">${myth.statement}</p>
        <div class="myth-card__result">
          <span class="myth-result__label myth-result__label--${myth.answer}">${myth.answerLabel}</span>
          ${isCorrect ? '<span class="myth-result__badge">✅ Acertou!</span>' : '<span class="myth-result__badge">❌ Errou</span>'}
        </div>
      </div>
      <div class="myth-card__back">
        <p>${myth.explanation}</p>
        <small>Referência: ${myth.references.join(', ')}</small>
      </div>
    `;

    if (this.completed.size === this.myths.length) {
      this.achievements.check(this.storage.get('score') || {}, {
        mythsCompleted: this.completed
      });
    }

    this.render();
  }

  _isCorrect(guess, answer) {
    const map = {
      'myth': ['myth'],
      'fact': ['fact'],
      'partial': ['partial_myth', 'partial_fact']
    };
    return map[guess]?.includes(answer) || false;
  }
}
