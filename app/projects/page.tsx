import Link from 'next/link';
import siteData from '@/data/site.json';
import RevealObserver from '@/components/RevealObserver';
import ProjectsGrid from '@/components/ProjectsGrid';

export const metadata = {
  title: 'Projects | SSB Group Portfolio',
  description: 'Explore our completed residential, commercial, and hospitality construction projects across Delhi NCR.',
};

export default function ProjectsPage() {
  return (
    <>
      <RevealObserver />

      {/* Page Hero */}
      <section className="page-hero-v4">
        <div className="container page-hero-v4-inner">
          <span className="page-hero-v4-badge">Our Portfolio</span>
          <h1>Completed<br />Projects</h1>
          <p>A showcase of successfully delivered construction projects across NCR — residential townships, commercial complexes, and hospitality properties.</p>
          <div className="page-hero-v4-rule" />
        </div>
      </section>

      {/* Projects Grid + Filter */}
      <section className="section">
        <div className="container">
          <div className="reveal" style={{ marginBottom: 40 }}>
            <span className="section-label">Portfolio</span>
            <h2 className="section-title">All Projects</h2>
            <span className="h2-line" style={{ marginBottom: 0 }} />
          </div>
          <ProjectsGrid projects={siteData.projects} />
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <div className="sec-divider" style={{ marginBottom: 24 }} />
            <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 18, fontStyle: 'italic', color: 'var(--muted)' }}>
              More projects coming soon — check back for updates.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-v4">
        <div className="container">
          <div className="cta-v4-inner">
            <div className="reveal-left">
              <p className="cta-v4-title">Start Your<br /><em style={{ color: 'var(--gold)' }}>Project Today.</em></p>
              <p className="cta-v4-sub">Join 100+ clients who trust us with their construction needs.</p>
            </div>
            <div className="cta-v4-btns reveal-right">
              <Link href="/contact" className="btn btn-teal btn-lg">Get a Quote</Link>
              <Link href="/services" className="btn btn-ghost btn-lg">Our Services</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
