import { ParticleSystem } from './particle-system.js';
import { AgglutinationEngine } from './agglutination.js';
import { shouldAgglutinate } from '../utils/blood-logic.js';

export class ReagentWell {
  constructor(canvasId, type, label) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.type = type;
    this.label = label;
    this.state = 'empty';
    this.centerX = this.canvas.width / 2;
    this.centerY = this.canvas.height / 2;
    this.radius = Math.min(this.centerX, this.centerY) - 4;
    this.particleSystem = new ParticleSystem(this);
    this.agglutinationEngine = new AgglutinationEngine();
    this.bloodType = null;
  }

  addBlood(bloodType) {
    if (this.state !== 'empty') return;
    this.bloodType = bloodType;
    this.state = 'filled';
    this.particleSystem.spawn(40);

    if (shouldAgglutinate(bloodType, this.type)) {
      setTimeout(() => {
        this.agglutinationEngine.start(this.particleSystem.particles);
      }, 500);
    }
  }

  reset() {
    this.state = 'empty';
    this.bloodType = null;
    this.particleSystem.clear();
    this.agglutinationEngine.reset();
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawBackground() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    ctx.beginPath();
    ctx.arc(this.centerX, this.centerY, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--bg-tertiary').trim() || '#222838';
    ctx.fill();

    let borderColor = '#444';
    if (this.type === 'anti-a') borderColor = getComputedStyle(document.documentElement).getPropertyValue('--reagent-anti-a').trim() || '#2e7dd6';
    if (this.type === 'anti-b') borderColor = getComputedStyle(document.documentElement).getPropertyValue('--reagent-anti-b').trim() || '#e6b81a';
    if (this.type === 'anti-d') borderColor = getComputedStyle(document.documentElement).getPropertyValue('--reagent-anti-d').trim() || '#22a861';

    ctx.strokeStyle = borderColor;
    ctx.lineWidth = 3;
    ctx.stroke();
  }

  update(dt) {
    if (this.state === 'empty') return;
    if (this.agglutinationEngine.active) {
      this.agglutinationEngine.update(dt, this.particleSystem.particles);
    }
    this.drawBackground();
    this.particleSystem.update(dt);
    this.particleSystem.draw(this.ctx);
  }
}
