import { Link } from 'react-router-dom';
import { relatedQuestions } from '../../data/questions.js';
import { useProgress } from '../../context/ProgressContext.jsx';
import { DifficultyBadge, StatusBadge } from '../ui/Badge.jsx';

export default function RelatedQuestions({ question }) {
  const { statusOf } = useProgress();
  const items = relatedQuestions(question, 4);
  if (items.length === 0) return null;

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {items.map((q) => {
        const status = statusOf(q.id);
        return (
          <Link
            key={q.id}
            to={`/questions/${q.slug}`}
            className="card flex items-center gap-3 p-3.5 transition-colors hover:border-brand/50"
          >
            <span
              aria-hidden="true"
              className={`h-2 w-2 shrink-0 rounded-full ${
                status === 'solved'
                  ? 'bg-brand'
                  : status === 'in_progress'
                    ? 'bg-info'
                    : 'bg-black/20 dark:bg-white/20'
              }`}
            />
            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm font-semibold">{q.title}</span>
              <span className="mt-1 flex items-center gap-1.5">
                <DifficultyBadge difficulty={q.difficulty} />
                <StatusBadge status={status} />
              </span>
            </span>
            <span aria-hidden="true" className="text-ink/30 dark:text-white/30">→</span>
          </Link>
        );
      })}
    </div>
  );
}
