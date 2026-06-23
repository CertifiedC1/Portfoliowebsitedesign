import { createBrowserRouter, Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { SkillsPage } from './pages/SkillsPage';
import { ContactPage } from './pages/ContactPage';
import { useEffect, useState } from 'react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Experience', path: '/experience' },
  { label: 'Skills', path: '/skills' },
  { label: 'Contact', path: '/contact' },
];

function NotFound() {
  const [count, setCount] = useState(10);
  useEffect(() => {
    if (count <= 0) { window.location.href = '/'; return; }
    const t = setTimeout(() => setCount(c => c - 1), 1000);
    return () => clearTimeout(t);
  }, [count]);

  return (
    <>
      <Helmet>
        <title>404 — Page Not Found | Costa Luis &amp; Co</title>
      </Helmet>
      <div
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0A1023 0%, #0F2444 50%, #1B3A6B 100%)' }}
      >
        {/* Animated grid */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(rgba(201,168,76,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.4) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-5 blur-3xl" style={{ background: '#C9A84C', animation: 'pulse 4s ease-in-out infinite' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-5 blur-3xl" style={{ background: '#1B3A6B', animation: 'pulse 6s ease-in-out infinite reverse' }} />

        {/* Gold accent bars */}
        <div className="absolute left-0 top-1/4 bottom-1/4 w-1 rounded-r-full" style={{ background: 'linear-gradient(180deg, transparent, #C9A84C, transparent)' }} />
        <div className="absolute right-0 top-1/3 bottom-1/3 w-1 rounded-l-full" style={{ background: 'linear-gradient(180deg, transparent, #C9A84C66, transparent)' }} />

        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
          {/* Giant 404 */}
          <div className="relative mb-8">
            <div style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(6rem, 20vw, 12rem)',
              lineHeight: 1,
              background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(201,168,76,0.08))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              userSelect: 'none',
              letterSpacing: '-4px',
            }}>
              404
            </div>
            {/* Overlay CL logo in center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, #0F2444, #1B3A6B)',
                  border: '1px solid rgba(201,168,76,0.35)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(201,168,76,0.1)',
                }}
              >
                <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, color: '#C9A84C', fontSize: '1.4rem', letterSpacing: '1px' }}>CL</span>
              </div>
            </div>
          </div>

          {/* Decorative line */}
          <div className="flex items-center gap-4 justify-center mb-8">
            <div className="flex-1 h-px max-w-24" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.5))' }} />
            <span style={{ color: '#C9A84C', fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', letterSpacing: '4px', fontWeight: 600, textTransform: 'uppercase' }}>Page Not Found</span>
            <div className="flex-1 h-px max-w-24" style={{ background: 'linear-gradient(90deg, rgba(201,168,76,0.5), transparent)' }} />
          </div>

          <h1 className="mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(1.4rem, 4vw, 2rem)', color: 'white', lineHeight: 1.3 }}>
            This page doesn't exist
          </h1>
          <p className="mb-10 max-w-md mx-auto" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', lineHeight: 1.7 }}>
            The page you're looking for may have been moved, deleted, or never existed. Let us take you back to Costa Luis & Co.
          </p>

          {/* Auto-redirect countdown */}
          <div
            className="mb-8 inline-flex items-center gap-3 px-5 py-3 rounded-xl"
            style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)' }}
          >
            <div className="relative w-8 h-8">
              <svg viewBox="0 0 32 32" className="w-full h-full -rotate-90">
                <circle cx="16" cy="16" r="13" fill="none" stroke="rgba(201,168,76,0.2)" strokeWidth="2.5" />
                <circle
                  cx="16" cy="16" r="13" fill="none"
                  stroke="#C9A84C"
                  strokeWidth="2.5"
                  strokeDasharray={`${(count / 10) * 81.68} 81.68`}
                  strokeLinecap="round"
                  style={{ transition: 'stroke-dasharray 1s linear' }}
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '0.65rem', color: '#C9A84C' }}>
                {count}
              </span>
            </div>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>
              Redirecting to Home in <strong style={{ color: '#C9A84C' }}>{count}s</strong>
            </span>
          </div>

          {/* Navigation links */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm transition-all hover:-translate-y-1 hover:shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
                color: '#0F2444',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                boxShadow: '0 8px 32px rgba(201,168,76,0.35)',
              }}
            >
              ← Back to Home
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm transition-all hover:-translate-y-1"
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: 'white',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                backdropFilter: 'blur(8px)',
              }}
            >
              Contact Us
            </Link>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap gap-2 justify-center">
            {navLinks.map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                className="px-4 py-1.5 rounded-full text-xs transition-all hover:text-[#C9A84C] hover:-translate-y-0.5"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: 'rgba(255,255,255,0.5)',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                }}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Bottom firm branding */}
          <div className="mt-12 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '0.9rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '1px' }}>
              COSTA LUIS & CO · CHARTERED ACCOUNTANTS
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: 'rgba(255,255,255,0.2)', marginTop: '4px' }}>
              IPS Building, Kimathi Street · Nairobi CBD, Kenya
            </p>
          </div>
        </div>
      </div>
    </>
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
