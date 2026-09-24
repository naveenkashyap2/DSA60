import { useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useToast } from '../../context/ToastContext.jsx';

const TABS = [
  { key: 'java', label: 'Java' },
  { key: 'javascript', label: 'JavaScript' },
  { key: 'python', label: 'Python' },
  { key: 'cpp', label: 'C++' }
];

function Code({ code }) {
  // Plain preformatted rendering — no syntax highlighting library.
  return (
    <pre className="code-scroll max-h-[420px] overflow-auto p-4 font-mono text-[13px] leading-relaxed">
      <code>{code}</code>
    </pre>
  );
}

/**
 * Code tabs with Copy. Shows a graceful empty state (never fake code)
 * for languages where no solution is available.
 */
export default function CodeBlock({ code }) {
  const available = TABS.filter((t) => code[t.key] && code[t.key].trim());
  const [tab, setTab] = useState(available[0]?.key || null);
  const [copied, setCopied] = useState(false);
  const { push } = useToast();
  const timer = useRef(null);

  const current = available.find((t) => t.key === tab);

  const copy = async () => {
    const text = code[tab];
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      setCopied(true);
      push('Code copied to clipboard', 'success');
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1600);
    } catch {
      push('Could not copy — select the code manually', 'error');
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-line dark:border-night-line">
      {/* Tabs */}
      <div
        className="flex items-center gap-1 overflow-x-auto border-b border-line bg-black/2 px-2 py-1.5 dark:border-night-line dark:bg-white/5"
        role="tablist"
        aria-label="Solution language"
      >
        {TABS.map((t) => {
          const has = !!(code[t.key] && code[t.key].trim());
          const active = tab === t.key;
          return (
            <button
              key={t.key}
              type="button"
              role="tab"
              aria-selected={active}
              disabled={!has}
              onClick={() => has && setTab(t.key)}
              className={`relative min-h-[36px] shrink-0 rounded-lg px-3 text-xs font-semibold transition-colors ${
                active
                  ? 'text-white'
                  : has
                    ? 'text-ink/55 hover:text-ink dark:text-white/55 dark:hover:text-white'
                    : 'cursor-not-allowed text-ink/25 dark:text-white/25'
              }`}
              title={has ? undefined : `No ${t.label} solution available yet`}
            >
              {active && (
                <motion.span
                  layoutId="code-tab-pill"
                  className="absolute inset-0 rounded-lg bg-ink dark:bg-white/90"
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                />
              )}
              <span className="relative">{t.label}</span>
            </button>
          );
        })}

        {current && (
          <button
            type="button"
            onClick={copy}
            className="ml-auto inline-flex min-h-[36px] shrink-0 items-center gap-1.5 rounded-lg px-3 text-xs font-semibold text-ink/60 hover:bg-black/5 hover:text-ink dark:text-white/60 dark:hover:bg-white/10 dark:hover:text-white"
            aria-label="Copy code"
          >
            <span aria-hidden="true">{copied ? '✓' : '⧉'}</span>
            {copied ? 'Copied' : 'Copy'}
          </button>
        )}
      </div>

      <div className="bg-white text-ink dark:bg-night-soft dark:text-white/90">
        <AnimatePresence mode="wait">
          {current ? (
            <motion.div
              key={tab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <Code code={code[tab]} />
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center px-6 py-10 text-center"
            >
              <span aria-hidden="true" className="text-3xl">💻</span>
              <p className="mt-3 text-sm font-semibold">No solution available here yet</p>
              <p className="mt-1 max-w-sm text-xs text-ink/50 dark:text-white/50">
                We never show fake code — try one of the available languages above.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
