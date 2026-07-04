import { Particle } from './particle.js';

export class ParticleSystem {
  constructor(well) {
    this.well = well;
    this.particles = [];
    this.pool = [];
    this.maxParticles = 50;
  }

  spawn(count) {
    const toSpawn = Math.min(count, this.maxParticles - this.particles.length);
    for (let i = 0; i < toSpawn; i++) {
      let p = this.pool.pop();
      if (!p) {
        p = new Particle(this.well);
      } else {
        this._resetParticle(p);
      }
      this.particles.push(p);
    }
  }

  clear() {
    this.pool.push(...this.particles);
    this.particles = [];
  }

  update(dt) {
    for (const p of this.particles) {
      p.update(dt);
    }
  }

  draw(ctx) {
    for (const p of this.particles) {
      p.draw(ctx);
    }
  }

  _resetParticle(p) {
    const angle = Math.random() * Math.PI * 2;
    const dist = Math.random() * this.well.radius * 0.6;
    p.x = this.well.centerX + Math.cos(angle) * dist;
    p.y = this.well.centerY + Math.sin(angle) * dist;
    p.vx = (Math.random() - 0.5);
    p.vy = (Math.random() - 0.5);
    p.opacity = 0;
    p.clusterId = null;
    p.color = p.baseColor;
    p.well = this.well;
  }
}
