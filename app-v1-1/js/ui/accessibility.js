export class AccessibilityManager {
  constructor(storage) {
    this.storage = storage;
    this.key = 'high-contrast';
    this.toggleBtn = document.getElementById('accessibility-toggle');
  }

  init() {
    const enabled = this.storage.get(this.key) === true;
    if (enabled) this.setHighContrast(true);

    if (this.toggleBtn) {
      this.toggleBtn.addEventListener('click', () => this.toggle());
    }
  }

  setHighContrast(enabled) {
    document.documentElement.classList.toggle('high-contrast', enabled);
    this.storage.set(this.key, enabled);
  }

  toggle() {
    const isEnabled = document.documentElement.classList.contains('high-contrast');
    this.setHighContrast(!isEnabled);
  }
}
