import { INLINE_SCENARIOS } from '../data-inline.js';

export class TransfusionScreen {
  constructor(bus, state, storage, scoreManager, achievements) {
    this.bus = bus;
    this.state = state;
    this.storage = storage;
    this.scoreManager = scoreManager;
    this.achievements = achievements;
    this.scenarios = [];
    this.currentIndex = 0;
    this.completedScenarios = new Set();
    this.container = document.getElementById('transfusion-content');
  }

  async init() {
    this.scenarios = INLINE_SCENARIOS || [];

    this.bus.on('screen:change', ({ to }) => {
      if (to === 'transfusion') {
        this.currentIndex = 0;
        this.render();
      }
    });
  }

  render() {
    if (this.scenarios.length === 0) {
      this.container.innerHTML = '<p>Nenhum cenário disponível.</p>';
      return;
    }

    if (this.currentIndex >= this.scenarios.length) {
      this._renderSummary();
      return;
    }

    const scenario = this.scenarios[this.currentIndex];
    const progress = ((this.currentIndex) / this.scenarios.length) * 100;

    this.container.innerHTML = `
      <div class="transfusion-scenario">
        <div class="transfusion-progress">
          <div class="transfusion-progress__bar" style="width:${progress}%"></div>
        </div>
        <div class="transfusion-card">
          <div class="transfusion-header">
            <span class="transfusion-emoji">🚨</span>
            <h3>Cenário ${this.currentIndex + 1}/${this.scenarios.length}</h3>
          </div>
          <div class="transfusion-patient">
            <p><strong>Paciente:</strong> ${scenario.patient.name}, ${scenario.patient.age} anos</p>
            <p><strong>Tipo sanguíneo:</strong> <span class="transfusion-blood-type">${scenario.patient.bloodType}</span></p>
            <p><strong>Situação:</strong> ${scenario.patient.situation}</p>
          </div>
          <div class="transfusion-stock">
            <p><strong>Estoque disponível:</strong></p>
            <div class="transfusion-options">
              ${scenario.availableBlood.map(type => `
                <label class="transfusion-option">
                  <input type="checkbox" value="${type}" data-type="${type}">
                  <span class="transfusion-type-label">${type}</span>
                </label>
              `).join('')}
            </div>
          </div>
          <button id="btn-check-transfusion" class="btn btn--primary">Verificar</button>
          <div id="transfusion-feedback" class="transfusion-feedback" hidden></div>
        </div>
      </div>
    `;

    document.getElementById('btn-check-transfusion').addEventListener('click', () => {
      this._checkAnswer(scenario);
    });
  }

  _checkAnswer(scenario) {
    const checkboxes = this.container.querySelectorAll('input[type="checkbox"]:checked');
    const selected = Array.from(checkboxes).map(cb => cb.value);
    const correct = scenario.correctAnswers;

    const isCorrect = selected.length === correct.length && selected.every(s => correct.includes(s));

    const feedback = document.getElementById('transfusion-feedback');
    feedback.hidden = false;

    if (isCorrect) {
      feedback.className = 'transfusion-feedback transfusion-feedback--correct';
      feedback.innerHTML = `
        <strong>✅ Correto!</strong>
        <p>${scenario.explanation}</p>
        <p class="transfusion-points">+15 pontos</p>
      `;
      this.completedScenarios.add(scenario.id);
      this.scoreManager.addPoints(15);
      this.scoreManager.recordScenario();
    } else {
      feedback.className = 'transfusion-feedback transfusion-feedback--wrong';
      feedback.innerHTML = `
        <strong>❌ Incorreto</strong>
        <p>Resposta correta: ${correct.join(', ')}</p>
        <p>${scenario.explanation}</p>
      `;
    }

    const btn = document.getElementById('btn-check-transfusion');
    btn.textContent = 'Próximo cenário →';
    btn.onclick = () => {
      this.currentIndex++;
      this.render();
    };

    this.container.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.disabled = true);

    if (this.currentIndex >= this.scenarios.length - 1) {
      this.achievements.check(this.scoreManager.getScore(), {
        scenariosCompleted: this.completedScenarios
      });
    }
  }

  _renderSummary() {
    const total = this.scenarios.length;
    const completed = this.completedScenarios.size;
    const percentage = Math.round((completed / total) * 100);

    this.container.innerHTML = `
      <div class="transfusion-summary">
        <h3>Resumo dos Cenários</h3>
        <p>${completed}/${total} cenários corretos (${percentage}%)</p>
        <div class="transfusion-summary__actions">
          <button id="btn-replay-transfusion" class="btn btn--primary">🔄 Recomeçar</button>
          <a href="#home" class="btn btn--secondary" data-nav="home">🏠 Início</a>
        </div>
      </div>
    `;

    document.getElementById('btn-replay-transfusion').addEventListener('click', () => {
      this.currentIndex = 0;
      this.completedScenarios.clear();
      this.render();
    });
  }
}
