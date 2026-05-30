import { MedspaHeroSection } from "@/components/medspa/MedspaHeroSection";
import { MedspaPainSection } from "@/components/medspa/MedspaPainSection";
import { MedspaHowItWorksSection } from "@/components/medspa/MedspaHowItWorksSection";
import { MedspaDemoSection } from "@/components/medspa/MedspaDemoSection";
import { MedspaFAQSection } from "@/components/medspa/MedspaFAQSection";
import { MedspaFooterCTA } from "@/components/medspa/MedspaFooterCTA";

export default function MedspaPage() {
  return (
    <main>
      <MedspaHeroSection />
      <MedspaPainSection />
      <MedspaHowItWorksSection />
      <MedspaDemoSection />
      <MedspaFAQSection />
      <MedspaFooterCTA />
    </main>
  );
}
