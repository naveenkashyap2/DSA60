import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { QUESTIONS } from '../data/questions.js';
import { useProgress } from '../context/ProgressContext.jsx';
import SearchBar from '../components/ui/SearchBar.jsx';
import FilterSort, { sortQuestions } from '../components/question/FilterSort.jsx';
import QuestionCard from '../components/question/QuestionCard.jsx';
import EmptyState from '../components/ui/EmptyState.jsx';
import { classNames } from '../utils/helpers.js';

const DEFAULT_FILTERS = {
  pattern: 'all',
  difficulty: 'all',
  platform: 'all',
  status: 'all',
  bookmarked: false
};

export default function Questions() {
  const [params, setParams] = useSearchParams();
  const term = params.get('q') || '';
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [sort, setSort] = useState('default');
  const { progress, bookmarks } = useProgress();

  const setTerm = (value) => {
    const next = new URLSearchParams(params);
    if (value) next.set('q', value);
    else next.delete('q');
    setParams(next, { replace: true });
  };

  const results = useMemo(() => {
    const t = term.trim().toLowerCase();
    let list = QUESTIONS;
    if (t) {
      list = list.filter((q) =>
        [q.title, q.pattern, q.difficulty, q.platform || '', q.summary]
          .join(' ')
          .toLowerCase()
          .includes(t)
      );
    }
    if (filters.pattern !== 'all') list = list.filter((q) => q.pattern === filters.pattern);
    if (filters.difficulty !== 'all') list = list.filter((q) => q.difficulty === filters.difficulty);
    if (filters.platform !== 'all') list = list.filter((q) => q.platform === filters.platform);
    if (filters.status !== 'all') list = list.filter((q) => (progress[q.id]?.status || 'not_started') === filters.status);
    if (filters.bookmarked) list = list.filter((q) => bookmarks.includes(q.id));
    return sortQuestions(list, sort, progress);
  }, [term, filters, sort, progress, bookmarks]);

  const activeFilterCount =
    (filters.pattern !== 'all' ? 1 : 0) +
    (filters.difficulty !== 'all' ? 1 : 0) +
    (filters.platform !== 'all' ? 1 : 0) +
    (filters.status !== 'all' ? 1 : 0) +
    (filters.bookmarked ? 1 : 0);

  return (
    <div className="space-y-5">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">All Questions</h1>
          <p className="mt-1 text-sm text-ink/60 dark:text-white/60">
            {QUESTIONS.length} problems across 16 patterns.
          </p>
        </div>
        <p className="text-sm font-semibold text-ink/50 dark:text-white/50" aria-live="polite">
          {results.length} result{results.length === 1 ? '' : 's'}
        </p>
      </header>

      <SearchBar placeholder="Search by title, pattern, difficulty, platform…" />

      <FilterSort filters={filters} onFilter={setFilters} sort={sort} onSort={setSort} />

      {activeFilterCount > 0 && (
        <div className="flex items-center gap-2 text-xs">
          <span className="font-semibold text-ink/50 dark:text-white/50">Active filters:</span>
          <span className="chip bg-brand-light text-brand-deep dark:bg-white/10 dark:text-brand">
            {activeFilterCount}
          </span>
          <button
            type="button"
            className="font-semibold text-brand hover:underline"
            onClick={() => setFilters(DEFAULT_FILTERS)}
          >
            Clear all
          </button>
        </div>
      )}

      {results.length === 0 ? (
        <EmptyState
          icon="🔎"
          title="No questions match"
          message="Try a different search term, or clear some filters."
          actionLabel="Clear filters & search"
          actionTo="/questions"
        />
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {results.map((q, i) => (
            <QuestionCard key={q.id} question={q} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
