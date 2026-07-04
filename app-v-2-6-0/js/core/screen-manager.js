import { SkeletonManager } from '../ui/skeleton.js';

/**
 * Screen Manager — ABO Sim v1.3.0
 * Lazy init para telas pesadas mantendo bundle unico e compatibilidade file://.
 */
export class ScreenManager {
  constructor(eventBus) {
    this.bus = eventBus;
    this.registry = new Map();
    this.initialized = new Set();
    this.initializing = new Map();
    this.ready = false;
  }

  register(name, config) {
    this.registry.set(name, {
      init: config.init,
      enter: config.enter || null,
      skeletonTarget: config.skeletonTarget || null,
      skeleton: config.skeleton || 'card'
    });
  }

  init() {
    if (this.ready) return;
    this.ready = true;
    this.bus.on('screen:change', ({ from, to }) => {
      this.ensure(to, { from }).catch((error) => {
        console.error(`[ScreenManager] Falha ao inicializar "${to}":`, error);
        this.bus.emit('toast:show', {
          type: 'error',
          message: `Não foi possível abrir a tela ${to}.`
        });
      });
    });
  }

  async ensure(name, context = {}) {
    const config = this.registry.get(name);
    if (!config) return false;

    if (this.initialized.has(name)) return true;
    if (this.initializing.has(name)) return this.initializing.get(name);

    const initPromise = this._initialize(name, config, context);
    this.initializing.set(name, initPromise);
    return initPromise;
  }

  getInitializedScreens() {
    return Array.from(this.initialized);
  }

  async _initialize(name, config, context) {
    const startedAt = performance.now();
    const skeletonTimer = setTimeout(() => this._renderSkeleton(name, config), 50);

    try {
      await config.init();
      this.initialized.add(name);

      if (config.enter) {
        config.enter(context);
      }

      this.bus.emit('screen:init', {
        screen: name,
        duration: Math.round(performance.now() - startedAt)
      });

      return true;
    } finally {
      clearTimeout(skeletonTimer);
      this.initializing.delete(name);
    }
  }

  _renderSkeleton(name, config) {
    const target = config.skeletonTarget
      ? document.querySelector(config.skeletonTarget)
      : document.querySelector(`#screen-${name}`);

    if (!target) return;

    if (config.skeleton === 'quiz') {
      SkeletonManager.renderQuiz(target);
    } else if (config.skeleton === 'grid') {
      SkeletonManager.renderGrid(target, 4);
    } else {
      SkeletonManager.render(target, { lines: 4, hasCard: true });
    }
  }
}
