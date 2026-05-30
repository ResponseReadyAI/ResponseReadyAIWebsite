import { InsuranceHeroSection } from "@/components/insurance/InsuranceHeroSection";
import { InsurancePainSection } from "@/components/insurance/InsurancePainSection";
import { InsuranceHowItWorksSection } from "@/components/insurance/InsuranceHowItWorksSection";
import { InsuranceDemoSection } from "@/components/insurance/InsuranceDemoSection";
import { InsuranceFAQSection } from "@/components/insurance/InsuranceFAQSection";
import { InsuranceFooterCTA } from "@/components/insurance/InsuranceFooterCTA";

export default function InsurancePage() {
  return (
    <main>
      <InsuranceHeroSection />
      <InsurancePainSection />
      <InsuranceHowItWorksSection />
      <InsuranceDemoSection />
      <InsuranceFAQSection />
      <InsuranceFooterCTA />
    </main>
  );
}
