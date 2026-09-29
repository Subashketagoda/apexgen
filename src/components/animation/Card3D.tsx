'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  maxRotate?: number; // Maximum tilt angle in degrees (default: 4)
  glareOpacity?: number; // Max glare overlay opacity (default: 0.12)
}

export function Card3D({
  children,
  className = '',
  maxRotate = 4,
  glareOpacity = 0.1,
}: Card3DProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isTouch, setIsTouch] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Smooth organic spring physics for tilt
  const springConfig = { damping: 20, stiffness: 260, mass: 0.5 };
  const rotateX = useSpring(useMotionValue(0), springConfig);
  const rotateY = useSpring(useMotionValue(0), springConfig);

  // Dynamic glare coordinates (percentage)
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, active: false });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const media = window.matchMedia('(pointer: fine)');
    setIsTouch(!media.matches);
    const onChange = () => setIsTouch(!media.matches);
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouch || shouldReduceMotion || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const relativeX = e.clientX - rect.left;
    const relativeY = e.clientY - rect.top;

    // Normalised between -0.5 and 0.5
    const normX = relativeX / width - 0.5;
    const normY = relativeY / height - 0.5;

    // Inverted rotateX for natural tilt
    rotateX.set(-normY * maxRotate);
    rotateY.set(normX * maxRotate);

    setGlarePos({
      x: (relativeX / width) * 100,
      y: (relativeY / height) * 100,
      active: true,
    });
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    setGlarePos((prev) => ({ ...prev, active: false }));
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        shouldReduceMotion || isTouch
          ? undefined
          : {
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }
      }
      className={`relative overflow-hidden will-change-transform ${className}`}
    >
      {/* 3D Depth Content */}
      <div className="relative z-10 w-full h-full">{children}</div>

      {/* Dynamic Specular Glare Reflection (desktop only) */}
      {!isTouch && !shouldReduceMotion && (
        <div
          className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] transition-opacity duration-300"
          style={{
            opacity: glarePos.active ? glareOpacity : 0,
            background: `radial-gradient(circle 320px at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.45), transparent 75%)`,
          }}
        />
      )}
    </motion.div>
  );
}
