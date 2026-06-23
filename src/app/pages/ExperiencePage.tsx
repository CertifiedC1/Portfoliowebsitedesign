import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { Award, BookOpen, Briefcase, Building, ArrowRight, CheckCircle, ChevronDown } from 'lucide-react';
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

const timeline = [
  {
    period: '1970s–1980s',
    icon: BookOpen,
    type: 'education',
    title: 'Early Education & Training',
    org: 'St. Mary\'s High School, Nairobi',
    details: [
      'Completed secondary education at St. Mary\'s High School, one of Kenya\'s most prestigious institutions',
      'Developed strong analytical and academic foundations',
    ],
  },
  {
    period: '1980s',
    icon: BookOpen,
    type: 'education',
    title: 'Commerce & Economics Degree',
    org: 'The Sydenham College of Commerce and Economics',
    details: [
      'Bachelor\'s degree in Commerce and Economics',
      'Specialized in accounting, finance, and business administration',
      'Graduated with distinction, earning a strong academic record',
    ],
  },
  {
    period: '1980s–Early 1990s',
    icon: Briefcase,
    type: 'career',
    title: 'Foundation Career — Big Four Experience',
    org: 'AF Ferguson & Co (KPMG), Nairobi',
    details: [
      'Joined AF Ferguson & Co, the predecessor to KPMG in Kenya',
      'Gained world-class experience in audit, assurance, and advisory',
      'Served diverse clients across manufacturing, NGOs, and financial services',
      'Developed deep expertise in statutory audit under international standards',
      'Attained professional qualifications including CA, CPA, CS, and CPS designations',
    ],
  },
  {
    period: '1991',
    icon: Building,
    type: 'milestone',
    title: 'Founded Costa Luis & Co',
    org: 'Nairobi CBD, Kenya',
    details: [
      'Established Costa Luis & Co as an independent professional services firm',
      'Set up offices in Nairobi Central Business District',
      'Built the firm on principles of integrity, excellence, and value for money',
    ],
  },
  {
    period: '1991–2000',
    icon: Award,
    type: 'career',
    title: 'Growth & Practice Development',
    org: 'Costa Luis & Co',
    details: [
      'Grew the firm\'s audit practice across multiple industry sectors',
      'Obtained Insolvency Practitioner (IP) license from the Official Receiver\'s Office',
      'Expanded into tax advisory and KRA representation services',
      'Built relationships with international NGOs and donor organizations',
    ],
  },
  {
    period: '2000–2010',
    icon: Award,
    type: 'career',
    title: 'Regional Expansion & Diversification',
    org: 'Costa Luis & Co & Group Companies',
    details: [
      'Expanded services to cover IT Solutions through group companies',
      'Established relationships with multinationals and international organizations',
      'Built a reputation as a trusted tax representative before KRA',
      'Completed numerous complex insolvency and liquidation engagements',
    ],
  },
  {
    period: '2010–Present',
    icon: Award,
    type: 'milestone',
    title: '35+ Years of Continued Excellence',
    org: 'Costa Luis & Co',
    details: [
      'Maintained top-tier professional standards across all service lines',
      'Served 500+ clients including SMEs, NGOs, corporations, and multinationals',
      'Recognized as one of Nairobi\'s most trusted audit and advisory practices',
      'Continued professional development and adherence to global best practices',
    ],
  },
];

const qualifications = [
  {
    code: 'CA',
    title: 'Chartered Accountant',
    body: 'ICPAK / ICAI',
    description: 'The highest professional qualification in accountancy, recognizing expertise in audit, financial reporting, and professional ethics.',
    color: '#1B3A6B',
  },
  {
    code: 'CS',
    title: 'Company Secretary',
    body: 'ICSA / KASNEB',
    description: 'Professional qualification in corporate governance, company law, and secretarial practice.',
    color: '#C9A84C',
  },
  {
    code: 'CPA',
    title: 'Certified Public Accountant',
    body: 'KASNEB / ICPAK',
    description: 'Kenya\'s premier accounting certification, recognized across East Africa and internationally.',
    color: '#1B3A6B',
  },
  {
    code: 'CPS',
    title: 'Certified Public Secretary',
    body: 'KASNEB',
    description: 'Professional qualification in public secretarial practice, governance, and corporate administration.',
    color: '#C9A84C',
  },
  {
    code: 'IP',
    title: 'Insolvency Practitioner',
    body: 'Official Receiver\'s Office',
    description: 'Licensed practitioner authorized to conduct formal insolvency, liquidation, and receivership proceedings in Kenya.',
    color: '#1B3A6B',
  },
];

const typeColors: Record<string, string> = {
  education: '#C9A84C',
  career: '#1B3A6B',
  milestone: '#2A5298',
};

export function ExperiencePage() {
  const { isDark } = useTheme();
  const [expandedMobile, setExpandedMobile] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>Experience &amp; Credentials | Costa Luis &amp; Co — Chartered Accountants</title>
        <meta name="description" content="35+ years of professional experience — from Big Four foundations to building one of Nairobi's most respected independent audit and advisory practices." />
        <meta property="og:title" content="Experience & Credentials | Costa Luis & Co" />
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
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-widest" style={{ color: '#C9A84C', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
            Professional Background
          </span>
          <h1 className="mt-3 mb-5" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.1, color: 'white' }}>
            Experience & Credentials
          </h1>
          <p className="max-w-2xl" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.05rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.75)' }}>
            35+ years of distinguished professional experience — from Big Four foundations to building one of Nairobi's most respected independent practices.
          </p>
        </div>
      </section>

      {/* ─── Professional Qualifications ─── */}
      <section className={`py-16 lg:py-24 ${isDark ? 'bg-[#0A0F1E]' : 'bg-[#F8F9FC]'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-widest" style={{ color: '#C9A84C', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                Certifications
              </span>
              <h2 className="mt-3" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: isDark ? 'white' : '#0F2444', lineHeight: 1.2 }}>
                Professional Qualifications
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {qualifications.map(({ code, title, body, description, color }, i) => (
              <AnimatedSection key={code}>
                <div
                  className="relative p-6 rounded-2xl text-center card-hover h-full flex flex-col"
                  style={{
                    background: isDark ? 'rgba(30,41,59,0.6)' : 'white',
                    border: `2px solid ${color}25`,
                    transitionDelay: `${i * 80}ms`,
                    boxShadow: isDark ? 'none' : '0 2px 12px rgba(0,0,0,0.04)',
                  }}
                >
                  {/* Badge circle */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    style={{ background: `linear-gradient(135deg, ${color}, ${color}99)` }}
                  >
                    <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '1.1rem', color: 'white', letterSpacing: '-1px' }}>{code}</span>
                  </div>
                  <h3 className="mb-1" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: isDark ? 'white' : '#0F2444' }}>
                    {title}
                  </h3>
                  <p className="text-xs mb-3" style={{ color: '#C9A84C', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                    {body}
                  </p>
                  <p className="text-xs flex-1" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.6, color: isDark ? '#94A3B8' : '#6B7280' }}>
                    {description}
                  </p>
                  {/* Bottom accent */}
                  <div className="mt-4 h-0.5 rounded-full mx-auto w-12" style={{ background: `linear-gradient(90deg, ${color}, ${color}44)` }} />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Timeline — Desktop (compact) ─── */}
      <section className={`py-12 lg:py-16 hidden md:block ${isDark ? 'bg-[#0F172A]' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-10">
              <span className="text-xs uppercase tracking-widest" style={{ color: '#C9A84C', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                Career Journey
              </span>
              <h2 className="mt-2" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: isDark ? 'white' : '#0F2444', lineHeight: 1.2 }}>
                Professional Timeline
              </h2>
            </div>
          </AnimatedSection>

          <div className="relative">
            {/* Center line */}
            <div
              className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
              style={{ background: `linear-gradient(180deg, transparent, #C9A84C 10%, #1B3A6B 90%, transparent)` }}
            />

            <div className="space-y-5">
              {timeline.map(({ period, icon: Icon, type, title, org, details }, i) => (
                <AnimatedSection key={i}>
                  <div className={`relative flex items-start gap-6 ${i % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                    {/* Content card */}
                    <div className="flex-1">
                      <div
                        className="p-4 rounded-xl hover:-translate-y-0.5 transition-all cursor-default"
                        style={{
                          background: isDark ? 'rgba(30,41,59,0.6)' : '#F8F9FC',
                          border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)'}`,
                          boxShadow: isDark ? 'none' : '0 1px 8px rgba(0,0,0,0.04)',
                        }}
                      >
                        <div className="flex items-center gap-2 mb-1.5">
                          <span
                            className="px-2 py-0.5 rounded-md text-xs"
                            style={{
                              background: `${typeColors[type]}18`,
                              color: typeColors[type],
                              fontFamily: 'Poppins, sans-serif',
                              fontWeight: 700,
                            }}
                          >
                            {period}
                          </span>
                        </div>
                        <h3 className="mb-0.5" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '0.875rem', color: isDark ? 'white' : '#0F2444' }}>
                          {title}
                        </h3>
                        <p className="text-xs mb-2" style={{ color: '#C9A84C', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                          {org}
                        </p>
                        <div className="space-y-1">
                          {details.slice(0, 2).map((detail, j) => (
                            <div key={j} className="flex items-start gap-1.5">
                              <CheckCircle size={11} style={{ color: '#C9A84C', flexShrink: 0, marginTop: 2 }} />
                              <span className="text-xs" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.5, color: isDark ? '#94A3B8' : '#6B7280' }}>
                                {detail}
                              </span>
                            </div>
                          ))}
                          {details.length > 2 && (
                            <p className="text-xs mt-1" style={{ color: isDark ? '#475569' : '#9CA3AF', fontFamily: 'Inter, sans-serif', fontStyle: 'italic' }}>
                              +{details.length - 2} more details
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Center icon */}
                    <div className="absolute left-1/2 top-4 -translate-x-1/2 z-10">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center shadow-md"
                        style={{ background: `linear-gradient(135deg, ${typeColors[type]}, ${typeColors[type]}88)` }}
                      >
                        <Icon size={13} style={{ color: 'white' }} />
                      </div>
                    </div>

                    {/* Empty spacer */}
                    <div className="flex-1" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Timeline — Mobile Accordion ─── */}
      <section className={`py-12 md:hidden ${isDark ? 'bg-[#0F172A]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest" style={{ color: '#C9A84C', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>Career Journey</span>
            <h2 className="mt-3" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.8rem', color: isDark ? 'white' : '#0F2444', lineHeight: 1.2 }}>
              Professional Timeline
            </h2>
          </div>

          <div className="relative pl-6">
            {/* Left line */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5" style={{ background: 'linear-gradient(180deg, transparent, #C9A84C 5%, #1B3A6B 95%, transparent)', marginLeft: '10px' }} />

            <div className="space-y-4">
              {timeline.map(({ period, icon: Icon, type, title, org, details }, i) => (
                <div key={i} className="relative">
                  {/* Dot */}
                  <div
                    className="absolute -left-6 top-4 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg, ${typeColors[type]}, ${typeColors[type]}88)`, marginLeft: '-2px' }}
                  >
                    <Icon size={10} style={{ color: 'white' }} />
                  </div>

                  <div
                    className="rounded-2xl overflow-hidden"
                    style={{
                      background: isDark ? 'rgba(30,41,59,0.5)' : '#F8F9FC',
                      border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)'}`,
                    }}
                  >
                    <button
                      className="w-full text-left p-4"
                      onClick={() => setExpandedMobile(expandedMobile === i ? null : i)}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex-1">
                          <span className="text-xs" style={{ color: typeColors[type], fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>{period}</span>
                          <p className="text-sm mt-0.5" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, color: isDark ? 'white' : '#0F2444' }}>{title}</p>
                          <p className="text-xs mt-0.5" style={{ color: '#C9A84C', fontFamily: 'Inter, sans-serif' }}>{org}</p>
                        </div>
                        <ChevronDown
                          size={16}
                          style={{
                            color: isDark ? '#64748B' : '#9CA3AF',
                            flexShrink: 0,
                            transform: expandedMobile === i ? 'rotate(180deg)' : 'none',
                            transition: 'transform 0.2s',
                          }}
                        />
                      </div>
                    </button>
                    {expandedMobile === i && (
                      <div className="px-4 pb-4">
                        <div className="pt-3 border-t space-y-2" style={{ borderColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }}>
                          {details.map((d, j) => (
                            <div key={j} className="flex items-start gap-2">
                              <CheckCircle size={12} style={{ color: '#C9A84C', flexShrink: 0, marginTop: 2 }} />
                              <span className="text-xs" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.6, color: isDark ? '#94A3B8' : '#6B7280' }}>{d}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Education Section ─── */}
      <section className={`py-16 lg:py-20 ${isDark ? 'bg-[#0A0F1E]' : 'bg-[#F8F9FC]'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-widest" style={{ color: '#C9A84C', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                Academic Background
              </span>
              <h2 className="mt-3" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: isDark ? 'white' : '#0F2444', lineHeight: 1.2 }}>
                Education
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                institution: "St. Mary's High School",
                location: 'Nairobi, Kenya',
                level: 'Secondary Education',
                description: 'Completed secondary education at one of Kenya\'s most prestigious institutions, building strong analytical foundations.',
                icon: BookOpen,
              },
              {
                institution: 'Sydenham College of Commerce & Economics',
                location: 'Mumbai / Kenya',
                level: 'Higher Education',
                description: 'Studied Commerce and Economics, specializing in accounting, finance, and business administration. Graduated with distinction.',
                icon: Award,
              },
              {
                institution: 'AF Ferguson & Co (KPMG)',
                location: 'Nairobi, Kenya',
                level: 'Professional Training',
                description: 'Gained world-class practical training at one of the world\'s leading professional services firms — the cornerstone of a stellar career.',
                icon: Briefcase,
              },
            ].map(({ institution, location, level, description, icon: Icon }, i) => (
              <AnimatedSection key={institution}>
                <div
                  className="p-7 rounded-2xl h-full card-hover"
                  style={{
                    background: isDark ? 'rgba(30,41,59,0.5)' : 'white',
                    border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)'}`,
                    boxShadow: isDark ? 'none' : '0 2px 12px rgba(0,0,0,0.04)',
                    transitionDelay: `${i * 80}ms`,
                  }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: 'linear-gradient(135deg, rgba(27,58,107,0.12), rgba(27,58,107,0.05))' }}>
                    <Icon size={22} style={{ color: '#1B3A6B' }} />
                  </div>
                  <span className="text-xs px-2 py-1 rounded-md mb-3 inline-block" style={{ background: 'rgba(201,168,76,0.12)', color: '#C9A84C', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                    {level}
                  </span>
                  <h3 className="mb-1" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1rem', color: isDark ? 'white' : '#0F2444' }}>
                    {institution}
                  </h3>
                  <p className="text-xs mb-3" style={{ color: '#C9A84C', fontFamily: 'Inter, sans-serif' }}>{location}</p>
                  <p className="text-sm" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7, color: isDark ? '#94A3B8' : '#6B7280' }}>
                    {description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className={`py-16 ${isDark ? 'bg-[#0F172A]' : 'bg-white'}`}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: isDark ? 'white' : '#0F2444' }}>
              Benefit from 35+ Years of Expertise
            </h2>
            <p className="mb-8" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.7, color: isDark ? '#94A3B8' : '#6B7280' }}>
              Put Orlando's extensive experience to work for your organization.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-sm transition-all hover:-translate-y-1"
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
