'use client';
import { useState, useEffect } from 'react';

type Testi = { name: string; rating: number; text: string; approved: boolean };

export default function TestiRotator({ testimonials }: { testimonials: Testi[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (testimonials.length <= 1) return;
    const id = setInterval(() => setActive((a) => (a + 1) % testimonials.length), 5000);
    return () => clearInterval(id);
  }, [testimonials.length]);

  const current = testimonials[active];
  if (!current) return null;

  return (
    <div style={{ marginTop: 48 }}>
      <div className="testi-rotator reveal">
        <div className="testi-rotate-item active">
          <span className="testi-big-quote">&ldquo;</span>
          <p className="testi-big-text">{current.text}</p>
        </div>
      </div>
      <div className="testi-chips">
        {testimonials.map((t, i) => (
          <button
            key={t.name}
            className={`testi-chip${i === active ? ' active' : ''}`}
            onClick={() => setActive(i)}
          >
            <div className="testi-chip-avatar">{t.name[0]}</div>
            <div>
              <div className="testi-chip-name">{t.name}</div>
              <div className="testi-chip-stars">{'★'.repeat(t.rating)}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
