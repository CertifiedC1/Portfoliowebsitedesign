import { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Linkedin, Twitter, Facebook } from 'lucide-react';
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
  'Statutory Audit',
  'Internal Audit',
  'Tax Advisory',
  'Company Secretarial',
  'Insolvency & Debt Restructuring',
  'Business Consultancy',
  'IT Solutions',
  'Other',
];

export function ContactPage() {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.message.trim()) newErrors.message = 'Please describe how we can help';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitting(false);
    setSubmitted(true);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '12px',
    outline: 'none',
    fontFamily: 'Inter, sans-serif',
    fontSize: '0.9rem',
    background: isDark ? 'rgba(255,255,255,0.05)' : 'white',
    color: isDark ? 'white' : '#111827',
    border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
    transition: 'border-color 0.2s',
  };

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
            Get in Touch
          </span>
          <h1 className="mt-3 mb-5" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.1, color: 'white' }}>
            Contact Us
          </h1>
          <p className="max-w-2xl" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.05rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.75)' }}>
            We'd love to hear from you. Reach out to discuss how Costa Luis & Co can serve your professional needs — we respond within 24 hours.
          </p>
        </div>
      </section>

      {/* ─── Quick Contact Buttons (Mobile focused) ─── */}
      <section className={`py-8 ${isDark ? 'bg-[#0A0F1E]' : 'bg-[#F8F9FC]'} border-b ${isDark ? 'border-white/05' : 'border-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              {
                icon: Phone,
                label: 'Call Us Now',
                value: '+254 (0)20 221 5018',
                href: 'tel:+254202215018',
                color: '#1B3A6B',
              },
              {
                icon: Mail,
                label: 'Email Us',
                value: 'info@costaluisco.co.ke',
                href: 'mailto:info@costaluisco.co.ke',
                color: '#C9A84C',
              },
              {
                icon: MapPin,
                label: 'Visit Our Office',
                value: 'IPS Building, Kimathi St, Nairobi',
                href: 'https://maps.google.com/?q=IPS+Building+Kimathi+Street+Nairobi',
                color: '#1B3A6B',
              },
            ].map(({ icon: Icon, label, value, href, color }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 p-4 rounded-2xl transition-all hover:-translate-y-0.5 hover:shadow-md"
                style={{
                  background: isDark ? 'rgba(30,41,59,0.6)' : 'white',
                  border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)'}`,
                }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${color}18` }}>
                  <Icon size={20} style={{ color }} />
                </div>
                <div>
                  <p className="text-xs" style={{ color: '#C9A84C', fontFamily: 'Inter, sans-serif', fontWeight: 600, marginBottom: '1px' }}>{label}</p>
                  <p className="text-sm" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, color: isDark ? '#CBD5E1' : '#374151' }}>{value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Main Contact Section ─── */}
      <section className={`py-16 lg:py-24 ${isDark ? 'bg-[#0F172A]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <div className="gold-underline">
                  <span className="text-xs uppercase tracking-widest" style={{ color: '#C9A84C', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                    Office Information
                  </span>
                </div>
                <h2 className="mt-4 mb-6" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.6rem', color: isDark ? 'white' : '#0F2444', lineHeight: 1.3 }}>
                  Visit or Contact Our Nairobi Office
                </h2>

                <div className="space-y-6">
                  {/* Address */}
                  <div
                    className="p-5 rounded-2xl"
                    style={{
                      background: isDark ? 'rgba(30,41,59,0.5)' : '#F8F9FC',
                      border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)'}`,
                    }}
                  >
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(27,58,107,0.12)' }}>
                        <MapPin size={18} style={{ color: '#1B3A6B' }} />
                      </div>
                      <div>
                        <p className="text-sm mb-1" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, color: isDark ? 'white' : '#0F2444' }}>Office Address</p>
                        <p className="text-sm" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7, color: isDark ? '#94A3B8' : '#6B7280' }}>
                          IPS Building, 5th Floor<br />
                          Kimathi Street<br />
                          Nairobi Central Business District<br />
                          Nairobi, Kenya
                        </p>
                        <a
                          href="https://maps.google.com/?q=IPS+Building+Kimathi+Street+Nairobi"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs mt-2 transition-colors"
                          style={{ color: '#C9A84C', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                        >
                          Get Directions →
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div
                    className="p-5 rounded-2xl"
                    style={{
                      background: isDark ? 'rgba(30,41,59,0.5)' : '#F8F9FC',
                      border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)'}`,
                    }}
                  >
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(201,168,76,0.12)' }}>
                        <Phone size={18} style={{ color: '#C9A84C' }} />
                      </div>
                      <div>
                        <p className="text-sm mb-1" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, color: isDark ? 'white' : '#0F2444' }}>Phone Numbers</p>
                        <a href="tel:+254202215018" className="block text-sm transition-colors hover:text-[#C9A84C]" style={{ fontFamily: 'Inter, sans-serif', color: isDark ? '#94A3B8' : '#6B7280' }}>
                          +254 (0)20 221 5018
                        </a>
                        <a href="tel:+254202224080" className="block text-sm transition-colors hover:text-[#C9A84C]" style={{ fontFamily: 'Inter, sans-serif', color: isDark ? '#94A3B8' : '#6B7280' }}>
                          +254 (0)20 222 4080
                        </a>
                        <a href="tel:+254722123456" className="block text-sm transition-colors hover:text-[#C9A84C]" style={{ fontFamily: 'Inter, sans-serif', color: isDark ? '#94A3B8' : '#6B7280' }}>
                          +254 722 123 456 (Mobile)
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div
                    className="p-5 rounded-2xl"
                    style={{
                      background: isDark ? 'rgba(30,41,59,0.5)' : '#F8F9FC',
                      border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)'}`,
                    }}
                  >
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(27,58,107,0.12)' }}>
                        <Mail size={18} style={{ color: '#1B3A6B' }} />
                      </div>
                      <div>
                        <p className="text-sm mb-1" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, color: isDark ? 'white' : '#0F2444' }}>Email Addresses</p>
                        <a href="mailto:info@costaluisco.co.ke" className="block text-sm transition-colors hover:text-[#C9A84C]" style={{ fontFamily: 'Inter, sans-serif', color: isDark ? '#94A3B8' : '#6B7280' }}>
                          info@costaluisco.co.ke
                        </a>
                        <a href="mailto:orlando@costaluisco.co.ke" className="block text-sm transition-colors hover:text-[#C9A84C]" style={{ fontFamily: 'Inter, sans-serif', color: isDark ? '#94A3B8' : '#6B7280' }}>
                          orlando@costaluisco.co.ke
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Hours */}
                  <div
                    className="p-5 rounded-2xl"
                    style={{
                      background: isDark ? 'rgba(30,41,59,0.5)' : '#F8F9FC',
                      border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)'}`,
                    }}
                  >
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(201,168,76,0.12)' }}>
                        <Clock size={18} style={{ color: '#C9A84C' }} />
                      </div>
                      <div>
                        <p className="text-sm mb-1" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, color: isDark ? 'white' : '#0F2444' }}>Office Hours</p>
                        <p className="text-sm" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7, color: isDark ? '#94A3B8' : '#6B7280' }}>
                          Monday – Friday: 8:00 AM – 5:30 PM<br />
                          Saturday: 9:00 AM – 1:00 PM<br />
                          Sunday & Public Holidays: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-6">
                  <p className="text-xs mb-3" style={{ color: '#C9A84C', fontFamily: 'Inter, sans-serif', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Connect With Us
                  </p>
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
                        className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:-translate-y-0.5"
                        style={{
                          background: isDark ? 'rgba(255,255,255,0.06)' : '#F8F9FC',
                          color: isDark ? '#94A3B8' : '#6B7280',
                          border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'}`,
                        }}
                      >
                        <Icon size={16} />
                      </a>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                <div
                  className="p-8 rounded-3xl"
                  style={{
                    background: isDark ? 'rgba(30,41,59,0.5)' : '#F8F9FC',
                    border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)'}`,
                    boxShadow: isDark ? 'none' : '0 4px 24px rgba(0,0,0,0.06)',
                  }}
                >
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                      <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6" style={{ background: 'rgba(201,168,76,0.12)' }}>
                        <CheckCircle size={40} style={{ color: '#C9A84C' }} />
                      </div>
                      <h3 className="mb-3" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.5rem', color: isDark ? 'white' : '#0F2444' }}>
                        Message Sent!
                      </h3>
                      <p className="mb-8 max-w-sm" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7, color: isDark ? '#94A3B8' : '#6B7280' }}>
                        Thank you for contacting Costa Luis & Co. We'll review your message and respond within 24 business hours.
                      </p>
                      <button
                        onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' }); }}
                        className="px-6 py-3 rounded-xl text-sm"
                        style={{ background: 'linear-gradient(135deg, #1B3A6B, #2A5298)', color: 'white', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="mb-7">
                        <h3 className="mb-1" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.3rem', color: isDark ? 'white' : '#0F2444' }}>
                          Send Us a Message
                        </h3>
                        <p className="text-sm" style={{ fontFamily: 'Inter, sans-serif', color: isDark ? '#94A3B8' : '#6B7280' }}>
                          All consultations are confidential. We'll respond within 24 business hours.
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-xs mb-2" style={{ color: isDark ? '#CBD5E1' : '#374151', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                              Full Name *
                            </label>
                            <input
                              type="text"
                              value={formData.name}
                              onChange={e => handleChange('name', e.target.value)}
                              placeholder="John Kamau"
                              style={{ ...inputStyle, borderColor: errors.name ? '#EF4444' : undefined }}
                            />
                            {errors.name && <p className="text-xs mt-1" style={{ color: '#EF4444', fontFamily: 'Inter, sans-serif' }}>{errors.name}</p>}
                          </div>
                          <div>
                            <label className="block text-xs mb-2" style={{ color: isDark ? '#CBD5E1' : '#374151', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                              Email Address *
                            </label>
                            <input
                              type="email"
                              value={formData.email}
                              onChange={e => handleChange('email', e.target.value)}
                              placeholder="john@company.com"
                              style={{ ...inputStyle, borderColor: errors.email ? '#EF4444' : undefined }}
                            />
                            {errors.email && <p className="text-xs mt-1" style={{ color: '#EF4444', fontFamily: 'Inter, sans-serif' }}>{errors.email}</p>}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-xs mb-2" style={{ color: isDark ? '#CBD5E1' : '#374151', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              value={formData.phone}
                              onChange={e => handleChange('phone', e.target.value)}
                              placeholder="+254 7XX XXX XXX"
                              style={inputStyle}
                            />
                          </div>
                          <div>
                            <label className="block text-xs mb-2" style={{ color: isDark ? '#CBD5E1' : '#374151', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                              Company / Organization
                            </label>
                            <input
                              type="text"
                              value={formData.company}
                              onChange={e => handleChange('company', e.target.value)}
                              placeholder="Your Company Ltd"
                              style={inputStyle}
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs mb-2" style={{ color: isDark ? '#CBD5E1' : '#374151', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                            Service of Interest
                          </label>
                          <select
                            value={formData.service}
                            onChange={e => handleChange('service', e.target.value)}
                            style={{ ...inputStyle, cursor: 'pointer' }}
                          >
                            <option value="">Select a service...</option>
                            {services.map(s => <option key={s} value={s}>{s}</option>)}
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs mb-2" style={{ color: isDark ? '#CBD5E1' : '#374151', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                            How Can We Help? *
                          </label>
                          <textarea
                            rows={5}
                            value={formData.message}
                            onChange={e => handleChange('message', e.target.value)}
                            placeholder="Please describe your requirements, the nature of your business, and any specific challenges you're facing..."
                            style={{ ...inputStyle, resize: 'vertical', borderColor: errors.message ? '#EF4444' : undefined }}
                          />
                          {errors.message && <p className="text-xs mt-1" style={{ color: '#EF4444', fontFamily: 'Inter, sans-serif' }}>{errors.message}</p>}
                        </div>

                        <div
                          className="flex items-start gap-3 p-4 rounded-xl"
                          style={{ background: isDark ? 'rgba(201,168,76,0.05)' : 'rgba(27,58,107,0.04)', border: `1px solid ${isDark ? 'rgba(201,168,76,0.1)' : 'rgba(27,58,107,0.08)'}` }}
                        >
                          <CheckCircle size={16} style={{ color: '#C9A84C', flexShrink: 0, marginTop: 1 }} />
                          <p className="text-xs" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.6, color: isDark ? '#94A3B8' : '#6B7280' }}>
                            All information shared is strictly confidential and protected by professional privilege. Costa Luis & Co adheres to the highest ethical standards of client confidentiality.
                          </p>
                        </div>

                        <button
                          type="submit"
                          disabled={submitting}
                          className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl text-sm transition-all hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
                          style={{
                            background: 'linear-gradient(135deg, #1B3A6B, #2A5298)',
                            color: 'white',
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 700,
                            boxShadow: '0 4px 16px rgba(27,58,107,0.3)',
                          }}
                        >
                          {submitting ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send size={16} />
                              Send Message
                            </>
                          )}
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Map Placeholder ─── */}
      <section className={`py-12 ${isDark ? 'bg-[#0A0F1E]' : 'bg-[#F8F9FC]'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div
              className="rounded-3xl overflow-hidden"
              style={{ height: '400px', position: 'relative' }}
            >
              {/* Map iframe placeholder */}
              <iframe
                title="Costa Luis & Co Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.817850219168!2d36.8196!3d-1.2832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d617596cb3%3A0x9f0c1ea8d1c4e97c!2sIPS%20Building%2C%20Kimathi%20St%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: '1.5rem', filter: isDark ? 'invert(0.9) hue-rotate(180deg)' : 'none' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Overlay card */}
              <div
                className="absolute top-4 left-4 p-4 rounded-xl shadow-lg"
                style={{
                  background: isDark ? 'rgba(15,23,42,0.9)' : 'white',
                  backdropFilter: 'blur(8px)',
                  border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #0F2444, #1B3A6B)' }}>
                    <span style={{ fontSize: '8px', fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#C9A84C' }}>CL</span>
                  </div>
                  <span className="text-xs" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: isDark ? 'white' : '#0F2444' }}>Costa Luis & Co</span>
                </div>
                <p className="text-xs" style={{ fontFamily: 'Inter, sans-serif', color: isDark ? '#94A3B8' : '#6B7280' }}>IPS Building, Kimathi Street</p>
                <p className="text-xs" style={{ fontFamily: 'Inter, sans-serif', color: isDark ? '#94A3B8' : '#6B7280' }}>Nairobi CBD, Kenya</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
