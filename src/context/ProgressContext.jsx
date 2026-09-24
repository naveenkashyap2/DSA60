import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useMemo,
  useRef
} from 'react';
import {
  getProgress,
  setProgress,
  getBookmarks,
  setBookmarks,
  getNotes,
  setNotes,
  getActivity,
  setActivity,
  getSettings,
  setSettings,
  getRecent,
  setRecent,
  getLastQuestion,
  setLastQuestion
} from '../utils/storage.js';
import { todayKey } from '../utils/helpers.js';

const ProgressContext = createContext(null);

const STATUSES = ['not_started', 'in_progress', 'solved'];

export function ProgressProvider({ children }) {
  const [progress, setProgressState] = useState(() => getProgress());
  const [bookmarks, setBookmarksState] = useState(() => getBookmarks());
  const [notes, setNotesState] = useState(() => getNotes());
  const [activity, setActivityState] = useState(() => getActivity());
  const [settings, setSettingsState] = useState(() => getSettings());
  const [recent, setRecentState] = useState(() => getRecent());
  const [lastQuestion, setLastQuestionState] = useState(() => getLastQuestion());

  // Persist slices (skip first render to avoid redundant writes)
  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    setProgress(progress);
  }, [progress]);
  useEffect(() => {
    if (mounted.current) setBookmarks(bookmarks);
  }, [bookmarks]);
  useEffect(() => {
    if (mounted.current) setNotes(notes);
  }, [notes]);
  useEffect(() => {
    if (mounted.current) setActivity(activity);
  }, [activity]);
  useEffect(() => {
    if (mounted.current) setSettings(settings);
  }, [settings]);
  useEffect(() => {
    if (mounted.current) setRecent(recent);
  }, [recent]);

  const statusOf = useCallback(
    (id) => progress[id]?.status || 'not_started',
    [progress]
  );
  const isSolved = useCallback((id) => statusOf(id) === 'solved', [statusOf]);
  const isBookmarked = useCallback(
    (id) => bookmarks.includes(id),
    [bookmarks]
  );

  const logActivity = useCallback((kind, amount = 1) => {
    if (!['solved', 'practiced', 'checkpoints'].includes(kind)) return;
    setActivityState((a) => {
      const key = todayKey();
      const day = a[key] || { solved: 0, practiced: 0, checkpoints: 0 };
      return { ...a, [key]: { ...day, [kind]: (day[kind] || 0) + amount } };
    });
  }, []);

  const setStatus = useCallback(
    (id, status) => {
      if (!STATUSES.includes(status)) return;
      setProgressState((p) => {
        const prev = p[id] || { status: 'not_started', attempts: 0, lastAttempt: null, solvedAt: null };
        const now = new Date().toISOString();
        const next = {
          ...p,
          [id]: {
            ...prev,
            status,
            lastAttempt: now,
            solvedAt: status === 'solved' ? prev.solvedAt || now : null
          }
        };
        return next;
      });
      if (status === 'solved') logActivity('solved');
    },
    [logActivity]
  );

  const toggleSolved = useCallback(
    (id) => {
      const current = progress[id]?.status || 'not_started';
      setStatus(id, current === 'solved' ? 'in_progress' : 'solved');
    },
    [progress, setStatus]
  );

  const recordAttempt = useCallback(
    (id) => {
      setProgressState((p) => {
        const prev = p[id] || { status: 'not_started', attempts: 0, lastAttempt: null, solvedAt: null };
        return {
          ...p,
          [id]: {
            ...prev,
            attempts: (prev.attempts || 0) + 1,
            lastAttempt: new Date().toISOString()
          }
        };
      });
      if (progress[id]?.status !== 'in_progress') {
        // first touch of an untouched question starts it
      }
      if ((progress[id]?.status || 'not_started') === 'not_started') {
        setStatus(id, 'in_progress');
      }
      logActivity('practiced');
    },
    [progress, setStatus, logActivity]
  );

  const toggleBookmark = useCallback(
    (id) => {
      setBookmarksState((b) =>
        b.includes(id) ? b.filter((x) => x !== id) : [...b, id]
      );
    },
    []
  );

  const saveNote = useCallback((id, { note, approach }) => {
    setNotesState((n) => {
      const entry = n[id] || { note: '', approach: '', updatedAt: null };
      const next = {
        ...n,
        [id]: {
          note: note !== undefined ? note : entry.note,
          approach: approach !== undefined ? approach : entry.approach,
          updatedAt: new Date().toISOString()
        }
      };
      return next;
    });
    logActivity('checkpoints');
  }, [logActivity]);

  const deleteNote = useCallback((id) => {
    setNotesState((n) => {
      if (!n[id]) return n;
      const next = { ...n };
      delete next[id];
      return next;
    });
  }, []);

  const touchVisited = useCallback((id) => {
    setLastQuestion(id);
    setLastQuestionState(id);
    setRecentState((r) => [id, ...r.filter((x) => x !== id)].slice(0, 8));
  }, []);

  const updateSettings = useCallback((patch) => {
    setSettingsState((s) => ({ ...s, ...patch }));
  }, []);

  const resetAll = useCallback(() => {
    setProgressState({});
    setBookmarksState([]);
    setNotesState({});
    setActivityState({});
    setRecentState([]);
    setLastQuestion(null);
    setLastQuestionState(null);
    setProgress({});
    setBookmarks([]);
    setNotes({});
    setActivity({});
    setRecent([]);
    setLastQuestion(null);
  }, []);

  const value = useMemo(
    () => ({
      progress,
      bookmarks,
      notes,
      activity,
      settings,
      recent,
      lastQuestion,
      statusOf,
      isSolved,
      isBookmarked,
      setStatus,
      toggleSolved,
      recordAttempt,
      toggleBookmark,
      saveNote,
      deleteNote,
      touchVisited,
      logActivity,
      updateSettings,
      resetAll
    }),
    [
      progress,
      bookmarks,
      notes,
      activity,
      settings,
      recent,
      lastQuestion,
      statusOf,
      isSolved,
      isBookmarked,
      setStatus,
      toggleSolved,
      recordAttempt,
      toggleBookmark,
      saveNote,
      deleteNote,
      touchVisited,
      logActivity,
      updateSettings,
      resetAll
    ]
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used inside ProgressProvider');
  return ctx;
}
