'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-topbar">
        <div className="container topbar-inner">
          <span className="topbar-pill">NCR Construction Specialists</span>
          <div className="topbar-contact">
            <a href="tel:+917017430338">+91 7017430338</a>
            <span className="topbar-sep">·</span>
            <a href="tel:+919540989900">+91 9540989900</a>
          </div>
        </div>
      </div>

      <div className="header-main">
        <div className="container header-inner">
          <Link href="/" className="logo">
            <span className="logo-mark">S</span>
            <span className="logo-text">SSB GROUP</span>
          </Link>

          <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
            <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
            <Link href="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
            <Link href="/testimonials" onClick={() => setMenuOpen(false)}>Testimonials</Link>
            <Link href="/careers" onClick={() => setMenuOpen(false)}>Careers</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </nav>

          <div className="header-actions">
            <Link href="/contact" className="btn-teal">Get a Quote</Link>
            <button
              className="hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
