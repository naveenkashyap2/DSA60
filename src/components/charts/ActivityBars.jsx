import { motion } from 'framer-motion';

/**
 * CSS-only daily activity bar chart (no chart library).
 * `days` = [{ key, label, count }]
 */
export default function ActivityBars({ days = [] }) {
  const max = Math.max(1, ...days.map((d) => d.count));

  return (
    <div>
      <div className="flex h-36 items-end gap-1.5 sm:gap-2" role="img" aria-label="Daily activity bar chart">
        {days.map((d, i) => {
          const h = d.count === 0 ? 3 : Math.max(10, Math.round((d.count / max) * 100));
          const isToday = i === days.length - 1;
          return (
            <div key={d.key} className="group flex h-full flex-1 flex-col items-center justify-end gap-1">
              <span className="text-[10px] font-semibold text-ink/40 opacity-0 transition-opacity group-hover:opacity-100 dark:text-white/40">
                {d.count}
              </span>
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.02 }}
                className={`w-full rounded-md ${
                  d.count === 0
                    ? 'bg-black/8 dark:bg-white/10'
                    : isToday
                      ? 'bg-brand'
                      : 'bg-brand/45 dark:bg-brand/50'
                }`}
                title={`${d.key}: ${d.count} ${d.count === 1 ? 'action' : 'actions'}`}
              />
            </div>
          );
        })}
      </div>
      <div className="mt-2 flex gap-1.5 sm:gap-2" aria-hidden="true">
        {days.map((d, i) => (
          <span key={d.key} className="flex-1 text-center text-[10px] font-medium text-ink/40 dark:text-white/40">
            {i % 2 === 0 || days.length <= 8 ? d.label : ''}
          </span>
        ))}
      </div>
    </div>
  );
}
