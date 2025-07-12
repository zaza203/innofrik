import AboutPage from './AboutPage'

export async function generateMetadata() {
  return {
    title: 'About Innofrik – Our Mission, Values & Growth',
    description:
      'Learn about Innofrik’s mission, values, and journey. Discover how we deliver exceptional web, mobile, and digital solutions to help businesses grow.',
    keywords: [
      'Innofrik',
      'About Innofrik',
      'Web Development Company',
      'Mobile App Development',
      'Digital Solutions',
      'Tech Outsourcing',
      'Our Story',
      'Software Company',
      'Tech Values',
      'Company Milestones',
      'Innovation and Technology'
    ],
    openGraph: {
      title: 'About Innofrik – Our Mission, Values & Growth',
      description:
        'Discover what makes Innofrik different. Learn about our core values, our journey, and our commitment to client success.',
      url: 'https://www.innofrik.site/about',
      siteName: 'Innofrik',
      images: [
        {
          url: '/icons/innofrik.svg',
          width: 1200,
          height: 630,
          alt: 'About Innofrik – Digital Innovation Journey',
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'About Innofrik – Our Mission & Values',
      description:
        'Behind every project is a team with passion and purpose. Get to know Innofrik’s story and values.',
      images: ['/icons/innofrik.svg'],
    },
  };
}

export default function Page() {
  return <AboutPage />;
}
