'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

interface SplitTextProps {
  text: string;
  className?: string;
  wordClassName?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  stagger?: number;
  delay?: number;
}

export function SplitText({
  text,
  className = '',
  wordClassName = '',
  as = 'h2',
  stagger = 0.05,
  delay = 0.1,
}: SplitTextProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const Tag = as as React.ElementType;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Subtle second movement as user scrolls away
  const exitY = useTransform(scrollYProgress, [0.7, 1], [0, -15]);

  const words = text.split(' ');

  return (
    <Tag ref={containerRef} className={`inline-block ${className}`}>
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden mr-[0.25em] align-top">
          <motion.span
            style={shouldReduceMotion ? undefined : { y: exitY }}
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : { y: '100%', opacity: 0, filter: 'blur(6px)' }
            }
            whileInView={
              shouldReduceMotion
                ? { opacity: 1 }
                : { y: '0%', opacity: 1, filter: 'blur(0px)' }
            }
            viewport={{ once: true, margin: '-40px' }}
            transition={{
              duration: 0.8,
              delay: delay + index * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`inline-block will-change-transform ${wordClassName}`}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
