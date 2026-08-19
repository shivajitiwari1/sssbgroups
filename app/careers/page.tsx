export const metadata = {
  title: 'Careers | SSB Group',
};

const jobs = [
  {
    title: 'Site Engineer',
    type: 'Full Time',
    location: 'NCR (Delhi / Haryana / U.P.)',
    description:
      'Supervise on-site construction activities, coordinate with subcontractors, ensure quality standards and timeline compliance.',
    requirements: ['B.Tech / Diploma in Civil Engineering', '2–5 years site experience', 'Proficient in AutoCAD'],
  },
  {
    title: 'Civil Project Manager',
    type: 'Full Time',
    location: 'Delhi / Noida',
    description:
      'Lead end-to-end project delivery for residential and commercial construction. Manage budgets, schedules, and client communications.',
    requirements: ['B.Tech Civil Engineering', '7+ years project management experience', 'PMP certification preferred'],
  },
  {
    title: 'Quantity Surveyor',
    type: 'Full Time',
    location: 'Delhi NCR',
    description:
      'Prepare BOQs, manage procurement, track material consumption, and control project costs.',
    requirements: ['B.Tech / Diploma Civil or relevant field', '3+ years QS experience', 'Proficiency in estimation software'],
  },
  {
    title: 'Safety Officer',
    type: 'Full Time',
    location: 'Multiple Sites — NCR',
    description:
      'Implement and monitor HSE policies across active construction sites. Conduct safety audits and training.',
    requirements: ['Diploma/Degree in Safety Management', 'NEBOSH / IOSH certification preferred', '3+ years on-site safety experience'],
  },
  {
    title: 'Skilled Construction Workers',
    type: 'Contract / Full Time',
    location: 'NCR Region',
    description:
      'Masons, carpenters, bar benders, electricians, and general construction labour for ongoing projects.',
    requirements: ['Relevant trade skills', 'Prior construction site experience', 'Physically fit for site work'],
  },
];

export default function CareersPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-tag">Join Our Team</span>
          <h1>Careers at SSB Group</h1>
          <p>
            We're always looking for skilled professionals and tradespeople to join our growing
            team across NCR construction sites.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="jobs-list">
            {jobs.map((job) => (
              <div key={job.title} className="job-card">
                <div className="job-card-top">
                  <div className="job-info">
                    <h3 className="job-title">{job.title}</h3>
                    <div className="job-meta">
                      <span className="job-type-badge">{job.type}</span>
                      <span className="job-location-tag">📍 {job.location}</span>
                    </div>
                  </div>
                  <a
                    href={`mailto:info@ssbgroups.in?subject=Application: ${job.title}`}
                    className="btn-teal job-apply-btn"
                  >
                    Apply Now
                  </a>
                </div>
                <p className="job-desc">{job.description}</p>
                <div className="job-requirements-wrap">
                  <span className="job-req-label">Requirements</span>
                  <ul className="job-requirements">
                    {job.requirements.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="open-role-banner">
        <div className="container open-role-inner">
          <div className="open-role-text">
            <h2>Don't See Your Role?</h2>
            <p>
              We're always open to talented professionals and tradespeople.
              Send your CV and we'll keep you in mind for upcoming positions.
            </p>
          </div>
          <a
            href="mailto:info@ssbgroups.in?subject=Open Application"
            className="btn-teal"
          >
            Send Open Application
          </a>
        </div>
      </section>
    </>
  );
}
