'use client';
import { useEffect, useState } from 'react';
import AdminShell from '@/components/AdminShell';
import { useAdminAuth } from '@/components/useAdminAuth';

export default function AdminStatsPage() {
  useAdminAuth();
  const [stats, setStats] = useState<any[]>([]);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch('/api/admin/site?section=stats')
      .then((r) => r.json())
      .then((data) => setStats(Array.isArray(data) ? data : []));
  }, []);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    await fetch('/api/admin/site', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ section: 'stats', data: stats }),
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <AdminShell title="Edit Stats">
      <form onSubmit={handleSave} className="admin-form">
        {stats.map((s, i) => (
          <div key={i} className="admin-card">
            <div className="form-row">
              <div className="form-group">
                <label>Value</label>
                <input
                  type="number"
                  value={s.value}
                  onChange={(e) => {
                    const next = [...stats];
                    next[i] = { ...s, value: Number(e.target.value) };
                    setStats(next);
                  }}
                />
              </div>
              <div className="form-group">
                <label>Suffix</label>
                <input
                  type="text"
                  value={s.suffix}
                  onChange={(e) => {
                    const next = [...stats];
                    next[i] = { ...s, suffix: e.target.value };
                    setStats(next);
                  }}
                />
              </div>
              <div className="form-group">
                <label>Label</label>
                <input
                  type="text"
                  value={s.label}
                  onChange={(e) => {
                    const next = [...stats];
                    next[i] = { ...s, label: e.target.value };
                    setStats(next);
                  }}
                />
              </div>
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
