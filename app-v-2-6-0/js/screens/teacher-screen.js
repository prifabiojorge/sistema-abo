import { INLINE_QUESTIONS, INLINE_SCENARIOS } from '../data-inline.js';
import { ConfirmDialog } from '../ui/dialog.js';
import { EmptyState } from '../ui/skeleton.js';
import { getQrTargetUrl, openQrCodeModal, renderQrCanvas } from '../ui/qr-code.js';
import { csvEscape, downloadJson, downloadText, getProgressMetrics, isCompatibleRecipient, nowIso } from '../learning/progress-utils.js';

export class TeacherScreen {
  constructor(bus, storage) {
    this.bus = bus;
    this.storage = storage;
    this.pinHash = this.storage.get('teacher-pin') || this._hashPin('1234');
    this.authenticated = false;
    this.container = document.getElementById('teacher-content');
    this.activeTab = 'overview';
  }

  init() {
    this.bus.on('screen:change', ({ to }) => {
      if (to === 'teacher') this.authenticated ? this.renderDashboard() : this.renderLogin();
    });

    if (!this.container) return;
    this.container.addEventListener('submit', (event) => this._handleSubmit(event));
    this.container.addEventListener('click', (event) => this._handleClick(event));
    this.container.addEventListener('change', (event) => this._handleChange(event));
  }

  renderLogin() {
    if (!this.container) return;
    this.container.innerHTML = `
      <form id="teacher-login" class="teacher__login">
        <h3>Painel do Professor</h3>
        <p>Digite o PIN de 4 dígitos para acessar as ferramentas docentes.</p>
        <label for="teacher-pin">PIN:</label>
        <input type="password" id="teacher-pin" class="input" maxlength="4" pattern="[0-9]{4}" inputmode="numeric" required aria-label="PIN do professor">
        <button type="submit" class="btn btn--primary">Entrar</button>
        <p class="teacher__hint">PIN padrão: 1234</p>
      </form>
    `;
  }

  renderDashboard() {
    const tabs = [
      ['overview', 'Visão geral'],
      ['questions', 'Banco de Questões'],
      ['scenarios', 'Cenários'],
      ['classes', 'Turmas'],
      ['qr', 'QR Code'],
      ['export', 'Exportação'],
      ['data', 'Dados']
    ];

    this.container.innerHTML = `
      <div class="teacher-dashboard">
        <div class="teacher-dashboard__header">
          <h3>Painel do Professor</h3>
          <button id="btn-logout-teacher" class="btn btn--ghost">Sair</button>
        </div>
        <nav class="teacher-tabs" role="tablist">
          ${tabs.map(([id, label]) => `<button class="teacher-tab ${this.activeTab === id ? 'teacher-tab--active' : ''}" data-teacher-tab="${id}" role="tab" aria-selected="${this.activeTab === id}">${label}</button>`).join('')}
        </nav>
        <div class="teacher-tab-panel">
          ${this._renderActiveTab()}
        </div>
      </div>
    `;
    if (this.activeTab === 'qr') this._drawTeacherQr();
  }

  _renderActiveTab() {
    if (this.activeTab === 'questions') return this._renderQuestions();
    if (this.activeTab === 'scenarios') return this._renderScenarios();
    if (this.activeTab === 'classes') return this._renderClasses();
    if (this.activeTab === 'qr') return this._renderQrCode();
    if (this.activeTab === 'export') return this._renderExport();
    if (this.activeTab === 'data') return this._renderDataTools();
    return this._renderOverview();
  }

  _renderOverview() {
    const metrics = getProgressMetrics(this.storage);
    const quizHistory = metrics.quizHistory;
    const avgCorrect = quizHistory.length ? Math.round(quizHistory.reduce((a, b) => a + b.correct, 0) / quizHistory.length) : 0;
    const classes = this.storage.get('classes') || [];
    return `
      <div class="teacher-stats">
        <div class="teacher-stat"><span class="teacher-stat__value">${metrics.history.length}</span><span class="teacher-stat__label">Tipagens registradas</span></div>
        <div class="teacher-stat"><span class="teacher-stat__value">${quizHistory.length}</span><span class="teacher-stat__label">Quizzes finalizados</span></div>
        <div class="teacher-stat"><span class="teacher-stat__value">${avgCorrect}/10</span><span class="teacher-stat__label">Média de acertos</span></div>
        <div class="teacher-stat"><span class="teacher-stat__value">${classes.length}</span><span class="teacher-stat__label">Turmas locais</span></div>
      </div>
      <section class="teacher-section">
        <h4>Desempenho nos quizzes</h4>
        ${quizHistory.length ? `<div class="teacher-chart">${this._renderQuizBars(quizHistory)}</div>` : EmptyState.markup({
          icon: '📊',
          title: 'Nenhum quiz realizado ainda',
          desc: 'Quando alunos concluírem quizzes neste dispositivo, os resultados aparecerão aqui.',
          ctaLabel: 'Abrir quiz',
          ctaHref: '#quiz',
          compact: true
        })}
      </section>
    `;
  }

  _renderQuestions() {
    const custom = this._customQuestions();
    const enabled = this.storage.get('use-custom-questions') !== false;
    return `
      <section class="teacher-section">
        <div class="tool-panel__bar">
          <h4>Banco de Questões</h4>
          <label class="settings-toggle"><input type="checkbox" id="toggle-custom-questions" ${enabled ? 'checked' : ''}> <span class="settings-toggle__label">Usar questões personalizadas no quiz</span></label>
          <button id="export-questions" class="btn btn--secondary">Exportar JSON</button>
        </div>
        <form id="question-editor" class="editor-form">
          <input class="input" name="question" placeholder="Enunciado da questão" required>
          <div class="form-grid">
            <select class="input" name="type"><option value="multiple_choice">Múltipla escolha</option><option value="true_false">Verdadeiro/Falso</option></select>
            <select class="input" name="category"><option value="genetics">Genética</option><option value="antigens">Antígenos</option><option value="transfusion">Transfusão</option><option value="rh_dhrn">Rh/DHRN</option><option value="biosafety">Biossegurança</option></select>
            <select class="input" name="difficulty"><option value="easy">Fácil</option><option value="medium">Médio</option><option value="hard">Difícil</option></select>
          </div>
          <input class="input" name="options" placeholder="Alternativas separadas por ; (para múltipla escolha)">
          <input class="input" name="correctAnswer" placeholder="Resposta correta: a/b/c/d ou true/false" required>
          <textarea class="input" name="explanation" placeholder="Explicação científica" required></textarea>
          <input class="input" name="reference" placeholder="Referência opcional">
          <button class="btn btn--primary" type="submit">Salvar questão</button>
        </form>
        <textarea id="questions-import" class="input import-box" placeholder="Cole JSON exportado de questões para importar"></textarea>
        <button id="import-questions" class="btn btn--secondary">Importar questões</button>
        <div class="teacher-list">
          <p><strong>Padrão:</strong> ${INLINE_QUESTIONS.length} questões · <strong>Personalizadas:</strong> ${custom.length}</p>
          ${custom.map(q => `<article class="teacher-list-item"><strong>${q.question}</strong><small>${q.category} · ${q.difficulty}</small><button class="btn btn--ghost" data-delete-question="${q.id}">Remover</button></article>`).join('') || '<p>Nenhuma questão personalizada.</p>'}
        </div>
      </section>
    `;
  }

  _renderScenarios() {
    const custom = this._customScenarios();
    return `
      <section class="teacher-section">
        <div class="tool-panel__bar">
          <h4>Cenários de Transfusão</h4>
          <button id="export-scenarios" class="btn btn--secondary">Exportar JSON</button>
        </div>
        <form id="scenario-editor" class="editor-form">
          <div class="form-grid">
            <input class="input" name="name" placeholder="Nome do paciente" required>
            <input class="input" name="age" type="number" min="1" max="120" placeholder="Idade" required>
            <select class="input" name="bloodType">${['A+','A-','B+','B-','AB+','AB-','O+','O-'].map(t => `<option value="${t}">${t}</option>`).join('')}</select>
          </div>
          <textarea class="input" name="situation" placeholder="Contexto clínico" required></textarea>
          <input class="input" name="availableBlood" placeholder="Doadores disponíveis separados por vírgula" required>
          <input class="input" name="correctAnswers" placeholder="Respostas corretas separadas por vírgula" required>
          <textarea class="input" name="explanation" placeholder="Explicação" required></textarea>
          <button class="btn btn--primary" type="submit">Salvar cenário</button>
        </form>
        <textarea id="scenarios-import" class="input import-box" placeholder="Cole JSON exportado de cenários para importar"></textarea>
        <button id="import-scenarios" class="btn btn--secondary">Importar cenários</button>
        <div class="teacher-list">
          <p><strong>Padrão:</strong> ${INLINE_SCENARIOS.length} cenários · <strong>Personalizados:</strong> ${custom.length}</p>
          ${custom.map(s => `<article class="teacher-list-item"><strong>${s.patient.name} · ${s.patient.bloodType}</strong><small>${s.patient.situation}</small><button class="btn btn--ghost" data-delete-scenario="${s.id}">Remover</button></article>`).join('') || '<p>Nenhum cenário personalizado.</p>'}
        </div>
      </section>
    `;
  }

  _renderClasses() {
    const classes = this.storage.get('classes') || [];
    return `
      <section class="teacher-section">
        <h4>Gestão de Turmas</h4>
        <form id="class-editor" class="editor-form">
          <div class="form-grid">
            <input class="input" name="name" placeholder="Nome da turma" required>
            <input class="input" name="period" placeholder="Período">
            <input class="input" name="school" placeholder="Escola">
          </div>
          <button class="btn btn--primary" type="submit">Criar turma</button>
        </form>
        <textarea id="student-import" class="input import-box" placeholder="Cole aqui o JSON exportado pelo aluno"></textarea>
        <button id="import-student" class="btn btn--secondary">Importar aluno para turma ativa</button>
        <button id="export-student-local" class="btn btn--secondary">Exportar dados deste aluno</button>
        <div class="teacher-list">
          ${classes.map(c => `<article class="teacher-list-item ${c.active ? 'is-active' : ''}"><strong>${c.name}</strong><small>Código ${c.code} · ${c.students?.length || 0} aluno(s)</small><button class="btn btn--ghost" data-class-active="${c.code}">Ativar</button></article>`).join('') || '<p>Nenhuma turma criada.</p>'}
        </div>
      </section>
    `;
  }

  _renderQrCode() {
    const url = getQrTargetUrl();
    return `
      <section class="teacher-section teacher-qr-section">
        <div class="tool-panel__bar">
          <h4>QR Code para Chromebooks</h4>
          <button id="teacher-open-qr-modal" class="btn btn--primary" type="button">Projetar QR Code</button>
        </div>
        <div class="teacher-qr-layout">
          <div class="qr-code-frame qr-code-frame--teacher">
            <canvas id="teacher-qr-canvas" width="300" height="300" aria-label="QR Code do app"></canvas>
          </div>
          <div class="teacher-qr-copy">
            <p class="qr-code-url">${this._escape(url)}</p>
            <div class="button-row">
              <a class="btn btn--secondary" href="./qr-print.html" target="_blank" rel="noopener">Abrir página de impressão</a>
              <button id="teacher-copy-qr-url" class="btn btn--ghost" type="button">Copiar URL</button>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  _renderExport() {
    return `
      <section class="teacher-section">
        <h4>Exportação</h4>
        <p>Gere arquivos locais para abrir no Excel, Google Sheets ou compartilhar entre dispositivos.</p>
        <div class="button-row">
          <button id="export-class-csv" class="btn btn--primary">Exportar turma CSV</button>
          <button id="export-class-json" class="btn btn--secondary">Exportar turma JSON</button>
          <button id="export-progress-json" class="btn btn--secondary">Exportar progresso local</button>
        </div>
      </section>
    `;
  }

  _renderDataTools() {
    const keys = [
      ['score', 'Score e resumo'],
      ['leaderboard', 'Leaderboard'],
      ['achievements', 'Conquistas'],
      ['quiz-history', 'Histórico do quiz'],
      ['history', 'Histórico de tipagens'],
      ['bookmarks', 'Favoritos'],
      ['trail-progress', 'Trilhas'],
      ['case-progress', 'Casos clínicos'],
      ['custom-questions', 'Questões customizadas'],
      ['custom-scenarios', 'Cenários customizados'],
      ['classes', 'Turmas'],
      ['settings', 'Configurações']
    ];
    return `
      <section class="teacher-section">
        <h4>Reset granular</h4>
        <div class="settings-checkboxes">
          ${keys.map(([key, label]) => `<label class="settings-checkbox"><input type="checkbox" value="${key}" data-reset-key> ${label}</label>`).join('')}
        </div>
        <button id="teacher-reset-selected" class="btn btn--destructive">Resetar selecionados</button>
      </section>
    `;
  }

  _handleSubmit(event) {
    if (event.target.id === 'teacher-login') {
      event.preventDefault();
      this._checkPin();
    }
    if (event.target.id === 'question-editor') {
      event.preventDefault();
      this._saveQuestion(new FormData(event.target));
    }
    if (event.target.id === 'scenario-editor') {
      event.preventDefault();
      this._saveScenario(new FormData(event.target));
    }
    if (event.target.id === 'class-editor') {
      event.preventDefault();
      this._saveClass(new FormData(event.target));
    }
  }

  _handleClick(event) {
    const target = event.target;
    if (target.id === 'btn-logout-teacher') {
      this.authenticated = false;
      this.renderLogin();
    }
    if (target.dataset.teacherTab) {
      this.activeTab = target.dataset.teacherTab;
      this.renderDashboard();
    }
    if (target.id === 'export-questions') this._exportQuestions();
    if (target.id === 'import-questions') this._importQuestions();
    if (target.dataset.deleteQuestion) this._deleteCustom('custom-questions', 'questions', target.dataset.deleteQuestion);
    if (target.id === 'export-scenarios') this._exportScenarios();
    if (target.id === 'import-scenarios') this._importScenarios();
    if (target.dataset.deleteScenario) this._deleteCustom('custom-scenarios', 'scenarios', target.dataset.deleteScenario);
    if (target.dataset.classActive) this._activateClass(target.dataset.classActive);
    if (target.id === 'import-student') this._importStudent();
    if (target.id === 'export-student-local') this._exportStudentLocal();
    if (target.id === 'export-class-csv') this._exportClassCsv();
    if (target.id === 'export-class-json') this._exportClassJson();
    if (target.id === 'export-progress-json') this._exportProgress();
    if (target.id === 'teacher-open-qr-modal') openQrCodeModal({ bus: this.bus });
    if (target.id === 'teacher-copy-qr-url') this._copyQrUrl();
    if (target.id === 'teacher-reset-selected') this._resetSelected();
  }

  _handleChange(event) {
    if (event.target.id === 'toggle-custom-questions') {
      this.storage.set('use-custom-questions', event.target.checked);
      this.bus.emit('toast:show', { type: 'success', message: 'Preferência do quiz atualizada.' });
    }
  }

  _checkPin() {
    const input = document.getElementById('teacher-pin');
    if (!input) return;
    if (this._hashPin(input.value) === this.pinHash) {
      this.authenticated = true;
      this.renderDashboard();
    } else {
      input.classList.add('has-error');
      input.value = '';
      input.placeholder = 'PIN incorreto';
      setTimeout(() => input.classList.remove('has-error'), 2000);
    }
  }

  _saveQuestion(form) {
    const type = form.get('type');
    const correctRaw = String(form.get('correctAnswer')).trim();
    const question = {
      id: `custom-q-${Date.now()}`,
      category: form.get('category'),
      difficulty: form.get('difficulty'),
      type,
      question: String(form.get('question')).trim(),
      explanation: String(form.get('explanation')).trim(),
      reference: String(form.get('reference')).trim() || 'Questão criada pelo professor',
      correctAnswer: type === 'true_false' ? correctRaw === 'true' : correctRaw
    };
    if (type === 'multiple_choice') {
      const labels = ['a', 'b', 'c', 'd'];
      const options = String(form.get('options')).split(';').map(text => text.trim()).filter(Boolean);
      if (options.length < 2 || !labels.includes(correctRaw)) return this._toastError('Informe alternativas e resposta correta a/b/c/d.');
      question.options = options.slice(0, 4).map((text, index) => ({ id: labels[index], text }));
    }
    if (!question.question || !question.explanation) return this._toastError('Enunciado e explicação são obrigatórios.');
    const payload = this.storage.get('custom-questions') || { schemaVersion: 1, questions: [] };
    payload.schemaVersion = 1;
    payload.questions = [...(payload.questions || []), question];
    this.storage.set('custom-questions', payload);
    this.bus.emit('toast:show', { type: 'success', message: 'Questão salva.' });
    this.renderDashboard();
  }

  _saveScenario(form) {
    const patientType = form.get('bloodType');
    const available = this._splitCsv(form.get('availableBlood'));
    const correct = this._splitCsv(form.get('correctAnswers'));
    if (!correct.length || correct.some(type => !isCompatibleRecipient(patientType, type))) {
      return this._toastError('Respostas corretas devem ser compatíveis com o paciente.');
    }
    const scenario = {
      id: `custom-s-${Date.now()}`,
      difficulty: 'custom',
      patient: {
        name: String(form.get('name')).trim(),
        age: Number(form.get('age')),
        bloodType: patientType,
        situation: String(form.get('situation')).trim()
      },
      availableBlood: available,
      correctAnswers: correct,
      explanation: String(form.get('explanation')).trim()
    };
    if (!scenario.patient.name || !scenario.patient.situation || !available.length || !scenario.explanation) return this._toastError('Preencha todos os campos do cenário.');
    const payload = this.storage.get('custom-scenarios') || { schemaVersion: 1, scenarios: [] };
    payload.schemaVersion = 1;
    payload.scenarios = [...(payload.scenarios || []), scenario];
    this.storage.set('custom-scenarios', payload);
    this.bus.emit('toast:show', { type: 'success', message: 'Cenário salvo.' });
    this.renderDashboard();
  }

  _saveClass(form) {
    const classes = this.storage.get('classes') || [];
    const code = this._classCode();
    classes.forEach(c => c.active = false);
    classes.push({
      schemaVersion: 1,
      code,
      name: String(form.get('name')).trim(),
      period: String(form.get('period')).trim(),
      school: String(form.get('school')).trim(),
      students: [],
      active: true,
      createdAt: nowIso()
    });
    this.storage.set('classes', classes);
    this.bus.emit('toast:show', { type: 'success', message: `Turma criada: ${code}` });
    this.renderDashboard();
  }

  _exportQuestions() {
    downloadJson('abo-sim-questoes.json', this.storage.get('custom-questions') || { schemaVersion: 1, questions: [] });
  }

  _importQuestions() {
    this._importPayload('questions-import', 'custom-questions', 'questions', this._isValidQuestion.bind(this));
  }

  _exportScenarios() {
    downloadJson('abo-sim-cenarios.json', this.storage.get('custom-scenarios') || { schemaVersion: 1, scenarios: [] });
  }

  _importScenarios() {
    this._importPayload('scenarios-import', 'custom-scenarios', 'scenarios', this._isValidScenario.bind(this));
  }

  _importPayload(textareaId, storageKey, collectionKey, validator) {
    try {
      const data = JSON.parse(document.getElementById(textareaId)?.value || '{}');
      const incoming = Array.isArray(data?.[collectionKey]) ? data[collectionKey] : [];
      const valid = incoming.filter(validator);
      if (!valid.length) return this._toastError('JSON sem itens válidos.');
      const payload = this.storage.get(storageKey) || { schemaVersion: 1, [collectionKey]: [] };
      const byId = new Map((payload[collectionKey] || []).map(item => [item.id, item]));
      valid.forEach(item => byId.set(item.id, item));
      payload.schemaVersion = 1;
      payload[collectionKey] = Array.from(byId.values());
      this.storage.set(storageKey, payload);
      this.bus.emit('toast:show', { type: 'success', message: `${valid.length} item(ns) importado(s).` });
      this.renderDashboard();
    } catch {
      this._toastError('JSON inválido.');
    }
  }

  _deleteCustom(storageKey, collectionKey, id) {
    const payload = this.storage.get(storageKey) || { schemaVersion: 1, [collectionKey]: [] };
    payload[collectionKey] = (payload[collectionKey] || []).filter(item => item.id !== id);
    this.storage.set(storageKey, payload);
    this.renderDashboard();
  }

  _activateClass(code) {
    const classes = this.storage.get('classes') || [];
    classes.forEach(c => c.active = c.code === code);
    this.storage.set('classes', classes);
    this.renderDashboard();
  }

  _importStudent() {
    try {
      const data = JSON.parse(document.getElementById('student-import')?.value || '{}');
      if (!data.studentId || !data.exportedAt) return this._toastError('JSON de aluno inválido.');
      const classes = this.storage.get('classes') || [];
      const active = classes.find(c => c.active) || classes[0];
      if (!active) return this._toastError('Crie uma turma antes de importar alunos.');
      active.students = active.students || [];
      const existingIndex = active.students.findIndex(s => s.studentId === data.studentId);
      if (existingIndex >= 0) {
        if (String(data.exportedAt) > String(active.students[existingIndex].exportedAt)) active.students[existingIndex] = data;
      } else {
        active.students.push(data);
      }
      this.storage.set('classes', classes);
      this.bus.emit('toast:show', { type: 'success', message: 'Aluno importado.' });
      this.renderDashboard();
    } catch {
      this._toastError('JSON de aluno inválido.');
    }
  }

  _exportStudentLocal() {
    const payload = {
      schemaVersion: 1,
      studentId: this.storage.get('student-id') || `student-${Date.now()}`,
      exportedAt: nowIso(),
      metrics: getProgressMetrics(this.storage)
    };
    this.storage.set('student-id', payload.studentId);
    downloadJson('abo-sim-aluno.json', payload);
  }

  _exportClassJson() {
    const active = this._activeClass();
    if (!active) return this._toastError('Nenhuma turma ativa.');
    downloadJson(`abo-sim-turma-${active.code}.json`, active);
  }

  _exportClassCsv() {
    const active = this._activeClass();
    if (!active) return this._toastError('Nenhuma turma ativa.');
    const rows = [['aluno', 'exported_at', 'quiz_score', 'cases_completed', 'achievements', 'last_activity']];
    for (const student of active.students || []) {
      const m = student.metrics || {};
      const latestQuiz = (m.quizHistory || []).slice(-1)[0] || {};
      rows.push([
        student.studentName || student.studentId,
        student.exportedAt,
        latestQuiz.score || 0,
        m.casesCompleted || 0,
        m.achievements?.unlocked?.length || 0,
        m.score?.lastUpdated || student.exportedAt
      ]);
    }
    const csv = '\uFEFF' + rows.map(row => row.map(csvEscape).join(';')).join('\n');
    downloadText(`abo-sim-turma-${active.code}.csv`, csv, 'text/csv;charset=utf-8');
  }

  _exportProgress() {
    downloadJson('abo-sim-progresso-local.json', {
      schemaVersion: 1,
      exportedAt: nowIso(),
      metrics: getProgressMetrics(this.storage)
    });
  }

  _drawTeacherQr() {
    requestAnimationFrame(() => {
      renderQrCanvas(document.getElementById('teacher-qr-canvas'), getQrTargetUrl(), { pixelSize: 300 });
    });
  }

  async _copyQrUrl() {
    try {
      await navigator.clipboard.writeText(getQrTargetUrl());
      this.bus.emit('toast:show', { type: 'success', message: 'URL do QR Code copiada.' });
    } catch {
      this._toastError('Não foi possível copiar automaticamente.');
    }
  }

  async _resetSelected() {
    const keys = Array.from(this.container.querySelectorAll('[data-reset-key]:checked')).map(input => input.value);
    if (!keys.length) return this._toastError('Selecione pelo menos um item.');
    const ok = await ConfirmDialog.confirm({
      title: 'Resetar dados selecionados',
      message: `${keys.length} grupo(s) de dados serão apagados deste dispositivo.`,
      confirmText: 'Resetar selecionados',
      danger: true
    });
    if (!ok) return;
    keys.forEach(key => this.storage.remove(key));
    this.bus.emit('toast:show', { type: 'success', message: 'Dados selecionados resetados.' });
    this.renderDashboard();
  }

  _renderQuizBars(history) {
    const maxScore = Math.max(...history.map(h => h.score), 1);
    return history.slice(-10).map((h, i) => {
      const pct = (h.score / maxScore) * 100;
      const tone = h.percentage >= 70 ? 'teacher-bar__fill--success' : h.percentage >= 50 ? 'teacher-bar__fill--warning' : 'teacher-bar__fill--error';
      return `<div class="teacher-bar"><span class="teacher-bar__label">#${i + 1}</span><div class="teacher-bar__track"><div class="teacher-bar__fill ${this._progressClass(pct)} ${tone}"></div></div><span class="teacher-bar__value">${h.score}</span></div>`;
    }).join('');
  }

  _customQuestions() {
    return this.storage.get('custom-questions')?.questions || [];
  }

  _customScenarios() {
    return this.storage.get('custom-scenarios')?.scenarios || [];
  }

  _activeClass() {
    const classes = this.storage.get('classes') || [];
    return classes.find(c => c.active) || classes[0];
  }

  _hashPin(pin) {
    let hash = 0;
    for (let i = 0; i < pin.length; i++) {
      hash = ((hash << 5) - hash) + pin.charCodeAt(i);
      hash = hash & hash;
    }
    return String(hash);
  }

  _progressClass(value) {
    const step = Math.max(0, Math.min(100, Math.round(value / 10) * 10));
    return `bar-w-${step}`;
  }

  _classCode() {
    return Math.random().toString(36).slice(2, 8).toUpperCase();
  }

  _splitCsv(value) {
    return String(value || '').split(',').map(item => item.trim()).filter(Boolean);
  }

  _escape(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  _isValidQuestion(q) {
    return q && q.id && q.question && q.explanation && (typeof q.correctAnswer === 'string' || typeof q.correctAnswer === 'boolean');
  }

  _isValidScenario(s) {
    return s && s.id && s.patient?.bloodType && Array.isArray(s.availableBlood) && Array.isArray(s.correctAnswers);
  }

  _toastError(message) {
    this.bus.emit('toast:show', { type: 'error', message });
  }
}
