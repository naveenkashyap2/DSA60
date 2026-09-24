import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext.jsx';
import { useProgress } from '../../context/ProgressContext.jsx';

const ITEMS = [
  { to: '/', label: 'Dashboard', icon: '🏠', end: true },
  { to: '/patterns', label: 'Patterns', icon: '🧩' },
  { to: '/questions', label: 'All Questions', icon: '📚' },
  { to: '/daily-practice', label: 'Daily Practice', icon: '📅' },
  { to: '/progress', label: 'Progress', icon: '📈' },
  { to: '/bookmarks', label: 'Bookmarks', icon: '🔖' },
  { to: '/revision', label: 'Revision', icon: '🔁' },
  { to: '/notes', label: 'My Notes', icon: '📝' }
];

export default function Sidebar() {
  const { user, isAuthed, logout } = useAuth();
  const { settings, updateSettings } = useProgress();
  const collapsed = !!settings.sidebarCollapsed;

  return (
    <aside
      className={`sticky top-20 hidden h-[calc(100vh-6.5rem)] shrink-0 lg:block ${
        collapsed ? 'w-16' : 'w-60'
      }`}
      aria-label="Sidebar"
    >
      <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-2 shadow-card dark:border-night-line dark:bg-night-card">
        <nav className="flex-1 overflow-y-auto">
          {ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              title={item.label}
              className={({ isActive }) =>
                `mb-1 flex min-h-[44px] items-center gap-3 rounded-xl px-3 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-brand-light text-brand-deep dark:bg-white/10 dark:text-white'
                    : 'text-ink/70 hover:bg-black/5 hover:text-ink dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white'
                }`
              }
            >
              <span aria-hidden="true" className="text-base leading-none">
                {item.icon}
              </span>
              {!collapsed && <span className="truncate">{item.label}</span>}
            </NavLink>
          ))}
        </nav>

        <div className="mt-2 border-t border-line pt-2 dark:border-night-line">
          <NavLink
            to="/profile"
            title="Profile"
            className={({ isActive }) =>
              `flex min-h-[44px] items-center gap-3 rounded-xl px-3 text-sm font-medium ${
                isActive
                  ? 'bg-brand-light text-brand-deep dark:bg-white/10 dark:text-white'
                  : 'text-ink/70 hover:bg-black/5 dark:text-white/70 dark:hover:bg-white/10'
              }`
            }
          >
            <span aria-hidden="true">👤</span>
            {!collapsed && (
              <span className="min-w-0 truncate">
                {isAuthed ? user?.name || 'Profile' : 'Login / Profile'}
              </span>
            )}
          </NavLink>
          <NavLink
            to="/settings"
            title="Settings"
            className={({ isActive }) =>
              `flex min-h-[44px] items-center gap-3 rounded-xl px-3 text-sm font-medium ${
                isActive
                  ? 'bg-brand-light text-brand-deep dark:bg-white/10 dark:text-white'
                  : 'text-ink/70 hover:bg-black/5 dark:text-white/70 dark:hover:bg-white/10'
              }`
            }
          >
            <span aria-hidden="true">⚙️</span>
            {!collapsed && <span>Settings</span>}
          </NavLink>
          {isAuthed && (
            <button
              type="button"
              title="Logout"
              onClick={logout}
              className="flex min-h-[44px] w-full items-center gap-3 rounded-xl px-3 text-sm font-medium text-ink/70 hover:bg-black/5 dark:text-white/70 dark:hover:bg-white/10"
            >
              <span aria-hidden="true">🚪</span>
              {!collapsed && <span>Logout</span>}
            </button>
          )}
          <button
            type="button"
            className="mt-1 flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl px-3 text-xs font-semibold text-ink/50 hover:bg-black/5 dark:text-white/50 dark:hover:bg-white/10"
            onClick={() => updateSettings({ sidebarCollapsed: !collapsed })}
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            <motion.span
              aria-hidden="true"
              animate={{ rotate: collapsed ? 180 : 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              ⟨
            </motion.span>
            <AnimatePresence initial={false}>
              {!collapsed && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  Collapse
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>
    </aside>
  );
}
