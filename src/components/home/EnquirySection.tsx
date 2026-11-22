import Link from "next/link";
import { siteConfig } from "@/content/site";

export function EnquirySection() {
  return (
    <section
      id="enquiries"
      className="relative w-full py-28 sm:py-36 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-white/5"
      aria-label="Enquiries"
    >
      <div className="max-w-3xl">
        <span className="font-sans text-xs uppercase tracking-[0.25em] text-muted-gold mb-3 block">
          Enquiries
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-ivory font-light tracking-tight mb-6 leading-[1.15]">
          Enquire about a piece
        </h2>
        <p className="font-sans text-base sm:text-lg text-ivory/90 leading-relaxed font-light mb-4">
          Ask about a ready-made terrarium or kokedama, discuss a custom composition, or enquire about gifting.
        </p>
        <p className="font-sans text-sm sm:text-base text-muted-grey leading-relaxed mb-10">
          Tell us the size, setting and elements you have in mind, and we can discuss available pieces or design a composition tailored to your space.
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3.5 border border-muted-gold/60 text-ivory text-xs uppercase tracking-[0.2em] font-sans hover:border-muted-gold hover:bg-muted-gold/10 hover:text-muted-gold transition-colors duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-muted-gold"
          >
            Make an enquiry
          </Link>

          <a
            href={`mailto:${siteConfig.email}`}
            className="font-sans text-xs uppercase tracking-[0.18em] text-muted-grey hover:text-ivory transition-colors duration-300"
          >
            Direct: {siteConfig.email}
          </a>
        </div>
      </div>
    </section>
  );
}
