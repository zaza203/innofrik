import ServicesPage from './ServicesPage'

export async function generateMetadata() {
  return {
    title: 'Our Services – Innofrik',
    description:
      'Discover Innofrik’s professional services including Web Development, Mobile App Development, UI/UX Design, SEO & Marketing, DevOps, and Cybersecurity tailored to grow your business.',
    keywords: [
      'web development',
      'mobile app development',
      'UI UX design',
      'SEO marketing',
      'DevOps',
      'cloud setup',
      'cybersecurity',
      'Innofrik',
      'digital services',
      'software development',
    ],
    authors: [{ name: 'Innofrik', url: 'https://innofrik.site' }],
    openGraph: {
      title: 'Our Services – Innofrik',
      description:
        'Discover Innofrik’s professional digital services to grow your business online.',
      url: 'https://innofrik.site/services',
      siteName: 'Innofrik',
      images: [
        {
          url: 'https://innofrik.site/icons/innofrik.svg',
          width: 1200,
          height: 630,
          alt: 'Innofrik Services',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Our Services – Innofrik',
      description:
        'Explore Innofrik’s range of digital services including web, mobile, design, marketing, and more.',
      images: ['https://innofrik.site/icons/innofrik.svg'],
      creator: '@innofrik',
    },
  };
}

export default function Page() {
  return <ServicesPage />;
}
