import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Clock, Linkedin, Twitter, Facebook, Shield, CheckCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

function useIntersection(ref: React.RefObject<Element | null>) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return isVisible;
}

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersection(ref);
  return (
    <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}>
      {children}
    </div>
  );
}

const contactDetails = [
  {
    icon: Phone,
    title: 'Phone Numbers',
    color: '#1B3A6B',
    items: [
      { label: '+254 (0)20 221 5018', href: 'tel:+254202215018', sublabel: 'Main Office Line' },
      { label: '+254 (0)20 222 4080', href: 'tel:+254202224080', sublabel: 'Secondary Line' },
      { label: '+254 722 123 456', href: 'tel:+254722123456', sublabel: 'Mobile' },
    ],
  },
  {
    icon: Mail,
    title: 'Email Addresses',
    color: '#C9A84C',
    items: [
      { label: 'info@costaluisco.co.ke', href: 'mailto:info@costaluisco.co.ke', sublabel: 'General Enquiries' },
      { label: 'orlando@costaluisco.co.ke', href: 'mailto:orlando@costaluisco.co.ke', sublabel: 'Managing Partner' },
    ],
  },
  {
    icon: MapPin,
    title: 'Office Address',
    color: '#1B3A6B',
    items: [
      { label: 'IPS Building, 5th Floor', href: 'https://maps.google.com/?q=IPS+Building+Kimathi+Street+Nairobi', sublabel: 'Kimathi Street' },
      { label: 'Nairobi Central Business District', href: 'https://maps.google.com/?q=IPS+Building+Kimathi+Street+Nairobi', sublabel: 'Nairobi, Kenya' },
    ],
  },
  {
    icon: Clock,
    title: 'Office Hours',
    color: '#C9A84C',
    items: [
      { label: 'Mon – Fri: 8:00 AM – 5:30 PM', href: null, sublabel: 'Regular business hours' },
      { label: 'Saturday: 9:00 AM – 1:00 PM', href: null, sublabel: 'Half day' },
      { label: 'Sunday & Public Holidays: Closed', href: null, sublabel: '' },
    ],
  },
];

export function ContactPage() {
  const { isDark } = useTheme();

  return (
    <>
      <Helmet>
        <title>Contact Us | Costa Luis &amp; Co — Chartered Accountants</title>
        <meta name="description" content="Contact Costa Luis & Co — IPS Building, Kimathi Street, Nairobi CBD. Call +254 20 221 5018 or email info@costaluisco.co.ke." />
        <meta property="og:title" content="Contact Costa Luis & Co" />
        <meta property="og:description" content="Reach out to Costa Luis & Co in Nairobi, Kenya. We respond within 24 hours." />
        <meta property="og:image" content="/og-image.svg" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Helmet>

      <div className={isDark ? 'bg-[#0F172A]' : 'bg-white'}>
        {/* ─── Hero ─── */}
        <section
          className="relative pt-32 pb-20 overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #0F2444 0%, #1B3A6B 100%)' }}
        >
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `linear-gradient(rgba(201,168,76,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.4) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }} />
          <div className="absolute left-0 top-1/4 bottom-1/4 w-1 rounded-r-full" style={{ background: 'linear-gradient(180deg, transparent, #C9A84C, transparent)' }} />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs uppercase tracking-widest" style={{ color: '#C9A84C', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
              Get in Touch
            </span>
            <h1 className="mt-3 mb-5" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.1, color: 'white' }}>
              Contact Us
            </h1>
            <p className="max-w-2xl" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.05rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.75)' }}>
              We'd love to hear from you. Reach out via phone, email, or visit our Nairobi office — we respond within 24 hours.
            </p>
          </div>
        </section>

        {/* ─── Quick Action Buttons ─── */}
        <section className={`py-8 border-b ${isDark ? 'bg-[#0A0F1E] border-white/5' : 'bg-[#F8F9FC] border-gray-100'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { icon: Phone, label: 'Call Us Now', value: '+254 (0)20 221 5018', href: 'tel:+254202215018', color: '#1B3A6B' },
                { icon: Mail, label: 'Email Us', value: 'info@costaluisco.co.ke', href: 'mailto:info@costaluisco.co.ke', color: '#C9A84C' },
                { icon: MapPin, label: 'Visit Our Office', value: 'IPS Building, Kimathi St, Nairobi', href: 'https://maps.google.com/?q=IPS+Building+Kimathi+Street+Nairobi', color: '#1B3A6B' },
              ].map(({ icon: Icon, label, value, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 rounded-2xl transition-all hover:-translate-y-0.5 hover:shadow-md group"
                  style={{
                    background: isDark ? 'rgba(30,41,59,0.6)' : 'white',
                    border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)'}`,
                  }}
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110" style={{ background: `${color}18` }}>
                    <Icon size={20} style={{ color }} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs" style={{ color: '#C9A84C', fontFamily: 'Inter, sans-serif', fontWeight: 600, marginBottom: '1px' }}>{label}</p>
                    <p className="text-sm truncate" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, color: isDark ? '#CBD5E1' : '#374151' }}>{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Main Contact Info ─── */}
        <section className={`py-16 lg:py-24 ${isDark ? 'bg-[#0F172A]' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-14">
                <span className="text-xs uppercase tracking-widest" style={{ color: '#C9A84C', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                  How to Reach Us
                </span>
                <h2 className="mt-3" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: isDark ? 'white' : '#0F2444', lineHeight: 1.2 }}>
                  Contact Information
                </h2>
                <p className="mt-4 max-w-xl mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.7, color: isDark ? '#94A3B8' : '#6B7280' }}>
                  Multiple ways to connect with our Nairobi office. All consultations are strictly confidential.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {contactDetails.map(({ icon: Icon, title, color, items }) => (
                <AnimatedSection key={title}>
                  <div
                    className="p-6 rounded-2xl h-full group hover:-translate-y-1 transition-all cursor-default"
                    style={{
                      background: isDark ? 'rgba(30,41,59,0.5)' : '#F8F9FC',
                      border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)'}`,
                    }}
                  >
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110" style={{ background: `${color}18` }}>
                      <Icon size={20} style={{ color }} />
                    </div>
                    <h3 className="mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: isDark ? 'white' : '#0F2444' }}>
                      {title}
                    </h3>
                    <div className="space-y-3">
                      {items.map(({ label, href, sublabel }) =>
                        href ? (
                          <a
                            key={label}
                            href={href}
                            target={href.startsWith('http') ? '_blank' : undefined}
                            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="block transition-colors hover:text-[#C9A84C] group/link"
                          >
                            <span className="block text-sm" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, color: isDark ? '#CBD5E1' : '#374151' }}>
                              {label}
                            </span>
                            {sublabel && (
                              <span className="text-xs" style={{ color: isDark ? '#64748B' : '#9CA3AF', fontFamily: 'Inter, sans-serif' }}>
                                {sublabel}
                              </span>
                            )}
                          </a>
                        ) : (
                          <div key={label}>
                            <span className="block text-sm" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, color: isDark ? '#CBD5E1' : '#374151' }}>
                              {label}
                            </span>
                            {sublabel && (
                              <span className="text-xs" style={{ color: isDark ? '#64748B' : '#9CA3AF', fontFamily: 'Inter, sans-serif' }}>
                                {sublabel}
                              </span>
                            )}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Social links + security note */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Connect */}
              <AnimatedSection>
                <div
                  className="p-6 rounded-2xl"
                  style={{
                    background: isDark ? 'rgba(30,41,59,0.5)' : '#F8F9FC',
                    border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)'}`,
                  }}
                >
                  <h3 className="mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: isDark ? 'white' : '#0F2444' }}>
                    Connect With Us
                  </h3>
                  <div className="flex gap-3">
                    {[
                      { icon: Linkedin, href: '#', label: 'LinkedIn' },
                      { icon: Twitter, href: '#', label: 'Twitter' },
                      { icon: Facebook, href: '#', label: 'Facebook' },
                    ].map(({ icon: Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        aria-label={label}
                        className="w-11 h-11 rounded-xl flex items-center justify-center transition-all hover:-translate-y-1 hover:shadow-md group"
                        style={{
                          background: isDark ? 'rgba(255,255,255,0.06)' : 'white',
                          color: isDark ? '#94A3B8' : '#6B7280',
                          border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'}`,
                        }}
                      >
                        <Icon size={16} className="transition-colors group-hover:text-[#C9A84C]" />
                      </a>
                    ))}
                  </div>
                  <p className="mt-4 text-sm" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7, color: isDark ? '#94A3B8' : '#6B7280' }}>
                    Follow us for updates on regulatory changes, tax advisories, and professional insights from our team.
                  </p>
                </div>
              </AnimatedSection>

              {/* Security / confidentiality */}
              <AnimatedSection>
                <div
                  className="p-6 rounded-2xl h-full"
                  style={{
                    background: 'linear-gradient(135deg, #0F2444, #1B3A6B)',
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(201,168,76,0.15)' }}>
                      <Shield size={18} style={{ color: '#C9A84C' }} />
                    </div>
                    <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: 'white' }}>
                      Confidentiality Assured
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {[
                      'All client information is protected by professional privilege',
                      'We adhere to ICPAK Code of Ethics and confidentiality rules',
                      'Your enquiry is handled with the utmost discretion',
                      'Secure communication channels for sensitive matters',
                    ].map(item => (
                      <div key={item} className="flex items-start gap-2">
                        <CheckCircle size={13} style={{ color: '#C9A84C', flexShrink: 0, marginTop: 2 }} />
                        <span className="text-xs" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.6, color: 'rgba(255,255,255,0.75)' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ─── Map ─── */}
        <section className={`py-12 ${isDark ? 'bg-[#0A0F1E]' : 'bg-[#F8F9FC]'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="rounded-3xl overflow-hidden relative" style={{ height: '420px' }}>
                <iframe
                  title="Costa Luis & Co Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.817850219168!2d36.8196!3d-1.2832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d617596cb3%3A0x9f0c1ea8d1c4e97c!2sIPS%20Building%2C%20Kimathi%20St%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske"
                  width="100%"
                  height="420"
                  style={{ border: 0, borderRadius: '1.5rem', filter: isDark ? 'invert(0.9) hue-rotate(180deg)' : 'none' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                {/* Overlay info card */}
                <div
                  className="absolute top-4 left-4 p-4 rounded-xl shadow-lg"
                  style={{
                    background: isDark ? 'rgba(15,23,42,0.92)' : 'rgba(255,255,255,0.95)',
                    backdropFilter: 'blur(8px)',
                    border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #0F2444, #1B3A6B)' }}>
                      <span style={{ fontSize: '8px', fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#C9A84C' }}>CL</span>
                    </div>
                    <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '0.85rem', color: isDark ? 'white' : '#0F2444' }}>Costa Luis & Co</span>
                  </div>
                  <p className="text-xs" style={{ fontFamily: 'Inter, sans-serif', color: isDark ? '#94A3B8' : '#6B7280' }}>IPS Building, 5th Floor</p>
                  <p className="text-xs" style={{ fontFamily: 'Inter, sans-serif', color: isDark ? '#94A3B8' : '#6B7280' }}>Kimathi Street, Nairobi CBD</p>
                  <a
                    href="https://maps.google.com/?q=IPS+Building+Kimathi+Street+Nairobi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-xs transition-colors hover:opacity-80"
                    style={{ color: '#C9A84C', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </>
  );
}
