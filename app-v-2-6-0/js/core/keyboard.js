/**
 * Keyboard Manager — ABO Pai d'égua v2.6.0
 * Atalhos globais, busca e apresentação.
 */
export class KeyboardManager {
  constructor(eventBus, router) {
    this.bus = eventBus;
    this.router = router;
    this.shortcuts = new Map();
    this.modalOpen = false;
    this._registerDefaults();
  }

  init() {
    document.addEventListener('keydown', (e) => this._handleKeydown(e));
  }

  _registerDefaults() {
    // Navigation shortcuts
    this.shortcuts.set('1', { action: () => this._navigate('home'), desc: 'Ir para Início', category: 'Navegação' });
    this.shortcuts.set('2', { action: () => this._navigate('simulator'), desc: 'Ir para Simulador', category: 'Navegação' });
    this.shortcuts.set('3', { action: () => this._navigate('quiz'), desc: 'Ir para Quiz', category: 'Navegação' });
    this.shortcuts.set('4', { action: () => this._navigate('transfusion'), desc: 'Ir para Transfusão', category: 'Navegação' });
    this.shortcuts.set('5', { action: () => this._navigate('myths'), desc: 'Ir para Mitos vs. Fatos', category: 'Navegação' });
    this.shortcuts.set('6', { action: () => this._navigate('encyclopedia'), desc: 'Ir para Enciclopédia', category: 'Navegação' });
    this.shortcuts.set('7', { action: () => this._navigate('teacher'), desc: 'Painel do Professor', category: 'Navegação' });
    this.shortcuts.set('8', { action: () => this._navigate('dashboard'), desc: 'Meu Progresso', category: 'Navegação' });
    this.shortcuts.set('9', { action: () => this._navigate('trails'), desc: 'Trilhas de aprendizado', category: 'Navegação' });
    this.shortcuts.set('0', { action: () => this._navigate('cases'), desc: 'Casos clínicos', category: 'Navegação' });

    // System shortcuts
    this.shortcuts.set('?', { action: () => this._toggleHelpModal(), desc: 'Atalhos de teclado', category: 'Sistema' });
    this.shortcuts.set('Ctrl+K', { action: () => this.bus.emit('search:open'), desc: 'Busca global', category: 'Sistema' });
    this.shortcuts.set('Ctrl+J', { action: () => this._navigate('minigame'), desc: 'Hemácia Runner', category: 'Sistema' });
    this.shortcuts.set('q', { action: () => this.bus.emit('qr:open'), desc: 'Abrir QR Code', category: 'Professor' });
    this.shortcuts.set('t', { action: () => this._toggleTheme(), desc: 'Alternar tema', category: 'Sistema' });
    this.shortcuts.set('s', { action: () => this._navigate('settings'), desc: 'Abrir configurações', category: 'Sistema' });
    this.shortcuts.set('p', { action: () => this.bus.emit('presentation:toggle'), desc: 'Modo apresentação', category: 'Professor' });
    this.shortcuts.set('Escape', { action: () => this._handleEscape(), desc: 'Fechar modal / Voltar', category: 'Sistema' });
  }

  _handleKeydown(e) {
    // Não captura atalhos quando foco em input/textarea/select
    const tag = e.target?.tagName?.toLowerCase?.() || '';
    if (tag === 'input' || tag === 'textarea' || tag === 'select') return;

    if ((e.ctrlKey || e.metaKey) && (e.key || '').toLowerCase() === 'k') {
      e.preventDefault();
      this.bus.emit('search:open');
      return;
    }

    if ((e.ctrlKey || e.metaKey) && (e.key || '').toLowerCase() === 'j') {
      e.preventDefault();
      this._navigate('minigame');
      return;
    }

    // Não captura outros atalhos com Ctrl/Cmd
    if (e.ctrlKey || e.metaKey) return;

    const key = e.key;
    const shortcut = this.shortcuts.get(key);

    if (shortcut) {
      e.preventDefault();
      shortcut.action();
    }
  }

  _navigate(screenId) {
    if (this.router) {
      this.router.navigate(screenId);
    } else {
      window.location.hash = screenId;
    }
    // Toast sutil de feedback
    if (this.bus) {
      const screenNames = {
        home: 'Início', simulator: 'Simulador', quiz: 'Quiz',
        transfusion: 'Transfusão', myths: 'Mitos vs. Fatos',
        encyclopedia: 'Enciclopédia', teacher: 'Professor', settings: 'Configurações',
        dashboard: 'Meu Progresso', trails: 'Trilhas', cases: 'Casos Clínicos',
        history: 'Histórico', minigame: 'Hemácia Runner'
      };
      this.bus.emit('toast:show', { type: 'info', message: `Tela: ${screenNames[screenId] || screenId}`, duration: 1500 });
    }
  }

  _toggleTheme() {
    if (window.ABO && window.ABO.theme) {
      window.ABO.theme.toggle();
    }
  }

  _handleEscape() {
    if (this.modalOpen) {
      this._closeHelpModal();
    } else {
      this._navigate('home');
    }
  }

  _toggleHelpModal() {
    if (this.modalOpen) {
      this._closeHelpModal();
    } else {
      this._openHelpModal();
    }
  }

  _openHelpModal() {
    this.modalOpen = true;

    const overlay = document.createElement('div');
    overlay.id = 'keyboard-help-overlay';
    overlay.className = 'modal-overlay';
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) this._closeHelpModal();
    });

    const modal = document.createElement('div');
    modal.className = 'modal modal--keyboard';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-labelledby', 'keyboard-help-title');
    modal.setAttribute('aria-modal', 'true');

    // Group shortcuts by category
    const categories = {};
    for (const [key, shortcut] of this.shortcuts) {
      if (!categories[shortcut.category]) categories[shortcut.category] = [];
      categories[shortcut.category].push({ key, desc: shortcut.desc });
    }

    let contentHtml = '';
    for (const [category, items] of Object.entries(categories)) {
      contentHtml += `<h4 class="modal__category">${category}</h4>`;
      contentHtml += '<div class="shortcut-list">';
      for (const item of items) {
        const displayKey = item.key === 'Escape' ? 'Esc' : item.key === '?' ? '?' : item.key.toUpperCase();
        contentHtml += `
          <div class="shortcut-item">
            <kbd class="shortcut-key">${displayKey}</kbd>
            <span class="shortcut-desc">${item.desc}</span>
          </div>
        `;
      }
      contentHtml += '</div>';
    }

    modal.innerHTML = `
      <header class="modal__header">
        <h3 id="keyboard-help-title">⌨️ Atalhos de Teclado</h3>
        <button class="modal__close btn btn--ghost" aria-label="Fechar">&times;</button>
      </header>
      <div class="modal__body">
        ${contentHtml}
      </div>
    `;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // Focus trap
    const closeBtn = modal.querySelector('.modal__close');
    if (closeBtn) {
      closeBtn.focus();
      closeBtn.addEventListener('click', () => this._closeHelpModal());
    }
  }

  _closeHelpModal() {
    this.modalOpen = false;
    const overlay = document.getElementById('keyboard-help-overlay');
    if (overlay) {
      overlay.classList.add('modal-overlay--exit');
      setTimeout(() => overlay.remove(), 200);
    }
  }
}
