import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | SSB Group',
  description:
    'Get in touch with SSB Group for project enquiries, quotations, or general information. Office in Laxmi Nagar, Delhi. Call +91 7017430338.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
