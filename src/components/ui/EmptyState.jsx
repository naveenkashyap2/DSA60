import { Link } from 'react-router-dom';

export default function EmptyState({ icon = '🌱', title, message, actionLabel, actionTo }) {
  return (
    <div className="card flex flex-col items-center px-6 py-14 text-center">
      <span aria-hidden="true" className="text-4xl">
        {icon}
      </span>
      <h3 className="mt-4 text-lg font-bold">{title}</h3>
      {message && (
        <p className="mt-2 max-w-md text-sm text-ink/60 dark:text-white/60">{message}</p>
      )}
      {actionLabel && actionTo && (
        <Link to={actionTo} className="btn-primary mt-5">
          {actionLabel}
        </Link>
      )}
    </div>
  );
}
