import { Link } from 'react-router-dom';

const LINKS = [
  { to: '/patterns', label: 'Patterns' },
  { to: '/questions', label: 'Questions' },
  { to: '/daily-practice', label: 'Daily Practice' },
  { to: '/progress', label: 'Progress' },
  { to: '/about', label: 'About' }
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white pb-20 pt-10 dark:border-night-line dark:bg-night lg:pb-10">
      <div className="container-app">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="grid h-9 w-9 place-items-center rounded-xl bg-brand text-sm font-extrabold text-white"
              >
                60
              </span>
              <span className="text-base font-extrabold tracking-tight">DSA-60 Days</span>
            </div>
            <p className="mt-3 text-sm text-ink/60 dark:text-white/60">
              Master DSA Patterns. Solve Problems. Build Strong Logic.
            </p>
            <p className="mt-1 text-sm font-medium text-brand dark:text-brand">
              Learn. Solve. Track. Revise.
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-12 gap-y-2 sm:grid-cols-3">
            {LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm text-ink/60 transition-colors hover:text-brand dark:text-white/60 dark:hover:text-brand"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-1 border-t border-line pt-4 text-sm text-ink/50 dark:border-night-line dark:text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>Developed by Naveen</p>
          <p>© 2026 DSA-60 Days</p>
        </div>
      </div>
    </footer>
  );
}
