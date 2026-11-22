import Link from "next/link";

export function PhilosophySection() {
  return (
    <section
      id="philosophy"
      className="relative w-full py-28 sm:py-36 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-white/5"
      aria-label="Philosophy"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading and Eyebrow */}
        <div className="lg:col-span-5">
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-muted-gold mb-3 block">
            Philosophy
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-ivory font-light tracking-tight leading-[1.15]">
            A closer view of nature.
          </h2>
        </div>

        {/* Right Column: Narrative and Principles */}
        <div className="lg:col-span-7 flex flex-col space-y-6 lg:pl-8">
          <p className="font-sans text-base sm:text-lg text-ivory/90 leading-relaxed font-light">
            The idea behind Sylva Auris is simple: a person can observe the character of a forest in a much smaller setting.
          </p>
          <p className="font-sans text-sm sm:text-base text-muted-grey leading-relaxed">
            In a terrarium, the vessel, hardscape, substrate, plants and moss all contribute, and each decision is made in relation to the others. The aim is a coherent landscape that rewards looking closely, not a container filled as full as possible.
          </p>

          <div className="pt-6">
            <Link
              href="/philosophy"
              className="inline-flex items-center space-x-2 font-sans text-xs uppercase tracking-[0.2em] text-ivory hover:text-muted-gold transition-colors duration-300 group"
            >
              <span>Read the Philosophy</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
