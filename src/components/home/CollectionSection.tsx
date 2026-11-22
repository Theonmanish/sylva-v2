import Link from "next/link";

export function CollectionSection() {
  return (
    <section
      id="collection"
      className="relative w-full py-28 sm:py-36 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto"
      aria-label="Collection"
    >
      <div className="max-w-2xl mb-16 sm:mb-20">
        <span className="font-sans text-xs uppercase tracking-[0.25em] text-muted-gold mb-3 block">
          Collection
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-ivory font-light tracking-tight mb-4 leading-[1.15]">
          Ready-made pieces
        </h2>
        <p className="font-sans text-sm sm:text-base text-muted-grey leading-relaxed">
          Two distinct botanical expressions, composed around living plants, moss and natural materials.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Terrariums Category */}
        <div className="flex flex-col justify-between p-8 sm:p-12 border border-white/5 bg-pitch-black hover:border-white/10 transition-colors duration-500">
          <div>
            <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-muted-grey/60 mb-6 block">
              01 — Glass Enclosures
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl text-ivory font-light tracking-tight mb-4">
              Terrariums
            </h3>
            <p className="font-sans text-sm text-ivory/80 leading-relaxed mb-8">
              Living plants, moss and natural hardscape composed within a glass vessel. The geometry and clarity of the glass set the boundaries, guiding how roots rise, how moss settles across stone, and how the miniature landscape is observed.
            </p>
          </div>
          <div>
            <Link
              href="/collection#terrariums"
              className="inline-flex items-center space-x-2 font-sans text-xs tracking-[0.18em] uppercase text-ivory hover:text-muted-gold transition-colors duration-300 group"
            >
              <span>Explore the collection</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>

        {/* Kokedama Category */}
        <div className="flex flex-col justify-between p-8 sm:p-12 border border-white/5 bg-pitch-black hover:border-white/10 transition-colors duration-500">
          <div>
            <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-muted-grey/60 mb-6 block">
              02 — Sculptural Botanicals
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl text-ivory font-light tracking-tight mb-4">
              Kokedama
            </h3>
            <p className="font-sans text-sm text-ivory/80 leading-relaxed mb-8">
              A living plant presented through a traditional moss-based planting technique, with its own character and dedicated care. Free from glass, the living root sphere brings an organic, architectural presence directly into personal spaces.
            </p>
          </div>
          <div>
            <Link
              href="/collection#kokedama"
              className="inline-flex items-center space-x-2 font-sans text-xs tracking-[0.18em] uppercase text-ivory hover:text-muted-gold transition-colors duration-300 group"
            >
              <span>Explore the collection</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
