import Link from "next/link";
import { siteConfig } from "@/content/site";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full py-28 sm:py-36 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-white/5"
      aria-label="About Sylva Auris"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading and Origin */}
        <div className="lg:col-span-5">
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-muted-gold mb-3 block">
            About Sylva Auris
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-ivory font-light tracking-tight leading-[1.15] mb-6">
            Terrariums and kokedama, from Moodbidri.
          </h2>
          <div className="flex flex-col space-y-1 font-sans text-xs text-muted-grey">
            <p className="uppercase tracking-[0.15em] text-ivory/70">Origin</p>
            <p>{siteConfig.location}</p>
          </div>
        </div>

        {/* Right Column: Narrative */}
        <div className="lg:col-span-7 flex flex-col space-y-6 lg:pl-8">
          <p className="font-sans text-base sm:text-lg text-ivory/90 leading-relaxed font-light">
            Sylva Auris creates terrariums and kokedama in Moodbidri, Karnataka.
          </p>
          <p className="font-sans text-sm sm:text-base text-muted-grey leading-relaxed">
            A terrarium brings living plants, moss and natural hardscape, such as roots and stone, together within glass. The shape of the vessel decides how they are arranged: where a root rises, how moss spreads across the surface, which plants have room to grow.
          </p>
          <p className="font-sans text-sm sm:text-base text-muted-grey leading-relaxed">
            Kokedama, a separate offering, presents a living plant through a moss-based planting technique, creating a sculptural botanical form for everyday spaces.
          </p>

          <div className="pt-4">
            <Link
              href="/philosophy"
              className="inline-flex items-center space-x-2 font-sans text-xs uppercase tracking-[0.18em] text-ivory hover:text-muted-gold transition-colors duration-300 group"
            >
              <span>Read the philosophy</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
