'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import AdminShell from '@/components/AdminShell';
import { useAdminAuth } from '@/components/useAdminAuth';

export default function AdminDashboard() {
  useAdminAuth();
  const [enquiryCount, setEnquiryCount] = useState<number | null>(null);

  useEffect(() => {
    fetch('/api/admin/enquiries')
      .then((r) => r.json())
      .then((data) => setEnquiryCount(Array.isArray(data) ? data.length : 0))
      .catch(() => setEnquiryCount(0));
  }, []);

  const quickLinks = [
    { href: '/admin/enquiries', label: 'Enquiries', count: enquiryCount },
    { href: '/admin/site/hero', label: 'Edit Hero' },
    { href: '/admin/site/stats', label: 'Edit Stats' },
    { href: '/admin/site/services', label: 'Edit Services' },
    { href: '/admin/site/testimonials', label: 'Edit Testimonials' },
    { href: '/admin/site/contact', label: 'Edit Contact' },
  ];

  return (
    <AdminShell title="Dashboard">
      <div className="admin-dashboard">
        <div className="dashboard-stats">
          <div className="dash-stat">
            <span className="dash-stat-number">{enquiryCount ?? '…'}</span>
            <span className="dash-stat-label">Total Enquiries</span>
          </div>
          <div className="dash-stat">
            <span className="dash-stat-number">6</span>
            <span className="dash-stat-label">Projects</span>
          </div>
          <div className="dash-stat">
            <span className="dash-stat-number">5</span>
            <span className="dash-stat-label">Services</span>
          </div>
        </div>
        <div className="dashboard-quick-links">
          <h2>Quick Links</h2>
          <div className="quick-links-grid">
            {quickLinks.map((l) => (
              <Link key={l.href} href={l.href} className="quick-link-card">
                <span>{l.label}</span>
                {l.count !== undefined && (
                  <span className="quick-link-badge">{l.count ?? '…'}</span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </AdminShell>
  );
}
