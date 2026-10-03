'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/data/site';

export function Footer() {
  const navLinks = [
    { label: 'WORK', href: '/work' },
    { label: 'SERVICES', href: '/services' },
    { label: 'ABOUT', href: '/about' },
    { label: 'PROCESS', href: '/process' },
    { label: 'PRICING', href: '/pricing' },
    { label: 'START A PROJECT', href: '/start-a-project' },
  ];

  const serviceLinks = [
    { label: 'Website Design', href: '/services/web-design' },
    { label: 'Web Development', href: '/services/web-development' },
    { label: 'E-commerce Stores', href: '/services/ecommerce' },
    { label: 'Booking Systems', href: '/services/booking-systems' },
    { label: 'Technical SEO', href: '/services/seo' },
    { label: 'Business Automation', href: '/services/automation' },
  ];

  const workLinks = [
    { label: 'Cargo Pizza', href: '/work/cargo-pizza' },
    { label: '69 Studio', href: '/work/69-studio' },
    { label: 'DinePro Advisors', href: '/work/dinepro-advisors' },
  ];

  const socialLinks = [
    { label: 'INSTAGRAM', href: siteConfig.socials.instagram },
    { label: 'LINKEDIN', href: siteConfig.socials.linkedin },
    { label: 'GITHUB', href: siteConfig.socials.github },
    { label: 'FACEBOOK', href: siteConfig.socials.facebook },
  ];

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#050505] text-[#F5F5F5] pt-28 sm:pt-36 pb-12 sm:pb-16 border-t border-white/10 overflow-hidden relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 space-y-20 relative z-10">
        {/* Brand & Editorial Statement */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-white/10">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white uppercase font-mono">
              APEXGEN
            </h2>
            <p className="text-sm sm:text-base font-mono tracking-[0.25em] text-[#FF6B35] uppercase">
              DESIGN. BUILD. GROW.
            </p>
          </div>

          <div className="max-w-md">
            <p className="text-sm text-neutral-400 font-light leading-relaxed">
              We partner with ambitious founders, established restaurants, clinics, and consulting firms to build digital experiences people remember.
            </p>
          </div>
        </div>

        {/* Links 4-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 sm:gap-10 pb-16 border-b border-white/10">
          {/* Column 1: Navigation */}
          <div className="col-span-1 md:col-span-3 space-y-4">
            <div className="text-xs font-mono tracking-widest text-[#FF6B35] uppercase">
              STUDIO
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm font-mono">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors relative group inline-block py-0.5"
                  >
                    <span>{link.label}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#FF6B35] transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Services */}
          <div className="col-span-1 md:col-span-3 space-y-4">
            <div className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
              SERVICES
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm font-mono">
              {serviceLinks.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-neutral-400 hover:text-white transition-colors relative group inline-block py-0.5"
                  >
                    <span>{service.label}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#FF6B35] transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Work */}
          <div className="col-span-1 md:col-span-3 space-y-4">
            <div className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
              SELECTED WORK
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm font-mono">
              {workLinks.map((work) => (
                <li key={work.label}>
                  <Link
                    href={work.href}
                    className="text-neutral-400 hover:text-white transition-colors relative group inline-block py-0.5"
                  >
                    <span>{work.label}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#FF6B35] transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Social */}
          <div className="col-span-1 md:col-span-3 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
                CONTACT &amp; NETWORK
              </div>
              <div className="text-xs sm:text-sm font-mono text-neutral-400 space-y-2">
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors block text-neutral-200"
                >
                  {siteConfig.contact.email}
                </a>
                <span className="block text-neutral-500 text-[11px]">
                  {siteConfig.contact.location}
                </span>
                <span className="block text-[#FF6B35] text-[11px]">
                  WHATSAPP: {siteConfig.contact.whatsappDisplay}
                </span>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-mono text-neutral-400 hover:text-white transition-colors inline-flex items-center space-x-1"
                  >
                    <span>{social.label}</span>
                    <ArrowUpRight className="w-3 h-3 text-neutral-600" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.02] hover:bg-[#FF6B35] hover:text-black hover:border-[#FF6B35] transition-all text-xs font-mono uppercase tracking-wider text-neutral-400 cursor-pointer"
              >
                <span>BACK TO TOP</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-neutral-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} APEXGEN. ALL RIGHTS RESERVED.
          </div>
          <div className="tracking-widest uppercase text-[11px] text-neutral-600">
            HIGH-END DIGITAL STUDIO &bull; COLOMBO &bull; GLOBAL
          </div>
        </div>

        {/* Monolithic Watermark */}
        <div className="pt-6 overflow-hidden select-none pointer-events-none text-center">
          <div className="text-[14vw] sm:text-[16vw] font-light leading-[0.75] tracking-[-0.05em] text-white/[0.03] font-mono uppercase">
            APEXGEN
          </div>
        </div>
      </div>
    </footer>
  );
}
