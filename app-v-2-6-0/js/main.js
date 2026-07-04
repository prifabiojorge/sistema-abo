import { EventBus } from './core/event-bus.js';
import { StateManager } from './core/state-manager.js';
import { Router } from './core/router.js';
import { ScreenManager } from './core/screen-manager.js';
import { Storage } from './core/storage.js';
import { KeyboardManager } from './core/keyboard.js';
import { ThemeManager } from './ui/theme.js';
import { AccessibilityManager } from './ui/accessibility.js';
import { ToastManager } from './ui/toast.js';
import { TourManager } from './ui/tour.js';
import { initPwaInstallPrompt, openQrCodeModal } from './ui/qr-code.js';
import { SearchPalette } from './ui/search-palette.js';
import { GlossaryManager } from './ui/glossary.js';
import { PresentationMode } from './ui/presentation-mode.js';
import { SimulatorScreen } from './screens/simulator-screen.js';
import { QuizScreen } from './screens/quiz-screen.js';
import { TransfusionScreen } from './screens/transfusion-screen.js';
import { MythsScreen } from './screens/myths-screen.js';
import { EncyclopediaScreen } from './screens/encyclopedia-screen.js';
import { TeacherScreen } from './screens/teacher-screen.js';
import { SettingsScreen } from './screens/settings-screen.js';
import { HistoryScreen } from './screens/history-screen.js';
import { TrailsScreen } from './screens/trails-screen.js';
import { CasesScreen } from './screens/cases-screen.js';
import { DashboardScreen } from './screens/dashboard-screen.js';
import { MinigameScreen } from './screens/minigame-screen.js';
import { ScoreManager } from './game/score-manager.js';
import { Achievements } from './game/achievements.js';
import { Leaderboard } from './game/leaderboard.js';
import { audio } from './audio/audio-engine.js';

const bus = new EventBus();
const state = new StateManager(bus);
const router = new Router(bus);
const screenManager = new ScreenManager(bus);
const storage = new Storage();
const theme = new ThemeManager(storage);
const a11y = new AccessibilityManager(storage);
const toasts = new ToastManager(bus);
const keyboard = new KeyboardManager(bus, router);
const tour = new TourManager(storage, bus);
const search = new SearchPalette(bus, router, storage);
const glossary = new GlossaryManager(bus);
const presentation = new PresentationMode(bus, router, storage);
const scoreManager = new ScoreManager(storage);
const achievements = new Achievements(storage, bus);
const leaderboard = new Leaderboard(storage);
const simulator = new SimulatorScreen(bus, state, storage);
const quiz = new QuizScreen(bus, state, storage);
const transfusion = new TransfusionScreen(bus, state, storage, scoreManager, achievements);
const myths = new MythsScreen(bus, storage, achievements);
const encyclopedia = new EncyclopediaScreen(bus, storage, achievements);
const teacher = new TeacherScreen(bus, storage);
const settings = new SettingsScreen(bus, storage);
const history = new HistoryScreen(bus, storage);
const trails = new TrailsScreen(bus, storage);
const cases = new CasesScreen(bus, storage);
const dashboard = new DashboardScreen(bus, storage);
const minigame = new MinigameScreen(bus, storage);

window.ABO = { bus, state, router, screenManager, storage, theme, a11y, toasts, keyboard, tour, search, glossary, presentation, scoreManager, achievements, leaderboard, simulator, quiz, transfusion, myths, encyclopedia, teacher, settings, history, trails, cases, dashboard, minigame };

function registerScreens() {
  screenManager.register('simulator', {
    init: () => simulator.init(),
    skeletonTarget: '#info-panel'
  });

  screenManager.register('quiz', {
    init: () => quiz.init(),
    enter: () => quiz.start(),
    skeletonTarget: '#quiz-content',
    skeleton: 'quiz'
  });

  screenManager.register('transfusion', {
    init: () => transfusion.init(),
    enter: () => {
      transfusion.currentIndex = 0;
      transfusion.render();
    },
    skeletonTarget: '#transfusion-content',
    skeleton: 'card'
  });

  screenManager.register('myths', {
    init: () => myths.init(),
    enter: () => myths.render(),
    skeletonTarget: '#myths-content',
    skeleton: 'grid'
  });

  screenManager.register('encyclopedia', {
    init: () => encyclopedia.init(),
    enter: () => encyclopedia.render(),
    skeletonTarget: '#encyclopedia-content',
    skeleton: 'grid'
  });

  screenManager.register('teacher', {
    init: () => teacher.init(),
    enter: () => teacher.authenticated ? teacher.renderDashboard() : teacher.renderLogin(),
    skeletonTarget: '#teacher-content',
    skeleton: 'card'
  });

  screenManager.register('history', {
    init: () => history.init(),
    enter: () => history.render(),
    skeletonTarget: '#history-content',
    skeleton: 'card'
  });

  screenManager.register('trails', {
    init: () => trails.init(),
    enter: () => trails.render(),
    skeletonTarget: '#trails-content',
    skeleton: 'grid'
  });

  screenManager.register('cases', {
    init: () => cases.init(),
    enter: () => cases.render(),
    skeletonTarget: '#cases-content',
    skeleton: 'grid'
  });

  screenManager.register('dashboard', {
    init: () => dashboard.init(),
    enter: () => dashboard.render(),
    skeletonTarget: '#dashboard-content',
    skeleton: 'grid'
  });

  screenManager.register('minigame', {
    init: () => minigame.init(),
    enter: () => minigame.enter(),
    skeletonTarget: '#minigame-content',
    skeleton: 'card'
  });
}

function init() {
  console.log("ABO Pai d'égua v2.6.0 inicializando...");
  state.init();
  theme.init();
  a11y.init();
  toasts.init();
  bus.on('qr:open', () => openQrCodeModal({ bus }));
  initPwaInstallPrompt(bus);
  keyboard.init();
  settings.init();
  search.init();
  glossary.init();
  presentation.init();
  registerScreens();
  screenManager.init();
  router.init();
  tour.init();

  bus.emit('app:ready');

  const savedScore = storage.get('score');
  const scoreBadge = document.getElementById('home-score');
  if (savedScore && savedScore.total > 0 && scoreBadge) {
    scoreBadge.textContent = `🏆 Score: ${savedScore.total}`;
    scoreBadge.hidden = false;
  }

  console.log("ABO Pai d'égua v2.6.0 pronto!");
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
