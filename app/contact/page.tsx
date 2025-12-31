import ContactPage from './ContactPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Get a Free IT Outsourcing Consultation',
  description:
    'Contact Innofrik for a free consultation on IT outsourcing, dedicated development teams, and custom software projects. Get a detailed project estimate within 24 hours.',
  keywords: [
    'contact Innofrik',
    'IT outsourcing consultation',
    'hire dedicated developers',
    'software development quote',
    'offshore development inquiry',
    'outsourcing project estimate',
    'free tech consultation',
    'hire remote developers',
    'custom software quote',
    'development team inquiry',
  ],
  openGraph: {
    title: 'Contact Innofrik - Start Your IT Outsourcing Project',
    description:
      'Get a free consultation and project estimate within 24 hours. Start building your dedicated development team today.',
    url: 'https://innofrik.site/contact',
    siteName: 'Innofrik',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Contact Innofrik',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Innofrik - Free IT Outsourcing Consultation',
    description:
      'Get a free consultation and project estimate within 24 hours. Build your dedicated team today.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://innofrik.site/contact',
  },
};

export default function Page() {
  return <ContactPage />;
}
