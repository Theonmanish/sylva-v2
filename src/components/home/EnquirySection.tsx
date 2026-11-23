
import { siteConfig } from "@/content/site";

export function EnquirySection() {
  const enquiryEmail = `mailto:${siteConfig.email}?subject=${encodeURIComponent("Enquiry")}`;

  return (
    <section
      id="enquiries"
      className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 sm:py-32 lg:py-36 scroll-mt-20"
      aria-label="Enquiries"
    >
      <div className="max-w-3xl">
        <span className="font-sans text-xs sm:text-sm uppercase tracking-[0.28em] text-muted-gold mb-5 block">
          Enquiries
        </span>

        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-ivory font-light tracking-tight mb-7 leading-[1.12]">
          Enquire about a piece.
        </h2>

        <p className="font-sans text-base sm:text-lg text-ivory/90 leading-[1.8] mb-6">
          Whether you are considering a ready-made terrarium or kokedama,
          exploring a custom composition, or looking for a distinctive gift,
          we would be glad to hear from you.
        </p>

        <p className="font-sans text-sm sm:text-base text-muted-grey leading-[1.85] mb-10">
          Share your preferred size, setting and design ideas. We can discuss
          available pieces and explore a composition suited to your space.
        </p>

        <a
          href={enquiryEmail}
          className="inline-flex items-center gap-4 px-8 py-4 border border-muted-gold/60 text-ivory text-xs sm:text-sm uppercase tracking-[0.2em] font-sans hover:border-muted-gold hover:bg-muted-gold/10 hover:text-muted-gold transition-colors duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-muted-gold group"
        >
          Make an enquiry
          
        </a>
      </div>
    </section>
  );
}
