import { INLINE_ENCYCLOPEDIA } from '../data-inline.js';
import { EmptyState, SkeletonManager } from '../ui/skeleton.js';

export class EncyclopediaScreen {
  constructor(bus, storage, achievements) {
    this.bus = bus;
    this.storage = storage;
    this.achievements = achievements;
    this.entries = [];
    this.visited = new Set();
    this.bookmarks = new Set();
    this.container = document.getElementById('encyclopedia-content');
    this.currentEntry = null;
    this.renderTimer = null;
  }

  async init() {
    this.entries = INLINE_ENCYCLOPEDIA || [];

    const saved = this.storage.get('encyclopedia-visited');
    if (saved) this.visited = new Set(saved);
    const savedBookmarks = this.storage.get('bookmarks');
    if (savedBookmarks) this.bookmarks = new Set(savedBookmarks);

    this.bus.on('screen:change', ({ to }) => {
      if (to === 'encyclopedia') {
        if (this.renderTimer) clearTimeout(this.renderTimer);
        SkeletonManager.renderGrid(this.container, 4);
        this.renderTimer = setTimeout(() => this.render(), 300);
      } else if (this.renderTimer) {
        clearTimeout(this.renderTimer);
        this.renderTimer = null;
      }
    });
  }

  render() {
    if (!this.container) return;

    if (this.entries.length === 0) {
      EmptyState.render(this.container, {
        icon: '📖',
        title: 'Enciclopédia sem verbetes',
        desc: 'Restaure os dados do app para consultar os conceitos de imunohematologia.',
        ctaLabel: 'Voltar ao início',
        ctaHref: '#home'
      });
      return;
    }

    this.container.innerHTML = `
      <div class="encyclopedia-layout">
        <aside class="encyclopedia-sidebar">
          <input type="text" class="encyclopedia-search" placeholder="🔍 Buscar verbete..." id="ency-search">
          <label class="favorite-filter"><input type="checkbox" id="ency-favorites-only"> Ver apenas favoritos (${this.bookmarks.size})</label>
          <nav class="encyclopedia-nav" id="ency-nav">
            ${this._renderNavList(this.entries)}
          </nav>
        </aside>
        <article class="encyclopedia-article" id="ency-article">
          ${EmptyState.markup({
            icon: '📖',
            title: 'Escolha um verbete',
            desc: 'Use a lista ou a busca para abrir o primeiro conceito.',
            compact: true
          })}
        </article>
      </div>
    `;

    const searchInput = document.getElementById('ency-search');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this._filterEntries(e.target.value);
      });
    }
    document.getElementById('ency-favorites-only')?.addEventListener('change', () => this._filterEntries(searchInput?.value || ''));

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
      return EmptyState.markup({
        icon: '🔎',
        title: 'Nenhum verbete encontrado',
        desc: 'Tente buscar por antígeno, Rh, plasma ou transfusão.',
        compact: true
      });
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
    const favoritesOnly = document.getElementById('ency-favorites-only')?.checked;
    const filtered = this.entries.filter(e =>
      (!favoritesOnly || this.bookmarks.has(e.id)) &&
      (
        e.title.toLowerCase().includes(lower) ||
        e.shortDescription.toLowerCase().includes(lower) ||
        e.keyTerms.some(t => t.toLowerCase().includes(lower))
      )
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
          <button class="btn btn--secondary" id="btn-bookmark-entry">${this.bookmarks.has(entry.id) ? '★ Favorito' : '☆ Favoritar'}</button>
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

      document.getElementById('btn-bookmark-entry')?.addEventListener('click', () => this._toggleBookmark(entry.id));
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

  _toggleBookmark(id) {
    if (this.bookmarks.has(id)) {
      this.bookmarks.delete(id);
      this.bus.emit('toast:show', { type: 'info', message: 'Favorito removido.' });
    } else {
      this.bookmarks.add(id);
      this.bus.emit('toast:show', { type: 'success', message: 'Verbete favoritado.' });
    }
    this.storage.set('bookmarks', Array.from(this.bookmarks));
    this._showEntry(id);
  }
}
