import { EventBus } from './core/event-bus.js';
import { StateManager } from './core/state-manager.js';
import { Router } from './core/router.js';
import { Storage } from './core/storage.js';
import { ThemeManager } from './ui/theme.js';
import { AccessibilityManager } from './ui/accessibility.js';
import { SimulatorScreen } from './screens/simulator-screen.js';
import { QuizScreen } from './screens/quiz-screen.js';
import { TransfusionScreen } from './screens/transfusion-screen.js';
import { MythsScreen } from './screens/myths-screen.js';
import { EncyclopediaScreen } from './screens/encyclopedia-screen.js';
import { TeacherScreen } from './screens/teacher-screen.js';
import { ScoreManager } from './game/score-manager.js';
import { Achievements } from './game/achievements.js';
import { Leaderboard } from './game/leaderboard.js';
import { audio } from './audio/audio-engine.js';

const bus = new EventBus();
const state = new StateManager(bus);
const router = new Router(bus);
const storage = new Storage();
const theme = new ThemeManager(storage);
const a11y = new AccessibilityManager(storage);
const scoreManager = new ScoreManager(storage);
const achievements = new Achievements(storage, bus);
const leaderboard = new Leaderboard(storage);
const simulator = new SimulatorScreen(bus, state, storage);
const quiz = new QuizScreen(bus, state, storage);
const transfusion = new TransfusionScreen(bus, state, storage, scoreManager, achievements);
const myths = new MythsScreen(bus, storage, achievements);
const encyclopedia = new EncyclopediaScreen(bus, storage, achievements);
const teacher = new TeacherScreen(bus, storage);

window.ABO = { bus, state, router, storage, theme, a11y, scoreManager, achievements, leaderboard, simulator, quiz, transfusion, myths, encyclopedia, teacher };

function init() {
  console.log('[ABO Sim] Inicializando...');
  router.init();
  state.init();
  theme.init();
  a11y.init();
  simulator.init();
  quiz.init();
  transfusion.init();
  myths.init();
  encyclopedia.init();
  teacher.init();

  bus.emit('app:ready');

  const savedScore = storage.get('score');
  const scoreBadge = document.getElementById('home-score');
  if (savedScore && savedScore.total > 0 && scoreBadge) {
    scoreBadge.textContent = `🏆 Score: ${savedScore.total}`;
    scoreBadge.hidden = false;
  }

  console.log('[ABO Sim] Pronto!');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
