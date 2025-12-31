import AboutPage from './AboutPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - World-Class IT Outsourcing Company',
  description:
    'Learn about Innofrik, a premium IT outsourcing company delivering dedicated development teams and custom software solutions. Discover our mission, values, and commitment to client success.',
  keywords: [
    'about Innofrik',
    'IT outsourcing company',
    'software development company',
    'offshore development center',
    'dedicated development teams',
    'tech outsourcing partner',
    'custom software solutions',
    'African tech company',
    'Cameroon IT services',
    'remote development team',
    'staff augmentation company',
    'software outsourcing partner',
  ],
  openGraph: {
    title: 'About Innofrik - Your Trusted IT Outsourcing Partner',
    description:
      'Discover what makes Innofrik the preferred IT outsourcing partner for 150+ companies worldwide. Learn about our values, processes, and commitment to excellence.',
    url: 'https://innofrik.site/about',
    siteName: 'Innofrik',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'About Innofrik - Premium IT Outsourcing',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Innofrik - World-Class IT Outsourcing',
    description:
      'Premium IT outsourcing company trusted by 150+ global clients. Learn about our mission and values.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://innofrik.site/about',
  },
};

export default function Page() {
  return <AboutPage />;
}
