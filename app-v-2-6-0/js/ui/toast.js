/**
 * Toast Manager — ABO Sim v1.3.0
 * Sistema de notificações não-intrusivas (4 níveis).
 * Integra com EventBus: 'toast:show', 'toast:dismiss'.
 */
export class ToastManager {
  constructor(eventBus) {
    this.bus = eventBus;
    this.container = null;
    this.toasts = [];
    this.maxVisible = 4;
    this.defaultDuration = 3500;
  }

  init() {
    this.container = document.getElementById('toast-container');
    if (!this.container) {
      this.container = document.createElement('div');
      this.container.id = 'toast-container';
      this.container.setAttribute('role', 'region');
      this.container.setAttribute('aria-live', 'polite');
      this.container.setAttribute('aria-label', 'Notificações');
      document.body.appendChild(this.container);
    }

    if (this.bus) {
      this.bus.on('toast:show', (data) => this._show(data));
      this.bus.on('toast:dismiss', () => this._dismissOldest());
    }

    // Esc fecha o toast mais antigo
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.toasts.length > 0) {
        this._dismissOldest();
      }
    });
  }

  success(message, duration) {
    this._show({ type: 'success', message, duration });
  }

  error(message, duration) {
    this._show({ type: 'error', message, duration });
  }

  info(message, duration) {
    this._show({ type: 'info', message, duration });
  }

  warning(message, duration) {
    this._show({ type: 'warning', message, duration });
  }

  achievement(title, description) {
    this._show({
      type: 'achievement',
      message: `<strong>${title}</strong><br>${description}`,
      duration: 4500
    });
  }

  _show({ type = 'info', message = '', duration = null }) {
    if (!this.container) return;

    // FIFO: remover mais antigo se exceder max
    while (this.toasts.length >= this.maxVisible) {
      this._dismissOldest();
    }

    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    toast.setAttribute('role', type === 'error' ? 'alert' : 'status');

    const icons = {
      success: '✅',
      error: '❌',
      info: 'ℹ️',
      warning: '⚠️',
      achievement: '🏆'
    };

    toast.innerHTML = `
      <span class="toast__icon" aria-hidden="true">${icons[type] || 'ℹ️'}</span>
      <div class="toast__content">${message}</div>
      <button class="toast__close" aria-label="Fechar notificação">&times;</button>
    `;

    // Pause on hover
    let timeout = null;
    const startTimer = () => {
      timeout = setTimeout(() => this._dismiss(toast), duration || this.defaultDuration);
    };

    toast.addEventListener('mouseenter', () => {
      if (timeout) clearTimeout(timeout);
    });
    toast.addEventListener('mouseleave', () => {
      startTimer();
    });

    // Close button
    const closeBtn = toast.querySelector('.toast__close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this._dismiss(toast));
    }

    this.container.appendChild(toast);
    this.toasts.push(toast);

    // Force reflow for animation
    toast.offsetHeight;
    toast.classList.add('toast--visible');

    startTimer();
  }

  _dismiss(toast) {
    if (!toast || !toast.parentNode) return;
    toast.classList.remove('toast--visible');
    toast.classList.add('toast--exit');
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
      this.toasts = this.toasts.filter(t => t !== toast);
    }, 250);
  }

  _dismissOldest() {
    if (this.toasts.length > 0) {
      this._dismiss(this.toasts[0]);
    }
  }
}
