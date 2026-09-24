import { useProgress } from '../context/ProgressContext.jsx';
import { getQuestion } from '../utils/helpers.js';
import QuestionCard from '../components/question/QuestionCard.jsx';
import EmptyState from '../components/ui/EmptyState.jsx';

export default function Bookmarks() {
  const { bookmarks } = useProgress();
  const items = bookmarks.map((id) => getQuestion(id)).filter(Boolean);

  return (
    <div className="space-y-5">
      <header>
        <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Bookmarks</h1>
        <p className="mt-1 text-sm text-ink/60 dark:text-white/60">
          {items.length} saved question{items.length === 1 ? '' : 's'} — tap the tag on any question to save it here.
        </p>
      </header>

      {items.length === 0 ? (
        <EmptyState
          icon="🔖"
          title="No bookmarks yet"
          message="Bookmark problems you want to revisit later — they will appear here."
          actionLabel="Browse questions"
          actionTo="/questions"
        />
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {items.map((q, i) => (
            <QuestionCard key={q.id} question={q} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
