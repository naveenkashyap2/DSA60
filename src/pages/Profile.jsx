import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext.jsx';
import { useProgress } from '../context/ProgressContext.jsx';
import {
  getQuestion,
  globalStats,
  computeStreak,
  formatDate
} from '../utils/helpers.js';
import StatCard from '../components/ui/StatCard.jsx';
import ProgressBar from '../components/ui/ProgressBar.jsx';

export default function Profile() {
  const { user, isAuthed, logout } = useAuth();
  const { progress, activity, bookmarks, notes, lastQuestion } = useProgress();

  const stats = globalStats(progress);
  const streak = computeStreak(activity);
  const inProgress = Object.values(progress).filter((v) => v.status === 'in_progress').length;
  const noteCount = Object.keys(notes).filter((id) => notes[id]?.note || notes[id]?.approach).length;
  const continueQ = lastQuestion ? getQuestion(lastQuestion) : null;

  return (
    <div className="space-y-8">
      <header className="card p-5 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <span
            aria-hidden="true"
            className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-brand text-2xl font-extrabold text-white"
          >
            {isAuthed ? (user.name || 'U').slice(0, 1).toUpperCase() : '👤'}
          </span>
          <div className="min-w-0 flex-1">
            {isAuthed ? (
              <>
                <h1 className="text-xl font-extrabold tracking-tight sm:text-2xl">{user.name}</h1>
                <p className="truncate text-sm text-ink/55 dark:text-white/55">{user.email}</p>
                <p className="mt-1 text-xs text-ink/45 dark:text-white/45">
                  Joined {formatDate(user.joined)} · <span className="chip bg-brand-light text-brand-deep dark:bg-brand/20 dark:text-brand">demo account</span>
                </p>
              </>
            ) : (
              <>
                <h1 className="text-xl font-extrabold tracking-tight sm:text-2xl">Guest Learner</h1>
                <p className="mt-1 text-sm text-ink/55 dark:text-white/55">
                  You can learn and track progress without an account — it all stays in your browser.
                </p>
              </>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {isAuthed ? (
              <button type="button" className="btn-outline" onClick={logout}>
                Logout
              </button>
            ) : (
              <>
                <Link to="/login" className="btn-outline">Login</Link>
                <Link to="/signup" className="btn-primary">Sign up</Link>
              </>
            )}
            <Link to="/settings" className="btn-ghost">Settings</Link>
          </div>
        </div>

        {!isAuthed && (
          <div className="mt-4 rounded-xl bg-blush-light px-4 py-3 text-sm dark:bg-blush/15">
            <span aria-hidden="true">💡 </span>
            Create a free demo account to keep your name on your progress. No server involved —
            it's stored locally.
          </div>
        )}
      </header>

      <section aria-label="Your numbers" className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-6">
        <StatCard icon="✅" label="Solved" value={stats.solved} hint={`${stats.pct}% of course`} index={0} accent />
        <StatCard icon="🔵" label="In Progress" value={inProgress} index={1} />
        <StatCard icon="🔥" label="Streak" value={streak} hint="days" index={2} />
        <StatCard icon="🔖" label="Bookmarks" value={bookmarks.length} index={3} />
        <StatCard icon="📝" label="Notes" value={noteCount} index={4} />
        <StatCard icon="📚" label="Remaining" value={stats.remaining} index={5} />
      </section>

      {/* Overall progress */}
      <section className="card p-5" aria-label="Overall progress">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-sm font-bold">Course Completion</h2>
          <span className="text-lg font-extrabold text-brand">{stats.pct}%</span>
        </div>
        <ProgressBar pct={stats.pct} className="mt-3 h-3" label="Overall course progress" />
        <p className="mt-2 text-xs text-ink/50 dark:text-white/50">
          {stats.solved} of {stats.total} problems solved.
        </p>
      </section>

      {/* Continue learning */}
      {continueQ && (
        <section className="card flex flex-col gap-4 border-brand/40 p-5 sm:flex-row sm:items-center" aria-label="Continue learning">
          <span aria-hidden="true" className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-light text-2xl dark:bg-brand/20">
            ⚡
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-bold uppercase tracking-wider text-ink/45 dark:text-white/45">
              Continue learning
            </p>
            <p className="mt-1 truncate text-base font-bold">{continueQ.title}</p>
            <p className="mt-0.5 text-xs text-ink/50 dark:text-white/50">
              {continueQ.pattern} · {continueQ.difficulty}
            </p>
          </div>
          <Link to={`/questions/${continueQ.slug}`} className="btn-primary shrink-0">
            Resume →
          </Link>
        </section>
      )}

      <section className="grid grid-cols-1 gap-3 sm:grid-cols-3" aria-label="Quick links">
        <Link to="/daily-practice" className="card flex items-center gap-3 p-4 transition-colors hover:border-brand/50">
          <span aria-hidden="true" className="text-2xl">📅</span>
          <span>
            <span className="block text-sm font-bold">Daily Practice</span>
            <span className="text-xs text-ink/50 dark:text-white/50">Where should you be today?</span>
          </span>
        </Link>
        <Link to="/revision" className="card flex items-center gap-3 p-4 transition-colors hover:border-brand/50">
          <span aria-hidden="true" className="text-2xl">🔁</span>
          <span>
            <span className="block text-sm font-bold">Revision</span>
            <span className="text-xs text-ink/50 dark:text-white/50">Revisit what matters</span>
          </span>
        </Link>
        <Link to="/progress" className="card flex items-center gap-3 p-4 transition-colors hover:border-brand/50">
          <span aria-hidden="true" className="text-2xl">📈</span>
          <span>
            <span className="block text-sm font-bold">Progress</span>
            <span className="text-xs text-ink/50 dark:text-white/50">Charts, streak & heatmap</span>
          </span>
        </Link>
      </section>
    </div>
  );
}
