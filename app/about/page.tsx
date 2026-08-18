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
