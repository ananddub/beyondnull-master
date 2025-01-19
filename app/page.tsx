import HeroSection from "@/components/sections/home/HeroSection";
import StatsSection from "@/components/sections/home/StatsSection";
import ProcessSection from "@/components/sections/home/ProcessSection";
import PortfolioSection from "@/components/sections/home/PortFolioSection";
import TestimonialsSection from "@/components/sections/home/TestimonialSection";
import TechStackSection from "@/components/sections/home/TechStackSection";
import OurPartner from "@/components/sections/home/Ourpartner";

export default function Home() {
  return (
    <main className="pt-2">
      <HeroSection />
      <OurPartner/>
      <StatsSection />
      <ProcessSection />
      <PortfolioSection />
      <TestimonialsSection />
      <TechStackSection />
    </main>
  );
}