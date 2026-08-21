import Link from 'next/link';
import siteData from '@/data/site.json';
import RevealObserver from '@/components/RevealObserver';

export const metadata = {
  title: 'Our Services | SSB Group Construction',
  description: 'End-to-end construction services: turnkey projects, civil works, manpower supply, interior works, and more across NCR.',
};

const approach = [
  { num: '01', title: 'Consultation', desc: 'We assess project requirements, site conditions, and constraints to understand the full scope.' },
  { num: '02', title: 'Design & Planning', desc: 'Detailed project timeline with milestones, resource planning, and cost estimation.' },
  { num: '03', title: 'Execution', desc: 'On-site works with added transparency — quality control at every stage.' },
  { num: '04', title: 'Handover', desc: 'Final inspection, snag resolution, and project handover within stipulated schedule.' },
];

export default function ServicesPage() {
  return (
    <>
      <RevealObserver />

      {/* Page Hero */}
      <section className="page-hero-v4">
        <div className="container page-hero-v4-inner">
          <span className="page-hero-v4-badge">Our Services</span>
          <h1>End-to-End<br />Construction Services</h1>
          <p>SSB Group provides end-to-end construction services — from design and engineering to civil works, manpower supply, and full turnkey project execution.</p>
          <div className="page-hero-v4-rule" />
        </div>
      </section>

      {/* Services — alternating rows */}
      <section className="section">
        <div className="container">
          <div className="reveal">
            <span className="section-label">What We Do</span>
            <h2 className="section-title">Our Capabilities</h2>
            <span className="h2-line" style={{ marginBottom: 0 }} />
          </div>
          <div style={{ marginTop: 16 }}>
            {siteData.services.map((s, i) => (
              <div key={s.title} className="svc-page-row reveal">
                <span className="svc-page-num">{String(i + 1).padStart(2, '0')}</span>
                <div className="svc-page-icon">{s.icon}</div>
                <div>
                  <h3 className="svc-page-title">{s.title}</h3>
                  <p className="svc-page-desc">{s.description}</p>
                  <ul className="svc-page-bullets">
                    <li>Professional execution at every stage</li>
                    <li>NCR-wide coverage — Delhi, Haryana, UP, Rajasthan</li>
                    <li>Turnkey and partial-scope available</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="sec-divider" />

      {/* Approach — horizontal timeline */}
      <section className="section-alt" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center' }}>
            <span className="section-label center">How We Work</span>
            <h2 className="section-title">Our Approach</h2>
            <span className="h2-line center" />
            <p className="section-desc" style={{ margin: '12px auto 0' }}>
              Every project we undertake follows a systematic process.
            </p>
          </div>
          <div className="timeline-h">
            {approach.map((a, i) => (
              <div key={a.num} className="timeline-node reveal">
                <div className={`timeline-circle${i < 2 ? ' done' : ''}`}>{a.num}</div>
                <div className="timeline-title">{a.title}</div>
                <p className="timeline-desc">{a.desc}</p>
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
              <p className="cta-v4-title">Need a<br /><em style={{ color: 'var(--gold)' }}>Service Quote?</em></p>
              <p className="cta-v4-sub">Contact us today for a free consultation on your project.</p>
            </div>
            <div className="cta-v4-btns reveal-right">
              <Link href="/contact" className="btn btn-teal btn-lg">Get a Quote</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
