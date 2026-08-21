import Link from 'next/link';
import RevealObserver from '@/components/RevealObserver';
import JobAccordion from '@/components/JobAccordion';

export const metadata = {
  title: 'Careers | SSB Group — Join Our Team',
  description: 'Join SSB Group — we hire site engineers, project managers, quantity surveyors, safety officers, and skilled construction workers across NCR.',
};

const APPLY_EMAIL = 'info@ssbgroups.in';

const jobs = [
  {
    title: 'Site Engineer',
    type: 'Full Time',
    location: 'NCR — Delhi / Haryana / U.P.',
    applyEmail: APPLY_EMAIL,
    description: 'Supervise on-site construction activities, coordinate with subcontractors, ensure quality standards and statutory compliance.',
    requirements: ['B.Tech / Diploma in Civil Engineering', '4–7 years site experience', 'Proficient in AutoCAD'],
  },
  {
    title: 'Civil Project Manager',
    type: 'Full Time',
    location: 'Delhi / Noida',
    applyEmail: APPLY_EMAIL,
    description: 'Lead end-to-end project delivery for residential and commercial construction. Manage budgets, programmes, and client communications.',
    requirements: ['B.Tech Civil Engineering', '8+ years project management experience', 'PMP certification preferred'],
  },
  {
    title: 'Quantity Surveyor',
    type: 'Full Time',
    location: 'Delhi / NCR',
    applyEmail: APPLY_EMAIL,
    description: 'Prepare BOQs, manage resource procurement, track material consumption, and control project costs.',
    requirements: ['B.Tech / Diploma in Civil or relevant field', '3+ years QS experience', 'Proficiency in estimation software'],
  },
  {
    title: 'Safety Officer',
    type: 'Full Time',
    location: 'Multiple Sites — NCR',
    applyEmail: APPLY_EMAIL,
    description: 'Implement and monitor HSE policies across active construction sites. Conduct safety audits and training.',
    requirements: ['Diploma/Degree in Safety Management', 'NEBOSH / IOSH certification preferred', '5+ years site safety experience'],
  },
  {
    title: 'Skilled Construction Workers',
    type: 'Contract',
    location: 'NCR Region',
    applyEmail: APPLY_EMAIL,
    description: 'Masons, carpenters, bar benders, electricians, and general construction labour for ongoing projects.',
    requirements: ['Relevant trade skills', 'Prior construction site experience', 'Physically fit for site work'],
  },
];

export default function CareersPage() {
  return (
    <>
      <RevealObserver />

      {/* Page Hero */}
      <section className="page-hero-v4">
        <div className="container page-hero-v4-inner">
          <span className="page-hero-v4-badge">Join Our Team</span>
          <h1>Careers at<br />SSB Group</h1>
          <p>We&apos;re always looking for skilled professionals and tradespeople to join our growing team across NCR construction sites.</p>
          <div className="page-hero-v4-rule" />
        </div>
      </section>

      {/* Job accordion */}
      <section className="section">
        <div className="container">
          <div className="reveal" style={{ marginBottom: 40 }}>
            <span className="section-label">Open Positions</span>
            <h2 className="section-title">Current Openings</h2>
            <span className="h2-line" style={{ marginBottom: 0 }} />
          </div>
          <JobAccordion jobs={jobs} />
        </div>
      </section>

      <div className="sec-divider" />

      {/* Open application banner */}
      <section className="open-role-v4">
        <div className="container">
          <div className="open-role-v4-inner">
            <div className="reveal-left">
              <h2>Don&apos;t See Your Role?</h2>
              <p>We&apos;re always open to talented professionals and tradespeople. Send your CV and we&apos;ll keep you in mind for upcoming positions.</p>
            </div>
            <div className="reveal-right">
              <a href={`mailto:${APPLY_EMAIL}?subject=Open Application`} className="btn btn-teal btn-lg">
                Send Open Application →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-v4">
        <div className="container">
          <div className="cta-v4-inner">
            <div className="reveal-left">
              <p className="cta-v4-title">Build Your<br /><em style={{ color: 'var(--gold)' }}>Career With Us.</em></p>
              <p className="cta-v4-sub">Be part of NCR&apos;s most rapidly growing construction team.</p>
            </div>
            <div className="cta-v4-btns reveal-right">
              <Link href="/contact" className="btn btn-teal btn-lg">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
