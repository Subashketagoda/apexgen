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

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
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

  const navLinks = [
    { label: 'WORK', href: '/work' },
    { label: 'SERVICES', href: '/services' },
    { label: 'ABOUT', href: '/about' },
    { label: 'PROCESS', href: '/process' },
    { label: 'PRICING', href: '/pricing' },
  ];

  return (
    <>
      <ScrollProgressBar />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? 'py-3.5 bg-[#050505]/90 backdrop-blur-md border-b border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.8)]'
            : 'py-6 sm:py-8 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="group flex items-center focus:outline-none transition-transform duration-300 hover:scale-[1.02]"
            aria-label="ApexGen Home"
          >
            <Logo variant="full" size="md" />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8 text-xs tracking-widest uppercase font-mono text-neutral-400">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname?.startsWith(link.href + '/');
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`transition-colors duration-200 py-1 relative group inline-block cursor-pointer ${
                    isActive ? 'text-white' : 'hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-[#FF5E00] transition-all duration-300 ease-out ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop Primary CTA: START A PROJECT ↗ */}
          <div className="hidden md:flex items-center space-x-4">
            <MagneticButton as="div" strength={0.25} ariaLabel="Start a project">
              <Link
                href="/start-a-project"
                className="group relative inline-flex items-center space-x-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/5 text-xs uppercase tracking-wider font-mono text-white transition-all duration-300 hover:bg-[#FF5E00] hover:text-black hover:border-[#FF5E00] shadow-[0_0_20px_rgba(255,94,0,0.15)] active:scale-95 cursor-pointer"
              >
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5">
                  START A PROJECT
                </span>
                <ArrowUpRight className="relative z-10 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </MagneticButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2.5">
            <Link
              href="/start-a-project"
              className="px-3.5 py-1.5 rounded-full text-[11px] font-mono tracking-wider bg-[#FF5E00] text-black font-semibold transition-colors"
            >
              START
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-white/90 hover:text-white rounded-xl bg-white/5 border border-white/10 active:scale-95 focus:outline-none transition-all cursor-pointer"
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
            className="fixed inset-0 bg-[#050505]/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-10 z-[9999] md:hidden overflow-y-auto"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
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
              <span className="text-[10px] font-mono tracking-widest text-[#FF5E00] uppercase block">
                NAVIGATION
              </span>
              <nav className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-3xl sm:text-4xl font-light tracking-tight text-white hover:text-[#FF5E00] transition-colors py-1 flex items-center justify-between group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-5 h-5 text-neutral-600 group-hover:text-[#FF5E00] transition-colors" />
                  </Link>
                ))}
              </nav>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-white/10 space-y-4">
              <Link
                href="/start-a-project"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-4 rounded-full bg-[#FF5E00] text-black font-semibold text-xs font-mono uppercase tracking-wider flex items-center justify-center space-x-2"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-4 h-4 text-black" />
              </Link>

              <div className="text-center">
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-xs font-mono text-neutral-400 hover:text-white"
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
