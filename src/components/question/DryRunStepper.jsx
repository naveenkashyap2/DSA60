import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

/**
 * Step-by-step dry run with a Framer Motion stepper:
 * one step visible at a time, with progress dots and prev/next controls.
 */
export default function DryRunStepper({ steps = [] }) {
  const [i, setI] = useState(0);
  const total = steps.length;
  const last = total - 1;

  if (total === 0) return null;

  return (
    <div>
      {/* Progress rail */}
      <div className="flex items-center gap-1.5" aria-hidden="true">
        {steps.map((_, idx) => (
          <button
            key={idx}
            type="button"
            tabIndex={-1}
            onClick={() => setI(idx)}
            className={`h-1.5 flex-1 rounded-full transition-colors ${
              idx <= i ? 'bg-brand' : 'bg-black/10 dark:bg-white/15'
            }`}
          />
        ))}
      </div>

      {/* Step content */}
      <div className="mt-4 min-h-[72px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <div className="flex items-start gap-3">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-light text-xs font-bold text-brand-deep dark:bg-brand/20 dark:text-brand">
                {i + 1}
              </span>
              <p className="whitespace-pre-line text-sm leading-relaxed">{steps[i]}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="mt-4 flex items-center justify-between">
        <button
          type="button"
          className="btn-outline min-h-[40px] px-3 text-xs"
          onClick={() => setI((x) => Math.max(0, x - 1))}
          disabled={i === 0}
        >
          ← Previous
        </button>
        <span className="text-xs font-semibold text-ink/45 dark:text-white/45">
          Step {i + 1} of {total}
        </span>
        {i < last ? (
          <button
            type="button"
            className="btn-primary min-h-[40px] px-3 text-xs"
            onClick={() => setI((x) => Math.min(last, x + 1))}
          >
            Next step →
          </button>
        ) : (
          <button
            type="button"
            className="btn-outline min-h-[40px] px-3 text-xs"
            onClick={() => setI(0)}
          >
            ↺ Replay
          </button>
        )}
      </div>
    </div>
  );
}
