export class StateManager {
  constructor(eventBus) {
    this.bus = eventBus;
    this.state = {
      screen: 'home',
      theme: 'dark',
      highContrast: false,
      score: {
        total: 0,
        currentStreak: 0,
        bestStreak: 0,
        typingsCompleted: 0,
        quizzesTaken: 0,
        scenariosCompleted: 0
      },
      achievements: {
        unlocked: [],
        progress: {}
      },
      simulation: {
        mode: 'discovery',
        selectedType: null,
        wells: {
          'anti-a': { filled: false, agglutinated: null },
          'anti-b': { filled: false, agglutinated: null },
          'anti-d': { filled: false, agglutinated: null }
        },
        completed: false
      },
      quiz: {
        currentQuestion: 0,
        questions: [],
        answers: [],
        timer: null
      }
    };
  }

  init() {
    this.bus.on('state:update', ({ key, value }) => {
      this.set(key, value);
    });
  }

  get(key) {
    return key.split('.').reduce((obj, k) => obj?.[k], this.state);
  }

  set(key, value) {
    const keys = key.split('.');
    let target = this.state;
    for (let i = 0; i < keys.length - 1; i++) {
      if (!(keys[i] in target)) target[keys[i]] = {};
      target = target[keys[i]];
    }
    const oldValue = target[keys[keys.length - 1]];
    target[keys[keys.length - 1]] = value;
    this.bus.emit('state:changed', { key, value, oldValue });
  }

  getAll() {
    return structuredClone ? structuredClone(this.state) : JSON.parse(JSON.stringify(this.state));
  }
}
