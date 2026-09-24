import { motion } from 'framer-motion';

/** Animated (width) progress bar — CSS-friendly, no chart library. */
export default function ProgressBar({ pct = 0, className = '', barClassName = '', label }) {
  const clamped = Math.max(0, Math.min(100, Math.round(pct)));
  return (
    <div
      className={`h-2 w-full overflow-hidden rounded-full bg-black/8 dark:bg-white/10 ${className}`}
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label || `Progress: ${clamped}%`}
    >
      <motion.div
        className={`h-full rounded-full bg-brand ${barClassName}`}
        initial={{ width: 0 }}
        animate={{ width: `${clamped}%` }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      />
    </div>
  );
}
