export class TeacherScreen {
  constructor(bus, storage) {
    this.bus = bus;
    this.storage = storage;
    this.pinHash = this.storage.get('teacher-pin') || this._hashPin('1234');
    this.authenticated = false;
    this.container = document.getElementById('teacher-content');
  }

  init() {
    this.bus.on('screen:change', ({ to }) => {
      if (to === 'teacher') {
        if (this.authenticated) {
          this.renderDashboard();
        } else {
          this.renderLogin();
        }
      }
    });

    if (this.container) {
      this.container.addEventListener('submit', (e) => {
        if (e.target.id === 'teacher-login') {
          e.preventDefault();
          this._checkPin();
        }
      });

      this.container.addEventListener('click', (e) => {
        if (e.target.id === 'btn-reset-class') {
          this._resetClass();
        }
        if (e.target.id === 'btn-logout-teacher') {
          this.authenticated = false;
          this.renderLogin();
        }
      });
    }
  }

  _hashPin(pin) {
    let hash = 0;
    for (let i = 0; i < pin.length; i++) {
      const char = pin.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return String(hash);
  }

  renderLogin() {
    if (!this.container) return;
    this.container.innerHTML = `
      <form id="teacher-login" class="teacher__login">
        <h3>Painel do Professor</h3>
        <p>Digite o PIN de 4 dígitos para acessar os dados da turma.</p>
        <label for="teacher-pin">PIN:</label>
        <input type="password" id="teacher-pin" maxlength="4" pattern="[0-9]{4}" inputmode="numeric" required aria-label="PIN do professor">
        <button type="submit" class="btn btn--primary">Entrar</button>
        <p class="teacher__hint">PIN padrão: 1234</p>
      </form>
    `;
  }

  _checkPin() {
    const input = document.getElementById('teacher-pin');
    if (!input) return;
    const pin = input.value;
    if (this._hashPin(pin) === this.pinHash) {
      this.authenticated = true;
      this.renderDashboard();
    } else {
      input.style.borderColor = 'var(--error)';
      input.value = '';
      input.placeholder = 'PIN incorreto';
    }
  }

  renderDashboard() {
    if (!this.container) return;

    const score = this.storage.get('score') || { total: 0, typingsCompleted: 0, quizzesTaken: 0, scenariosCompleted: 0 };
    const quizHistory = this.storage.get('quiz-history') || [];
    const totalQuizzes = quizHistory.length;
    const avgScore = totalQuizzes > 0 ? Math.round(quizHistory.reduce((a, b) => a + b.score, 0) / totalQuizzes) : 0;
    const avgCorrect = totalQuizzes > 0 ? Math.round(quizHistory.reduce((a, b) => a + b.correct, 0) / totalQuizzes) : 0;

    this.container.innerHTML = `
      <div class="teacher-dashboard">
        <div class="teacher-dashboard__header">
          <h3>Dashboard da Turma</h3>
          <button id="btn-logout-teacher" class="btn btn--ghost">Sair</button>
        </div>
        
        <div class="teacher-stats">
          <div class="teacher-stat">
            <span class="teacher-stat__value">${score.typingsCompleted || 0}</span>
            <span class="teacher-stat__label">Tipagens realizadas</span>
          </div>
          <div class="teacher-stat">
            <span class="teacher-stat__value">${totalQuizzes}</span>
            <span class="teacher-stat__label">Quizzes finalizados</span>
          </div>
          <div class="teacher-stat">
            <span class="teacher-stat__value">${avgCorrect}/10</span>
            <span class="teacher-stat__label">Média de acertos</span>
          </div>
          <div class="teacher-stat">
            <span class="teacher-stat__value">${score.scenariosCompleted || 0}</span>
            <span class="teacher-stat__label">Cenários completados</span>
          </div>
        </div>

        <div class="teacher-section">
          <h4>📊 Desempenho nos Quizzes</h4>
          ${totalQuizzes > 0 ? `
            <div class="teacher-chart">
              ${this._renderQuizBars(quizHistory)}
            </div>
          ` : '<p class="teacher-empty">Nenhum quiz realizado ainda.</p>'}
        </div>

        <div class="teacher-section">
          <h4>⚠️ Ações</h4>
          <button id="btn-reset-class" class="btn btn--secondary" style="color: var(--error);">🗑️ Resetar Dados da Turma</button>
        </div>
      </div>
    `;
  }

  _renderQuizBars(history) {
    const maxScore = Math.max(...history.map(h => h.score), 1);
    return history.slice(-10).map((h, i) => {
      const pct = (h.score / maxScore) * 100;
      const color = h.percentage >= 70 ? 'var(--success)' : h.percentage >= 50 ? 'var(--warning)' : 'var(--error)';
      return `
        <div class="teacher-bar">
          <span class="teacher-bar__label">#${i + 1}</span>
          <div class="teacher-bar__track">
            <div class="teacher-bar__fill" style="width:${pct}%; background:${color}"></div>
          </div>
          <span class="teacher-bar__value">${h.score}</span>
        </div>
      `;
    }).join('');
  }

  _resetClass() {
    if (!confirm('Tem certeza que deseja apagar TODOS os dados da turma? Esta ação não pode ser desfeita.')) return;

    this.storage.remove('score');
    this.storage.remove('quiz-history');
    this.storage.remove('achievements');
    this.storage.remove('leaderboard');
    this.storage.remove('myths-completed');
    this.storage.remove('encyclopedia-visited');

    this.bus.emit('teacher:reset');
    this.renderDashboard();
  }
}
