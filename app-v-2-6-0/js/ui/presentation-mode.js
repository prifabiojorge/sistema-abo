export class PresentationMode {
  constructor(bus, router, storage) {
    this.bus = bus;
    this.router = router;
    this.storage = storage;
    this.active = false;
    this.index = 0;
    this.sequenceKey = 'presentation-settings';
    this.defaultSequence = ['home', 'simulator', 'quiz', 'encyclopedia', 'cases', 'dashboard'];
  }

  init() {
    this.bus.on('presentation:toggle', () => this.toggle());
    document.addEventListener('keydown', (event) => {
      if (!this.active) return;
      if (event.key === 'Escape') {
        event.preventDefault();
        this.stop();
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        this.next();
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        this.prev();
      }
    });
  }

  toggle() {
    if (this.active) this.stop();
    else this.start();
  }

  start() {
    if (!this._teacherAllowed()) {
      this.router.navigate('teacher');
      this.bus.emit('toast:show', { type: 'warning', message: 'Entre no Painel do Professor antes de iniciar apresentação.' });
      return;
    }
    this.active = true;
    this.index = 0;
    document.body.classList.add('presentation-mode');
    this._ensureHud();
    this._go();
    this.bus.emit('toast:show', { type: 'info', message: 'Modo apresentação iniciado. Use ←/→ e Esc.' });
  }

  stop() {
    this.active = false;
    document.body.classList.remove('presentation-mode');
    document.getElementById('presentation-hud')?.remove();
    this.bus.emit('toast:show', { type: 'info', message: 'Modo apresentação encerrado.' });
  }

  next() {
    const sequence = this._sequence();
    this.index = Math.min(this.index + 1, sequence.length - 1);
    this._go();
  }

  prev() {
    this.index = Math.max(this.index - 1, 0);
    this._go();
  }

  _go() {
    const sequence = this._sequence();
    this.router.navigate(sequence[this.index] || 'home');
    this._updateHud();
  }

  _sequence() {
    const saved = this.storage.get(this.sequenceKey);
    return saved?.sequence?.length ? saved.sequence : this.defaultSequence;
  }

  _teacherAllowed() {
    return !!window.ABO?.teacher?.authenticated;
  }

  _ensureHud() {
    if (document.getElementById('presentation-hud')) return;
    const hud = document.createElement('div');
    hud.id = 'presentation-hud';
    hud.className = 'presentation-hud';
    document.body.appendChild(hud);
  }

  _updateHud() {
    const hud = document.getElementById('presentation-hud');
    if (!hud) return;
    const sequence = this._sequence();
    hud.textContent = `${this.index + 1}/${sequence.length} · ${sequence[this.index]}`;
  }
}
