'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface AdminShellProps {
  children: React.ReactNode;
  title: string;
}

export default function AdminShell({ children, title }: AdminShellProps) {
  const pathname = usePathname();

  const navLinks = [
    { href: '/admin/dashboard', label: 'Dashboard' },
    { href: '/admin/enquiries', label: 'Enquiries' },
    { href: '/admin/site/hero', label: 'Hero' },
    { href: '/admin/site/stats', label: 'Stats' },
    { href: '/admin/site/services', label: 'Services' },
    { href: '/admin/site/testimonials', label: 'Testimonials' },
    { href: '/admin/site/contact', label: 'Contact' },
  ];

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <div className="admin-logo">
          <span className="logo-mark" style={{ background: 'var(--orange)' }}>S</span>
          <span>SSB Admin</span>
        </div>
        <nav className="admin-nav">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? 'active' : ''}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <form action="/api/admin/logout" method="POST" className="admin-logout">
          <button type="submit">Logout</button>
        </form>
      </aside>
      <div className="admin-content">
        <div className="admin-topbar">
          <h1>{title}</h1>
        </div>
        <div className="admin-body">{children}</div>
      </div>
    </div>
  );
}
