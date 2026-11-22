"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

export interface CinematicScene {
  order: number;
  id: string;
  src: string;
  alt: string;
  wordmark?: string;
  title: string;
  subtitle?: string;
  body?: string;
  cta?: {
    label: string;
    href: string;
  };
}

/**
 * The 5 verified cinematic scenes in their mandatory order.
 * Verified asset paths: /images/cinematic/[1-5].png (1672x941 cinematic widescreen).
 */
export const CINEMATIC_SCENES: readonly CinematicScene[] = [
  {
    order: 1,
    id: "forest-environment",
    src: "/images/cinematic/1.png",
    alt: "Sylva Auris — Wide rainforest establishing environment",
    wordmark: "SYLVA AURIS",
    title: "Forest. Reimagined.",
    body: "Terrariums and kokedama from Moodbidri, Karnataka.",
    cta: {
      label: "Explore the Collection",
      href: "/collection",
    },
  },
  {
    order: 2,
    id: "botanical-details",
    src: "/images/cinematic/2.png",
    alt: "Sylva Auris — Botanical details of moss, fern, and natural textures",
    title: "The forest, up close.",
    body: "Moss across stone, the shapes of fern fronds, a root bending over the ground. The compositions take their cues from details like these.",
  },
  {
    order: 3,
    id: "elements",
    src: "/images/cinematic/3.png",
    alt: "Sylva Auris — Natural elements and miniature botanical composition within glass",
    title: "The elements within.",
    body: "Living plants, moss, roots and stone, composed in miniature within glass.",
  },
  {
    order: 4,
    id: "glass",
    src: "/images/cinematic/4.png",
    alt: "Sylva Auris — Completed round bowl glass terrarium",
    title: "A landscape in glass.",
    body: "The same textures, held within a vessel. The glass sets the boundaries, and the landscape is arranged to fit them.",
  },
  {
    order: 5,
    id: "reveal",
    src: "/images/cinematic/5.png",
    alt: "Sylva Auris — Completed terrarium in distinctive glass vessel",
    title: "Forest. Reimagined.",
    subtitle: "Miniature botanical landscapes, thoughtfully composed.",
    cta: {
      label: "Discover the Collection",
      href: "/collection",
    },
  },
] as const;

export function CinematicSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll tracking mapped across the pinned stage
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // --- Image Opacities (Crossfades) ---
  // Scene 1: active at start, fades out as Scene 2 enters
  const opacity1 = useTransform(scrollYProgress, [0, 0.18, 0.24], [1, 1, 0]);
  // Scene 2: fades in, holds, fades out
  const opacity2 = useTransform(scrollYProgress, [0.18, 0.24, 0.38, 0.44], [0, 1, 1, 0]);
  // Scene 3: fades in, holds, fades out
  const opacity3 = useTransform(scrollYProgress, [0.38, 0.44, 0.58, 0.64], [0, 1, 1, 0]);
  // Scene 4: fades in, holds, fades out
  const opacity4 = useTransform(scrollYProgress, [0.58, 0.64, 0.78, 0.84], [0, 1, 1, 0]);
  // Scene 5: fades in, holds prominently, then smoothly dims into pitch black
  const opacity5 = useTransform(scrollYProgress, [0.78, 0.84, 0.94, 1.0], [0, 1, 1, 0]);

  // --- Image Scale / Subtle Parallax (Restrained luxury push-in) ---
  const scale1 = useTransform(scrollYProgress, [0, 0.24], shouldReduceMotion ? [1, 1] : [1, 1.04]);
  const scale2 = useTransform(scrollYProgress, [0.18, 0.44], shouldReduceMotion ? [1, 1] : [1, 1.04]);
  const scale3 = useTransform(scrollYProgress, [0.38, 0.64], shouldReduceMotion ? [1, 1] : [1, 1.04]);
  const scale4 = useTransform(scrollYProgress, [0.58, 0.84], shouldReduceMotion ? [1, 1] : [1, 1.04]);
  const scale5 = useTransform(scrollYProgress, [0.78, 0.98], shouldReduceMotion ? [1, 1] : [1, 1.04]);

  // --- Text Opacity & Translation ---
  // Text 1
  const textOpacity1 = useTransform(scrollYProgress, [0, 0.12, 0.18], [1, 1, 0]);
  const textY1 = useTransform(scrollYProgress, [0, 0.18], shouldReduceMotion ? [0, 0] : [0, -20]);

  // Text 2
  const textOpacity2 = useTransform(scrollYProgress, [0.20, 0.26, 0.34, 0.40], [0, 1, 1, 0]);
  const textY2 = useTransform(scrollYProgress, [0.20, 0.26, 0.34, 0.40], shouldReduceMotion ? [0, 0, 0, 0] : [20, 0, 0, -20]);

  // Text 3
  const textOpacity3 = useTransform(scrollYProgress, [0.40, 0.46, 0.54, 0.60], [0, 1, 1, 0]);
  const textY3 = useTransform(scrollYProgress, [0.40, 0.46, 0.54, 0.60], shouldReduceMotion ? [0, 0, 0, 0] : [20, 0, 0, -20]);

  // Text 4
  const textOpacity4 = useTransform(scrollYProgress, [0.60, 0.66, 0.74, 0.80], [0, 1, 1, 0]);
  const textY4 = useTransform(scrollYProgress, [0.60, 0.66, 0.74, 0.80], shouldReduceMotion ? [0, 0, 0, 0] : [20, 0, 0, -20]);

  // Text 5
  const textOpacity5 = useTransform(scrollYProgress, [0.80, 0.86, 0.94, 1.0], [0, 1, 1, 0]);
  const textY5 = useTransform(scrollYProgress, [0.80, 0.86, 0.94, 1.0], shouldReduceMotion ? [0, 0, 0, 0] : [20, 0, 0, -20]);

  // Initial Scroll Cue
  const scrollCueOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  // Subtle Chapter Indicator (e.g. 01 / 05)
  const sceneNumber = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1.0],
    ["01", "02", "03", "04", "05", "05"]
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[550vh] bg-pitch-black"
      aria-label="Cinematic Opening Sequence"
    >
      {/* Sticky Visual Stage */}
      <div className="sticky top-0 w-full h-[100dvh] overflow-hidden bg-pitch-black flex items-center justify-center">
        {/* Layer 1: Forest Environment */}
        <motion.div
          style={{ opacity: opacity1, scale: scale1 }}
          className="absolute inset-0 z-10 will-change-[opacity,transform]"
        >
          <Image
            src={CINEMATIC_SCENES[0].src}
            alt={CINEMATIC_SCENES[0].alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center pointer-events-none select-none"
          />
        </motion.div>

        {/* Layer 2: Botanical Details */}
        <motion.div
          style={{ opacity: opacity2, scale: scale2 }}
          className="absolute inset-0 z-20 will-change-[opacity,transform]"
        >
          <Image
            src={CINEMATIC_SCENES[1].src}
            alt={CINEMATIC_SCENES[1].alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center pointer-events-none select-none"
          />
        </motion.div>

        {/* Layer 3: Elements */}
        <motion.div
          style={{ opacity: opacity3, scale: scale3 }}
          className="absolute inset-0 z-30 will-change-[opacity,transform]"
        >
          <Image
            src={CINEMATIC_SCENES[2].src}
            alt={CINEMATIC_SCENES[2].alt}
            fill
            sizes="100vw"
            className="object-cover object-center pointer-events-none select-none"
          />
        </motion.div>

        {/* Layer 4: Glass */}
        <motion.div
          style={{ opacity: opacity4, scale: scale4 }}
          className="absolute inset-0 z-40 will-change-[opacity,transform]"
        >
          <Image
            src={CINEMATIC_SCENES[3].src}
            alt={CINEMATIC_SCENES[3].alt}
            fill
            sizes="100vw"
            className="object-cover object-center pointer-events-none select-none"
          />
        </motion.div>

        {/* Layer 5: Reveal */}
        <motion.div
          style={{ opacity: opacity5, scale: scale5 }}
          className="absolute inset-0 z-50 will-change-[opacity,transform]"
        >
          <Image
            src={CINEMATIC_SCENES[4].src}
            alt={CINEMATIC_SCENES[4].alt}
            fill
            sizes="100vw"
            className="object-cover object-center pointer-events-none select-none"
          />
        </motion.div>

        {/* Subtle Atmospheric Dark Vignette Overlay for Text Legibility */}
        <div className="absolute inset-0 z-60 bg-gradient-to-t from-pitch-black/85 via-pitch-black/25 to-pitch-black/45 pointer-events-none" />

        {/* ================= TEXT OVERLAYS ================= */}

        {/* Scene 1 Text */}
        <motion.div
          style={{ opacity: textOpacity1, y: textY1 }}
          className="absolute inset-0 z-70 flex flex-col items-center justify-center text-center px-6 pointer-events-auto"
        >
          <p className="font-sans text-xs sm:text-sm uppercase tracking-[0.3em] text-muted-gold mb-4">
            {CINEMATIC_SCENES[0].wordmark}
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-ivory tracking-tight leading-[1.1] mb-6 max-w-4xl">
            {CINEMATIC_SCENES[0].title}
          </h1>
          <p className="font-sans text-xs sm:text-sm text-ivory/80 uppercase tracking-[0.18em] mb-8 max-w-md">
            {CINEMATIC_SCENES[0].body}
          </p>
          {CINEMATIC_SCENES[0].cta && (
            <Link
              href={CINEMATIC_SCENES[0].cta.href}
              className="inline-flex items-center px-6 py-3 border border-ivory/30 text-ivory text-xs uppercase tracking-[0.2em] font-sans hover:border-muted-gold hover:text-muted-gold transition-colors duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-muted-gold"
            >
              {CINEMATIC_SCENES[0].cta.label}
            </Link>
          )}
        </motion.div>

        {/* Scene 2 Text (Asymmetric Left Editorial Layout) */}
        <motion.div
          style={{ opacity: textOpacity2, y: textY2 }}
          className="absolute inset-0 z-70 flex items-end pb-24 sm:pb-32 px-6 sm:px-12 lg:px-20 pointer-events-auto"
        >
          <div className="max-w-xl text-left">
            <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-muted-gold mb-3 block">
              02 — Botanical Details
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-ivory font-light tracking-tight mb-4 leading-[1.15]">
              {CINEMATIC_SCENES[1].title}
            </h2>
            <p className="font-sans text-sm sm:text-base text-ivory/80 leading-relaxed">
              {CINEMATIC_SCENES[1].body}
            </p>
          </div>
        </motion.div>

        {/* Scene 3 Text (Asymmetric Right Editorial Layout) */}
        <motion.div
          style={{ opacity: textOpacity3, y: textY3 }}
          className="absolute inset-0 z-70 flex items-end justify-end pb-24 sm:pb-32 px-6 sm:px-12 lg:px-20 pointer-events-auto"
        >
          <div className="max-w-xl text-left sm:text-right">
            <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-muted-gold mb-3 block">
              03 — Elements
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-ivory font-light tracking-tight mb-4 leading-[1.15]">
              {CINEMATIC_SCENES[2].title}
            </h2>
            <p className="font-sans text-sm sm:text-base text-ivory/80 leading-relaxed sm:ml-auto">
              {CINEMATIC_SCENES[2].body}
            </p>
          </div>
        </motion.div>

        {/* Scene 4 Text (Asymmetric Left Editorial Layout) */}
        <motion.div
          style={{ opacity: textOpacity4, y: textY4 }}
          className="absolute inset-0 z-70 flex items-end pb-24 sm:pb-32 px-6 sm:px-12 lg:px-20 pointer-events-auto"
        >
          <div className="max-w-xl text-left">
            <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-muted-gold mb-3 block">
              04 — Glass
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-ivory font-light tracking-tight mb-4 leading-[1.15]">
              {CINEMATIC_SCENES[3].title}
            </h2>
            <p className="font-sans text-sm sm:text-base text-ivory/80 leading-relaxed">
              {CINEMATIC_SCENES[3].body}
            </p>
          </div>
        </motion.div>

        {/* Scene 5 Text (Culminating Center Closing Layout) */}
        <motion.div
          style={{ opacity: textOpacity5, y: textY5 }}
          className="absolute inset-0 z-70 flex flex-col items-center justify-center text-center px-6 pointer-events-auto"
        >
          <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-muted-gold mb-3 block">
            05 — The Composition
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-ivory tracking-tight leading-[1.1] mb-4 max-w-4xl">
            {CINEMATIC_SCENES[4].title}
          </h2>
          {CINEMATIC_SCENES[4].subtitle && (
            <p className="font-sans text-sm sm:text-base text-ivory/80 tracking-wide max-w-md mx-auto mb-8">
              {CINEMATIC_SCENES[4].subtitle}
            </p>
          )}
          {CINEMATIC_SCENES[4].cta && (
            <Link
              href={CINEMATIC_SCENES[4].cta.href}
              className="inline-flex items-center px-8 py-3.5 border border-muted-gold/60 text-ivory text-xs uppercase tracking-[0.2em] font-sans hover:border-muted-gold hover:bg-muted-gold/10 hover:text-muted-gold transition-colors duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-muted-gold"
            >
              {CINEMATIC_SCENES[4].cta.label}
            </Link>
          )}
        </motion.div>

        {/* Subtle Chapter / Scene Counter in Lower Right */}
        <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-10 z-70 pointer-events-none flex items-center space-x-1.5 font-sans text-[10px] tracking-[0.25em] text-ivory/50 uppercase">
          <motion.span>{sceneNumber}</motion.span>
          <span>/</span>
          <span>05</span>
        </div>

        {/* Initial Scroll Cue (Scene 1 only) */}
        <motion.div
          style={{ opacity: scrollCueOpacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-70 flex flex-col items-center space-y-2 pointer-events-none"
        >
          <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-ivory/50">
            Scroll
          </span>
          <div className="w-[1px] h-6 bg-gradient-to-b from-ivory/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
