import './globals.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';

// World-class outsourcing SEO metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://innofrik.site'),
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  title: {
    default: 'Innofrik | Premium IT Outsourcing & Software Development Company',
    template: '%s | Innofrik - Your Trusted Outsourcing Partner',
  },
  description:
    'Innofrik is a world-class IT outsourcing company offering premium software development, dedicated development teams, web & mobile app development, and digital transformation services. Reduce costs by 60% with our offshore development center.',
  keywords: [
    // Primary outsourcing keywords
    'IT outsourcing company',
    'software outsourcing services',
    'offshore development center',
    'dedicated development team',
    'staff augmentation',
    'nearshore software development',
    'offshore software development',
    'outsource software development',
    'IT outsourcing services',
    'software development outsourcing',

    // Service-specific keywords
    'custom software development',
    'web application development',
    'mobile app development company',
    'enterprise software solutions',
    'cloud migration services',
    'DevOps consulting',
    'UI/UX design services',
    'quality assurance outsourcing',
    'software testing services',
    'API development services',

    // Technology keywords
    'React development company',
    'Node.js development services',
    'Python development company',
    'full stack development',
    'AI and machine learning services',
    'cloud computing services',

    // Business keywords
    'reduce development costs',
    'hire remote developers',
    'dedicated software team',
    'agile development team',
    'software development partner',
    'technology consulting services',

    // Location-based keywords
    'Africa software development',
    'Cameroon IT company',
    'African tech outsourcing',

    // Brand keywords
    'Innofrik',
    'Innofrik Ltd',
    'Innovation for Africa',
  ],
  authors: [{ name: 'Innofrik Ltd', url: 'https://innofrik.site' }],
  creator: 'Innofrik Ltd',
  publisher: 'Innofrik Ltd',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://innofrik.site',
    languages: {
      'en-US': 'https://innofrik.site',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://innofrik.site',
    siteName: 'Innofrik',
    title: 'Innofrik | Premium IT Outsourcing & Software Development Company',
    description:
      'Transform your business with world-class IT outsourcing. Dedicated development teams, custom software solutions, and 60% cost savings. Trusted by 150+ global clients.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Innofrik - Premium IT Outsourcing & Software Development',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@innofrik',
    creator: '@innofrik',
    title: 'Innofrik | Premium IT Outsourcing & Software Development',
    description:
      'World-class IT outsourcing company. Dedicated development teams, custom software, 60% cost savings. 150+ satisfied clients globally.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google32cf97618337b509',
  },
  category: 'technology',
};

// Organization Schema for SEO
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Innofrik',
  alternateName: 'Innofrik Ltd',
  url: 'https://innofrik.site',
  logo: 'https://innofrik.site/icons/no_bg_icon.svg',
  description: 'Premium IT outsourcing and software development company offering dedicated development teams, custom software solutions, and digital transformation services.',
  foundingDate: '2024',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'CM',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+1-516-218-6691',
      contactType: 'sales',
      areaServed: 'US',
      availableLanguage: ['English'],
    },
    {
      '@type': 'ContactPoint',
      telephone: '+237-691-71-58-66',
      contactType: 'sales',
      areaServed: 'Worldwide',
      availableLanguage: ['English', 'French'],
    },
  ],
  sameAs: [
    'https://www.facebook.com/share/1EVb2atnGD/?mibextid=wwXIfr',
    'https://www.linkedin.com/company/innofrik/',
    'https://twitter.com/innofrik',
    'https://github.com/innofrik',
  ],
};

// Service Schema
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Innofrik IT Outsourcing Services',
  serviceType: 'IT Outsourcing',
  provider: {
    '@type': 'Organization',
    name: 'Innofrik',
  },
  areaServed: {
    '@type': 'Place',
    name: 'Worldwide',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'IT Outsourcing Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Dedicated Development Teams',
          description: 'Hire dedicated software developers who work exclusively on your projects',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom Software Development',
          description: 'End-to-end custom software development services',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Web Application Development',
          description: 'Modern, scalable web applications built with cutting-edge technologies',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Mobile App Development',
          description: 'Native and cross-platform mobile applications for iOS and Android',
        },
      },
    ],
  },
};

// FAQ Schema for better search visibility
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is IT outsourcing and how can Innofrik help?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'IT outsourcing is delegating technology-related tasks to external specialists. Innofrik provides dedicated development teams, custom software development, and digital transformation services, helping businesses reduce costs by up to 60% while accessing world-class talent.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much can I save by outsourcing software development to Innofrik?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Companies typically save 40-60% on development costs by outsourcing to Innofrik compared to hiring in-house teams in North America or Europe, while maintaining high quality standards.',
      },
    },
    {
      '@type': 'Question',
      name: 'What technologies does Innofrik specialize in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Innofrik specializes in React, Next.js, Node.js, Python, React Native, Flutter, AWS, Azure, and AI/ML technologies. We deliver full-stack solutions across web, mobile, and cloud platforms.',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        {/* Favicon Configuration */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/icons/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* JSON-LD Structured Data */}
        <Script
          id="org-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="service-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <Script
          id="faq-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* Facebook Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod ?
              n.callMethod.apply(n, arguments) : n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1260309229084305');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body className={`${GeistSans.className} antialiased`}>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1260309229084305&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        <Navbar />
        <main className="min-h-screen">
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
