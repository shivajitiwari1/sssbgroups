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
        <div className="hero-bg-grad" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-particles" aria-hidden="true" />
        <div className="container hero-inner">
          <div className="hero-content">
            <span className="hero-badge">
              <span className="hero-dot" />
              {hero.badge}
            </span>
            <h1 className="hero-title">{hero.title}</h1>
            <p className="hero-subtitle">{hero.subtitle}</p>
            <p className="hero-desc">{hero.description}</p>
            <div className="hero-actions">
              <Link href={hero.cta1.href} className="btn-teal hero-btn-primary">{hero.cta1.label}</Link>
              <Link href={hero.cta2.href} className="btn-ghost">{hero.cta2.label}</Link>
            </div>
            <div className="hero-trust">
              <span className="hero-trust-label">Serving</span>
              {['Delhi', 'Haryana', 'U.P.', 'Rajasthan'].map((city) => (
                <span key={city} className="hero-trust-city">{city}</span>
              ))}
            </div>
          </div>
          <div className="hero-cards">
            {featuredProjects.map((p) => (
              <div key={p.id} className="hero-card hero-card-anim">
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
            {featuredServices.map((s, i) => (
              <div key={s.title} className="service-card" data-num={String(i + 1).padStart(2, '0')}>
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
      <section className="section projects-home-section">
        <div className="container">
          <div className="section-header projects-header">
            <span className="section-tag">Our Work</span>
            <h2>Featured Projects</h2>
            <p>A selection of successfully completed projects across NCR.</p>
          </div>
          <div className="projects-grid">
            {featuredProjects.map((p, i) => (
              <div key={p.id} className="project-card project-card-home" data-type={p.type.toLowerCase()} data-idx={i}>
                <div className="project-card-band">
                  <span className="project-type">{p.type}</span>
                  <span className={`project-status ${p.status === 'completed' ? 'project-status-completed' : ''}`}>{p.status}</span>
                </div>
                <div className="project-card-body-home">
                  <div className="project-num">0{i + 1}</div>
                  <h3>{p.name}</h3>
                  <p className="project-location">{p.location}</p>
                  <p className="project-desc">{p.description}</p>
                  <ul className="project-highlights">
                    {p.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link href="/projects" className="btn-outline projects-cta-btn">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section why-home-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Why SSB Group</span>
            <h2>Why Choose Us</h2>
            <p>The values and capabilities that set us apart.</p>
          </div>
          <div className="why-grid">
            {whyUs.map((w, i) => (
              <div key={w.title} className="why-card" data-idx={i}>
                <span className="why-icon">{w.icon}</span>
                <h3>{w.title}</h3>
                <p>{w.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Snippet */}
      <section className="section testi-home-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Client Feedback</span>
            <h2>What Our Clients Say</h2>
          </div>
          <div className="testi-grid testi-home-grid">
            {approvedTestimonials.map((t, i) => (
              <div key={t.id} className="testi-card-rich testi-home-card" data-idx={i}>
                <div className="testi-quote-mark">"</div>
                <div className="testi-stars">{'★'.repeat(t.rating)}</div>
                <p className="testi-body">{t.text}</p>
                <div className="testi-footer">
                  <div className="testi-avatar">{t.name[0]}</div>
                  <div className="testi-name">{t.name}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link href="/testimonials" className="btn-outline testi-cta-btn">Read All Testimonials</Link>
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
