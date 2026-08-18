# SSB Groups Website — Design Spec
**Date:** 2026-08-17  
**Strategy:** Copy & adapt `E:\Demo Website\oasis-nextjs` → `E:\Demo Website\sssbgroups`  
**Target domain:** ssbgroups.in

---

## 1. Overview

SSB Group is a construction company (Promoters · Engineers · Contractors) operating across NCR — Delhi, Haryana, Rajasthan, U.P. The website is a Next.js 14 (App Router) site, adapted from the oasis-nextjs template, repurposed from real estate sales to construction services and portfolio showcase.

The site is data-driven via `data/site.json` and includes a login-protected admin panel for content management and enquiry tracking.

---

## 2. Tech Stack

- **Framework:** Next.js 14.2.0 (App Router)
- **Language:** TypeScript
- **Styling:** Pure CSS (no UI library, no CSS-in-JS)
- **Fonts:** Barlow Condensed (headings) + Inter (body) — loaded via Google Fonts in `layout.tsx`
- **Data:** `data/site.json` (all site content), `data/enquiries.json` (form submissions), `data/admin.json` (admin credentials)
- **Dependencies:** Same as oasis-nextjs (`next`, `react`, `react-dom`, TypeScript types)

---

## 3. Pages

| Route | Page | Purpose |
|---|---|---|
| `/` | Home | Hero, Stats, Services preview (3 cards), Portfolio preview (3 projects), Why Choose Us, Testimonials snippet |
| `/about` | About | Company story, Mission & Vision, Leadership (3 people), Core Values |
| `/services` | Services | 5 service cards with detail descriptions |
| `/projects` | Projects/Portfolio | All 6 completed projects with details |
| `/testimonials` | Testimonials | Full testimonials page |
| `/careers` | Careers | Job listings for construction roles + open application CTA |
| `/contact` | Contact | Contact info cards, enquiry form, embedded map |
| `/admin` | Admin Dashboard | Login-protected stats + content management |
| `/admin/login` | Admin Login | Credentials form |
| `/admin/enquiries` | Admin Enquiries | View/manage contact form submissions |
| `/admin/site` | Admin Site Editor | Edit site.json sections via UI |

---

## 4. Color Scheme

Replace all oasis color tokens in `globals.css` with:

```css
:root {
  /* Charcoal (replaces navy) */
  --charcoal:   #1c2128;
  --charcoal2:  #2d3748;
  --charcoal3:  #4a5568;

  /* Orange — primary accent (replaces teal) */
  --orange:         #e85d04;
  --orange-hover:   #c44f03;
  --orange-light:   #fff4ed;
  --orange-overlay: rgba(232, 93, 4, 0.12);

  /* Amber — secondary accent (replaces gold) */
  --amber:        #f59e0b;
  --amber-light:  #fef3c7;
  --amber-bg:     #fffbeb;

  /* Neutrals */
  --white:      #ffffff;
  --off-white:  #f8f6f3;
  --light-gray: #f0eeea;
  --text:       #1a1a1a;
  --muted:      #6b7280;
  --faint:      #9ca3af;
  --border:     #e2ddd6;
  --border2:    #d1d5db;
}
```

Button classes renamed accordingly: `.btn-orange`, `.btn-amber`, `.btn-charcoal`, `.btn-ghost`, `.btn-outline`.

---

## 5. Typography

```css
/* In layout.tsx — Google Fonts import */
import { Barlow_Condensed, Inter } from 'next/font/google';

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
```

All heading elements use `--font-heading` (Barlow Condensed). Body text uses `--font-body` (Inter). Same CSS variable pattern as oasis.

---

## 6. Components

Same component files as oasis, adapted for SSB branding:

| File | Changes |
|---|---|
| `components/Header.tsx` | Logo → "SSB GROUP", nav links: About, Services, Projects, Testimonials, Careers, Contact. CTA: "Get a Quote" |
| `components/Footer.tsx` | SSB company info, Delhi address, phones, email, nav links, copyright |
| `components/Counter.tsx` | Unchanged (scroll-triggered animated counter) |
| `components/ConditionalLayout.tsx` | Unchanged |
| `components/AdminShell.tsx` | Updated branding only |
| `components/useAdminAuth.ts` | Unchanged |

---

## 7. Data — site.json

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

---

## 8. API Routes (unchanged from oasis)

- `POST /api/contact` — Save enquiry to `enquiries.json`
- `GET /api/contact` — Retrieve enquiries
- `POST /api/admin/login` — Admin auth
- `POST /api/admin/logout` — Clear session
- `GET /api/admin/check-auth` — Verify session
- `GET/POST /api/admin/enquiries` — Manage enquiries
- `GET/POST /api/admin/site` — Update site.json

---

## 9. Key Adaptations from Oasis

| Oasis Concept | SSB Groups Equivalent |
|---|---|
| Property listings (BHK/price/floor) | Project portfolio (type/location/highlights) |
| NRI investment page | Services page (5 construction services) |
| RERA compliance badge | "NCR Specialists" badge |
| WhatsApp enquiry (property interest) | WhatsApp enquiry (project quote) |
| Testimonials (homebuyers) | Testimonials (developer/client partners) |
| "Book a Site Visit" CTA | "Get a Quote" CTA |

---

## 10. Out of Scope

- Image assets (placeholders will be used; real images to be added later via admin or direct file replacement)
- Google Maps embed URL (left empty in site.json; to be added by client)
- Social media links (none provided; left empty)
- Real admin credentials (default placeholder; to be changed before go-live)
