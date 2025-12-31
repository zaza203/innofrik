import BlogPage from './BlogPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - IT Outsourcing Insights & Development Best Practices',
  description:
    'Explore Innofrik\'s blog for expert insights on IT outsourcing, software development best practices, technology trends, and tips for building successful remote development teams.',
  keywords: [
    'IT outsourcing blog',
    'software development articles',
    'tech industry insights',
    'remote team management',
    'offshore development tips',
    'software engineering best practices',
    'technology trends',
    'development team building',
    'agile development',
    'cloud computing insights',
    'AI development articles',
    'digital transformation blog',
  ],
  openGraph: {
    title: 'Innofrik Blog - IT Outsourcing & Development Insights',
    description:
      'Expert articles on IT outsourcing, software development, and building successful remote teams.',
    url: 'https://innofrik.site/blog',
    siteName: 'Innofrik',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Innofrik Blog - Tech Insights',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Innofrik Blog - IT Outsourcing Insights',
    description:
      'Expert articles on IT outsourcing, development best practices, and building remote teams.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://innofrik.site/blog',
  },
};

export default function Page() {
  return <BlogPage />;
}
