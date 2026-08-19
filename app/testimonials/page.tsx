import Link from 'next/link';
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
          <div className="testi-grid-full">
            {approved.map((t) => (
              <div key={t.id} className="testi-card-rich">
                <div className="testi-quote-mark">"</div>
                <div className="testi-stars">{'★'.repeat(t.rating)}</div>
                <p className="testi-body">{t.text}</p>
                <div className="testi-footer">
                  <div className="testi-avatar">{t.name.charAt(0)}</div>
                  <span className="testi-name">— {t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testi-stats-strip">
        <div className="container testi-stats-inner">
          <div className="testi-stat">
            <span className="testi-stat-num">50+</span>
            <span className="testi-stat-label">Projects Delivered</span>
          </div>
          <div className="testi-stat">
            <span className="testi-stat-num">100+</span>
            <span className="testi-stat-label">Satisfied Clients</span>
          </div>
          <div className="testi-stat">
            <span className="testi-stat-num">15+</span>
            <span className="testi-stat-label">Years Experience</span>
          </div>
          <div className="testi-stat">
            <span className="testi-stat-num">4</span>
            <span className="testi-stat-label">States Covered</span>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-inner">
          <h2>Ready to Work With Us?</h2>
          <p>Join 100+ clients who trust SSB Group for their construction projects.</p>
          <div className="cta-actions">
            <Link href="/contact" className="btn-teal">Get a Quote</Link>
            <Link href="/projects" className="btn-ghost">View Our Work</Link>
          </div>
        </div>
      </section>
    </>
  );
}
