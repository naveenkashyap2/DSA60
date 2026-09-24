import { AnimatePresence, motion } from 'framer-motion';
import { useProgress } from '../../context/ProgressContext.jsx';
import { useToast } from '../../context/ToastContext.jsx';

const STATES = [
  { key: 'not_started', label: 'Not Started', icon: '⚪' },
  { key: 'in_progress', label: 'In Progress', icon: '🔵' },
  { key: 'solved', label: 'Solved', icon: '✅' }
];

const ACTIVE_CLS = {
  not_started: 'bg-black/8 text-ink dark:bg-white/15 dark:text-white',
  in_progress: 'bg-info text-white',
  solved: 'bg-brand text-white'
};

/**
 * 3-state solved control. Problems are NEVER locked:
 * every state is always reachable, in either direction.
 */
export default function SolvedControl({ questionId }) {
  const { statusOf, setStatus } = useProgress();
  const { push } = useToast();
  const status = statusOf(questionId);

  return (
    <div className="flex flex-wrap items-center gap-3">
      <div
        className="inline-flex rounded-xl bg-black/5 p-1 dark:bg-white/10"
        role="group"
        aria-label="Solved status"
      >
        {STATES.map((s) => {
          const active = status === s.key;
          return (
            <button
              key={s.key}
              type="button"
              aria-pressed={active}
              onClick={() => {
                if (s.key === status) return;
                setStatus(questionId, s.key);
                if (s.key === 'solved') push('Nice — marked as solved! 🎉', 'success');
              }}
              className={`relative min-h-[36px] rounded-lg px-3 text-xs font-semibold transition-colors sm:px-4 ${
                active ? '' : 'text-ink/50 hover:text-ink dark:text-white/50 dark:hover:text-white'
              }`}
            >
              {active && (
                <motion.span
                  layoutId={`status-pill-${questionId}`}
                  className={`absolute inset-0 rounded-lg ${ACTIVE_CLS[s.key]}`}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                />
              )}
              <span className={`relative ${active ? 'text-white' : ''}`}>
                <span aria-hidden="true" className="mr-1.5">{s.icon}</span>
                {s.label}
              </span>
            </button>
          );
        })}
      </div>
      {status === 'solved' && (
        <AnimatePresence>
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="text-sm font-semibold text-brand"
          >
            Solved — great work!
          </motion.span>
        </AnimatePresence>
      )}
    </div>
  );
}
