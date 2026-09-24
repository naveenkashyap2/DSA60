import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getPattern, questionsByPattern, patternProgress } from '../utils/helpers.js';
import { useProgress } from '../context/ProgressContext.jsx';
import ProgressBar from '../components/ui/ProgressBar.jsx';
import QuestionCard from '../components/question/QuestionCard.jsx';
import NotFound from './NotFound.jsx';
import EmptyState from '../components/ui/EmptyState.jsx';

function Section({ icon, title, children, defaultOpen = true }) {
  return (
    <section className="card p-5">
      <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-ink/45 dark:text-white/45">
        <span aria-hidden="true" className="text-base">{icon}</span>
        {title}
      </h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

export default function PatternDetail() {
  const { patternSlug } = useParams();
  const pattern = getPattern(patternSlug);
  const { progress } = useProgress();

  if (!pattern) return <NotFound />;

  const questions = questionsByPattern(pattern.id);
  const pp = patternProgress(progress, pattern.id);

  return (
    <div className="space-y-6">
      <nav aria-label="Breadcrumb" className="text-xs text-ink/50 dark:text-white/50">
        <ol className="flex items-center gap-1.5">
          <li><Link to="/patterns" className="hover:text-brand">Patterns</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="font-semibold text-ink dark:text-white">{pattern.name}</li>
        </ol>
      </nav>

      {/* Header */}
      <header className="card p-5 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <span
            aria-hidden="true"
            className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand-light text-3xl dark:bg-brand/20"
          >
            {pattern.emoji}
          </span>
          <div className="min-w-0 flex-1">
            <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">{pattern.name}</h1>
            <p className="mt-1 text-sm text-ink/60 dark:text-white/60">{pattern.short}</p>
          </div>
          <div className="w-full sm:w-48">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="text-ink/50 dark:text-white/50">
                {pp.solved}/{pp.total} solved
              </span>
              <span className="text-brand">{pp.pct}%</span>
            </div>
            <ProgressBar pct={pp.pct} className="mt-1.5" label={`${pattern.name} progress`} />
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Education */}
        <div className="space-y-4 lg:col-span-2">
          <Section icon="📖" title="Definition">
            <p className="text-sm leading-relaxed text-ink/75 dark:text-white/75">{pattern.definition}</p>
          </Section>

          <Section icon="🎯" title="When to Use">
            <ul className="space-y-2">
              {(pattern.whenToUse || []).map((w, i) => (
                <li key={i} className="flex gap-2.5 text-sm leading-relaxed">
                  <span aria-hidden="true" className="mt-1 text-brand">✓</span>
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section icon="🔍" title="How to Identify (Common Clues)">
            <div className="flex flex-wrap gap-1.5">
              {(pattern.clues || []).map((c, i) => (
                <span key={i} className="chip bg-brand-light text-brand-deep dark:bg-white/10 dark:text-brand">
                  {c}
                </span>
              ))}
            </div>
          </Section>

          <Section icon="🧭" title="Basic Approach">
            <p className="text-sm leading-relaxed text-ink/75 dark:text-white/75">{pattern.approach}</p>
          </Section>

          <Section icon="⚠️" title="Common Mistakes">
            <ul className="space-y-2">
              {(pattern.mistakes || []).map((m, i) => (
                <li key={i} className="flex gap-2.5 text-sm leading-relaxed">
                  <span aria-hidden="true" className="mt-0.5 text-blush">✗</span>
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section icon="🧩" title="Template">
            <pre className="code-scroll overflow-auto rounded-xl bg-ink p-4 font-mono text-[12.5px] leading-relaxed text-white/90">
              <code>{pattern.template}</code>
            </pre>
          </Section>
        </div>

        {/* Side */}
        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <div className="card p-5">
            <h3 className="text-sm font-bold">Practice Order</h3>
            <p className="mt-1 text-xs text-ink/55 dark:text-white/55">
              Solve these in order — each one builds on the previous.
            </p>
            <ol className="mt-3 space-y-1.5">
              {questions.slice(0, 8).map((q, i) => (
                <li key={q.id}>
                  <Link
                    to={`/questions/${q.slug}`}
                    className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-[13px] font-medium hover:bg-black/5 dark:hover:bg-white/10"
                  >
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-black/5 text-[10px] font-bold dark:bg-white/10">
                      {i + 1}
                    </span>
                    <span className="truncate">{q.title}</span>
                    {progress[q.id]?.status === 'solved' && (
                      <span aria-hidden="true" className="ml-auto text-xs text-brand">✓</span>
                    )}
                  </Link>
                </li>
              ))}
              {questions.length > 8 && (
                <li className="px-2 pt-1 text-xs text-ink/45 dark:text-white/45">
                  +{questions.length - 8} more below
                </li>
              )}
            </ol>
          </div>
        </aside>
      </div>

      {/* Questions */}
      <section aria-label={`${pattern.name} questions`}>
        <h2 className="section-title mb-4">
          Problems <span className="text-ink/40 dark:text-white/40">({questions.length})</span>
        </h2>
        {questions.length === 0 ? (
          <EmptyState icon="🌱" title="No questions here yet" message="Questions for this pattern are coming soon." />
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {questions.map((q, i) => (
              <QuestionCard key={q.id} question={q} index={i} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
