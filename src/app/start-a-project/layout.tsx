import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Start a Project | Project Brief & Quotation Request | ApexGen',
  description:
    'Start your website design or development project with ApexGen. Submit your project requirements, scope, and budget for a tailored commercial proposal within 24 hours.',
  keywords: [
    'Start a website project Sri Lanka',
    'Website design quotation Colombo',
    'Hire web developer Sri Lanka',
    'Web design agency proposal',
    'ApexGen project brief',
    'Subhash Ketagoda web development',
  ],
  alternates: {
    canonical: `${siteConfig.siteUrl}/start-a-project`,
  },
  openGraph: {
    title: 'Start a Project | Project Brief & Proposal | ApexGen',
    description:
      'Begin your digital transformation with ApexGen. Share your project requirements and receive a comprehensive proposal.',
    url: `${siteConfig.siteUrl}/start-a-project`,
    type: 'website',
    images: [
      {
        url: '/brand/apexgen-brand-kit.png',
        width: 1200,
        height: 630,
        alt: 'Start a Project with ApexGen Digital Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Start a Project | ApexGen',
    description:
      'Submit your project requirements, scope, and budget for a tailored commercial proposal within 24 hours.',
    images: ['/brand/apexgen-brand-kit.png'],
  },
};

export default function StartAProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
