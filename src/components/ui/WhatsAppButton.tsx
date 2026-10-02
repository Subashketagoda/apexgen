'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import { formatWhatsAppUrl } from '@/lib/utils';
import { siteConfig } from '@/data/siteConfig';
import { MagneticButton } from '@/components/animation/MagneticButton';
import { trackWhatsAppClick } from '@/lib/analytics';

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center group">
      {/* Expanded Tooltip pill on hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 12, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 8, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="hidden sm:flex items-center space-x-2 mr-3 px-4 py-2 rounded-full bg-[#0e0e13]/90 backdrop-blur-md border border-white/15 text-xs font-mono text-neutral-300 shadow-xl"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>DIRECT INQUIRIES &bull; WHATSAPP</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 05 — Magnetic Floating Action Button */}
      <MagneticButton as="div" strength={0.35}>
        <a
          href={formatWhatsAppUrl(
            siteConfig.contact.whatsappNumber,
            'Hello ApexGen, I would like to inquire about building a premium website.'
          )}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick('floating_widget')}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          aria-label={`Chat with ApexGen on WhatsApp at ${siteConfig.contact.whatsappDisplay}`}
          className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#0e0e13] border border-white/25 text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:border-emerald-400/60 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] focus:outline-none"
        >
          {/* Subtle pulsing ring */}
          <span className="absolute -inset-1 rounded-full border border-emerald-500/25 animate-ping pointer-events-none" />

          {/* Brand/WhatsApp icon */}
          <MessageSquare className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-emerald-400 transition-transform duration-300 group-hover:scale-110" />

          {/* Small badge */}
          <span className="absolute -top-1 -right-1 w-3 sm:w-3.5 h-3 sm:h-3.5 rounded-full bg-emerald-500 border-2 border-[#050507] flex items-center justify-center">
            <span className="w-1 h-1 rounded-full bg-white" />
          </span>
        </a>
      </MagneticButton>
    </div>
  );
}
