import { Link } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext.jsx';
import { getQuestion, formatDate } from '../utils/helpers.js';
import EmptyState from '../components/ui/EmptyState.jsx';

export default function Notes() {
  const { notes, deleteNote } = useProgress();
  const items = Object.keys(notes)
    .map((id) => ({ q: getQuestion(id), entry: notes[id] }))
    .filter((x) => x.q && (x.entry.note || x.entry.approach))
    .sort((a, b) => new Date(b.entry.updatedAt || 0) - new Date(a.entry.updatedAt || 0));

  return (
    <div className="space-y-5">
      <header>
        <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">My Notes</h1>
        <p className="mt-1 text-sm text-ink/60 dark:text-white/60">
          {items.length} problem{items.length === 1 ? '' : 's'} with saved thinking — personal notes
          and your approach, all stored locally.
        </p>
      </header>

      {items.length === 0 ? (
        <EmptyState
          icon="📝"
          title="No notes yet"
          message="Open any problem and use “Your Notes” to capture your thinking. Your entries collect here."
          actionLabel="Find a problem"
          actionTo="/questions"
        />
      ) : (
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
          {items.map(({ q, entry }) => (
            <article key={q.id} className="card p-4">
              <div className="flex items-start justify-between gap-3">
                <Link to={`/questions/${q.slug}`} className="min-w-0 text-[15px] font-bold hover:text-brand">
                  {q.title}
                </Link>
                <button
                  type="button"
                  className="btn-ghost min-h-[32px] shrink-0 px-2 text-xs"
                  onClick={() => deleteNote(q.id)}
                  aria-label={`Delete notes for ${q.title}`}
                >
                  Delete
                </button>
              </div>
              <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-wider text-ink/40 dark:text-white/40">
                {q.pattern} · {q.difficulty}
              </p>

              {entry.note && (
                <div className="mt-3">
                  <p className="text-[11px] font-bold text-ink/45 dark:text-white/45">📝 Personal Notes</p>
                  <p className="mt-1 whitespace-pre-line rounded-xl bg-black/3 px-3 py-2.5 text-[13px] leading-relaxed text-ink/75 dark:bg-white/5 dark:text-white/75">
                    {entry.note}
                  </p>
                </div>
              )}

              {entry.approach && (
                <div className="mt-3">
                  <p className="text-[11px] font-bold text-ink/45 dark:text-white/45">🧠 My Approach</p>
                  <p className="mt-1 whitespace-pre-line rounded-xl bg-brand-light/60 px-3 py-2.5 text-[13px] leading-relaxed dark:bg-brand/10">
                    {entry.approach}
                  </p>
                </div>
              )}

              <div className="mt-3 flex items-center justify-between text-xs text-ink/45 dark:text-white/45">
                <span>{entry.updatedAt ? `Updated ${formatDate(entry.updatedAt)}` : 'Updated recently'}</span>
                <Link to={`/questions/${q.slug}`} className="font-semibold text-brand hover:underline">
                  Open problem →
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
