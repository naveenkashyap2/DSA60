import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useProgress } from '../context/ProgressContext.jsx';
import SearchBar from '../components/ui/SearchBar.jsx';
import StatCard from '../components/ui/StatCard.jsx';
import ProgressBar from '../components/ui/ProgressBar.jsx';
import JourneyStrip from '../components/journey/JourneyStrip.jsx';
import QuestionCard from '../components/question/QuestionCard.jsx';
import {
  getQuestion,
  globalStats,
  computeStreak,
  lastNDaysActivity,
  todayKey,
  patternProgress
} from '../utils/helpers.js';
import { patterns } from '../data/patterns.js';
import { QUESTIONS } from '../data/questions.js';
import { TOTAL_DAYS } from '../data/journey.js';

export default function Home() {
  const { progress, activity, recent, lastQuestion, bookmarks } = useProgress();
  const navigate = useNavigate();

  const stats = globalStats(progress);
  const streak = computeStreak(activity);
  const today = activity[todayKey()] || {};
  const todayCount = (today.solved || 0) + (today.practiced || 0) + (today.checkpoints || 0);
  const week = lastNDaysActivity(activity, 7).reduce((s, d) => s + d.count, 0);

  const continueQ = lastQuestion ? getQuestion(lastQuestion) : null;
  const recentQs = (recent || [])
    .map((id) => getQuestion(id))
    .filter(Boolean)
    .slice(0, 6);

  const journeySolved = QUESTIONS.filter((q) => progress[q.id]?.status === 'solved').length;

  return (
    <div>
      {/* Hero */}
      <section className="border-b border-line bg-gradient-to-b from-brand-light/60 to-white dark:border-night-line dark:from-brand/10 dark:to-night">
        <div className="container-app py-12 sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <p className="chip bg-brand-light text-brand-deep dark:bg-brand/20 dark:text-brand">
              🗓️ 60 days · 16 patterns · {QUESTIONS.length} problems
            </p>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              Master DSA Patterns.
              <br />
              <span className="text-brand">Solve Problems.</span>
              <br />
              Build Strong Logic.
            </h1>
            <p className="mt-4 text-base text-ink/60 dark:text-white/60 sm:text-lg">
              Learn. Solve. Track. Revise. — a complete pattern-first DSA course with progressive
              hints, dry runs, solutions and a 60-day practice plan.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/patterns" className="btn-primary px-6">
                Start Learning →
              </Link>
              <Link to="/questions" className="btn-outline px-6">
                Browse Questions
              </Link>
              <Link to="/daily-practice" className="btn-ghost px-2">
                View 60-Day Journey
              </Link>
            </div>
            <div className="mt-8 max-w-xl">
              <SearchBar placeholder="Search problems, patterns, difficulty, platform…" />
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container-app space-y-12 py-10">
        {/* Continue learning */}
        {continueQ && (
          <section aria-label="Continue learning">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="card flex flex-col gap-4 border-brand/40 p-5 sm:flex-row sm:items-center"
            >
              <span aria-hidden="true" className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-light text-2xl dark:bg-brand/20">
                ⚡
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold uppercase tracking-wider text-ink/45 dark:text-white/45">
                  Continue learning
                </p>
                <p className="mt-1 truncate text-base font-bold">{continueQ.title}</p>
                <p className="mt-0.5 truncate text-xs text-ink/50 dark:text-white/50">
                  {continueQ.pattern} · {continueQ.difficulty} · {continueQ.platform || '—'}
                </p>
              </div>
              <button type="button" className="btn-primary shrink-0" onClick={() => navigate(`/questions/${continueQ.slug}`)}>
                Resume →
              </button>
            </motion.div>
          </section>
        )}

        {/* Stats */}
        <section aria-label="Your stats">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-6">
            <StatCard icon="📚" label="Total" value={stats.total} hint="questions in the course" index={0} />
            <StatCard icon="✅" label="Solved" value={stats.solved} hint={`${stats.pct}% of the course`} index={1} accent />
            <StatCard icon="🎯" label="Remaining" value={stats.remaining} hint="still to solve" index={2} />
            <StatCard icon="🔥" label="Streak" value={`${streak} ${streak === 1 ? 'day' : 'days'}`} hint="consecutive active days" index={3} />
            <StatCard icon="📅" label="Today" value={todayCount} hint="actions today" index={4} />
            <StatCard icon="📆" label="This Week" value={week} hint="actions in 7 days" index={5} />
          </div>
        </section>

        {/* Journey */}
        <section aria-label="60-day journey">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
            <div>
              <h2 className="section-title">60-Day Journey</h2>
              <p className="mt-1 text-sm text-ink/55 dark:text-white/55">
                One pattern at a time — {journeySolved}/{QUESTIONS.length} questions solved across {TOTAL_DAYS} days.
              </p>
            </div>
            <Link to="/daily-practice" className="text-sm font-semibold text-brand hover:underline">
              Go to Daily Practice →
            </Link>
          </div>
          <div className="card p-4 sm:p-5">
            <JourneyStrip />
          </div>
        </section>

        {/* Recently viewed */}
        {recentQs.length > 0 && (
          <section aria-label="Recently viewed">
            <h2 className="section-title mb-4">Recently Viewed</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {recentQs.map((q, i) => (
                <QuestionCard key={q.id} question={q} index={i} />
              ))}
            </div>
          </section>
        )}

        {/* Patterns */}
        <section aria-label="Patterns">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
            <div>
              <h2 className="section-title">The 16 Patterns</h2>
              <p className="mt-1 text-sm text-ink/55 dark:text-white/55">
                Every problem in this course maps to exactly one pattern.
              </p>
            </div>
            <Link to="/patterns" className="text-sm font-semibold text-brand hover:underline">
              All patterns →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {patterns.map((p, i) => {
              const pp = patternProgress(progress, p.id);
              return (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: 'easeOut', delay: Math.min(i * 0.03, 0.3) }}
                >
                  <Link to={`/patterns/${p.slug}`} className="card flex h-full flex-col p-4 transition-colors hover:border-brand/50">
                    <div className="flex items-center gap-2.5">
                      <span aria-hidden="true" className="grid h-10 w-10 place-items-center rounded-xl bg-brand-light text-xl dark:bg-brand/20">
                        {p.emoji}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-bold">{p.name}</p>
                        <p className="text-[11px] font-medium text-ink/45 dark:text-white/45">
                          {pp.solved}/{pp.total} solved
                        </p>
                      </div>
                    </div>
                    <p className="mt-3 line-clamp-2 flex-1 text-xs leading-relaxed text-ink/55 dark:text-white/55">
                      {p.short}
                    </p>
                    <ProgressBar pct={pp.pct} className="mt-3" label={`${p.name} progress`} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
