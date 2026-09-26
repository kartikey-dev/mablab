import type { Metadata } from 'next';
import { plusJakartaSans, manrope } from '@/lib/fonts';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Mablab — Marketing & Branding Lab | Zero-Shortcut Growth Agency',
  description:
    'Mablab is a rebellious comic-styled marketing and branding laboratory. We provide branding, web development, SEO, paid ads, content, PR & influencer marketing for ambitious growth brands.',
  keywords: [
    'Mablab',
    'Marketing Agency',
    'Branding Lab',
    'Web Development',
    'SEO Agency',
    'Paid Ads ROI',
    'Social Media Marketing',
    'Content Strategy',
    'PR & Influencer Marketing',
    'Market Research',
  ],
  authors: [{ name: 'Mablab' }],
  creator: 'Mablab Team',
  publisher: 'Mablab',
  icons: {
    icon: [
      { url: '/images/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/images/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/images/favicon.ico',
    apple: [{ url: '/images/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/images/site.webmanifest',
  openGraph: {
    title: 'Mablab — Marketing & Branding Lab',
    description: 'Zero-shortcut marketing experiments engineered for market dominance.',
    url: 'https://mablab.com',
    siteName: 'Mablab',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mablab Marketing & Branding Lab',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mablab — Marketing & Branding Lab',
    description: 'Zero-shortcut marketing experiments engineered for market dominance.',
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Mablab',
    alternateName: 'Marketing and Branding Lab',
    url: 'https://mablab.com',
    logo: 'https://mablab.com/images/logo.svg',
    description:
      'Rebellious comic-styled digital agency providing branding, web development, marketing, PR, and SEO.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
    knowsAbout: [
      'Branding',
      'Web Development',
      'Digital Marketing',
      'SEO',
      'Paid Ads',
      'Social Media Strategy',
      'PR & Influencers',
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning className={`${plusJakartaSans.variable} ${manrope.variable} scroll-smooth`}>
      <head>
        <link rel="icon" type="image/png" href="/images/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/images/favicon.svg" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="manifest" href="/images/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className="font-body bg-background text-foreground antialiased selection:bg-purple-600 selection:text-white">
        <div className="min-h-screen flex flex-col bg-background-light text-stroke border-4 border-stroke selection:bg-primary selection:text-white">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
