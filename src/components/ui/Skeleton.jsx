function Bone({ className = '' }) {
  return (
    <div className={`relative overflow-hidden rounded-lg bg-black/8 dark:bg-white/10 ${className}`}>
      <div
        aria-hidden="true"
        className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-black/10 to-transparent dark:via-white/10"
      />
    </div>
  );
}

/** Card-grid skeleton (loading questions). */
export function QuestionGridSkeleton({ count = 6 }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="card p-4">
          <Bone className="h-4 w-2/5" />
          <Bone className="mt-3 h-5 w-4/5" />
          <div className="mt-4 flex gap-2">
            <Bone className="h-5 w-16 rounded-full" />
            <Bone className="h-5 w-20 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  );
}

/** Full-page loader used as the Suspense fallback. */
export function PageLoader() {
  return (
    <div className="container-app py-16" role="status" aria-label="Loading">
      <Bone className="h-8 w-64" />
      <Bone className="mt-4 h-4 w-96 max-w-full" />
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3" aria-hidden="true">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="card p-5">
            <Bone className="h-4 w-1/3" />
            <Bone className="mt-3 h-5 w-4/5" />
            <Bone className="mt-3 h-4 w-3/5" />
            <div className="mt-4 h-2 w-full rounded-full bg-black/8 dark:bg-white/10" />
          </div>
        ))}
      </div>
      <span className="sr-only">Loading…</span>
    </div>
  );
}
