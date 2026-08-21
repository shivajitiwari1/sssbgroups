import Link from 'next/link';
import siteData from '@/data/site.json';

const { contact } = siteData;

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="footer-logo-mark">S</span>
            <div>
              <strong className="footer-logo-name">SSB GROUP</strong>
              <span className="footer-logo-sub">Promoters · Engineers · Contractors</span>
            </div>
          </div>
          <p className="footer-desc">
            One of the most rapidly growing construction organizations in the NCR Area — Delhi, Haryana, Rajasthan, U.P.
          </p>
          <a
            href={`https://wa.me/${contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-whatsapp"
          >
            <span>💬</span> WhatsApp Us
          </a>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/testimonials">Testimonials</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact Us</h4>
          <address>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">📍</span>
              <p>{contact.address}</p>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">📞</span>
              <div>
                <a href={`tel:${contact.phones[0].replace(/\s/g,'')}`}>{contact.phones[0]}</a>
                <br />
                <a href={`tel:${contact.phones[1].replace(/\s/g,'')}`}>{contact.phones[1]}</a>
              </div>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">✉️</span>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">🕐</span>
              <p>{contact.hours}</p>
            </div>
          </address>
        </div>
      </div>

      <div className="footer-divider-line" />

      {/* Marquee */}
      <div className="marquee-strip">
        <div className="marquee-track">
          {Array.from({ length: 2 }, () =>
            ['Delhi NCR', 'Haryana', 'Rajasthan', 'Uttar Pradesh', 'ISO Certified', 'RERA Compliant', 'Turnkey Projects', 'Since 2008']
          ).flat().map((item, i) => (
            <span key={i} className="marquee-item">{item}</span>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>&copy; {new Date().getFullYear()} SSB Group. All rights reserved.</p>
          <p className="footer-bottom-right">Built with ❤️ for NCR&apos;s construction industry</p>
        </div>
      </div>
    </footer>
  );
}
