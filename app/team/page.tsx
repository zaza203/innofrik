import TeamPage from './TeamPage'

export async function generateMetadata() {
  return {
    title: 'Meet Our Expert Team – Innofrik',
    description:
      'Get to know the visionary leaders and passionate professionals behind Innofrik. Our diverse team drives innovation, quality, and exceptional digital experiences.',
    keywords: [
      'Innofrik team',
      'technology leaders',
      'software development team',
      'digital experts',
      'AI specialists',
      'cloud engineers',
      'leadership',
      'software outsourcing',
    ],
    authors: [{ name: 'Innofrik', url: 'https://innofrik.site' }],
    openGraph: {
      title: 'Meet Our Expert Team – Innofrik',
      description:
        'Discover the talented team at Innofrik driving innovation and excellence in software outsourcing and digital solutions.',
      url: 'https://innofrik.site/team',
      siteName: 'Innofrik',
      images: [
        {
          url: 'https://innofrik.site/icons/innofrik.svg',
          width: 1200,
          height: 630,
          alt: 'Innofrik Team',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Meet Our Expert Team – Innofrik',
      description:
        'Meet the visionary leaders and experts behind Innofrik’s success in digital outsourcing.',
      images: ['https://innofrik.site/icons/innofrik.svg'],
      creator: '@innofrik',
    },
  };
}

export default function Page() {
  return <TeamPage />;
}
