'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { Logo } from '@/components/ui/Logo';

export function Footer() {
  const navLinks = [
    { label: 'Work', href: '/work' },
    { label: 'Services', href: '/services' },
    { label: 'Process', href: '/process' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/contact' },
  ];

  const serviceLinks = [
    { label: 'Web Design', href: '/services/web-design' },
    { label: 'Web Development', href: '/services/web-development' },
    { label: 'UI/UX Design', href: '/services/web-design' },
    { label: 'SEO & Discovery', href: '/services/seo' },
    { label: 'E-Commerce', href: '/services/ecommerce' },
    { label: 'Digital Solutions', href: '/services/digital-solutions' },
  ];

  const socialLinks = [
    { label: 'Instagram', href: siteConfig.socials.instagram },
    { label: 'LinkedIn', href: siteConfig.socials.linkedin },
    { label: 'GitHub', href: siteConfig.socials.github },
    { label: 'Facebook', href: siteConfig.socials.facebook },
  ];

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#030305] text-[#f5f5f7] pt-24 sm:pt-32 pb-12 border-t border-white/[0.08] relative overflow-hidden select-none">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 studio-grid pointer-events-none opacity-15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 space-y-16 sm:space-y-20">
        
        {/* Top Brand Statement Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-white/[0.08]">
          <div className="space-y-4">
            <Link href="/" className="inline-block" aria-label="ApexGen Home">
              <Logo variant="full" size="lg" />
            </Link>
            <p className="text-base sm:text-lg text-zinc-300 font-light max-w-md">
              Digital experiences built for ambitious businesses.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/start-a-project"
              className="px-6 py-3 rounded-full bg-white text-black text-xs font-mono tracking-wider uppercase font-semibold hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              Start a Project
            </Link>
            <button
              onClick={scrollToTop}
              type="button"
              className="p-3 rounded-full bg-white/[0.05] border border-white/[0.1] text-zinc-400 hover:text-white hover:border-white/[0.25] transition-all cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Links Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 sm:gap-10 pb-16 border-b border-white/[0.08]">
          
          {/* Col 1: Navigation (MD 3 cols) */}
          <div className="col-span-1 md:col-span-3 space-y-4">
            <div className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
              Navigation
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Services (MD 4 cols) */}
          <div className="col-span-1 md:col-span-4 space-y-4">
            <div className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
              Services
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Socials (MD 2 cols) */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <div className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
              Connect
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 text-zinc-600 group-hover:text-white transition-colors" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Studio Office / Contact (MD 3 cols) */}
          <div className="col-span-1 md:col-span-3 space-y-4">
            <div className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
              Studio
            </div>
            <div className="text-xs sm:text-sm text-zinc-400 space-y-2">
              <p>Colombo, Sri Lanka</p>
              <p>Operating Globally &bull; GMT+5:30</p>
              <div className="pt-2 space-y-1">
                <a
                  href="tel:0789656969"
                  className="text-zinc-300 hover:text-white font-mono text-xs block transition-colors"
                >
                  078 965 6969
                </a>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-zinc-400 hover:text-white underline underline-offset-4 font-mono text-xs block transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <div>
            &copy; {new Date().getFullYear()} ApexGen Studio. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-[11px]">
            <span>Next.js 16 Edge Architecture</span>
            <span>&bull;</span>
            <span>Zero WordPress Bloat</span>
          </div>
        </div>

      </div>

      {/* Massive Subtle APEXGEN Wordmark in the Background (Matching Reference Image bottom branding) */}
      <div className="mt-12 sm:mt-16 w-full overflow-hidden select-none pointer-events-none">
        <div className="text-center font-light tracking-[-0.04em] uppercase text-white/[0.04] text-[clamp(4.5rem,14vw,16rem)] leading-none font-mono">
          APEXGEN
        </div>
      </div>
    </footer>
  );
}
