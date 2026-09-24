/* SSR smoke test: render every route and assert key content. */
import { renderToString } from 'react-dom/server';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

// Minimal localStorage polyfill for node.
const store = new Map();
globalThis.localStorage = {
  getItem: (k) => (store.has(k) ? store.get(k) : null),
  setItem: (k, v) => void store.set(k, String(v)),
  removeItem: (k) => void store.delete(k),
  clear: () => store.clear()
};

import React from 'react';
import { ThemeProvider } from './src/context/ThemeContext.jsx';
import { AuthProvider } from './src/context/AuthContext.jsx';
import { ToastProvider } from './src/context/ToastContext.jsx';
import { ProgressProvider } from './src/context/ProgressContext.jsx';

import Home from './src/pages/Home.jsx';
import About from './src/pages/About.jsx';
import Patterns from './src/pages/Patterns.jsx';
import PatternDetail from './src/pages/PatternDetail.jsx';
import Questions from './src/pages/Questions.jsx';
import QuestionDetail from './src/pages/QuestionDetail.jsx';
import DailyPractice from './src/pages/DailyPractice.jsx';
import ProgressPage from './src/pages/ProgressPage.jsx';
import Bookmarks from './src/pages/Bookmarks.jsx';
import Revision from './src/pages/Revision.jsx';
import Notes from './src/pages/Notes.jsx';
import Profile from './src/pages/Profile.jsx';
import Settings from './src/pages/Settings.jsx';
import Login from './src/pages/Login.jsx';
import Signup from './src/pages/Signup.jsx';
import NotFound from './src/pages/NotFound.jsx';

function shell(pathname) {
  return (
    <MemoryRouter initialEntries={[pathname]}>
      <ThemeProvider>
        <AuthProvider>
          <ToastProvider>
            <ProgressProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/patterns" element={<Patterns />} />
                <Route path="/patterns/:patternSlug" element={<PatternDetail />} />
                <Route path="/questions" element={<Questions />} />
                <Route path="/questions/:questionSlug" element={<QuestionDetail />} />
                <Route path="/daily-practice" element={<DailyPractice />} />
                <Route path="/progress" element={<ProgressPage />} />
                <Route path="/bookmarks" element={<Bookmarks />} />
                <Route path="/revision" element={<Revision />} />
                <Route path="/notes" element={<Notes />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </ProgressProvider>
          </ToastProvider>
        </AuthProvider>
      </ThemeProvider>
    </MemoryRouter>
  );
}

const routes = [
  ['/', 'Master DSA Patterns'],
  ['/about', 'What is DSA-60 Days'],
  ['/patterns', 'The 16 Patterns'],
  ['/patterns/two-pointers', 'Two Pointers'],
  ['/patterns/binary-search', 'Binary Search'],
  ['/questions', 'All Questions'],
  ['/questions/pair-with-target-sum', 'Pair with Target Sum'],
  ['/questions/jump-game', 'Jump Game'],
  ['/daily-practice', '60-Day Journey'],
  ['/progress', 'Your Progress'],
  ['/bookmarks', 'Bookmarks'],
  ['/revision', 'Revision'],
  ['/notes', 'My Notes'],
  ['/profile', 'Guest Learner'],
  ['/settings', 'Settings'],
  ['/login', 'Welcome back'],
  ['/signup', 'Create your account'],
  ['/does-not-exist', '404']
];

let failed = 0;
for (const [path, expect] of routes) {
  try {
    const html = renderToString(shell(path));
    if (!html.includes(expect)) {
      console.error(`FAIL ${path} — missing "${expect}"`);
      failed++;
    } else {
      console.log(`ok   ${path}`);
    }
  } catch (err) {
    console.error(`FAIL ${path} — threw: ${err.message}`);
    failed++;
  }
}

// Data integrity: every question detail renders (no silent empty).
import { QUESTIONS } from './src/data/questions.js';
let bad = 0;
for (const q of QUESTIONS) {
  try {
    const html = renderToString(shell(`/questions/${q.slug}`));
    if (!html.includes(q.title)) {
      console.error(`FAIL /questions/${q.slug} — missing title`);
      bad++;
    }
  } catch (err) {
    console.error(`FAIL /questions/${q.slug} — threw: ${err.message}`);
    bad++;
  }
}
console.log(`\nRendered ${QUESTIONS.length} question pages, ${bad} failed.`);
console.log(failed === 0 && bad === 0 ? 'SMOKE PASS ✅' : `SMOKE FAIL ❌ (${failed} routes, ${bad} questions)`);
process.exit(failed === 0 && bad === 0 ? 0 : 1);
