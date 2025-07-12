import ProductsPage from './ProductsPage'

export async function generateMetadata() {
  return {
    description: 'innofrik Products - Explore Innofrik’s innovative software products.',
  openGraph: {
    title: 'Our Products – Innofrik',
    description: 'Explore Innofrik’s innovative software products designed to accelerate your business transformation.',
    url: 'https://www.innofrik.site/products',
    siteName: 'Innofrik',
    images: [{ url: '/icons/innofrik.svg', width: 600, height: 600, alt: 'Innofrik Logo' }],
    type: 'website',
  },
  };
}

export default function Page() {
  return <ProductsPage />;
}
