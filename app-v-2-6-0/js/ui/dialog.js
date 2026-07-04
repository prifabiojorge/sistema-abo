/**
 * Confirm Dialog — ABO Sim v1.3.0
 * Modal acessivel para substituir confirm() nativo em acoes destrutivas.
 */
export class ConfirmDialog {
  static confirm({
    title = 'Confirmar acao',
    message = '',
    confirmText = 'Confirmar',
    cancelText = 'Cancelar',
    danger = false
  } = {}) {
    if (typeof document === 'undefined') return Promise.resolve(false);

    return new Promise((resolve) => {
      const overlay = document.createElement('div');
      overlay.className = 'modal-overlay';
      overlay.setAttribute('role', 'presentation');

      const modal = document.createElement('div');
      modal.className = 'modal modal--confirm';
      modal.setAttribute('role', 'dialog');
      modal.setAttribute('aria-modal', 'true');
      modal.setAttribute('aria-labelledby', 'confirm-dialog-title');
      modal.setAttribute('aria-describedby', 'confirm-dialog-message');

      modal.innerHTML = `
        <header class="modal__header">
          <h3 id="confirm-dialog-title">${title}</h3>
          <button class="modal__close btn btn--ghost" type="button" aria-label="Fechar">&times;</button>
        </header>
        <div class="modal__body">
          <p id="confirm-dialog-message" class="modal__message">${message}</p>
          <div class="modal__actions">
            <button class="btn btn--ghost modal__cancel" type="button">${cancelText}</button>
            <button class="btn ${danger ? 'btn--destructive' : 'btn--primary'} modal__confirm" type="button">${confirmText}</button>
          </div>
        </div>
      `;

      const close = (value) => {
        overlay.classList.add('modal-overlay--exit');
        document.removeEventListener('keydown', onKeydown);
        setTimeout(() => overlay.remove(), 200);
        resolve(value);
      };

      const onKeydown = (event) => {
        if (event.key === 'Escape') close(false);
        if (event.key !== 'Tab') return;

        const focusable = modal.querySelectorAll('button');
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!first || !last) return;

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      };

      overlay.addEventListener('click', (event) => {
        if (event.target === overlay) close(false);
      });

      overlay.appendChild(modal);
      document.body.appendChild(overlay);

      modal.querySelector('.modal__close')?.addEventListener('click', () => close(false));
      modal.querySelector('.modal__cancel')?.addEventListener('click', () => close(false));
      modal.querySelector('.modal__confirm')?.addEventListener('click', () => close(true));
      document.addEventListener('keydown', onKeydown);
      modal.querySelector('.modal__cancel')?.focus();
    });
  }
}
