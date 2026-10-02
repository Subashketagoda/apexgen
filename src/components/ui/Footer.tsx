'use client';

import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/data/siteConfig';
import { ArrowUp, ArrowUpRight } from 'lucide-react';

export function Footer() {
  const navLinks = [
    { label: 'WORK', href: '/#work' },
    { label: 'SERVICES', href: '/services' },
    { label: 'PROCESS', href: '/#process' },
    { label: 'PRICING', href: '/#pricing' },
    { label: 'CONTACT', href: '/#contact' },
  ];

  const serviceLinks = [
    { label: 'Website Design', href: '/services/web-design' },
    { label: 'Web Development', href: '/services/web-development' },
    { label: 'E-commerce Stores', href: '/services/ecommerce' },
    { label: 'Booking Systems', href: '/services/booking-systems' },
    { label: 'Technical SEO', href: '/services/seo' },
    { label: 'Business Automation', href: '/services/automation' },
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
    <footer className="bg-[#050505] text-[#F5F5F5] pt-24 sm:pt-32 pb-12 sm:pb-16 border-t border-white/10 overflow-hidden relative select-none">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 space-y-16 sm:space-y-20 relative z-10">
        {/* Brand & Editorial Statement */}
        <div className="space-y-3">
          <div className="text-3xl sm:text-5xl font-light tracking-tight text-white uppercase font-mono">
            APEXGEN
          </div>
          <p className="text-xs sm:text-sm font-mono tracking-[0.25em] text-[#8A8A8A] uppercase">
            DIGITAL EXPERIENCES FOR AMBITIOUS BUSINESSES.
          </p>
        </div>

        {/* Links 4-Column Grid for Internal Linking & Technical SEO */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 sm:gap-10 pb-16 border-b border-white/10">
          {/* Column 1: Navigation */}
          <div className="col-span-1 md:col-span-3 space-y-4">
            <div className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
              STUDIO
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm font-mono">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#8A8A8A] hover:text-white transition-colors relative group inline-block py-0.5"
                  >
                    <span>{link.label}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#FF5E00] transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Dedicated Services */}
          <div className="col-span-1 md:col-span-4 space-y-4">
            <div className="text-xs font-mono tracking-widest text-[#FF5E00] uppercase">
              CAPABILITIES
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm font-mono">
              {serviceLinks.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-[#8A8A8A] hover:text-white transition-colors relative group inline-block py-0.5"
                  >
                    <span>{service.label}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#FF5E00] transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social Links */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <div className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
              NETWORK
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm font-mono">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8A8A8A] hover:text-white transition-colors inline-flex items-center space-x-1.5 group py-0.5"
                  >
                    <span>{social.label}</span>
                    <ArrowUpRight className="w-3 h-3 text-neutral-600 group-hover:text-[#FF5E00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Back to Top */}
          <div className="col-span-1 md:col-span-3 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
                DIRECT INQUIRY
              </div>
              <div className="text-xs sm:text-sm font-mono text-[#8A8A8A] space-y-2">
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors block text-neutral-200"
                >
                  {siteConfig.contact.email}
                </a>
                <span className="block text-neutral-500 text-[11px]">
                  {siteConfig.domain} &bull; COLOMBO [IST]
                </span>
                <span className="block text-[#FF5E00] text-[11px]">
                  DIRECT WHATSAPP: {siteConfig.contact.whatsappDisplay}
                </span>
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.02] hover:bg-[#FF5E00] hover:text-black hover:border-[#FF5E00] transition-all text-xs font-mono uppercase tracking-wider text-neutral-400 cursor-pointer"
              >
                <span>BACK TO TOP</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#8A8A8A] gap-4">
          <div>
            &copy; {new Date().getFullYear()} APEXGEN. ALL RIGHTS RESERVED.
          </div>
          <div className="tracking-widest uppercase text-[11px] text-neutral-600">
            HIGH-END DIGITAL FLAGSHIPS &bull; BESPOKE CODE &bull; SRI LANKA &amp; GLOBAL
          </div>
        </div>

        {/* Large Final APEXGEN Typography at Bottom */}
        <div className="pt-8 overflow-hidden select-none pointer-events-none text-center">
          <div className="text-[14vw] sm:text-[16vw] font-light leading-[0.75] tracking-[-0.05em] text-white/[0.035] font-mono uppercase">
            APEXGEN
          </div>
        </div>
      </div>
    </footer>
  );
}
