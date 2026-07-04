import { ConfirmDialog } from '../ui/dialog.js';
import { downloadJson, getProgressMetrics, nowIso } from '../learning/progress-utils.js';

/**
 * Settings Screen — ABO Sim v1.3.0
 * Painel de configurações centralizado (Tasks 8.7, 8.8, 8.10).
 */
export class SettingsScreen {
  constructor(bus, storage) {
    this.bus = bus;
    this.storage = storage;
    this.settingsKey = 'settings';
    this.container = document.getElementById('settings-content');
    this.defaults = {
      theme: 'dark',
      fontSize: 'normal',       // compact | normal | large
      colorblind: 'off',        // off | protanopia | deuteranopia | tritanopia
      highContrast: false,
      reducedMotion: 'auto',    // auto | off | on
      soundEnabled: true,
      soundVolume: 25
    };
  }

  init() {
    this.bus.on('screen:change', ({ to }) => {
      if (to === 'settings') this.render();
    });

    // Aplicar settings salvas ao carregar
    this._applySettings(this._getSettings());
  }

  _getSettings() {
    return { ...this.defaults, ...(this.storage.get(this.settingsKey) || {}) };
  }

  _saveSettings(settings) {
    this.storage.set(this.settingsKey, settings);
    this._applySettings(settings);
    if (this.bus) {
      this.bus.emit('settings:change', settings);
      this.bus.emit('toast:show', { type: 'success', message: 'Configurações salvas', duration: 2000 });
    }
  }

  _applySettings(settings) {
    const root = document.documentElement;

    // Tema
    root.setAttribute('data-theme', settings.theme || 'dark');

    // Font scale
    root.setAttribute('data-font-size', settings.fontSize || 'normal');

    // Daltonismo
    if (settings.colorblind && settings.colorblind !== 'off') {
      root.setAttribute('data-colorblind', settings.colorblind);
    } else {
      root.removeAttribute('data-colorblind');
    }

    // Alto contraste plus
    root.classList.toggle('high-contrast-plus', !!settings.highContrast);

    // Redução de movimento
    if (settings.reducedMotion === 'on') {
      root.classList.add('reduced-motion');
      root.classList.remove('reduced-motion-off');
    } else if (settings.reducedMotion === 'off') {
      root.classList.remove('reduced-motion');
      root.classList.add('reduced-motion-off');
    } else {
      root.classList.remove('reduced-motion', 'reduced-motion-off');
    }
    // 'auto' usa a media query do sistema

    // Som
    if (window.ABO && window.ABO.theme) {
      // Theme toggle sync
    }
  }

  render() {
    if (!this.container) return;
    const settings = this._getSettings();

    this.container.innerHTML = `
      <div class="settings-layout">
        <nav class="settings-nav" role="tablist">
          <button class="settings-tab settings-tab--active" data-tab="appearance" role="tab" aria-selected="true">🎨 Aparência</button>
          <button class="settings-tab" data-tab="accessibility" role="tab">♿ Acessibilidade</button>
          <button class="settings-tab" data-tab="audio" role="tab">🔊 Áudio</button>
          <button class="settings-tab" data-tab="data" role="tab">💾 Dados</button>
        </nav>

        <div class="settings-panels">
          <!-- Aparência -->
          <div class="settings-panel settings-panel--active" data-panel="appearance" role="tabpanel">
            <h3 class="settings-panel__title">Aparência</h3>

            <div class="settings-group">
              <label class="settings-label">Tema</label>
              <div class="settings-radio-group">
                <label class="settings-radio"><input type="radio" name="setting-theme" value="dark" ${settings.theme === 'dark' ? 'checked' : ''}> 🌙 Escuro</label>
                <label class="settings-radio"><input type="radio" name="setting-theme" value="light" ${settings.theme === 'light' ? 'checked' : ''}> ☀️ Claro</label>
              </div>
            </div>

            <div class="settings-group">
              <label class="settings-label">Tamanho da fonte</label>
              <div class="settings-radio-group">
                <label class="settings-radio"><input type="radio" name="setting-fontsize" value="compact" ${settings.fontSize === 'compact' ? 'checked' : ''}> Compacto (0.875×)</label>
                <label class="settings-radio"><input type="radio" name="setting-fontsize" value="normal" ${settings.fontSize === 'normal' ? 'checked' : ''}> Padrão (1×)</label>
                <label class="settings-radio"><input type="radio" name="setting-fontsize" value="large" ${settings.fontSize === 'large' ? 'checked' : ''}> Grande (1.25×)</label>
              </div>
            </div>
          </div>

          <!-- Acessibilidade -->
          <div class="settings-panel" data-panel="accessibility" role="tabpanel" hidden>
            <h3 class="settings-panel__title">Acessibilidade</h3>

            <div class="settings-group">
              <label class="settings-label">Modo daltonismo</label>
              <div class="settings-radio-group">
                <label class="settings-radio"><input type="radio" name="setting-colorblind" value="off" ${settings.colorblind === 'off' ? 'checked' : ''}> Desativado</label>
                <label class="settings-radio"><input type="radio" name="setting-colorblind" value="protanopia" ${settings.colorblind === 'protanopia' ? 'checked' : ''}> Protanopia (vermelho-verde)</label>
                <label class="settings-radio"><input type="radio" name="setting-colorblind" value="deuteranopia" ${settings.colorblind === 'deuteranopia' ? 'checked' : ''}> Deuteranopia (vermelho-verde)</label>
                <label class="settings-radio"><input type="radio" name="setting-colorblind" value="tritanopia" ${settings.colorblind === 'tritanopia' ? 'checked' : ''}> Tritanopia (azul-amarelo)</label>
              </div>
            </div>

            <div class="settings-group">
              <label class="settings-toggle">
                <input type="checkbox" id="setting-highcontrast" ${settings.highContrast ? 'checked' : ''}>
                <span class="settings-toggle__label">Alto contraste plus (ratio ≥ 7:1 AAA)</span>
              </label>
            </div>

            <div class="settings-group">
              <label class="settings-label">Redução de movimento</label>
              <div class="settings-radio-group">
                <label class="settings-radio"><input type="radio" name="setting-motion" value="auto" ${settings.reducedMotion === 'auto' ? 'checked' : ''}> Automático (seguir sistema)</label>
                <label class="settings-radio"><input type="radio" name="setting-motion" value="off" ${settings.reducedMotion === 'off' ? 'checked' : ''}> Desativado (sempre animar)</label>
                <label class="settings-radio"><input type="radio" name="setting-motion" value="on" ${settings.reducedMotion === 'on' ? 'checked' : ''}> Ativado (sem animações)</label>
              </div>
            </div>
          </div>

          <!-- Áudio -->
          <div class="settings-panel" data-panel="audio" role="tabpanel" hidden>
            <h3 class="settings-panel__title">Áudio</h3>

            <div class="settings-group">
              <label class="settings-toggle">
                <input type="checkbox" id="setting-sound" ${settings.soundEnabled ? 'checked' : ''}>
                <span class="settings-toggle__label">Sons ligados</span>
              </label>
            </div>

            <div class="settings-group">
              <label class="settings-label">Volume</label>
              <input type="range" id="setting-volume" min="0" max="100" value="${settings.soundVolume}" class="settings-range">
              <span class="settings-range-value">${settings.soundVolume}%</span>
            </div>
          </div>

          <!-- Dados -->
          <div class="settings-panel" data-panel="data" role="tabpanel" hidden>
            <h3 class="settings-panel__title">Dados</h3>

            <div class="settings-group">
              <p class="settings-desc">Selecione os dados que deseja resetar:</p>
              <div class="settings-checkboxes">
                <label class="settings-checkbox"><input type="checkbox" value="score"> Score e leaderboard</label>
                <label class="settings-checkbox"><input type="checkbox" value="leaderboard"> Leaderboard</label>
                <label class="settings-checkbox"><input type="checkbox" value="achievements"> Conquistas</label>
                <label class="settings-checkbox"><input type="checkbox" value="quiz-history"> Progresso do quiz</label>
                <label class="settings-checkbox"><input type="checkbox" value="history"> Histórico de tipagens</label>
                <label class="settings-checkbox"><input type="checkbox" value="bookmarks"> Favoritos da enciclopédia</label>
                <label class="settings-checkbox"><input type="checkbox" value="trail-progress"> Trilhas de aprendizado</label>
                <label class="settings-checkbox"><input type="checkbox" value="case-progress"> Casos clínicos</label>
                <label class="settings-checkbox"><input type="checkbox" value="myths-completed"> Mitos vs. Fatos</label>
                <label class="settings-checkbox"><input type="checkbox" value="encyclopedia-visited"> Enciclopédia visitados</label>
                <label class="settings-checkbox"><input type="checkbox" value="custom-questions"> Questões customizadas</label>
                <label class="settings-checkbox"><input type="checkbox" value="custom-scenarios"> Cenários customizados</label>
                <label class="settings-checkbox"><input type="checkbox" value="classes"> Turmas</label>
                <label class="settings-checkbox"><input type="checkbox" value="settings"> Configurações do app</label>
              </div>
              <button id="btn-reset-selected" class="btn btn--destructive">🗑️ Resetar selecionados</button>
            </div>

            <div class="settings-group">
              <button id="btn-export-progress" class="btn btn--secondary">Exportar progresso (JSON)</button>
            </div>

            <div class="settings-group">
              <button id="btn-restore-defaults" class="btn btn--secondary">↺ Restaurar padrões</button>
            </div>

            <div class="settings-group">
              <button id="btn-restart-tour" class="btn btn--secondary">🎓 Rever tour guiado</button>
            </div>
          </div>
        </div>
      </div>
    `;

    this._bindEvents(settings);
  }

  _bindEvents(settings) {
    // Tab navigation
    this.container.querySelectorAll('.settings-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        this.container.querySelectorAll('.settings-tab').forEach(t => {
          t.classList.remove('settings-tab--active');
          t.setAttribute('aria-selected', 'false');
        });
        this.container.querySelectorAll('.settings-panel').forEach(p => {
          p.hidden = true;
          p.classList.remove('settings-panel--active');
        });
        tab.classList.add('settings-tab--active');
        tab.setAttribute('aria-selected', 'true');
        const panel = this.container.querySelector(`[data-panel="${tab.dataset.tab}"]`);
        if (panel) {
          panel.hidden = false;
          panel.classList.add('settings-panel--active');
        }
      });
    });

    // Theme
    this.container.querySelectorAll('[name="setting-theme"]').forEach(radio => {
      radio.addEventListener('change', (e) => {
        const s = this._getSettings();
        s.theme = e.target.value;
        this._saveSettings(s);
      });
    });

    // Font size
    this.container.querySelectorAll('[name="setting-fontsize"]').forEach(radio => {
      radio.addEventListener('change', (e) => {
        const s = this._getSettings();
        s.fontSize = e.target.value;
        this._saveSettings(s);
      });
    });

    // Colorblind
    this.container.querySelectorAll('[name="setting-colorblind"]').forEach(radio => {
      radio.addEventListener('change', (e) => {
        const s = this._getSettings();
        s.colorblind = e.target.value;
        this._saveSettings(s);
      });
    });

    // High contrast
    const hcCheckbox = document.getElementById('setting-highcontrast');
    if (hcCheckbox) {
      hcCheckbox.addEventListener('change', (e) => {
        const s = this._getSettings();
        s.highContrast = e.target.checked;
        this._saveSettings(s);
      });
    }

    // Reduced motion
    this.container.querySelectorAll('[name="setting-motion"]').forEach(radio => {
      radio.addEventListener('change', (e) => {
        const s = this._getSettings();
        s.reducedMotion = e.target.value;
        this._saveSettings(s);
      });
    });

    // Sound
    const soundCheckbox = document.getElementById('setting-sound');
    if (soundCheckbox) {
      soundCheckbox.addEventListener('change', (e) => {
        const s = this._getSettings();
        s.soundEnabled = e.target.checked;
        this._saveSettings(s);
        if (window.toggleSound) window.toggleSound();
      });
    }

    // Volume
    const volumeRange = document.getElementById('setting-volume');
    if (volumeRange) {
      volumeRange.addEventListener('input', (e) => {
        const val = e.target.value;
        const s = this._getSettings();
        s.soundVolume = parseInt(val);
        this._saveSettings(s);
        const display = this.container.querySelector('.settings-range-value');
        if (display) display.textContent = val + '%';
      });
    }

    // Reset selected
    const resetBtn = document.getElementById('btn-reset-selected');
    if (resetBtn) {
      resetBtn.addEventListener('click', async () => {
        const checked = Array.from(this.container.querySelectorAll('.settings-checkboxes input:checked')).map(cb => cb.value);
        if (checked.length === 0) {
          this.bus.emit('toast:show', { type: 'warning', message: 'Selecione pelo menos um item para resetar.' });
          return;
        }

        const confirmed = await ConfirmDialog.confirm({
          title: 'Resetar dados selecionados',
          message: `${checked.length} item(ns) serão apagados permanentemente deste dispositivo.`,
          confirmText: 'Resetar selecionados',
          danger: true
        });

        if (!confirmed) return;
        checked.forEach(key => this.storage.remove(key));
        this.bus.emit('toast:show', { type: 'success', message: `${checked.length} item(ns) resetado(s).` });
      });
    }

    // Restore defaults
    const restoreBtn = document.getElementById('btn-restore-defaults');
    if (restoreBtn) {
      restoreBtn.addEventListener('click', async () => {
        const confirmed = await ConfirmDialog.confirm({
          title: 'Restaurar padrões',
          message: 'As configurações de aparência, acessibilidade e áudio voltarão aos valores padrão.',
          confirmText: 'Restaurar padrões'
        });

        if (!confirmed) return;
        this._saveSettings({ ...this.defaults });
        this.render();
      });
    }

    const exportBtn = document.getElementById('btn-export-progress');
    if (exportBtn) {
      exportBtn.addEventListener('click', () => {
        downloadJson('abo-sim-progresso.json', {
          schemaVersion: 1,
          exportedAt: nowIso(),
          metrics: getProgressMetrics(this.storage)
        });
      });
    }

    // Restart tour
    const tourBtn = document.getElementById('btn-restart-tour');
    if (tourBtn) {
      tourBtn.addEventListener('click', () => {
        if (window.ABO && window.ABO.tour) {
          window.ABO.tour.restart();
          this.bus.emit('toast:show', { type: 'info', message: 'Tour reiniciado! Voltando ao início...' });
          setTimeout(() => {
            if (window.ABO.router) window.ABO.router.navigate('home');
          }, 500);
        }
      });
    }
  }
}
