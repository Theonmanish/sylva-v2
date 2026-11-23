
"use client";
import { motion, useReducedMotion } from "motion/react";

export function CollectionSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="collection"
      className="relative z-10 w-full bg-pitch-black px-6 pt-20 pb-28 sm:px-8 sm:pt-24 sm:pb-36 lg:px-12 scroll-mt-20"
      aria-label="Collection"
    >
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 1.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="max-w-7xl mx-auto"
      >
        {/* Section Introduction */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <span className="font-sans text-[13px] uppercase tracking-[0.28em] text-[#B99868] mb-5 block">
            Collection
          </span>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#F1EBDD] font-light tracking-tight mb-6 leading-[1.12]">
            Botanical compositions, ready to discover.
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#D0C8BA] leading-[1.85] max-w-2xl">
            A curated collection of handcrafted botanical pieces,
            bringing together living plants, moss and natural materials
            in considered forms. Each composition offers a distinct
            way to experience nature within your space.
          </p>
        </div>

        {/* Collection Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">

          {/* Terrariums */}
          <div className="flex flex-col justify-between bg-transparent">
            <div>
              <span className="font-sans text-xs uppercase tracking-[0.28em] text-[#B99868] mb-6 block">
                01 — Glass Enclosures
              </span>

              <h3 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] text-[#F1EBDD] font-light tracking-tight mb-5">
                Terrariums
              </h3>

              <p className="font-sans text-base sm:text-[17px] text-[#D0C8BA] leading-[1.85] max-w-xl">
                Miniature landscapes composed within glass. Living
                plants, moss, stone and natural wood come together
                to create layered botanical environments, each
                shaped by the form of its vessel.
              </p>
            </div>
          </div>

          {/* Kokedama */}
          <div className="flex flex-col justify-between bg-transparent">
            <div>
              <span className="font-sans text-xs uppercase tracking-[0.28em] text-[#B99868] mb-6 block">
                02 — Sculptural Botanicals
              </span>

              <h3 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] text-[#F1EBDD] font-light tracking-tight mb-5">
                Kokedama
              </h3>

              <p className="font-sans text-base sm:text-[17px] text-[#D0C8BA] leading-[1.85] max-w-xl">
                A traditional moss-based planting form, reinterpreted
                as a sculptural botanical piece. Each composition
                brings the natural character of a living plant and
                its moss-wrapped root form into your surroundings.
              </p>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
