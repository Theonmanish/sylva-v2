
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
    title: "The Art of Living Nature.",
    body: "Discover handcrafted terrariums and kokedama, thoughtfully composed with natural materials and living botanicals. Each piece brings a quiet expression of nature into your space.",
    cta: {
      label: "Explore the Collection",
      href: "/#collection",
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

 
        {/* ================= SCENE 1 TEXT ================= */}
        <motion.div
          style={{ opacity: textOpacity1, y: textY1 }}
          className="absolute inset-0 z-[70] flex flex-col items-center justify-center px-5 pt-20 pb-16 text-center sm:pt-0 sm:pb-0 pointer-events-none"
        >
          <div className="relative w-full max-w-[34rem] sm:max-w-none">
            <p className="mb-4 font-sans text-[11px] sm:mb-5 sm:text-lg font-semibold uppercase tracking-[0.28em] sm:tracking-[0.35em] text-[#D6B77C] [text-shadow:0_2px_12px_rgba(0,0,0,0.95)]">
              {CINEMATIC_SCENES[0].wordmark}
            </p>

            <h1 className="mb-4 font-serif text-[2.15rem] min-[400px]:text-[2.4rem] sm:mb-7 sm:text-7xl md:text-8xl lg:text-9xl font-light leading-[1.05] sm:leading-[1.1] tracking-tight text-[#F1EBDD] [text-shadow:0_3px_18px_rgba(0,0,0,0.45)]">
              {CINEMATIC_SCENES[0].title}
            </h1>

            <p className="mb-6 mx-auto max-w-[32rem] font-sans text-[0.82rem] min-[400px]:text-sm sm:mb-9 sm:text-base sm:leading-[1.8] font-medium leading-[1.65] tracking-[0.04em] sm:tracking-[0.12em] text-[#F1EBDD] [text-shadow:0_2px_12px_rgba(0,0,0,0.9)]">
              {CINEMATIC_SCENES[0].body}
            </p>

            {CINEMATIC_SCENES[0].cta && (
              <Link
                href={CINEMATIC_SCENES[0].cta.href}
                className="relative z-[80] inline-flex pointer-events-auto items-center justify-center px-4 py-3 sm:px-7 sm:py-3.5 border border-[#D6B77C]/80 bg-black/30 text-[#F1EBDD] text-[10px] sm:text-xs font-medium uppercase tracking-[0.12em] sm:tracking-[0.2em] text-center backdrop-blur-sm hover:bg-[#B99868]/20 hover:border-[#D6B77C] hover:text-white transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D6B77C]"
              >
                {CINEMATIC_SCENES[0].cta.label}
              </Link>
            )}
          </div>
        </motion.div>

        {/* ================= SCENE 2 TEXT ================= */}
        <motion.div
          style={{ opacity: textOpacity2, y: textY2 }}
          className="absolute inset-0 z-[70] flex items-center justify-start px-5 pt-20 pb-16 text-left sm:justify-start sm:px-12 sm:pt-0 sm:pb-0 lg:px-20 pointer-events-none"
          >
          <div className="mr-auto w-[46vw] min-w-0 text-left sm:ml-auto sm:w-auto sm:max-w-2xl lg:ml-50 lg:mr-0">
            <span className="font-sans text-[10px] min-[400px]:text-xs sm:text-sm uppercase tracking-[0.18em] sm:tracking-[0.3em] text-[#B99868] mb-3 sm:mb-5 block">
              02 — Botanical Details
            </span>

            <h2 className="font-serif text-[2rem] min-[400px]:text-[2.25rem] sm:text-6xl lg:text-7xl text-[#F1EBDD] font-light tracking-tight mb-4 sm:mb-6 leading-[1.08] sm:leading-[1.12]">
              {CINEMATIC_SCENES[1].title}
            </h2>

            <p className="font-sans text-[0.82rem] min-[400px]:text-sm sm:text-base lg:text-lg text-[#EAE4D8] font-normal leading-[1.65] sm:leading-[1.7] tracking-normal">
              {CINEMATIC_SCENES[1].body}
            </p>

            <p className="hidden md:block font-sans text-sm lg:text-lg text-[#C8C0B2] font-normal leading-[1.7] tracking-normal mt-6">
              Each element is thoughtfully placed, balancing natural textures, organic forms
              and scale to create a landscape that feels both intricate and naturally composed.
            </p>
          </div>
        </motion.div>

        {/* ================= SCENE 3 TEXT ================= */}
        <motion.div
          style={{ opacity: textOpacity3, y: textY3 }}
          className="absolute inset-0 z-[70] flex items-center justify-end px-5 pt-20 pb-16 sm:justify-end sm:px-12 sm:pt-0 sm:pb-0 lg:px-20 pointer-events-none"
        >
          <div className="ml-auto w-[46vw] min-w-0 text-right sm:ml-auto sm:w-auto sm:max-w-2xl">
            <span className="font-sans text-[10px] min-[400px]:text-xs sm:text-sm uppercase tracking-[0.18em] sm:tracking-[0.3em] text-[#B99868] mb-3 sm:mb-5 block">
              03 — Elements
            </span>

            <h2 className="font-serif text-[2rem] min-[400px]:text-[2.25rem] sm:text-6xl lg:text-7xl text-[#F1EBDD] font-light tracking-tight mb-4 sm:mb-6 leading-[1.08] sm:leading-[1.12]">
              {CINEMATIC_SCENES[2].title}
            </h2>

            <p className="font-sans text-[0.82rem] min-[400px]:text-sm sm:text-base lg:text-lg text-[#EAE4D8] font-normal leading-[1.65] sm:leading-[1.7] tracking-normal sm:ml-auto">
              {CINEMATIC_SCENES[2].body}
            </p>

            <p className="hidden md:block font-sans text-sm lg:text-lg text-[#C8C0B2] font-normal leading-[1.7] tracking-normal mt-6 sm:ml-auto max-w-xl">
              Every material contributes to the composition. Textures, forms and
              proportions are brought together to create a balanced miniature landscape.
            </p>
          </div>
        </motion.div>

        {/* ================= SCENE 4 TEXT ================= */}
        <motion.div
          style={{ opacity: textOpacity4, y: textY4 }}
          className="absolute inset-0 z-[70] flex items-center justify-start px-5 pt-20 pb-16 sm:justify-start sm:px-12 sm:pt-0 sm:pb-0 lg:px-20 pointer-events-none"
        >
          <div className="mr-auto w-[46vw] min-w-0 text-left sm:mr-auto sm:w-auto sm:max-w-2xl lg:ml-12">
            <span className="font-sans text-[10px] min-[400px]:text-xs sm:text-sm uppercase tracking-[0.18em] sm:tracking-[0.3em] text-[#B99868] mb-3 sm:mb-5 block">
              04 — Glass
            </span>

            <h2 className="font-serif text-[2rem] min-[400px]:text-[2.25rem] sm:text-6xl lg:text-7xl text-[#F1EBDD] font-light tracking-tight mb-4 sm:mb-6 leading-[1.08] sm:leading-[1.12]">
              {CINEMATIC_SCENES[3].title}
            </h2>

            <p className="font-sans text-[0.82rem] min-[400px]:text-sm sm:text-base lg:text-lg text-[#EAE4D8] font-normal leading-[1.65] sm:leading-[1.7] tracking-normal">
              {CINEMATIC_SCENES[3].body}
            </p>

            <p className="hidden md:block font-sans text-sm lg:text-lg text-[#C8C0B2] font-normal leading-[1.7] tracking-normal mt-6">
              Each vessel becomes a setting for its own composition, bringing together
              living botanicals and natural materials within a carefully considered form.
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
