'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { MagneticButton } from '@/components/animation/MagneticButton';
import { ScrollProgressBar } from '@/components/animation/ScrollProgressBar';
import { siteConfig } from '@/data/site';
import { trackStartProjectClick } from '@/lib/analytics';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is active
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

  // Center links per specification: Work, Services, Process, Pricing
  const navLinks = [
    { label: 'Work', href: '/work' },
    { label: 'Services', href: '/services' },
    { label: 'Process', href: '/process' },
    { label: 'Pricing', href: '/pricing' },
  ];

  return (
    <>
      <ScrollProgressBar />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? 'py-3.5 bg-[#050508]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_12px_40px_rgba(0,0,0,0.85)]'
            : 'py-6 sm:py-7 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
          {/* Left: APEXGEN logo / wordmark */}
          <Link
            href="/"
            className="group flex items-center focus:outline-none transition-transform duration-300 hover:scale-[1.02]"
            aria-label="ApexGen Home"
          >
            <Logo variant="full" size="md" />
          </Link>

          {/* Center: Work, Services, Process, Pricing */}
          <nav className="hidden md:flex items-center px-6 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] backdrop-blur-md space-x-7 text-[13px] tracking-wide font-normal text-zinc-400">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname?.startsWith(link.href + '/');
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`transition-colors duration-200 py-0.5 relative group inline-block cursor-pointer ${
                    isActive ? 'text-white font-medium' : 'hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  <span
                    className={`absolute -bottom-1 left-0 h-[1.5px] bg-white transition-all duration-300 ease-out ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right: Start a Project CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <MagneticButton as="div" strength={0.25} ariaLabel="Start a project">
              <Link
                href="/start-a-project"
                onClick={() => trackStartProjectClick('navbar_desktop')}
                className="group relative inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white text-black text-xs font-medium tracking-wide transition-all duration-300 hover:bg-zinc-200 shadow-[0_0_25px_rgba(255,255,255,0.2)] active:scale-95 cursor-pointer"
              >
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5">
                  Start a Project
                </span>
                <ArrowUpRight className="relative z-10 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </MagneticButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2.5">
            <Link
              href="/start-a-project"
              onClick={() => trackStartProjectClick('navbar_mobile')}
              className="px-3.5 py-1.5 rounded-full text-[12px] tracking-wide bg-white text-black font-medium transition-colors active:scale-95"
            >
              Start
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-white/90 hover:text-white rounded-xl bg-white/[0.06] border border-white/[0.1] active:scale-95 focus:outline-none transition-all cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Animated Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-[#040407]/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-10 z-[9999] md:hidden overflow-y-auto"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center"
                aria-label="ApexGen Home"
              >
                <Logo variant="full" size="sm" />
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-white/80 hover:text-white rounded-full bg-white/10 border border-white/15 focus:outline-none cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links with Large Editorial Typography */}
            <div className="space-y-4 py-8">
              <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase block">
                NAVIGATION
              </span>
              <nav className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-3xl sm:text-4xl font-light tracking-tight text-white hover:text-zinc-300 transition-colors py-2 flex items-center justify-between group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-white transition-colors" />
                  </Link>
                ))}
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl sm:text-4xl font-light tracking-tight text-white hover:text-zinc-300 transition-colors py-2 flex items-center justify-between group"
                >
                  <span>About</span>
                  <ArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-white transition-colors" />
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl sm:text-4xl font-light tracking-tight text-white hover:text-zinc-300 transition-colors py-2 flex items-center justify-between group"
                >
                  <span>Contact</span>
                  <ArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-white transition-colors" />
                </Link>
              </nav>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-white/[0.08] space-y-4">
              <Link
                href="/start-a-project"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-4 rounded-full bg-white text-black font-semibold text-xs font-mono uppercase tracking-wider flex items-center justify-center space-x-2 active:scale-98 transition-transform"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-4 h-4 text-black" />
              </Link>

              <div className="flex flex-col items-center gap-2 pt-2 text-center">
                <a
                  href="tel:0789656969"
                  className="text-xs font-mono text-zinc-300 hover:text-white"
                >
                  Direct Call: 078 965 6969
                </a>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-xs font-mono text-zinc-500 hover:text-zinc-300"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
