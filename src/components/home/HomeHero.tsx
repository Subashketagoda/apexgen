"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HeroBackground } from "@/components/ui/HeroBackground";
import { trackStartProjectClick } from "@/lib/analytics";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#080808]">
      <HeroBackground />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] items-center px-6 py-32">
        <div className="max-w-6xl">
          <p className="mb-8 text-xs font-medium tracking-[0.35em] text-white/50 font-mono">
            APEXGEN — DIGITAL DESIGN STUDIO
          </p>

          <h1 className="text-[clamp(4rem,10vw,10rem)] font-medium leading-[0.85] tracking-[-0.06em] text-white font-mono">
            WE DESIGN
            <br />
            <span className="text-white/40">
              WEBSITES
            </span>
            <br />
            PEOPLE REMEMBER.
          </h1>

          <p className="mt-8 max-w-xl text-base sm:text-lg text-white/60 font-sans leading-relaxed">
            ApexGen creates premium websites, custom digital experiences, and business websites for ambitious brands in Sri Lanka and beyond.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link
              href="/work"
              className="
                rounded-full
                bg-white
                px-7
                py-4
                text-sm
                font-medium
                text-black
                transition-transform
                duration-300
                hover:scale-105
                font-mono
              "
            >
              VIEW OUR WORK
            </Link>

            <Link
              href="/start-a-project"
              onClick={() => trackStartProjectClick('home_hero')}
              className="
                rounded-full
                border
                border-white/20
                px-7
                py-4
                text-sm
                font-medium
                text-white
                transition-all
                duration-300
                hover:border-white/50
                hover:bg-white/5
                font-mono
              "
            >
              START A PROJECT
            </Link>
          </div>
        </div>
      </div>

      {/* Grain */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
          mix-blend-screen
          bg-[url('/noise.png')]
        "
      />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-[9px] tracking-[0.3em] text-white/30 font-mono">
            SCROLL
          </span>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-10 w-px bg-gradient-to-b from-white/50 to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}

export { Hero as HomeHero };
