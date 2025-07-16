import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Innofrik | Web, Mobile & Digital Solutions',
  description:
    'Innofrik provides expert web development, mobile app creation, SEO services, and digital marketing and more. Your reliable tech partner for powerful digital transformation.',
  keywords: [
    'Innofrik',
    'Innovation',
    'Innovation for Africa',
    'Web Development',
    'Mobile App Development',
    'SEO Services',
    'Digital Marketing',
    'UI/UX Design',
    'Tech Outsourcing',
    'Custom Web Solutions',
    'AI solution',
    'Software Company',
    'Website Design',
    'Marketing Solutions',
    'Innofrik Ltd',
    'Tech Services',
    'Digital Solutions',
    'Business Transformation',
    'Remote Development Teams',
    'Hire Developers'
  ],
  metadataBase: new URL('https://innofrik.site'),
  openGraph: {
    title: 'Innofrik – Web, Mobile & Digital Solutions',
    description:
      'We deliver powerful websites, mobile apps, SEO, and digital marketing strategies to grow your business.',
    url: 'https://innofrik.site',
    siteName: 'Innofrik',
    images: [
      {
        url: '/icons/innofrik.svg',
        width: 1200,
        height: 630,
        alt: 'Innofrik – Web, Mobile & Digital Solutions',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Innofrik – Web, Mobile & Digital Solutions',
    description:
      'Web and mobile development, SEO, digital marketing, and more – all from one expert partner.',
    images: ['/icons/innofrik.svg'],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icons/no_bg_icon.svg" type="image/png"></link>
        {/* JSON-LD structured data */}
        <Script id="org-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Innofrik",
            url: "https://www.innofrik.site",
            logo: "https://www.innofrik.site/icons/no_bg_icon.svg",
            sameAs: [
              "https://www.facebook.com/share/1EVb2atnGD/?mibextid=wwXIfr",
              "https://www.linkedin.com/company/innofrik/"
            ]
          })}
        </Script>
      </head>
      <body className={inter.className}>
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