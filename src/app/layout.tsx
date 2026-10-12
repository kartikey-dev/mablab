import type { Metadata } from 'next';
import { plusJakartaSans, manrope } from '@/lib/fonts';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { CtaProvider } from '@/context/CtaContext';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'MAB Lab | Marketing Scientists for Your Business Needs',
    template: '%s',
  },
  description:
    'MAB Lab helps businesses make better marketing decisions through research, strategy, branding, content, design, technology and more.',
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
    title: 'MAB Lab | Marketing Scientists for Your Business Needs',
    description:
      'MAB Lab helps businesses make better marketing decisions through research, strategy, branding, content, design, technology and more.',
    url: 'https://mablab.com',
    siteName: 'MAB Lab',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MAB Lab — Marketing Scientists for Your Business Needs',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MAB Lab | Marketing Scientists for Your Business Needs',
    description:
      'MAB Lab helps businesses make better marketing decisions through research, strategy, branding, content, design, technology and more.',
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
  other: {
    'geo.region': 'US-CA',
    'geo.placename': 'San Francisco',
    'geo.position': '37.7749;-122.4194',
    'ICBM': '37.7749, -122.4194',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://mablab.com/#organization',
        name: 'Mablab',
        alternateName: 'Marketing and Branding Lab',
        url: 'https://mablab.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://mablab.com/images/logo.svg',
        },
        sameAs: [
          'https://twitter.com/mablab',
          'https://linkedin.com/company/mablab',
          'https://instagram.com/mablab',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer support',
          url: 'https://mablab.com/contact',
        },
      },
      {
        '@type': 'ProfessionalService',
        '@id': 'https://mablab.com/#service',
        name: 'Mablab',
        url: 'https://mablab.com',
        image: 'https://mablab.com/images/og-image.png',
        priceRange: '$$$$',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '548 Market St',
          addressLocality: 'San Francisco',
          addressRegion: 'CA',
          postalCode: '94104',
          addressCountry: 'US',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 37.7749,
          longitude: -122.4194,
        },
        areaServed: 'Worldwide',
        knowsAbout: [
          'Branding',
          'Web Development',
          'Digital Marketing',
          'SEO',
          'Paid Ads',
          'Social Media Strategy',
          'PR & Influencer Marketing',
          'Video and Podcast Production',
          'Events Production',
          'Market Research',
          'Marketing Consultancy',
          'Design Systems',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://mablab.com/#website',
        url: 'https://mablab.com',
        name: 'Mablab',
        publisher: {
          '@id': 'https://mablab.com/#organization',
        },
      },
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
        <CtaProvider>
          <div className="min-h-screen flex flex-col bg-background-light text-stroke border-4 border-stroke selection:bg-primary selection:text-white">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </CtaProvider>
      </body>
    </html>
  );
}
