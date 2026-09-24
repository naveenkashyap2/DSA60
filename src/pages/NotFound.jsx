import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="container-app flex flex-col items-center py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="max-w-md"
      >
        <p className="text-7xl font-extrabold tracking-tight text-brand" aria-hidden="true">
          404
        </p>
        <h1 className="mt-4 text-2xl font-extrabold tracking-tight">
          This page broke its own invariant
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-ink/60 dark:text-white/60">
          The page you're looking for doesn't exist (or was moved). Let's get you back to the
          practice plan.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn-primary">← Back to Home</Link>
          <Link to="/questions" className="btn-outline">Browse Questions</Link>
        </div>
      </motion.div>
    </div>
  );
}
