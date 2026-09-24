import { motion } from 'framer-motion';

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-lg bg-black/3 px-3 py-2 dark:bg-white/5">
      <span className="text-xs font-medium text-ink/50 dark:text-white/50">{label}</span>
      <code className="text-xs font-bold">{value}</code>
    </div>
  );
}

/** Brute vs optimal complexity side by side. */
export default function ComplexityCard({ brute, optimal }) {
  const items = [
    { key: 'brute', title: 'Brute Force', icon: '🐢', data: brute },
    { key: 'optimal', title: 'Optimal', icon: '⚡', data: optimal, accent: true }
  ];
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {items.map((it, idx) => (
        <motion.div
          key={it.key}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut', delay: idx * 0.08 }}
          className={`card p-4 ${it.accent ? 'border-brand/40' : ''}`}
        >
          <div className="flex items-center gap-2">
            <span aria-hidden="true">{it.icon}</span>
            <h4 className="text-sm font-bold">{it.title}</h4>
          </div>
          <div className="mt-3 space-y-2">
            <Row label="Time" value={it.data?.time || '—'} />
            <Row label="Space" value={it.data?.space || '—'} />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
