'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, MessageSquare } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { siteConfig } from '@/data/site';
import { formatWhatsAppUrl } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'WORK', href: '#work' },
    { label: 'SERVICES', href: '#services' },
    { label: 'PROCESS', href: '#process' },
    { label: 'PRICING', href: '#pricing' },
    { label: 'ABOUT', href: '#about' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
          isScrolled
            ? 'py-2.5 sm:py-3 bg-[#08080a]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_12px_32px_rgba(0,0,0,0.8)]'
            : 'py-3.5 sm:py-4 bg-[#08080a]/60 backdrop-blur-md border-b border-white/[0.04]'
        }`}
      >
        <div className="max-w-[1520px] mx-auto px-4 sm:px-6 md:px-10 flex items-center justify-between">
          {/* Left: Brand Lockup */}
          <Link
            href="/"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="ApexGen Home"
          >
            <Logo variant="full" size="md" />
          </Link>

          {/* Center: Monospaced Swiss Navigation */}
          <nav className="hidden lg:flex items-center gap-1 px-4 py-1.5 rounded-full bg-[#12131a]/80 border border-white/[0.08] backdrop-blur-md text-[11px] font-mono tracking-widest text-zinc-400">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-3 py-1 rounded-full transition-all duration-200 relative group cursor-pointer ${
                    isActive
                      ? 'text-white bg-white/10 font-bold'
                      : 'hover:text-[#d4ff00] hover:bg-white/[0.04]'
                  }`}
                >
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right: Studio Status & Action */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Live Studio Status Pill */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-[10px] font-mono tracking-wider text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00] animate-pulse" />
              <span>COLOMBO ⇄ GLOBAL</span>
            </div>

            <Link
              href="#contact"
              className="btn-volt text-[11px] py-2 px-5 tracking-wider font-mono font-bold"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex sm:hidden items-center gap-3">
            <Link
              href="#contact"
              className="btn-volt text-[10px] py-1.5 px-3 font-mono font-bold"
            >
              START
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#12131a] border border-white/[0.1] text-zinc-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Architectural Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#08080a] pt-24 pb-8 px-6 flex flex-col justify-between overflow-y-auto"
          >
            {/* Background grid */}
            <div className="absolute inset-0 architectural-grid opacity-20 pointer-events-none" />

            <div className="relative z-10 space-y-8">
              <div className="text-[10px] font-mono tracking-[0.25em] text-[#d4ff00] uppercase">
                [ INDEX // ARCHITECTURE ]
              </div>

              <div className="flex flex-col space-y-4">
                {navLinks.map((link, idx) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-3xl font-black tracking-tight text-white hover:text-[#d4ff00] transition-colors flex items-center justify-between py-2 border-b border-white/[0.06]"
                  >
                    <span>{link.label}</span>
                    <span className="text-xs font-mono text-zinc-500">0{idx + 1}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative z-10 pt-8 border-t border-white/[0.08] space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>FOUNDER: SUBHASH KETAGODA</span>
                <span className="text-[#d4ff00]">AVAILABLE Q2</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={formatWhatsAppUrl(
                    siteConfig.contact.whatsappNumber,
                    'Hello Subhash, I would like to inquire about an ApexGen project.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-architectural py-3 text-xs flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#d4ff00]" />
                  <span>WHATSAPP</span>
                </a>

                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-volt py-3 text-xs flex items-center justify-center"
                >
                  <span>INQUIRE NOW</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
