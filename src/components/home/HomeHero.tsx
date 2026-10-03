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

          <h1 className="text-[clamp(3.2rem,8vw,7.8rem)] font-medium leading-[0.92] tracking-[-0.05em] text-white font-mono uppercase">
            WE BUILD DIGITAL
            <br />
            <span className="text-white/40">EXPERIENCES THAT</span>
            <br />
            MOVE BUSINESSES FORWARD.
          </h1>

          <p className="mt-8 max-w-2xl text-base sm:text-xl text-neutral-400 font-sans leading-relaxed">
            From premium business websites to custom digital systems, ApexGen transforms business ideas into powerful online experiences.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link
              href="/work"
              className="
                rounded-full
                bg-white
                px-8
                py-4
                text-xs
                font-semibold
                tracking-wider
                text-black
                transition-all
                duration-300
                hover:bg-[#FF6B35]
                hover:scale-105
                font-mono
                uppercase
                shadow-[0_0_30px_rgba(255,255,255,0.2)]
              "
            >
              EXPLORE OUR WORK
            </Link>

            <Link
              href="/start-a-project"
              onClick={() => trackStartProjectClick('home_hero')}
              className="
                rounded-full
                border
                border-white/20
                bg-white/5
                px-8
                py-4
                text-xs
                font-semibold
                tracking-wider
                text-white
                transition-all
                duration-300
                hover:border-[#FF6B35]/60
                hover:bg-[#FF6B35]/10
                hover:text-[#FF6B35]
                font-mono
                uppercase
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
