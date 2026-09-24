import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { patterns } from '../data/patterns.js';
import { useProgress } from '../context/ProgressContext.jsx';
import { patternProgress } from '../utils/helpers.js';
import ProgressBar from '../components/ui/ProgressBar.jsx';

export default function Patterns() {
  const { progress } = useProgress();

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">The 16 Patterns</h1>
        <p className="mt-2 max-w-2xl text-sm text-ink/60 dark:text-white/60">
          Pattern-first DSA: learn <em>how to recognize</em> each technique, then solve its problems.
          Every question in this course maps to exactly one pattern.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {patterns.map((p, i) => {
          const pp = patternProgress(progress, p.id);
          return (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.32, ease: 'easeOut', delay: Math.min(i * 0.03, 0.3) }}
            >
              <Link
                to={`/patterns/${p.slug}`}
                className="card flex h-full flex-col p-5 transition-colors hover:border-brand/50"
              >
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand-light text-2xl dark:bg-brand/20"
                  >
                    {p.emoji}
                  </span>
                  <div className="min-w-0">
                    <h2 className="truncate text-[15px] font-bold">{p.name}</h2>
                    <p className="text-xs font-medium text-ink/45 dark:text-white/45">
                      {p.questions ? pp.total : pp.total} questions · {pp.solved} solved
                    </p>
                  </div>
                </div>
                <p className="mt-3 line-clamp-3 flex-1 text-[13px] leading-relaxed text-ink/60 dark:text-white/60">
                  {p.short}
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <ProgressBar pct={pp.pct} className="flex-1" label={`${p.name} progress`} />
                  <span className="text-xs font-bold text-brand">{pp.pct}%</span>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
