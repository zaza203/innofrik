import TeamPage from './TeamPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Expert Development Team - IT Outsourcing Specialists',
  description:
    'Meet Innofrik\'s team of 50+ senior developers, architects, and designers. Our expert IT outsourcing team delivers world-class software solutions with expertise in React, Node.js, Python, and more.',
  keywords: [
    'IT outsourcing team',
    'dedicated developers',
    'senior software engineers',
    'remote development team',
    'offshore developers',
    'software architects',
    'full stack developers',
    'React developers',
    'Node.js developers',
    'Python developers',
    'UI/UX designers',
    'DevOps engineers',
  ],
  authors: [{ name: 'Innofrik', url: 'https://innofrik.site' }],
  openGraph: {
    title: 'Meet Our Expert Team - Innofrik IT Outsourcing',
    description:
      '50+ senior developers and specialists ready to join your project. Expertise in React, Node.js, Python, mobile, and cloud technologies.',
    url: 'https://innofrik.site/team',
    siteName: 'Innofrik',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Innofrik Development Team',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Expert Team - Innofrik IT Outsourcing',
    description:
      '50+ senior developers ready to build your next project. Full stack, mobile, cloud expertise.',
    images: ['/og-image.png'],
    creator: '@innofrik',
  },
  alternates: {
    canonical: 'https://innofrik.site/team',
  },
};

export default function Page() {
  return <TeamPage />;
}
