import { CinematicSequence } from "@/components/cinematic/CinematicSequence";
import { CollectionSection } from "@/components/home/CollectionSection";
import { PhilosophySection } from "@/components/home/PhilosophySection";
import { AtelierSection } from "@/components/home/AtelierSection";
import { AboutSection } from "@/components/home/AboutSection";
import { EnquirySection } from "@/components/home/EnquirySection";

export default function HomePage() {
  return (
    <div className="w-full bg-pitch-black">
      <CinematicSequence />
      <CollectionSection />
      <PhilosophySection />
      <AtelierSection />
      <AboutSection />
      <EnquirySection />
    </div>
  );
}
