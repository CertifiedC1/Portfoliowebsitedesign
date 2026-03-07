import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { SkillsPage } from './pages/SkillsPage';
import { ContactPage } from './pages/ContactPage';

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #0F2444, #1B3A6B)' }}>
      <div className="text-center px-4">
        <div className="text-8xl mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, color: 'rgba(255,255,255,0.12)' }}>404</div>
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.2)' }}>
          <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#C9A84C', fontSize: '1.1rem' }}>CL</span>
        </div>
        <h1 className="mb-3" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.8rem', color: 'white', lineHeight: 1.2 }}>
          Page Not Found
        </h1>
        <p className="mb-8 max-w-sm mx-auto" style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', lineHeight: 1.6 }}>
          The page you're looking for doesn't exist. Let us direct you back to our home.
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm"
          style={{
            background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
            color: '#0F2444',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700,
            boxShadow: '0 8px 24px rgba(201,168,76,0.35)',
          }}
        >
          Return to Home
        </a>
      </div>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: 'about', Component: AboutPage },
      { path: 'services', Component: ServicesPage },
      { path: 'experience', Component: ExperiencePage },
      { path: 'skills', Component: SkillsPage },
      { path: 'contact', Component: ContactPage },
      { path: '*', Component: NotFound },
    ],
  },
]);
