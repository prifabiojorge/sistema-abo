export class ScoreManager {
  constructor(storage) {
    this.storage = storage;
    this.key = 'score';
  }

  getScore() {
    return this.storage.get(this.key) || {
      total: 0,
      currentStreak: 0,
      bestStreak: 0,
      typingsCompleted: 0,
      quizzesTaken: 0,
      scenariosCompleted: 0,
      lastUpdated: new Date().toISOString()
    };
  }

  addPoints(points) {
    const score = this.getScore();
    score.total += points;
    score.lastUpdated = new Date().toISOString();
    this.storage.set(this.key, score);
    return score;
  }

  updateStreak(currentStreak) {
    const score = this.getScore();
    score.currentStreak = currentStreak;
    if (currentStreak > score.bestStreak) {
      score.bestStreak = currentStreak;
    }
    this.storage.set(this.key, score);
    return score;
  }

  recordTyping() {
    const score = this.getScore();
    score.typingsCompleted++;
    this.storage.set(this.key, score);
    return score;
  }

  recordQuiz() {
    const score = this.getScore();
    score.quizzesTaken++;
    this.storage.set(this.key, score);
    return score;
  }

  recordScenario() {
    const score = this.getScore();
    score.scenariosCompleted++;
    this.storage.set(this.key, score);
    return score;
  }
}
