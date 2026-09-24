// ---------------------------------------------------------------
// DSA-60 Days — LocalStorage utilities
// All app data lives in the browser. No backend, no API.
// ---------------------------------------------------------------

const KEYS = {
  progress: 'dsa60_progress', // { [questionId]: { status, attempts, lastAttempt, solvedAt } }
  bookmarks: 'dsa60_bookmarks', // [questionId]
  notes: 'dsa60_notes', // { [questionId]: { note, approach, updatedAt } }
  theme: 'dsa60_theme', // 'light' | 'dark'
  activity: 'dsa60_activity', // { 'YYYY-MM-DD': { solved, practiced, checkpoints } }
  user: 'dsa60_user', // current logged-in user
  users: 'dsa60_users', // all signup accounts (demo only)
  settings: 'dsa60_settings', // { dailyGoal }
  recent: 'dsa60_recent', // [questionId] recently viewed
  lastQuestion: 'dsa60_last_question' // last visited question id
};

function read(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (raw === null) return fallback;
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

function write(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

// --- Progress (solved status + attempts) ------------------------
export const getProgress = () => read(KEYS.progress, {});
export const setProgress = (progress) => write(KEYS.progress, progress);

// --- Bookmarks ---------------------------------------------------
export const getBookmarks = () => read(KEYS.bookmarks, []);
export const setBookmarks = (bookmarks) => write(KEYS.bookmarks, bookmarks);

// --- Notes (personal notes + my approach) ------------------------
export const getNotes = () => read(KEYS.notes, {});
export const setNotes = (notes) => write(KEYS.notes, notes);

// --- Theme -------------------------------------------------------
export const getTheme = () => {
  try {
    return localStorage.getItem(KEYS.theme);
  } catch {
    return null;
  }
};
export const setTheme = (theme) => {
  try {
    localStorage.setItem(KEYS.theme, theme);
    return true;
  } catch {
    return false;
  }
};

// --- Daily activity (drives streak + charts + heatmap) -----------
export const getActivity = () => read(KEYS.activity, {});
export const setActivity = (activity) => write(KEYS.activity, activity);

// --- Auth (demo only) --------------------------------------------
export const getCurrentUser = () => read(KEYS.user, null);
export const setCurrentUser = (user) => write(KEYS.user, user);
export const getUsers = () => read(KEYS.users, []);
export const setUsers = (users) => write(KEYS.users, users);

// --- Settings ----------------------------------------------------
export const getSettings = () => read(KEYS.settings, { dailyGoal: 3 });
export const setSettings = (settings) => write(KEYS.settings, settings);

// --- Recently viewed / last visited ------------------------------
export const getRecent = () => read(KEYS.recent, []);
export const setRecent = (recent) => write(KEYS.recent, recent);
export const getLastQuestion = () => read(KEYS.lastQuestion, null);
export const setLastQuestion = (id) => write(KEYS.lastQuestion, id);

export default KEYS;
