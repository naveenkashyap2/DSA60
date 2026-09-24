import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { DAYS } from '../../data/journey.js';
import { useProgress } from '../../context/ProgressContext.jsx';

/** Horizontal strip of the 60 journey days with completion states. */
export default function JourneyStrip({ limit = 60 }) {
  const { progress } = useProgress();
  const days = DAYS.slice(0, limit);

  const stateOf = (d) => {
    const solved = d.questionIds.filter((id) => progress[id]?.status === 'solved').length;
    if (solved === d.questionIds.length) return 'done';
    if (solved > 0) return 'partial';
    return 'todo';
  };

  return (
    <div>
      <div className="grid gap-1.5" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(34px, 1fr))' }}>
        {days.map((d, i) => {
          const st = stateOf(d);
          return (
            <motion.div
              key={d.day}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, ease: 'easeOut', delay: Math.min(i * 0.012, 0.4) }}
              className="group relative"
            >
              <Link
                to="/daily-practice"
                className={`flex aspect-square w-full flex-col items-center justify-center rounded-lg border text-[11px] font-bold transition-colors ${
                  st === 'done'
                    ? 'border-brand bg-brand text-white'
                    : st === 'partial'
                      ? 'border-brand/50 bg-brand-light text-brand-deep dark:bg-brand/20 dark:text-brand'
                      : 'border-line bg-white text-ink/45 hover:border-brand/40 hover:text-ink dark:border-night-line dark:bg-night-card dark:text-white/45'
                }`}
                aria-label={`Day ${d.day} — ${d.focus}${st === 'done' ? ' (completed)' : ''}`}
              >
                <span aria-hidden="true" className="text-sm leading-none">
                  {st === 'done' ? '✓' : d.day}
                </span>
              </Link>
              <span className="pointer-events-none absolute -top-9 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-lg bg-ink px-2 py-1 text-[10px] font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100 dark:bg-white/90 dark:text-ink">
                Day {d.day} · {d.focus}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
