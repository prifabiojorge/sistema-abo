const PREFIX = 'abo-sim-';

export class Storage {
  get(key) {
    try {
      const raw = localStorage.getItem(PREFIX + key);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      console.error(`[Storage] Erro ao ler "${key}":`, e);
      return null;
    }
  }

  set(key, value) {
    try {
      localStorage.setItem(PREFIX + key, JSON.stringify(value));
    } catch (e) {
      console.error(`[Storage] Erro ao salvar "${key}":`, e);
    }
  }

  remove(key) {
    localStorage.removeItem(PREFIX + key);
  }

  clear() {
    Object.keys(localStorage)
      .filter(k => k.startsWith(PREFIX))
      .forEach(k => localStorage.removeItem(k));
  }
}
