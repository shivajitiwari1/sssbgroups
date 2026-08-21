'use client';
import { useState } from 'react';

type Job = {
  title: string;
  type: string;
  location: string;
  description: string;
  requirements: string[];
  applyEmail: string;
};

export default function JobAccordion({ jobs }: { jobs: Job[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const toggle = (i: number) => setOpen((o) => (o === i ? null : i));

  return (
    <div className="job-rows">
      {jobs.map((j, i) => (
        <div key={j.title} className={`job-row${open === i ? ' open' : ''}`}>
          <div className="job-row-header" onClick={() => toggle(i)}>
            <div className="job-row-title-wrap">
              <div className="job-row-name">{j.title}</div>
              <div className="job-row-meta">
                <span className="job-row-badge">{j.type}</span>
                <span className="job-row-loc">📍 {j.location}</span>
              </div>
            </div>
            <button className="job-row-toggle" aria-label="toggle">+</button>
          </div>
          <div className="job-row-body">
            <div className="job-row-content">
              <p className="job-row-desc">{j.description}</p>
              <div className="job-req-wrap">
                <span className="job-req-label">Requirements</span>
                <ul className="job-req-list">
                  {j.requirements.map((r) => <li key={r}>{r}</li>)}
                </ul>
              </div>
              <div style={{ marginTop: 20 }}>
                <a
                  href={`mailto:${j.applyEmail}?subject=Application: ${encodeURIComponent(j.title)}`}
                  className="btn btn-teal"
                >
                  Apply Now →
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
