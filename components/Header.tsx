'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        {/* Topbar */}
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

        {/* Main nav bar */}
        <div className="header-main">
          <div className="container header-inner">
            <Link href="/" className="logo" onClick={close}>
              <span className="logo-mark">S</span>
              <span className="logo-text">SSB GROUP</span>
            </Link>

            {/* Desktop nav — hidden on mobile */}
            <nav className="desktop-nav" aria-label="Main navigation">
              {navLinks.map((l) => (
                <Link key={l.href} href={l.href} className="desktop-nav-link">
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="header-actions">
              <Link href="/contact" className="btn-teal header-cta">Get a Quote</Link>
              <button
                className={`hamburger${menuOpen ? ' is-open' : ''}`}
                onClick={() => setMenuOpen((v) => !v)}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile overlay — closes menu on tap */}
      {menuOpen && (
        <div className="mob-overlay" onClick={close} aria-hidden="true" />
      )}

      {/* Mobile nav drawer */}
      <nav
        className={`mob-nav${menuOpen ? ' mob-nav-open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <div className="mob-nav-header">
          <div className="mob-nav-brand">
            <span className="mob-nav-mark">S</span>
            <span className="mob-nav-title">SSB GROUP</span>
          </div>
          <button className="mob-nav-close" onClick={close} aria-label="Close menu">
            ✕
          </button>
        </div>

        <div className="mob-nav-links">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="mob-nav-link" onClick={close}>
              {l.label}
            </Link>
          ))}
        </div>

        <div className="mob-nav-footer">
          <Link href="/contact" className="btn-teal mob-nav-cta" onClick={close}>
            Get a Free Quote
          </Link>
          <div className="mob-nav-contact">
            <a href="tel:+917017430338">+91 7017430338</a>
            <a href="tel:+919540989900">+91 9540989900</a>
          </div>
        </div>
      </nav>
    </>
  );
}
