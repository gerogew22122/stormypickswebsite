import HeroSection from "@/components/HeroSection";
import PricingPackages from "@/components/PricingPackages";
import PerformanceMetrics from "@/components/PerformanceMetrics";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PricingPackages />
      <PerformanceMetrics />
    </div>
  );
}
