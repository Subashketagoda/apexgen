'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface MaskRevealHeadingProps {
  lines: string[];
  className?: string;
  lineClassName?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'div';
  delay?: number;
  stagger?: number;
  triggerOnScroll?: boolean;
}

export function MaskRevealHeading({
  lines,
  className = '',
  lineClassName = '',
  as = 'h2',
  delay = 0.1,
  stagger = 0.12,
  triggerOnScroll = true,
}: MaskRevealHeadingProps) {
  const shouldReduceMotion = useReducedMotion();
  const Tag = as;

  return (
    <Tag className={`relative font-light tracking-tight text-white uppercase ${className}`}>
      {lines.map((line, index) => (
        <span key={index} className="block overflow-hidden py-0.5">
          <motion.span
            className={`block will-change-transform ${lineClassName}`}
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : { y: '110%', opacity: 0, filter: 'blur(8px)' }
            }
            {...(triggerOnScroll
              ? {
                  whileInView: shouldReduceMotion
                    ? { opacity: 1 }
                    : { y: '0%', opacity: 1, filter: 'blur(0px)' },
                  viewport: { once: true, margin: '-60px' },
                }
              : {
                  animate: shouldReduceMotion
                    ? { opacity: 1 }
                    : { y: '0%', opacity: 1, filter: 'blur(0px)' },
                })}
            transition={{
              duration: 0.95,
              delay: delay + index * stagger,
              ease: [0.16, 1, 0.3, 1], // Luxurious cubic-bezier smooth settling
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
