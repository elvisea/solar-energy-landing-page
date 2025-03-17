import Header from "../../src/components/Header";
import HeroSection from "../../src/components/HeroSection";
import SimulatorSection from "../../src/components/SimulatorSection";
import BenefitsSection from "../../src/components/BenefitsSection";
import HowItWorksSection from "../../src/components/HowItWorksSection";
import CTASection from "../../src/components/CTASection";
import Footer from "../../src/components/Footer";
import WhatsAppButton from "../../src/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <SimulatorSection />
      <BenefitsSection />
      <HowItWorksSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
