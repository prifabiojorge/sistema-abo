import { INLINE_CLINICAL_CASES } from '../learning/learning-data.js';
import { nowIso } from '../learning/progress-utils.js';

export class CasesScreen {
  constructor(bus, storage) {
    this.bus = bus;
    this.storage = storage;
    this.container = document.getElementById('cases-content');
    this.activeCaseId = null;
  }

  init() {
    this.bus.on('screen:change', ({ to }) => {
      if (to === 'cases') this.render();
    });
  }

  render() {
    if (!this.container) return;
    const progress = this.storage.get('case-progress') || {};
    const activeCase = INLINE_CLINICAL_CASES.find(item => item.id === this.activeCaseId);

    this.container.innerHTML = activeCase ? this._renderCase(activeCase, progress) : `
      <div class="case-grid">
        ${INLINE_CLINICAL_CASES.map(item => `
          <article class="case-card ${progress[item.id]?.completed ? 'case-card--complete' : ''}">
            <span class="case-card__category">${item.category}</span>
            <h3>${item.title}</h3>
            <p>${item.patient}</p>
            <button class="btn btn--primary" data-case-open="${item.id}">${progress[item.id]?.completed ? 'Revisar caso' : 'Resolver caso'}</button>
          </article>
        `).join('')}
      </div>
    `;

    this.container.querySelectorAll('[data-case-open]').forEach(button => {
      button.addEventListener('click', () => {
        this.activeCaseId = button.dataset.caseOpen;
        this.render();
      });
    });
    this.container.querySelector('[data-case-back]')?.addEventListener('click', () => {
      this.activeCaseId = null;
      this.render();
    });
    this.container.querySelectorAll('[data-case-answer]').forEach(button => {
      button.addEventListener('click', () => this._answer(activeCase, button.dataset.caseAnswer));
    });
  }

  _renderCase(item, progress) {
    const completed = progress[item.id];
    return `
      <article class="case-detail">
        <button class="btn btn--ghost" data-case-back>← Todos os casos</button>
        <span class="case-card__category">${item.category}</span>
        <h3>${item.title}</h3>
        <p><strong>Paciente:</strong> ${item.patient}</p>
        <p><strong>Desafio:</strong> ${item.challenge}</p>
        <div class="case-options">
          ${item.options.map(option => `
            <button class="case-option ${completed?.selected === option.id ? 'case-option--selected' : ''}" data-case-answer="${option.id}" ${completed?.completed ? 'disabled' : ''}>
              ${option.text}
            </button>
          `).join('')}
        </div>
        ${completed?.completed ? `
          <div class="case-feedback ${completed.correct ? 'case-feedback--correct' : 'case-feedback--wrong'}">
            <strong>${completed.correct ? 'Correto' : 'Revise a decisão'}</strong>
            <p>${item.explanation}</p>
            <small>Referência: ${item.reference}</small>
          </div>
        ` : ''}
      </article>
    `;
  }

  _answer(item, selected) {
    const progress = this.storage.get('case-progress') || {};
    const correct = selected === item.correctAnswer;
    progress[item.id] = {
      completed: true,
      correct,
      selected,
      completedAt: nowIso()
    };
    this.storage.set('case-progress', progress);

    if (correct) {
      const score = this.storage.get('score') || {};
      score.total = (score.total || 0) + 50;
      score.lastUpdated = nowIso();
      this.storage.set('score', score);
    }

    this.bus.emit('toast:show', {
      type: correct ? 'success' : 'warning',
      message: correct ? '+50 pts: caso concluído corretamente.' : 'Caso concluído. Leia o feedback científico.'
    });
    this.render();
  }
}
