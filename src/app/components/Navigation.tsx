import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, Sun, Moon, ChevronRight, Phone } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Experience', path: '/experience' },
  { label: 'Skills', path: '/skills' },
  { label: 'Contact', path: '/contact' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const navBg = isScrolled || isMobileOpen
    ? isDark
      ? 'bg-[#0F172A]/96 backdrop-blur-md shadow-lg border-b border-white/5'
      : 'bg-white/96 backdrop-blur-md shadow-lg border-b border-gray-100/80'
    : 'bg-transparent';

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* ── Logo / Wordmark ── */}
            <Link to="/" className="flex items-center gap-3 group flex-shrink-0" aria-label="Costa Luis & Co Home">
              {/* Monogram badge */}
              <div
                className="relative w-10 h-10 lg:w-11 lg:h-11 rounded-xl overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform duration-200"
                style={{ background: 'linear-gradient(135deg, #0F2444 0%, #1B3A6B 100%)' }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '0.85rem', color: 'white', letterSpacing: '-0.5px' }}>
                    CL
                  </span>
                </div>
                {/* Gold accent strip */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[3px]"
                  style={{ background: 'linear-gradient(90deg, #C9A84C, #E8C97A)' }}
                />
              </div>
              {/* Wordmark */}
              <div className="hidden sm:block leading-none">
                <div
                  className={`text-sm lg:text-[0.95rem] transition-colors duration-300`}
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 700,
                    lineHeight: 1.15,
                    color: (isScrolled || isMobileOpen) ? (isDark ? 'white' : '#0F2444') : 'white',
                  }}
                >
                  Costa Luis & Co
                </div>
                <div
                  className="text-[0.65rem] tracking-wide mt-0.5"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, color: '#C9A84C', letterSpacing: '0.04em' }}
                >
                  Audit · Tax · Advisory
                </div>
              </div>
            </Link>

            {/* ── Desktop Navigation ── */}
            <nav className="hidden lg:flex items-center gap-0.5" role="navigation" aria-label="Main navigation">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(link.path)
                      ? 'text-[#C9A84C]'
                      : isScrolled
                        ? isDark
                          ? 'text-gray-300 hover:text-white hover:bg-white/5'
                          : 'text-gray-600 hover:text-[#0F2444] hover:bg-gray-50'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                  aria-current={isActive(link.path) ? 'page' : undefined}
                >
                  {link.label}
                  {/* Active indicator underline */}
                  {isActive(link.path) && (
                    <span
                      className="absolute bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 w-4 rounded-full"
                      style={{ background: '#C9A84C' }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* ── Desktop Right Actions ── */}
            <div className="hidden lg:flex items-center gap-2.5">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all ${
                  isScrolled
                    ? isDark
                      ? 'text-gray-400 hover:text-white hover:bg-white/8'
                      : 'text-gray-500 hover:text-[#0F2444] hover:bg-gray-100'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                title={isDark ? 'Light mode' : 'Dark mode'}
              >
                {isDark ? <Sun size={17} /> : <Moon size={17} />}
              </button>

              {/* Quick Call */}
              <a
                href="tel:+254202215018"
                className={`hidden xl:flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs transition-all ${
                  isScrolled
                    ? isDark
                      ? 'text-gray-400 hover:text-white hover:bg-white/8'
                      : 'text-gray-500 hover:text-[#0F2444] hover:bg-gray-100'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                aria-label="Call us"
              >
                <Phone size={14} />
                +254 20 221 5018
              </a>

              {/* Primary CTA */}
              <Link
                to="/contact"
                className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                style={{
                  background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
                  color: '#0F2444',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  boxShadow: '0 4px 16px rgba(201,168,76,0.35)',
                }}
              >
                Get in Touch
                <ChevronRight size={14} />
              </Link>
            </div>

            {/* ── Mobile Right Controls ── */}
            <div className="flex lg:hidden items-center gap-1.5">
              <button
                onClick={toggleTheme}
                className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                  isScrolled || isMobileOpen
                    ? isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-[#0F2444]'
                    : 'text-white/75 hover:text-white'
                }`}
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDark ? <Sun size={17} /> : <Moon size={17} />}
              </button>
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all ${
                  isScrolled || isMobileOpen
                    ? isDark ? 'text-white hover:bg-white/10' : 'text-gray-800 hover:bg-gray-100'
                    : 'text-white hover:bg-white/10'
                }`}
                aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileOpen}
              >
                {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile Menu Overlay ── */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ${
          isMobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileOpen(false)}
        />

        {/* Slide-down panel */}
        <div
          className={`absolute top-16 left-0 right-0 transition-all duration-300 ${
            isMobileOpen ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0'
          } ${isDark ? 'bg-[#0F172A]' : 'bg-white'} shadow-2xl`}
          style={{ borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}` }}
        >
          {/* Nav links */}
          <div className="px-4 pt-5 pb-4 space-y-1">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-sm transition-all ${
                  isActive(link.path)
                    ? isDark
                      ? 'bg-[#C9A84C]/10 text-[#C9A84C]'
                      : 'bg-[#1B3A6B]/8 text-[#1B3A6B]'
                    : isDark
                      ? 'text-gray-300 hover:text-white hover:bg-white/5'
                      : 'text-gray-700 hover:text-[#0F2444] hover:bg-gray-50'
                }`}
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: isActive(link.path) ? 600 : 500 }}
              >
                <span>{link.label}</span>
                {isActive(link.path) && (
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#C9A84C' }} />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile CTA block */}
          <div
            className="px-4 pb-5"
            style={{ borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)'}` }}
          >
            <div className="pt-4 space-y-3">
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm"
                style={{
                  background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
                  color: '#0F2444',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                }}
              >
                Get in Touch
                <ChevronRight size={15} />
              </Link>
              <a
                href="tel:+254202215018"
                className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm border ${
                  isDark
                    ? 'border-white/10 text-gray-300 hover:text-white'
                    : 'border-gray-200 text-gray-600 hover:text-[#0F2444]'
                }`}
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
              >
                <Phone size={15} style={{ color: '#C9A84C' }} />
                +254 (0)20 221 5018
              </a>
            </div>
          </div>

          {/* Footer strip */}
          <div
            className="px-6 py-3"
            style={{
              borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)'}`,
              background: isDark ? 'rgba(0,0,0,0.15)' : '#F8F9FC',
            }}
          >
            <p className="text-center text-xs" style={{ color: isDark ? '#64748B' : '#9CA3AF', fontFamily: 'Inter, sans-serif' }}>
              IPS Building, 5th Floor · Kimathi Street · Nairobi CBD
            </p>
          </div>
        </div>
      </div>

      {/* ── Mobile Sticky CTA Button ── */}
      <div className="lg:hidden fixed bottom-5 right-4 z-40">
        <Link
          to="/contact"
          className="flex items-center gap-2 px-4 py-3 rounded-2xl text-sm shadow-xl"
          style={{
            background: 'linear-gradient(135deg, #1B3A6B, #2A5298)',
            color: 'white',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700,
            boxShadow: '0 8px 28px rgba(27,58,107,0.45)',
          }}
          aria-label="Contact us"
        >
          <Phone size={15} />
          <span>Get in Touch</span>
        </Link>
      </div>
    </>
  );
}
