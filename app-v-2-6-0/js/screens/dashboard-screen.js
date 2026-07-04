import { EmptyState } from '../ui/skeleton.js';
import { getProgressMetrics, formatDateTime } from '../learning/progress-utils.js';
import { INLINE_CLINICAL_CASES, INLINE_TRAILS } from '../learning/learning-data.js';

export class DashboardScreen {
  constructor(bus, storage) {
    this.bus = bus;
    this.storage = storage;
    this.container = document.getElementById('dashboard-content');
  }

  init() {
    this.bus.on('screen:change', ({ to }) => {
      if (to === 'dashboard') this.render();
    });
  }

  render() {
    if (!this.container) return;
    const metrics = getProgressMetrics(this.storage);
    const hasData = metrics.typingsCompleted || metrics.quizzesTaken || metrics.history.length || metrics.casesCompleted || metrics.encyclopediaVisited.length;

    if (!hasData) {
      EmptyState.render(this.container, {
        icon: '📊',
        title: 'Seu painel ainda está vazio',
        desc: 'Faça uma simulação, responda um quiz ou leia um verbete para começar.',
        ctaLabel: 'Começar simulação',
        ctaHref: '#simulator'
      });
      return;
    }

    const avgQuiz = metrics.quizHistory.length
      ? Math.round(metrics.quizHistory.reduce((sum, item) => sum + item.percentage, 0) / metrics.quizHistory.length)
      : 0;
    const activeTrail = this.storage.get('active-trail') || 'beginner';
    const trail = INLINE_TRAILS.find(item => item.id === activeTrail);
    const trailDone = trail ? trail.steps.filter(step => this._metricValue(step.metric, metrics) >= step.target).length : 0;

    this.container.innerHTML = `
      <div class="dashboard-grid">
        ${this._stat('Tipagens', metrics.history.length || metrics.typingsCompleted, '🩸', 'Histórico de simulações', 'history')}
        ${this._stat('Quiz médio', `${avgQuiz}%`, '❓', `${metrics.quizzesTaken} quiz(es) finalizados`, 'quiz')}
        ${this._stat('Casos', `${metrics.casesCompleted}/${INLINE_CLINICAL_CASES.length}`, '🏥', 'Casos clínicos concluídos', 'cases')}
        ${this._stat('Favoritos', metrics.bookmarks.length, '★', 'Verbetes salvos', 'encyclopedia')}
      </div>
      <section class="dashboard-section">
        <h3>Trilha ativa</h3>
        <p>${trail ? `${trail.title}: ${trailDone}/${trail.steps.length} passos` : 'Nenhuma trilha ativa.'}</p>
        <div class="progress-track"><div class="progress-track__bar bar-w-${trail ? Math.round((trailDone / trail.steps.length) * 10) * 10 : 0}"></div></div>
        <a href="#trails" class="btn btn--secondary" data-nav="trails">Abrir trilhas</a>
      </section>
      <section class="dashboard-section">
        <h3>Sugestão de estudo</h3>
        <p>${this._suggestion(metrics, avgQuiz)}</p>
      </section>
      <section class="dashboard-section">
        <h3>Atividade recente</h3>
        ${metrics.history.slice(-5).reverse().map(item => `<p><strong>${item.bloodType}</strong> em ${formatDateTime(item.timestamp)}</p>`).join('') || '<p>Nenhuma tipagem recente.</p>'}
      </section>
    `;
  }

  _stat(title, value, icon, desc, route) {
    return `
      <a class="dashboard-card" href="#${route}" data-nav="${route}">
        <span aria-hidden="true">${icon}</span>
        <strong>${value}</strong>
        <h3>${title}</h3>
        <p>${desc}</p>
      </a>
    `;
  }

  _metricValue(metric, metrics) {
    const map = {
      encyclopediaVisited: metrics.encyclopediaVisited.length,
      mythsCompleted: metrics.mythsCompleted.length,
      bookmarks: metrics.bookmarks.length,
      comparisons: metrics.comparisonsCount
    };
    return map[metric] ?? metrics[metric] ?? 0;
  }

  _suggestion(metrics, avgQuiz) {
    if (!metrics.encyclopediaVisited.length) return 'Comece pela Enciclopédia para fixar os termos básicos antes do quiz.';
    if (!metrics.history.length) return 'Faça uma tipagem no simulador para conectar teoria e reação visual.';
    if (avgQuiz && avgQuiz < 70) return 'Revise Rh e compatibilidade transfusional antes do próximo quiz.';
    if (!metrics.casesCompleted) return 'Experimente um caso clínico para aplicar o conteúdo em uma situação prática.';
    return 'Ótimo progresso. Use a comparação lado a lado para revisar diferenças finas entre tipos.';
  }
}
