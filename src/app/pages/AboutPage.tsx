import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Award, Shield, Users, TrendingUp, ArrowRight, Star, Heart, Globe, Lock } from 'lucide-react';
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

const coreValues = [
  { icon: Shield, title: 'Integrity', desc: 'We maintain the highest ethical standards in everything we do. Our clients trust us with their most sensitive financial matters, and we honor that trust absolutely.', color: '#1B3A6B' },
  { icon: Star, title: 'Excellence', desc: 'We are committed to delivering the highest quality professional services, constantly improving our skills, knowledge, and methodologies.', color: '#C9A84C' },
  { icon: Heart, title: 'Client-First', desc: 'Our clients\' success is our success. We provide personalized attention and tailor our services to each client\'s unique needs and circumstances.', color: '#1B3A6B' },
  { icon: Globe, title: 'Value for Money', desc: 'We believe premium professional services should be accessible and affordable. Our pricing reflects genuine value delivered, not just hours billed.', color: '#C9A84C' },
];

const milestones = [
  { year: '1991', event: 'Costa Luis & Co established in Nairobi CBD' },
  { year: '1995', event: 'Registered as a licensed Insolvency Practitioner' },
  { year: '2000', event: 'Expanded services to include IT Solutions through group companies' },
  { year: '2005', event: 'Recognized as a leading tax advisory firm in Nairobi' },
  { year: '2010', event: 'Celebrating 20 years of excellence in professional services' },
  { year: '2015', event: 'Expanded client base to international organizations and donors' },
  { year: '2024', event: '35+ years of trusted service — still growing, still excelling' },
];

const qualifications = [
  { code: 'CA', title: 'Chartered Accountant', body: 'ICPAK / ICAI' },
  { code: 'CS', title: 'Company Secretary', body: 'ICSA / KASNEB' },
  { code: 'CPA', title: 'Certified Public Accountant', body: 'KASNEB / ICPAK' },
  { code: 'CPS', title: 'Certified Public Secretary', body: 'KASNEB' },
  { code: 'IP', title: 'Insolvency Practitioner', body: "Official Receiver's Office" },
];

export function AboutPage() {
  const { isDark } = useTheme();

  return (
    <>
      <Helmet>
        <title>About Us | Costa Luis &amp; Co — Chartered Accountants</title>
        <meta name="description" content="Learn about Costa Luis & Co and Orlando da Costa-Luis — 35+ years of audit, tax and advisory excellence in Nairobi, Kenya." />
        <meta property="og:title" content="About Costa Luis & Co" />
        <meta property="og:description" content="35+ years of professional excellence in audit, tax, and advisory services in Nairobi, Kenya." />
        <meta property="og:image" content="/og-image.svg" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Helmet>

      <div className={isDark ? 'bg-[#0F172A]' : 'bg-white'}>
        {/* ─── Hero Banner ─── */}
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
              About Us
            </span>
            <h1 className="mt-3 mb-5" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.1, color: 'white' }}>
              Our Story & Vision
            </h1>
            <p className="max-w-2xl" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.05rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.75)' }}>
              Over three decades of professional excellence, built on trust, integrity, and an uncompromising commitment to client success.
            </p>
          </div>
        </section>

        {/* ─── Professional Bio — No portrait, full-width ─── */}
        <section className={`py-20 lg:py-28 ${isDark ? 'bg-[#0F172A]' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
              {/* Left — bio text */}
              <div className="lg:col-span-2">
                <AnimatedSection>
                  <div className="gold-underline mb-2">
                    <span className="text-xs uppercase tracking-widest" style={{ color: '#C9A84C', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                      Managing Partner
                    </span>
                  </div>
                  <h2 className="mt-4 mb-2" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', lineHeight: 1.2, color: isDark ? 'white' : '#0F2444' }}>
                    Orlando da Costa-Luis
                  </h2>
                  <p className="mb-6 text-sm" style={{ color: '#C9A84C', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                    CA · CS · CPA · CPS · Insolvency Practitioner
                  </p>

                  <div className="space-y-4 mb-8">
                    {[
                      'Orlando da Costa-Luis is a distinguished Chartered Accountant with over 35 years of professional experience spanning audit, taxation, advisory, company secretarial, and insolvency practice.',
                      'His early career with AF Ferguson & Co (now KPMG) provided him with a world-class foundation in professional services. This experience, combined with his deep understanding of the Kenyan business environment, makes him one of the most respected practitioners in East Africa.',
                      'Orlando holds multiple professional qualifications including Chartered Accountant (CA), Company Secretary (CS), Certified Public Accountant (CPA), Certified Public Secretary (CPS), and is a Licensed Insolvency Practitioner (IP).',
                      'He studied at The Sydenham College of Commerce and Economics before embarking on his distinguished professional career, and he continues to invest in professional development to stay at the forefront of his field.',
                    ].map((para, i) => (
                      <p key={i} style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', lineHeight: 1.8, color: isDark ? '#94A3B8' : '#4B5563' }}>
                        {para}
                      </p>
                    ))}
                  </div>

                  {/* Key achievements */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {[
                      '35+ years of active professional practice',
                      'Licensed Insolvency Practitioner (IP)',
                      'Former AF Ferguson & Co (KPMG) experience',
                      '500+ clients served across East Africa',
                      'Expert in IFRS, ISA & Kenyan tax law',
                      'Trained at Sydenham College of Commerce',
                    ].map(point => (
                      <div key={point} className="flex items-start gap-2 group">
                        <CheckCircle size={15} style={{ color: '#C9A84C', flexShrink: 0, marginTop: 2 }} className="transition-transform group-hover:scale-110" />
                        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: isDark ? '#CBD5E1' : '#374151', lineHeight: 1.5 }}>{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Security note */}
                  <div
                    className="flex items-start gap-3 p-4 rounded-xl mb-8"
                    style={{
                      background: isDark ? 'rgba(201,168,76,0.05)' : 'rgba(27,58,107,0.04)',
                      border: `1px solid ${isDark ? 'rgba(201,168,76,0.12)' : 'rgba(27,58,107,0.08)'}`,
                    }}
                  >
                    <Lock size={15} style={{ color: '#C9A84C', flexShrink: 0, marginTop: 1 }} />
                    <p className="text-xs" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.6, color: isDark ? '#94A3B8' : '#6B7280' }}>
                      All engagements are governed by the ICPAK Code of Ethics. Client information is held in strict professional confidence.
                    </p>
                  </div>

                  <Link
                    to="/experience"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
                    style={{
                      background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
                      color: '#0F2444',
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 700,
                    }}
                  >
                    View Full Credentials
                    <ArrowRight size={16} />
                  </Link>
                </AnimatedSection>
              </div>

              {/* Right — credentials card */}
              <AnimatedSection>
                <div className="space-y-4 lg:sticky lg:top-28">
                  {/* Credential badges */}
                  <div
                    className="p-6 rounded-2xl"
                    style={{
                      background: 'linear-gradient(135deg, #0F2444, #1B3A6B)',
                      boxShadow: '0 16px 48px rgba(15,36,68,0.4)',
                    }}
                  >
                    <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#C9A84C', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                      Professional Qualifications
                    </p>
                    <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-3 gap-3">
                      {qualifications.map(({ code, title, body }) => (
                        <div
                          key={code}
                          className="group flex flex-col items-center text-center p-3 rounded-xl transition-all hover:-translate-y-1 cursor-default"
                          style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(201,168,76,0.15)' }}
                          title={`${title} — ${body}`}
                        >
                          <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, color: '#C9A84C', fontSize: '1rem' }}>{code}</span>
                          <span className="text-xs mt-1 leading-tight text-center" style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'Inter, sans-serif', fontSize: '0.6rem' }}>{body}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  {[
                    { value: '35+', label: 'Years Experience', icon: Award },
                    { value: '500+', label: 'Clients Served', icon: Users },
                    { value: '1991', label: 'Year Founded', icon: TrendingUp },
                  ].map(({ value, label, icon: Icon }) => (
                    <div
                      key={label}
                      className="flex items-center gap-4 p-4 rounded-xl group hover:-translate-y-0.5 transition-all cursor-default"
                      style={{
                        background: isDark ? 'rgba(30,41,59,0.6)' : '#F8F9FC',
                        border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)'}`,
                      }}
                    >
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110" style={{ background: 'rgba(201,168,76,0.12)' }}>
                        <Icon size={18} style={{ color: '#C9A84C' }} />
                      </div>
                      <div>
                        <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '1.3rem', color: isDark ? 'white' : '#0F2444' }}>{value}</div>
                        <div className="text-xs" style={{ color: isDark ? '#64748B' : '#9CA3AF', fontFamily: 'Inter, sans-serif' }}>{label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ─── Firm History & Timeline ─── */}
        <section className={`py-20 lg:py-28 ${isDark ? 'bg-[#0A0F1E]' : 'bg-[#F8F9FC]'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-14">
                <span className="text-xs uppercase tracking-widest" style={{ color: '#C9A84C', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>Our Journey</span>
                <h2 className="mt-3" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: isDark ? 'white' : '#0F2444', lineHeight: 1.2 }}>
                  A History of Excellence Since 1991
                </h2>
              </div>
            </AnimatedSection>

            {/* Timeline */}
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px" style={{ background: 'linear-gradient(180deg, transparent, #C9A84C, #1B3A6B, transparent)', transform: 'translateX(-50%)' }} />

              <div className="space-y-8">
                {milestones.map(({ year, event }, i) => (
                  <AnimatedSection key={year}>
                    <div className={`flex items-center gap-6 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                      <div className={`flex-1 pl-14 lg:pl-0 ${i % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                        <div
                          className="inline-block p-5 rounded-2xl transition-all hover:-translate-y-0.5 hover:shadow-md cursor-default"
                          style={{
                            background: isDark ? 'rgba(30,41,59,0.6)' : 'white',
                            border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
                            boxShadow: isDark ? 'none' : '0 2px 12px rgba(0,0,0,0.04)',
                          }}
                        >
                          <span className="text-sm" style={{ color: '#C9A84C', fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>{year}</span>
                          <p className="mt-1 text-sm" style={{ color: isDark ? '#CBD5E1' : '#374151', fontFamily: 'Inter, sans-serif', lineHeight: 1.5 }}>{event}</p>
                        </div>
                      </div>

                      <div className="absolute left-6 lg:relative lg:left-auto lg:flex-shrink-0">
                        <div className="w-3 h-3 rounded-full border-2" style={{ borderColor: '#C9A84C', background: isDark ? '#0F172A' : 'white' }} />
                      </div>

                      <div className="hidden lg:block flex-1" />
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Core Values ─── */}
        <section className={`py-20 lg:py-28 ${isDark ? 'bg-[#0F172A]' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-14">
                <span className="text-xs uppercase tracking-widest" style={{ color: '#C9A84C', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>Our Foundation</span>
                <h2 className="mt-3" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: isDark ? 'white' : '#0F2444', lineHeight: 1.2 }}>
                  Core Values
                </h2>
              </div>
            </AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {coreValues.map(({ icon: Icon, title, desc, color }) => (
                <AnimatedSection key={title}>
                  <div
                    className="flex gap-5 p-7 rounded-2xl card-hover group cursor-default"
                    style={{
                      background: isDark ? 'rgba(30,41,59,0.5)' : 'rgba(248,249,252,1)',
                      border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)'}`,
                    }}
                  >
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110" style={{ background: `${color}18` }}>
                      <Icon size={24} style={{ color }} />
                    </div>
                    <div>
                      <h3 className="mb-2" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.05rem', color: isDark ? 'white' : '#0F2444' }}>
                        {title}
                      </h3>
                      <p className="text-sm" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7, color: isDark ? '#94A3B8' : '#6B7280' }}>
                        {desc}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Mission & Vision ─── */}
        <section className={`py-20 lg:py-28 ${isDark ? 'bg-[#0A0F1E]' : 'bg-[#F8F9FC]'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <AnimatedSection>
                <div
                  className="p-8 lg:p-10 rounded-3xl h-full relative overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, #0F2444, #1B3A6B)' }}
                >
                  <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10" style={{ background: '#C9A84C', transform: 'translate(50%, -50%)' }} />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'rgba(201,168,76,0.15)' }}>
                      <TrendingUp size={24} style={{ color: '#C9A84C' }} />
                    </div>
                    <h3 className="mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.4rem', color: 'white' }}>
                      Our Mission
                    </h3>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.8)' }}>
                      To deliver world-class audit, tax, advisory, and insolvency services with unwavering integrity, professional excellence, and genuine value — empowering our clients to achieve their financial and business objectives with confidence.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection>
                <div
                  className="p-8 lg:p-10 rounded-3xl h-full relative overflow-hidden"
                  style={{
                    background: isDark ? 'rgba(30,41,59,0.6)' : 'white',
                    border: `1px solid ${isDark ? 'rgba(201,168,76,0.15)' : 'rgba(201,168,76,0.2)'}`,
                  }}
                >
                  <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-5" style={{ background: '#1B3A6B', transform: 'translate(50%, -50%)' }} />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'rgba(201,168,76,0.12)' }}>
                      <Globe size={24} style={{ color: '#C9A84C' }} />
                    </div>
                    <h3 className="mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.4rem', color: isDark ? 'white' : '#0F2444' }}>
                      Our Vision
                    </h3>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.8, color: isDark ? '#94A3B8' : '#4B5563' }}>
                      To be the most trusted professional services firm in East Africa — recognized for our integrity, the depth of our expertise, and our genuine commitment to the success of every client we serve.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className={`py-16 ${isDark ? 'bg-[#0F172A]' : 'bg-white'}`}>
          <div className="max-w-3xl mx-auto px-4 text-center">
            <AnimatedSection>
              <h2 className="mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: isDark ? 'white' : '#0F2444' }}>
                Work with a Team You Can Trust
              </h2>
              <p className="mb-8" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.7, color: isDark ? '#94A3B8' : '#6B7280' }}>
                35+ years of trusted professional excellence, always at your service.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{
                  background: 'linear-gradient(135deg, #1B3A6B, #2A5298)',
                  color: 'white',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  boxShadow: '0 8px 24px rgba(27,58,107,0.3)',
                }}
              >
                Get in Touch
                <ArrowRight size={16} />
              </Link>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </>
  );
}
