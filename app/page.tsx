import Nav from "@/components/Nav";
import HeroSection from "@/components/sections/HeroSection";
import StatStrip from "@/components/StatStrip";
import ProblemSection from "@/components/sections/ProblemSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import DemoSection from "@/components/sections/DemoSection";
import TiersSection from "@/components/sections/TiersSection";
import AdditionalServicesSection from "@/components/sections/AdditionalServicesSection";
import FAQSection from "@/components/sections/FAQSection";
import FounderSection from "@/components/sections/FounderSection";
import FooterCTASection from "@/components/sections/FooterCTASection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <HeroSection />
        <StatStrip />
        <ProblemSection />
        <FeaturesSection />
        <ProcessSection />
        <DemoSection />
        <TiersSection />
        <AdditionalServicesSection />
        <FAQSection />
        <FounderSection />
        <FooterCTASection />
      </main>
      <Footer />
    </>
  );
}
