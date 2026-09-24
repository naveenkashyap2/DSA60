import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

/**
 * Accessible accordion section.
 * `defaultOpen` for the first section; others closed by default.
 */
export default function Accordion({ id, icon, title, subtitle, defaultOpen = false, children }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div className="card overflow-hidden">
      <button
        type="button"
        className="flex w-full items-center gap-3 px-4 py-4 text-left sm:px-5"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={`acc-panel-${id}`}
      >
        <span aria-hidden="true" className="text-lg">
          {icon}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-sm font-bold sm:text-[15px]">{title}</span>
          {subtitle && (
            <span className="mt-0.5 block truncate text-xs text-ink/50 dark:text-white/50">
              {subtitle}
            </span>
          )}
        </span>
        <motion.span
          aria-hidden="true"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="text-sm text-ink/50 dark:text-white/50"
        >
          ▾
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`acc-panel-${id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className="border-t border-line px-4 py-4 dark:border-night-line sm:px-5">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
