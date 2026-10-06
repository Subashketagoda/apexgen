'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import { formatWhatsAppUrl } from '@/lib/utils';
import { siteConfig } from '@/data/siteConfig';

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40 flex items-center group">
      {/* Tooltip on hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="hidden sm:flex items-center gap-2 mr-3 px-3.5 py-1.5 rounded-full bg-[#0e0f14]/95 backdrop-blur-md border border-white/[0.15] text-[11px] font-mono text-zinc-300 shadow-2xl"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00] animate-pulse" />
            <span>DIRECT INQUIRY // WHATSAPP</span>
          </motion.div>
        )}
      </AnimatePresence>

      <a
        href={formatWhatsAppUrl(
          siteConfig.contact.whatsappNumber,
          'Hello Subhash, I would like to inquire about building a website with ApexGen.'
        )}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label={`Chat with Subhash Ketagoda on WhatsApp at ${siteConfig.contact.whatsappDisplay}`}
        className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#0e0f14] border border-white/[0.15] hover:border-[#d4ff00] text-white shadow-[0_8px_30px_rgba(0,0,0,0.8)] transition-all duration-300 hover:scale-108 focus:outline-none cursor-pointer"
      >
        {/* Subtle pulsing volt ring */}
        <span className="absolute -inset-1 rounded-full border border-[#d4ff00]/25 animate-ping pointer-events-none" />

        {/* WhatsApp Icon */}
        <MessageSquare className="w-5 h-5 text-[#d4ff00] transition-transform duration-300 group-hover:scale-110" />

        {/* Status dot */}
        <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[#08080a] flex items-center justify-center">
          <span className="w-2 h-2 rounded-full bg-[#d4ff00]" />
        </span>
      </a>
    </div>
  );
}
