import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  PublicLayout,
  DashboardLayout,
  AuthLayout
} from './components/layout/Layout.jsx';
import ScrollToTop from './components/layout/ScrollToTop.jsx';
import { PageLoader } from './components/ui/Skeleton.jsx';

// Route-level code splitting
const Home = lazy(() => import('./pages/Home.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Patterns = lazy(() => import('./pages/Patterns.jsx'));
const PatternDetail = lazy(() => import('./pages/PatternDetail.jsx'));
const Questions = lazy(() => import('./pages/Questions.jsx'));
const QuestionDetail = lazy(() => import('./pages/QuestionDetail.jsx'));
const DailyPractice = lazy(() => import('./pages/DailyPractice.jsx'));
const ProgressPage = lazy(() => import('./pages/ProgressPage.jsx'));
const Bookmarks = lazy(() => import('./pages/Bookmarks.jsx'));
const Revision = lazy(() => import('./pages/Revision.jsx'));
const Notes = lazy(() => import('./pages/Notes.jsx'));
const Profile = lazy(() => import('./pages/Profile.jsx'));
const Settings = lazy(() => import('./pages/Settings.jsx'));
const Login = lazy(() => import('./pages/Login.jsx'));
const Signup = lazy(() => import('./pages/Signup.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>

          <Route element={<DashboardLayout />}>
            <Route path="patterns" element={<Patterns />} />
            <Route path="patterns/:patternSlug" element={<PatternDetail />} />
            <Route path="questions" element={<Questions />} />
            <Route path="questions/:questionSlug" element={<QuestionDetail />} />
            <Route path="daily-practice" element={<DailyPractice />} />
            <Route path="progress" element={<ProgressPage />} />
            <Route path="bookmarks" element={<Bookmarks />} />
            <Route path="revision" element={<Revision />} />
            <Route path="notes" element={<Notes />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          <Route element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}
