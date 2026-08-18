import Link from 'next/link';
import siteData from '@/data/site.json';

export const metadata = {
  title: 'Projects | SSB Group Portfolio',
};

export default function ProjectsPage() {
  const { projects } = siteData;

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-tag">Our Portfolio</span>
          <h1>Completed Projects</h1>
          <p>
            A showcase of successfully delivered construction projects across NCR —
            residential townships, commercial complexes, and hospitality properties.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="projects-grid projects-grid-full">
            {projects.map((p) => (
              <div key={p.id} className="project-card">
                <div className="project-card-header">
                  <span className="project-type">{p.type}</span>
                  <span className="project-status project-status-completed">{p.status}</span>
                </div>
                <h3>{p.name}</h3>
                <p className="project-location">{p.location}</p>
                <p className="project-desc">{p.description}</p>
                <ul className="project-highlights">
                  {p.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-inner">
          <h2>Start Your Project with SSB Group</h2>
          <p>Join 100+ clients who trust us with their construction needs.</p>
          <Link href="/contact" className="btn-teal">Get a Quote</Link>
        </div>
      </section>
    </>
  );
}
