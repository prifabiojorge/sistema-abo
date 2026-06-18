export class Router {
  constructor(eventBus) {
    this.bus = eventBus;
    this.screens = new Map();
    this.currentScreen = 'home';
  }

  init() {
    document.querySelectorAll('[data-screen]').forEach(el => {
      this.screens.set(el.dataset.screen, el);
    });

    window.addEventListener('hashchange', () => this.handleRoute());
    document.querySelectorAll('[data-nav]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const target = el.dataset.nav || el.getAttribute('href')?.replace('#', '');
        if (target) this.navigate(target);
      });
    });

    this.handleRoute();
  }

  handleRoute() {
    const hash = window.location.hash.replace('#', '') || 'home';
    this.navigate(hash, false);
  }

  navigate(screenId, updateHash = true) {
    if (!this.screens.has(screenId)) {
      console.warn(`[Router] Tela "${screenId}" não encontrada`);
      return;
    }

    this.screens.forEach((el, id) => {
      const isActive = id === screenId;
      el.hidden = !isActive;
      el.classList.toggle('screen--active', isActive);
    });

    this.currentScreen = screenId;
    this.bus.emit('screen:change', { from: this.currentScreen, to: screenId });

    if (updateHash) {
      window.location.hash = screenId;
    }
  }

  getCurrentScreen() {
    return this.currentScreen;
  }
}
