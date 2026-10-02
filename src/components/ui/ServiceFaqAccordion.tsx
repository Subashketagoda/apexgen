'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

interface ServiceFaqAccordionProps {
  faqs: FaqItem[];
}

export function ServiceFaqAccordion({ faqs }: ServiceFaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
              isOpen
                ? 'bg-neutral-900/60 border-[#FF5E00]/40 shadow-[0_4px_25px_rgba(255,94,0,0.06)]'
                : 'bg-neutral-950/40 border-white/5 hover:border-white/15'
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
              className="w-full py-5 px-6 sm:px-7 flex items-center justify-between text-left group cursor-pointer focus:outline-none"
            >
              <div className="flex items-center space-x-3.5 pr-4">
                <HelpCircle
                  className={`w-4 h-4 shrink-0 transition-colors ${
                    isOpen ? 'text-[#FF5E00]' : 'text-neutral-500 group-hover:text-neutral-300'
                  }`}
                />
                <span
                  className={`text-base sm:text-lg font-medium transition-colors ${
                    isOpen ? 'text-white' : 'text-neutral-300 group-hover:text-white'
                  }`}
                >
                  {faq.question}
                </span>
              </div>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className={`p-1.5 rounded-full shrink-0 ${
                  isOpen ? 'bg-[#FF5E00]/20 text-[#FF5E00]' : 'bg-white/5 text-neutral-400 group-hover:text-white'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="px-6 sm:px-7 pb-6 pt-1 text-sm sm:text-base text-neutral-400 leading-relaxed border-t border-white/5 font-sans">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
