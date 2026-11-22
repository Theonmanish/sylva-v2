import Link from "next/link";

const ATELIER_MATERIALS = [
  {
    order: "01",
    name: "Glass",
    role: "The Vessel",
    description: "Sets proportions, light transmission and environmental boundaries. The vessel form guides the entire spatial arrangement.",
  },
  {
    order: "02",
    name: "Stone & Substrate",
    role: "The Foundation",
    description: "Layered drainage gravel, activated filtration and nutrient media formulated to support miniature root systems and moisture balance.",
  },
  {
    order: "03",
    name: "Roots & Wood",
    role: "The Hardscape",
    description: "Selected natural roots, drift and stone that establish height, structural orientation, and organic architectural lines.",
  },
  {
    order: "04",
    name: "Living Plants & Moss",
    role: "The Planting",
    description: "Carefully chosen mosses and living botanical varieties suited to enclosed humidity and composed in natural relationship.",
  },
] as const;

export function AtelierSection() {
  return (
    <section
      id="atelier"
      className="relative w-full py-28 sm:py-36 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-white/5"
      aria-label="Atelier"
    >
      <div className="max-w-3xl mb-16 sm:mb-20">
        <span className="font-sans text-xs uppercase tracking-[0.25em] text-muted-gold mb-3 block">
          Atelier
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-ivory font-light tracking-tight mb-6 leading-[1.15]">
          How a composition is made
        </h2>
        <p className="font-sans text-sm sm:text-base text-ivory/80 leading-relaxed mb-4">
          The process starts with the vessel and works inward. Hardscape such as roots, wood and stone sets height and direction. Substrate forms the growing medium. Plants and moss are selected to suit the space and each other, then arranged as one landscape.
        </p>
        <p className="font-sans text-xs sm:text-sm text-muted-grey leading-relaxed">
          Custom compositions can be discussed around your preferred size, budget and setting. Plants, hardscape and gravel can be considered together, subject to availability.
        </p>
      </div>

      {/* Materials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
        {ATELIER_MATERIALS.map((material) => (
          <div
            key={material.name}
            className="p-6 border border-white/5 bg-pitch-black flex flex-col justify-between"
          >
            <div>
              <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-muted-gold block mb-2">
                {material.order}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-ivory font-light mb-1">
                {material.name}
              </h3>
              <p className="font-sans text-[11px] uppercase tracking-[0.15em] text-muted-grey/70 mb-4">
                {material.role}
              </p>
              <p className="font-sans text-xs text-muted-grey leading-relaxed">
                {material.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div>
        <Link
          href="/atelier"
          className="inline-flex items-center space-x-2 font-sans text-xs uppercase tracking-[0.2em] text-ivory hover:text-muted-gold transition-colors duration-300 group"
        >
          <span>Discover the Atelier</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </section>
  );
}
