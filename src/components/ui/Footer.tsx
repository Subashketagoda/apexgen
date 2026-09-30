'use client';

import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/data/siteConfig';
import { ArrowUp, ArrowUpRight } from 'lucide-react';

export function Footer() {
  const navLinks = [
    { label: 'Work', href: '/#work' },
    { label: 'Services', href: '/#services' },
    { label: 'Process', href: '/#process' },
    { label: 'Pricing', href: '/#pricing' },
    { label: 'Contact', href: '/#contact' },
  ];

  const socialLinks = [
    { label: 'Instagram', href: siteConfig.socials.instagram },
    { label: 'Facebook', href: siteConfig.socials.facebook },
    { label: 'LinkedIn', href: siteConfig.socials.linkedin },
    { label: 'GitHub', href: siteConfig.socials.github },
  ];

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#050507] text-[#f4f4f6] pt-20 sm:pt-28 pb-12 sm:pb-16 border-t border-white/10 overflow-hidden relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 space-y-16 relative z-10">
        {/* Brand & Editorial Positioning */}
        <div className="space-y-3">
          <div className="text-5xl sm:text-7xl md:text-8xl font-light tracking-[-0.04em] text-white uppercase font-mono">
            ApexGen
          </div>
          <p className="text-sm sm:text-base font-mono tracking-wider text-neutral-400">
            Digital experiences for ambitious businesses.
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 pb-16 border-b border-white/10">
          {/* Navigation Links */}
          <div className="md:col-span-5 space-y-4">
            <div className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
              NAVIGATION
            </div>
            <ul className="space-y-3 text-xs sm:text-sm font-mono">
              {navLinks.map((link) => (
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

          {/* Social Links */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
              CONNECT
            </div>
            <ul className="space-y-3 text-xs sm:text-sm font-mono">
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

          {/* Contact & Back to Top */}
          <div className="md:col-span-3 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
                DIRECT INQUIRY
              </div>
              <div className="text-xs sm:text-sm font-mono text-neutral-400 space-y-2">
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors block"
                >
                  {siteConfig.contact.email}
                </a>
                <span className="block text-neutral-500 text-[11px]">
                  {siteConfig.domain}
                </span>
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full border border-white/15 bg-white/[0.02] hover:bg-white hover:text-black transition-all text-xs font-mono uppercase tracking-wider text-neutral-300 cursor-pointer"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-neutral-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} ApexGen. All rights reserved.
          </div>
          <div className="tracking-widest uppercase text-[11px] text-neutral-600">
            Colombo, Sri Lanka &bull; Global Digital Flagships
          </div>
        </div>
      </div>
    </footer>
  );
}
