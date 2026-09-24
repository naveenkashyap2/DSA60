import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext.jsx';
import { useToast } from '../context/ToastContext.jsx';

export default function Login() {
  const { login } = useAuth();
  const { push } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setError('');
    setBusy(true);
    const res = login(email, password);
    setBusy(false);
    if (!res.ok) {
      setError(res.error);
      return;
    }
    push(`Welcome back, ${res.user.name}!`, 'success');
    navigate(location.state?.from || '/profile', { replace: true });
  };

  return (
    <div className="container-app flex justify-center py-12 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="w-full max-w-md"
      >
        <div className="card p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="grid h-11 w-11 place-items-center rounded-2xl bg-brand text-lg font-extrabold text-white">
              60
            </span>
            <div>
              <h1 className="text-xl font-extrabold tracking-tight">Welcome back</h1>
              <p className="text-xs text-ink/50 dark:text-white/50">Login to your local demo account</p>
            </div>
          </div>

          {error && (
            <p role="alert" className="mt-4 rounded-xl bg-blush-light px-4 py-2.5 text-sm font-medium dark:bg-blush/15">
              {error}
            </p>
          )}

          <form onSubmit={submit} className="mt-5 space-y-4">
            <label className="block">
              <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink/50 dark:text-white/50">
                Email
              </span>
              <input
                type="email"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink/50 dark:text-white/50">
                Password
              </span>
              <input
                type="password"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                autoComplete="current-password"
                required
              />
            </label>
            <button type="submit" className="btn-primary w-full" disabled={busy}>
              Login →
            </button>
          </form>

          <p className="mt-5 text-center text-sm text-ink/55 dark:text-white/55">
            New here?{' '}
            <Link to="/signup" className="font-semibold text-brand hover:underline">
              Create an account
            </Link>
          </p>
        </div>

        <p className="mt-4 rounded-xl border border-dashed border-line px-4 py-3 text-center text-xs leading-relaxed text-ink/50 dark:border-night-line dark:text-white/50">
          🔒 <strong>Demo auth, not production security.</strong> Accounts are validated locally
          and stored in your browser's localStorage. Nothing is sent to a server.
        </p>
      </motion.div>
    </div>
  );
}
