"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Text movement
  const textY = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  // Main visual movement
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.35]);

  // Small scroll indicator
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100svh] overflow-hidden bg-[#080808] text-white"
    >
      {/* Background */}
      <motion.div
        style={{
          y: imageY,
          scale: imageScale,
          opacity: imageOpacity,
        }}
        className="absolute inset-0"
      >
        <Image
          src="/images/hero.jpg"
          alt="ApexGen digital design"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        {/* Dark cinematic overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-[#080808]" />
      </motion.div>

      {/* Grain */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay">
        <div className="h-full w-full bg-[url('/noise.png')]" />
      </div>

      {/* Hero content */}
      <motion.div
        style={{
          y: textY,
          opacity: textOpacity,
        }}
        className="relative z-10 flex min-h-[100svh] flex-col justify-between px-6 pb-10 pt-32 md:px-12 lg:px-20"
      >
        {/* Top label */}
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-white/60 md:text-xs font-mono">
          <span>APEXGEN — DIGITAL DESIGN STUDIO</span>

          <span className="hidden md:block">SRI LANKA / WORLDWIDE</span>
        </div>

        {/* Main headline */}
        <div className="max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#ff5a1f] font-mono">
              DESIGN / BUILD / GROW
            </p>

            <h1 className="max-w-6xl text-[clamp(3.5rem,9vw,9rem)] font-medium leading-[0.84] tracking-[-0.07em]">
              WE DESIGN
              <br />
              <span className="text-white/45">
                WEBSITES
              </span>
              <br />
              PEOPLE REMEMBER.
            </h1>
          </motion.div>

          <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.35,
                duration: 0.8,
              }}
              className="max-w-md text-sm leading-7 text-white/60 md:text-base font-light"
            >
              Premium websites, digital experiences and online
              systems for ambitious businesses.
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.8,
              }}
              href="/start-a-project"
              className="group flex w-fit items-center gap-4 border border-white/20 px-6 py-4 text-xs uppercase tracking-[0.2em] transition-all duration-500 hover:border-[#ff5a1f] hover:bg-[#ff5a1f] font-mono"
            >
              Start a project

              <ArrowUpRight
                size={16}
                className="transition-transform duration-500 group-hover:rotate-45"
              />
            </motion.a>
          </div>
        </div>

        {/* Bottom */}
        <motion.div
          style={{ opacity: indicatorOpacity }}
          className="flex items-end justify-between font-mono"
        >
          <div className="text-[10px] uppercase tracking-[0.3em] text-white/40">
            Selected digital experiences
          </div>

          <div className="flex flex-col items-center gap-3">
            <span className="text-[9px] uppercase tracking-[0.3em] text-white/40">
              Scroll
            </span>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowDown size={18} className="text-white/60" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export { Hero as HomeHero };
