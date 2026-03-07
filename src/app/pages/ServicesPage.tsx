import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { FileText, Scale, Building, TrendingUp, Shield, Globe, Cpu, ArrowRight, CheckCircle, ChevronDown } from 'lucide-react';
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

const services = [
  {
    id: 'statutory-audit',
    icon: FileText,
    category: 'Audit',
    title: 'Statutory Audit',
    tagline: 'Independent, objective, and compliant',
    description: 'We conduct statutory audits in full compliance with International Standards on Auditing (ISA) and Kenyan regulatory requirements. Our audit process is thorough, independent, and designed to provide stakeholders with reliable financial information.',
    features: [
      'Full compliance with ISA and Kenyan statutory requirements',
      'IFRS-compliant financial statement review',
      'Internal control assessment and recommendations',
      'Risk-based audit approach',
      'Management letter with actionable insights',
      'Timely delivery of audit reports',
    ],
    clientTypes: ['Companies Act Audits', 'NGO Audits', 'Donor-Required Audits'],
    color: '#1B3A6B',
  },
  {
    id: 'internal-audit',
    icon: Shield,
    category: 'Audit',
    title: 'Internal Audit',
    tagline: 'Strengthening governance from within',
    description: 'Our internal audit services help organizations strengthen their internal control frameworks, manage risk, and improve operational efficiency. We provide independent assurance that governance, risk management, and compliance processes are functioning effectively.',
    features: [
      'Risk assessment and risk register development',
      'Internal control framework evaluation',
      'Process and operational audits',
      'Fraud risk assessment',
      'Board and audit committee reporting',
      'Follow-up and recommendation tracking',
    ],
    clientTypes: ['Corporations', 'NGOs & INGOs', 'Government Projects'],
    color: '#1B3A6B',
  },
  {
    id: 'tax-advisory',
    icon: Scale,
    category: 'Tax',
    title: 'Tax Advisory & Representation',
    tagline: 'Strategic tax planning and KRA representation',
    description: 'We provide comprehensive tax advisory services, helping clients navigate Kenya\'s complex tax environment efficiently and compliantly. From personal income tax to corporate tax, VAT, and specialized tax issues, we deliver strategic advice that minimizes liability while ensuring full compliance.',
    features: [
      'Corporate and individual income tax planning',
      'VAT advisory and compliance',
      'KRA tax audit representation',
      'Tax objections and appeals management',
      'Transfer pricing advisory',
      'Payroll tax and NSSF/NHIF compliance',
      'Tax due diligence for transactions',
    ],
    clientTypes: ['Corporates', 'SMEs', 'International Organizations'],
    color: '#C9A84C',
  },
  {
    id: 'company-secretarial',
    icon: Building,
    category: 'Corporate',
    title: 'Company Secretarial',
    tagline: 'Complete corporate governance support',
    description: 'We provide a full range of company secretarial services, ensuring your organization meets all statutory obligations under the Companies Act 2015 and remains in good standing with the Registrar of Companies and other regulatory bodies.',
    features: [
      'Company incorporation and registration',
      'Annual returns and statutory filing',
      'Board meeting coordination and minutes',
      'Share register maintenance',
      'Corporate restructuring support',
      'Regulatory compliance advisory',
      'Business name registration',
    ],
    clientTypes: ['All Company Types', 'NGOs', 'Foundations'],
    color: '#1B3A6B',
  },
  {
    id: 'insolvency',
    icon: TrendingUp,
    category: 'Insolvency',
    title: 'Insolvency & Debt Restructuring',
    tagline: 'Licensed practitioner — expert recovery solutions',
    description: 'As a licensed Insolvency Practitioner, Orlando da Costa-Luis provides professional insolvency and debt restructuring services. We guide businesses and creditors through complex insolvency proceedings with expertise, empathy, and maximum value recovery.',
    features: [
      'Voluntary administration',
      'Official receivership and liquidation',
      'Creditor voluntary liquidation',
      'Court-supervised winding up',
      'Debt restructuring negotiations',
      'Turnaround management advisory',
      'Creditor representation',
    ],
    clientTypes: ['Distressed Companies', 'Creditors', 'Banks & Lenders'],
    color: '#C9A84C',
  },
  {
    id: 'business-consultancy',
    icon: Globe,
    category: 'Advisory',
    title: 'Business & Management Consultancy',
    tagline: 'Strategic guidance for sustainable growth',
    description: 'Our business consultancy practice delivers strategic advisory services that help organizations navigate challenges, capitalize on opportunities, and build long-term value. We bring deep industry knowledge and practical experience to every engagement.',
    features: [
      'Business strategy development',
      'Financial management and planning',
      'Organizational restructuring',
      'Business valuation',
      'Due diligence for mergers & acquisitions',
      'Performance improvement consulting',
      'Grant management and donor reporting',
    ],
    clientTypes: ['SMEs', 'NGOs', 'Donor Organizations'],
    color: '#1B3A6B',
  },
  {
    id: 'it-solutions',
    icon: Cpu,
    category: 'Technology',
    title: 'IT Solutions',
    tagline: 'Technology-driven business solutions',
    description: 'Through our group companies, we provide IT advisory and technology solutions that help businesses leverage technology for efficiency, security, and growth. Our technology services are designed to complement and enhance our professional services offering.',
    features: [
      'Accounting software implementation',
      'ERP system advisory',
      'Cybersecurity risk assessment',
      'IT governance advisory',
      'Digital transformation consulting',
      'Cloud solutions advisory',
    ],
    clientTypes: ['SMEs', 'Corporates', 'NGOs'],
    color: '#C9A84C',
  },
];

const categories = ['All', 'Audit', 'Tax', 'Corporate', 'Insolvency', 'Advisory', 'Technology'];

export function ServicesPage() {
  const { isDark } = useTheme();
  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const filtered = activeCategory === 'All'
    ? services
    : services.filter(s => s.category === activeCategory);

  return (
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
            What We Offer
          </span>
          <h1 className="mt-3 mb-5" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.1, color: 'white' }}>
            Our Services
          </h1>
          <p className="max-w-2xl" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.05rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.75)' }}>
            A comprehensive suite of professional services delivered with expertise, precision, and integrity. From audit and tax to insolvency and IT — we cover it all.
          </p>
        </div>
      </section>

      {/* ─── Filter Bar ─── */}
      <section className={`py-8 sticky top-16 lg:top-20 z-30 border-b ${isDark ? 'bg-[#0F172A] border-white/10' : 'bg-white border-gray-100'} shadow-sm`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="flex-shrink-0 px-4 py-2 rounded-xl text-sm transition-all"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  background: activeCategory === cat
                    ? 'linear-gradient(135deg, #1B3A6B, #2A5298)'
                    : isDark ? 'rgba(255,255,255,0.05)' : '#F8F9FC',
                  color: activeCategory === cat
                    ? 'white'
                    : isDark ? '#94A3B8' : '#6B7280',
                  border: `1px solid ${activeCategory === cat ? 'transparent' : isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'}`,
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Services Grid (Desktop) ─── */}
      <section className={`py-16 lg:py-24 hidden sm:block ${isDark ? 'bg-[#0F172A]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filtered.map((service, i) => (
              <AnimatedSection key={service.id}>
                <div
                  className="p-8 rounded-3xl card-hover h-full"
                  style={{
                    background: isDark ? 'rgba(30,41,59,0.5)' : '#F8F9FC',
                    border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)'}`,
                    transitionDelay: `${i * 80}ms`,
                  }}
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: `${service.color}15` }}>
                      <service.icon size={26} style={{ color: service.color }} />
                    </div>
                    <div>
                      <span className="text-xs px-2 py-0.5 rounded-md" style={{ background: 'rgba(201,168,76,0.12)', color: '#C9A84C', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                        {service.category}
                      </span>
                      <h3 className="mt-1" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.2rem', color: isDark ? 'white' : '#0F2444' }}>
                        {service.title}
                      </h3>
                      <p className="text-xs mt-0.5" style={{ color: '#C9A84C', fontFamily: 'Inter, sans-serif', fontStyle: 'italic' }}>
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="mb-6 text-sm" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7, color: isDark ? '#94A3B8' : '#6B7280' }}>
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map(feature => (
                      <div key={feature} className="flex items-center gap-2.5">
                        <CheckCircle size={14} style={{ color: '#C9A84C', flexShrink: 0 }} />
                        <span className="text-xs" style={{ fontFamily: 'Inter, sans-serif', color: isDark ? '#CBD5E1' : '#374151' }}>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Client types */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.clientTypes.map(ct => (
                      <span
                        key={ct}
                        className="px-2.5 py-1 rounded-lg text-xs"
                        style={{
                          background: isDark ? 'rgba(27,58,107,0.3)' : 'rgba(27,58,107,0.06)',
                          color: isDark ? '#93C5FD' : '#1B3A6B',
                          fontFamily: 'Inter, sans-serif',
                          fontWeight: 500,
                        }}
                      >
                        {ct}
                      </span>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-sm transition-all hover:gap-3"
                    style={{ color: '#C9A84C', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                  >
                    Request Consultation <ArrowRight size={14} />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Services Accordion (Mobile) ─── */}
      <section className={`py-10 sm:hidden ${isDark ? 'bg-[#0F172A]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-3">
            {filtered.map((service) => (
              <div
                key={service.id}
                className="rounded-2xl overflow-hidden"
                style={{
                  background: isDark ? 'rgba(30,41,59,0.5)' : '#F8F9FC',
                  border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)'}`,
                }}
              >
                <button
                  className="w-full flex items-center gap-4 p-5 text-left"
                  onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${service.color}15` }}>
                    <service.icon size={20} style={{ color: service.color }} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, color: isDark ? 'white' : '#0F2444' }}>
                      {service.title}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: '#C9A84C', fontFamily: 'Inter, sans-serif' }}>
                      {service.category}
                    </p>
                  </div>
                  <ChevronDown
                    size={18}
                    style={{
                      color: isDark ? '#64748B' : '#9CA3AF',
                      transform: expandedService === service.id ? 'rotate(180deg)' : 'none',
                      transition: 'transform 0.2s',
                    }}
                  />
                </button>
                {expandedService === service.id && (
                  <div className="px-5 pb-5">
                    <div className="pt-4 border-t" style={{ borderColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)' }}>
                      <p className="text-sm mb-4" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7, color: isDark ? '#94A3B8' : '#6B7280' }}>
                        {service.description}
                      </p>
                      <div className="space-y-2 mb-4">
                        {service.features.map(feature => (
                          <div key={feature} className="flex items-center gap-2">
                            <CheckCircle size={13} style={{ color: '#C9A84C', flexShrink: 0 }} />
                            <span className="text-xs" style={{ fontFamily: 'Inter, sans-serif', color: isDark ? '#CBD5E1' : '#374151' }}>{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 text-sm"
                        style={{ color: '#C9A84C', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                      >
                        Request Consultation <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        className="py-20"
        style={{ background: 'linear-gradient(135deg, #0F2444, #1B3A6B)' }}
      >
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: 'white' }}>
              Ready to Work with Experts You Can Trust?
            </h2>
            <p className="mb-8" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.75)' }}>
              Contact us today for a confidential consultation. We'll assess your needs and recommend the best approach.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-sm transition-all hover:-translate-y-1"
              style={{
                background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
                color: '#0F2444',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                boxShadow: '0 8px 32px rgba(201,168,76,0.4)',
              }}
            >
              Request a Consultation
              <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
