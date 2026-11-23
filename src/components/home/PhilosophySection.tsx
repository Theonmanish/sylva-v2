
import Link from "next/link";

export function PhilosophySection() {
  return (
    <section
      id="philosophy"
      className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 sm:py-32 lg:py-36 scroll-mt-20"
      aria-label="Philosophy"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading */}
        <div className="lg:col-span-5">
          <span className="font-sans text-xs sm:text-sm uppercase tracking-[0.28em] text-muted-gold mb-5 block">
            Philosophy
          </span>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-ivory font-light tracking-tight leading-[1.12]">
            A closer view of nature.
          </h2>
        </div>

        {/* Right Column: Narrative */}
        <div className="lg:col-span-7 flex flex-col lg:pl-8">
          <p className="font-sans text-base sm:text-lg lg:text-xl text-ivory/90 leading-[1.8] font-normal mb-7">
            At Sylva Auris, the focus is on bringing the character of a natural
            landscape into a smaller, carefully composed setting.
          </p>

          <p className="font-sans text-sm sm:text-base lg:text-lg text-muted-grey leading-[1.85] mb-6">
            A terrarium is more than a collection of plants within glass. The
            vessel, hardscape, substrate, plants and moss each play a part in
            shaping the final composition. Every element is selected and
            positioned in relation to the others, creating a balanced landscape
            with depth, detail and a sense of natural form.
          </p>

          <p className="font-sans text-sm sm:text-base lg:text-lg text-muted-grey leading-[1.85] mb-9">
            The result is a miniature environment designed to be observed over
            time, where the finer details reveal themselves the closer you look.
          </p>


        </div>
      </div>
    </section>
  );
}
