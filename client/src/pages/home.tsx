import HeroSection from "@/components/HeroSection";
import PricingPackages from "@/components/PricingPackages";
import Testimonials from "@/components/Testimonials";
import PerformanceMetrics from "@/components/PerformanceMetrics";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <Testimonials />
      <PricingPackages />
      <PerformanceMetrics />
    </div>
  );
}
