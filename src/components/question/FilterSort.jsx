import { patterns } from '../../data/patterns.js';
import { PLATFORMS, DIFFICULTIES } from '../../data/questions.js';

const SORTS = [
  { key: 'default', label: 'Default' },
  { key: 'az', label: 'A → Z' },
  { key: 'easy-hard', label: 'Easy → Hard' },
  { key: 'hard-easy', label: 'Hard → Easy' },
  { key: 'recent', label: 'Recently Solved' },
  { key: 'unsolved', label: 'Unsolved First' }
];

const STATUS_OPTIONS = [
  { key: 'all', label: 'Any status' },
  { key: 'solved', label: 'Solved' },
  { key: 'in_progress', label: 'In Progress' },
  { key: 'not_started', label: 'Not Started' }
];

const DIFF_RANK = { Easy: 0, Medium: 1, Hard: 2 };

export const sortQuestions = (list, sort, progress) => {
  const arr = [...list];
  switch (sort) {
    case 'az':
      arr.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case 'easy-hard':
      arr.sort((a, b) => DIFF_RANK[a.difficulty] - DIFF_RANK[b.difficulty] || a.title.localeCompare(b.title));
      break;
    case 'hard-easy':
      arr.sort((a, b) => DIFF_RANK[b.difficulty] - DIFF_RANK[a.difficulty] || a.title.localeCompare(b.title));
      break;
    case 'recent':
      arr.sort(
        (a, b) =>
          new Date(progress[b.id]?.solvedAt || 0) - new Date(progress[a.id]?.solvedAt || 0)
      );
      break;
    case 'unsolved':
      arr.sort((a, b) => {
        const sa = progress[a.id]?.status === 'solved' ? 1 : 0;
        const sb = progress[b.id]?.status === 'solved' ? 1 : 0;
        return sa - sb || a.title.localeCompare(b.title);
      });
      break;
    default:
      break;
  }
  return arr;
};

function Select({ id, label, value, onChange, options }) {
  return (
    <label className="flex min-w-0 flex-col gap-1 text-xs font-semibold text-ink/50 dark:text-white/50">
      {label}
      <select
        id={id}
        className="input min-h-[44px] cursor-pointer text-sm font-medium"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((o) => (
          <option key={o.key} value={o.key}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}

/** Filter + sort bar for the Questions page. */
export default function FilterSort({ filters, onFilter, sort, onSort }) {
  const patternOptions = [
    { key: 'all', label: 'All patterns' },
    ...patterns.map((p) => ({ key: p.id, label: p.name }))
  ];
  const diffOptions = [
    { key: 'all', label: 'Any difficulty' },
    ...DIFFICULTIES.map((d) => ({ key: d, label: d }))
  ];
  const platformOptions = [
    { key: 'all', label: 'All platforms' },
    ...PLATFORMS.map((p) => ({ key: p, label: p }))
  ];

  return (
    <div className="card grid grid-cols-2 gap-3 p-4 md:grid-cols-3 xl:grid-cols-6">
      <Select
        id="f-pattern"
        label="Pattern"
        value={filters.pattern}
        onChange={(v) => onFilter({ ...filters, pattern: v })}
        options={patternOptions}
      />
      <Select
        id="f-difficulty"
        label="Difficulty"
        value={filters.difficulty}
        onChange={(v) => onFilter({ ...filters, difficulty: v })}
        options={diffOptions}
      />
      <Select
        id="f-platform"
        label="Platform"
        value={filters.platform}
        onChange={(v) => onFilter({ ...filters, platform: v })}
        options={platformOptions}
      />
      <Select
        id="f-status"
        label="Status"
        value={filters.status}
        onChange={(v) => onFilter({ ...filters, status: v })}
        options={STATUS_OPTIONS}
      />
      <div className="col-span-2 flex items-end gap-2 md:col-span-2 xl:col-span-2">
        <div className="flex min-w-0 flex-1 flex-col gap-1 text-xs font-semibold text-ink/50 dark:text-white/50">
          Sort by
          <select
            id="f-sort"
            className="input min-h-[44px] cursor-pointer text-sm font-medium"
            value={sort}
            onChange={(e) => onSort(e.target.value)}
          >
            {SORTS.map((s) => (
              <option key={s.key} value={s.key}>
                {s.label}
              </option>
            ))}
          </select>
        </div>
        <button
          type="button"
          className={`min-h-[44px] rounded-xl border px-3 text-sm font-semibold transition-colors ${
            filters.bookmarked
              ? 'border-blush bg-blush-light text-ink dark:bg-blush/20 dark:text-white'
              : 'border-line text-ink/50 hover:border-blush hover:text-ink dark:border-night-line dark:text-white/50'
          }`}
          aria-pressed={filters.bookmarked}
          onClick={() => onFilter({ ...filters, bookmarked: !filters.bookmarked })}
        >
          🔖 Bookmarked
        </button>
      </div>
    </div>
  );
}
