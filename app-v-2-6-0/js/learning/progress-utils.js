export const BLOOD_LABEL_TO_ID = {
  'A+': 'A_POS', 'A-': 'A_NEG',
  'B+': 'B_POS', 'B-': 'B_NEG',
  'AB+': 'AB_POS', 'AB-': 'AB_NEG',
  'O+': 'O_POS', 'O-': 'O_NEG'
};

export const BLOOD_ID_TO_LABEL = Object.fromEntries(
  Object.entries(BLOOD_LABEL_TO_ID).map(([label, id]) => [id, label])
);

export const COMPATIBILITY = {
  'A+': ['A+', 'A-', 'O+', 'O-'],
  'A-': ['A-', 'O-'],
  'B+': ['B+', 'B-', 'O+', 'O-'],
  'B-': ['B-', 'O-'],
  'AB+': ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  'AB-': ['A-', 'B-', 'AB-', 'O-'],
  'O+': ['O+', 'O-'],
  'O-': ['O-']
};

export function normalizeBloodLabel(value) {
  return BLOOD_ID_TO_LABEL[value] || value;
}

export function isCompatibleRecipient(patientType, donorType) {
  const patient = normalizeBloodLabel(patientType);
  const donor = normalizeBloodLabel(donorType);
  return (COMPATIBILITY[patient] || []).includes(donor);
}

export function nowIso() {
  return new Date().toISOString();
}

export function formatDateTime(iso) {
  if (!iso) return 'Sem data';
  return new Date(iso).toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  });
}

export function readSet(storage, key) {
  return new Set(storage.get(key) || []);
}

export function writeSet(storage, key, value) {
  storage.set(key, Array.from(value));
}

export function getProgressMetrics(storage) {
  const score = storage.get('score') || {};
  const quizHistory = storage.get('quiz-history') || [];
  const history = storage.get('history') || [];
  const caseProgress = storage.get('case-progress') || {};
  const encyclopediaVisited = storage.get('encyclopedia-visited') || [];
  const mythsCompleted = storage.get('myths-completed') || [];
  const bookmarks = storage.get('bookmarks') || [];
  const achievements = storage.get('achievements') || { unlocked: [] };
  const comparisons = storage.get('comparisons') || [];

  return {
    score,
    quizHistory,
    history,
    caseProgress,
    encyclopediaVisited,
    mythsCompleted,
    bookmarks,
    achievements,
    comparisons,
    typingsCompleted: score.typingsCompleted || history.length || 0,
    quizzesTaken: quizHistory.length,
    scenariosCompleted: score.scenariosCompleted || 0,
    casesCompleted: Object.values(caseProgress).filter(item => item.completed).length,
    historyCount: history.length,
    comparisonsCount: comparisons.length
  };
}

export function csvEscape(value) {
  const text = String(value ?? '');
  return `"${text.replace(/"/g, '""')}"`;
}

export function downloadText(filename, text, mime = 'text/plain;charset=utf-8') {
  const blob = new Blob([text], { type: mime });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

export function downloadJson(filename, data) {
  downloadText(filename, JSON.stringify(data, null, 2), 'application/json;charset=utf-8');
}
