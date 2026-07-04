/**
 * Tour Manager — ABO Pai d'égua v2.6.0
 * Tour guiado de onboarding para primeiro uso (Task 8.9).
 */
export class TourManager {
  constructor(storage, eventBus) {
    this.storage = storage;
    this.bus = eventBus;
    this.key = 'onboarded';
    this.steps = [];
    this.currentStep = 0;
    this.overlay = null;
    this.active = false;
  }

  init() {
    this.steps = [
      {
        title: "Bem-vindo ao ABO Pai d'égua! 🧪",
        text: 'Este é um simulador interativo de tipagem sanguínea ABO/Rh. Vamos fazer um tour rápido!',
        target: null, // modal central
        position: 'center'
      },
      {
        title: 'Navegação',
        text: 'Use o menu no topo para alternar entre telas. Você pode trocar o tema claro/escuro e acessar configurações.',
        target: '.navbar',
        position: 'bottom'
      },
      {
        title: 'Simulação de Tipagem',
        text: 'Comece aqui! Pingue sangue nos poços com reagentes Anti-A, Anti-B e Anti-D para observar as reações de aglutinação.',
        target: '.hero__cta',
        position: 'bottom'
      },
      {
        title: 'Explore os Módulos',
        text: 'Quiz, Mitos vs. Fatos, Enciclopédia e Cenários de Transfusão — tudo para aprender imunohematologia!',
        target: '.feature-grid',
        position: 'top'
      },
      {
        title: 'Atalhos de Teclado',
        text: 'Pressione ? a qualquer momento para ver todos os atalhos disponíveis. Use 1-8 para navegar entre telas.',
        target: null,
        position: 'center'
      },
      {
        title: 'Pronto! 🎉',
        text: 'Você está pronto para começar. Clique em "Começar Simulação" para fazer sua primeira tipagem!',
        target: null,
        position: 'center'
      }
    ];

    // Verificar se já fez onboarding
    const onboarded = this.storage.get(this.key);
    if (!onboarded) {
      // Aguardar um pouco para a UI carregar
      setTimeout(() => this.start(), 800);
    }
  }

  start() {
    this.currentStep = 0;
    this.active = true;
    this._render();
  }

  restart() {
    this.storage.remove(this.key);
    this.start();
  }

  _render() {
    if (this.currentStep >= this.steps.length) {
      this._finish();
      return;
    }

    const step = this.steps[this.currentStep];
    this._removeOverlay();

    // Create overlay
    this.overlay = document.createElement('div');
    this.overlay.className = 'tour-overlay';
    this.overlay.setAttribute('role', 'dialog');
    this.overlay.setAttribute('aria-labelledby', 'tour-title');
    this.overlay.setAttribute('aria-modal', 'true');

    // Tooltip
    const tooltip = document.createElement('div');
    tooltip.className = `tour-tooltip tour-tooltip--${step.position}`;

    tooltip.innerHTML = `
      <h4 id="tour-title" class="tour-tooltip__title">${step.title}</h4>
      <p class="tour-tooltip__text">${step.text}</p>
      <div class="tour-tooltip__footer">
        <span class="tour-tooltip__counter">${this.currentStep + 1} / ${this.steps.length}</span>
        <div class="tour-tooltip__actions">
          <button class="btn btn--ghost tour-btn-skip">Pular tour</button>
          ${this.currentStep > 0 ? '<button class="btn btn--secondary tour-btn-prev">← Anterior</button>' : ''}
          <button class="btn btn--primary tour-btn-next">${this.currentStep === this.steps.length - 1 ? 'Finalizar' : 'Próximo →'}</button>
        </div>
      </div>
    `;

    document.body.appendChild(this.overlay);
    document.body.appendChild(tooltip);

    // Events
    tooltip.querySelector('.tour-btn-next').addEventListener('click', () => {
      this.currentStep++;
      this._render();
    });

    tooltip.querySelector('.tour-btn-skip').addEventListener('click', () => {
      this._finish();
    });

    const prevBtn = tooltip.querySelector('.tour-btn-prev');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        this.currentStep--;
        this._render();
      });
    }

    // Focus next button
    tooltip.querySelector('.tour-btn-next').focus();
  }

  _finish() {
    this._removeOverlay();
    this.active = false;
    this.storage.set(this.key, true);
    if (this.bus) {
      this.bus.emit('toast:show', { type: 'success', message: 'Tour concluído! Boas simulações! 🧪' });
    }
  }

  _removeOverlay() {
    if (this.overlay) {
      this.overlay.remove();
      this.overlay = null;
    }
    const tooltip = document.querySelector('.tour-tooltip');
    if (tooltip) tooltip.remove();
  }
}
