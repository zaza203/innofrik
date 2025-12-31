import ServicesPage from './ServicesPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IT Outsourcing Services - Dedicated Teams & Custom Development',
  description:
    'Explore Innofrik\'s comprehensive IT outsourcing services: dedicated development teams, custom software development, mobile apps, cloud & DevOps, UI/UX design, and more. Save up to 60% on development costs.',
  keywords: [
    'IT outsourcing services',
    'dedicated development teams',
    'custom software development',
    'staff augmentation services',
    'offshore development services',
    'mobile app development',
    'web application development',
    'cloud and DevOps services',
    'UI/UX design services',
    'QA testing outsourcing',
    'AI and machine learning services',
    'React development company',
    'Node.js development',
    'Python development services',
    'software development outsourcing',
  ],
  authors: [{ name: 'Innofrik', url: 'https://innofrik.site' }],
  openGraph: {
    title: 'IT Outsourcing Services - Innofrik',
    description:
      'Full-service IT outsourcing: dedicated teams, custom software, mobile apps, cloud solutions. Reduce costs by 60% with our offshore development center.',
    url: 'https://innofrik.site/services',
    siteName: 'Innofrik',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Innofrik IT Outsourcing Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IT Outsourcing Services - Innofrik',
    description:
      'Dedicated development teams, custom software, mobile apps & more. Save 60% on development costs.',
    images: ['/og-image.png'],
    creator: '@innofrik',
  },
  alternates: {
    canonical: 'https://innofrik.site/services',
  },
};

export default function Page() {
  return <ServicesPage />;
}
