const ACHIEVEMENTS_DEF = [
  { id: 'ACH01', name: 'Primeiro Teste', desc: 'Completar 1 tipagem', icon: '🩸', condition: (s) => s.typingsCompleted >= 1 },
  { id: 'ACH02', name: 'Hematologista Mirim', desc: 'Completar tipagem de todos os 8 tipos', icon: '🔬', condition: (s, p) => (p.uniqueTypings || new Set()).size >= 8 },
  { id: 'ACH03', name: 'Quiz Master', desc: 'Acertar 10/10 no quiz', icon: '🏆', condition: (s, p) => p.quizPerfect10 },
  { id: 'ACH04', name: 'Sem Errar', desc: 'Quiz perfeito sem erro', icon: '⭐', condition: (s, p) => p.quizZeroWrong },
  { id: 'ACH05', name: 'Streak de Fogo', desc: 'Streak de 10 respostas certas', icon: '🔥', condition: (s) => s.bestStreak >= 10 },
  { id: 'ACH06', name: 'Enciclopedista', desc: 'Visitar todos os verbetes', icon: '📚', condition: (s, p) => (p.encyclopediaVisited || new Set()).size >= 12 },
  { id: 'ACH07', name: 'Caçador de Mitos', desc: 'Completar todos os Mitos vs. Fatos', icon: '🕵️', condition: (s, p) => (p.mythsCompleted || new Set()).size >= 10 },
  { id: 'ACH08', name: 'Salva-vidas', desc: 'Acertar todos os cenários de transfusão', icon: '❤️', condition: (s, p) => (p.scenariosCompleted || new Set()).size >= 5 }
];

export class Achievements {
  constructor(storage, eventBus) {
    this.storage = storage;
    this.bus = eventBus;
    this.key = 'achievements';
  }

  getState() {
    return this.storage.get(this.key) || {
      unlocked: [],
      progress: {}
    };
  }

  check(scoreData, progressData = {}) {
    const state = this.getState();
    const unlocked = new Set(state.unlocked);
    const newUnlocks = [];

    for (const ach of ACHIEVEMENTS_DEF) {
      if (unlocked.has(ach.id)) continue;
      if (ach.condition(scoreData, progressData)) {
        unlocked.add(ach.id);
        newUnlocks.push(ach);
      }
    }

    if (newUnlocks.length > 0) {
      state.unlocked = Array.from(unlocked);
      this.storage.set(this.key, state);
      for (const ach of newUnlocks) {
        this._notify(ach);
        if (window.playSound) window.playSound('achievement');
      }
    }

    return newUnlocks;
  }

  _notify(achievement) {
    this.bus.emit('achievement:unlocked', achievement);

    this.bus.emit('toast:show', {
      type: 'achievement',
      message: `<strong>${achievement.icon} Conquista desbloqueada!</strong><br>${achievement.name}`,
      duration: 4500
    });
  }

  list() {
    const state = this.getState();
    const unlocked = new Set(state.unlocked);
    return ACHIEVEMENTS_DEF.map(ach => ({
      ...ach,
      unlocked: unlocked.has(ach.id)
    }));
  }
}
