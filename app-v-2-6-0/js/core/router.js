export class Router {
  constructor(eventBus) {
    this.bus = eventBus;
    this.screens = new Map();
    this.currentScreen = 'home';
    this.transitioning = false;
  }

  init() {
    document.querySelectorAll('[data-screen]').forEach(el => {
      this.screens.set(el.dataset.screen, el);
    });

    window.addEventListener('hashchange', () => this.handleRoute());
    document.addEventListener('click', (e) => {
      const navEl = e.target.closest('[data-nav]');
      if (navEl) {
        e.preventDefault();
        const target = navEl.dataset.nav || navEl.getAttribute('href')?.replace('#', '');
        if (target) this.navigate(target);
      }
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

    if (this.transitioning) return;

    const from = this.currentScreen;

    // Quick exit if same screen
    if (from === screenId && this.screens.get(screenId)?.classList.contains('screen--active')) {
      return;
    }

    // Apply page transition (v1.3.0 — Task 8.5)
    const oldScreen = this.screens.get(from);
    const newScreen = this.screens.get(screenId);

    // Hide all screens first (no animation on old)
    this.screens.forEach((el, id) => {
      if (id !== screenId) {
        el.hidden = true;
        el.classList.remove('screen--active', 'screen-enter');
      }
    });

    // Show and animate new screen
    newScreen.hidden = false;
    newScreen.classList.add('screen--active');

    // Apply entrance animation
    newScreen.classList.remove('screen-enter');
    void newScreen.offsetHeight; // Force reflow
    newScreen.classList.add('screen-enter');

    this.currentScreen = screenId;
    this.bus.emit('screen:change', { from, to: screenId });

    if (updateHash) {
      window.location.hash = screenId;
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  getCurrentScreen() {
    return this.currentScreen;
  }
}
