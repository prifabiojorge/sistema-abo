export class AnimationLoop {
  constructor() {
    this.running = false;
    this.lastTime = 0;
    this.callbacks = [];
    this.debug = false;
    this.fps = 0;
    this.frameCount = 0;
    this.fpsTime = 0;
  }

  start() {
    if (this.running) return;
    this.running = true;
    this.lastTime = performance.now();
    this._tick = this._tick.bind(this);
    requestAnimationFrame(this._tick);
  }

  stop() {
    this.running = false;
  }

  add(callback) {
    this.callbacks.push(callback);
  }

  remove(callback) {
    this.callbacks = this.callbacks.filter(cb => cb !== callback);
  }

  _tick(timestamp) {
    if (!this.running) return;

    const dt = Math.min((timestamp - this.lastTime) / 1000, 0.05);
    this.lastTime = timestamp;

    this.frameCount++;
    this.fpsTime += dt;
    if (this.fpsTime >= 1) {
      this.fps = this.frameCount;
      this.frameCount = 0;
      this.fpsTime = 0;
      if (this.debug) {
        console.log(`[AnimationLoop] FPS: ${this.fps}`);
      }
    }

    for (const cb of this.callbacks) {
      cb(dt);
    }

    requestAnimationFrame(this._tick);
  }
}
