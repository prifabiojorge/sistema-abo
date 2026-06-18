/**
 * Audio Engine — ABO Sim
 * Gera sons proceduralmente via Web Audio API (sem arquivos externos).
 * Inspirado em sons satisfatórios de jogos casuais/slots.
 */

class AudioEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.masterGain = null;
    this.init();
  }

  init() {
    try {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = 0.25;
      this.masterGain.connect(this.ctx.destination);
    } catch (e) {
      console.warn('[Audio] Web Audio API não suportada');
      this.enabled = false;
    }
  }

  _ensureContext() {
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  _osc(freq, type, duration, startTime, gainValue = 0.3) {
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, startTime);
    gain.gain.setValueAtTime(gainValue, startTime);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(startTime);
    osc.stop(startTime + duration);
  }

  _noise(duration, startTime, gainValue = 0.15) {
    const bufferSize = this.ctx.sampleRate * duration;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 800;
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(gainValue, startTime);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);
    noise.start(startTime);
    noise.stop(startTime + duration);
  }

  play(name) {
    if (!this.enabled || !this.ctx) return;
    this._ensureContext();
    const now = this.ctx.currentTime;

    switch (name) {
      case 'click':
        // Tick curto e seco (feedback tátil)
        this._osc(1200, 'square', 0.05, now, 0.08);
        this._osc(1800, 'sine', 0.03, now, 0.06);
        break;

      case 'hover':
        // Tick sutil de hover
        this._osc(800, 'sine', 0.03, now, 0.04);
        break;

      case 'drop':
        // Som líquido de gota/pingar sangue
        this._osc(600, 'sine', 0.08, now, 0.3);
        this._osc(400, 'sine', 0.12, now + 0.02, 0.2);
        this._noise(0.06, now + 0.01, 0.1);
        break;

      case 'agglutinate':
        // Partículas grudando — clusters de notas curtas ascendentes
        [0, 0.04, 0.08, 0.12].forEach((t, i) => {
          this._osc(300 + i * 120, 'triangle', 0.06, now + t, 0.15);
        });
        break;

      case 'correct':
        // Acerto — arpeggio brilhante ascendente (estilo slots)
        [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
          this._osc(freq, 'sine', 0.15, now + i * 0.08, 0.2);
          this._osc(freq * 2, 'triangle', 0.1, now + i * 0.08, 0.08);
        });
        break;

      case 'wrong':
        // Erro — nota grave descendente curta
        this._osc(200, 'sawtooth', 0.25, now, 0.15);
        this._osc(150, 'sine', 0.3, now + 0.1, 0.12);
        break;

      case 'achievement':
        // Conquista — fanfarra de bônus (3 notas brilhantes)
        this._osc(880, 'sine', 0.18, now, 0.25);
        this._osc(1108.73, 'sine', 0.18, now + 0.12, 0.25);
        this._osc(1318.51, 'sine', 0.25, now + 0.24, 0.3);
        this._osc(1760, 'triangle', 0.2, now + 0.36, 0.15);
        break;

      case 'complete':
        // Quiz/simulação completa — sequência de celebração
        const notes = [523.25, 587.33, 659.25, 783.99, 880, 1046.50, 1174.66, 1318.51];
        notes.forEach((freq, i) => {
          this._osc(freq, 'sine', 0.2, now + i * 0.1, 0.18);
          if (i % 2 === 0) {
            this._osc(freq * 1.5, 'triangle', 0.1, now + i * 0.1, 0.08);
          }
        });
        break;

      case 'tick':
        // Contador/click metálico
        this._osc(2000, 'square', 0.02, now, 0.05);
        break;
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  }
}

const audio = new AudioEngine();

// Atalhos globais
window.playSound = (name) => audio.play(name);
window.toggleSound = () => audio.toggle();

export { audio };
