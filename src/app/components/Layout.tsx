import { Outlet, useLocation } from 'react-router';
import { useEffect } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

export function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instant scroll to top on page change
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm"
        style={{
          background: '#C9A84C',
          color: '#0F2444',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 700,
        }}
      >
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
