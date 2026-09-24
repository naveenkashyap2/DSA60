import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useProgress } from '../../context/ProgressContext.jsx';
import { DifficultyBadge, StatusBadge, PlatformBadge } from '../ui/Badge.jsx';

const STATUS_DOT = {
  not_started: 'bg-black/20 dark:bg-white/20',
  in_progress: 'bg-info',
  solved: 'bg-brand'
};

export default function QuestionCard({ question, index = 0 }) {
  const { statusOf, isBookmarked, toggleBookmark } = useProgress();
  const navigate = useNavigate();
  const status = statusOf(question.id);
  const bookmarked = isBookmarked(question.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut', delay: Math.min(index * 0.04, 0.3) }}
      className="group relative"
    >
      <Link
        to={`/questions/${question.slug}`}
        className="card flex h-full flex-col p-4 transition-colors hover:border-brand/50"
      >
        <div className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className={`h-2 w-2 shrink-0 rounded-full ${STATUS_DOT[status]}`}
            title={status}
          />
          <span className="min-w-0 flex-1 truncate text-xs font-semibold uppercase tracking-wider text-ink/45 dark:text-white/45">
            {question.pattern}
          </span>
          <PlatformBadge platform={question.platform} />
        </div>

        <h3 className="mt-2 line-clamp-2 text-[15px] font-bold leading-snug group-hover:text-brand">
          {question.title}
        </h3>

        <p className="mt-2 line-clamp-2 flex-1 text-[13px] leading-relaxed text-ink/55 dark:text-white/55">
          {question.summary}
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-1.5">
          <DifficultyBadge difficulty={question.difficulty} />
          <StatusBadge status={status} />
          {bookmarked && (
            <span className="chip bg-blush-light text-ink dark:bg-blush/20 dark:text-white">
              🔖
            </span>
          )}
        </div>
      </Link>

      <button
        type="button"
        aria-label={bookmarked ? 'Remove bookmark' : 'Add bookmark'}
        aria-pressed={bookmarked}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggleBookmark(question.id);
        }}
        className={`absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full transition-colors ${
          bookmarked
            ? 'bg-blush-light text-ink dark:bg-blush/25 dark:text-white'
            : 'bg-black/5 text-ink/40 opacity-100 hover:text-ink dark:bg-white/10 dark:text-white/40 lg:opacity-0 lg:group-hover:opacity-100'
        }`}
      >
        <span aria-hidden="true" className="text-sm leading-none">
          {bookmarked ? '🔖' : '🏷️'}
        </span>
      </button>

      {status === 'in_progress' && (
        <button
          type="button"
          className="absolute bottom-3 right-3 hidden text-xs font-semibold text-info lg:block"
          onClick={(e) => {
            e.preventDefault();
            navigate(`/questions/${question.slug}`);
          }}
        >
          Continue →
        </button>
      )}
    </motion.div>
  );
}
