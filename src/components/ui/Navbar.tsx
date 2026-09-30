'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/data/siteConfig';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { MagneticButton } from '@/components/animation/MagneticButton';
import { ScrollProgressBar } from '@/components/animation/ScrollProgressBar';
import { RollingText } from '@/components/animation/RollingText';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    { label: 'WORK', href: '/#work' },
    { label: 'SERVICES', href: '/#services' },
    { label: 'PROCESS', href: '/#process' },
    { label: 'PRICING', href: '/#pricing' },
    { label: 'CONTACT', href: '/#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false);

    if (href.startsWith('/#') || href.startsWith('#')) {
      const targetId = href.replace('/#', '').replace('#', '');

      if (typeof window !== 'undefined' && window.location.pathname === '/') {
        const element = document.getElementById(targetId);
        if (element) {
          e.preventDefault();
          element.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', `/#${targetId}`);
        }
      }
    }
  };

  return (
    <>
      <ScrollProgressBar />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? 'py-3 sm:py-3.5 bg-[#050507]/90 backdrop-blur-md border-b border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.7)]'
            : 'py-5 sm:py-7 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
          {/* Left: APEXGEN Brand Logo */}
          <Link
            href="/"
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                window.history.pushState(null, '', '/');
              }
            }}
            className="group flex items-center focus:outline-none transition-transform duration-300 hover:scale-[1.02]"
            aria-label="ApexGen Home"
          >
            <Logo variant="full" size="md" />
          </Link>

          {/* Center/Right: Nav Links */}
          <nav className="hidden md:flex items-center space-x-8 text-xs tracking-widest uppercase font-mono text-neutral-400">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-white transition-colors duration-200 py-1 relative group inline-block cursor-pointer"
              >
                <RollingText text={link.label} />
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-white transition-all duration-300 ease-out group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Primary CTA: START A PROJECT */}
          <div className="hidden md:flex items-center space-x-4">
            <MagneticButton as="div" strength={0.25} ariaLabel="Start a project">
              <Link
                href="/#contact"
                onClick={(e) => handleNavClick(e, '/#contact')}
                className="group relative inline-flex items-center space-x-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/5 text-xs uppercase tracking-wider font-mono text-white transition-all duration-300 hover:bg-white hover:text-black hover:border-white shadow-[0_0_20px_rgba(255,255,255,0.15)] active:scale-95 cursor-pointer"
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
              href="/#contact"
              onClick={(e) => handleNavClick(e, '/#contact')}
              className="px-3.5 py-1.5 rounded-full text-[11px] font-mono tracking-wider bg-white text-black font-semibold hover:bg-neutral-200 transition-colors"
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
            className="fixed inset-0 bg-[#050507]/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-8 z-[9999] md:hidden overflow-y-auto"
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

            {/* Navigation Links */}
            <div className="space-y-4 py-8">
              <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block">
                NAVIGATION
              </span>
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-2xl sm:text-3xl font-light tracking-tight text-white hover:text-neutral-300 transition-colors py-3 flex items-center justify-between border-b border-white/5 active:text-neutral-400 cursor-pointer"
                    >
                      <span>{link.label}</span>
                      <span className="text-xs font-mono text-neutral-500">0{idx + 1}</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>

            {/* Bottom Mobile CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.35 }}
              className="space-y-3 pt-6 border-t border-white/10"
            >
              <Link
                href="/#contact"
                onClick={(e) => handleNavClick(e, '/#contact')}
                className="w-full py-4 rounded-full bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold flex items-center justify-center space-x-2 shadow-lg active:scale-95 transition-transform cursor-pointer"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <div className="text-[10px] font-mono text-neutral-500 text-center pt-2">
                APEXGEN &bull; {siteConfig.domain}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
