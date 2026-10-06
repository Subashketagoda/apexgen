'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUp, ArrowUpRight, MessageSquare, Mail, Phone, MapPin } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { Logo } from '@/components/ui/Logo';
import { formatWhatsAppUrl } from '@/lib/utils';

export function Footer() {
  const [colomboTime, setColomboTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Colombo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });
      setColomboTime(`${timeStr} IST`);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Selected Work', href: '#work' },
    { label: 'Capabilities', href: '#services' },
    { label: 'Sprint Process', href: '#process' },
    { label: 'Investment Tiers', href: '#pricing' },
    { label: 'Studio Manifesto', href: '#about' },
    { label: 'Start a Project', href: '#contact' },
  ];

  const capabilityLinks = [
    { label: 'Web Design & UI/UX', href: '#services' },
    { label: 'Next.js Development', href: '#services' },
    { label: 'WhatsApp Commerce', href: '#services' },
    { label: 'Booking Engines', href: '#services' },
    { label: 'Workflow Automation', href: '#services' },
    { label: 'Technical SEO', href: '#services' },
  ];

  return (
    <footer className="relative bg-[#050507] text-[#f5f5f7] pt-20 sm:pt-28 pb-12 border-t border-white/[0.08] overflow-hidden select-none">
      {/* Background architectural grid */}
      <div className="absolute inset-0 architectural-grid opacity-15 pointer-events-none" />

      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 md:px-10 relative z-10 space-y-16 sm:space-y-20">
        
        {/* Top Monolithic Brand Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-white/[0.08]">
          <div className="space-y-4 max-w-xl">
            <Link href="/" className="inline-block" aria-label="ApexGen Home">
              <Logo variant="full" size="lg" />
            </Link>
            <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
              Bespoke digital experiences, high-speed engineering, and online systems designed to help commercially ambitious businesses grow.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="btn-volt text-xs py-3.5 px-6 font-bold"
            >
              <span>INITIATE PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
            </a>

            <button
              onClick={scrollToTop}
              type="button"
              className="p-3.5 rounded-full bg-[#0e0f14] border border-white/[0.1] text-zinc-400 hover:text-white hover:border-[#d4ff00] transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Studio Columns Grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 sm:gap-10 pb-16 border-b border-white/[0.08]">
          
          {/* Col 1: Navigation (3 cols) */}
          <div className="col-span-1 md:col-span-3 space-y-4">
            <div className="text-[10px] font-mono tracking-widest text-[#d4ff00] uppercase">
              INDEX // NAVIGATION
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-zinc-400 hover:text-white hover:underline transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Capabilities (3 cols) */}
          <div className="col-span-1 md:col-span-3 space-y-4">
            <div className="text-[10px] font-mono tracking-widest text-[#d4ff00] uppercase">
              CAPABILITIES
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {capabilityLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Inquiries (3 cols) */}
          <div className="col-span-2 md:col-span-3 space-y-4">
            <div className="text-[10px] font-mono tracking-widest text-[#d4ff00] uppercase">
              DIRECT REACH
            </div>
            <div className="space-y-2.5 text-xs sm:text-sm text-zinc-400">
              <div>
                <a
                  href={formatWhatsAppUrl(
                    siteConfig.contact.whatsappNumber,
                    'Hello Subhash, I would like to inquire about an ApexGen project.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#d4ff00]" />
                  <span>WhatsApp: {siteConfig.contact.whatsappDisplay}</span>
                </a>
              </div>
              <div>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#d4ff00]" />
                  <span>{siteConfig.contact.email}</span>
                </a>
              </div>
              <div className="text-zinc-500 pt-2 font-mono text-xs">
                {siteConfig.contact.hours}
              </div>
            </div>
          </div>

          {/* Col 4: Studio Metadata (3 cols) */}
          <div className="col-span-2 md:col-span-3 space-y-4">
            <div className="text-[10px] font-mono tracking-widest text-[#d4ff00] uppercase">
              STUDIO LOCATION
            </div>
            <div className="space-y-2 text-xs sm:text-sm text-zinc-400">
              <p className="text-white font-medium">Colombo, Sri Lanka</p>
              <p className="font-mono text-xs text-zinc-500">6.9271° N, 79.8612° E</p>
              {colomboTime && (
                <div className="pt-2 font-mono text-xs text-[#d4ff00] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00] animate-pulse" />
                  <span>LOCAL TIME: {colomboTime}</span>
                </div>
              )}
              <p className="pt-2 text-xs text-zinc-500 font-light">
                Founder & Creative Technologist: Subhash Ketagoda
              </p>
            </div>
          </div>
        </div>

        {/* Monumental Editorial Brand Wordmark */}
        <div className="pt-8">
          <div className="text-[14vw] sm:text-[15vw] font-black tracking-tighter leading-none text-white/[0.04] text-center select-none font-mono">
            APEXGEN
          </div>
        </div>

        {/* Bottom Rights Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} APEXGEN DIGITAL STUDIO. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              INSTAGRAM
            </a>
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LINKEDIN
            </a>
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GITHUB
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
