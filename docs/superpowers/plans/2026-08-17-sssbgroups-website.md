# SSB Groups Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the SSB Groups construction company website at `E:\Demo Website\sssbgroups` by copying and adapting the `E:\Demo Website\oasis-nextjs` template.

**Architecture:** Copy-and-adapt strategy — duplicate oasis-nextjs file structure, replace all content/branding for SSB Groups (construction company), swap color scheme to charcoal+orange+amber, replace fonts to Barlow Condensed+Inter. Keep all API routes, admin panel, and component structure identical where possible to minimise risk.

**Tech Stack:** Next.js 14.2.0 (App Router), TypeScript, Pure CSS, Google Fonts (Barlow Condensed + Inter), file-system JSON data store.

**Spec:** `E:\Demo Website\sssbgroups\docs\superpowers\specs\2026-08-17-ssbgroups-website-design.md`

## Global Constraints

- Next.js 14.2.0 exactly (same as oasis)
- No UI library, no CSS-in-JS — pure CSS only
- All site content lives in `data/site.json`; never hardcode content in pages
- Admin credentials: `admin` / `ssb@2025`, sessionSecret: `ssb-secret-key-2025`
- Contact: H.N. 11/356 B, Lalita Park, Laxmi Nagar, Delhi 110092 | +91 7017430338 | +91 9540989900 | info@ssbgroups.in
- WhatsApp number: `917017430338`
- All TypeScript — no `.js` page/component files
- Target directory: `E:\Demo Website\sssbgroups`

---

### Task 1: Scaffold & Config

**Files:**
- Create: `package.json`
- Create: `next.config.js`
- Create: `tsconfig.json`

**Interfaces:**
- Produces: runnable Next.js project shell; `npm run dev` starts on port 3000

- [ ] **Step 1: Create `package.json`**

```json
{
  "name": "sssbgroups",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "typescript": "^5"
  }
}
```

- [ ] **Step 2: Create `next.config.js`**

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: []
  }
}

module.exports = nextConfig
```

- [ ] **Step 3: Create `tsconfig.json`**

```json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

- [ ] **Step 4: Install dependencies**

Run in `E:\Demo Website\sssbgroups`:
```bash
npm install
```

Expected: `node_modules` created, no errors.

- [ ] **Step 5: Verify dev server starts**

```bash
npm run dev
```

Expected: "ready — started server on 0.0.0.0:3000" (will error about missing app directory — that's fine at this stage, stop with Ctrl+C).

---

### Task 2: Data Files

**Files:**
- Create: `data/site.json`
- Create: `data/admin.json`
- Create: `data/enquiries.json`

**Interfaces:**
- Produces: typed data store consumed by all pages and API routes
- `site.json` shape: `{ hero, stats, services, about, mission, vision, leadership, values, projects, testimonials, whyUs, contact }`
- `admin.json` shape: `{ username, password, sessionSecret }`
- `enquiries.json` shape: `[]` (empty array initially)

- [ ] **Step 1: Create `data/site.json`**

```json
{
  "hero": {
    "badge": "Promoters · Engineers · Contractors",
    "title": "Turning Vision into Realty",
    "subtitle": "Your Vision, Our Expertise",
    "description": "One of the most rapidly growing & professionally managed construction organizations in the NCR Area — Delhi, Haryana, Rajasthan, U.P.",
    "cta1": { "label": "View Our Portfolio", "href": "/projects" },
    "cta2": { "label": "Contact Us", "href": "/contact" }
  },
  "stats": [
    { "value": 15, "suffix": "+", "label": "Years Experience" },
    { "value": 50, "suffix": "+", "label": "Projects Completed" },
    { "value": 100, "suffix": "+", "label": "Clients Served" },
    { "value": 4, "suffix": "", "label": "States Covered" }
  ],
  "services": [
    {
      "icon": "🏗️",
      "title": "Structured Organization",
      "description": "Professional team with domain expertise across all areas of construction management."
    },
    {
      "icon": "📐",
      "title": "Design & Engineering",
      "description": "Comprehensive architectural and structural engineering design services."
    },
    {
      "icon": "🧱",
      "title": "Civil Works",
      "description": "Reinforced cement concrete, masonry, and full-scope civil construction."
    },
    {
      "icon": "👷",
      "title": "Manpower Supply",
      "description": "Flexible, skilled workforce provision scaled to project requirements."
    },
    {
      "icon": "🛠️",
      "title": "Project Support",
      "description": "End-to-end project support and turnkey execution within stipulated timelines."
    }
  ],
  "about": {
    "heading": "About SSB Group",
    "description1": "SSB GROUP is one of the most rapidly growing & professionally managed organizations in the NCR Area, with extensive experience delivering turnkey construction projects across Delhi, Haryana, Rajasthan, and U.P.",
    "description2": "We prioritize operational flexibility, client-specific solutions, and on-schedule delivery — combining professional expertise with rigorous quality control at every stage.",
    "pillars": [
      { "title": "Quality", "description": "Rigorous quality control at every construction stage." },
      { "title": "Transparency", "description": "Clear communication and honest project reporting." },
      { "title": "On-Time Delivery", "description": "Committed to timelines, no exceptions." },
      { "title": "Client Focus", "description": "Tailored solutions for every client's unique vision." }
    ]
  },
  "mission": "To provide professional, systematized construction with quality control delivered within stipulated timeframes.",
  "vision": "To be the most trusted construction partner across North India — known for expertise, integrity, and flawless execution.",
  "leadership": [
    {
      "name": "R. K. Gupta",
      "role": "Director",
      "bio": "Leads SSB Group's strategic vision and client relationships with decades of construction industry experience."
    },
    {
      "name": "Deepak Srivastava",
      "role": "Director",
      "bio": "Oversees engineering operations and project delivery across all active sites."
    },
    {
      "name": "Mukesh Kumar",
      "role": "Director",
      "bio": "Manages manpower, procurement, and on-ground execution across NCR region projects."
    }
  ],
  "values": [
    { "icon": "⚙️", "title": "Engineering Excellence", "description": "Precision in every structure we build." },
    { "icon": "🤝", "title": "Client Partnership", "description": "Your success is our project milestone." },
    { "icon": "📋", "title": "Accountability", "description": "We own every outcome, on every project." },
    { "icon": "⏱️", "title": "Timely Delivery", "description": "Deadlines are commitments, not targets." },
    { "icon": "🏆", "title": "Quality Assurance", "description": "ISO-grade standards across all civil works." },
    { "icon": "🌱", "title": "Sustainable Building", "description": "Responsible construction for the next generation." }
  ],
  "projects": [
    {
      "id": "kalka-home",
      "name": "Kalka Home Developers",
      "location": "Faridabad, Haryana",
      "status": "completed",
      "type": "Residential",
      "description": "Full turnkey residential construction delivered on schedule.",
      "highlights": ["Turnkey execution", "On-time delivery", "Residential complex"]
    },
    {
      "id": "sp-gaur-plaza",
      "name": "SP Gaur Plaza",
      "location": "Noida West, U.P.",
      "status": "completed",
      "type": "Commercial",
      "description": "Commercial plaza civil works and structural engineering.",
      "highlights": ["Commercial structure", "RCC framework", "Civil & finishing works"]
    },
    {
      "id": "thd-royal-court",
      "name": "THD Royal Court Phase-I",
      "location": "Neemrana, Rajasthan",
      "status": "completed",
      "type": "Residential",
      "description": "Phase-I of premium residential township in Neemrana.",
      "highlights": ["Township project", "Phase-I delivery", "Multi-block residential"]
    },
    {
      "id": "optus-hometel",
      "name": "Optus Hometel",
      "location": "Vasundhara Nagar, Bhiwadi",
      "status": "completed",
      "type": "Hospitality",
      "description": "Hospitality-grade construction with precision finishing.",
      "highlights": ["Hospitality project", "Premium finishing", "Structural works"]
    },
    {
      "id": "piyush-city",
      "name": "Piyush City",
      "location": "Tatarpur, Bhiwadi",
      "status": "completed",
      "type": "Residential",
      "description": "Large-scale residential township civil construction.",
      "highlights": ["Township scale", "Multi-phase delivery", "Civil works"]
    },
    {
      "id": "thd-status-residency",
      "name": "THD Status Residency",
      "location": "Bhiwadi, Rajasthan",
      "status": "completed",
      "type": "Residential",
      "description": "Premium residential complex structural and finishing works.",
      "highlights": ["Residential complex", "Structural RCC", "Interior finishing"]
    }
  ],
  "testimonials": [
    {
      "id": 1,
      "name": "Project Manager, Kalka Developers",
      "rating": 5,
      "text": "SSB Group delivered the entire project on time with zero quality compromises. Highly professional team.",
      "approved": true
    },
    {
      "id": 2,
      "name": "Site Director, THD Royal Court",
      "rating": 5,
      "text": "Their manpower management and civil execution were exceptional. We will continue working with SSB Group.",
      "approved": true
    },
    {
      "id": 3,
      "name": "Owner, Optus Hometel",
      "rating": 5,
      "text": "From design to finishing — SSB Group handled it all with great professionalism and attention to detail.",
      "approved": true
    },
    {
      "id": 4,
      "name": "Developer, Piyush City",
      "rating": 5,
      "text": "Reliable, skilled, and always within budget. SSB Group is our go-to construction partner for NCR projects.",
      "approved": true
    }
  ],
  "whyUs": [
    { "icon": "🏗️", "title": "Turnkey Expertise", "description": "Full project lifecycle from design to handover." },
    { "icon": "📍", "title": "NCR Specialists", "description": "Deep local knowledge across Delhi, Haryana, Rajasthan, U.P." },
    { "icon": "👷", "title": "Skilled Workforce", "description": "Flexible manpower scaled to your project's needs." },
    { "icon": "⏱️", "title": "On-Time Delivery", "description": "We've never missed a committed deadline." },
    { "icon": "💰", "title": "Cost Efficiency", "description": "Competitive pricing without compromising quality." },
    { "icon": "🤝", "title": "Trusted Partners", "description": "50+ clients who keep coming back to us." }
  ],
  "contact": {
    "address": "H.N. 11/356 B, Lalita Park, Laxmi Nagar, Delhi 110092",
    "phones": ["+91 7017430338", "+91 9540989900"],
    "email": "info@ssbgroups.in",
    "whatsapp": "917017430338",
    "hours": "Mon–Sat: 9:00 AM – 6:00 PM",
    "mapEmbed": "",
    "social": {}
  }
}
```

- [ ] **Step 2: Create `data/admin.json`**

```json
{
  "username": "admin",
  "password": "ssb@2025",
  "sessionSecret": "ssb-secret-key-2025"
}
```

- [ ] **Step 3: Create `data/enquiries.json`**

```json
[]
```

---

### Task 3: Global CSS

**Files:**
- Create: `app/globals.css`

**Interfaces:**
- Produces: all CSS custom properties and utility classes consumed by every page
- CSS variable naming: `--charcoal`, `--orange`, `--amber` (replaces oasis `--navy`, `--teal`, `--gold`)
- Button classes kept identical to oasis: `.btn-teal`, `.btn-navy`, `.btn-ghost` (only variable values change)

- [ ] **Step 1: Create `app/globals.css`**

Copy the full oasis `globals.css` (523 lines), then apply these substitutions:

Replace the `:root` block entirely with:

```css
:root {
  --charcoal:   #1c2128;
  --charcoal2:  #2d3748;
  --charcoal3:  #4a5568;

  --orange:         #e85d04;
  --orange-hover:   #c44f03;
  --orange-light:   #fff4ed;
  --orange-overlay: rgba(232, 93, 4, 0.12);

  --amber:        #f59e0b;
  --amber-light:  #fef3c7;
  --amber-bg:     #fffbeb;
  --amber-overlay: rgba(245, 158, 11, 0.15);

  --white:      #ffffff;
  --off-white:  #f8f6f3;
  --light-gray: #f0eeea;
  --text:       #1a1a1a;
  --muted:      #6b7280;
  --faint:      #9ca3af;
  --border:     #e2ddd6;
  --border2:    #d1d5db;

  /* Aliases so existing oasis class names still resolve */
  --navy:    var(--charcoal);
  --navy2:   var(--charcoal2);
  --navy3:   var(--charcoal3);
  --teal:    var(--orange);
  --teal-hover: var(--orange-hover);
  --teal-light: var(--orange-light);
  --teal-overlay: var(--orange-overlay);
  --gold:    var(--amber);
  --gold-light: var(--amber-light);
  --gold-bg: var(--amber-bg);
}
```

Replace the Google Fonts `@import` line at the top:

Old:
```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap');
```

New:
```css
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');
```

Replace all occurrences of `'Cormorant Garamond', serif` with `'Barlow Condensed', sans-serif`.

Append these new classes at the end of the file:

```css
/* ── Services Grid ── */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.service-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  transition: box-shadow 0.2s, transform 0.2s;
}

.service-card:hover {
  box-shadow: 0 8px 32px rgba(0,0,0,0.10);
  transform: translateY(-4px);
}

.service-card .service-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.service-card h3 {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--charcoal);
  margin-bottom: 0.75rem;
}

.service-card p {
  color: var(--muted);
  font-size: 0.95rem;
  line-height: 1.6;
}

/* ── Testimonials Grid ── */
.testi-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.testi-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 2rem;
}

.testi-card .stars {
  color: var(--amber);
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.testi-card blockquote {
  color: var(--text);
  font-size: 1rem;
  line-height: 1.7;
  margin: 0 0 1.25rem;
  font-style: italic;
}

.testi-card .testi-author {
  font-weight: 600;
  color: var(--charcoal);
  font-size: 0.9rem;
}
```

- [ ] **Step 2: Verify CSS file exists and is non-empty**

```bash
ls -la "E:/Demo Website/sssbgroups/app/globals.css"
```

Expected: file size > 10 KB.

---

### Task 4: Root Layout

**Files:**
- Create: `app/layout.tsx`

**Interfaces:**
- Produces: `--font-heading` and `--font-body` CSS variables; `<html>` wrapper with class names applied
- Consumes: `components/ConditionalLayout.tsx` (Task 5)

- [ ] **Step 1: Create `app/layout.tsx`**

```tsx
import type { Metadata } from 'next';
import { Barlow_Condensed, Inter } from 'next/font/google';
import './globals.css';
import ConditionalLayout from '@/components/ConditionalLayout';

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-heading',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'SSB Group — Promoters, Engineers & Contractors | NCR',
  description:
    'SSB Group is one of the most rapidly growing construction organizations in the NCR Area — Delhi, Haryana, Rajasthan, U.P. Turnkey projects, civil works, manpower supply.',
  keywords: 'construction company NCR, civil works Delhi, turnkey construction Haryana, building contractors Rajasthan',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${barlowCondensed.variable} ${inter.variable}`}>
      <body>
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
```

---

### Task 5: Shared Components

**Files:**
- Create: `components/Header.tsx`
- Create: `components/Footer.tsx`
- Create: `components/Counter.tsx`
- Create: `components/ConditionalLayout.tsx`
- Create: `components/useAdminAuth.ts`
- Create: `components/AdminShell.tsx`

**Interfaces:**
- `Counter` props: `{ target: number; suffix?: string }`
- `ConditionalLayout` props: `{ children: React.ReactNode }`
- `AdminShell` props: `{ children: React.ReactNode; title: string }`
- `useAdminAuth`: hook, returns nothing, redirects to `/admin/login` if unauthorized

- [ ] **Step 1: Create `components/Counter.tsx`** (copy verbatim from oasis)

```tsx
'use client';
import { useEffect, useRef, useState } from 'react';

interface CounterProps {
  target: number;
  suffix?: string;
}

export default function Counter({ target, suffix = '' }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(interval);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}
```

- [ ] **Step 2: Create `components/ConditionalLayout.tsx`** (copy verbatim from oasis)

```tsx
'use client';
import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');

  return (
    <>
      {!isAdmin && <Header />}
      <main>{children}</main>
      {!isAdmin && <Footer />}
    </>
  );
}
```

- [ ] **Step 3: Create `components/useAdminAuth.ts`** (copy verbatim from oasis)

```ts
'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function useAdminAuth() {
  const router = useRouter();

  useEffect(() => {
    fetch('/api/admin/check-auth')
      .then((res) => {
        if (!res.ok) {
          router.push('/admin/login');
        }
      })
      .catch(() => {
        router.push('/admin/login');
      });
  }, [router]);
}
```

- [ ] **Step 4: Create `components/Header.tsx`**

```tsx
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
```

- [ ] **Step 5: Create `components/Footer.tsx`**

```tsx
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
```

- [ ] **Step 6: Create `components/AdminShell.tsx`**

```tsx
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface AdminShellProps {
  children: React.ReactNode;
  title: string;
}

export default function AdminShell({ children, title }: AdminShellProps) {
  const pathname = usePathname();

  const navLinks = [
    { href: '/admin/dashboard', label: 'Dashboard' },
    { href: '/admin/enquiries', label: 'Enquiries' },
    { href: '/admin/site/hero', label: 'Hero' },
    { href: '/admin/site/stats', label: 'Stats' },
    { href: '/admin/site/services', label: 'Services' },
    { href: '/admin/site/testimonials', label: 'Testimonials' },
    { href: '/admin/site/contact', label: 'Contact' },
  ];

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <div className="admin-logo">
          <span className="logo-mark" style={{ background: 'var(--orange)' }}>S</span>
          <span>SSB Admin</span>
        </div>
        <nav className="admin-nav">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? 'active' : ''}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <form action="/api/admin/logout" method="POST" className="admin-logout">
          <button type="submit">Logout</button>
        </form>
      </aside>
      <div className="admin-content">
        <div className="admin-topbar">
          <h1>{title}</h1>
        </div>
        <div className="admin-body">{children}</div>
      </div>
    </div>
  );
}
```

---

### Task 6: Home Page

**Files:**
- Create: `app/page.tsx`

**Interfaces:**
- Consumes: `data/site.json` — `hero`, `stats`, `services` (first 3), `projects` (first 3), `testimonials` (approved), `whyUs`
- Consumes: `components/Counter` — `{ target: number; suffix?: string }`

- [ ] **Step 1: Create `app/page.tsx`**

```tsx
import Link from 'next/link';
import Counter from '@/components/Counter';
import siteData from '@/data/site.json';

export default function HomePage() {
  const { hero, stats, services, projects, testimonials, whyUs } = siteData;
  const featuredProjects = projects.slice(0, 3);
  const featuredServices = services.slice(0, 3);
  const approvedTestimonials = testimonials.filter((t) => t.approved).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-content">
            <span className="hero-badge">{hero.badge}</span>
            <h1 className="hero-title">{hero.title}</h1>
            <p className="hero-subtitle">{hero.subtitle}</p>
            <p className="hero-desc">{hero.description}</p>
            <div className="hero-actions">
              <Link href={hero.cta1.href} className="btn-teal">{hero.cta1.label}</Link>
              <Link href={hero.cta2.href} className="btn-ghost">{hero.cta2.label}</Link>
            </div>
          </div>
          <div className="hero-cards">
            {featuredProjects.map((p) => (
              <div key={p.id} className="hero-card">
                <span className="hero-card-type">{p.type}</span>
                <h3>{p.name}</h3>
                <p>{p.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-strip">
        <div className="container stats-grid">
          {stats.map((s) => (
            <div key={s.label} className="stat-item">
              <span className="stat-number">
                <Counter target={s.value} suffix={s.suffix} />
              </span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">What We Do</span>
            <h2>Our Services</h2>
            <p>Comprehensive construction services delivered by expert professionals.</p>
          </div>
          <div className="services-grid">
            {featuredServices.map((s) => (
              <div key={s.title} className="service-card">
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link href="/services" className="btn-outline">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Work</span>
            <h2>Featured Projects</h2>
            <p>A selection of successfully completed projects across NCR.</p>
          </div>
          <div className="projects-grid">
            {featuredProjects.map((p) => (
              <div key={p.id} className="project-card">
                <div className="project-card-header">
                  <span className="project-type">{p.type}</span>
                  <span className="project-status">{p.status}</span>
                </div>
                <h3>{p.name}</h3>
                <p className="project-location">{p.location}</p>
                <p className="project-desc">{p.description}</p>
                <ul className="project-highlights">
                  {p.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link href="/projects" className="btn-outline">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Why SSB Group</span>
            <h2>Why Choose Us</h2>
            <p>The values and capabilities that set us apart.</p>
          </div>
          <div className="why-grid">
            {whyUs.map((w) => (
              <div key={w.title} className="why-card">
                <span className="why-icon">{w.icon}</span>
                <h3>{w.title}</h3>
                <p>{w.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Snippet */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Client Feedback</span>
            <h2>What Our Clients Say</h2>
          </div>
          <div className="testi-grid">
            {approvedTestimonials.map((t) => (
              <div key={t.id} className="testi-card">
                <div className="stars">{'★'.repeat(t.rating)}</div>
                <blockquote>"{t.text}"</blockquote>
                <p className="testi-author">— {t.name}</p>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link href="/testimonials" className="btn-outline">Read All Testimonials</Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container cta-inner">
          <h2>Ready to Start Your Project?</h2>
          <p>Get in touch with SSB Group for a free consultation and quote.</p>
          <div className="cta-actions">
            <Link href="/contact" className="btn-teal">Get a Quote</Link>
            <a
              href={`https://wa.me/${siteData.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
```

---

### Task 7: About Page

**Files:**
- Create: `app/about/page.tsx`

**Interfaces:**
- Consumes: `data/site.json` — `about`, `mission`, `vision`, `leadership`, `values`, `stats`

- [ ] **Step 1: Create `app/about/page.tsx`**

```tsx
import Link from 'next/link';
import Counter from '@/components/Counter';
import siteData from '@/data/site.json';

export const metadata = {
  title: 'About SSB Group | NCR Construction Company',
};

export default function AboutPage() {
  const { about, mission, vision, leadership, values, stats } = siteData;

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="section-tag">Who We Are</span>
          <h1>{about.heading}</h1>
          <p>{about.description1}</p>
        </div>
      </section>

      {/* About Body */}
      <section className="section">
        <div className="container about-grid">
          <div className="about-text">
            <p>{about.description1}</p>
            <p>{about.description2}</p>
            <div className="about-pillars">
              {about.pillars.map((p) => (
                <div key={p.title} className="pillar-item">
                  <h4>{p.title}</h4>
                  <p>{p.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="about-stats">
            {stats.map((s) => (
              <div key={s.label} className="stat-box">
                <span className="stat-number">
                  <Counter target={s.value} suffix={s.suffix} />
                </span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section section-alt">
        <div className="container mv-grid">
          <div className="mv-card">
            <h2>Our Mission</h2>
            <p>{mission}</p>
          </div>
          <div className="mv-card">
            <h2>Our Vision</h2>
            <p>{vision}</p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Leadership</span>
            <h2>Meet Our Directors</h2>
          </div>
          <div className="leadership-grid">
            {leadership.map((l) => (
              <div key={l.name} className="leader-card">
                <div className="leader-avatar">{l.name.charAt(0)}</div>
                <h3>{l.name}</h3>
                <span className="leader-role">{l.role}</span>
                <p>{l.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">What We Stand For</span>
            <h2>Core Values</h2>
          </div>
          <div className="values-grid">
            {values.map((v) => (
              <div key={v.title} className="value-card">
                <span className="value-icon">{v.icon}</span>
                <h3>{v.title}</h3>
                <p>{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container cta-inner">
          <h2>Let's Build Together</h2>
          <p>Contact us to discuss your next construction project.</p>
          <Link href="/contact" className="btn-teal">Get in Touch</Link>
        </div>
      </section>
    </>
  );
}
```

---

### Task 8: Services Page

**Files:**
- Create: `app/services/page.tsx`

**Interfaces:**
- Consumes: `data/site.json` — `services` array `{ icon, title, description }`
- This page replaces oasis's `/nri` page entirely

- [ ] **Step 1: Create `app/services/page.tsx`**

```tsx
import Link from 'next/link';
import siteData from '@/data/site.json';

export const metadata = {
  title: 'Our Services | SSB Group Construction',
};

export default function ServicesPage() {
  const { services } = siteData;

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-tag">What We Offer</span>
          <h1>Our Services</h1>
          <p>
            SSB Group provides end-to-end construction services — from design and engineering to
            civil works, manpower supply, and full turnkey project execution.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-grid">
            {services.map((s) => (
              <div key={s.title} className="service-card">
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Our Approach</h2>
            <p>
              Every project we undertake follows a systematic process — from initial consultation
              through design, execution, quality control, and final handover. We bring structure
              and professionalism to every stage.
            </p>
          </div>
          <div className="process-steps">
            {[
              { step: '01', title: 'Consultation', desc: 'Understand client requirements, site conditions, and project scope.' },
              { step: '02', title: 'Design & Planning', desc: 'Architectural and structural design with detailed project timeline.' },
              { step: '03', title: 'Execution', desc: 'On-site civil works with skilled manpower and quality control.' },
              { step: '04', title: 'Handover', desc: 'Final inspection, snag resolution, and project handover on schedule.' },
            ].map((p) => (
              <div key={p.step} className="process-step">
                <span className="step-number">{p.step}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-inner">
          <h2>Need a Service Quote?</h2>
          <p>Contact us today for a free consultation on your project.</p>
          <Link href="/contact" className="btn-teal">Get a Quote</Link>
        </div>
      </section>
    </>
  );
}
```

---

### Task 9: Projects Page

**Files:**
- Create: `app/projects/page.tsx`

**Interfaces:**
- Consumes: `data/site.json` — `projects` array `{ id, name, location, status, type, description, highlights }`

- [ ] **Step 1: Create `app/projects/page.tsx`**

```tsx
import Link from 'next/link';
import siteData from '@/data/site.json';

export const metadata = {
  title: 'Projects | SSB Group Portfolio',
};

export default function ProjectsPage() {
  const { projects } = siteData;

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-tag">Our Portfolio</span>
          <h1>Completed Projects</h1>
          <p>
            A showcase of successfully delivered construction projects across NCR —
            residential townships, commercial complexes, and hospitality properties.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="projects-grid projects-grid-full">
            {projects.map((p) => (
              <div key={p.id} className="project-card">
                <div className="project-card-header">
                  <span className="project-type">{p.type}</span>
                  <span className="project-status project-status-completed">{p.status}</span>
                </div>
                <h3>{p.name}</h3>
                <p className="project-location">{p.location}</p>
                <p className="project-desc">{p.description}</p>
                <ul className="project-highlights">
                  {p.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-inner">
          <h2>Start Your Project with SSB Group</h2>
          <p>Join 100+ clients who trust us with their construction needs.</p>
          <Link href="/contact" className="btn-teal">Get a Quote</Link>
        </div>
      </section>
    </>
  );
}
```

---

### Task 10: Testimonials Page

**Files:**
- Create: `app/testimonials/page.tsx`

**Interfaces:**
- Consumes: `data/site.json` — `testimonials` array `{ id, name, rating, text, approved }`
- Shows only approved testimonials

- [ ] **Step 1: Create `app/testimonials/page.tsx`**

```tsx
import siteData from '@/data/site.json';

export const metadata = {
  title: 'Testimonials | SSB Group',
};

export default function TestimonialsPage() {
  const approved = siteData.testimonials.filter((t) => t.approved);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-tag">Client Feedback</span>
          <h1>What Our Clients Say</h1>
          <p>
            Hear from the developers, site directors, and project managers who have worked with SSB Group.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="testi-grid">
            {approved.map((t) => (
              <div key={t.id} className="testi-card">
                <div className="stars">{'★'.repeat(t.rating)}</div>
                <blockquote>"{t.text}"</blockquote>
                <p className="testi-author">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
```

---

### Task 11: Careers Page

**Files:**
- Create: `app/careers/page.tsx`

**Interfaces:**
- Consumes: no dynamic data; all job listings hardcoded (static for SSB Groups construction roles)

- [ ] **Step 1: Create `app/careers/page.tsx`**

```tsx
export const metadata = {
  title: 'Careers | SSB Group',
};

const jobs = [
  {
    title: 'Site Engineer',
    type: 'Full Time',
    location: 'NCR (Delhi / Haryana / U.P.)',
    description:
      'Supervise on-site construction activities, coordinate with subcontractors, ensure quality standards and timeline compliance.',
    requirements: ['B.Tech / Diploma in Civil Engineering', '2–5 years site experience', 'Proficient in AutoCAD'],
  },
  {
    title: 'Civil Project Manager',
    type: 'Full Time',
    location: 'Delhi / Noida',
    description:
      'Lead end-to-end project delivery for residential and commercial construction. Manage budgets, schedules, and client communications.',
    requirements: ['B.Tech Civil Engineering', '7+ years project management experience', 'PMP certification preferred'],
  },
  {
    title: 'Quantity Surveyor',
    type: 'Full Time',
    location: 'Delhi NCR',
    description:
      'Prepare BOQs, manage procurement, track material consumption, and control project costs.',
    requirements: ['B.Tech / Diploma Civil or relevant field', '3+ years QS experience', 'Proficiency in estimation software'],
  },
  {
    title: 'Safety Officer',
    type: 'Full Time',
    location: 'Multiple Sites — NCR',
    description:
      'Implement and monitor HSE policies across active construction sites. Conduct safety audits and training.',
    requirements: ['Diploma/Degree in Safety Management', 'NEBOSH / IOSH certification preferred', '3+ years on-site safety experience'],
  },
  {
    title: 'Skilled Construction Workers',
    type: 'Contract / Full Time',
    location: 'NCR Region',
    description:
      'Masons, carpenters, bar benders, electricians, and general construction labour for ongoing projects.',
    requirements: ['Relevant trade skills', 'Prior construction site experience', 'Physically fit for site work'],
  },
];

export default function CareersPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-tag">Join Our Team</span>
          <h1>Careers at SSB Group</h1>
          <p>
            We're always looking for skilled professionals and tradespeople to join our growing
            team across NCR construction sites.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="jobs-list">
            {jobs.map((job) => (
              <div key={job.title} className="job-card">
                <div className="job-header">
                  <div>
                    <h3>{job.title}</h3>
                    <div className="job-meta">
                      <span className="job-type">{job.type}</span>
                      <span className="job-location">{job.location}</span>
                    </div>
                  </div>
                  <a
                    href={`mailto:info@ssbgroups.in?subject=Application: ${job.title}`}
                    className="btn-teal"
                  >
                    Apply Now
                  </a>
                </div>
                <p className="job-desc">{job.description}</p>
                <ul className="job-requirements">
                  {job.requirements.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container cta-inner">
          <h2>Don't See Your Role?</h2>
          <p>
            We're always open to talented professionals. Send your CV to{' '}
            <a href="mailto:info@ssbgroups.in">info@ssbgroups.in</a> with the subject
            "Open Application".
          </p>
        </div>
      </section>
    </>
  );
}
```

---

### Task 12: Contact Page

**Files:**
- Create: `app/contact/page.tsx`

**Interfaces:**
- Consumes: `data/site.json` — `contact` object `{ address, phones[], email, whatsapp, hours, mapEmbed }`
- Posts to: `POST /api/contact`

- [ ] **Step 1: Create `app/contact/page.tsx`**

```tsx
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
```

---

### Task 13: API Routes

**Files:**
- Create: `app/api/contact/route.ts`
- Create: `app/api/admin/login/route.ts`
- Create: `app/api/admin/logout/route.ts`
- Create: `app/api/admin/check-auth/route.ts`
- Create: `app/api/admin/enquiries/route.ts`
- Create: `app/api/admin/site/route.ts`

**Interfaces:**
- `POST /api/contact` — saves enquiry `{ name, email, phone, type, message }` to `enquiries.json`
- `POST /api/admin/login` — sets `admin_token` httpOnly cookie on success
- `POST /api/admin/logout` — clears cookie, redirects to login
- `GET /api/admin/check-auth` — returns 200 if authenticated, 401 otherwise
- `GET /api/admin/enquiries` — returns all enquiries
- `PATCH /api/admin/enquiries` — update enquiry by id
- `DELETE /api/admin/enquiries` — delete enquiry by id
- `GET /api/admin/site?section=X` — returns one section from site.json
- `PUT /api/admin/site` — updates one section in site.json

- [ ] **Step 1: Create `app/api/contact/route.ts`**

```ts
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const enquiriesPath = path.join(process.cwd(), 'data', 'enquiries.json');

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, type, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const enquiries = JSON.parse(fs.readFileSync(enquiriesPath, 'utf-8'));
    const newEnquiry = {
      id: Date.now(),
      name,
      email,
      phone: phone || '',
      type: type || 'General',
      message,
      status: 'new',
      createdAt: new Date().toISOString(),
    };
    enquiries.push(newEnquiry);
    fs.writeFileSync(enquiriesPath, JSON.stringify(enquiries, null, 2));

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const enquiries = JSON.parse(fs.readFileSync(enquiriesPath, 'utf-8'));
    return NextResponse.json(enquiries);
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
```

- [ ] **Step 2: Create `app/api/admin/login/route.ts`**

```ts
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const adminPath = path.join(process.cwd(), 'data', 'admin.json');

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();
    const admin = JSON.parse(fs.readFileSync(adminPath, 'utf-8'));

    if (username === admin.username && password === admin.password) {
      const response = NextResponse.json({ success: true });
      response.cookies.set('admin_token', admin.sessionSecret, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24,
        path: '/',
      });
      return response;
    }

    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
```

- [ ] **Step 3: Create `app/api/admin/logout/route.ts`**

```ts
import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.redirect(new URL('/admin/login', 'http://localhost:3000'));
  response.cookies.delete('admin_token');
  return response;
}
```

- [ ] **Step 4: Create `app/api/admin/check-auth/route.ts`**

```ts
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const adminPath = path.join(process.cwd(), 'data', 'admin.json');

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get('admin_token')?.value;
    const admin = JSON.parse(fs.readFileSync(adminPath, 'utf-8'));

    if (token === admin.sessionSecret) {
      return NextResponse.json({ authenticated: true });
    }

    return NextResponse.json({ authenticated: false }, { status: 401 });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
```

- [ ] **Step 5: Create `app/api/admin/enquiries/route.ts`**

```ts
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const enquiriesPath = path.join(process.cwd(), 'data', 'enquiries.json');
const adminPath = path.join(process.cwd(), 'data', 'admin.json');

function isAuth(req: NextRequest): boolean {
  const token = req.cookies.get('admin_token')?.value;
  const admin = JSON.parse(fs.readFileSync(adminPath, 'utf-8'));
  return token === admin.sessionSecret;
}

export async function GET(req: NextRequest) {
  if (!isAuth(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const enquiries = JSON.parse(fs.readFileSync(enquiriesPath, 'utf-8'));
  return NextResponse.json(enquiries);
}

export async function PATCH(req: NextRequest) {
  if (!isAuth(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { id, updates } = await req.json();
  const enquiries = JSON.parse(fs.readFileSync(enquiriesPath, 'utf-8'));
  const idx = enquiries.findIndex((e: { id: number }) => e.id === id);
  if (idx === -1) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  enquiries[idx] = { ...enquiries[idx], ...updates };
  fs.writeFileSync(enquiriesPath, JSON.stringify(enquiries, null, 2));
  return NextResponse.json({ success: true });
}

export async function DELETE(req: NextRequest) {
  if (!isAuth(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { id } = await req.json();
  const enquiries = JSON.parse(fs.readFileSync(enquiriesPath, 'utf-8'));
  const filtered = enquiries.filter((e: { id: number }) => e.id !== id);
  fs.writeFileSync(enquiriesPath, JSON.stringify(filtered, null, 2));
  return NextResponse.json({ success: true });
}
```

- [ ] **Step 6: Create `app/api/admin/site/route.ts`**

```ts
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const sitePath = path.join(process.cwd(), 'data', 'site.json');
const adminPath = path.join(process.cwd(), 'data', 'admin.json');

function isAuth(req: NextRequest): boolean {
  const token = req.cookies.get('admin_token')?.value;
  const admin = JSON.parse(fs.readFileSync(adminPath, 'utf-8'));
  return token === admin.sessionSecret;
}

export async function GET(req: NextRequest) {
  if (!isAuth(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const section = req.nextUrl.searchParams.get('section');
  const site = JSON.parse(fs.readFileSync(sitePath, 'utf-8'));
  if (section) {
    return NextResponse.json(site[section] ?? null);
  }
  return NextResponse.json(site);
}

export async function PUT(req: NextRequest) {
  if (!isAuth(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { section, data } = await req.json();
  if (!section) return NextResponse.json({ error: 'Missing section' }, { status: 400 });
  const site = JSON.parse(fs.readFileSync(sitePath, 'utf-8'));
  site[section] = data;
  fs.writeFileSync(sitePath, JSON.stringify(site, null, 2));
  return NextResponse.json({ success: true });
}
```

---

### Task 14: Admin Core

**Files:**
- Create: `app/admin/page.tsx`
- Create: `app/admin/login/page.tsx`

**Interfaces:**
- `app/admin/page.tsx` redirects to `/admin/dashboard`
- `app/admin/login/page.tsx` posts to `POST /api/admin/login`

- [ ] **Step 1: Create `app/admin/page.tsx`**

```tsx
import { redirect } from 'next/navigation';

export default function AdminRoot() {
  redirect('/admin/dashboard');
}
```

- [ ] **Step 2: Create `app/admin/login/page.tsx`**

```tsx
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      router.push('/admin/dashboard');
    } else {
      setError('Invalid username or password.');
      setLoading(false);
    }
  }

  return (
    <div className="admin-login-page">
      <div className="admin-login-card">
        <div className="admin-login-logo">
          <span className="logo-mark" style={{ background: 'var(--orange)' }}>S</span>
        </div>
        <h1>SSB Admin Panel</h1>
        <p className="admin-login-hint">Default: admin / ssb@2025</p>
        <form onSubmit={handleSubmit} className="admin-login-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              required
              autoComplete="username"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              required
              autoComplete="current-password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>
          {error && <p className="form-error">{error}</p>}
          <button type="submit" className="btn-teal" disabled={loading}>
            {loading ? 'Signing in…' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
}
```

---

### Task 15: Admin Dashboard

**Files:**
- Create: `app/admin/dashboard/page.tsx`

**Interfaces:**
- Consumes: `useAdminAuth` hook (redirects if unauthorized)
- Consumes: `AdminShell` component
- Fetches enquiry count from `GET /api/admin/enquiries`

- [ ] **Step 1: Create `app/admin/dashboard/page.tsx`**

```tsx
'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import AdminShell from '@/components/AdminShell';
import { useAdminAuth } from '@/components/useAdminAuth';

export default function AdminDashboard() {
  useAdminAuth();
  const [enquiryCount, setEnquiryCount] = useState<number | null>(null);

  useEffect(() => {
    fetch('/api/admin/enquiries')
      .then((r) => r.json())
      .then((data) => setEnquiryCount(Array.isArray(data) ? data.length : 0))
      .catch(() => setEnquiryCount(0));
  }, []);

  const quickLinks = [
    { href: '/admin/enquiries', label: 'Enquiries', count: enquiryCount },
    { href: '/admin/site/hero', label: 'Edit Hero' },
    { href: '/admin/site/stats', label: 'Edit Stats' },
    { href: '/admin/site/services', label: 'Edit Services' },
    { href: '/admin/site/testimonials', label: 'Edit Testimonials' },
    { href: '/admin/site/contact', label: 'Edit Contact' },
  ];

  return (
    <AdminShell title="Dashboard">
      <div className="admin-dashboard">
        <div className="dashboard-stats">
          <div className="dash-stat">
            <span className="dash-stat-number">{enquiryCount ?? '…'}</span>
            <span className="dash-stat-label">Total Enquiries</span>
          </div>
          <div className="dash-stat">
            <span className="dash-stat-number">6</span>
            <span className="dash-stat-label">Projects</span>
          </div>
          <div className="dash-stat">
            <span className="dash-stat-number">5</span>
            <span className="dash-stat-label">Services</span>
          </div>
        </div>
        <div className="dashboard-quick-links">
          <h2>Quick Links</h2>
          <div className="quick-links-grid">
            {quickLinks.map((l) => (
              <Link key={l.href} href={l.href} className="quick-link-card">
                <span>{l.label}</span>
                {l.count !== undefined && (
                  <span className="quick-link-badge">{l.count ?? '…'}</span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </AdminShell>
  );
}
```

---

### Task 16: Admin Enquiries Page

**Files:**
- Create: `app/admin/enquiries/page.tsx`

**Interfaces:**
- Consumes: `GET /api/admin/enquiries`, `PATCH /api/admin/enquiries`, `DELETE /api/admin/enquiries`
- Consumes: `useAdminAuth` hook

- [ ] **Step 1: Create `app/admin/enquiries/page.tsx`**

```tsx
'use client';
import { useEffect, useState } from 'react';
import AdminShell from '@/components/AdminShell';
import { useAdminAuth } from '@/components/useAdminAuth';

interface Enquiry {
  id: number;
  name: string;
  email: string;
  phone: string;
  type: string;
  message: string;
  status: string;
  createdAt: string;
}

export default function AdminEnquiriesPage() {
  useAdminAuth();
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/admin/enquiries')
      .then((r) => r.json())
      .then((data) => {
        setEnquiries(Array.isArray(data) ? data.reverse() : []);
        setLoading(false);
      });
  }, []);

  async function updateStatus(id: number, status: string) {
    await fetch('/api/admin/enquiries', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, updates: { status } }),
    });
    setEnquiries((prev) =>
      prev.map((e) => (e.id === id ? { ...e, status } : e))
    );
  }

  async function deleteEnquiry(id: number) {
    if (!confirm('Delete this enquiry?')) return;
    await fetch('/api/admin/enquiries', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    setEnquiries((prev) => prev.filter((e) => e.id !== id));
  }

  return (
    <AdminShell title="Enquiries">
      {loading ? (
        <p>Loading…</p>
      ) : enquiries.length === 0 ? (
        <p>No enquiries yet.</p>
      ) : (
        <div className="enquiries-table-wrap">
          <table className="enquiries-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Type</th>
                <th>Message</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {enquiries.map((e) => (
                <tr key={e.id} className={`status-${e.status}`}>
                  <td>{new Date(e.createdAt).toLocaleDateString('en-IN')}</td>
                  <td>{e.name}</td>
                  <td><a href={`mailto:${e.email}`}>{e.email}</a></td>
                  <td>{e.phone || '—'}</td>
                  <td>{e.type}</td>
                  <td className="enquiry-message">{e.message}</td>
                  <td>
                    <select
                      value={e.status}
                      onChange={(ev) => updateStatus(e.id, ev.target.value)}
                    >
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="closed">Closed</option>
                    </select>
                  </td>
                  <td>
                    <button
                      className="btn-danger-sm"
                      onClick={() => deleteEnquiry(e.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </AdminShell>
  );
}
```

---

### Task 17: Admin Site Editors

**Files:**
- Create: `app/admin/site/hero/page.tsx`
- Create: `app/admin/site/stats/page.tsx`
- Create: `app/admin/site/services/page.tsx`
- Create: `app/admin/site/testimonials/page.tsx`
- Create: `app/admin/site/contact/page.tsx`

**Interfaces:**
- All pages: `GET /api/admin/site?section=X` to load, `PUT /api/admin/site` to save
- All pages consume `useAdminAuth` and `AdminShell`

- [ ] **Step 1: Create `app/admin/site/hero/page.tsx`**

```tsx
'use client';
import { useEffect, useState } from 'react';
import AdminShell from '@/components/AdminShell';
import { useAdminAuth } from '@/components/useAdminAuth';

export default function AdminHeroPage() {
  useAdminAuth();
  const [hero, setHero] = useState<any>(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch('/api/admin/site?section=hero')
      .then((r) => r.json())
      .then(setHero);
  }, []);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    await fetch('/api/admin/site', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ section: 'hero', data: hero }),
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  if (!hero) return <AdminShell title="Edit Hero"><p>Loading…</p></AdminShell>;

  return (
    <AdminShell title="Edit Hero">
      <form onSubmit={handleSave} className="admin-form">
        {['badge','title','subtitle','description'].map((field) => (
          <div className="form-group" key={field}>
            <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
            {field === 'description' ? (
              <textarea
                rows={3}
                value={hero[field] || ''}
                onChange={(e) => setHero({ ...hero, [field]: e.target.value })}
              />
            ) : (
              <input
                type="text"
                value={hero[field] || ''}
                onChange={(e) => setHero({ ...hero, [field]: e.target.value })}
              />
            )}
          </div>
        ))}
        <h3>CTA 1</h3>
        <div className="form-row">
          <div className="form-group">
            <label>Label</label>
            <input
              type="text"
              value={hero.cta1?.label || ''}
              onChange={(e) => setHero({ ...hero, cta1: { ...hero.cta1, label: e.target.value } })}
            />
          </div>
          <div className="form-group">
            <label>URL</label>
            <input
              type="text"
              value={hero.cta1?.href || ''}
              onChange={(e) => setHero({ ...hero, cta1: { ...hero.cta1, href: e.target.value } })}
            />
          </div>
        </div>
        <h3>CTA 2</h3>
        <div className="form-row">
          <div className="form-group">
            <label>Label</label>
            <input
              type="text"
              value={hero.cta2?.label || ''}
              onChange={(e) => setHero({ ...hero, cta2: { ...hero.cta2, label: e.target.value } })}
            />
          </div>
          <div className="form-group">
            <label>URL</label>
            <input
              type="text"
              value={hero.cta2?.href || ''}
              onChange={(e) => setHero({ ...hero, cta2: { ...hero.cta2, href: e.target.value } })}
            />
          </div>
        </div>
        <button type="submit" className="btn-teal">
          {saved ? 'Saved!' : 'Save Changes'}
        </button>
      </form>
    </AdminShell>
  );
}
```

- [ ] **Step 2: Create `app/admin/site/stats/page.tsx`**

```tsx
'use client';
import { useEffect, useState } from 'react';
import AdminShell from '@/components/AdminShell';
import { useAdminAuth } from '@/components/useAdminAuth';

export default function AdminStatsPage() {
  useAdminAuth();
  const [stats, setStats] = useState<any[]>([]);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch('/api/admin/site?section=stats')
      .then((r) => r.json())
      .then((data) => setStats(Array.isArray(data) ? data : []));
  }, []);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    await fetch('/api/admin/site', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ section: 'stats', data: stats }),
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <AdminShell title="Edit Stats">
      <form onSubmit={handleSave} className="admin-form">
        {stats.map((s, i) => (
          <div key={i} className="admin-card">
            <div className="form-row">
              <div className="form-group">
                <label>Value</label>
                <input
                  type="number"
                  value={s.value}
                  onChange={(e) => {
                    const next = [...stats];
                    next[i] = { ...s, value: Number(e.target.value) };
                    setStats(next);
                  }}
                />
              </div>
              <div className="form-group">
                <label>Suffix</label>
                <input
                  type="text"
                  value={s.suffix}
                  onChange={(e) => {
                    const next = [...stats];
                    next[i] = { ...s, suffix: e.target.value };
                    setStats(next);
                  }}
                />
              </div>
              <div className="form-group">
                <label>Label</label>
                <input
                  type="text"
                  value={s.label}
                  onChange={(e) => {
                    const next = [...stats];
                    next[i] = { ...s, label: e.target.value };
                    setStats(next);
                  }}
                />
              </div>
            </div>
          </div>
        ))}
        <button type="submit" className="btn-teal">
          {saved ? 'Saved!' : 'Save Changes'}
        </button>
      </form>
    </AdminShell>
  );
}
```

- [ ] **Step 3: Create `app/admin/site/services/page.tsx`**

```tsx
'use client';
import { useEffect, useState } from 'react';
import AdminShell from '@/components/AdminShell';
import { useAdminAuth } from '@/components/useAdminAuth';

export default function AdminServicesPage() {
  useAdminAuth();
  const [services, setServices] = useState<any[]>([]);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch('/api/admin/site?section=services')
      .then((r) => r.json())
      .then((data) => setServices(Array.isArray(data) ? data : []));
  }, []);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    await fetch('/api/admin/site', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ section: 'services', data: services }),
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <AdminShell title="Edit Services">
      <form onSubmit={handleSave} className="admin-form">
        {services.map((s, i) => (
          <div key={i} className="admin-card">
            <div className="form-row">
              <div className="form-group">
                <label>Icon (emoji)</label>
                <input
                  type="text"
                  value={s.icon}
                  onChange={(e) => {
                    const next = [...services];
                    next[i] = { ...s, icon: e.target.value };
                    setServices(next);
                  }}
                />
              </div>
              <div className="form-group" style={{ flex: 2 }}>
                <label>Title</label>
                <input
                  type="text"
                  value={s.title}
                  onChange={(e) => {
                    const next = [...services];
                    next[i] = { ...s, title: e.target.value };
                    setServices(next);
                  }}
                />
              </div>
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                rows={2}
                value={s.description}
                onChange={(e) => {
                  const next = [...services];
                  next[i] = { ...s, description: e.target.value };
                  setServices(next);
                }}
              />
            </div>
          </div>
        ))}
        <button type="submit" className="btn-teal">
          {saved ? 'Saved!' : 'Save Changes'}
        </button>
      </form>
    </AdminShell>
  );
}
```

- [ ] **Step 4: Create `app/admin/site/testimonials/page.tsx`**

```tsx
'use client';
import { useEffect, useState } from 'react';
import AdminShell from '@/components/AdminShell';
import { useAdminAuth } from '@/components/useAdminAuth';

export default function AdminTestimonialsPage() {
  useAdminAuth();
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch('/api/admin/site?section=testimonials')
      .then((r) => r.json())
      .then((data) => setTestimonials(Array.isArray(data) ? data : []));
  }, []);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    await fetch('/api/admin/site', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ section: 'testimonials', data: testimonials }),
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <AdminShell title="Edit Testimonials">
      <form onSubmit={handleSave} className="admin-form">
        {testimonials.map((t, i) => (
          <div key={t.id} className="admin-card">
            <div className="form-row">
              <div className="form-group" style={{ flex: 2 }}>
                <label>Name / Attribution</label>
                <input
                  type="text"
                  value={t.name}
                  onChange={(e) => {
                    const next = [...testimonials];
                    next[i] = { ...t, name: e.target.value };
                    setTestimonials(next);
                  }}
                />
              </div>
              <div className="form-group">
                <label>Rating (1–5)</label>
                <input
                  type="number"
                  min={1}
                  max={5}
                  value={t.rating}
                  onChange={(e) => {
                    const next = [...testimonials];
                    next[i] = { ...t, rating: Number(e.target.value) };
                    setTestimonials(next);
                  }}
                />
              </div>
              <div className="form-group">
                <label>Approved</label>
                <select
                  value={t.approved ? 'yes' : 'no'}
                  onChange={(e) => {
                    const next = [...testimonials];
                    next[i] = { ...t, approved: e.target.value === 'yes' };
                    setTestimonials(next);
                  }}
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label>Text</label>
              <textarea
                rows={3}
                value={t.text}
                onChange={(e) => {
                  const next = [...testimonials];
                  next[i] = { ...t, text: e.target.value };
                  setTestimonials(next);
                }}
              />
            </div>
          </div>
        ))}
        <button type="submit" className="btn-teal">
          {saved ? 'Saved!' : 'Save Changes'}
        </button>
      </form>
    </AdminShell>
  );
}
```

- [ ] **Step 5: Create `app/admin/site/contact/page.tsx`**

```tsx
'use client';
import { useEffect, useState } from 'react';
import AdminShell from '@/components/AdminShell';
import { useAdminAuth } from '@/components/useAdminAuth';

export default function AdminContactPage() {
  useAdminAuth();
  const [contact, setContact] = useState<any>(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch('/api/admin/site?section=contact')
      .then((r) => r.json())
      .then(setContact);
  }, []);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    await fetch('/api/admin/site', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ section: 'contact', data: contact }),
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  if (!contact) return <AdminShell title="Edit Contact"><p>Loading…</p></AdminShell>;

  return (
    <AdminShell title="Edit Contact">
      <form onSubmit={handleSave} className="admin-form">
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            value={contact.address || ''}
            onChange={(e) => setContact({ ...contact, address: e.target.value })}
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Phone 1</label>
            <input
              type="text"
              value={contact.phones?.[0] || ''}
              onChange={(e) => {
                const phones = [...(contact.phones || ['', ''])];
                phones[0] = e.target.value;
                setContact({ ...contact, phones });
              }}
            />
          </div>
          <div className="form-group">
            <label>Phone 2</label>
            <input
              type="text"
              value={contact.phones?.[1] || ''}
              onChange={(e) => {
                const phones = [...(contact.phones || ['', ''])];
                phones[1] = e.target.value;
                setContact({ ...contact, phones });
              }}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={contact.email || ''}
              onChange={(e) => setContact({ ...contact, email: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>WhatsApp Number (no +)</label>
            <input
              type="text"
              value={contact.whatsapp || ''}
              onChange={(e) => setContact({ ...contact, whatsapp: e.target.value })}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Business Hours</label>
          <input
            type="text"
            value={contact.hours || ''}
            onChange={(e) => setContact({ ...contact, hours: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Google Maps Embed URL</label>
          <input
            type="text"
            value={contact.mapEmbed || ''}
            onChange={(e) => setContact({ ...contact, mapEmbed: e.target.value })}
          />
        </div>
        <button type="submit" className="btn-teal">
          {saved ? 'Saved!' : 'Save Changes'}
        </button>
      </form>
    </AdminShell>
  );
}
```

- [ ] **Step 6: Verify all admin site editor pages exist**

```bash
ls "E:/Demo Website/sssbgroups/app/admin/site/"
```

Expected: `hero/`, `stats/`, `services/`, `testimonials/`, `contact/` directories each with `page.tsx`.

---

## Final Verification

- [ ] Run `npm run dev` — dev server starts with no errors
- [ ] Visit `http://localhost:3000` — home page loads with SSB Groups content
- [ ] Visit `http://localhost:3000/about` — about page renders with 3 directors
- [ ] Visit `http://localhost:3000/services` — 5 service cards visible
- [ ] Visit `http://localhost:3000/projects` — all 6 projects displayed
- [ ] Visit `http://localhost:3000/testimonials` — 4 testimonials visible
- [ ] Visit `http://localhost:3000/careers` — 5 job listings shown
- [ ] Visit `http://localhost:3000/contact` — contact form functional
- [ ] Submit contact form — check `data/enquiries.json` has new entry
- [ ] Visit `http://localhost:3000/admin/login` — login with `admin / ssb@2025`
- [ ] Verify dashboard, enquiries, and all site editors load without errors
- [ ] Run `npm run build` — production build completes with no TypeScript errors
