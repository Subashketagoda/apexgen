import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/data/siteConfig';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: 'ApexGen — Premium Web Design & Digital Experiences',
    template: '%s | ApexGen',
  },
  description:
    'ApexGen builds premium websites and digital experiences for ambitious businesses.',
  keywords: [
    'web design Sri Lanka',
    'website development Sri Lanka',
    'web development',
    'digital experiences',
    'business websites',
    'premium websites',
    'ApexGen',
    'creative technology studio',
    'Colombo web design',
  ],
  authors: [{ name: 'ApexGen Studio', url: siteConfig.siteUrl }],
  creator: 'ApexGen',
  publisher: 'ApexGen',
  alternates: {
    canonical: siteConfig.siteUrl,
  },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: siteConfig.siteUrl,
      siteName: 'ApexGen',
      title: 'ApexGen — Premium Web Design & Digital Experiences',
      description:
        'ApexGen builds premium websites and digital experiences for ambitious businesses.',
      images: [
        {
          url: '/brand/apexgen-icon.png',
          width: 512,
          height: 512,
          alt: 'ApexGen Official Emblem',
        },
        {
          url: '/brand/apexgen-brand-kit.png',
          width: 1200,
          height: 630,
          alt: 'ApexGen Studio — We Build Digital Experiences That Move Businesses Forward',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'ApexGen — Premium Web Design & Digital Experiences',
      description:
        'ApexGen builds premium websites and digital experiences for ambitious businesses.',
      creator: '@apexgen_studio',
      images: ['/brand/apexgen-brand-kit.png'],
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
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/brand/apexgen-icon.png', type: 'image/png', sizes: '512x512' },
        { url: '/favicon.png', type: 'image/png' },
      ],
      shortcut: '/favicon.ico',
      apple: [
        { url: '/brand/apexgen-icon.png', sizes: '180x180', type: 'image/png' },
      ],
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
  };

import Script from 'next/script';
import { PageTransition } from '@/components/animation/PageTransition';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data Schema for Search Engines
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.siteUrl}/#website`,
        url: siteConfig.siteUrl,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: {
          '@id': `${siteConfig.siteUrl}/#organization`,
        },
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${siteConfig.siteUrl}/#organization`,
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        url: siteConfig.siteUrl,
        logo: `${siteConfig.siteUrl}/og-image.png`,
        description: siteConfig.description,
        email: siteConfig.contact.email,
        telephone: siteConfig.contact.whatsappNumber,
        priceRange: 'LKR 49,900 - 250,000+',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Colombo',
          addressCountry: 'LK',
        },
        sameAs: [
          siteConfig.socials.instagram,
          siteConfig.socials.linkedin,
          siteConfig.socials.github,
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'ApexGen Web Design & Development Services',
          itemListElement: siteConfig.servicePillars.map((pillar, index) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: pillar.title,
              description: pillar.shortDesc,
            },
            position: index + 1,
          })),
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} dark scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <Script
              id="google-analytics-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body
        suppressHydrationWarning
        className="bg-[#050507] text-[#f4f4f6] font-sans antialiased selection:bg-[#FF5E00] selection:text-white"
      >
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
