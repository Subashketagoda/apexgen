'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * Controlled easing curves for luxury editorial feel
 */
export const transitions = {
  luxury: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  cinematic: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
  quick: { duration: 0.45, ease: [0.25, 1, 0.5, 1] },
};

/**
 * Reveal: Smooth opacity and subtle vertical displacement on viewport entry
 */
export function Reveal({
  children,
  className = '',
  delay = 0,
  duration = 0.8,
  yOffset = 25,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * FadeUp: Classical upward reveal
 */
export function FadeUp({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * TextReveal: Splits text lines or words with mask overflow
 */
export function TextReveal({
  text,
  className = '',
  tag: Tag = 'h2',
  delay = 0,
}: {
  text: string;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';
  delay?: number;
}) {
  const words = text.split(' ');

  return (
    <Tag className={`overflow-hidden ${className}`}>
      <motion.span
        initial={{ y: '100%', opacity: 0 }}
        whileInView={{ y: '0%', opacity: 1 }}
        viewport={{ once: true, margin: '-20px' }}
        transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
        className="inline-block"
      >
        {words.join(' ')}
      </motion.span>
    </Tag>
  );
}

/**
 * ImageReveal: Editorial wipe/clip-path mask reveal for photography
 */
export function ImageReveal({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div className={`overflow-hidden relative ${className}`}>
      <motion.div
        initial={{ scale: 1.15, opacity: 0.4 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}

/**
 * Parallax: Controlled vertical translation responding to scroll offset
 */
export function Parallax({
  children,
  speed = 0.2,
  className = '',
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50 * speed, 50 * speed]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}

/**
 * SmoothSection: High-end editorial section container with subtle entry
 */
export function SmoothSection({
  children,
  id,
  className = '',
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-24 transition-colors duration-500 ${className}`}
    >
      {children}
    </section>
  );
}
