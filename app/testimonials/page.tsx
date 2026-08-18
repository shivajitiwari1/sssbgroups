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
