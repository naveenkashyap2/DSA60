import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Sidebar from './Sidebar.jsx';
import BottomNav from './BottomNav.jsx';
import Footer from './Footer.jsx';
import ChatAssistant from './ChatAssistant.jsx';

/** Public pages: Navbar + content + Footer (Home, About). */
export function PublicLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <BottomNav />
      <ChatAssistant />
    </div>
  );
}

/** App pages: Navbar + collapsible Sidebar (desktop) + content. */
export function DashboardLayout() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="mx-auto flex w-full max-w-[1600px] gap-6 px-4 pb-24 pt-4 sm:px-6 lg:px-8 lg:pb-10">
        <Sidebar />
        <main className="min-w-0 flex-1">
          <Outlet />
        </main>
      </div>
      <BottomNav />
      <ChatAssistant />
    </div>
  );
}

/** Auth pages: centered card, no chrome. */
export function AuthLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <ChatAssistant />
    </div>
  );
}
