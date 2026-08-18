'use client';
import { useEffect, useState } from 'react';
import AdminShell from '@/components/AdminShell';
import { useAdminAuth } from '@/components/useAdminAuth';

export default function AdminTestimonialsPage() {
  useAdminAuth();
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch('/api/admin/site?section=testimonials')
      .then((r) => r.json())
      .then((data) => setTestimonials(Array.isArray(data) ? data : []));
  }, []);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    await fetch('/api/admin/site', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ section: 'testimonials', data: testimonials }),
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <AdminShell title="Edit Testimonials">
      <form onSubmit={handleSave} className="admin-form">
        {testimonials.map((t, i) => (
          <div key={t.id} className="admin-card">
            <div className="form-row">
              <div className="form-group" style={{ flex: 2 }}>
                <label>Name / Attribution</label>
                <input
                  type="text"
                  value={t.name}
                  onChange={(e) => {
                    const next = [...testimonials];
                    next[i] = { ...t, name: e.target.value };
                    setTestimonials(next);
                  }}
                />
              </div>
              <div className="form-group">
                <label>Rating (1–5)</label>
                <input
                  type="number"
                  min={1}
                  max={5}
                  value={t.rating}
                  onChange={(e) => {
                    const next = [...testimonials];
                    next[i] = { ...t, rating: Number(e.target.value) };
                    setTestimonials(next);
                  }}
                />
              </div>
              <div className="form-group">
                <label>Approved</label>
                <select
                  value={t.approved ? 'yes' : 'no'}
                  onChange={(e) => {
                    const next = [...testimonials];
                    next[i] = { ...t, approved: e.target.value === 'yes' };
                    setTestimonials(next);
                  }}
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label>Text</label>
              <textarea
                rows={3}
                value={t.text}
                onChange={(e) => {
                  const next = [...testimonials];
                  next[i] = { ...t, text: e.target.value };
                  setTestimonials(next);
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
