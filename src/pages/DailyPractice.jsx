import { useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { DAYS, TOTAL_DAYS, patternDaySpans } from '../data/journey.js';
import { getQuestion, questionsByPattern } from '../utils/helpers.js';
import { useProgress } from '../context/ProgressContext.jsx';
import ProgressBar from '../components/ui/ProgressBar.jsx';
import JourneyStrip from '../components/journey/JourneyStrip.jsx';
import { StatusBadge, DifficultyBadge } from '../components/ui/Badge.jsx';
import { patterns } from '../data/patterns.js';

export default function DailyPractice() {
  const { progress } = useProgress();
  const navigate = useNavigate();

  // Current day = first day that is not fully solved (data-driven).
  const currentDay = useMemo(() => {
    const day = DAYS.find((d) =>
      d.questionIds.some((id) => progress[id]?.status !== 'solved')
    );
    return day || DAYS[DAYS.length - 1];
  }, [progress]);

  const dayQuestions = useMemo(
    () => currentDay.questionIds.map((id) => getQuestion(id)).filter(Boolean),
    [currentDay]
  );

  const solvedInDay = dayQuestions.filter((q) => progress[q.id]?.status === 'solved').length;
  const pct = currentDay.count ? Math.round((solvedInDay / currentDay.count) * 100) : 0;

  const firstUnsolved = dayQuestions.find((q) => progress[q.id]?.status !== 'solved');
  const startTarget = firstUnsolved || dayQuestions[0];

  const patternSolved = (pid) => {
    const qs = questionsByPattern(pid);
    return qs.filter((q) => progress[q.id]?.status === 'solved').length;
  };
  const spans = patternDaySpans();
  const totalSolved = patterns.reduce((s, p) => s + patternSolved(p.id), 0);

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">60-Day Journey</h1>
        <p className="mt-1 text-sm text-ink/60 dark:text-white/60">
          One pattern per day stretch · all {totalSolved} / {DAYS.reduce((s, d) => s + d.count, 0)} questions covered across {TOTAL_DAYS} days.
        </p>
      </header>

      {/* Current day card */}
      <motion.section
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="card border-brand/40 p-5 sm:p-6"
        aria-label="Today's practice"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-brand text-white">
              <div className="text-center leading-none">
                <div className="text-[10px] font-semibold uppercase tracking-wider opacity-80">Day</div>
                <div className="text-2xl font-extrabold">{currentDay.day}</div>
              </div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-ink/45 dark:text-white/45">
                {currentDay.focus}
              </p>
              <h2 className="mt-1 text-lg font-extrabold sm:text-xl">
                Day {currentDay.day} of {TOTAL_DAYS}
              </h2>
              <p className="text-sm text-ink/55 dark:text-white/55">
                {currentDay.count} question{currentDay.count === 1 ? '' : 's'} today · {solvedInDay} done
              </p>
            </div>
          </div>
          <div className="flex-1 sm:px-4">
            <ProgressBar pct={pct} label="Today's progress" />
          </div>
          {startTarget && (
            <button
              type="button"
              className="btn-primary shrink-0 px-6"
              onClick={() => navigate(`/questions/${startTarget.slug}`)}
            >
              {firstUnsolved ? 'Start Practice →' : 'Day complete — review →'}
            </button>
          )}
        </div>

        {/* Day's questions */}
        <ol className="mt-5 space-y-2">
          {dayQuestions.map((q, i) => {
            const st = progress[q.id]?.status || 'not_started';
            return (
              <li key={q.id}>
                <Link
                  to={`/questions/${q.slug}`}
                  className={`flex items-center gap-3 rounded-xl border px-3.5 py-2.5 transition-colors ${
                    st === 'solved'
                      ? 'border-brand/30 bg-brand-light/50 dark:bg-brand/10'
                      : 'border-line bg-white hover:border-brand/40 dark:border-night-line dark:bg-night-card'
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-bold ${
                      st === 'solved' ? 'bg-brand text-white' : 'bg-black/5 text-ink/60 dark:bg-white/10 dark:text-white/60'
                    }`}
                  >
                    {st === 'solved' ? '✓' : i + 1}
                  </span>
                  <span className="min-w-0 flex-1 truncate text-sm font-semibold">{q.title}</span>
                  <DifficultyBadge difficulty={q.difficulty} />
                  <StatusBadge status={st} />
                  <span aria-hidden="true" className="hidden text-ink/30 sm:inline dark:text-white/30">→</span>
                </Link>
              </li>
            );
          })}
        </ol>
      </motion.section>

      {/* Journey map */}
      <section aria-label="Journey map" className="space-y-3">
        <h2 className="section-title">Journey Map</h2>
        <div className="card p-4 sm:p-5">
          <JourneyStrip />
        </div>
      </section>

      {/* Pattern schedule */}
      <section aria-label="Pattern schedule" className="space-y-3">
        <h2 className="section-title">Pattern Schedule</h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {patterns.map((p) => {
            const span = spans[p.id];
            const qs = questionsByPattern(p.id);
            const solved = patternSolved(p.id);
            return (
              <Link
                key={p.id}
                to={`/patterns/${p.slug}`}
                className="card p-4 transition-colors hover:border-brand/50"
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="flex items-center gap-2 truncate text-sm font-bold">
                    <span aria-hidden="true">{p.emoji}</span>
                    {p.name}
                  </p>
                  {span && (
                    <span className="chip shrink-0 bg-black/5 text-ink/50 dark:bg-white/10 dark:text-white/50">
                      Day {span.from === span.to ? span.from : `${span.from}–${span.to}`}
                    </span>
                  )}
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <ProgressBar pct={qs.length ? (solved / qs.length) * 100 : 0} className="flex-1" label={`${p.name} progress`} />
                  <span className="text-xs font-bold text-ink/50 dark:text-white/50">
                    {solved}/{qs.length}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}


