import { useMemo } from 'react';
import { dateKeyNDaysAgo, isDayActive } from '../../utils/helpers.js';

function intensity(count) {
  if (count <= 0) return 0;
  if (count === 1) return 1;
  if (count <= 3) return 2;
  if (count <= 6) return 3;
  return 4;
}

const LEVELS = [
  'bg-black/6 dark:bg-white/10',
  'bg-brand/25',
  'bg-brand/45',
  'bg-brand/70',
  'bg-brand'
];

/**
 * CSS-grid contribution heatmap (GitHub-style), 30 or 60 days.
 * Pure divs — no chart library.
 */
export default function Heatmap({ activity, range }) {
  const days = useMemo(() => {
    const out = [];
    for (let i = range - 1; i >= 0; i--) {
      const key = dateKeyNDaysAgo(i);
      const a = activity[key] || {};
      out.push({
        key,
        count: (a.solved || 0) + (a.practiced || 0) + (a.checkpoints || 0)
      });
    }
    return out;
  }, [activity, range]);

  const monthLabels = useMemo(() => {
    const labels = [];
    let last = '';
    days.forEach((d) => {
      const m = new Date(d.key + 'T00:00:00').toLocaleDateString('en-IN', { month: 'short' });
      if (m !== last) {
        labels.push({ idx: days.indexOf(d), label: m });
        last = m;
      }
    });
    return labels;
  }, [days]);

  const size = range === 60 ? 10 : 7; // columns (weeks)
  const rows = Math.ceil(range / size);

  return (
    <div>
      <div className="mb-1 flex text-[10px] font-semibold text-ink/40 dark:text-white/40">
        {monthLabels.map((m) => (
          <span key={m.label} style={{ width: `${100 / size}%` }} className="pl-0.5">
            {m.label}
          </span>
        ))}
      </div>
      <div
        className="grid gap-1"
        style={{ gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))` }}
        role="img"
        aria-label={`Activity heatmap, last ${range} days`}
      >
        {Array.from({ length: rows }).map((_, r) =>
          Array.from({ length: size }).map((_, c) => {
            const idx = c * rows + r;
            const d = days[idx];
            if (!d) return <span key={`${r}-${c}`} aria-hidden="true" />;
            const lvl = intensity(d.count);
            const active = isDayActive(activity, d.key);
            return (
              <span
                key={`${r}-${c}`}
                title={`${d.key}: ${d.count} ${d.count === 1 ? 'action' : 'actions'}`}
                className={`aspect-square w-full rounded-[4px] ${LEVELS[lvl]} ${
                  active && lvl === 0 ? '' : ''
                }`}
              />
            );
          })
        )}
      </div>
      <div className="mt-2 flex items-center justify-end gap-1.5 text-[10px] font-medium text-ink/40 dark:text-white/40">
        <span>Less</span>
        {LEVELS.map((l, i) => (
          <span key={i} className={`h-2.5 w-2.5 rounded-[3px] ${l}`} aria-hidden="true" />
        ))}
        <span>More</span>
      </div>
    </div>
  );
}
