import questions from '../data/questions.js';
import patterns from '../data/patterns.js';

// --- Lookup helpers ----------------------------------------------
export const getQuestion = (idOrSlug) =>
  questions.find((q) => q.id === idOrSlug || q.slug === idOrSlug) || null;

export const getPattern = (idOrSlug) =>
  patterns.find((p) => p.id === idOrSlug || p.slug === idOrSlug) || null;

export const questionsByPattern = (patternId) =>
  questions.filter((q) => q.pattern === patternId);

export const patternQuestionCount = (patternId) => questionsByPattern(patternId).length;

// --- Search -------------------------------------------------------
export function searchAll(term, { limit = 20 } = {}) {
  const t = (term || '').trim().toLowerCase();
  if (!t) return { questions: [], patterns: [] };
  const qMatches = questions
    .filter((q) =>
      [q.title, q.pattern, q.difficulty, q.platform, q.summary]
        .join(' ')
        .toLowerCase()
        .includes(t)
    )
    .slice(0, limit);
  const pMatches = patterns
    .filter(
      (p) =>
        p.name.toLowerCase().includes(t) || p.short.toLowerCase().includes(t)
    )
    .slice(0, 5);
  return { questions: qMatches, patterns: pMatches };
}

// --- Dates --------------------------------------------------------
export function todayKey(date = new Date()) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function dateKeyNDaysAgo(n) {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return todayKey(d);
}

export function formatDate(keyOrIso) {
  if (!keyOrIso) return '—';
  const d = new Date(keyOrIso.length === 10 ? keyOrIso + 'T00:00:00' : keyOrIso);
  if (Number.isNaN(d.getTime())) return '—';
  const today = todayKey();
  const yest = dateKeyNDaysAgo(1);
  if (keyOrIso.length === 10 || true) {
    const k = keyOrIso.slice(0, 10);
    if (k === today) return 'Today';
    if (k === yest) return 'Yesterday';
  }
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

// --- Streak -------------------------------------------------------
// A day is "active" if it has any solved / practiced / checkpoint activity.
export function isDayActive(activity, dayKey) {
  const a = activity[dayKey];
  if (!a) return false;
  return (a.solved || 0) + (a.practiced || 0) + (a.checkpoints || 0) > 0;
}

export function computeStreak(activity) {
  let streak = 0;
  let cursor = 0;
  // Today doesn't break the streak if not active yet.
  if (isDayActive(activity, todayKey())) cursor = 0;
  else cursor = 1;
  for (let i = cursor; i < 3650; i++) {
    if (isDayActive(activity, dateKeyNDaysAgo(i))) streak++;
    else break;
  }
  return streak;
}

// --- Progress aggregation -----------------------------------------
export function patternProgress(progress, patternId) {
  const list = questionsByPattern(patternId);
  const solved = list.filter((q) => progress[q.id]?.status === 'solved').length;
  const total = list.length;
  return {
    solved,
    total,
    pct: total ? Math.round((solved / total) * 100) : 0
  };
}

export function globalStats(progress) {
  const total = questions.length;
  const solved = questions.filter((q) => progress[q.id]?.status === 'solved').length;
  return {
    total,
    solved,
    remaining: total - solved,
    pct: total ? ((solved / total) * 100).toFixed(1) : '0.0'
  };
}

export function activityCountOn(activity, dayKey) {
  const a = activity[dayKey] || {};
  return (a.solved || 0) + (a.practiced || 0) + (a.checkpoints || 0);
}

export function lastNDaysActivity(activity, n) {
  const days = [];
  for (let i = n - 1; i >= 0; i--) {
    const key = dateKeyNDaysAgo(i);
    days.push({
      key,
      label:
        new Date(key + 'T00:00:00').toLocaleDateString('en-IN', { weekday: 'short' }),
      count: activityCountOn(activity, key)
    });
  }
  return days;
}

// --- Misc ----------------------------------------------------------
export function classNames(...parts) {
  return parts.filter(Boolean).join(' ');
}

export function platformLabel(platform) {
  if (!platform) return '';
  if (/leetcode/i.test(platform)) return 'Open LeetCode ↗';
  if (/geeksforgeeks|gfg/i.test(platform)) return 'Open GeeksforGeeks ↗';
  if (/youtube/i.test(platform)) return 'Watch Video ↗';
  return `Open ${platform} ↗`;
}
