'use client';
import { useState } from 'react';

type Project = {
  id: string;
  name: string;
  location: string;
  status: string;
  type: string;
  description: string;
  highlights: string[];
  image: string;
};

const filters = ['All', 'Residential', 'Commercial', 'Hospitality'];

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? projects
    : projects.filter((p) => p.type.toLowerCase().includes(active.toLowerCase()));

  return (
    <>
      <div className="proj-filter">
        {filters.map((f) => (
          <button
            key={f}
            className={`proj-filter-btn${active === f ? ' active' : ''}`}
            onClick={() => setActive(f)}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="projects-grid">
        {filtered.map((p, i) => (
          <div key={p.id} className="proj-v4">
            <div className="proj-v4-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.image} alt={p.name} />
              <span className="proj-v4-num">{String(i + 1).padStart(2, '0')}</span>
              <span className={`proj-v4-pill ${p.status === 'Completed' ? 'status-delivered' : 'status-upcoming'}`}>
                {p.status}
              </span>
            </div>
            <div className="proj-v4-body">
              <div className="proj-v4-type">{p.type}</div>
              <div className="proj-v4-name">{p.name}</div>
              <div className="proj-v4-loc">📍 {p.location}</div>
              <ul className="proj-v4-highlights">
                {p.highlights.slice(0, 3).map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      {filtered.length === 0 && (
        <p style={{ textAlign: 'center', color: 'var(--muted)', padding: '48px 0' }}>
          No projects in this category yet.
        </p>
      )}
    </>
  );
}
