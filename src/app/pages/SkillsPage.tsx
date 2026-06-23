import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Building, Globe, Users, TrendingUp, Shield, FileText, Cpu, Scale, Briefcase, BarChart2, CheckCircle, MessageSquare } from 'lucide-react';
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

interface SkillBarProps {
  label: string;
  level: number;
  color?: string;
  isVisible: boolean;
  delay?: number;
}

function SkillBar({ label, level, color = '#1B3A6B', isVisible, delay = 0 }: SkillBarProps) {
  const { isDark } = useTheme();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setWidth(level), delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, level, delay]);

  return (
    <div className="mb-4 group">
      <div className="flex items-center mb-1.5">
        <span className="text-sm" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, color: isDark ? '#CBD5E1' : '#374151' }}>{label}</span>
      </div>
      <div className="h-2 rounded-full overflow-hidden" style={{ background: isDark ? 'rgba(255,255,255,0.08)' : '#E5E7EB' }}>
        <div
          className="h-full rounded-full transition-all duration-1000"
          style={{
            width: `${width}%`,
            background: `linear-gradient(90deg, ${color}, ${color}88)`,
          }}
        />
      </div>
    </div>
  );
}

const skillCategories = [
  {
    title: 'Audit & Assurance',
    icon: FileText,
    skills: [
      { label: 'Statutory Audit (IFRS / ISA)', level: 98 },
      { label: 'Internal Audit & Controls', level: 96 },
      { label: 'Forensic Audit', level: 85 },
      { label: 'NGO & Donor Audits', level: 95 },
      { label: 'Risk-Based Auditing', level: 94 },
    ],
  },
  {
    title: 'Tax & Fiscal Advisory',
    icon: Scale,
    skills: [
      { label: 'Corporate Income Tax', level: 97 },
      { label: 'KRA Representation', level: 96 },
      { label: 'VAT Advisory', level: 95 },
      { label: 'Tax Due Diligence', level: 90 },
      { label: 'Transfer Pricing', level: 85 },
    ],
  },
  {
    title: 'Corporate & Secretarial',
    icon: Building,
    skills: [
      { label: 'Company Secretarial Practice', level: 97 },
      { label: 'Corporate Governance', level: 95 },
      { label: 'Regulatory Compliance', level: 96 },
      { label: 'Board Advisory', level: 90 },
      { label: 'M&A Due Diligence', level: 85 },
    ],
  },
  {
    title: 'Insolvency & Restructuring',
    icon: TrendingUp,
    skills: [
      { label: 'Formal Insolvency Practice', level: 95 },
      { label: 'Debt Restructuring', level: 93 },
      { label: 'Receivership Management', level: 92 },
      { label: 'Turnaround Advisory', level: 88 },
      { label: 'Creditor Negotiations', level: 91 },
    ],
  },
];

const industries = [
  { icon: Building, label: 'Manufacturing', desc: 'End-to-end audit and compliance for manufacturing companies' },
  { icon: Globe, label: 'NGOs & INGOs', desc: 'Donor-funded project audits and governance advisory' },
  { icon: TrendingUp, label: 'Financial Services', desc: 'Banks, SACCOs, microfinance, and insurance audits' },
  { icon: Users, label: 'Corporates', desc: 'Listed and unlisted company audit and advisory' },
  { icon: Shield, label: 'Government Projects', desc: 'Public sector audits and compliance reviews' },
  { icon: Briefcase, label: 'SMEs', desc: 'Tailored professional services for growing businesses' },
  { icon: Cpu, label: 'Technology', desc: 'Tech startup audits and IT governance advisory' },
  { icon: BarChart2, label: 'Donor Organizations', desc: 'Bilateral and multilateral donor-required audits' },
  { icon: Scale, label: 'Legal & Professional', desc: 'Audit and tax for law firms and professional services' },
  { icon: FileText, label: 'Real Estate', desc: 'Property company audits and tax advisory' },
  { icon: Globe, label: 'Multinationals', desc: 'Group audit coordination and transfer pricing' },
  { icon: Building, label: 'Hospitality', desc: 'Hotels, restaurants, and tourism sector audits' },
];

const languages = [
  {
    language: 'English',
    level: 'Native / Professional Fluency',
    description: 'Full professional proficiency. All audit reports, tax submissions, legal documents, and client correspondence conducted in English.',
    icon: '🇬🇧',
  },
  {
    language: 'Swahili',
    level: 'Professional Fluency',
    description: 'Strong command of Swahili, enabling effective communication with local clients, government offices, and KRA engagements across Kenya.',
    icon: '🇰🇪',
  },
  {
    language: 'Portuguese',
    level: 'Conversational',
    description: 'Conversational proficiency, useful for engagement with Portuguese-speaking clients and certain international organizations operating in East Africa.',
    icon: '🇵🇹',
  },
];

export function SkillsPage() {
  const { isDark } = useTheme();
  const skillsRef = useRef<HTMLDivElement>(null);
  const skillsVisible = useIntersection(skillsRef);

  return (
    <>
      <Helmet>
        <title>Skills &amp; Industries | Costa Luis &amp; Co — Chartered Accountants</title>
        <meta name="description" content="Professional skills, industry expertise, and language capabilities of Costa Luis & Co — 35+ years across audit, tax, insolvency, and advisory sectors." />
        <meta property="og:title" content="Skills & Industries | Costa Luis & Co" />
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
              Expertise & Reach
            </span>
            <h1 className="mt-3 mb-5" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.1, color: 'white' }}>
              Skills & Industries
            </h1>
            <p className="max-w-2xl" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.05rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.75)' }}>
              Deep expertise across multiple professional disciplines and industry sectors, refined over 35+ years of active practice.
            </p>
          </div>
        </section>

        {/* ─── Skill Categories ─── */}
        <section className={`py-16 lg:py-24 ${isDark ? 'bg-[#0F172A]' : 'bg-white'}`} ref={skillsRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-14">
                <span className="text-xs uppercase tracking-widest" style={{ color: '#C9A84C', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                  Core Competencies
                </span>
                <h2 className="mt-3" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: isDark ? 'white' : '#0F2444', lineHeight: 1.2 }}>
                  Professional Skill Proficiency
                </h2>
                <p className="mt-4 max-w-xl mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.7, color: isDark ? '#94A3B8' : '#6B7280' }}>
                  Skill levels based on 35+ years of active professional practice, continuous development, and client outcomes.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {skillCategories.map(({ title, icon: Icon, skills }, ci) => (
                <AnimatedSection key={title}>
                  <div
                    className="p-7 rounded-2xl h-full"
                    style={{
                      background: isDark ? 'rgba(30,41,59,0.5)' : '#F8F9FC',
                      border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)'}`,
                    }}
                  >
                    <div className="flex items-center gap-3 mb-7">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #1B3A6B20, #1B3A6B08)' }}>
                        <Icon size={20} style={{ color: '#1B3A6B' }} />
                      </div>
                      <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1rem', color: isDark ? 'white' : '#0F2444' }}>
                        {title}
                      </h3>
                    </div>
                    {skills.map(({ label, level }, si) => (
                      <SkillBar
                        key={label}
                        label={label}
                        level={level}
                        color={ci % 2 === 0 ? '#1B3A6B' : '#C9A84C'}
                        isVisible={skillsVisible}
                        delay={si * 100 + ci * 200}
                      />
                    ))}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Professional Attributes ─── */}
        <section className={`py-16 lg:py-20 ${isDark ? 'bg-[#0A0F1E]' : 'bg-[#F8F9FC]'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-12">
                <span className="text-xs uppercase tracking-widest" style={{ color: '#C9A84C', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                  Professional Attributes
                </span>
                <h2 className="mt-3" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: isDark ? 'white' : '#0F2444', lineHeight: 1.2 }}>
                  What Sets Us Apart
                </h2>
              </div>
            </AnimatedSection>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { label: 'Critical Thinking' },
                { label: 'Attention to Detail' },
                { label: 'Client Communication' },
                { label: 'Problem Solving' },
                { label: 'Professional Ethics' },
                { label: 'Report Writing' },
              ].map(({ label }, i) => (
                <AnimatedSection key={label}>
                  <div
                    className="p-5 rounded-2xl text-center card-hover group cursor-default"
                    style={{
                      background: isDark ? 'rgba(30,41,59,0.5)' : 'white',
                      border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)'}`,
                      transitionDelay: `${i * 60}ms`,
                    }}
                  >
                    <div
                      className="w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110"
                      style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.08))' }}
                    >
                      <CheckCircle size={20} style={{ color: '#C9A84C' }} />
                    </div>
                    <p className="text-xs" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, color: isDark ? '#CBD5E1' : '#374151', lineHeight: 1.3 }}>
                      {label}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Industries Served ─── */}
        <section className={`py-16 lg:py-24 ${isDark ? 'bg-[#0F172A]' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-14">
                <span className="text-xs uppercase tracking-widest" style={{ color: '#C9A84C', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                  Sectors We Serve
                </span>
                <h2 className="mt-3" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: isDark ? 'white' : '#0F2444', lineHeight: 1.2 }}>
                  Industries We Serve
                </h2>
                <p className="mt-4 max-w-xl mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.7, color: isDark ? '#94A3B8' : '#6B7280' }}>
                  Our professional services span a wide range of sectors across Kenya and East Africa.
                </p>
              </div>
            </AnimatedSection>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
              {industries.map(({ icon: Icon, label, desc }, i) => (
                <AnimatedSection key={label}>
                  <div
                    className="p-5 rounded-2xl card-hover h-full group cursor-default"
                    style={{
                      background: isDark ? 'rgba(30,41,59,0.5)' : '#F8F9FC',
                      border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)'}`,
                      transitionDelay: `${i * 60}ms`,
                    }}
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110" style={{ background: 'linear-gradient(135deg, rgba(27,58,107,0.12), rgba(27,58,107,0.05))' }}>
                      <Icon size={20} style={{ color: '#1B3A6B' }} />
                    </div>
                    <h3 className="mb-1.5" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '0.9rem', color: isDark ? 'white' : '#0F2444' }}>
                      {label}
                    </h3>
                    <p className="text-xs" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.5, color: isDark ? '#94A3B8' : '#6B7280' }}>
                      {desc}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Languages — text-only, no percentages or bars ─── */}
        <section className={`py-16 ${isDark ? 'bg-[#0A0F1E]' : 'bg-[#F8F9FC]'}`}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <AnimatedSection>
              <div className="text-center mb-12">
                <span className="text-xs uppercase tracking-widest" style={{ color: '#C9A84C', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                  Communication
                </span>
                <h2 className="mt-3" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: isDark ? 'white' : '#0F2444', lineHeight: 1.2 }}>
                  Languages
                </h2>
                <p className="mt-4 max-w-xl mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.7, color: isDark ? '#94A3B8' : '#6B7280' }}>
                  Effective multilingual communication to serve our diverse clientele across East Africa and beyond.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {languages.map(({ language, level, description, icon }) => (
                  <div
                    key={language}
                    className="p-6 rounded-2xl card-hover group cursor-default flex flex-col"
                    style={{
                      background: isDark ? 'rgba(30,41,59,0.5)' : 'white',
                      border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)'}`,
                    }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl transition-transform group-hover:scale-110"
                        style={{ background: isDark ? 'rgba(255,255,255,0.06)' : '#F8F9FC' }}
                      >
                        {icon}
                      </div>
                      <div>
                        <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1rem', color: isDark ? 'white' : '#0F2444' }}>
                          {language}
                        </h3>
                        <span
                          className="inline-block mt-0.5 px-2 py-0.5 rounded-md text-xs"
                          style={{ background: 'rgba(201,168,76,0.12)', color: '#C9A84C', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                        >
                          {level}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm flex-1" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7, color: isDark ? '#94A3B8' : '#6B7280' }}>
                      {description}
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      <MessageSquare size={13} style={{ color: '#C9A84C' }} />
                      <span className="text-xs" style={{ color: '#C9A84C', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>{level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className={`py-16 ${isDark ? 'bg-[#0F172A]' : 'bg-white'}`}>
          <div className="max-w-3xl mx-auto px-4 text-center">
            <AnimatedSection>
              <h2 className="mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: isDark ? 'white' : '#0F2444' }}>
                Deep Expertise Across Your Industry
              </h2>
              <p className="mb-8" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.7, color: isDark ? '#94A3B8' : '#6B7280' }}>
                Whatever your sector, Costa Luis & Co has the skills and experience to deliver.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{
                  background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
                  color: '#0F2444',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  boxShadow: '0 8px 24px rgba(201,168,76,0.3)',
                }}
              >
                Start a Conversation
                <ArrowRight size={16} />
              </Link>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </>
  );
}
