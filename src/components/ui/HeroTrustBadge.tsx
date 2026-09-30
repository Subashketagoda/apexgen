'use client';

import React from 'react';
import { Star, ShieldCheck } from 'lucide-react';

export function HeroTrustBadge() {
  return (
    <div className="inline-flex flex-wrap items-center gap-3 py-2 px-3.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md">
      {/* 5-Star Rating */}
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
        ))}
        <span className="text-xs font-mono font-medium text-white ml-1.5">5.0</span>
      </div>

      <span className="hidden sm:inline-block w-px h-3.5 bg-white/15" />

      {/* Trust Copy */}
      <div className="flex items-center space-x-1.5 text-[11px] font-mono tracking-wider text-neutral-300 uppercase">
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
        <span>100% PRODUCTION VERIFIED &bull; 15+ BRANDS</span>
      </div>
    </div>
  );
}
