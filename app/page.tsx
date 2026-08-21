import Link from 'next/link';
import siteData from '@/data/site.json';
import Counter from '@/components/Counter';
import RevealObserver from '@/components/RevealObserver';
import TestiRotator from '@/components/TestiRotator';

const gradients = [
  'linear-gradient(135deg,#0a1628 0%,#1a3060 100%)',
  'linear-gradient(135deg,#0f2044 0%,#1a8c7d 100%)',
  'linear-gradient(135deg,#1a3060 0%,#c9963a 60%,#0a1628 100%)',
];

export default function HomePage() {
  const featured = siteData.projects.slice(0, 3);
  const services = siteData.services.slice(0, 5);
  const approvedTesti = siteData.testimonials.filter((t) => t.approved).slice(0, 3);

  return (
    <>
      <RevealObserver />

      {/* ── HERO ── */}
      <section className="hero-v4">
        <div className="hero-bg-grad" />
        <div className="hero-grid" />
        <div className="container">
          <div className="hero-v4-inner">
            {/* Left */}
            <div className="hero-v4-left">
              <div className="hero-badge hero-anim-1">
                <span className="hero-dot" />
                {siteData.hero.badge}
              </div>
              <h1 className="hero-display hero-anim-2">
                {siteData.hero.title.split(',')[0]},<br />
                <em>{siteData.hero.title.split(',')[1]?.trim() ?? 'Into Reality'}</em>
              </h1>
              <p className="hero-subtitle hero-anim-3">{siteData.hero.subtitle}</p>
              <p className="hero-desc hero-anim-4">{siteData.hero.description}</p>
              <div className="hero-btns hero-anim-5">
                <Link href="/projects" className="btn btn-teal btn-lg hero-btn-primary">
                  {siteData.hero.cta1.label} →
                </Link>
                <Link href="/contact" className="btn btn-ghost btn-lg">
                  {siteData.hero.cta2.label}
                </Link>
              </div>
              <div className="hero-trust hero-anim-5">
                <span className="hero-trust-label">Serving</span>
                {['Delhi', 'Haryana', 'U.P.', 'Rajasthan'].map((c) => (
                  <span key={c} className="hero-trust-city">{c}</span>
                ))}
              </div>
            </div>
            {/* Right — floating project cards */}
            <div className="hero-v4-right">
              {featured.map((p, i) => (
                <div key={p.id} className={`fp-card fp-card-anim-${i + 1}`}>
                  <div className="fp-card-label">{p.type}</div>
                  <div className="fp-card-name">{p.name}</div>
                  <div className="fp-card-loc">📍 {p.location}</div>
                  <span className={`fp-card-status ${p.status === 'Completed' ? 'fp-status-done' : 'fp-status-upcoming'}`}>
                    {p.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="stats-v4">
        <div className="container">
          <span className="sec-num">01</span>
          <div className="stats-v4-grid">
            {siteData.stats.map((s) => (
              <div key={s.label} className="stat-v4 reveal">
                <span className="stat-v4-num">
                  <Counter target={Number(s.value)} />
                  <span className="stat-v4-suf">{s.suffix}</span>
                </span>
                <span className="stat-v4-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="sec-divider" />

      {/* ── SERVICES ── */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div className="reveal">
            <span className="sec-num">02</span>
            <span className="section-label">What We Do</span>
            <h2 className="section-title">Our Services</h2>
            <span className="h2-line" />
            <p className="section-desc" style={{ marginTop: 12 }}>
              End-to-end construction delivered by expert professionals.
            </p>
          </div>
          <div className="svc-rows" style={{ marginTop: 48 }}>
            {services.map((s, i) => (
              <div key={s.title} className="svc-row reveal">
                <span className="svc-row-num">{String(i + 1).padStart(2, '0')}</span>
                <div className="svc-row-body">
                  <div className="svc-row-icon">{s.icon}</div>
                  <div className="svc-row-title">{s.title}</div>
                  <div className="svc-row-desc">{s.description}</div>
                </div>
                <div className="svc-row-arrow">→</div>
              </div>
            ))}
          </div>
          <div className="section-cta reveal" style={{ marginTop: 36 }}>
            <Link href="/services" className="btn btn-outline">View All Services →</Link>
          </div>
        </div>
      </section>

      <div className="sec-divider" />

      {/* ── FEATURED PROJECTS ── */}
      <section className="section projects-home-section">
        <div className="container">
          <div className="reveal projects-header">
            <span className="sec-num" style={{ color: 'rgba(201,150,58,.35)' }}>03</span>
            <span className="section-label">Our Work</span>
            <h2 className="section-title" style={{ color: '#fff' }}>Featured Projects</h2>
            <span className="h2-line" />
            <p className="section-desc" style={{ color: 'rgba(255,255,255,.5)', marginTop: 12 }}>
              A selection of successfully completed projects across NCR.
            </p>
          </div>
          <div className="projects-grid" style={{ marginTop: 48 }}>
            {featured.map((p, i) => (
              <div key={p.id} className="proj-v4 reveal" data-type={p.type.toLowerCase()}>
                <div className="proj-v4-img">
                  <div className="proj-v4-gradient" style={{ background: gradients[i % gradients.length] }} />
                  <span className="proj-v4-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className={`proj-v4-pill ${p.status === 'Completed' ? 'status-delivered' : 'status-upcoming'}`}>
                    {p.status}
                  </span>
                </div>
                <div className="proj-v4-body">
                  <div className="proj-v4-type">{p.type}</div>
                  <div className="proj-v4-name">{p.name}</div>
                  <div className="proj-v4-loc">📍 {p.location}</div>
                  <ul className="proj-v4-highlights">
                    {p.highlights.slice(0, 3).map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="section-cta reveal" style={{ marginTop: 40 }}>
            <Link href="/projects" className="btn btn-ghost projects-cta-btn">View All Projects →</Link>
          </div>
        </div>
      </section>

      <div className="sec-divider" />

      {/* ── WHY CHOOSE US ── */}
      <section className="section why-home-section">
        <div className="container">
          <div className="reveal">
            <span className="sec-num">04</span>
            <span className="section-label">Why SSB Group</span>
            <h2 className="section-title">Why Choose Us</h2>
            <span className="h2-line" />
          </div>
          <div className="why-split" style={{ marginTop: 56 }}>
            {/* Left — pull quote + stat callouts */}
            <div className="reveal-left">
              <div className="why-pull-rule" />
              <p className="why-pull-quote">
                &ldquo;Built on precision.<br />Delivered with integrity.&rdquo;
              </p>
              <div className="why-pull-rule" />
              <div style={{ display: 'flex', gap: 40, marginTop: 32, flexWrap: 'wrap' }}>
                <div className="why-stat-callout">
                  <span className="why-stat-num">{siteData.stats[0]?.value}{siteData.stats[0]?.suffix}</span>
                  <span className="why-stat-label">{siteData.stats[0]?.label}</span>
                </div>
                <div className="why-stat-callout">
                  <span className="why-stat-num">{siteData.stats[1]?.value}{siteData.stats[1]?.suffix}</span>
                  <span className="why-stat-label">{siteData.stats[1]?.label}</span>
                </div>
              </div>
            </div>
            {/* Right — compact why cards */}
            <div className="why-mini-grid reveal-right">
              {siteData.whyUs.map((w) => (
                <div key={w.title} className="why-mini-card">
                  <div className="why-mini-icon">{w.icon}</div>
                  <div className="why-mini-title">{w.title}</div>
                  <div className="why-mini-desc">{w.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="sec-divider" />

      {/* ── TESTIMONIALS ── */}
      <section className="section testi-home-section">
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center' }}>
            <span className="sec-num" style={{ color: 'rgba(201,150,58,.35)' }}>05</span>
            <span className="section-label" style={{ justifyContent: 'center' }}>Client Feedback</span>
            <h2 className="section-title" style={{ color: '#fff' }}>What Our Clients Say</h2>
            <span className="h2-line center" />
          </div>
          <TestiRotator testimonials={approvedTesti} />
        </div>
      </section>

      <div className="sec-divider" />

      {/* ── CTA BAND ── */}
      <section className="cta-v4">
        <div className="container">
          <div className="cta-v4-inner">
            <div className="reveal-left">
              <p className="cta-v4-title">
                Ready to<br /><em style={{ color: 'var(--gold)' }}>Build Together?</em>
              </p>
              <p className="cta-v4-sub">Get in touch for a free consultation and quote.</p>
            </div>
            <div className="cta-v4-rule" />
            <div className="cta-v4-btns reveal-right">
              <Link href="/contact" className="btn btn-teal btn-lg">Start a Project</Link>
              <a href={`https://wa.me/${siteData.contact.whatsapp}`} target="_blank" rel="noopener noreferrer"
                className="btn btn-ghost btn-lg">WhatsApp Us</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
