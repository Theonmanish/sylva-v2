
export function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 sm:py-32 lg:py-36 scroll-mt-20"
      aria-label="About Sylva Auris"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading */}
        <div className="lg:col-span-5">
          <span className="font-sans text-xs sm:text-sm uppercase tracking-[0.28em] text-muted-gold mb-5 block">
            About Sylva Auris
          </span>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-ivory font-light tracking-tight leading-[1.12]">
            Botanical pieces for considered spaces.
          </h2>
        </div>

        {/* Right Column: Narrative */}
        <div className="lg:col-span-7 flex flex-col lg:pl-8">
          <p className="font-sans text-base sm:text-lg lg:text-xl text-ivory/90 leading-[1.8] font-normal mb-7">
            Sylva Auris creates handcrafted terrariums and kokedama, bringing
            living botanicals and natural materials into thoughtfully designed
            compositions.
          </p>

          <p className="font-sans text-sm sm:text-base lg:text-lg text-muted-grey leading-[1.85] mb-6">
            Our terrariums bring plants, moss, roots and stone together within
            glass. Each vessel offers a different space to work with, shaping
            how the landscape is arranged and how its individual elements come
            together.
          </p>

          <p className="font-sans text-sm sm:text-base lg:text-lg text-muted-grey leading-[1.85]">
            Kokedama offers a different expression of botanical design. Using
            a traditional moss-based planting technique, each piece presents
            a living plant in a sculptural form that brings natural texture
            into everyday spaces.
          </p>
        </div>
      </div>
    </section>
  );
}
