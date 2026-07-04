import { INLINE_QUESTIONS, INLINE_SCENARIOS, INLINE_MYTHS, INLINE_ENCYCLOPEDIA } from '../data-inline.js';
import { INLINE_CLINICAL_CASES, INLINE_GLOSSARY, INLINE_TRAILS } from '../learning/learning-data.js';

export class SearchPalette {
  constructor(bus, router, storage) {
    this.bus = bus;
    this.router = router;
    this.storage = storage;
    this.historyKey = 'search-history';
    this.overlay = null;
    this.input = null;
    this.results = [];
    this.activeIndex = 0;
    this.index = [];
  }

  init() {
    this.index = this._buildIndex();
    this.bus.on('search:open', () => this.open());
  }

  open() {
    if (this.overlay) return;

    this.overlay = document.createElement('div');
    this.overlay.className = 'modal-overlay search-palette-overlay';
    this.overlay.addEventListener('click', (event) => {
      if (event.target === this.overlay) this.close();
    });

    const history = this.storage.get(this.historyKey) || [];
    this.overlay.innerHTML = `
      <div class="modal search-palette" role="dialog" aria-modal="true" aria-labelledby="search-title">
        <header class="modal__header">
          <h3 id="search-title">Buscar no ABO Pai d'égua</h3>
          <button class="modal__close btn btn--ghost" aria-label="Fechar">&times;</button>
        </header>
        <div class="search-palette__body">
          <input id="search-palette-input" class="input search-palette__input" role="combobox" aria-expanded="true" aria-controls="search-results" aria-activedescendant="" placeholder="Digite termo, tela, questão, caso..." autocomplete="off">
          <div class="search-palette__hint">Use setas para navegar, Enter para abrir e Esc para fechar.</div>
          ${history.length ? `<div class="search-palette__recent">Recentes: ${history.map(item => `<button class="search-chip" data-query="${item}">${item}</button>`).join('')}</div>` : ''}
          <div id="search-results" class="search-results" role="listbox"></div>
        </div>
      </div>
    `;

    document.body.appendChild(this.overlay);
    this.input = document.getElementById('search-palette-input');
    this.input.addEventListener('input', () => this._search(this.input.value));
    this.input.addEventListener('keydown', (event) => this._handleKeydown(event));
    this.overlay.querySelector('.modal__close')?.addEventListener('click', () => this.close());
    this.overlay.querySelectorAll('.search-chip').forEach(button => {
      button.addEventListener('click', () => {
        this.input.value = button.dataset.query;
        this._search(button.dataset.query);
      });
    });
    this._search('');
    this.input.focus();
  }

  close() {
    if (!this.overlay) return;
    this.overlay.remove();
    this.overlay = null;
    this.input = null;
  }

  _handleKeydown(event) {
    if (event.key === 'Escape') {
      event.preventDefault();
      this.close();
      return;
    }
    if (!this.results.length) return;
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.activeIndex = Math.min(this.activeIndex + 1, this.results.length - 1);
      this._renderResults();
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.activeIndex = Math.max(this.activeIndex - 1, 0);
      this._renderResults();
    }
    if (event.key === 'Enter') {
      event.preventDefault();
      this._select(this.results[this.activeIndex]);
    }
  }

  _search(query) {
    const normalized = this._normalize(query);
    const pool = normalized
      ? this.index.map(item => ({ item, score: this._score(this._normalize(item.title + ' ' + item.subtitle + ' ' + item.keywords), normalized) }))
        .filter(hit => hit.score > 0)
        .sort((a, b) => b.score - a.score)
        .map(hit => hit.item)
      : this.index.filter(item => item.priority).sort((a, b) => b.priority - a.priority);

    this.results = pool.slice(0, 24);
    this.activeIndex = 0;
    this._renderResults();
  }

  _renderResults() {
    const container = document.getElementById('search-results');
    if (!container) return;
    if (!this.results.length) {
      container.innerHTML = '<div class="empty-state empty-state--compact"><span class="empty-state__icon" aria-hidden="true">🔎</span><h3 class="empty-state__title">Nada encontrado</h3><p class="empty-state__desc">Tente buscar por antígeno, Rh, transfusão, quiz ou caso clínico.</p></div>';
      return;
    }

    container.innerHTML = this.results.map((result, index) => `
      <button class="search-result ${index === this.activeIndex ? 'search-result--active' : ''}" id="search-result-${index}" role="option" aria-selected="${index === this.activeIndex}" data-index="${index}">
        <span class="search-result__icon" aria-hidden="true">${result.icon}</span>
        <span class="search-result__body">
          <strong>${result.title}</strong>
          <small>${result.type} · ${result.subtitle}</small>
        </span>
      </button>
    `).join('');

    this.input?.setAttribute('aria-activedescendant', `search-result-${this.activeIndex}`);
    container.querySelectorAll('.search-result').forEach(button => {
      button.addEventListener('click', () => this._select(this.results[Number(button.dataset.index)]));
    });
  }

  _select(result) {
    if (!result) return;
    const history = [this.input?.value || result.title, ...(this.storage.get(this.historyKey) || [])]
      .filter(Boolean)
      .filter((item, index, arr) => arr.indexOf(item) === index)
      .slice(0, 5);
    this.storage.set(this.historyKey, history);
    this.close();
    if (result.route) this.router.navigate(result.route);
    if (result.event) this.bus.emit(result.event, result.payload || {});
  }

  _buildIndex() {
    const nav = [
      ['Início', 'Tela inicial', 'home', '🏠'],
      ['Simulador', 'Tipagem sanguínea e comparação', 'simulator', '🔬'],
      ['Quiz', 'Perguntas sobre ABO/Rh', 'quiz', '❓'],
      ['Transfusão', 'Cenários de compatibilidade', 'transfusion', '🚨'],
      ['Mitos vs. Fatos', 'Revisão de afirmações populares', 'myths', '🧬'],
      ['Enciclopédia', 'Verbetes de imunohematologia', 'encyclopedia', '📖'],
      ['Histórico', 'Timeline de tipagens', 'history', '🕒'],
      ['Trilhas', 'Aprendizado guiado', 'trails', '🧭'],
      ['Casos Clínicos', 'Aprendizagem baseada em casos', 'cases', '🏥'],
      ['Meu Progresso', 'Dashboard do aluno', 'dashboard', '📊'],
      ['Hemácia Runner', 'Mini-game retrô de anticorpos e hemácias', 'minigame', '🎮'],
      ['Painel do Professor', 'Ferramentas docentes', 'teacher', '👨‍🏫']
    ].map(([title, subtitle, route, icon], priority) => ({ title, subtitle, route, icon, type: 'Tela', keywords: title + ' ' + subtitle, priority: 100 - priority }));

    const teacherTools = [
      {
        title: 'QR Code',
        subtitle: 'Abrir QR Code para Chromebooks',
        event: 'qr:open',
        icon: '📱',
        type: 'Professor',
        keywords: 'qr code chromebook github pages acesso alunos imprimir projetar',
        priority: 98
      }
    ];

    return [
      ...nav,
      ...teacherTools,
      ...INLINE_ENCYCLOPEDIA.map(item => ({ title: item.title, subtitle: item.shortDescription, route: 'encyclopedia', icon: item.icon || '📖', type: 'Verbete', keywords: [...(item.keyTerms || []), item.category].join(' ') })),
      ...INLINE_MYTHS.map(item => ({ title: item.statement, subtitle: item.answerLabel, route: 'myths', icon: item.icon || '🧬', type: 'Mito/Fato', keywords: item.explanation })),
      ...INLINE_SCENARIOS.map(item => ({ title: item.patient?.situation || item.id, subtitle: `Paciente ${item.patient?.bloodType || ''}`, route: 'transfusion', icon: '🚨', type: 'Transfusão', keywords: item.explanation })),
      ...INLINE_CLINICAL_CASES.map(item => ({ title: item.title, subtitle: item.challenge, route: 'cases', icon: '🏥', type: 'Caso clínico', keywords: item.category + ' ' + item.explanation })),
      ...INLINE_QUESTIONS.map(item => ({ title: item.question, subtitle: `${item.category} · ${item.difficulty}`, route: 'quiz', icon: '❓', type: 'Questão', keywords: item.explanation })),
      ...INLINE_GLOSSARY.map(item => ({ title: item.term, subtitle: item.definition, route: 'encyclopedia', icon: '🔖', type: 'Glossário', keywords: (item.relatedTerms || []).join(' ') })),
      ...INLINE_TRAILS.map(item => ({ title: item.title, subtitle: item.desc, route: 'trails', icon: '🧭', type: 'Trilha', keywords: item.steps.map(step => step.label).join(' ') }))
    ];
  }

  _normalize(text = '') {
    return String(text).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  _score(text, query) {
    if (text.includes(query)) return 100 + query.length;
    let score = 0;
    let last = -1;
    for (const char of query) {
      const index = text.indexOf(char, last + 1);
      if (index === -1) return 0;
      score += last >= 0 && index === last + 1 ? 8 : 2;
      last = index;
    }
    return score;
  }
}
