import BlogPage from './BlogPage'

export async function generateMetadata() {
  return {
    title: 'Innofrik Blog – Tech Insights, Trends & Development',
  description:
    'Explore Innofrik’s blog for expert articles on AI, cloud infrastructure, UX design, cybersecurity, data analytics, and mobile development.',
  keywords: [
    'Innofrik',
    'Tech Blog',
    'AI Development',
    'Cloud Infrastructure',
    'UX Design',
    'Cybersecurity',
    'Data Analytics',
    'Mobile App Development',
    'Software Development',
    'Digital Transformation',
    'Technology Trends',
    'Innofrik Blog'
  ],
  openGraph: {
    title: 'Innofrik Blog – Expert Tech Insights & Trends',
    description:
      'Stay updated with Innofrik’s latest articles on technology, development, and digital innovation.',
    url: 'https://www.innofrik.site/blog',
    siteName: 'Innofrik',
    images: [
      {
        url: '/icons/innofrik.svg',
        width: 1200,
        height: 630,
        alt: 'Innofrik Blog – Technology Insights',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Innofrik Blog – Tech Insights & Trends',
    description: 'Explore articles on AI, cloud, UX, cybersecurity, analytics, and mobile development.',
    images: ['/icons/innofrik.svg'],
  },
  };
}

export default function Page() {
  return <BlogPage />;
}