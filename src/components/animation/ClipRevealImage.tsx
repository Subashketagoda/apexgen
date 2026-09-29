'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

interface ClipRevealImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  className?: string;
  containerClassName?: string;
  delay?: number;
}

export function ClipRevealImage({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  className = '',
  containerClassName = '',
  delay = 0.1,
}: ClipRevealImageProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      <motion.div
        className="w-full h-full"
        initial={
          shouldReduceMotion
            ? { opacity: 0 }
            : { clipPath: 'inset(100% 0 0 0)', scale: 1.08 }
        }
        whileInView={
          shouldReduceMotion
            ? { opacity: 1 }
            : { clipPath: 'inset(0% 0 0 0)', scale: 1 }
        }
        viewport={{ once: true, margin: '-50px' }}
        transition={{
          duration: 1.1,
          delay,
          ease: [0.19, 1, 0.22, 1], // Cinematic smooth reveal
        }}
      >
        {fill ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            className={`object-cover ${className}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width || 800}
            height={height || 600}
            priority={priority}
            className={`w-full h-auto object-cover ${className}`}
          />
        )}
      </motion.div>
    </div>
  );
}
