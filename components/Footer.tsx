import Link from 'next/link';
import siteData from '@/data/site.json';

const { contact } = siteData;

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="logo">
            <span className="logo-mark">S</span>
            <span className="logo-text">SSB GROUP</span>
          </div>
          <p className="footer-tagline">Promoters · Engineers · Contractors</p>
          <p className="footer-desc">
            One of the most rapidly growing construction organizations in the NCR Area — Delhi, Haryana, Rajasthan, U.P.
          </p>
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
          <h4>Contact</h4>
          <address>
            <p>{contact.address}</p>
            <p>
              <a href={`tel:${contact.phones[0].replace(/\s/g,'')}`}>{contact.phones[0]}</a>
            </p>
            <p>
              <a href={`tel:${contact.phones[1].replace(/\s/g,'')}`}>{contact.phones[1]}</a>
            </p>
            <p>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
            <p>{contact.hours}</p>
          </address>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} SSB Group. All rights reserved.</p>
          <p>
            <a
              href={`https://wa.me/${contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-link"
            >
              WhatsApp Us
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
