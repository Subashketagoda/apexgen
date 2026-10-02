import React from 'react';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 bg-[#050505] flex flex-col items-center justify-center space-y-4 select-none">
      <div className="text-3xl sm:text-5xl font-mono font-light tracking-[0.2em] text-white uppercase animate-pulse">
        APEXGEN
      </div>
      <div className="text-xs font-mono tracking-widest text-[#FF5E00] uppercase">
        LOADING STUDIO EXPERIENCE
      </div>
      <div className="w-32 h-[1px] bg-white/10 relative overflow-hidden mt-4">
        <div className="w-1/2 h-full bg-[#FF5E00] absolute animate-[shimmer_1.5s_infinite]" />
      </div>
    </div>
  );
}
