import { useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext.jsx';
import { getQuestion, formatDate } from '../utils/helpers.js';
import { DifficultyBadge } from '../components/ui/Badge.jsx';
import EmptyState from '../components/ui/EmptyState.jsx';

function Row({ q, meta }) {
  const navigate = useNavigate();
  const { statusOf } = useProgress();
  const status = statusOf(q.id);
  return (
    <div className="flex flex-wrap items-center gap-3 rounded-xl border border-line bg-white px-3.5 py-2.5 dark:border-night-line dark:bg-night-card">
      <span
        aria-hidden="true"
        className={`h-2 w-2 shrink-0 rounded-full ${
          status === 'solved' ? 'bg-brand' : status === 'in_progress' ? 'bg-info' : 'bg-black/20 dark:bg-white/20'
        }`}
      />
      <Link to={`/questions/${q.slug}`} className="min-w-0 flex-1">
        <span className="block truncate text-sm font-semibold hover:text-brand">{q.title}</span>
        {meta && <span className="block text-[11px] text-ink/45 dark:text-white/45">{meta}</span>}
      </Link>
      <DifficultyBadge difficulty={q.difficulty} />
      <button
        type="button"
        className="btn-outline min-h-[36px] shrink-0 px-3 text-xs"
        onClick={() => navigate(`/questions/${q.slug}`)}
      >
        Practice Again
      </button>
    </div>
  );
}

function Section({ icon, title, items, metaOf, emptyHint }) {
  return (
    <section className="space-y-3" aria-label={title}>
      <h2 className="section-title">
        <span aria-hidden="true" className="mr-1.5">{icon}</span>
        {title}
        <span className="ml-2 text-sm font-semibold text-ink/40 dark:text-white/40">({items.length})</span>
      </h2>
      {items.length === 0 ? (
        <p className="rounded-xl border border-dashed border-line px-4 py-5 text-sm text-ink/50 dark:border-night-line dark:text-white/50">
          {emptyHint}
        </p>
      ) : (
        <div className="space-y-2">
          {items.map((q) => (
            <Row key={q.id} q={q} meta={metaOf ? metaOf(q) : ''} />
          ))}
        </div>
      )}
    </section>
  );
}

export default function Revision() {
  const { progress, bookmarks, notes } = useProgress();
  const byId = (id) => getQuestion(id);

  const recentlySolved = useMemo(
    () =>
      Object.entries(progress)
        .filter(([, v]) => v.solvedAt)
        .sort((a, b) => new Date(b[1].solvedAt) - new Date(a[1].solvedAt))
        .slice(0, 8)
        .map(([id]) => byId(id))
        .filter(Boolean),
    [progress]
  );

  const bookmarked = useMemo(() => bookmarks.map(byId).filter(Boolean), [bookmarks]);

  const withNotes = useMemo(
    () =>
      Object.keys(notes)
        .filter((id) => notes[id]?.note || notes[id]?.approach)
        .map(byId)
        .filter(Boolean),
    [notes]
  );

  const multiAttempt = useMemo(
    () =>
      Object.entries(progress)
        .filter(([, v]) => (v.attempts || 0) >= 2)
        .sort((a, b) => (b[1].attempts || 0) - (a[1].attempts || 0))
        .map(([id]) => byId(id))
        .filter(Boolean),
    [progress]
  );

  const nothing =
    recentlySolved.length === 0 &&
    bookmarked.length === 0 &&
    withNotes.length === 0 &&
    multiAttempt.length === 0;

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Revision</h1>
        <p className="mt-1 max-w-2xl text-sm text-ink/60 dark:text-white/60">
          Spaced repetition works: revisit recently solved problems, your bookmarks, problems you
          took notes on, and the ones that took multiple attempts.
        </p>
      </header>

      {nothing && (
        <EmptyState
          icon="🔁"
          title="Nothing to revise yet"
          message="Solve a few problems, add bookmarks or notes — your revision plan will build itself here."
          actionLabel="Start practicing"
          actionTo="/daily-practice"
        />
      )}

      <Section
        icon="🕘"
        title="Recently Solved"
        items={recentlySolved}
        metaOf={(q) => `solved ${formatDate(progress[q.id]?.solvedAt)}`}
        emptyHint="Solve a problem and it will show up here for a quick revisit."
      />
      <Section
        icon="🔖"
        title="Bookmarked"
        items={bookmarked}
        emptyHint="Bookmark problems from any question page."
      />
      <Section
        icon="📝"
        title="Problems With Notes"
        items={withNotes}
        emptyHint="Write notes on a problem to keep it on your radar."
      />
      <Section
        icon="🔁"
        title="Multiple Attempts"
        items={multiAttempt}
        metaOf={(q) => `${progress[q.id]?.attempts || 0} attempts`}
        emptyHint="Open a problem twice and it lands here — the best candidates for a re-solve."
      />
    </div>
  );
}
