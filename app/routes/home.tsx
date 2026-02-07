import type { Route } from "./+types/home";
import { HeroSection } from "../components/landing/HeroSection";
import { ProofSection } from "../components/landing/ProofSection";
import { MenuSection } from "../components/landing/MenuSection";
import { WhySection } from "../components/landing/WhySection";
import { WhatsAppCaptureSection } from "../components/landing/WhatsAppCaptureSection";
import { FaqSection } from "../components/landing/FaqSection";
import { FinalCtaSection, Footer } from "../components/landing/FooterAndCta";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "CHIMAX | Bengaluru's First True Korean Chicken Delivery" },
    { name: "description", content: "Experience Maximum Crunch and Seoul Spirit with Bengaluru's most authentic Korean Fried Chicken delivery." },
  ];
}

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background-dark selection:bg-primary selection:text-background-dark">
      {/* Page Sections Assembler */}
      <HeroSection />

      <ProofSection />

      <MenuSection />

      <WhySection />

      <WhatsAppCaptureSection />

      <FaqSection />

      <FinalCtaSection />

      <Footer />

      {/* Minimal Sticky Header for Branding */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] animate-fade-in pointer-events-none">
        <h2 className="text-primary text-xl font-black tracking-tighter bg-background-dark/40 backdrop-blur-md px-6 py-2 rounded-full border border-primary/20 shadow-glow">
          CHIMAX
        </h2>
      </div>
    </main>
  );
}
