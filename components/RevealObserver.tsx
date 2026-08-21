'use client';
import { useEffect } from 'react';

export default function RevealObserver() {
  useEffect(() => {
    const selectors = '.reveal,.reveal-left,.reveal-right';
    const els = Array.from(document.querySelectorAll<HTMLElement>(selectors));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const parent = el.parentElement;
          if (parent) {
            const siblings = Array.from(
              parent.querySelectorAll<HTMLElement>(selectors)
            );
            const idx = siblings.indexOf(el);
            el.style.transitionDelay = `${idx * 80}ms`;
          }
          el.classList.add('is-visible');
          observer.unobserve(el);
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
