// ApexGen Studio — Master Site & Brand Configuration

export interface NavLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  taglineSecondary: string;
  positioning: string;
  description: string;
  heroHeadline: string[];
  heroSubheadline: string;
  siteUrl: string;
  domain: string;
  contact: {
    email: string;
    whatsappNumber: string;
    whatsappDisplay: string;
    location: string;
    hours: string;
  };
  socials: {
    instagram: string;
    linkedin: string;
    github: string;
    facebook: string;
  };
  founder: {
    name: string;
    role: string;
    github: string;
  };
  navigation: NavLink[];
}

export const siteConfig: SiteConfig = {
  name: 'APEXGEN',
  legalName: 'ApexGen Digital Studio',
  founder: {
    name: 'Subhash Ketagoda',
    role: 'Founder & Lead Creative Technologist',
    github: 'https://github.com/Subashketagoda',
  },
  tagline: 'DESIGN. BUILD. GROW.',
  taglineSecondary: 'WE DESIGN WEBSITES PEOPLE REMEMBER.',
  positioning: 'Premium digital experiences for ambitious businesses.',
  description:
    'ApexGen creates premium websites, custom digital experiences, and business websites for ambitious brands in Sri Lanka and beyond.',
  heroHeadline: ['WE DESIGN', 'WEBSITES', 'PEOPLE REMEMBER.'],
  heroSubheadline:
    'Premium websites, digital experiences and online systems for ambitious businesses.',
  siteUrl: 'https://www.apexgen.website',
  domain: 'apexgen.website',
  contact: {
    email: 'contact@apexgen.website',
    whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+94770289139',
    whatsappDisplay: '+94 77 028 9139',
    location: 'Colombo, Sri Lanka & Global Remote',
    hours: 'Mon — Sat / 9:00 AM — 8:00 PM IST',
  },
  socials: {
    instagram: 'https://instagram.com/apexgen_studio',
    linkedin: 'https://linkedin.com/company/apexgen',
    github: 'https://github.com/Subashketagoda/apexgen',
    facebook: 'https://facebook.com/apexgenstudio',
  },
  navigation: [
    { label: 'WORK', href: '/work' },
    { label: 'SERVICES', href: '/services' },
    { label: 'ABOUT', href: '/about' },
    { label: 'PROCESS', href: '/process' },
    { label: 'PRICING', href: '/pricing' },
    { label: 'CONTACT', href: '/contact' },
  ],
};
