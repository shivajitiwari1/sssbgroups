'use client';
import { useState } from 'react';
import siteData from '@/data/site.json';
import RevealObserver from '@/components/RevealObserver';

type FormState = { name: string; email: string; phone: string; type: string; message: string };
type Status = 'idle' | 'sending' | 'sent' | 'error';

const enquiryTypes = ['Project Enquiry', 'Service Enquiry', 'Quotation Request', 'Manpower Supply', 'Career Enquiry', 'Other'];

const contactRows = [
  { icon: '📍', label: 'Address', val: siteData.contact.address },
  { icon: '📞', label: 'Phone', val: siteData.contact.phones.join(' · ') },
  { icon: '✉️', label: 'Email', val: siteData.contact.email },
  { icon: '🕐', label: 'Hours', val: siteData.contact.hours },
];

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '', type: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <RevealObserver />

      {/* Page Hero */}
      <section className="page-hero-v4">
        <div className="container page-hero-v4-inner">
          <span className="page-hero-v4-badge">Reach Us</span>
          <h1>Contact<br />SSB Group</h1>
          <p>Get in touch for project enquiries, quotations, or general information.</p>
          <div className="page-hero-v4-rule" />
        </div>
      </section>

      {/* Contact layout */}
      <section className="section">
        <div className="container">
          <div className="contact-v4-layout">
            {/* Left — info rows */}
            <div className="reveal-left">
              <span className="section-label">Get in Touch</span>
              <h2 className="section-title" style={{ marginBottom: 24 }}>Contact Info</h2>
              <div className="contact-info-rows">
                {contactRows.map((r) => (
                  <div key={r.label} className="contact-info-row">
                    <div className="contact-info-icon">{r.icon}</div>
                    <div>
                      <span className="contact-info-label">{r.label}</span>
                      <div className="contact-info-val">{r.val}</div>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href={`https://wa.me/${siteData.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-cta"
                style={{ marginTop: 24 }}
              >
                💬 Chat on WhatsApp
              </a>
            </div>

            {/* Right — form */}
            <div className="reveal-right">
              <div className="contact-form-v4">
                <span className="section-label">Enquiry Form</span>
                <h2 className="section-title" style={{ marginBottom: 28 }}>Send an Enquiry</h2>

                {status === 'sent' && (
                  <div className="alert-success" style={{ marginBottom: 20 }}>
                    ✓ Thank you! We&apos;ll get back to you within 24 hours.
                  </div>
                )}
                {status === 'error' && (
                  <div className="alert-error" style={{ marginBottom: 20 }}>
                    Something went wrong. Please try again or call us directly.
                  </div>
                )}

                <form onSubmit={submit}>
                  <div className="form-row">
                    <div className="float-group">
                      <input id="name" type="text" placeholder=" " value={form.name} onChange={set('name')} required />
                      <label className="float-label" htmlFor="name">Full Name *</label>
                    </div>
                    <div className="float-group">
                      <input id="email" type="email" placeholder=" " value={form.email} onChange={set('email')} required />
                      <label className="float-label" htmlFor="email">Email Address *</label>
                    </div>
                  </div>
                  <div className="float-group">
                    <input id="phone" type="tel" placeholder=" " value={form.phone} onChange={set('phone')} />
                    <label className="float-label" htmlFor="phone">Phone Number</label>
                  </div>
                  <div className="float-group">
                    <select id="etype" value={form.type} onChange={set('type')} required>
                      <option value="" disabled>Select type</option>
                      {enquiryTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                    <label className="float-label" htmlFor="etype">Enquiry Type *</label>
                  </div>
                  <div className="float-group">
                    <textarea id="msg" placeholder=" " value={form.message} onChange={set('message')} required />
                    <label className="float-label" htmlFor="msg">Your Message *</label>
                  </div>
                  <button type="submit" className="btn btn-teal btn-full btn-lg" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending…' : 'Send Enquiry →'}
                  </button>
                  <p className="form-note">We respond within 24 business hours.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-v4">
        <div className="container">
          <div className="cta-v4-inner">
            <div className="reveal-left">
              <p className="cta-v4-title">Prefer a<br /><em style={{ color: 'var(--gold)' }}>Direct Call?</em></p>
              <p className="cta-v4-sub">{siteData.contact.phones.join(' · ')}</p>
            </div>
            <div className="cta-v4-btns reveal-right">
              <a href={`tel:${siteData.contact.phones[0]?.replace(/\s/g, '')}`} className="btn btn-teal btn-lg">Call Now</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
