/**
 * Hemácia Runner — Mini-game retrô educativo
 *
 * O jogador é uma hemácia com tipo sanguíneo aleatório.
 * Anticorpos incompatíveis devem ser desviados (pular).
 * Anticorpos compatíveis passam sem causar dano (bônus).
 * Quanto mais longe, mais rápido fica.
 * Game-over explica POR QUE houve aglutinação.
 */

const MG_BLOOD_TYPES = [
  { name: 'A+',  antigens: ['A', 'D'] },
  { name: 'A-',  antigens: ['A'] },
  { name: 'B+',  antigens: ['B', 'D'] },
  { name: 'B-',  antigens: ['B'] },
  { name: 'AB+', antigens: ['A', 'B', 'D'] },
  { name: 'AB-', antigens: ['A', 'B'] },
  { name: 'O+',  antigens: ['D'] }
  // O- fica fora do runner: sem antigenos A/B/D, nenhum anticorpo seria perigoso.
];

const MG_ANTIBODY_DEFS = [
  { type: 'Anti-A', targetsAntigen: 'A', color: '#3b82f6', hue: 220 },
  { type: 'Anti-B', targetsAntigen: 'B', color: '#fbbf24', hue: 45  },
  { type: 'Anti-D', targetsAntigen: 'D', color: '#22c55e', hue: 142 }
];

const MG_CONFIG = {
  gravity: 0.55,
  jumpForce: -10.5,
  initialSpeed: 5.2,
  maxSpeed: 24,
  speedIncrement: 0.009,
  difficultyRampDistance: 2600,
  groundY: 0.78,
  playerX: 80,
  playerRadius: 18,
  obstacleWidth: 24,
  obstacleHeight: 36,
  startMinSpawnInterval: 44,
  startMaxSpawnInterval: 92,
  minSpawnInterval: 16,
  maxSpawnInterval: 42,
  burstStartDistance: 650,
  maxBurstChance: 0.58,
  maxTripleChance: 0.22,
  burstMinGap: 54,
  burstMaxGap: 104,
  collectibleChance: 0.25,
  collectibleRadius: 10
};

export class MinigameScreen {
  constructor(bus, storage) {
    this.bus = bus;
    this.storage = storage;
    this.container = document.getElementById('minigame-content');
    this.canvas = null;
    this.ctx = null;
    this.raf = null;
    this.state = 'menu'; // menu | playing | gameover
    this.highScore = this.storage.get('hemacia-highscore') || 0;
    this._boundKeyDown = this._onKeyDown.bind(this);
    this._boundKeyUp = this._onKeyUp.bind(this);
    this._boundTouch = this._onTouch.bind(this);
    this._boundResize = this._onResize.bind(this);
    this._lastDangerSoundFrame = -999;
    this._lastComboSoundFrame = -999;
  }

  init() {
    this.bus.on('screen:change', ({ to, from }) => {
      if (to === 'minigame') {
        this.enter();
      }
      if (from === 'minigame') {
        this.leave();
      }
    });
  }

  enter() {
    this.render();
    this._startGameLoop();
  }

  leave() {
    this._stopGameLoop();
    window.removeEventListener('resize', this._boundResize);
  }

  render() {
    if (!this.container) return;
    this._stopGameLoop();
    this.container.innerHTML = `
      <div class="minigame-wrapper">
        <canvas id="hemacia-canvas" class="minigame-canvas" width="800" height="400"></canvas>
        <div class="minigame-controls">
          <p class="minigame-hint">⌨️ <strong>Espaço</strong> ou <strong>↑</strong> para pular · 📱 Toque na tela</p>
          <div class="minigame-stats">
            <span class="minigame-highscore">🏆 Recorde: <strong>${this.highScore}</strong></span>
          </div>
        </div>
      </div>
    `;
    this.canvas = document.getElementById('hemacia-canvas');
    this.ctx = this.canvas.getContext('2d');
    this._resizeCanvas();
    window.removeEventListener('resize', this._boundResize);
    window.addEventListener('resize', this._boundResize);
  }

  /* ------------------------------------------------------------------ */
  /*  Game state                                                         */
  /* ------------------------------------------------------------------ */

  _resetGame() {
    const bt = MG_BLOOD_TYPES[Math.floor(Math.random() * MG_BLOOD_TYPES.length)];
    this.bloodType = bt;
    this.player = {
      x: MG_CONFIG.playerX,
      y: 0,
      vy: 0,
      radius: MG_CONFIG.playerRadius,
      grounded: true,
      squash: 1
    };
    this.obstacles = [];
    this.collectibles = [];
    this.particles = [];
    this.bgStars = this._generateBgCells(40);
    this.score = 0;
    this.bonusScore = 0;
    this.distance = 0;
    this.difficulty = 0;
    this.difficultyLevel = 1;
    this.speed = MG_CONFIG.initialSpeed;
    this.spawnTimer = MG_CONFIG.startMinSpawnInterval;
    this.frameCount = 0;
    this.hitObstacle = null;
    this.shakeFrames = 0;
    this.flashFrames = 0;
    this.groundY = 0;
    this._lastDangerSoundFrame = -999;
    this._lastComboSoundFrame = -999;
    this.state = 'playing';
    this._playSound('runner-start');
  }

  /* ------------------------------------------------------------------ */
  /*  Main loop                                                          */
  /* ------------------------------------------------------------------ */

  _startGameLoop() {
    if (!this.canvas || !this.ctx) return;
    if (this.raf) cancelAnimationFrame(this.raf);
    document.removeEventListener('keydown', this._boundKeyDown);
    document.removeEventListener('keyup', this._boundKeyUp);
    this.canvas.removeEventListener('pointerdown', this._boundTouch);
    document.addEventListener('keydown', this._boundKeyDown);
    document.addEventListener('keyup', this._boundKeyUp);
    this.canvas.addEventListener('pointerdown', this._boundTouch);
    this.state = 'menu';
    this._loop();
  }

  _stopGameLoop() {
    if (this.raf) cancelAnimationFrame(this.raf);
    this.raf = null;
    document.removeEventListener('keydown', this._boundKeyDown);
    document.removeEventListener('keyup', this._boundKeyUp);
    this.canvas?.removeEventListener('pointerdown', this._boundTouch);
  }

  _loop() {
    this.raf = requestAnimationFrame(() => this._loop());
    if (!this.ctx || !this.canvas) return;

    const W = this.canvas.width;
    const H = this.canvas.height;
    this.groundY = H * MG_CONFIG.groundY;

    if (this.state === 'menu') {
      this._drawMenu(W, H);
    } else if (this.state === 'playing') {
      this._update(W, H);
      this._draw(W, H);
    } else if (this.state === 'gameover') {
      this._draw(W, H);
      this._drawGameOver(W, H);
    }
  }

  /* ------------------------------------------------------------------ */
  /*  Input                                                              */
  /* ------------------------------------------------------------------ */

  _onKeyDown(e) {
    if (e.code === 'Space' || e.code === 'ArrowUp') {
      e.preventDefault();
      this._handleJump();
    }
  }

  _onKeyUp() {}

  _onTouch(e) {
    e.preventDefault();
    this._handleJump();
  }

  _handleJump() {
    if (this.state === 'menu') {
      this._resetGame();
      return;
    }
    if (this.state === 'gameover') {
      this.state = 'menu';
      return;
    }
    if (this.state === 'playing' && this.player.grounded) {
      this.player.vy = MG_CONFIG.jumpForce;
      this.player.grounded = false;
      this.player.squash = 0.7;
      this._playSound('runner-jump');
    }
  }

  /* ------------------------------------------------------------------ */
  /*  Update                                                             */
  /* ------------------------------------------------------------------ */

  _update(W, H) {
    this.frameCount++;
    this.distance++;
    this._updateDifficulty();
    this.score = Math.floor(this.distance / 8) + this.bonusScore;
    this.speed = Math.min(MG_CONFIG.maxSpeed, MG_CONFIG.initialSpeed + this.distance * MG_CONFIG.speedIncrement);

    // Player physics
    const p = this.player;
    p.vy += MG_CONFIG.gravity;
    p.y += p.vy;
    const floor = this.groundY - p.radius;
    if (p.y >= floor) {
      p.y = floor;
      p.vy = 0;
      p.grounded = true;
      p.squash += (1 - p.squash) * 0.3;
    } else {
      p.grounded = false;
    }

    // Spawn obstacles
    this.spawnTimer--;
    if (this.spawnTimer <= 0) {
      this._spawnObstacle(W, H);
      this.spawnTimer = this._nextSpawnInterval();
    }

    // Move obstacles
    for (let i = this.obstacles.length - 1; i >= 0; i--) {
      const o = this.obstacles[i];
      o.x -= this.speed;
      if (o.x + o.w < 0) {
        // Passed safely
        if (!o.hit && o.isDangerous) {
          this._addBonus(5); // bonus for dodging dangerous ones
          this._playSound('runner-clear');
        }
        this.obstacles.splice(i, 1);
        continue;
      }
      // Collision
      if (!o.hit && this._collides(p, o)) {
        if (o.isDangerous) {
          this._gameOver(o);
          return;
        } else {
          // Compatible antibody = bonus!
          o.hit = true;
          this._addBonus(10);
          this.flashFrames = 8;
          this._spawnParticles(o.x, o.y, o.color, 6);
          this._playSound('runner-safe');
        }
      }
    }

    // Move collectibles
    for (let i = this.collectibles.length - 1; i >= 0; i--) {
      const c = this.collectibles[i];
      c.x -= this.speed;
      c.bobPhase += 0.08;
      if (c.x + c.r < 0) {
        this.collectibles.splice(i, 1);
        continue;
      }
      const dx = p.x - c.x;
      const dy = p.y - (c.y + Math.sin(c.bobPhase) * 6);
      if (Math.sqrt(dx * dx + dy * dy) < p.radius + c.r) {
        this._addBonus(15);
        this.flashFrames = 6;
        this._spawnParticles(c.x, c.y, '#ef4444', 8);
        this.collectibles.splice(i, 1);
        this._playSound('runner-collect');
      }
    }

    // Update particles
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const pt = this.particles[i];
      pt.x += pt.vx;
      pt.y += pt.vy;
      pt.vy += 0.15;
      pt.life--;
      if (pt.life <= 0) this.particles.splice(i, 1);
    }

    // Move background cells
    for (const star of this.bgStars) {
      star.x -= this.speed * star.depth;
      if (star.x < -10) {
        star.x = W + 10 + Math.random() * 40;
        star.y = Math.random() * this.groundY;
      }
    }

    // Shake decay
    if (this.shakeFrames > 0) this.shakeFrames--;
    if (this.flashFrames > 0) this.flashFrames--;
  }

  _updateDifficulty() {
    const previousLevel = this.difficultyLevel || 1;
    const progress = Math.min(1, this.distance / MG_CONFIG.difficultyRampDistance);
    this.difficulty = 1 - Math.pow(1 - progress, 2);
    this.difficultyLevel = 1 + Math.floor(this.difficulty * 5);
    if (this.state === 'playing' && this.frameCount > 10 && this.difficultyLevel > previousLevel) {
      this._playSound('runner-level');
    }
  }

  _nextSpawnInterval() {
    const min = Math.round(this._lerp(MG_CONFIG.startMinSpawnInterval, MG_CONFIG.minSpawnInterval, this.difficulty));
    const max = Math.round(this._lerp(MG_CONFIG.startMaxSpawnInterval, MG_CONFIG.maxSpawnInterval, this.difficulty));
    return min + Math.floor(Math.random() * Math.max(1, max - min + 1));
  }

  _spawnObstacle(W, H) {
    this._pushObstacle(W + 20, this._randomAntibodyDef());

    const burstChance = this.distance < MG_CONFIG.burstStartDistance ? 0 : this.difficulty * MG_CONFIG.maxBurstChance;
    if (Math.random() < burstChance) {
      const gap = MG_CONFIG.burstMinGap + Math.random() * (MG_CONFIG.burstMaxGap - MG_CONFIG.burstMinGap);
      this._pushObstacle(W + 20 + gap, this._randomAntibodyDef());
      this._playComboCue();

      const tripleChance = Math.max(0, this.difficulty - 0.45) * MG_CONFIG.maxTripleChance;
      if (Math.random() < tripleChance) {
        const secondGap = MG_CONFIG.burstMinGap + Math.random() * (MG_CONFIG.burstMaxGap - MG_CONFIG.burstMinGap);
        this._pushObstacle(W + 20 + gap + secondGap, this._randomAntibodyDef());
        this._playComboCue();
      }
    }

    const collectibleChance = MG_CONFIG.collectibleChance + this.difficulty * 0.08;
    if (Math.random() < collectibleChance) {
      this.collectibles.push({
        x: W + 120 + Math.random() * 100,
        y: this.groundY - 60 - Math.random() * 80,
        r: MG_CONFIG.collectibleRadius,
        bobPhase: Math.random() * Math.PI * 2
      });
    }
  }

  _pushObstacle(x, def) {
    const isDangerous = this.bloodType.antigens.includes(def.targetsAntigen);

    this.obstacles.push({
      x,
      y: this.groundY - MG_CONFIG.obstacleHeight,
      w: MG_CONFIG.obstacleWidth,
      h: MG_CONFIG.obstacleHeight,
      type: def.type,
      color: def.color,
      hue: def.hue,
      isDangerous,
      hit: false
    });

    if (isDangerous && this.difficulty > 0.45 && this.frameCount - this._lastDangerSoundFrame > 120) {
      this._lastDangerSoundFrame = this.frameCount;
      this._playSound('runner-danger');
    }
  }

  _randomAntibodyDef() {
    return MG_ANTIBODY_DEFS[Math.floor(Math.random() * MG_ANTIBODY_DEFS.length)];
  }

  _addBonus(points) {
    this.bonusScore += points;
    this.score = Math.floor(this.distance / 8) + this.bonusScore;
  }

  _lerp(from, to, amount) {
    return from + (to - from) * amount;
  }

  _collides(player, obstacle) {
    // Circle vs rectangle
    const cx = player.x;
    const cy = player.y;
    const r = player.radius * 0.75; // slight forgiveness
    const rx = obstacle.x;
    const ry = obstacle.y;
    const rw = obstacle.w;
    const rh = obstacle.h;
    const closestX = Math.max(rx, Math.min(cx, rx + rw));
    const closestY = Math.max(ry, Math.min(cy, ry + rh));
    const dx = cx - closestX;
    const dy = cy - closestY;
    return (dx * dx + dy * dy) < (r * r);
  }

  _gameOver(obstacle) {
    this.state = 'gameover';
    this.hitObstacle = obstacle;
    this.shakeFrames = 20;
    this._spawnParticles(this.player.x, this.player.y, '#ef4444', 20);
    this._playSound('runner-over');
    if (this.score > this.highScore) {
      this.highScore = this.score;
      this.storage.set('hemacia-highscore', this.highScore);
      this._updateHighScoreDisplay();
    }
  }

  /* ------------------------------------------------------------------ */
  /*  Drawing                                                            */
  /* ------------------------------------------------------------------ */

  _draw(W, H) {
    const ctx = this.ctx;

    // Camera shake
    let shakeX = 0, shakeY = 0;
    if (this.shakeFrames > 0) {
      shakeX = (Math.random() - 0.5) * this.shakeFrames * 1.2;
      shakeY = (Math.random() - 0.5) * this.shakeFrames * 1.2;
    }
    ctx.save();
    ctx.translate(shakeX, shakeY);

    // Background — dark blood vessel
    const grad = ctx.createLinearGradient(0, 0, 0, H);
    grad.addColorStop(0, '#0d0f18');
    grad.addColorStop(0.7, '#1a0a0a');
    grad.addColorStop(1, '#2a0a0a');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);

    // Vessel walls (top & bottom)
    ctx.fillStyle = '#3a1515';
    ctx.fillRect(0, 0, W, 6);
    ctx.fillRect(0, this.groundY + 20, W, H - this.groundY);
    ctx.fillStyle = '#4a1a1a';
    ctx.fillRect(0, this.groundY + 16, W, 6);

    // Pulsing vessel glow
    const pulse = 0.3 + Math.sin(this.frameCount * 0.02) * 0.1;
    ctx.shadowBlur = 0;

    // Background floating cells
    ctx.globalAlpha = 0.15;
    for (const star of this.bgStars) {
      ctx.fillStyle = star.color;
      ctx.beginPath();
      ctx.ellipse(star.x, star.y, star.size, star.size * 0.8, 0, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;

    // Ground line
    ctx.strokeStyle = 'rgba(200, 60, 60, 0.4)';
    ctx.lineWidth = 2;
    ctx.setLineDash([8, 6]);
    ctx.beginPath();
    ctx.moveTo(0, this.groundY + 14);
    ctx.lineTo(W, this.groundY + 14);
    ctx.stroke();
    ctx.setLineDash([]);

    // Flash effect
    if (this.flashFrames > 0) {
      ctx.fillStyle = `rgba(34, 197, 94, ${this.flashFrames * 0.04})`;
      ctx.fillRect(0, 0, W, H);
    }

    // Draw collectibles (plasma drops)
    for (const c of this.collectibles) {
      const by = c.y + Math.sin(c.bobPhase) * 6;
      ctx.fillStyle = '#ef4444';
      ctx.shadowColor = '#ef4444';
      ctx.shadowBlur = 10;
      ctx.beginPath();
      // Drop shape
      ctx.moveTo(c.x, by - c.r);
      ctx.bezierCurveTo(c.x + c.r, by - c.r * 0.3, c.x + c.r * 0.7, by + c.r, c.x, by + c.r);
      ctx.bezierCurveTo(c.x - c.r * 0.7, by + c.r, c.x - c.r, by - c.r * 0.3, c.x, by - c.r);
      ctx.fill();
      ctx.shadowBlur = 0;
      // Cross symbol
      ctx.fillStyle = '#fff';
      ctx.fillRect(c.x - 3, by - 1, 6, 2);
      ctx.fillRect(c.x - 1, by - 3, 2, 6);
    }

    // Draw obstacles (Y-shaped antibodies)
    for (const o of this.obstacles) {
      if (o.hit) continue;
      this._drawAntibody(ctx, o);
    }

    // Draw player (hemácia)
    this._drawPlayer(ctx);

    // Draw particles
    for (const pt of this.particles) {
      ctx.globalAlpha = pt.life / pt.maxLife;
      ctx.fillStyle = pt.color;
      ctx.fillRect(pt.x - 2, pt.y - 2, 4, 4);
    }
    ctx.globalAlpha = 1;

    // HUD
    this._drawHUD(ctx, W);

    // CRT scanline overlay
    this._drawScanlines(ctx, W, H);

    ctx.restore();
  }

  _drawPlayer(ctx) {
    const p = this.player;
    const sx = 1 / p.squash;
    const sy = p.squash;

    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.scale(sx, sy);

    // Glow
    ctx.shadowColor = '#ef4444';
    ctx.shadowBlur = 16;

    // Main cell body
    ctx.fillStyle = '#dc2626';
    ctx.beginPath();
    ctx.ellipse(0, 0, p.radius, p.radius * 0.85, 0, 0, Math.PI * 2);
    ctx.fill();

    // Biconcave dimple (hemácia shape)
    ctx.shadowBlur = 0;
    ctx.fillStyle = '#b91c1c';
    ctx.beginPath();
    ctx.ellipse(0, 0, p.radius * 0.5, p.radius * 0.4, 0, 0, Math.PI * 2);
    ctx.fill();

    // Highlight
    ctx.fillStyle = 'rgba(255, 150, 150, 0.4)';
    ctx.beginPath();
    ctx.ellipse(-4, -5, 6, 4, -0.4, 0, Math.PI * 2);
    ctx.fill();

    // Blood type label
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 11px monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(this.bloodType.name, 0, 1);

    ctx.restore();
  }

  _drawAntibody(ctx, o) {
    const cx = o.x + o.w / 2;
    const by = o.y + o.h;
    const armSpread = 10;

    ctx.strokeStyle = o.color;
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    ctx.shadowColor = o.color;
    ctx.shadowBlur = o.isDangerous ? 12 : 4;

    // Stem
    ctx.beginPath();
    ctx.moveTo(cx, by);
    ctx.lineTo(cx, o.y + o.h * 0.45);
    ctx.stroke();

    // Left arm
    ctx.beginPath();
    ctx.moveTo(cx, o.y + o.h * 0.45);
    ctx.lineTo(cx - armSpread, o.y);
    ctx.stroke();

    // Right arm
    ctx.beginPath();
    ctx.moveTo(cx, o.y + o.h * 0.45);
    ctx.lineTo(cx + armSpread, o.y);
    ctx.stroke();

    // Binding tips
    ctx.fillStyle = o.color;
    ctx.beginPath();
    ctx.arc(cx - armSpread, o.y, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(cx + armSpread, o.y, 4, 0, Math.PI * 2);
    ctx.fill();

    ctx.shadowBlur = 0;

    // Danger indicator (pulsing !)
    if (o.isDangerous) {
      const blink = Math.sin(this.frameCount * 0.15) > 0;
      if (blink) {
        ctx.fillStyle = '#ff0000';
        ctx.font = 'bold 14px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('⚠', cx, o.y - 8);
      }
    }

    // Label
    ctx.fillStyle = o.color;
    ctx.font = '9px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(o.type, cx, by + 12);
  }

  _drawHUD(ctx, W) {
    // Score
    ctx.fillStyle = '#f9fafb';
    ctx.font = 'bold 18px monospace';
    ctx.textAlign = 'left';
    ctx.fillText(`SCORE: ${this.score}`, 16, 32);

    // Blood type badge
    const badgeX = W - 16;
    ctx.textAlign = 'right';
    ctx.fillStyle = 'rgba(220, 38, 38, 0.8)';
    const tw = ctx.measureText(`TIPO: ${this.bloodType.name}`).width;
    ctx.fillRect(badgeX - tw - 16, 12, tw + 24, 28);
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 14px monospace';
    ctx.fillText(`TIPO: ${this.bloodType.name}`, badgeX - 4, 31);

    // Speed indicator
    ctx.textAlign = 'left';
    ctx.fillStyle = '#9ca3af';
    ctx.font = '11px monospace';
    const speedPct = Math.min(100, Math.floor(((this.speed - MG_CONFIG.initialSpeed) / (MG_CONFIG.maxSpeed - MG_CONFIG.initialSpeed)) * 100));
    ctx.fillText(`VEL: ${speedPct}%   DIF: ${this.difficultyLevel}/6`, 16, 52);

    // Legend — which antibodies are dangerous
    const antigens = this.bloodType.antigens;
    let legendY = 68;
    ctx.font = '10px monospace';
    for (const def of MG_ANTIBODY_DEFS) {
      const dangerous = antigens.includes(def.targetsAntigen);
      ctx.fillStyle = dangerous ? '#ef4444' : '#4ade80';
      ctx.fillText(`${dangerous ? '⚠' : '✓'} ${def.type}`, 16, legendY);
      legendY += 14;
    }
  }

  _drawScanlines(ctx, W, H) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.06)';
    for (let y = 0; y < H; y += 3) {
      ctx.fillRect(0, y, W, 1);
    }
    // Vignette
    const vg = ctx.createRadialGradient(W / 2, H / 2, H * 0.3, W / 2, H / 2, H * 0.9);
    vg.addColorStop(0, 'rgba(0,0,0,0)');
    vg.addColorStop(1, 'rgba(0,0,0,0.35)');
    ctx.fillStyle = vg;
    ctx.fillRect(0, 0, W, H);
  }

  /* ------------------------------------------------------------------ */
  /*  Menu screen                                                        */
  /* ------------------------------------------------------------------ */

  _drawMenu(W, H) {
    const ctx = this.ctx;

    // Background
    const grad = ctx.createLinearGradient(0, 0, 0, H);
    grad.addColorStop(0, '#0d0f18');
    grad.addColorStop(0.5, '#1a0a0a');
    grad.addColorStop(1, '#0d0f18');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);

    // Animated floating cells
    if (!this._menuCells) this._menuCells = this._generateBgCells(25);
    for (const c of this._menuCells) {
      c.x -= 0.5;
      if (c.x < -10) c.x = W + 10;
      ctx.globalAlpha = 0.2;
      ctx.fillStyle = c.color;
      ctx.beginPath();
      ctx.ellipse(c.x, c.y, c.size, c.size * 0.8, 0, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;

    // Title
    ctx.fillStyle = '#dc2626';
    ctx.font = 'bold 36px monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = '#dc2626';
    ctx.shadowBlur = 20;
    ctx.fillText('HEMÁCIA RUNNER', W / 2, H * 0.28);
    ctx.shadowBlur = 0;

    // Subtitle
    ctx.fillStyle = '#9ca3af';
    ctx.font = '14px monospace';
    ctx.fillText('Desvie dos anticorpos incompatíveis!', W / 2, H * 0.38);

    // Big hemácia icon
    ctx.save();
    ctx.translate(W / 2, H * 0.55);
    const pulse = 1 + Math.sin(Date.now() * 0.003) * 0.06;
    ctx.scale(pulse, pulse);
    ctx.fillStyle = '#dc2626';
    ctx.shadowColor = '#ef4444';
    ctx.shadowBlur = 30;
    ctx.beginPath();
    ctx.ellipse(0, 0, 40, 34, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.fillStyle = '#b91c1c';
    ctx.beginPath();
    ctx.ellipse(0, 0, 20, 16, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = 'rgba(255,180,180,0.3)';
    ctx.beginPath();
    ctx.ellipse(-8, -10, 12, 8, -0.4, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 16px monospace';
    ctx.fillText('ABO', 0, 2);
    ctx.restore();

    // Start prompt
    const blink = Math.sin(Date.now() * 0.004) > 0;
    if (blink) {
      ctx.fillStyle = '#f9fafb';
      ctx.font = 'bold 16px monospace';
      ctx.textAlign = 'center';
      ctx.fillText('[ ESPAÇO / TOQUE PARA JOGAR ]', W / 2, H * 0.78);
    }

    // High score
    if (this.highScore > 0) {
      ctx.fillStyle = '#fbbf24';
      ctx.font = '13px monospace';
      ctx.fillText(`RECORDE: ${this.highScore}`, W / 2, H * 0.88);
    }

    this._drawScanlines(ctx, W, H);
  }

  /* ------------------------------------------------------------------ */
  /*  Game Over screen                                                   */
  /* ------------------------------------------------------------------ */

  _drawGameOver(W, H) {
    const ctx = this.ctx;

    // Overlay
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(0, 0, W, H);

    // Panel background
    const panelW = Math.min(500, W - 40);
    const panelH = 230;
    const px = (W - panelW) / 2;
    const py = (H - panelH) / 2 - 10;
    ctx.fillStyle = '#1a1f2e';
    ctx.strokeStyle = '#dc2626';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(px, py, panelW, panelH, 12);
    ctx.fill();
    ctx.stroke();

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Title
    ctx.fillStyle = '#ef4444';
    ctx.font = 'bold 24px monospace';
    ctx.fillText('AGLUTINAÇÃO!', W / 2, py + 32);

    // Score
    ctx.fillStyle = '#f9fafb';
    ctx.font = '16px monospace';
    ctx.fillText(`Score: ${this.score}`, W / 2, py + 62);

    if (this.score >= this.highScore && this.score > 0) {
      ctx.fillStyle = '#fbbf24';
      ctx.font = 'bold 13px monospace';
      ctx.fillText('🏆 NOVO RECORDE!', W / 2, py + 82);
    }

    // Educational explanation
    if (this.hitObstacle) {
      const o = this.hitObstacle;
      const antigen = MG_ANTIBODY_DEFS.find(d => d.type === o.type)?.targetsAntigen || '?';

      ctx.fillStyle = '#d1d5db';
      ctx.font = '12px monospace';
      const lines = [
        `Sua hemácia era tipo ${this.bloodType.name}.`,
        `Ela possui antígeno${this.bloodType.antigens.length !== 1 ? 's' : ''}: ${this.bloodType.antigens.length ? this.bloodType.antigens.join(', ') : 'nenhum'}.`,
        `${o.type} reconheceu o antígeno ${antigen} e causou aglutinação!`,
        `Na vida real, isso significa agrupamento das hemácias.`
      ];
      let ly = py + 108;
      for (const line of lines) {
        ctx.fillText(line, W / 2, ly);
        ly += 18;
      }
    }

    // Restart prompt
    const blink = Math.sin(Date.now() * 0.004) > 0;
    if (blink) {
      ctx.fillStyle = '#9ca3af';
      ctx.font = '13px monospace';
      ctx.fillText('[ ESPAÇO / TOQUE PARA CONTINUAR ]', W / 2, py + panelH - 16);
    }
  }

  /* ------------------------------------------------------------------ */
  /*  Helpers                                                            */
  /* ------------------------------------------------------------------ */

  _generateBgCells(count) {
    const cells = [];
    for (let i = 0; i < count; i++) {
      cells.push({
        x: Math.random() * 900,
        y: Math.random() * 350,
        size: 3 + Math.random() * 8,
        depth: 0.2 + Math.random() * 0.6,
        color: ['#dc2626', '#991b1b', '#7f1d1d', '#450a0a'][Math.floor(Math.random() * 4)]
      });
    }
    return cells;
  }

  _spawnParticles(x, y, color, count) {
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x, y,
        vx: (Math.random() - 0.5) * 6,
        vy: (Math.random() - 0.5) * 6 - 2,
        color,
        life: 20 + Math.floor(Math.random() * 20),
        maxLife: 40
      });
    }
  }

  _resizeCanvas() {
    if (!this.canvas) return;
    const wrapper = this.canvas.parentElement;
    if (!wrapper) return;
    const w = wrapper.clientWidth || wrapper.getBoundingClientRect().width || 800;
    const ratio = 800 / 400;
    const canvasW = Math.max(320, Math.min(800, w));
    const canvasH = canvasW / ratio;
    this.canvas.width = canvasW;
    this.canvas.height = canvasH;
  }

  _onResize() {
    this._resizeCanvas();
  }

  _playComboCue() {
    if (this.frameCount - this._lastComboSoundFrame < 90) return;
    this._lastComboSoundFrame = this.frameCount;
    this._playSound('runner-combo');
  }

  _playSound(name) {
    if (typeof window.playSound === 'function') {
      window.playSound(name);
    }
  }

  _updateHighScoreDisplay() {
    const el = this.container?.querySelector('.minigame-highscore strong');
    if (el) el.textContent = this.highScore;
  }
}
