'use client';
import { useEffect, useState } from 'react';
import AdminShell from '@/components/AdminShell';
import { useAdminAuth } from '@/components/useAdminAuth';

interface Enquiry {
  id: number;
  name: string;
  email: string;
  phone: string;
  type: string;
  message: string;
  status: string;
  createdAt: string;
}

export default function AdminEnquiriesPage() {
  useAdminAuth();
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/admin/enquiries')
      .then((r) => r.json())
      .then((data) => {
        setEnquiries(Array.isArray(data) ? data.reverse() : []);
        setLoading(false);
      });
  }, []);

  async function updateStatus(id: number, status: string) {
    await fetch('/api/admin/enquiries', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, updates: { status } }),
    });
    setEnquiries((prev) =>
      prev.map((e) => (e.id === id ? { ...e, status } : e))
    );
  }

  async function deleteEnquiry(id: number) {
    if (!confirm('Delete this enquiry?')) return;
    await fetch('/api/admin/enquiries', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    setEnquiries((prev) => prev.filter((e) => e.id !== id));
  }

  return (
    <AdminShell title="Enquiries">
      {loading ? (
        <p>Loading…</p>
      ) : enquiries.length === 0 ? (
        <p>No enquiries yet.</p>
      ) : (
        <div className="enquiries-table-wrap">
          <table className="enquiries-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Type</th>
                <th>Message</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {enquiries.map((e) => (
                <tr key={e.id} className={`status-${e.status}`}>
                  <td>{new Date(e.createdAt).toLocaleDateString('en-IN')}</td>
                  <td>{e.name}</td>
                  <td><a href={`mailto:${e.email}`}>{e.email}</a></td>
                  <td>{e.phone || '—'}</td>
                  <td>{e.type}</td>
                  <td className="enquiry-message">{e.message}</td>
                  <td>
                    <select
                      value={e.status}
                      onChange={(ev) => updateStatus(e.id, ev.target.value)}
                    >
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="closed">Closed</option>
                    </select>
                  </td>
                  <td>
                    <button
                      className="btn-danger-sm"
                      onClick={() => deleteEnquiry(e.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </AdminShell>
  );
}
