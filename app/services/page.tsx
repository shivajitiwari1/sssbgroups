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
