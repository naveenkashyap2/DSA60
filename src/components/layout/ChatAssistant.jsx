import { useState, useRef, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  getAssistantSuggestions,
  getAssistantReply
} from '../../utils/assistant.js';
import { getQuestion, getPattern } from '../../utils/helpers.js';

const GREETING = [
  "Hi! I'm your DSA Assistant 👋",
  'Pick a suggested prompt below, or ask me anything about the problem you are viewing. I run fully in your browser — no backend.'
].join('\n\n');

export default function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ from: 'bot', text: GREETING }]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const listRef = useRef(null);
  const timerRef = useRef(null);
  const location = useLocation();

  // Context: the question being viewed (if any)
  const ctxQuestion = useMemo(() => {
    const m = location.pathname.match(/^\/questions\/([^/]+)$/);
    return m ? getQuestion(m[1]) : null;
  }, [location.pathname]);

  const suggestions = getAssistantSuggestions();

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, typing]);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const ask = (prompt) => {
    const text = (prompt || '').trim();
    if (!text || typing) return;
    setMessages((m) => [...m, { from: 'user', text }]);
    setInput('');
    setTyping(true);
    clearTimeout(timerRef.current);
    const pattern = ctxQuestion ? getPattern(ctxQuestion.pattern) : null;
    const context = {
      question: ctxQuestion,
      pattern: pattern?.name,
      difficulty: ctxQuestion?.difficulty,
      summary: ctxQuestion?.summary
    };
    timerRef.current = setTimeout(() => {
      const reply = getAssistantReply(text, context);
      setMessages((m) => [...m, { from: 'bot', text: reply }]);
      setTyping(false);
    }, 450);
  };

  return (
    <>
      {/* Floating button */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close DSA Assistant' : 'Open DSA Assistant'}
        aria-expanded={open}
        className="fixed bottom-20 right-4 z-50 grid h-14 w-14 place-items-center rounded-full bg-brand text-2xl text-white shadow-pop transition-transform hover:scale-105 active:scale-95 lg:bottom-6 lg:right-6"
      >
        <span aria-hidden="true">{open ? '✕' : '💬'}</span>
      </button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed bottom-[calc(5.5rem+env(safe-area-inset-bottom))] right-4 z-50 flex max-h-[min(70vh,560px)] w-[min(92vw,380px)] flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-pop dark:border-night-line dark:bg-night-card lg:bottom-24 lg:right-6"
            role="dialog"
            aria-modal="false"
            aria-label="DSA Assistant"
          >
            {/* Header */}
            <div className="flex items-center gap-2.5 border-b border-line bg-brand-light px-4 py-3 dark:border-night-line dark:bg-night-soft">
              <span aria-hidden="true" className="grid h-9 w-9 place-items-center rounded-full bg-brand text-lg text-white">
                💬
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold">DSA Assistant</p>
                <p className="truncate text-[11px] text-ink/55 dark:text-white/55">
                  {ctxQuestion ? 'In context of your problem' : 'Local assistant · no backend'}
                </p>
              </div>
              <button
                type="button"
                className="btn-ghost min-h-[36px] px-2"
                onClick={() => setOpen(false)}
                aria-label="Close assistant"
              >
                <span aria-hidden="true">✕</span>
              </button>
            </div>

            {/* Context chip (question pages only) */}
            {ctxQuestion && (
              <div className="border-b border-line px-4 py-2 dark:border-night-line">
                <span className="chip bg-brand-light text-brand-deep dark:bg-white/10 dark:text-brand">
                  📌 {ctxQuestion.title}
                </span>
              </div>
            )}

            {/* Messages */}
            <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-3">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[85%] whitespace-pre-line rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed ${
                      m.from === 'user'
                        ? 'rounded-br-md bg-brand text-white'
                        : 'rounded-bl-md bg-black/4 text-ink dark:bg-white/10 dark:text-white'
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="rounded-2xl rounded-bl-md bg-black/4 px-4 py-3 dark:bg-white/10" aria-label="Assistant is typing">
                    <span className="inline-flex gap-1" aria-hidden="true">
                      <motion.span
                        className="h-1.5 w-1.5 rounded-full bg-ink/40 dark:bg-white/40"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                      />
                      <motion.span
                        className="h-1.5 w-1.5 rounded-full bg-ink/40 dark:bg-white/40"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                      />
                      <motion.span
                        className="h-1.5 w-1.5 rounded-full bg-ink/40 dark:bg-white/40"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                      />
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Suggestions */}
            <div className="flex gap-1.5 overflow-x-auto border-t border-line px-3 py-2 dark:border-night-line">
              {suggestions.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => ask(s)}
                  className="shrink-0 rounded-full border border-line px-3 py-1.5 text-xs font-medium text-ink/65 transition-colors hover:border-brand hover:text-brand dark:border-night-line dark:text-white/65 dark:hover:border-brand dark:hover:text-brand"
                >
                  {s}
                </button>
              ))}
            </div>

            {/* Input */}
            <form
              className="flex items-center gap-2 border-t border-line px-3 py-2.5 dark:border-night-line"
              onSubmit={(e) => {
                e.preventDefault();
                ask(input);
              }}
            >
              <input
                className="input min-h-[40px] text-[13px]"
                placeholder="Ask about this problem…"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                aria-label="Message the DSA Assistant"
              />
              <button type="submit" className="btn-primary min-h-[40px] px-3.5 text-[13px]" disabled={!input.trim() || typing}>
                Send
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
