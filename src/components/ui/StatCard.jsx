import { motion } from 'framer-motion';

export default function StatCard({ icon, label, value, hint, accent = false, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut', delay: index * 0.05 }}
      className={`card p-4 ${accent ? 'border-brand/40' : ''}`}
    >
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink/45 dark:text-white/45">
        <span aria-hidden="true" className="text-base leading-none">{icon}</span>
        {label}
      </div>
      <p className="mt-2 text-2xl font-extrabold tracking-tight">{value}</p>
      {hint && <p className="mt-1 text-xs text-ink/50 dark:text-white/50">{hint}</p>}
    </motion.div>
  );
}
