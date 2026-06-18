export class ThemeManager {
  constructor(storage) {
    this.storage = storage;
    this.key = 'theme';
    this.toggleBtn = document.getElementById('theme-toggle');
  }

  init() {
    const saved = this.storage.get(this.key);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = saved || (prefersDark ? 'dark' : 'light');
    this.setTheme(theme);

    if (this.toggleBtn) {
      this.toggleBtn.addEventListener('click', () => this.toggle());
    }
  }

  setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    this.storage.set(this.key, theme);
    if (this.toggleBtn) {
      this.toggleBtn.textContent = theme === 'dark' ? '🌙' : '☀️';
      this.toggleBtn.setAttribute('aria-label',
        theme === 'dark' ? 'Alternar para tema claro' : 'Alternar para tema escuro'
      );
    }
  }

  toggle() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    this.setTheme(current === 'dark' ? 'light' : 'dark');
  }
}
