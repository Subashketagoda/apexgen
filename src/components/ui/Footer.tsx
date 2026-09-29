'use client';

import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/data/siteConfig';
import { ArrowUpRight, ArrowUp } from 'lucide-react';
import { formatWhatsAppUrl } from '@/lib/utils';

export function Footer() {
  const footerLinks = [
    { label: 'WORK', href: '/#work' },
    { label: 'SERVICES', href: '/#services' },
    { label: 'PROCESS', href: '/#process' },
    { label: 'PRICING', href: '/#pricing' },
    { label: 'ABOUT', href: '/#about' },
    { label: 'START A PROJECT', href: '/#contact' },
  ];

  const socialLinks = [
    { label: 'INSTAGRAM', href: siteConfig.socials.instagram },
    { label: 'LINKEDIN', href: siteConfig.socials.linkedin },
    { label: 'GITHUB', href: siteConfig.socials.github },
    { label: 'FACEBOOK', href: siteConfig.socials.facebook },
    { label: 'X', href: siteConfig.socials.x },
  ];

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#050507] text-[#f4f4f6] pt-20 sm:pt-28 pb-12 sm:pb-16 border-t border-white/10 overflow-hidden relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 space-y-16 relative z-10">
        {/* Massive Studio Wordmark */}
        <div className="space-y-4">
          <div className="text-6xl sm:text-8xl md:text-9xl font-light tracking-[-0.04em] text-white uppercase font-mono">
            APEXGEN
          </div>
          <p className="text-sm sm:text-xl font-mono tracking-[0.2em] text-neutral-400 uppercase">
            BUILD DIGITAL EXPERIENCES THAT PEOPLE REMEMBER.
          </p>
        </div>

        {/* Links & Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 pb-16 border-b border-white/10">
          {/* Column 1: Navigation Links */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
              INDEX
            </div>
            <ul className="space-y-3 text-xs font-mono">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors relative group inline-block py-0.5"
                  >
                    <span>{link.label}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Contact Details */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
              CONTACT
            </div>
            <div className="space-y-3 text-xs font-mono text-neutral-400">
              <div>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors block"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
              <div>
                <a
                  href={formatWhatsAppUrl(siteConfig.contact.whatsappNumber, 'Hello ApexGen!')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors block"
                >
                  WhatsApp: {siteConfig.contact.whatsappDisplay}
                </a>
              </div>
              <div className="text-neutral-500">
                Domain: <span className="text-neutral-300">{siteConfig.domain}</span>
              </div>
            </div>
          </div>

          {/* Column 3: Social Links & Back to top */}
          <div className="md:col-span-4 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
                NETWORK
              </div>
              <ul className="space-y-3 text-xs font-mono">
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-white transition-colors inline-flex items-center space-x-1.5 group py-0.5"
                    >
                      <span>{social.label}</span>
                      <ArrowUpRight className="w-3 h-3 text-neutral-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/5 hover:bg-white hover:text-black transition-all text-xs font-mono uppercase tracking-wider text-neutral-300 cursor-pointer"
              >
                <span>BACK TO TOP</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-neutral-500 gap-4">
          <div>
            &copy; 2026 APEXGEN. ALL RIGHTS RESERVED.
          </div>
          <div className="tracking-widest uppercase text-[11px] text-neutral-600">
            COLOMBO &bull; GLOBAL DIGITAL STUDIO
          </div>
        </div>
      </div>
    </footer>
  );
}
