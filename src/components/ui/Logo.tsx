'use client';

import React from 'react';
import Image from 'next/image';

interface LogoProps {
  variant?: 'full' | 'symbol' | 'wordmark' | '3d' | 'badge';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
  showBadge?: boolean;
}

export function Logo({
  variant = 'full',
  size = 'md',
  className = '',
  showBadge = false,
}: LogoProps) {
  // Size mappings
  const dimensions = {
    sm: { symbol: 26, text: 'text-base', gap: 'gap-2.5', iconWidth: 26, iconHeight: 26 },
    md: { symbol: 34, text: 'text-xl', gap: 'gap-3', iconWidth: 34, iconHeight: 34 },
    lg: { symbol: 46, text: 'text-2xl', gap: 'gap-3.5', iconWidth: 46, iconHeight: 46 },
    xl: { symbol: 64, text: 'text-4xl', gap: 'gap-4', iconWidth: 64, iconHeight: 64 },
    '2xl': { symbol: 96, text: 'text-6xl', gap: 'gap-6', iconWidth: 96, iconHeight: 96 },
  }[size];

  // 23 — Logo Hover Interaction: emblem scales with subtle tilt and returns smoothly
  const renderIconBadge = (width: number, height: number) => (
    <div
      className="relative overflow-hidden rounded-[22%] bg-[#08080c] border border-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.8),0_0_15px_rgba(255,255,255,0.08)] shrink-0 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-108 group-hover:rotate-1 group-hover:border-white/50 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
      style={{ width, height }}
    >
      <Image
        src="/brand/apexgen-icon.png"
        alt="ApexGen Official Icon"
        fill
        sizes={`${width * 2}px`}
        className="object-cover transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        priority
      />
    </div>
  );

  // App Icon Badge only
  if (variant === 'badge') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        {renderIconBadge(dimensions.iconWidth, dimensions.iconHeight)}
      </div>
    );
  }

  // 3D render version
  if (variant === '3d') {
    return (
      <div className={`relative flex items-center ${dimensions.gap} ${className} group cursor-pointer`}>
        {renderIconBadge(dimensions.iconWidth, dimensions.iconHeight)}
        <span className={`font-mono tracking-[0.24em] text-white uppercase font-light transition-transform duration-300 group-hover:translate-x-0.5 ${dimensions.text}`}>
          APEX<span className="font-bold text-neutral-300">GEN</span>
        </span>
      </div>
    );
  }

  // Symbol only
  if (variant === 'symbol') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        {renderIconBadge(dimensions.iconWidth, dimensions.iconHeight)}
      </div>
    );
  }

  // Wordmark only
  if (variant === 'wordmark') {
    return (
      <div className={`inline-flex items-center font-mono uppercase text-white tracking-[0.25em] ${dimensions.text} ${className}`}>
        <span>APEX</span>
        <span className="font-bold text-neutral-300">GEN</span>
      </div>
    );
  }

  // Full Brand Lockup: Official Icon Badge + Futuristic Wordmark
  return (
    <div className={`inline-flex items-center ${dimensions.gap} ${className} group select-none cursor-pointer`}>
      {/* Official Icon Badge */}
      {renderIconBadge(dimensions.iconWidth, dimensions.iconHeight)}

      {/* Styled Wordmark with 23 — Hover shift */}
      <div className="flex flex-col transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
        <div className={`font-mono tracking-[0.24em] uppercase text-white leading-none ${dimensions.text}`}>
          <span className="font-light">APEX</span>
          <span className="font-bold text-neutral-300">GEN</span>
        </div>
        {showBadge && (
          <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-neutral-500 mt-1">
            DIGITAL STUDIO
          </span>
        )}
      </div>
    </div>
  );
}
