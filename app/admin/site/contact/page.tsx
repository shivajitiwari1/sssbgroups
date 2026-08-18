'use client';
import { useEffect, useState } from 'react';
import AdminShell from '@/components/AdminShell';
import { useAdminAuth } from '@/components/useAdminAuth';

export default function AdminContactPage() {
  useAdminAuth();
  const [contact, setContact] = useState<any>(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch('/api/admin/site?section=contact')
      .then((r) => r.json())
      .then(setContact);
  }, []);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    await fetch('/api/admin/site', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ section: 'contact', data: contact }),
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  if (!contact) return <AdminShell title="Edit Contact"><p>Loading…</p></AdminShell>;

  return (
    <AdminShell title="Edit Contact">
      <form onSubmit={handleSave} className="admin-form">
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            value={contact.address || ''}
            onChange={(e) => setContact({ ...contact, address: e.target.value })}
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Phone 1</label>
            <input
              type="text"
              value={contact.phones?.[0] || ''}
              onChange={(e) => {
                const phones = [...(contact.phones || ['', ''])];
                phones[0] = e.target.value;
                setContact({ ...contact, phones });
              }}
            />
          </div>
          <div className="form-group">
            <label>Phone 2</label>
            <input
              type="text"
              value={contact.phones?.[1] || ''}
              onChange={(e) => {
                const phones = [...(contact.phones || ['', ''])];
                phones[1] = e.target.value;
                setContact({ ...contact, phones });
              }}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={contact.email || ''}
              onChange={(e) => setContact({ ...contact, email: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>WhatsApp Number (no +)</label>
            <input
              type="text"
              value={contact.whatsapp || ''}
              onChange={(e) => setContact({ ...contact, whatsapp: e.target.value })}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Business Hours</label>
          <input
            type="text"
            value={contact.hours || ''}
            onChange={(e) => setContact({ ...contact, hours: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Google Maps Embed URL</label>
          <input
            type="text"
            value={contact.mapEmbed || ''}
            onChange={(e) => setContact({ ...contact, mapEmbed: e.target.value })}
          />
        </div>
        <button type="submit" className="btn-teal">
          {saved ? 'Saved!' : 'Save Changes'}
        </button>
      </form>
    </AdminShell>
  );
}
