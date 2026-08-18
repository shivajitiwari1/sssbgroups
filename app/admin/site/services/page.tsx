'use client';
import { useEffect, useState } from 'react';
import AdminShell from '@/components/AdminShell';
import { useAdminAuth } from '@/components/useAdminAuth';

export default function AdminServicesPage() {
  useAdminAuth();
  const [services, setServices] = useState<any[]>([]);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch('/api/admin/site?section=services')
      .then((r) => r.json())
      .then((data) => setServices(Array.isArray(data) ? data : []));
  }, []);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    await fetch('/api/admin/site', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ section: 'services', data: services }),
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <AdminShell title="Edit Services">
      <form onSubmit={handleSave} className="admin-form">
        {services.map((s, i) => (
          <div key={i} className="admin-card">
            <div className="form-row">
              <div className="form-group">
                <label>Icon (emoji)</label>
                <input
                  type="text"
                  value={s.icon}
                  onChange={(e) => {
                    const next = [...services];
                    next[i] = { ...s, icon: e.target.value };
                    setServices(next);
                  }}
                />
              </div>
              <div className="form-group" style={{ flex: 2 }}>
                <label>Title</label>
                <input
                  type="text"
                  value={s.title}
                  onChange={(e) => {
                    const next = [...services];
                    next[i] = { ...s, title: e.target.value };
                    setServices(next);
                  }}
                />
              </div>
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                rows={2}
                value={s.description}
                onChange={(e) => {
                  const next = [...services];
                  next[i] = { ...s, description: e.target.value };
                  setServices(next);
                }}
              />
            </div>
          </div>
        ))}
        <button type="submit" className="btn-teal">
          {saved ? 'Saved!' : 'Save Changes'}
        </button>
      </form>
    </AdminShell>
  );
}
