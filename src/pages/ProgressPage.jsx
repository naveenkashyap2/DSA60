import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useProgress } from '../context/ProgressContext.jsx';
import {
  globalStats,
  computeStreak,
  todayKey,
  lastNDaysActivity,
  patternProgress
} from '../utils/helpers.js';
import { patterns } from '../data/patterns.js';
import StatCard from '../components/ui/StatCard.jsx';
import ProgressBar from '../components/ui/ProgressBar.jsx';
import ActivityBars from '../components/charts/ActivityBars.jsx';
import Heatmap from '../components/charts/Heatmap.jsx';

export default function ProgressPage() {
  const { progress, activity, settings } = useProgress();
  const [heatRange, setHeatRange] = useState(60);

  // Everything below is computed live from localStorage-backed state.
  const stats = globalStats(progress);
  const streak = computeStreak(activity);
  const todayA = activity[todayKey()] || {};
  const todayCount = (todayA.solved || 0) + (todayA.practiced || 0) + (todayA.checkpoints || 0);
  const week = lastNDaysActivity(activity, 7).reduce((s, d) => s + d.count, 0);
  const bars = lastNDaysActivity(activity, 14);
  const goal = settings.dailyGoal || 3;
  const goalMet = todayCount >= goal;

  return (
    <div className="space-y-8">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Your Progress</h1>
          <p className="mt-1 text-sm text-ink/60 dark:text-white/60">
            All numbers are computed live from your local progress — nothing is hardcoded.
          </p>
        </div>
        {goalMet && (
          <span className="chip bg-brand-light text-brand-deep dark:bg-brand/20 dark:text-brand">
            🎯 Daily goal met ({todayCount}/{goal})
          </span>
        )}
      </header>

      {/* Stats */}
      <section aria-label="Statistics" className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-7">
        <StatCard icon="📚" label="Total" value={stats.total} index={0} />
        <StatCard icon="✅" label="Solved" value={stats.solved} index={1} accent />
        <StatCard icon="🎯" label="Remaining" value={stats.remaining} index={2} />
        <StatCard icon="📊" label="Progress" value={`${stats.pct}%`} index={3} />
        <StatCard icon="🔥" label="Streak" value={streak} hint="days in a row" index={4} />
        <StatCard icon="📅" label="Today" value={todayCount} hint={`goal: ${goal}`} index={5} />
        <StatCard icon="📆" label="This Week" value={week} hint="last 7 days" index={6} />
      </section>

      {/* Chart row */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <section aria-label="Daily activity" className="card p-5">
          <div className="flex items-center justify-between gap-2">
            <h2 className="text-sm font-bold">Daily Activity</h2>
            <span className="text-xs text-ink/45 dark:text-white/45">last 14 days</span>
          </div>
          <div className="mt-4">
            <ActivityBars days={bars} />
          </div>
        </section>

        <section aria-label="Activity heatmap" className="card p-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-sm font-bold">Activity Heatmap</h2>
            <div className="inline-flex rounded-xl bg-black/5 p-1 dark:bg-white/10" role="group" aria-label="Heatmap range">
              {[30, 60].map((r) => (
                <button
                  key={r}
                  type="button"
                  aria-pressed={heatRange === r}
                  onClick={() => setHeatRange(r)}
                  className={`min-h-[32px] rounded-lg px-3 text-xs font-semibold transition-colors ${
                    heatRange === r
                      ? 'bg-ink text-white dark:bg-white/90 dark:text-ink'
                      : 'text-ink/55 hover:text-ink dark:text-white/55 dark:hover:text-white'
                  }`}
                >
                  {r} days
                </button>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <Heatmap activity={activity} range={heatRange} />
          </div>
        </section>
      </div>

      {/* Pattern progress */}
      <section aria-label="Pattern progress" className="card p-5">
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-sm font-bold">Pattern Progress</h2>
          <Link to="/patterns" className="text-xs font-semibold text-brand hover:underline">
            All patterns →
          </Link>
        </div>
        <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-3 md:grid-cols-2">
          {patterns.map((p, i) => {
            const pp = patternProgress(progress, p.id);
            return (
              <motion.li
                key={p.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut', delay: Math.min(i * 0.02, 0.25) }}
              >
                <Link to={`/patterns/${p.slug}`} className="group block">
                  <div className="flex items-center justify-between gap-2 text-sm">
                    <span className="flex min-w-0 items-center gap-2 font-semibold group-hover:text-brand">
                      <span aria-hidden="true">{p.emoji}</span>
                      <span className="truncate">{p.name}</span>
                    </span>
                    <span className="shrink-0 text-xs font-bold text-ink/50 dark:text-white/50">
                      {pp.solved}/{pp.total}
                    </span>
                  </div>
                  <div className="mt-1.5 flex items-center gap-2">
                    <ProgressBar pct={pp.pct} className="h-1.5 flex-1" label={`${p.name} progress`} />
                    <span className="w-9 text-right text-[11px] font-bold text-brand">{pp.pct}%</span>
                  </div>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
