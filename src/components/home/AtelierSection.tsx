
import Image from "next/image";

const ATELIER_MATERIALS = [
  {
    order: "01",
    name: "Glass",
    role: "The Vessel",
    description:
      "Sets proportions, light transmission and environmental boundaries. The vessel form guides the entire spatial arrangement.",
  },
  {
    order: "02",
    name: "Stone & Substrate",
    role: "The Foundation",
    description:
      "Layered drainage gravel, activated filtration and nutrient media formulated to support miniature root systems and moisture balance.",
  },
  {
    order: "03",
    name: "Roots & Wood",
    role: "The Hardscape",
    description:
      "Selected natural roots, driftwood and stone establish height, structural orientation and organic architectural lines.",
  },
  {
    order: "04",
    name: "Living Plants & Moss",
    role: "The Planting",
    description:
      "Carefully chosen mosses and living botanical varieties suited to enclosed humidity, composed in natural relationship.",
  },
] as const;

export function AtelierSection() {
  return (
    <section
      id="atelier"
      className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 sm:py-32 lg:py-36 scroll-mt-20"
      aria-label="Atelier"
    >
      {/* Introduction */}
      <div className="max-w-3xl mb-16 sm:mb-20">
        <span className="font-sans text-xs sm:text-sm uppercase tracking-[0.28em] text-muted-gold mb-5 block">
          Atelier
        </span>

        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-ivory font-light tracking-tight mb-7 leading-[1.12]">
          How a composition is made.
        </h2>

        <p className="font-sans text-base sm:text-lg text-ivory/90 leading-[1.8] mb-6">
          Every composition begins with the vessel and takes shape from within.
          Roots, wood and stone establish its structure, while carefully layered
          substrate creates the growing medium. Plants and moss are then
          selected and arranged in relation to the space, forming a considered
          botanical landscape.
        </p>

        <p className="font-sans text-sm sm:text-base text-muted-grey leading-[1.85]">
          Custom compositions can be discussed around your preferred size,
          budget and setting. Plants, hardscape and gravel can be considered
          together, subject to availability.
        </p>
      </div>

      {/* Workshop Image */}
      <div className="relative w-full aspect-[16/7] mb-20 sm:mb-24 overflow-hidden">
        <Image
          src="/images/workshop.png"
          alt="Terrarium vessels, natural hardscape, moss and botanical materials arranged in the Sylva Auris atelier"
          fill
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover object-center"
        />
      </div>

      {/* Materials */}
      <div>
        <div className="mb-10 sm:mb-12">
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-muted-gold">
            The Elements
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12 lg:gap-x-12">
          {ATELIER_MATERIALS.map((material) => (
            <div key={material.name} className="flex flex-col">
              <span className="font-sans text-xs tracking-[0.2em] text-muted-gold mb-5">
                {material.order}
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl text-ivory font-light mb-2 leading-tight">
                {material.name}
              </h3>

              <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-muted-grey/70 mb-5">
                {material.role}
              </p>

              <p className="font-sans text-sm sm:text-base text-muted-grey leading-[1.8]">
                {material.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
