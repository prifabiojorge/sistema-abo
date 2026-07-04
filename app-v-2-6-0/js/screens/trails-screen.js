import { INLINE_TRAILS } from '../learning/learning-data.js';
import { getProgressMetrics } from '../learning/progress-utils.js';

export class TrailsScreen {
  constructor(bus, storage) {
    this.bus = bus;
    this.storage = storage;
    this.container = document.getElementById('trails-content');
    this.activeKey = 'active-trail';
  }

  init() {
    this.bus.on('screen:change', ({ to }) => {
      if (to === 'trails') this.render();
    });
  }

  render() {
    if (!this.container) return;
    const activeId = this.storage.get(this.activeKey) || 'beginner';
    const metrics = getProgressMetrics(this.storage);

    this.container.innerHTML = `
      <div class="trail-grid">
        ${INLINE_TRAILS.map(trail => this._renderTrail(trail, trail.id === activeId, metrics)).join('')}
      </div>
    `;

    this.container.querySelectorAll('[data-trail-select]').forEach(button => {
      button.addEventListener('click', () => {
        this.storage.set(this.activeKey, button.dataset.trailSelect);
        this.bus.emit('toast:show', { type: 'success', message: 'Trilha ativa atualizada.' });
        this.render();
      });
    });
    this.container.querySelectorAll('[data-nav-step]').forEach(button => {
      button.addEventListener('click', () => window.ABO?.router?.navigate(button.dataset.navStep));
    });
  }

  _renderTrail(trail, active, metrics) {
    const completed = trail.steps.filter(step => this._valueFor(step.metric, metrics) >= step.target).length;
    const pct = Math.round((completed / trail.steps.length) * 100);
    return `
      <article class="trail-card ${active ? 'trail-card--active' : ''}">
        <header class="trail-card__header">
          <span class="trail-card__badge">${trail.badge}</span>
          <h3>${trail.title}</h3>
          <p>${trail.desc}</p>
        </header>
        <div class="progress-track"><div class="progress-track__bar bar-w-${Math.round(pct / 10) * 10}"></div></div>
        <strong>${completed}/${trail.steps.length} passos</strong>
        <ol class="trail-steps">
          ${trail.steps.map(step => {
            const value = this._valueFor(step.metric, metrics);
            const done = value >= step.target;
            return `
              <li class="${done ? 'is-complete' : ''}">
                <span>${done ? '✓' : '○'}</span>
                <button class="link-button" data-nav-step="${step.route}">${step.label}</button>
                <small>${Math.min(value, step.target)}/${step.target}</small>
              </li>
            `;
          }).join('')}
        </ol>
        <button class="btn ${active ? 'btn--secondary' : 'btn--primary'}" data-trail-select="${trail.id}">${active ? 'Trilha ativa' : 'Ativar trilha'}</button>
      </article>
    `;
  }

  _valueFor(metric, metrics) {
    const map = {
      encyclopediaVisited: metrics.encyclopediaVisited.length,
      mythsCompleted: metrics.mythsCompleted.length,
      bookmarks: metrics.bookmarks.length,
      comparisons: metrics.comparisonsCount
    };
    return map[metric] ?? metrics[metric] ?? 0;
  }
}
