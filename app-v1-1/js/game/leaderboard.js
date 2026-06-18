export class Leaderboard {
  constructor(storage) {
    this.storage = storage;
    this.key = 'leaderboard';
  }

  getEntries() {
    return this.storage.get(this.key) || [];
  }

  addEntry(nickname, score) {
    const entries = this.getEntries();
    entries.push({ nickname, score, date: new Date().toISOString() });
    entries.sort((a, b) => b.score - a.score);
    if (entries.length > 10) entries.length = 10;
    this.storage.set(this.key, entries);
    return entries;
  }

  getTop10() {
    return this.getEntries().slice(0, 10);
  }
}
