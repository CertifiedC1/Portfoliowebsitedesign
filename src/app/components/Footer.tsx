import { Link } from 'react-router';
import { MapPin, Phone, Mail, Globe, Linkedin, Twitter, Facebook, ArrowRight, Shield, ExternalLink } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Our Services', path: '/services' },
  { label: 'Experience & Credentials', path: '/experience' },
  { label: 'Skills & Industries', path: '/skills' },
  { label: 'Contact Us', path: '/contact' },
];

const services = [
  { label: 'Statutory Audit', id: 'statutory-audit' },
  { label: 'Internal Audit', id: 'internal-audit' },
  { label: 'Tax Advisory', id: 'tax-advisory' },
  { label: 'Company Secretarial', id: 'company-secretarial' },
  { label: 'Insolvency & Debt', id: 'insolvency' },
  { label: 'Business Consultancy', id: 'business-consultancy' },
  { label: 'IT Solutions', id: 'it-solutions' },
];

const certifications = ['CA', 'CS', 'CPA', 'CPS', 'IP'];

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'X / Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Globe, href: '#', label: 'Website' },
];

export function Footer() {
  const { isDark } = useTheme();
  const year = new Date().getFullYear();

  return (
    <footer className="relative">
      {/* Gold top border */}
      <div
        className="h-px w-full"
        style={{ background: 'linear-gradient(90deg, transparent 0%, #C9A84C 25%, #E8C97A 50%, #C9A84C 75%, transparent 100%)' }}
      />

      {/* Main footer body */}
      <div style={{ background: 'linear-gradient(180deg, #0C1E38 0%, #071020 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Main Grid ── */}
          <div className="py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">

            {/* Brand Column */}
            <div className="sm:col-span-2 lg:col-span-4">
              {/* Logo */}
              <Link to="/" className="inline-flex items-center gap-3 mb-5 group">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 relative overflow-hidden group-hover:scale-105 transition-transform duration-200"
                  style={{ background: 'linear-gradient(135deg, #1B3A6B, #2A5298)' }}
                >
                  <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '0.9rem', color: 'white' }}>CL</span>
                  <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: 'linear-gradient(90deg, #C9A84C, #E8C97A)' }} />
                </div>
                <div>
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1rem', color: 'white', lineHeight: 1.2 }}>
                    Costa Luis & Co
                  </div>
                  <div style={{ color: '#C9A84C', fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', letterSpacing: '0.04em', marginTop: '2px' }}>
                    Chartered Accountants
                  </div>
                </div>
              </Link>

              <p className="text-sm leading-relaxed mb-6" style={{ color: '#94A3B8', fontFamily: 'Inter, sans-serif', maxWidth: '280px', lineHeight: 1.75 }}>
                A trusted name in Audit, Tax & Advisory services in Nairobi, Kenya since 1991. Built on excellence, integrity, and genuine value for money — always.
              </p>

              {/* Tagline badge */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg mb-6"
                style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.15)' }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#C9A84C' }} />
                <span className="text-xs" style={{ color: '#C9A84C', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                  Est. 1991 · Nairobi CBD, Kenya
                </span>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-2">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                    style={{ background: 'rgba(255,255,255,0.05)', color: '#64748B', border: '1px solid rgba(255,255,255,0.05)' }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(201,168,76,0.12)';
                      (e.currentTarget as HTMLAnchorElement).style.color = '#C9A84C';
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(201,168,76,0.2)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.05)';
                      (e.currentTarget as HTMLAnchorElement).style.color = '#64748B';
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.05)';
                    }}
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h4
                className="text-sm mb-5 pb-2"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 600,
                  color: 'white',
                  borderBottom: '1px solid rgba(201,168,76,0.15)',
                }}
              >
                Quick Links
              </h4>
              <ul className="space-y-2.5">
                {quickLinks.map(link => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="flex items-center gap-2 text-xs transition-all group"
                      style={{ color: '#64748B', fontFamily: 'Inter, sans-serif' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#C9A84C'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#64748B'; }}
                    >
                      <ArrowRight size={11} className="transition-transform group-hover:translate-x-0.5 flex-shrink-0" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="lg:col-span-3">
              <h4
                className="text-sm mb-5 pb-2"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 600,
                  color: 'white',
                  borderBottom: '1px solid rgba(201,168,76,0.15)',
                }}
              >
                Our Services
              </h4>
              <ul className="space-y-2.5">
                {services.map(service => (
                  <li key={service.id}>
                    <Link
                      to="/services"
                      className="flex items-center gap-2 text-xs transition-all"
                      style={{ color: '#64748B', fontFamily: 'Inter, sans-serif' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#C9A84C'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#64748B'; }}
                    >
                      <span
                        className="w-1 h-1 rounded-full flex-shrink-0"
                        style={{ background: '#C9A84C', opacity: 0.6 }}
                      />
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-3">
              <h4
                className="text-sm mb-5 pb-2"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 600,
                  color: 'white',
                  borderBottom: '1px solid rgba(201,168,76,0.15)',
                }}
              >
                Contact Us
              </h4>
              <ul className="space-y-4">
                {/* Address */}
                <li>
                  <div className="flex gap-3">
                    <MapPin size={15} className="flex-shrink-0 mt-0.5" style={{ color: '#C9A84C' }} />
                    <div>
                      <p className="text-xs leading-relaxed" style={{ color: '#64748B', fontFamily: 'Inter, sans-serif', lineHeight: 1.65 }}>
                        IPS Building, 5th Floor<br />
                        Kimathi Street<br />
                        Nairobi CBD, Kenya
                      </p>
                      <a
                        href="https://maps.google.com/?q=IPS+Building+Kimathi+Street+Nairobi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs mt-1.5 transition-colors hover:opacity-80"
                        style={{ color: '#C9A84C', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                      >
                        Get Directions <ExternalLink size={10} />
                      </a>
                    </div>
                  </div>
                </li>
                {/* Phone */}
                <li>
                  <div className="flex gap-3">
                    <Phone size={15} className="flex-shrink-0 mt-0.5" style={{ color: '#C9A84C' }} />
                    <div className="space-y-1">
                      <a
                        href="tel:+254202215018"
                        className="block text-xs transition-colors hover:text-[#C9A84C]"
                        style={{ color: '#64748B', fontFamily: 'Inter, sans-serif' }}
                      >
                        +254 (0)20 221 5018
                      </a>
                      <a
                        href="tel:+254202224080"
                        className="block text-xs transition-colors hover:text-[#C9A84C]"
                        style={{ color: '#64748B', fontFamily: 'Inter, sans-serif' }}
                      >
                        +254 (0)20 222 4080
                      </a>
                    </div>
                  </div>
                </li>
                {/* Email */}
                <li>
                  <div className="flex gap-3">
                    <Mail size={15} className="flex-shrink-0 mt-0.5" style={{ color: '#C9A84C' }} />
                    <div className="space-y-1">
                      <a
                        href="mailto:info@costaluisco.co.ke"
                        className="block text-xs transition-colors hover:text-[#C9A84C] break-all"
                        style={{ color: '#64748B', fontFamily: 'Inter, sans-serif' }}
                      >
                        info@costaluisco.co.ke
                      </a>
                      <a
                        href="mailto:orlando@costaluisco.co.ke"
                        className="block text-xs transition-colors hover:text-[#C9A84C] break-all"
                        style={{ color: '#64748B', fontFamily: 'Inter, sans-serif' }}
                      >
                        orlando@costaluisco.co.ke
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* ── Certifications Bar ── */}
          <div
            className="py-4 border-t border-b flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            style={{ borderColor: 'rgba(255,255,255,0.05)' }}
          >
            <div className="flex flex-wrap items-center gap-2">
              <Shield size={14} style={{ color: '#C9A84C' }} />
              <span className="text-xs" style={{ color: '#475569', fontFamily: 'Inter, sans-serif' }}>
                Professional Certifications:
              </span>
              <div className="flex items-center gap-1.5 flex-wrap">
                {certifications.map(cert => (
                  <span
                    key={cert}
                    className="px-2 py-0.5 rounded text-xs"
                    style={{
                      background: 'rgba(201,168,76,0.1)',
                      color: '#C9A84C',
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 700,
                      border: '1px solid rgba(201,168,76,0.18)',
                      fontSize: '0.7rem',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-xs" style={{ color: '#334155', fontFamily: 'Inter, sans-serif', whiteSpace: 'nowrap' }}>
              ICPAK Registered · KASNEB Certified
            </p>
          </div>

          {/* ── Copyright Bar ── */}
          <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs" style={{ color: '#334155', fontFamily: 'Inter, sans-serif' }}>
              © {year} Costa Luis & Co. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-xs" style={{ color: '#334155', fontFamily: 'Inter, sans-serif' }}>
              <span>Orlando da Costa-Luis</span>
              <span style={{ color: '#C9A84C', margin: '0 4px' }}>·</span>
              <span>Nairobi, Kenya</span>
              <span style={{ color: '#C9A84C', margin: '0 4px' }}>·</span>
              <span>Est. 1991</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
