import { ConfirmDialog } from '../ui/dialog.js';
import { EmptyState } from '../ui/skeleton.js';
import { formatDateTime, normalizeBloodLabel } from '../learning/progress-utils.js';

export class HistoryScreen {
  constructor(bus, storage) {
    this.bus = bus;
    this.storage = storage;
    this.container = document.getElementById('history-content');
    this.filters = { type: 'all', mode: 'all' };
  }

  init() {
    this.bus.on('screen:change', ({ to }) => {
      if (to === 'history') this.render();
    });
  }

  render() {
    if (!this.container) return;
    const history = this._filteredHistory();
    const all = this.storage.get('history') || [];

    if (!all.length) {
      EmptyState.render(this.container, {
        icon: '🕒',
        title: 'Nenhuma tipagem registrada',
        desc: 'Faça uma simulação para criar sua primeira entrada na linha do tempo.',
        ctaLabel: 'Ir para simulador',
        ctaHref: '#simulator'
      });
      return;
    }

    this.container.innerHTML = `
      <div class="tool-panel">
        <div class="tool-panel__bar">
          <label>Tipo
            <select id="history-type" class="input">
              <option value="all">Todos</option>
              ${['A+','A-','B+','B-','AB+','AB-','O+','O-'].map(type => `<option value="${type}" ${this.filters.type === type ? 'selected' : ''}>${type}</option>`).join('')}
            </select>
          </label>
          <label>Modo
            <select id="history-mode" class="input">
              <option value="all">Todos</option>
              ${['discovery','verification','inverse','compare'].map(mode => `<option value="${mode}" ${this.filters.mode === mode ? 'selected' : ''}>${this._modeLabel(mode)}</option>`).join('')}
            </select>
          </label>
          <button id="history-clear" class="btn btn--destructive">Limpar histórico</button>
        </div>
        ${history.length ? `
          <ol class="timeline">
            ${history.map(item => this._renderItem(item)).join('')}
          </ol>
        ` : EmptyState.markup({
          icon: '🔎',
          title: 'Nenhum registro para o filtro',
          desc: 'Troque os filtros para ver outras tipagens.',
          compact: true
        })}
      </div>
    `;

    document.getElementById('history-type')?.addEventListener('change', event => {
      this.filters.type = event.target.value;
      this.render();
    });
    document.getElementById('history-mode')?.addEventListener('change', event => {
      this.filters.mode = event.target.value;
      this.render();
    });
    document.getElementById('history-clear')?.addEventListener('click', () => this._clear());
    this.container.querySelectorAll('[data-revisit]').forEach(button => {
      button.addEventListener('click', () => {
        this.storage.set('revisit-type', button.dataset.revisit);
        this.bus.emit('toast:show', { type: 'info', message: `Reabrindo tipo ${button.dataset.revisit} no simulador.` });
        window.ABO?.router?.navigate('simulator');
      });
    });
  }

  _renderItem(item) {
    const type = normalizeBloodLabel(item.bloodType);
    const reactions = item.reactions || {};
    return `
      <li class="timeline-item">
        <div class="timeline-item__header">
          <span class="blood-badge">${type || 'N/A'}</span>
          <strong>${this._modeLabel(item.mode)}</strong>
          <time>${formatDateTime(item.timestamp)}</time>
        </div>
        <div class="reaction-row">
          ${Object.entries(reactions).map(([key, value]) => `<span class="reaction-pill ${value ? 'reaction-pill--positive' : 'reaction-pill--negative'}">${this._reagentLabel(key)} ${value ? '+' : '-'}</span>`).join('')}
        </div>
        <button class="btn btn--secondary" data-revisit="${type}">Revisitar</button>
      </li>
    `;
  }

  _filteredHistory() {
    return (this.storage.get('history') || [])
      .filter(item => this.filters.type === 'all' || normalizeBloodLabel(item.bloodType) === this.filters.type)
      .filter(item => this.filters.mode === 'all' || item.mode === this.filters.mode)
      .sort((a, b) => String(b.timestamp).localeCompare(String(a.timestamp)));
  }

  async _clear() {
    const ok = await ConfirmDialog.confirm({
      title: 'Limpar histórico',
      message: 'Todas as tipagens registradas neste dispositivo serão apagadas.',
      confirmText: 'Limpar histórico',
      danger: true
    });
    if (!ok) return;
    this.storage.remove('history');
    this.bus.emit('toast:show', { type: 'success', message: 'Histórico limpo.' });
    this.render();
  }

  _modeLabel(mode) {
    return {
      discovery: 'Descoberta',
      verification: 'Verificação',
      standard: 'Simulação',
      inverse: 'Diagnóstico livre',
      compare: 'Comparação'
    }[mode] || 'Simulação';
  }

  _reagentLabel(key) {
    return key === 'anti-a' ? 'Anti-A' : key === 'anti-b' ? 'Anti-B' : key === 'anti-d' ? 'Anti-D' : key;
  }
}
