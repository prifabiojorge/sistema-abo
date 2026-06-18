import { SimulationEngine } from '../simulation/simulation-engine.js';

export class SimulatorScreen {
  constructor(bus, state, storage) {
    this.bus = bus;
    this.state = state;
    this.storage = storage;
    this.engine = null;
    this.mode = 'discovery';
  }

  init() {
    this.engine = new SimulationEngine(this.bus);
    this.engine.init();

    this.typeSelect = document.getElementById('blood-type-select');
    this.dropBtn = document.getElementById('btn-drop-blood');
    this.infoPanel = document.getElementById('info-panel');
    this.scoreDisplay = document.getElementById('score-display');

    this._bindEvents();
    this._bindBusEvents();
    this._updateScore();
  }

  _bindEvents() {
    if (this.typeSelect) {
      this.typeSelect.addEventListener('change', (e) => {
        const val = e.target.value;
        if (val !== 'random') {
          this.engine.selectType(val);
          this._setMode('verification');
        } else {
          this._setMode('discovery');
        }
        this._updateInfo('Selecione um poço para pingar sangue.');
        if (this.dropBtn) this.dropBtn.disabled = false;
      });
    }

    if (this.dropBtn) {
      this.dropBtn.addEventListener('click', () => {
        this._dropAllWells();
      });
    }

    document.querySelectorAll('.reagent-well').forEach(wellEl => {
      wellEl.addEventListener('click', () => {
        const reagent = wellEl.dataset.reagent;
        if (this.mode === 'inverse') {
          this.engine.wells[reagent].toggleManualAgglutination();
        } else {
          this._dropOnWell(reagent);
        }
      });
      wellEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const reagent = wellEl.dataset.reagent;
          if (this.mode === 'inverse') {
            this.engine.wells[reagent].toggleManualAgglutination();
          } else {
            this._dropOnWell(reagent);
          }
        }
      });
    });

    document.querySelectorAll('input[name="sim-mode"]').forEach(radio => {
      radio.addEventListener('change', (e) => {
        const isInverse = e.target.value === 'inverse';
        this._setMode(isInverse ? 'inverse' : 'discovery');
        
        // Alternar visibilidade através de classes semânticas (Atomic Design)
        document.getElementById('type-selector').classList.toggle('is-hidden', isInverse);
        if (this.dropBtn) this.dropBtn.classList.toggle('is-hidden', isInverse);
        
        const btnAnalyze = document.getElementById('btn-analyze-inverse');
        if (btnAnalyze) btnAnalyze.classList.toggle('is-hidden', !isInverse);
        
        const invInstr = document.getElementById('inverse-instruction');
        if (invInstr) invInstr.classList.toggle('is-hidden', !isInverse);

        document.querySelectorAll('.reagent-well').forEach(w => w.classList.toggle('well-clickable', isInverse));

        if (isInverse) {
          this._updateInfo('Modo Diagnóstico: Clique nos poços para alternar a aglutinação e clique em "Identificar Sangue".');
        } else {
          this._updateInfo('Selecione um tipo sanguíneo e clique em "Pingar sangue" para começar.');
        }


      });
    });

    const btnAnalyze = document.getElementById('btn-analyze-inverse');
    if (btnAnalyze) {
      btnAnalyze.addEventListener('click', () => {
        this.engine.evaluateInverseMode();
      });
    }
  }

  _bindBusEvents() {
    this.bus.on('simulation:wellFilled', ({ wellType }) => {
      const label = wellType === 'anti-a' ? 'Anti-A' : wellType === 'anti-b' ? 'Anti-B' : 'Anti-D';
      this._updateInfo(`Sangue pingado no poço ${label}. Observando reação...`);
      if (window.playSound) window.playSound('drop');
    });

    this.bus.on('simulation:complete', ({ typeId, typeData, results }) => {
      this._showResult(typeId, typeData, results);
      this._addScore(5);
      if (window.playSound) window.playSound('complete');
    });

    this.bus.on('simulation:reset', () => {
      this._updateInfo('Selecione um tipo sanguíneo e clique em "Pingar sangue" para começar.');
      if (this.dropBtn) this.dropBtn.disabled = false;
    });
  }

  _setMode(mode) {
    this.mode = mode;
    this.engine.setMode(mode);
  }

  _dropOnWell(reagent) {
    if (!this.engine.selectedType && this.mode !== 'discovery') {
      this._updateInfo('Selecione um tipo sanguíneo primeiro.');
      return;
    }
    if (this.mode === 'discovery' && !this.engine.selectedType) {
      this.engine.selectType('random');
    }
    const ok = this.engine.dropBlood(reagent);
    if (!ok) {
      this._updateInfo('Este poço já foi preenchido.');
    }
  }

  _dropAllWells() {
    if (!this.engine.selectedType) {
      if (this.mode === 'discovery') {
        this.engine.selectType('random');
      } else {
        this._updateInfo('Selecione um tipo sanguíneo primeiro.');
        return;
      }
    }
    for (const key of ['anti-a', 'anti-b', 'anti-d']) {
      this.engine.dropBlood(key);
    }
  }

  _showResult(typeId, typeData, results) {
    const reactions = [];
    for (const [key, agglutinated] of Object.entries(results)) {
      const label = key === 'anti-a' ? 'Anti-A' : key === 'anti-b' ? 'Anti-B' : 'Anti-D';
      const status = agglutinated ? 'POSITIVO ✓ (aglutinou)' : 'NEGATIVO ✗ (não aglutinou)';
      reactions.push(`<strong>${label}:</strong> ${status}`);
    }

    const html = `
      <div class="result-card">
        <h3>Resultado: Tipo ${typeData.label}</h3>
        <div class="result-reactions">
          ${reactions.join('<br>')}
        </div>
        <p>${typeData.description || ''}</p>
        <p><strong>Frequência no Brasil:</strong> ${typeData.frequencyLabel || 'N/A'}</p>
        <div class="result-actions">
          <button id="btn-new-test" class="btn btn--secondary">🔄 Novo Teste</button>
          <a href="#quiz" class="btn btn--primary" data-nav="quiz">📝 Ir para Quiz</a>
        </div>
      </div>
    `;

    if (this.infoPanel) {
      this.infoPanel.innerHTML = html;
      const newTestBtn = document.getElementById('btn-new-test');
      if (newTestBtn) {
        newTestBtn.addEventListener('click', () => {
          this.engine.reset();
          if (this.typeSelect) this.typeSelect.value = 'random';
        });
      }
    }

    if (this.dropBtn) this.dropBtn.disabled = true;
  }

  _updateInfo(text) {
    if (this.infoPanel) {
      this.infoPanel.innerHTML = `<p>${text}</p>`;
    }
  }

  _addScore(points) {
    const current = this.state.get('score.total') || 0;
    this.state.set('score.total', current + points);
    this._updateScore();

    const saved = this.storage.get('score') || {};
    saved.total = current + points;
    saved.lastUpdated = new Date().toISOString();
    this.storage.set('score', saved);
  }

  _updateScore() {
    const total = this.state.get('score.total') || 0;
    if (this.scoreDisplay) {
      this.scoreDisplay.textContent = `Score: ${total}`;
    }
  }
}
