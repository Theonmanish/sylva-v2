
"use client";
import Image from "next/image";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

export function CollectionSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="collection"
      className="relative z-10 w-full bg-pitch-black px-6 pt-16 pb-28 sm:px-8 sm:pt-20 sm:pb-36 lg:px-12"
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
        <div className="max-w-2xl mb-16 sm:mb-20">
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-muted-gold mb-3 block">
            Collection
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-ivory font-light tracking-tight mb-4 leading-[1.15]">
            Ready-made pieces
          </h2>

          <p className="font-sans text-sm sm:text-base text-muted-grey leading-relaxed">
            Two distinct botanical expressions, composed around living plants,
            moss and natural materials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Terrariums */}
          <div className="flex flex-col justify-between p-8 sm:p-12 bg-transparent">
            
            <div>
              <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-muted-grey/60 mb-6 block">
                01 — Glass Enclosures
              </span>

              <h3 className="font-serif text-2xl sm:text-4xl text-ivory font-light tracking-tight mb-4">
                Terrariums
              </h3>

              <p className="font-sans text-sm text-ivory/80 leading-relaxed mb-8">
                Living plants, moss and natural hardscape composed within a
                glass vessel. The geometry and clarity of the glass set the
                boundaries, guiding how roots rise, how moss settles across
                stone, and how the miniature landscape is observed.
              </p>
            </div>


          </div>

          {/* Kokedama */}
          <div className="flex flex-col justify-between p-8 sm:p-12 bg-transparent">
            
            <div>
              <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-muted-grey/60 mb-6 block">
                02 — Sculptural Botanicals
              </span>

              <h3 className="font-serif text-2xl sm:text-4xl text-ivory font-light tracking-tight mb-4">
                Kokedama
              </h3>

              <p className="font-sans text-sm text-ivory/80 leading-relaxed mb-8">
                A living plant presented through a traditional moss-based
                planting technique, with its own character and dedicated care.
                Free from glass, the living root sphere brings an organic,
                architectural presence directly into personal spaces.
              </p>
            </div>


          </div>
        </div>
      </motion.div>
    </section>
  );
}
