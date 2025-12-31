import ProductsPage from './ProductsPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies & Portfolio - IT Outsourcing Success Stories',
  description:
    'Explore Innofrik\'s portfolio of successful IT outsourcing projects. See how we\'ve helped 150+ companies build custom software, mobile apps, and digital products with dedicated development teams.',
  keywords: [
    'IT outsourcing case studies',
    'software development portfolio',
    'outsourcing success stories',
    'dedicated team projects',
    'custom software examples',
    'mobile app portfolio',
    'web development case studies',
    'client success stories',
    'software project showcase',
    'development team results',
  ],
  openGraph: {
    title: 'Case Studies & Portfolio - Innofrik IT Outsourcing',
    description:
      'Discover how we\'ve helped 150+ companies achieve 60% cost savings and 2x faster delivery with our dedicated development teams.',
    url: 'https://innofrik.site/products',
    siteName: 'Innofrik',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Innofrik Portfolio & Case Studies',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IT Outsourcing Case Studies - Innofrik',
    description:
      '150+ successful projects. See how we deliver 60% cost savings and 2x faster delivery.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://innofrik.site/products',
  },
};

export default function Page() {
  return <ProductsPage />;
}
