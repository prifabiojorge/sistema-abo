const PUBLIC_APP_URL = 'https://prifabiojorge.github.io/sistema-abo/';
const QR_VERSION = 4;
const QR_SIZE = 33;
const QR_DATA_CODEWORDS = 80;
const QR_ECC_CODEWORDS = 20;

class QrBitBuffer {
  constructor() {
    this.bits = [];
  }

  append(value, length) {
    for (let i = length - 1; i >= 0; i--) {
      this.bits.push((value >>> i) & 1);
    }
  }

  toBytes() {
    const bytes = [];
    for (let i = 0; i < this.bits.length; i += 8) {
      let value = 0;
      for (let j = 0; j < 8; j++) {
        value = (value << 1) | (this.bits[i + j] || 0);
      }
      bytes.push(value);
    }
    return bytes;
  }
}

class QrCodeV4L {
  constructor(text) {
    this.text = String(text || PUBLIC_APP_URL);
    this.size = QR_SIZE;
    this.modules = this._blank(false);
    this.isFunction = this._blank(false);

    this._drawFunctionPatterns();
    const data = this._encodeData(this.text);
    const ecc = this._computeRemainder(data, this._computeDivisor(QR_ECC_CODEWORDS));
    this._drawCodewords([...data, ...ecc]);
    this._chooseMask();
  }

  _blank(value) {
    return Array.from({ length: this.size }, () => Array(this.size).fill(value));
  }

  _setFunction(x, y, dark) {
    if (x < 0 || y < 0 || x >= this.size || y >= this.size) return;
    this.modules[y][x] = Boolean(dark);
    this.isFunction[y][x] = true;
  }

  _drawFunctionPatterns() {
    this._drawFinder(0, 0);
    this._drawFinder(this.size - 7, 0);
    this._drawFinder(0, this.size - 7);
    this._drawAlignment(26, 26);

    for (let i = 8; i < this.size - 8; i++) {
      const dark = i % 2 === 0;
      this._setFunction(i, 6, dark);
      this._setFunction(6, i, dark);
    }

    this._drawFormatBits(0);
    this._setFunction(8, 4 * QR_VERSION + 9, true);
  }

  _drawFinder(left, top) {
    for (let y = -1; y <= 7; y++) {
      for (let x = -1; x <= 7; x++) {
        const xx = left + x;
        const yy = top + y;
        if (xx < 0 || yy < 0 || xx >= this.size || yy >= this.size) continue;
        const inside = x >= 0 && x <= 6 && y >= 0 && y <= 6;
        const dark = inside && (
          x === 0 || x === 6 || y === 0 || y === 6 ||
          (x >= 2 && x <= 4 && y >= 2 && y <= 4)
        );
        this._setFunction(xx, yy, dark);
      }
    }
  }

  _drawAlignment(cx, cy) {
    for (let y = -2; y <= 2; y++) {
      for (let x = -2; x <= 2; x++) {
        this._setFunction(cx + x, cy + y, Math.max(Math.abs(x), Math.abs(y)) !== 1);
      }
    }
  }

  _drawFormatBits(mask) {
    const bits = this._formatBits(mask);
    for (let i = 0; i <= 5; i++) this._setFunction(8, i, this._bit(bits, i));
    this._setFunction(8, 7, this._bit(bits, 6));
    this._setFunction(8, 8, this._bit(bits, 7));
    this._setFunction(7, 8, this._bit(bits, 8));
    for (let i = 9; i < 15; i++) this._setFunction(14 - i, 8, this._bit(bits, i));
    for (let i = 0; i < 8; i++) this._setFunction(this.size - 1 - i, 8, this._bit(bits, i));
    for (let i = 8; i < 15; i++) this._setFunction(8, this.size - 15 + i, this._bit(bits, i));
    this._setFunction(8, this.size - 8, true);
  }

  _formatBits(mask) {
    const eclLow = 1;
    const data = (eclLow << 3) | mask;
    let rem = data << 10;
    for (let i = 14; i >= 10; i--) {
      if (((rem >>> i) & 1) !== 0) rem ^= 0x537 << (i - 10);
    }
    return ((data << 10) | (rem & 0x3FF)) ^ 0x5412;
  }

  _bit(value, index) {
    return ((value >>> index) & 1) !== 0;
  }

  _encodeData(text) {
    const bytes = Array.from(new TextEncoder().encode(text));
    const capacityBits = QR_DATA_CODEWORDS * 8;
    const buffer = new QrBitBuffer();
    buffer.append(0x4, 4);
    buffer.append(bytes.length, 8);
    bytes.forEach((byte) => buffer.append(byte, 8));
    if (buffer.bits.length > capacityBits) {
      throw new Error('Texto grande demais para o QR Code v4-L.');
    }
    buffer.append(0, Math.min(4, capacityBits - buffer.bits.length));
    while (buffer.bits.length % 8 !== 0) buffer.append(0, 1);
    const data = buffer.toBytes();
    for (let pad = 0xEC; data.length < QR_DATA_CODEWORDS; pad ^= 0xEC ^ 0x11) {
      data.push(pad);
    }
    return data;
  }

  _drawCodewords(codewords) {
    const bits = [];
    codewords.forEach((byte) => {
      for (let i = 7; i >= 0; i--) bits.push((byte >>> i) & 1);
    });

    let bitIndex = 0;
    let upward = true;
    for (let right = this.size - 1; right >= 1; right -= 2) {
      if (right === 6) right--;
      for (let vert = 0; vert < this.size; vert++) {
        const y = upward ? this.size - 1 - vert : vert;
        for (let dx = 0; dx < 2; dx++) {
          const x = right - dx;
          if (this.isFunction[y][x]) continue;
          this.modules[y][x] = bitIndex < bits.length ? bits[bitIndex] === 1 : false;
          bitIndex++;
        }
      }
      upward = !upward;
    }
  }

  _chooseMask() {
    const base = this.modules.map((row) => row.slice());
    let bestMask = 0;
    let bestPenalty = Infinity;
    let bestModules = base;

    for (let mask = 0; mask < 8; mask++) {
      this.modules = base.map((row) => row.slice());
      this._applyMask(mask);
      this._drawFormatBits(mask);
      const penalty = this._penalty();
      if (penalty < bestPenalty) {
        bestPenalty = penalty;
        bestMask = mask;
        bestModules = this.modules.map((row) => row.slice());
      }
    }

    this.modules = bestModules;
    this._drawFormatBits(bestMask);
  }

  _applyMask(mask) {
    for (let y = 0; y < this.size; y++) {
      for (let x = 0; x < this.size; x++) {
        if (this.isFunction[y][x]) continue;
        if (this._mask(mask, x, y)) this.modules[y][x] = !this.modules[y][x];
      }
    }
  }

  _mask(mask, x, y) {
    switch (mask) {
      case 0: return (x + y) % 2 === 0;
      case 1: return y % 2 === 0;
      case 2: return x % 3 === 0;
      case 3: return (x + y) % 3 === 0;
      case 4: return (Math.floor(y / 2) + Math.floor(x / 3)) % 2 === 0;
      case 5: return ((x * y) % 2) + ((x * y) % 3) === 0;
      case 6: return ((((x * y) % 2) + ((x * y) % 3)) % 2) === 0;
      case 7: return ((((x + y) % 2) + ((x * y) % 3)) % 2) === 0;
      default: return false;
    }
  }

  _penalty() {
    let result = 0;
    for (let y = 0; y < this.size; y++) result += this._runPenalty((i) => this.modules[y][i]);
    for (let x = 0; x < this.size; x++) result += this._runPenalty((i) => this.modules[i][x]);

    for (let y = 0; y < this.size - 1; y++) {
      for (let x = 0; x < this.size - 1; x++) {
        const color = this.modules[y][x];
        if (color === this.modules[y][x + 1] &&
            color === this.modules[y + 1][x] &&
            color === this.modules[y + 1][x + 1]) {
          result += 3;
        }
      }
    }

    const dark = this.modules.flat().filter(Boolean).length;
    const total = this.size * this.size;
    result += Math.floor(Math.abs(dark * 20 - total * 10) / total) * 10;
    return result;
  }

  _runPenalty(get) {
    let penalty = 0;
    let runColor = get(0);
    let runLength = 1;
    for (let i = 1; i < this.size; i++) {
      const color = get(i);
      if (color === runColor) {
        runLength++;
      } else {
        if (runLength >= 5) penalty += 3 + (runLength - 5);
        runColor = color;
        runLength = 1;
      }
    }
    if (runLength >= 5) penalty += 3 + (runLength - 5);
    return penalty;
  }

  _computeDivisor(degree) {
    const result = Array(degree).fill(0);
    result[degree - 1] = 1;
    let root = 1;
    for (let i = 0; i < degree; i++) {
      for (let j = 0; j < result.length; j++) {
        result[j] = this._gfMultiply(result[j], root);
        if (j + 1 < result.length) result[j] ^= result[j + 1];
      }
      root = this._gfMultiply(root, 0x02);
    }
    return result;
  }

  _computeRemainder(data, divisor) {
    const result = Array(divisor.length).fill(0);
    data.forEach((byte) => {
      const factor = byte ^ result.shift();
      result.push(0);
      divisor.forEach((coef, index) => {
        result[index] ^= this._gfMultiply(coef, factor);
      });
    });
    return result;
  }

  _gfMultiply(x, y) {
    let z = 0;
    for (let i = 7; i >= 0; i--) {
      z = ((z << 1) ^ (((z >>> 7) & 1) * 0x11D)) & 0xFF;
      if (((y >>> i) & 1) !== 0) z ^= x;
    }
    return z & 0xFF;
  }

  toSvg({ scale = 8, border = 4, dark = '#111827', light = '#ffffff', title = '' } = {}) {
    const dimension = (this.size + border * 2) * scale;
    const parts = [];
    for (let y = 0; y < this.size; y++) {
      for (let x = 0; x < this.size; x++) {
        if (this.modules[y][x]) {
          const xx = (x + border) * scale;
          const yy = (y + border) * scale;
          parts.push(`M${xx},${yy}h${scale}v${scale}h-${scale}z`);
        }
      }
    }
    const titleMarkup = title ? `<title>${escapeQrText(title)}</title>` : '';
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${dimension} ${dimension}" width="${dimension}" height="${dimension}" role="img" aria-label="${escapeQrText(title || 'QR Code')}">${titleMarkup}<rect width="100%" height="100%" fill="${light}"/><path d="${parts.join('')}" fill="${dark}"/></svg>`;
  }
}

function escapeQrText(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function getQrTargetUrl() {
  if (typeof window !== 'undefined' && /^https?:$/.test(window.location.protocol)) {
    const current = new URL(window.location.href);
    current.hash = '';
    current.search = '';
    current.pathname = current.pathname.replace(/index\.html$/i, '');
    return current.href;
  }
  return PUBLIC_APP_URL;
}

export function createQrSvg(text = getQrTargetUrl(), options = {}) {
  return new QrCodeV4L(text).toSvg(options);
}

export function renderQrCanvas(canvas, text = getQrTargetUrl(), { pixelSize = 320, border = 4, dark = '#111827', light = '#ffffff' } = {}) {
  if (!canvas) return;
  const qr = new QrCodeV4L(text);
  const moduleSize = Math.floor(pixelSize / (qr.size + border * 2));
  const size = (qr.size + border * 2) * moduleSize;
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = light;
  ctx.fillRect(0, 0, size, size);
  ctx.fillStyle = dark;
  for (let y = 0; y < qr.size; y++) {
    for (let x = 0; x < qr.size; x++) {
      if (qr.modules[y][x]) {
        ctx.fillRect((x + border) * moduleSize, (y + border) * moduleSize, moduleSize, moduleSize);
      }
    }
  }
}

export function openQrCodeModal({ bus = null } = {}) {
  const existing = document.getElementById('qr-code-overlay');
  if (existing) existing.remove();

  const url = getQrTargetUrl();
  const overlay = document.createElement('div');
  overlay.id = 'qr-code-overlay';
  overlay.className = 'modal-overlay qr-code-overlay';
  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) overlay.remove();
  });

  overlay.innerHTML = `
    <div class="modal modal--qr-code" role="dialog" aria-modal="true" aria-labelledby="qr-code-title">
      <header class="modal__header">
        <h3 id="qr-code-title">QR Code do ABO Pai d'égua</h3>
        <button class="modal__close btn btn--ghost" type="button" aria-label="Fechar">&times;</button>
      </header>
      <div class="qr-code-panel">
        <div class="qr-code-frame">
          <canvas id="qr-code-modal-canvas" width="320" height="320" aria-label="QR Code para abrir o app"></canvas>
        </div>
        <div class="qr-code-info">
          <p class="qr-code-url">${escapeQrText(url)}</p>
          <div class="button-row">
            <button class="btn btn--primary" type="button" id="qr-code-fullscreen">Tela cheia</button>
            <a class="btn btn--secondary" href="./qr-print.html" target="_blank" rel="noopener">Imprimir</a>
            <button class="btn btn--ghost" type="button" id="qr-code-copy">Copiar URL</button>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
  renderQrCanvas(document.getElementById('qr-code-modal-canvas'), url, { pixelSize: 336 });

  overlay.querySelector('.modal__close')?.addEventListener('click', () => overlay.remove());
  overlay.querySelector('#qr-code-fullscreen')?.addEventListener('click', () => {
    const target = overlay.querySelector('.modal--qr-code');
    if (target?.requestFullscreen) target.requestFullscreen();
  });
  overlay.querySelector('#qr-code-copy')?.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(url);
      bus?.emit('toast:show', { type: 'success', message: 'URL do QR Code copiada.' });
    } catch {
      bus?.emit('toast:show', { type: 'warning', message: 'Não foi possível copiar automaticamente.' });
    }
  });
}

export function initPwaInstallPrompt(bus) {
  let deferredPrompt = null;
  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;
    window.__aboInstallPrompt = event;
    bus?.emit('toast:show', {
      type: 'info',
      duration: 7000,
      message: `Instalar ABO Pai d'égua no dispositivo? <button class="btn btn--ghost toast-install-btn" type="button" id="abo-install-action">Instalar</button>`
    });
  });

  document.addEventListener('click', async (event) => {
    if (event.target?.id !== 'abo-install-action' || !deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice.catch(() => null);
    deferredPrompt = null;
  });
}
