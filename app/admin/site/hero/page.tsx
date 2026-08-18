'use client';
import { useEffect, useState } from 'react';
import AdminShell from '@/components/AdminShell';
import { useAdminAuth } from '@/components/useAdminAuth';

export default function AdminHeroPage() {
  useAdminAuth();
  const [hero, setHero] = useState<any>(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch('/api/admin/site?section=hero')
      .then((r) => r.json())
      .then(setHero);
  }, []);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    await fetch('/api/admin/site', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ section: 'hero', data: hero }),
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  if (!hero) return <AdminShell title="Edit Hero"><p>Loading…</p></AdminShell>;

  return (
    <AdminShell title="Edit Hero">
      <form onSubmit={handleSave} className="admin-form">
        {['badge','title','subtitle','description'].map((field) => (
          <div className="form-group" key={field}>
            <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
            {field === 'description' ? (
              <textarea
                rows={3}
                value={hero[field] || ''}
                onChange={(e) => setHero({ ...hero, [field]: e.target.value })}
              />
            ) : (
              <input
                type="text"
                value={hero[field] || ''}
                onChange={(e) => setHero({ ...hero, [field]: e.target.value })}
              />
            )}
          </div>
        ))}
        <h3>CTA 1</h3>
        <div className="form-row">
          <div className="form-group">
            <label>Label</label>
            <input
              type="text"
              value={hero.cta1?.label || ''}
              onChange={(e) => setHero({ ...hero, cta1: { ...hero.cta1, label: e.target.value } })}
            />
          </div>
          <div className="form-group">
            <label>URL</label>
            <input
              type="text"
              value={hero.cta1?.href || ''}
              onChange={(e) => setHero({ ...hero, cta1: { ...hero.cta1, href: e.target.value } })}
            />
          </div>
        </div>
        <h3>CTA 2</h3>
        <div className="form-row">
          <div className="form-group">
            <label>Label</label>
            <input
              type="text"
              value={hero.cta2?.label || ''}
              onChange={(e) => setHero({ ...hero, cta2: { ...hero.cta2, label: e.target.value } })}
            />
          </div>
          <div className="form-group">
            <label>URL</label>
            <input
              type="text"
              value={hero.cta2?.href || ''}
              onChange={(e) => setHero({ ...hero, cta2: { ...hero.cta2, href: e.target.value } })}
            />
          </div>
        </div>
        <button type="submit" className="btn-teal">
          {saved ? 'Saved!' : 'Save Changes'}
        </button>
      </form>
    </AdminShell>
  );
}
