'use client';
import { useState } from 'react';
import siteData from '@/data/site.json';

const { contact } = siteData;

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'Project Enquiry',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const enquiryTypes = [
    'Project Enquiry',
    'Service Enquiry',
    'Quotation Request',
    'Manpower Supply',
    'Career Enquiry',
    'Other',
  ];

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('sent');
        setForm({ name: '', email: '', phone: '', type: 'Project Enquiry', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-tag">Reach Us</span>
          <h1>Contact SSB Group</h1>
          <p>Get in touch for project enquiries, quotations, or general information.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">
          {/* Info Cards */}
          <div className="contact-info">
            <div className="contact-card">
              <h3>Address</h3>
              <p>{contact.address}</p>
            </div>
            <div className="contact-card">
              <h3>Phone</h3>
              <p><a href={`tel:${contact.phones[0].replace(/\s/g,'')}`}>{contact.phones[0]}</a></p>
              <p><a href={`tel:${contact.phones[1].replace(/\s/g,'')}`}>{contact.phones[1]}</a></p>
            </div>
            <div className="contact-card">
              <h3>Email</h3>
              <p><a href={`mailto:${contact.email}`}>{contact.email}</a></p>
            </div>
            <div className="contact-card">
              <h3>Hours</h3>
              <p>{contact.hours}</p>
            </div>
            <a
              href={`https://wa.me/${contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-teal whatsapp-cta"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Enquiry Form */}
          <div className="contact-form-wrap">
            <h2>Send an Enquiry</h2>
            {status === 'sent' ? (
              <div className="form-success">
                Thank you! We'll get back to you within 24 hours.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="type">Enquiry Type</label>
                  <select
                    id="type"
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                  >
                    {enquiryTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>
                {status === 'error' && (
                  <p className="form-error">Something went wrong. Please try again.</p>
                )}
                <button type="submit" className="btn-teal" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Send Enquiry'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {contact.mapEmbed && (
        <section className="map-section">
          <iframe
            src={contact.mapEmbed}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
      )}
    </>
  );
}
