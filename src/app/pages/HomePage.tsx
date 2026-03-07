import portraitImage from 'figma:asset/8d5560b954a70bf207bb72daf4094643471fd813.png';
import { Link } from 'react-router';
import { useEffect, useRef, useState } from 'react';
import {
  ArrowRight, CheckCircle, Shield, Users, TrendingUp,
  Award, FileText, Scale, Building, Globe, Briefcase, ChevronRight,
  Star, Phone, Mail
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
const HERO_IMAGE = 'https://images.unsplash.com/photo-1669333490889-194e8f46a766?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOYWlyb2JpJTIwS2VueWElMjBjaXR5JTIwc2t5bGluZSUyMG1vZGVybnxlbnwxfHx8fDE3NzIwNTQzNjR8MA&ixlib=rb-4.1.0&q=80&w=1080';
const OFFICE_IMAGE = 'https://images.unsplash.com/photo-1758448721162-0c77cf477d6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG9mZmljZSUyMGludGVyaW9yJTIwcHJlbWl1bXxlbnwxfHx8fDE3NzIwNTQzNjR8MA&ixlib=rb-4.1.0&q=80&w=1080';
const PORTRAIT_IMAGE = portraitImage;

const stats = [
  { value: '35+', label: 'Years of Excellence', icon: Award },
  { value: '500+', label: 'Clients Served', icon: Users },
  { value: '7', label: 'Service Areas', icon: Briefcase },
  { value: '100%', label: 'Integrity & Ethics', icon: Shield },
];

const services = [
  {
    icon: FileText,
    title: 'Statutory & Internal Audit',
    description: 'Comprehensive audit services ensuring compliance with IFRS, ISA, and Kenyan regulations.',
  },
  {
    icon: Scale,
    title: 'Tax Advisory',
    description: 'Strategic tax planning, KRA representation, and tax compliance for all entity types.',
  },
  {
    icon: Building,
    title: 'Company Secretarial',
    description: 'Complete company secretarial services — incorporation, governance, and compliance.',
  },
  {
    icon: TrendingUp,
    title: 'Business Consultancy',
    description: 'Strategic business advisory, financial management, and operational improvement.',
  },
  {
    icon: Shield,
    title: 'Insolvency & Debt Restructuring',
    description: 'Licensed insolvency practitioner services for liquidations and debt restructuring.',
  },
  {
    icon: Globe,
    title: 'IT Solutions',
    description: 'Technology advisory and IT solutions through our group companies.',
  },
];

const clientTypes = [
  { icon: Building, label: 'SMEs & Startups' },
  { icon: Globe, label: 'International NGOs' },
  { icon: Users, label: 'Corporates' },
  { icon: Award, label: 'Multinationals' },
  { icon: TrendingUp, label: 'Donor-Funded Projects' },
  { icon: Shield, label: 'Government Entities' },
];

const values = [
  { icon: Shield, label: 'Integrity', desc: 'Unwavering ethical standards in every engagement' },
  { icon: Star, label: 'Excellence', desc: 'Delivering the highest quality professional services' },
  { icon: Users, label: 'Partnership', desc: 'Building lasting relationships with our clients' },
  { icon: CheckCircle, label: 'Value', desc: 'Premium services at fair and competitive rates' },
];

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
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
    >
      {children}
    </div>
  );
}

export function HomePage() {
  const { isDark } = useTheme();
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = HERO_IMAGE;
    img.onload = () => setHeroLoaded(true);
  }, []);

  return (
    <div className={isDark ? 'bg-[#0F172A]' : 'bg-white'}>
      {/* ═══════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${heroLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,16,35,0.92) 0%, rgba(27,58,107,0.75) 50%, rgba(10,16,35,0.70) 100%)' }} />
        {/* Animated particles / grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />

        {/* Gold accent bar on left */}
        <div className="absolute left-0 top-1/4 bottom-1/4 w-1 rounded-r-full" style={{ background: 'linear-gradient(180deg, transparent, #C9A84C, transparent)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{ background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.3)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#C9A84C' }} />
              <span className="text-xs tracking-widest uppercase" style={{ color: '#E8C97A', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                Nairobi CBD, Kenya · Est. 1991
              </span>
            </div>

            {/* Firm Name */}
            <h1 className="mb-3" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(2.2rem, 5vw, 4rem)', lineHeight: 1.1, color: 'white' }}>
              Costa Luis & Co
            </h1>
            <h2 className="mb-6" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)', lineHeight: 1.3, color: '#C9A84C' }}>
              Chartered Accountants
            </h2>

            {/* Tagline */}
            <p className="mb-10 max-w-xl" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 'clamp(1rem, 2vw, 1.15rem)', lineHeight: 1.7, color: 'rgba(255,255,255,0.8)' }}>
              35+ Years of Trusted Audit, Tax & Advisory Services in Kenya. Led by Orlando da Costa-Luis — delivering excellence, integrity, and real value to every client.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm transition-all hover:shadow-2xl hover:-translate-y-1"
                style={{
                  background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
                  color: '#0F2444',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  boxShadow: '0 8px 32px rgba(201,168,76,0.4)',
                }}
              >
                Get in Touch
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm transition-all hover:-translate-y-1"
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  color: 'white',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  backdropFilter: 'blur(4px)',
                }}
              >
                Our Services
                <ChevronRight size={16} />
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap gap-4">
              {['ICPAK Registered', 'Licensed Insolvency Practitioner', 'KASNEB Certified'].map(badge => (
                <div
                  key={badge}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg"
                  style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
                >
                  <CheckCircle size={12} style={{ color: '#C9A84C' }} />
                  <span className="text-xs" style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Inter, sans-serif' }}>{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <span className="text-xs text-white tracking-widest uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>Scroll</span>
          <div className="w-px h-10 relative overflow-hidden bg-white/20 rounded-full">
            <div className="absolute top-0 w-full h-1/2 bg-[#C9A84C] rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          STATS BAR
      ═══════════════════════════════════════════════ */}
      <section style={{ background: isDark ? 'linear-gradient(90deg, #0F2444, #1B3A6B)' : 'linear-gradient(90deg, #0F2444, #1B3A6B)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(201,168,76,0.15)' }}>
                  <Icon size={22} style={{ color: '#C9A84C' }} />
                </div>
                <div>
                  <div className="text-white" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.5rem' }}>{value}</div>
                  <div className="text-xs" style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Inter, sans-serif' }}>{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          ABOUT SUMMARY
      ═══════════════════════════════════════════════ */}
      <section className={`py-20 lg:py-28 ${isDark ? 'bg-[#0F172A]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <AnimatedSection>
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0">
                  <img src={PORTRAIT_IMAGE} alt="Orlando da Costa-Luis" className="w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(10,16,35,0.9) 100%)' }} />
                  {/* Name tag */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.1rem' }}>Orlando da Costa-Luis</p>
                    <p className="text-xs mt-0.5" style={{ color: '#C9A84C', fontFamily: 'Inter, sans-serif' }}>CA · CS · CPA · CPS · IP · Managing Partner</p>
                  </div>
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-3xl -z-10" style={{ background: 'linear-gradient(135deg, #C9A84C22, #1B3A6B22)' }} />
                <div className="absolute -top-4 -left-4 w-20 h-20 rounded-2xl -z-10 border-2" style={{ borderColor: 'rgba(201,168,76,0.3)' }} />
              </div>
            </AnimatedSection>

            {/* Content */}
            <AnimatedSection>
              <div className="gold-underline">
                <span className="text-xs uppercase tracking-widest" style={{ color: '#C9A84C', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                  About the Firm
                </span>
              </div>
              <h2 className="mt-4 mb-6" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', lineHeight: 1.2, color: isDark ? 'white' : '#0F2444' }}>
                Three Decades of Trusted Professional Excellence
              </h2>
              <p className="mb-5" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.8, color: isDark ? '#94A3B8' : '#4B5563' }}>
                Costa Luis & Co is a premier audit and advisory firm based in Nairobi CBD, Kenya. Founded in 1991 and led by Orlando da Costa-Luis — a seasoned Chartered Accountant with over 35 years of professional experience — the firm has established itself as a trusted partner for SMEs, NGOs, corporates, and international organizations across Kenya and East Africa.
              </p>
              <p className="mb-8" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.8, color: isDark ? '#94A3B8' : '#4B5563' }}>
                Our approach is built on integrity, deep expertise, and an unwavering commitment to delivering genuine value to every client we serve. We combine the personalized attention of a boutique firm with the capabilities of a large practice.
              </p>

              {/* Key points */}
              <div className="space-y-3 mb-8">
                {['35+ years of professional experience', 'Licensed Insolvency Practitioner', 'Former AF Ferguson & Co (KPMG) experience', 'Serving clients across East Africa'].map(point => (
                  <div key={point} className="flex items-center gap-3">
                    <CheckCircle size={16} style={{ color: '#C9A84C', flexShrink: 0 }} />
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: isDark ? '#CBD5E1' : '#374151' }}>{point}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm transition-all hover:-translate-y-0.5"
                style={{
                  background: 'linear-gradient(135deg, #1B3A6B, #2A5298)',
                  color: 'white',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  boxShadow: '0 4px 16px rgba(27,58,107,0.3)',
                }}
              >
                Read Our Full Story
                <ArrowRight size={16} />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SERVICES PREVIEW
      ═══════════════════════════════════════════════ */}
      <section className={`py-20 lg:py-28 ${isDark ? 'bg-[#0A0F1E]' : 'bg-[#F8F9FC]'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="text-xs uppercase tracking-widest" style={{ color: '#C9A84C', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                What We Do
              </span>
              <h2 className="mt-3 gold-underline-center" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: isDark ? 'white' : '#0F2444', lineHeight: 1.2 }}>
                Our Core Services
              </h2>
              <p className="mt-6 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.7, color: isDark ? '#94A3B8' : '#6B7280' }}>
                From statutory audits to complex insolvency matters, we offer a comprehensive suite of professional services tailored to your business needs.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={service.title}>
                <div
                  className="card-hover h-full p-6 rounded-2xl border"
                  style={{
                    background: isDark ? 'rgba(30,41,59,0.5)' : 'white',
                    borderColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
                    boxShadow: isDark ? 'none' : '0 2px 12px rgba(0,0,0,0.04)',
                    transitionDelay: `${i * 80}ms`,
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: 'linear-gradient(135deg, rgba(27,58,107,0.12), rgba(42,82,152,0.08))' }}
                  >
                    <service.icon size={22} style={{ color: '#1B3A6B' }} />
                  </div>
                  <h3 className="mb-3" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '1rem', color: isDark ? 'white' : '#0F2444' }}>
                    {service.title}
                  </h3>
                  <p className="text-sm" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.6, color: isDark ? '#94A3B8' : '#6B7280' }}>
                    {service.description}
                  </p>
                  {/* Gold bottom accent */}
                  <div className="mt-5 pt-4 border-t flex items-center justify-between" style={{ borderColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }}>
                    <Link
                      to="/services"
                      className="text-xs flex items-center gap-1 transition-colors hover:gap-2"
                      style={{ color: '#C9A84C', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                    >
                      Learn more <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="mt-12 text-center">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-sm border-2 transition-all hover:-translate-y-0.5"
                style={{
                  borderColor: '#1B3A6B',
                  color: isDark ? 'white' : '#1B3A6B',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                }}
              >
                View All Services
                <ChevronRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CORE VALUES
      ═══════════════════════════════════════════════ */}
      <section className={`py-20 lg:py-28 ${isDark ? 'bg-[#0F172A]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="text-xs uppercase tracking-widest" style={{ color: '#C9A84C', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                Why Choose Us
              </span>
              <h2 className="mt-3" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: isDark ? 'white' : '#0F2444', lineHeight: 1.2 }}>
                Our Core Values
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, label, desc }, i) => (
              <AnimatedSection key={label}>
                <div
                  className="text-center p-8 rounded-2xl"
                  style={{
                    background: isDark
                      ? 'linear-gradient(135deg, rgba(27,58,107,0.2), rgba(15,36,68,0.4))'
                      : 'linear-gradient(135deg, rgba(27,58,107,0.04), rgba(42,82,152,0.06))',
                    border: `1px solid ${isDark ? 'rgba(201,168,76,0.1)' : 'rgba(27,58,107,0.08)'}`,
                    transitionDelay: `${i * 80}ms`,
                  }}
                >
                  <div className="w-14 h-14 mx-auto rounded-2xl flex items-center justify-center mb-5" style={{ background: 'linear-gradient(135deg, #C9A84C22, #C9A84C11)' }}>
                    <Icon size={24} style={{ color: '#C9A84C' }} />
                  </div>
                  <h3 className="mb-2" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: isDark ? 'white' : '#0F2444' }}>
                    {label}
                  </h3>
                  <p className="text-sm" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.6, color: isDark ? '#94A3B8' : '#6B7280' }}>
                    {desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CLIENT TYPES
      ═══════════════════════════════════════════════ */}
      <section
        className="py-20 lg:py-28"
        style={{ background: isDark ? '#0A0F1E' : '#F8F9FC' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="text-xs uppercase tracking-widest" style={{ color: '#C9A84C', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                Who We Serve
              </span>
              <h2 className="mt-3" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: isDark ? 'white' : '#0F2444', lineHeight: 1.2 }}>
                Our Clients
              </h2>
              <p className="mt-4 max-w-xl mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.7, color: isDark ? '#94A3B8' : '#6B7280' }}>
                We serve a diverse range of organizations across Kenya and East Africa.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {clientTypes.map(({ icon: Icon, label }, i) => (
              <AnimatedSection key={label}>
                <div
                  className="flex flex-col items-center gap-3 p-5 rounded-2xl text-center card-hover"
                  style={{
                    background: isDark ? 'rgba(30,41,59,0.5)' : 'white',
                    border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)'}`,
                    transitionDelay: `${i * 60}ms`,
                  }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #1B3A6B15, #1B3A6B08)' }}>
                    <Icon size={22} style={{ color: '#1B3A6B' }} />
                  </div>
                  <p className="text-xs" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, color: isDark ? '#CBD5E1' : '#374151' }}>
                    {label}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CTA BANNER
      ═══════════════════════════════════════════════ */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img src={OFFICE_IMAGE} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,16,35,0.95) 0%, rgba(27,58,107,0.90) 100%)' }} />
        </div>
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #C9A84C 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="text-xs uppercase tracking-widest" style={{ color: '#C9A84C', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
              Ready to get started?
            </span>
            <h2 className="mt-4 mb-6" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', lineHeight: 1.2, color: 'white' }}>
              Let's Build Your Financial Success Together
            </h2>
            <p className="mb-10 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.75)' }}>
              Whether you need a statutory audit, tax advice, or business consultancy, Costa Luis & Co is ready to deliver expert professional services with the highest standards of quality and integrity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm transition-all hover:-translate-y-1"
                style={{
                  background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
                  color: '#0F2444',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  boxShadow: '0 8px 32px rgba(201,168,76,0.4)',
                }}
              >
                Request Consultation
                <ArrowRight size={16} />
              </Link>
              <div className="flex items-center gap-4 justify-center">
                <a
                  href="tel:+254202215018"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl text-sm border transition-all hover:-translate-y-0.5"
                  style={{
                    borderColor: 'rgba(255,255,255,0.3)',
                    color: 'white',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                  }}
                >
                  <Phone size={16} />
                  Call Us
                </a>
                <a
                  href="mailto:info@costaluisco.co.ke"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl text-sm border transition-all hover:-translate-y-0.5"
                  style={{
                    borderColor: 'rgba(255,255,255,0.3)',
                    color: 'white',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                  }}
                >
                  <Mail size={16} />
                  Email Us
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}