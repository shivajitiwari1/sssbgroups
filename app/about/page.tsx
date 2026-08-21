import Link from 'next/link';
import siteData from '@/data/site.json';
import Counter from '@/components/Counter';
import RevealObserver from '@/components/RevealObserver';

export const metadata = {
  title: 'About — SSB Group | Construction Company NCR',
  description: 'Learn about SSB Group — our story, mission, vision, leadership, and core values driving premier construction in the NCR region.',
};

export default function AboutPage() {
  return (
    <>
      <RevealObserver />

      {/* Page Hero */}
      <section className="page-hero-v4">
        <div className="container page-hero-v4-inner">
          <span className="page-hero-v4-badge">About SSB Group</span>
          <h1>{siteData.about.heading}</h1>
          <p>{siteData.about.description1.slice(0, 160)}…</p>
          <div className="page-hero-v4-rule" />
        </div>
      </section>

      {/* Company Story — split */}
      <section className="section">
        <div className="container">
          <div className="story-split">
            <div className="reveal-left">
              <span className="section-label">Our Story</span>
              <h2 className="section-title">Who We Are</h2>
              <span className="h2-line" style={{ marginBottom: 24 }} />
              <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.85, marginBottom: 18 }}>
                {siteData.about.description1}
              </p>
              <blockquote className="story-pull">
                &ldquo;Excellence in construction is not an act, it is a habit — built project by project.&rdquo;
              </blockquote>
              <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.85 }}>
                {siteData.about.description2}
              </p>
            </div>
            <div className="reveal-right">
              <div className="story-stat-card">
                <span className="section-label" style={{ color: 'rgba(255,255,255,.4)' }}>By the Numbers</span>
                {siteData.stats.map((s) => (
                  <div key={s.label} className="story-stat-item">
                    <span className="story-stat-num">
                      <Counter target={Number(s.value)} />
                      <span className="story-stat-suf">{s.suffix}</span>
                    </span>
                    <span className="story-stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="sec-divider" />

      {/* Pillars — roman numerals */}
      <section className="section-alt" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="section-label center">Our Pillars</span>
            <h2 className="section-title">What We Stand For</h2>
            <span className="h2-line center" />
          </div>
          <div className="pillar-cols">
            {(['Ⅰ', 'Ⅱ', 'Ⅲ', 'Ⅳ'] as const).map((roman, i) => {
              const p = siteData.about.pillars[i];
              if (!p) return null;
              return (
                <div key={roman} className="pillar-col reveal">
                  <span className="pillar-roman">{roman}</span>
                  <div className="pillar-col-title">{p.title}</div>
                  <p className="pillar-col-desc">{p.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="sec-divider" />

      {/* Mission & Vision — alternating rows */}
      <div className="mv-row reveal">
        <div className="mv-row-dark">
          <span className="mv-row-label">Our Mission</span>
          <h2 className="mv-row-title">What We&apos;re<br />Here to Build</h2>
          <p className="mv-row-text">{siteData.mission}</p>
        </div>
        <div className="mv-row-light">
          <span className="mv-monogram">M</span>
          <span className="mv-row-icon">🎯</span>
        </div>
      </div>
      <div className="mv-row flip reveal">
        <div className="mv-row-light">
          <span className="mv-monogram">V</span>
          <span className="mv-row-icon">🔭</span>
        </div>
        <div className="mv-row-dark">
          <span className="mv-row-label">Our Vision</span>
          <h2 className="mv-row-title">Where We&apos;re<br />Headed</h2>
          <p className="mv-row-text">{siteData.vision}</p>
        </div>
      </div>

      <div className="sec-divider" />

      {/* Leadership */}
      <section className="section">
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="section-label center">Leadership</span>
            <h2 className="section-title">Meet Our Directors</h2>
            <span className="h2-line center" />
          </div>
          <div className="leadership-grid">
            {siteData.leadership.map((l) => (
              <div key={l.name} className="leader-v4 reveal">
                <div className="leader-v4-avatar">{l.name[0]}</div>
                <div className="leader-v4-name">{l.name}</div>
                <span className="leader-v4-role">{l.role}</span>
                <p className="leader-v4-bio">{l.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="sec-divider" />

      {/* Core Values */}
      <section className="section-alt" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="section-label center">What We Stand By</span>
            <h2 className="section-title">Core Values</h2>
            <span className="h2-line center" />
          </div>
          <div className="values-grid">
            {siteData.values.map((v, i) => (
              <div key={v.title} className="value-v4 reveal">
                <span className="value-v4-num">0{i + 1}</span>
                <span className="value-v4-icon">{v.icon}</span>
                <div className="value-v4-title">{v.title}</div>
                <p className="value-v4-desc">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-v4">
        <div className="container">
          <div className="cta-v4-inner">
            <div className="reveal-left">
              <p className="cta-v4-title">Let&apos;s Build<br /><em style={{ color: 'var(--gold)' }}>Something Great.</em></p>
              <p className="cta-v4-sub">Contact us to discuss your next construction project.</p>
            </div>
            <div className="cta-v4-btns reveal-right">
              <Link href="/contact" className="btn btn-teal btn-lg">Get in Touch</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
