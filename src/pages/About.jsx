import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { QUESTIONS } from '../data/questions.js';
import { patterns } from '../data/patterns.js';
import { TOTAL_DAYS } from '../data/journey.js';

const FEATURES = [
  { icon: '🧩', title: 'Pattern-first learning', text: '16 patterns, each with definition, clues, approach, mistakes and a code template — then its problems.' },
  { icon: '🤔', title: 'Think Before Coding', text: 'Five guided questions prime your thinking before you ever look at the solution.' },
  { icon: '💡', title: 'Progressive hints', text: '3-level hint ladder. Reveal only as much help as you need.' },
  { icon: '🎬', title: 'Step-by-step dry runs', text: 'Watch the optimal approach execute on a worked example, one step at a time.' },
  { icon: '💻', title: 'Real solutions only', text: 'Java / JavaScript / Python / C++ tabs with copy — and an honest empty state where a language is unavailable. No fake code.' },
  { icon: '📈', title: 'Live progress dashboard', text: 'Streak, daily chart, activity heatmap and per-pattern bars — all computed from your local data.' },
  { icon: '🗓️', title: '60-day journey', text: 'Every problem assigned to exactly one of 60 days, data-driven from the actual question list.' },
  { icon: '🔁', title: 'Built-in revision', text: 'Recently solved, bookmarks, notes and multi-attempt problems auto-collect into a revision plan.' }
];

const STACK = ['React 18', 'Vite', 'Tailwind CSS', 'Framer Motion', 'React Router DOM', 'localStorage'];

export default function About() {
  return (
    <div className="container-app py-10 sm:py-14">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="max-w-3xl"
      >
        <p className="chip bg-brand-light text-brand-deep dark:bg-brand/20 dark:text-brand">About</p>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
          What is DSA-60 Days?
        </h1>
        <p className="mt-4 text-base leading-relaxed text-ink/70 dark:text-white/70">
          DSA-60 Days is a complete, pattern-first DSA course that lives entirely in your browser.
          <strong> {patterns.length} patterns · {QUESTIONS.length} curated problems · {TOTAL_DAYS} days.</strong>{' '}
          Each problem teaches the full loop: understand → identify the pattern → think before
          coding → progressive hints → brute force vs optimal → dry run → real code → mark solved →
          note what you learned → revise it later.
        </p>
        <p className="mt-3 text-base leading-relaxed text-ink/70 dark:text-white/70">
          Learn. Solve. Track. Revise. — That's the whole philosophy. No accounts required (a local
          demo account is optional), no server, no tracking: your progress is stored in this
          browser only.
        </p>
      </motion.div>

      <section className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Features">
        {FEATURES.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut', delay: Math.min(i * 0.05, 0.3) }}
            className="card p-5"
          >
            <span aria-hidden="true" className="text-2xl">{f.icon}</span>
            <h2 className="mt-3 text-sm font-bold">{f.title}</h2>
            <p className="mt-1.5 text-[13px] leading-relaxed text-ink/60 dark:text-white/60">{f.text}</p>
          </motion.div>
        ))}
      </section>

      <section className="card mt-10 p-6" aria-label="Tech">
        <h2 className="text-sm font-bold">Built with</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {STACK.map((t) => (
            <span key={t} className="chip bg-black/5 text-ink/60 dark:bg-white/10 dark:text-white/60">{t}</span>
          ))}
        </div>
        <p className="mt-4 text-xs leading-relaxed text-ink/50 dark:text-white/50">
          Frontend only by design: React Router for navigation, Framer Motion for subtle motion
          (0.2–0.5s easeOut, with reduced-motion support), CSS-only charts (no chart library), and
          localStorage for every bit of state. The DSA Assistant UI is local today and architected
          so a Gemini/OpenAI backend can be swapped in later.
        </p>
      </section>

      <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ink/60 dark:text-white/60">
          Developed by <span className="font-bold text-ink dark:text-white">Naveen</span> · © 2026 DSA-60 Days
        </p>
        <Link to="/" className="btn-primary">Start learning →</Link>
      </div>
    </div>
  );
}
