import { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext.jsx';
import { useAuth } from '../../context/AuthContext.jsx';
import SearchBar from '../ui/SearchBar.jsx';

const NAV = [
  { to: '/', label: 'Home', end: true },
  { to: '/patterns', label: 'Patterns' },
  { to: '/questions', label: 'Questions' },
  { to: '/daily-practice', label: 'Daily Practice' },
  { to: '/progress', label: 'Progress' }
];

const DRAWER_EXTRA = [
  { to: '/bookmarks', label: 'Bookmarks', icon: '🔖' },
  { to: '/revision', label: 'Revision', icon: '🔁' },
  { to: '/notes', label: 'My Notes', icon: '📝' },
  { to: '/profile', label: 'Profile', icon: '👤' },
  { to: '/settings', label: 'Settings', icon: '⚙️' },
  { to: '/about', label: 'About', icon: 'ℹ️' }
];

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const { user, isAuthed, logout } = useAuth();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const drawerRef = useRef(null);

  // Close drawer on route change
  useEffect(() => {
    setDrawerOpen(false);
  }, [location.pathname]);

  // Close drawer on Escape
  useEffect(() => {
    if (!drawerOpen) return;
    const onKey = (e) => e.key === 'Escape' && setDrawerOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [drawerOpen]);

  const linkCls = ({ isActive }) =>
    `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
      isActive
        ? 'bg-brand-light text-brand-deep dark:bg-white/10 dark:text-white'
        : 'text-ink/70 hover:bg-black/5 hover:text-ink dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white'
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/90 backdrop-blur dark:border-night-line dark:bg-night/90">
      <div className="container-app flex h-16 items-center gap-3">
        {/* Mobile menu button */}
        <button
          type="button"
          className="btn-ghost -ml-2 lg:hidden"
          aria-label="Open menu"
          aria-expanded={drawerOpen}
          onClick={() => setDrawerOpen(true)}
        >
          <span aria-hidden="true" className="text-lg leading-none">☰</span>
        </button>

        {/* Brand */}
        <Link to="/" className="flex min-w-0 items-center gap-2.5" aria-label="DSA-60 Days home">
          <span
            aria-hidden="true"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand text-sm font-extrabold text-white"
          >
            60
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-[15px] font-extrabold tracking-tight">
              DSA-60 Days
            </span>
            <span className="hidden text-[11px] font-medium text-ink/50 sm:block dark:text-white/50">
              Master DSA Patterns. Solve Problems. Build Strong Logic.
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="ml-4 hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end} className={linkCls}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          {/* Desktop search */}
          <div className="hidden w-56 xl:w-72 md:block">
            <SearchBar placeholder="Search problems, patterns…" compact />
          </div>

          {/* Theme toggle */}
          <button
            type="button"
            className="btn-ghost"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            <span aria-hidden="true" className="text-lg leading-none">
              {isDark ? '☀️' : '🌙'}
            </span>
          </button>

          {/* Profile */}
          {isAuthed ? (
            <Link to="/profile" className="btn-ghost" aria-label="Profile">
              <span
                aria-hidden="true"
                className="grid h-8 w-8 place-items-center rounded-full bg-brand text-xs font-bold text-white"
              >
                {(user?.name || 'U').slice(0, 1).toUpperCase()}
              </span>
            </Link>
          ) : (
            <Link to="/login" className="btn-primary hidden sm:inline-flex">
              Login
            </Link>
          )}
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              key="overlay"
              className="fixed inset-0 z-50 bg-black/40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              onClick={() => setDrawerOpen(false)}
              aria-hidden="true"
            />
            <motion.aside
              key="drawer"
              ref={drawerRef}
              className="fixed inset-y-0 left-0 z-50 flex w-[300px] max-w-[85vw] flex-col bg-white shadow-pop dark:bg-night-card lg:hidden"
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
            >
              <div className="flex items-center justify-between border-b border-line px-4 py-3 dark:border-night-line">
                <span className="text-sm font-bold">Menu</span>
                <button type="button" className="btn-ghost" aria-label="Close menu" onClick={() => setDrawerOpen(false)}>
                  <span aria-hidden="true">✕</span>
                </button>
              </div>

              <div className="px-4 pt-3">
                <SearchBar placeholder="Search problems, patterns…" />
              </div>

              <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-3 py-3">
                {NAV.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.end}
                    className={({ isActive }) =>
                      `mb-1 flex min-h-[44px] items-center rounded-xl px-3 text-sm font-medium ${
                        isActive
                          ? 'bg-brand-light text-brand-deep dark:bg-white/10 dark:text-white'
                          : 'text-ink/80 hover:bg-black/5 dark:text-white/80 dark:hover:bg-white/10'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                <div className="my-2 border-t border-line dark:border-night-line" />
                {DRAWER_EXTRA.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `mb-1 flex min-h-[44px] items-center gap-3 rounded-xl px-3 text-sm font-medium ${
                        isActive
                          ? 'bg-brand-light text-brand-deep dark:bg-white/10 dark:text-white'
                          : 'text-ink/80 hover:bg-black/5 dark:text-white/80 dark:hover:bg-white/10'
                      }`
                    }
                  >
                    <span aria-hidden="true">{item.icon}</span>
                    {item.label}
                  </NavLink>
                ))}
              </nav>

              <div className="border-t border-line px-4 py-3 dark:border-night-line">
                {isAuthed ? (
                  <button
                    type="button"
                    className="btn-outline w-full"
                    onClick={() => {
                      logout();
                      setDrawerOpen(false);
                    }}
                  >
                    Logout
                  </button>
                ) : (
                  <div className="grid grid-cols-2 gap-2">
                    <Link to="/login" className="btn-outline">
                      Login
                    </Link>
                    <Link to="/signup" className="btn-primary">
                      Sign up
                    </Link>
                  </div>
                )}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
