const DIFF_STYLES = {
  Easy: 'bg-brand-light text-brand-deep dark:bg-brand/15 dark:text-brand',
  Medium: 'bg-blush-light text-ink dark:bg-blush/20 dark:text-white',
  Hard: 'bg-ink text-white dark:bg-white/90 dark:text-ink'
};

export function DifficultyBadge({ difficulty }) {
  return (
    <span className={`chip ${DIFF_STYLES[difficulty] || DIFF_STYLES.Medium}`}>
      {difficulty}
    </span>
  );
}

export function PatternBadge({ label, to, subtle = false }) {
  const cls = subtle
    ? 'bg-black/5 text-ink/60 dark:bg-white/10 dark:text-white/60'
    : 'bg-brand-light text-brand-deep dark:bg-white/10 dark:text-brand';
  if (!to) return <span className={`chip ${cls}`}>{label}</span>;
  return (
    <span className={`chip ${cls}`}>
      <span className="underline-offset-2 hover:underline">{label}</span>
    </span>
  );
}

export function StatusBadge({ status }) {
  const map = {
    not_started: ['Not Started', 'bg-black/5 text-ink/55 dark:bg-white/10 dark:text-white/55'],
    in_progress: ['In Progress', 'bg-info-light text-info dark:bg-info/20 dark:text-info'],
    solved: ['Solved', 'bg-brand-light text-brand-deep dark:bg-brand/15 dark:text-brand']
  };
  const [label, cls] = map[status] || map.not_started;
  return <span className={`chip ${cls}`}>{label}</span>;
}

export function PlatformBadge({ platform }) {
  if (!platform) return null;
  return (
    <span className="chip bg-black/5 text-ink/60 dark:bg-white/10 dark:text-white/60">{platform}</span>
  );
}
