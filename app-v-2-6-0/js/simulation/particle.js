import { randomRange } from '../utils/random.js';

export class Particle {
  constructor(well) {
    this.well = well;
    const angle = Math.random() * Math.PI * 2;
    const dist = Math.random() * well.radius * 0.6;
    this.x = well.centerX + Math.cos(angle) * dist;
    this.y = well.centerY + Math.sin(angle) * dist;
    this.vx = randomRange(-0.5, 0.5);
    this.vy = randomRange(-0.5, 0.5);
    this.radius = randomRange(5, 8);
    this.baseColor = 'hsl(0, 65%, 40%)';
    this.clusterColor = 'hsl(0, 70%, 28%)';
    this.color = this.baseColor;
    this.opacity = 0;
    this.targetOpacity = randomRange(0.55, 0.75);
    this.clusterId = null;
    this.mass = 1;
    this.friction = 0.98;
    this.MAX_SPEED = 1.5;
  }

  update(dt) {
    if (this.opacity < this.targetOpacity) {
      this.opacity = Math.min(this.opacity + dt * 2, this.targetOpacity);
    }

    if (this.clusterId !== null) {
      this._updateClustered(dt);
    } else {
      this._updateFree(dt);
    }

    this._checkWallCollision();
  }

  _updateFree(dt) {
    this.vx += randomRange(-0.1, 0.1);
    this.vy += randomRange(-0.1, 0.1);
    this.vx *= this.friction;
    this.vy *= this.friction;

    const speed = Math.hypot(this.vx, this.vy);
    if (speed > this.MAX_SPEED) {
      this.vx = (this.vx / speed) * this.MAX_SPEED;
      this.vy = (this.vy / speed) * this.MAX_SPEED;
    }

    this.x += this.vx * dt * 60;
    this.y += this.vy * dt * 60;
  }

  _updateClustered(dt) {
    this.vx += randomRange(-0.03, 0.03);
    this.vy += randomRange(-0.03, 0.03);
    this.vx *= 0.92;
    this.vy *= 0.92;
    this.x += this.vx * dt * 60;
    this.y += this.vy * dt * 60;
  }

  _checkWallCollision() {
    const well = this.well;
    const dx = this.x - well.centerX;
    const dy = this.y - well.centerY;
    const dist = Math.hypot(dx, dy);

    if (dist + this.radius > well.radius) {
      const nx = dx / dist;
      const ny = dy / dist;
      const dot = this.vx * nx + this.vy * ny;
      this.vx -= 2 * dot * nx;
      this.vy -= 2 * dot * ny;
      this.x = well.centerX + nx * (well.radius - this.radius - 1);
      this.y = well.centerY + ny * (well.radius - this.radius - 1);
    }
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.globalAlpha = this.opacity;
    ctx.fill();
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.15)';
    ctx.lineWidth = 0.5;
    ctx.stroke();
    ctx.globalAlpha = 1;
  }
}
