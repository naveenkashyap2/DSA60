import { useState } from 'react';
import { useTheme } from '../context/ThemeContext.jsx';
import { useProgress } from '../context/ProgressContext.jsx';
import { useToast } from '../context/ToastContext.jsx';

export default function Settings() {
  const { isDark, toggleTheme } = useTheme();
  const { settings, updateSettings, resetAll } = useProgress();
  const { push } = useToast();
  const [goal, setGoal] = useState(settings.dailyGoal || 3);
  const [confirming, setConfirming] = useState(false);

  return (
    <div className="max-w-2xl space-y-6">
      <header>
        <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Settings</h1>
        <p className="mt-1 text-sm text-ink/60 dark:text-white/60">
          Preferences are stored locally (localStorage) on this device.
        </p>
      </header>

      {/* Appearance */}
      <section className="card p-5" aria-label="Appearance">
        <h2 className="text-sm font-bold">🎨 Appearance</h2>
        <div className="mt-4 flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold">Theme</p>
            <p className="text-xs text-ink/50 dark:text-white/50">
              Currently: {isDark ? 'Dark' : 'Light'}
            </p>
          </div>
          <button type="button" className="btn-outline" onClick={toggleTheme}>
            {isDark ? '☀️ Switch to Light' : '🌙 Switch to Dark'}
          </button>
        </div>
      </section>

      {/* Daily goal */}
      <section className="card p-5" aria-label="Daily goal">
        <h2 className="text-sm font-bold">🎯 Daily Goal</h2>
        <p className="mt-1 text-xs text-ink/55 dark:text-white/55">
          How many actions (solves, practice opens) do you want per day? The dashboard celebrates
          when you hit it.
        </p>
        <div className="mt-4 flex items-center gap-4">
          <label className="flex items-center gap-2 text-sm font-semibold">
            <span>Goal:</span>
            <input
              type="number"
              min="1"
              max="20"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="input w-24 text-center"
              aria-label="Daily goal number"
            />
            <span>actions/day</span>
          </label>
          <button
            type="button"
            className="btn-primary"
            onClick={() => {
              const g = Math.min(20, Math.max(1, Number(goal) || 3));
              updateSettings({ dailyGoal: g });
              setGoal(g);
              push(`Daily goal set to ${g}`, 'success');
            }}
          >
            Save goal
          </button>
        </div>
      </section>

      {/* Data */}
      <section className="card p-5" aria-label="Data">
        <h2 className="text-sm font-bold">🗄️ Data & Privacy</h2>
        <p className="mt-2 text-xs leading-relaxed text-ink/55 dark:text-white/55">
          DSA-60 Days is 100% frontend: your solved status, attempts, bookmarks, notes, streak and
          theme live in this browser's localStorage. Nothing is sent to a server.
        </p>

        <div className="mt-4 rounded-xl border border-blush/50 bg-blush-light/60 p-4 dark:bg-blush/10">
          <p className="text-sm font-bold">Danger zone</p>
          {!confirming ? (
            <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
              <p className="text-xs text-ink/60 dark:text-white/60">
                Reset all progress, bookmarks, notes, activity and settings.
              </p>
              <button type="button" className="btn-outline text-xs" onClick={() => setConfirming(true)}>
                Reset all data…
              </button>
            </div>
          ) : (
            <div className="mt-2 space-y-2">
              <p className="text-xs font-semibold">Are you sure? This cannot be undone.</p>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  className="btn bg-blush text-xs text-white"
                  onClick={() => {
                    resetAll();
                    setConfirming(false);
                    push('All data reset', 'info');
                  }}
                >
                  Yes, reset everything
                </button>
                <button type="button" className="btn-ghost text-xs" onClick={() => setConfirming(false)}>
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
