
"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";

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
 * Four cinematic scenes in sequence.
 * Asset paths: /images/cinematic/[1-4].png
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
] as const;

export function CinematicSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Image opacity transitions
  const opacity1 = useTransform(
    scrollYProgress,
    [0, 0.22, 0.28],
    [1, 1, 0]
  );

  const opacity2 = useTransform(
    scrollYProgress,
    [0.22, 0.28, 0.46, 0.52],
    [0, 1, 1, 0]
  );

  const opacity3 = useTransform(
    scrollYProgress,
    [0.46, 0.52, 0.70, 0.76],
    [0, 1, 1, 0]
  );

  // Final image remains visible until the cinematic sequence ends
  const opacity4 = useTransform(
    scrollYProgress,
    [0.70, 0.76, 1.0],
    [0, 1, 1]
  );

  // Subtle image scale
  const scale1 = useTransform(
    scrollYProgress,
    [0, 0.28],
    shouldReduceMotion ? [1, 1] : [1, 1.04]
  );

  const scale2 = useTransform(
    scrollYProgress,
    [0.22, 0.52],
    shouldReduceMotion ? [1, 1] : [1, 1.04]
  );

  const scale3 = useTransform(
    scrollYProgress,
    [0.46, 0.76],
    shouldReduceMotion ? [1, 1] : [1, 1.04]
  );

  const scale4 = useTransform(
    scrollYProgress,
    [0.70, 1.0],
    shouldReduceMotion ? [1, 1] : [1, 1.04]
  );

  // Text opacity and movement
  const textOpacity1 = useTransform(
    scrollYProgress,
    [0, 0.16, 0.22],
    [1, 1, 0]
  );

  const textY1 = useTransform(
    scrollYProgress,
    [0, 0.22],
    shouldReduceMotion ? [0, 0] : [0, -20]
  );

  const textOpacity2 = useTransform(
    scrollYProgress,
    [0.24, 0.30, 0.42, 0.48],
    [0, 1, 1, 0]
  );

  const textY2 = useTransform(
    scrollYProgress,
    [0.24, 0.30, 0.42, 0.48],
    shouldReduceMotion ? [0, 0, 0, 0] : [20, 0, 0, -20]
  );

  const textOpacity3 = useTransform(
    scrollYProgress,
    [0.48, 0.54, 0.66, 0.72],
    [0, 1, 1, 0]
  );

  const textY3 = useTransform(
    scrollYProgress,
    [0.48, 0.54, 0.66, 0.72],
    shouldReduceMotion ? [0, 0, 0, 0] : [20, 0, 0, -20]
  );

  const textOpacity4 = useTransform(
    scrollYProgress,
    [0.72, 0.78, 0.92, 1.0],
    [0, 1, 1, 1]
  );

  const textY4 = useTransform(
    scrollYProgress,
    [0.72, 0.78, 0.92, 1.0],
    shouldReduceMotion ? [0, 0, 0, 0] : [20, 0, 0, 0]
  );

  // Initial scroll cue
  const scrollCueOpacity = useTransform(
    scrollYProgress,
    [0, 0.08],
    [1, 0]
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[400vh] bg-pitch-black"
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

        {/* Layer 4: Final Glass Composition */}
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

        {/* Atmospheric Dark Vignette */}
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

        {/* Scene 2 Text */}
        <motion.div
          style={{ opacity: textOpacity2, y: textY2 }}
          className="absolute inset-0 z-70 flex items-center px-6 sm:px-12 lg:px-20 pointer-events-auto"
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

        {/* Scene 3 Text */}
        <motion.div
          style={{ opacity: textOpacity3, y: textY3 }}
          className="absolute inset-0 z-70 flex items-center justify-end px-6 sm:px-12 lg:px-20 pointer-events-auto"
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

        {/* Scene 4 Text — Final Composition */}
        <motion.div
          style={{ opacity: textOpacity4, y: textY4 }}
          className="absolute inset-0 z-70 flex items-center px-6 sm:px-12 lg:px-20 pointer-events-auto"
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

        {/* Initial Scroll Cue */}
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
