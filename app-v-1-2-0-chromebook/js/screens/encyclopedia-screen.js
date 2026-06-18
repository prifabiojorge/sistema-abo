import { INLINE_ENCYCLOPEDIA } from '../data-inline.js';

export class EncyclopediaScreen {
  constructor(bus, storage, achievements) {
    this.bus = bus;
    this.storage = storage;
    this.achievements = achievements;
    this.entries = [];
    this.visited = new Set();
    this.container = document.getElementById('encyclopedia-content');
    this.currentEntry = null;
  }

  async init() {
    this.entries = INLINE_ENCYCLOPEDIA || [];

    const saved = this.storage.get('encyclopedia-visited');
    if (saved) this.visited = new Set(saved);

    this.bus.on('screen:change', ({ to }) => {
      if (to === 'encyclopedia') this.render();
    });
  }

  render() {
    if (!this.container) return;

    this.container.innerHTML = `
      <div class="encyclopedia-layout">
        <aside class="encyclopedia-sidebar">
          <input type="text" class="encyclopedia-search" placeholder="🔍 Buscar verbete..." id="ency-search">
          <nav class="encyclopedia-nav" id="ency-nav">
            ${this._renderNavList(this.entries)}
          </nav>
        </aside>
        <article class="encyclopedia-article" id="ency-article">
          <div class="encyclopedia-placeholder">
            <span class="encyclopedia-placeholder__icon">📖</span>
            <p>Selecione um verbete para ler</p>
          </div>
        </article>
      </div>
    `;

    const searchInput = document.getElementById('ency-search');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this._filterEntries(e.target.value);
      });
    }

    document.querySelectorAll('.encyclopedia-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const id = link.dataset.id;
        this._showEntry(id);
      });
    });
  }

  _renderNavList(entries) {
    if (entries.length === 0) {
      return '<p class="encyclopedia-empty">Nenhum verbete encontrado</p>';
    }
    return entries.map(entry => `
      <a href="#" class="encyclopedia-link ${this.visited.has(entry.id) ? 'encyclopedia-link--visited' : ''}" data-id="${entry.id}">
        <span class="encyclopedia-link__icon">${entry.icon}</span>
        <div>
          <div class="encyclopedia-link__title">${entry.title}</div>
          <div class="encyclopedia-link__desc">${entry.shortDescription}</div>
        </div>
      </a>
    `).join('');
  }

  _filterEntries(query) {
    const nav = document.getElementById('ency-nav');
    if (!nav) return;
    const lower = query.toLowerCase();
    const filtered = this.entries.filter(e =>
      e.title.toLowerCase().includes(lower) ||
      e.shortDescription.toLowerCase().includes(lower) ||
      e.keyTerms.some(t => t.toLowerCase().includes(lower))
    );
    nav.innerHTML = this._renderNavList(filtered);

    document.querySelectorAll('.encyclopedia-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        this._showEntry(link.dataset.id);
      });
    });
  }

  _showEntry(id) {
    const entry = this.entries.find(e => e.id === id);
    if (!entry) return;

    this.currentEntry = entry;
    this.visited.add(id);
    this.storage.set('encyclopedia-visited', Array.from(this.visited));

    const article = document.getElementById('ency-article');
    if (article) {
      article.innerHTML = `
        <header class="encyclopedia-article__header">
          <span class="encyclopedia-article__icon">${entry.icon}</span>
          <h2>${entry.title}</h2>
          <span class="encyclopedia-article__category">${entry.category}</span>
        </header>
        <div class="encyclopedia-article__content">
          <p class="encyclopedia-article__lead">${entry.shortDescription}</p>
          <p>${entry.content}</p>
        </div>
        <div class="encyclopedia-article__terms">
          <strong>Termos-chave:</strong> ${entry.keyTerms.join(', ')}
        </div>
        ${entry.relatedEntries.length > 0 ? `
          <div class="encyclopedia-article__related">
            <strong>Ver também:</strong>
            ${entry.relatedEntries.map(relId => {
              const rel = this.entries.find(e => e.id === relId);
              return rel ? `<a href="#" class="encyclopedia-related-link" data-id="${rel.id}">${rel.title}</a>` : '';
            }).filter(Boolean).join(', ')}
          </div>
        ` : ''}
      `;

      article.querySelectorAll('.encyclopedia-related-link').forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          this._showEntry(link.dataset.id);
        });
      });
    }

    document.querySelectorAll('.encyclopedia-link').forEach(link => {
      if (link.dataset.id === id) {
        link.classList.add('encyclopedia-link--visited');
      }
    });

    if (this.visited.size >= 12) {
      this.achievements.check(this.storage.get('score') || {}, {
        encyclopediaVisited: this.visited
      });
    }
  }
}
