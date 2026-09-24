import { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { searchAll } from '../../utils/helpers.js';
import { DifficultyBadge } from './Badge.jsx';

export default function SearchBar({ placeholder = 'Search problems, patterns…', compact = false }) {
  const [term, setTerm] = useState('');
  const [open, setOpen] = useState(false);
  const [results, setResults] = useState({ questions: [], patterns: [] });
  const boxRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => {
      setResults(searchAll(term));
    }, 120);
    return () => clearTimeout(t);
  }, [term]);

  useEffect(() => {
    const onDown = (e) => {
      if (boxRef.current && !boxRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  const go = useCallback(
    (to) => {
      setOpen(false);
      setTerm('');
      navigate(to);
    },
    [navigate]
  );

  const showDropdown = open && term.trim().length > 0;
  const empty = term.trim().length > 0 && results.questions.length === 0 && results.patterns.length === 0;

  return (
    <div ref={boxRef} className="relative w-full">
      <div className="relative">
        <span aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm opacity-50">
          🔍
        </span>
        <input
          type="search"
          className={`input pl-9 ${compact ? 'min-h-[40px] text-[13px]' : ''}`}
          placeholder={placeholder}
          value={term}
          role="combobox"
          aria-expanded={showDropdown}
          aria-label="Search problems and patterns"
          onChange={(e) => {
            setTerm(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') go(`/questions?q=${encodeURIComponent(term.trim())}`);
          }}
        />
      </div>

      <AnimatePresence>
        {showDropdown && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="absolute inset-x-0 top-[calc(100%+6px)] z-50 max-h-[70vh] overflow-y-auto rounded-2xl border border-line bg-white p-2 shadow-pop dark:border-night-line dark:bg-night-card"
            role="listbox"
          >
            {empty && (
              <p className="px-3 py-4 text-center text-sm text-ink/50 dark:text-white/50">
                No matches for “{term}”. Try a pattern name or a problem keyword.
              </p>
            )}

            {results.patterns.length > 0 && (
              <>
                <p className="px-3 pb-1 pt-2 text-[11px] font-bold uppercase tracking-wider text-ink/40 dark:text-white/40">
                  Patterns
                </p>
                {results.patterns.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    className="flex w-full items-start gap-2 rounded-xl px-3 py-2 text-left text-sm hover:bg-black/5 dark:hover:bg-white/10"
                    onClick={() => go(`/patterns/${p.slug}`)}
                  >
                    <span aria-hidden="true">{p.emoji}</span>
                    <span className="min-w-0">
                      <span className="block font-semibold">{p.name}</span>
                      <span className="block truncate text-xs text-ink/50 dark:text-white/50">{p.short}</span>
                    </span>
                  </button>
                ))}
              </>
            )}

            {results.questions.length > 0 && (
              <>
                <p className="px-3 pb-1 pt-2 text-[11px] font-bold uppercase tracking-wider text-ink/40 dark:text-white/40">
                  Questions
                </p>
                {results.questions.map((q) => (
                  <button
                    key={q.id}
                    type="button"
                    className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-sm hover:bg-black/5 dark:hover:bg-white/10"
                    onClick={() => go(`/questions/${q.slug}`)}
                  >
                    <span className="min-w-0 flex-1">
                      <span className="block truncate font-medium">{q.title}</span>
                      <span className="block text-xs text-ink/50 dark:text-white/50">
                        {q.pattern} · {q.platform || '—'}
                      </span>
                    </span>
                    <DifficultyBadge difficulty={q.difficulty} />
                  </button>
                ))}
                <button
                  type="button"
                  className="mt-1 w-full rounded-xl px-3 py-2 text-left text-sm font-semibold text-brand hover:bg-brand-light dark:hover:bg-white/10"
                  onClick={() => go(`/questions?q=${encodeURIComponent(term.trim())}`)}
                >
                  See all results for “{term}” →
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
