import Link from 'next/link';
import siteData from '@/data/site.json';
import Counter from '@/components/Counter';
import RevealObserver from '@/components/RevealObserver';

export const metadata = {
  title: 'Testimonials | SSB Group Client Reviews',
  description: 'Read what our clients say about SSB Group construction projects across Delhi NCR.',
};

export default function TestimonialsPage() {
  const approved = siteData.testimonials.filter((t) => t.approved);
  const [featured, ...rest] = approved;

  const statsStrip = [
    { val: 50, suf: '+', label: 'Projects Delivered' },
    { val: 100, suf: '+', label: 'Satisfied Clients' },
    { val: 15, suf: '+', label: 'Years Experience' },
    { val: 4, suf: '', label: 'States Covered' },
  ];

  return (
    <>
      <RevealObserver />

      {/* Page Hero */}
      <section className="page-hero-v4">
        <div className="container page-hero-v4-inner">
          <span className="page-hero-v4-badge">Client Feedback</span>
          <h1>What Our<br />Clients Say</h1>
          <p>Hear from the developers, site directors, and project managers who have worked with SSB Group.</p>
          <div className="page-hero-v4-rule" />
        </div>
      </section>

      {/* Featured testimonial */}
      {featured && (
        <section className="section">
          <div className="container">
            <div className="testi-featured reveal">
              <span className="testi-featured-mark">&ldquo;</span>
              <p className="testi-featured-text">{featured.text}</p>
              <div className="testi-featured-author">
                <span className="testi-featured-stars">{'★'.repeat(featured.rating)}</span>
                <span className="testi-featured-dot" />
                <span className="testi-featured-name">{featured.name}</span>
              </div>
            </div>
          </div>
        </section>
      )}

      <div className="sec-divider" />

      {/* Remaining testimonials — CSS columns */}
      {rest.length > 0 && (
        <section className="section-alt" style={{ padding: '80px 0' }}>
          <div className="container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
              <span className="section-label center">More Reviews</span>
              <h2 className="section-title">Client Stories</h2>
              <span className="h2-line center" />
            </div>
            <div className="testi-cols">
              {rest.map((t) => (
                <div key={t.id} className="testi-col-card reveal">
                  <span className="testi-col-stars">{'★'.repeat(t.rating)}</span>
                  <p className="testi-col-text">&ldquo;{t.text}&rdquo;</p>
                  <div className="testi-col-author">— {t.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="sec-divider" />

      {/* Stats strip */}
      <section className="testi-stats-v4">
        <div className="container">
          <div className="testi-stats-v4-grid">
            {statsStrip.map((s) => (
              <div key={s.label} className="testi-stat-v4 reveal">
                <span className="testi-stat-v4-num">
                  <Counter target={s.val} />
                  <span className="testi-stat-v4-suf">{s.suf}</span>
                </span>
                <span className="testi-stat-v4-label">{s.label}</span>
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
              <p className="cta-v4-title">Ready to Work<br /><em style={{ color: 'var(--gold)' }}>With Us?</em></p>
              <p className="cta-v4-sub">Join 100+ clients who trust us with their construction needs.</p>
            </div>
            <div className="cta-v4-btns reveal-right">
              <Link href="/contact" className="btn btn-teal btn-lg">Get a Quote</Link>
              <Link href="/projects" className="btn btn-ghost btn-lg">View Our Work</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
