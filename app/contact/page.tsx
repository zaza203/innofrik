import ContactPage from './ContactPage'

export async function generateMetadata() {
  return {
    title: 'Contact Us – Innofrik',
    description:
      'Get in touch with Innofrik for free consultation, project proposals, and expert digital services.',
    keywords: [
      'Innofrik',
      'Contact',
      'Consultation',
      'Project Proposal',
      'Digital Services',
      'Web Development',
      'Mobile Apps',
      'UI/UX Design',
      'DevOps',
      'Data Engineering',
    ],
    openGraph: {
      title: 'Contact Innofrik – Start Your Next Project',
      description:
        'Reach out to Innofrik’s expert team for a free consultation and detailed project proposal.',
      url: 'https://www.innofrik.site/contact',
      siteName: 'Innofrik',
      images: [
        {
          url: '/icons/innofrik.svg',
          width: 600,
          height: 600,
          alt: 'Innofrik Logo',
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Contact Innofrik – Start Your Next Project',
      description:
        'Reach out for a free consultation and detailed project proposal from Innofrik’s expert team.',
      images: ['/icons/innofrik.svg'],
    },
  };
}

export default function Page() {
  return <ContactPage />;
}