import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { getQuestion, getPattern, platformLabel, formatDate } from '../utils/helpers.js';
import { useProgress } from '../context/ProgressContext.jsx';
import { DifficultyBadge, PlatformBadge, StatusBadge } from '../components/ui/Badge.jsx';
import Accordion from '../components/ui/Accordion.jsx';
import NotFound from './NotFound.jsx';
import SolvedControl from '../components/question/SolvedControl.jsx';
import CodeBlock from '../components/question/CodeBlock.jsx';
import DryRunStepper from '../components/question/DryRunStepper.jsx';
import ComplexityCard from '../components/question/ComplexityCard.jsx';
import NotesEditor from '../components/question/NotesEditor.jsx';
import RelatedQuestions from '../components/question/RelatedQuestions.jsx';

/* ---------- Think Before Coding (5 expandable questions) ---------- */
function ThinkItem({ n, q, answer, open, onToggle }) {
  return (
    <div className="card overflow-hidden">
      <button
        type="button"
        className="flex w-full items-center gap-3 px-4 py-3 text-left"
        onClick={onToggle}
        aria-expanded={open}
      >
        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-light text-[11px] font-bold text-brand-deep dark:bg-brand/20 dark:text-brand">
          {n}
        </span>
        <span className="min-w-0 flex-1 text-sm font-semibold">{q}</span>
        <span aria-hidden="true" className={`text-ink/40 transition-transform dark:text-white/40 ${open ? 'rotate-180' : ''}`}>
          ▾
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className="border-t border-line py-3 pl-12 pr-4 text-sm leading-relaxed text-ink/70 dark:border-night-line dark:text-white/70">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ThinkBeforeCoding({ question }) {
  const [open, setOpen] = useState(null);
  const pattern = getPattern(question.pattern);
  const items = [
    {
      q: 'Restate the problem in your own words',
      a: (
        <span>
          <strong>{question.title}:</strong> {question.summary} In one line — {question.asked}
        </span>
      )
    },
    {
      q: 'Which pattern does this problem belong to?',
      a: (
        <span>
          This is a <strong>{pattern?.name || question.pattern}</strong> problem.{' '}
          {pattern?.short}
        </span>
      )
    },
    {
      q: 'What clues in the statement point to that pattern?',
      a: (
        <ul className="list-disc space-y-1 pl-4">
          {question.clues.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      )
    },
    {
      q: 'What would a brute force do, and how fast is it?',
      a: (
        <span>
          {question.brute.idea} — <strong>Time {question.brute.time}</strong>, Space{' '}
          {question.brute.space}.
        </span>
      )
    },
    {
      q: 'What is the key idea that makes it faster?',
      a: (
        <span>
          {question.optimal.idea} — <strong>Time {question.optimal.time}</strong>, Space{' '}
          {question.optimal.space}.
        </span>
      )
    }
  ];

  return (
    <div className="space-y-2">
      {items.map((it, i) => (
        <ThinkItem
          key={i}
          n={i + 1}
          q={it.q}
          answer={it.a}
          open={open === i}
          onToggle={() => setOpen(open === i ? null : i)}
        />
      ))}
    </div>
  );
}

/* ---------- Progressive 3-level hints ---------- */
function HintLadder({ question }) {
  const [revealed, setRevealed] = useState(0); // 0..3
  return (
    <div className="card p-4 sm:p-5">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-sm font-bold">
          <span aria-hidden="true" className="mr-1.5">💡</span>Progressive Hints
        </h3>
        <span className="flex gap-1" aria-label={`${revealed} of 3 hints revealed`}>
          {[1, 2, 3].map((n) => (
            <span
              key={n}
              className={`h-2 w-6 rounded-full ${revealed >= n ? 'bg-brand' : 'bg-black/10 dark:bg-white/15'}`}
            />
          ))}
        </span>
      </div>
      <div className="mt-3 space-y-2">
        <AnimatePresence initial={false}>
          {question.hints.slice(0, revealed).map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="overflow-hidden"
            >
              <div className="flex items-start gap-2.5 rounded-xl bg-brand-light/70 px-3.5 py-2.5 text-sm leading-relaxed dark:bg-brand/15">
                <span className="font-bold text-brand-deep dark:text-brand">Hint {i + 1}:</span>
                <span>{h}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {revealed < 3 ? (
          <button
            type="button"
            className="btn-outline w-full text-xs"
            onClick={() => setRevealed((r) => r + 1)}
          >
            {revealed === 0
              ? '💡 Reveal Hint 1'
              : `💡 I'm still stuck — reveal Hint ${revealed + 1}`}
          </button>
        ) : (
          <p className="text-center text-xs text-ink/45 dark:text-white/45">
            All hints revealed — now check the Optimal approach. You've got this! 💪
          </p>
        )}
      </div>
    </div>
  );
}

/* ---------- Page ---------- */
export default function QuestionDetail() {
  const { questionSlug } = useParams();
  const question = getQuestion(questionSlug);
  const navigate = useNavigate();
  const {
    statusOf,
    progress,
    isBookmarked,
    toggleBookmark,
    recordAttempt,
    touchVisited
  } = useProgress();

  const attemptGuard = useRef(null);

  useEffect(() => {
    if (!question) return;
    // Record an attempt + recent visit (guarded against double-invocation).
    const stamp = Date.now();
    if (attemptGuard.current?.id !== question.id || stamp - (attemptGuard.current?.t || 0) > 4000) {
      attemptGuard.current = { id: question.id, t: stamp };
      recordAttempt(question.id);
      touchVisited(question.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [question?.id]);

  const entry = question ? progress[question.id] : null;

  const links = useMemo(() => {
    if (!question) return [];
    const out = [];
    if (question.url) out.push({ label: platformLabel(question.platform), url: question.url });
    for (const e of question.extra || []) out.push({ label: e.label, url: e.url });
    return out;
  }, [question]);

  if (!question) return <NotFound />;

  const status = statusOf(question.id);
  const bookmarked = isBookmarked(question.id);
  const pattern = getPattern(question.pattern);

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs text-ink/50 dark:text-white/50">
        <ol className="flex flex-wrap items-center gap-1.5">
          <li>
            <Link to="/patterns" className="hover:text-brand">Patterns</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link to={`/patterns/${question.pattern}`} className="hover:text-brand">
              {pattern?.name || question.pattern}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="font-semibold text-ink dark:text-white">{question.title}</li>
        </ol>
      </nav>

      {/* Header */}
      <header className="card p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-1.5">
              <Link to={`/patterns/${question.pattern}`} className="chip bg-brand-light text-brand-deep hover:underline dark:bg-white/10 dark:text-brand">
                {pattern?.emoji} {pattern?.name || question.pattern}
              </Link>
              <DifficultyBadge difficulty={question.difficulty} />
              <PlatformBadge platform={question.platform} />
              <StatusBadge status={status} />
            </div>
            <h1 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
              {question.title}
            </h1>
            <p className="mt-2 text-sm leading-relaxed text-ink/60 dark:text-white/60">
              {question.summary}
            </p>
          </div>
          <button
            type="button"
            onClick={() => toggleBookmark(question.id)}
            aria-pressed={bookmarked}
            aria-label={bookmarked ? 'Remove bookmark' : 'Add bookmark'}
            className={`btn ${bookmarked ? 'border-blush bg-blush-light text-ink dark:bg-blush/20 dark:text-white' : 'btn-outline'}`}
          >
            <span aria-hidden="true">🔖</span>
            <span className="hidden sm:inline">{bookmarked ? 'Bookmarked' : 'Bookmark'}</span>
          </button>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          {links.map((l) => (
            <a
              key={l.url + l.label}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-xs"
            >
              {l.label}
            </a>
          ))}
          <button
            type="button"
            className="btn-ghost text-xs"
            onClick={() => navigate(-1)}
          >
            ← Back
          </button>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4 dark:border-night-line">
          <SolvedControl questionId={question.id} />
          <p className="text-xs text-ink/50 dark:text-white/50">
            {entry?.attempts || 0} attempt{(entry?.attempts || 0) === 1 ? '' : 's'}
            {entry?.lastAttempt && ` · last ${formatDate(entry.lastAttempt)}`}
            {entry?.solvedAt && ` · solved ${formatDate(entry.solvedAt)}`}
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Main column */}
        <div className="space-y-6 lg:col-span-2">
          {/* Why this pattern */}
          <section className="card p-5" aria-label="Why this pattern">
            <h2 className="text-sm font-bold uppercase tracking-wider text-ink/45 dark:text-white/45">
              🧩 Why this pattern
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink/75 dark:text-white/75">
              {question.why}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {question.clues.map((c, i) => (
                <span key={i} className="chip bg-black/5 text-ink/60 dark:bg-white/10 dark:text-white/60">
                  {c}
                </span>
              ))}
            </div>
          </section>

          {/* Think before coding */}
          <section aria-label="Think before coding">
            <h2 className="section-title mb-3">🤔 Think Before Coding</h2>
            <ThinkBeforeCoding question={question} />
          </section>

          {/* Hints */}
          <HintLadder question={question} />

          {/* Approaches */}
          <section aria-label="Approaches" className="space-y-3">
            <h2 className="section-title">🛠️ Approaches</h2>
            <Accordion id="brute" icon="🐢" title="Brute Force" subtitle={question.brute.time} defaultOpen>
              <p className="text-sm leading-relaxed text-ink/75 dark:text-white/75">
                {question.brute.idea}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="chip bg-black/5 text-ink/60 dark:bg-white/10 dark:text-white/60">
                  ⏱ Time {question.brute.time}
                </span>
                <span className="chip bg-black/5 text-ink/60 dark:bg-white/10 dark:text-white/60">
                  💾 Space {question.brute.space}
                </span>
              </div>
            </Accordion>

            <Accordion id="optimal" icon="⚡" title="Optimal Approach" subtitle={question.optimal.time}>
              <p className="text-sm leading-relaxed text-ink/75 dark:text-white/75">
                {question.optimal.idea}
              </p>
              <h4 className="mt-4 text-xs font-bold uppercase tracking-wider text-ink/45 dark:text-white/45">
                Steps
              </h4>
              <ol className="mt-2 space-y-1.5">
                {question.optimal.steps.map((s, i) => (
                  <li key={i} className="flex gap-2.5 text-sm leading-relaxed">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-light text-[10px] font-bold text-brand-deep dark:bg-brand/20 dark:text-brand">
                      {i + 1}
                    </span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="chip bg-brand-light text-brand-deep dark:bg-brand/15 dark:text-brand">
                  ⏱ Time {question.optimal.time}
                </span>
                <span className="chip bg-brand-light text-brand-deep dark:bg-brand/15 dark:text-brand">
                  💾 Space {question.optimal.space}
                </span>
              </div>
            </Accordion>
          </section>

          {/* Dry run */}
          <section aria-label="Dry run" className="card p-5">
            <h2 className="text-sm font-bold uppercase tracking-wider text-ink/45 dark:text-white/45">
              🎬 Step-by-Step Dry Run
            </h2>
            <p className="mb-4 mt-1 text-xs text-ink/50 dark:text-white/50">
              Walk through the optimal approach on a worked example.
            </p>
            <DryRunStepper steps={question.dry} />
          </section>

          {/* Complexity */}
          <section aria-label="Complexity" className="space-y-3">
            <h2 className="section-title">📊 Complexity</h2>
            <ComplexityCard brute={question.brute} optimal={question.optimal} />
          </section>

          {/* Code */}
          <section id="solutions" aria-label="Solutions" className="space-y-3">
            <h2 className="section-title">💻 Solutions</h2>
            <CodeBlock code={question.code} />
          </section>

          {/* Notes */}
          <section aria-label="Your notes" className="space-y-3">
            <h2 className="section-title">📝 Your Notes</h2>
            <NotesEditor questionId={question.id} />
          </section>
        </div>

        {/* Side column */}
        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          {/* Status card */}
          <div className="card p-5">
            <h3 className="text-sm font-bold">Status</h3>
            <div className="mt-3 flex items-center gap-2">
              <StatusBadge status={status} />
            </div>
            <dl className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-ink/50 dark:text-white/50">Attempts</dt>
                <dd className="font-bold">{entry?.attempts || 0}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-ink/50 dark:text-white/50">Last attempt</dt>
                <dd className="font-semibold">{entry?.lastAttempt ? formatDate(entry.lastAttempt) : '—'}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-ink/50 dark:text-white/50">Solved</dt>
                <dd className="font-semibold">{entry?.solvedAt ? formatDate(entry.solvedAt) : '—'}</dd>
              </div>
            </dl>
            {status !== 'solved' && (
              <button
                type="button"
                className="btn-primary mt-4 w-full"
                onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Practice this problem →
              </button>
            )}
            {status === 'solved' && (
              <Link to="/revision" className="btn-outline mt-4 w-full">
                Plan your revision →
              </Link>
            )}
          </div>

          {/* Related */}
          <section aria-label="Related questions" className="space-y-3">
            <h3 className="text-sm font-bold">Related Questions</h3>
            <RelatedQuestions question={question} />
          </section>

          {/* Pattern card */}
          {pattern && (
            <Link to={`/patterns/${pattern.slug}`} className="card flex items-start gap-3 p-4 transition-colors hover:border-brand/50">
              <span aria-hidden="true" className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-light text-xl dark:bg-brand/20">
                {pattern.emoji}
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-bold">{pattern.name}</span>
                <span className="mt-0.5 block text-xs text-ink/55 dark:text-white/55">
                  Learn the pattern →
                </span>
              </span>
            </Link>
          )}
        </aside>
      </div>
    </div>
  );
}
