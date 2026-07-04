import { SimulationEngine } from '../simulation/simulation-engine.js';
import { getBloodTypeById, shouldAgglutinate } from '../utils/blood-logic.js';
import { BLOOD_ID_TO_LABEL, nowIso } from '../learning/progress-utils.js';

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
    this.comparePanel = document.getElementById('compare-panel');
    this.compareOutput = document.getElementById('compare-output');
    this.compareTypeA = document.getElementById('compare-type-a');
    this.compareTypeB = document.getElementById('compare-type-b');

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
        const isCompare = e.target.value === 'compare';
        this._setMode(isInverse ? 'inverse' : isCompare ? 'compare' : 'discovery');
        
        // Alternar visibilidade através de classes semânticas (Atomic Design)
        document.getElementById('type-selector').classList.toggle('is-hidden', isInverse || isCompare);
        if (this.dropBtn) this.dropBtn.classList.toggle('is-hidden', isInverse || isCompare);
        if (this.comparePanel) this.comparePanel.classList.toggle('is-hidden', !isCompare);
        document.getElementById('wells-container')?.classList.toggle('is-hidden', isCompare);
        
        const btnAnalyze = document.getElementById('btn-analyze-inverse');
        if (btnAnalyze) btnAnalyze.classList.toggle('is-hidden', !isInverse);
        
        const invInstr = document.getElementById('inverse-instruction');
        if (invInstr) invInstr.classList.toggle('is-hidden', !isInverse);

        document.querySelectorAll('.reagent-well').forEach(w => w.classList.toggle('well-clickable', isInverse));

        if (isCompare) {
          this._updateInfo('Modo Comparação: escolha dois tipos para ver reações e características lado a lado.');
          this._renderComparison();
        } else if (isInverse) {
          this._updateInfo('Modo Diagnóstico: Clique nos poços para alternar a aglutinação e clique em "Identificar Sangue".');
        } else {
          this._updateInfo('Selecione um tipo sanguíneo e clique em "Pingar sangue" para começar.');
        }


      });
    });

    [this.compareTypeA, this.compareTypeB].forEach(select => {
      if (select) select.addEventListener('change', () => this._renderComparison());
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
    this._recordHistory(typeId, results);
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

  _renderComparison() {
    if (!this.compareOutput || !this.compareTypeA || !this.compareTypeB) return;
    const first = this.compareTypeA.value;
    const second = this.compareTypeB.value;
    const firstData = getBloodTypeById(first);
    const secondData = getBloodTypeById(second);
    this._recordComparison(first, second);

    this.compareOutput.innerHTML = `
      <div class="compare-grid">
        ${this._renderCompareCard(first, firstData)}
        ${this._renderCompareCard(second, secondData)}
      </div>
      <table class="compare-table">
        <thead><tr><th>Critério</th><th>${firstData.label}</th><th>${secondData.label}</th></tr></thead>
        <tbody>
          <tr><th>Antígeno A</th><td>${firstData.antigens.A ? 'Presente' : 'Ausente'}</td><td>${secondData.antigens.A ? 'Presente' : 'Ausente'}</td></tr>
          <tr><th>Antígeno B</th><td>${firstData.antigens.B ? 'Presente' : 'Ausente'}</td><td>${secondData.antigens.B ? 'Presente' : 'Ausente'}</td></tr>
          <tr><th>Rh/D</th><td>${firstData.antigens.D ? 'Positivo' : 'Negativo'}</td><td>${secondData.antigens.D ? 'Positivo' : 'Negativo'}</td></tr>
          <tr><th>Frequência</th><td>${firstData.frequencyLabel}</td><td>${secondData.frequencyLabel}</td></tr>
        </tbody>
      </table>
    `;
  }

  _renderCompareCard(typeId, data) {
    const reactions = ['anti-a', 'anti-b', 'anti-d'].map(reagent => ({
      label: reagent === 'anti-a' ? 'Anti-A' : reagent === 'anti-b' ? 'Anti-B' : 'Anti-D',
      value: shouldAgglutinate(typeId, reagent)
    }));
    return `
      <article class="compare-card">
        <h3>${data.label}</h3>
        <div class="mini-wells">
          ${reactions.map(reaction => `<span class="mini-well ${reaction.value ? 'mini-well--positive' : 'mini-well--negative'}">${reaction.label}<strong>${reaction.value ? '+' : '-'}</strong></span>`).join('')}
        </div>
        <p>${data.description}</p>
      </article>
    `;
  }

  _recordHistory(typeId, results) {
    if (!typeId || typeId === 'unknown') return;
    const history = this.storage.get('history') || [];
    history.push({
      timestamp: nowIso(),
      bloodType: BLOOD_ID_TO_LABEL[typeId] || typeId,
      mode: this.mode,
      reactions: results,
      correct: true
    });
    while (history.length > 50) history.shift();
    this.storage.set('history', history);

    const saved = this.storage.get('score') || {};
    saved.typingsCompleted = (saved.typingsCompleted || 0) + 1;
    saved.lastUpdated = nowIso();
    this.storage.set('score', saved);
  }

  _recordComparison(first, second) {
    const comparisons = this.storage.get('comparisons') || [];
    const last = comparisons[comparisons.length - 1];
    if (last && last.first === first && last.second === second) return;
    comparisons.push({ first, second, timestamp: nowIso() });
    while (comparisons.length > 20) comparisons.shift();
    this.storage.set('comparisons', comparisons);
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
