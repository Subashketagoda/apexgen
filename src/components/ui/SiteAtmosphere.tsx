'use client';

import React, { useEffect, useState } from 'react';

export function SiteAtmosphere() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(media.matches);
    const onChange = () => setReduceMotion(media.matches);
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[#050507]" />

      <div className="absolute -top-[18%] right-[-8%] h-[70vh] w-[70vh] rounded-full bg-[#3B82F6]/18 blur-[140px]" />
      <div className="absolute top-[32%] -left-[12%] h-[55vh] w-[55vh] rounded-full bg-[#8B5CF6]/14 blur-[130px]" />
      <div className="absolute bottom-[-10%] right-[18%] h-[42vh] w-[42vh] rounded-full bg-[#22D3EE]/[0.07] blur-[120px]" />
      <div className="absolute top-[58%] left-[38%] h-[36vh] w-[36vh] rounded-full bg-[#080B18] blur-[90px]" />

      {!reduceMotion && (
        <>
          <div className="site-light-ray site-light-ray-a" />
          <div className="site-light-ray site-light-ray-b" />
          <div className="site-light-ray site-light-ray-c" />
        </>
      )}

      <div className="absolute inset-0 opacity-[0.18] studio-grid" />
      <div className="absolute inset-0 film-grain opacity-70 mix-blend-overlay" />
      <div className="hero-vignette opacity-80" />
    </div>
  );
}
