import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { ArrowLeft, Compass, Home, Layers, MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: '404 — Page Not Found | ApexGen Studio',
  description: 'The requested route does not exist or has been relocated within the ApexGen architecture.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="bg-[#050507] text-[#f4f4f6] min-h-screen selection:bg-[#FF5E00] selection:text-white flex flex-col justify-between relative overflow-hidden">
      <CustomCursor />
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 md:px-12 py-32 relative z-10">
        {/* Ambient Orange Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF5E00]/10 blur-[150px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-2xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-[#FF5E00]/30 bg-[#FF5E00]/10 text-xs font-mono text-[#FF7A1A] tracking-wider uppercase mb-8">
            <Compass className="w-3.5 h-3.5 text-[#FF5E00]" />
            <span>ERROR 404 — ROUTE UNDEFINED</span>
          </div>

          {/* Large Editorial Headline */}
          <div className="text-8xl sm:text-9xl font-mono font-bold tracking-tighter text-white/10 mb-4 select-none">
            404
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 -mt-10 sm:-mt-14">
            Coordinates Outside Current Matrix.
          </h1>

          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-10 max-w-lg mx-auto">
            The page you are looking for has either been migrated during the ApexGen 2.0 deployment or does not exist. Explore our core studio sections below.
          </p>

          {/* Quick Route Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10 text-left">
            <Link
              href="/"
              className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FF5E00]/50 hover:bg-[#FF5E00]/5 transition-all group"
            >
              <Home className="w-4 h-4 text-[#FF5E00] mb-2 group-hover:scale-110 transition-transform" />
              <div className="text-xs font-mono font-semibold text-white">HOME</div>
              <div className="text-[11px] text-neutral-400">Return to headquarters</div>
            </Link>

            <Link
              href="/#work"
              className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FF5E00]/50 hover:bg-[#FF5E00]/5 transition-all group"
            >
              <Compass className="w-4 h-4 text-[#FF5E00] mb-2 group-hover:scale-110 transition-transform" />
              <div className="text-xs font-mono font-semibold text-white">PORTFOLIO</div>
              <div className="text-[11px] text-neutral-400">View flagship cases</div>
            </Link>

            <Link
              href="/services"
              className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FF5E00]/50 hover:bg-[#FF5E00]/5 transition-all group"
            >
              <Layers className="w-4 h-4 text-[#FF5E00] mb-2 group-hover:scale-110 transition-transform" />
              <div className="text-xs font-mono font-semibold text-white">SERVICES</div>
              <div className="text-[11px] text-neutral-400">Explore capabilities</div>
            </Link>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full bg-[#FF5E00] text-black font-semibold text-xs font-mono tracking-wider uppercase hover:bg-[#FF7A1A] transition-all shadow-[0_0_25px_rgba(255,94,0,0.25)]"
            >
              <ArrowLeft className="w-4 h-4 text-black" />
              <span>Return To Homepage</span>
            </Link>

            <a
              href="https://wa.me/94770289139"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full border border-white/20 text-neutral-300 font-mono text-xs tracking-wider uppercase hover:text-white hover:border-white transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#FF5E00]" />
              <span>Contact Studio Support</span>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
