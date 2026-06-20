import { FAQPinboardSection, FeatureSpotlight, FeaturesGrid, FooterCTA, IntegrationGrid, MarqueeTrustBar, PricingCards, ProblemSolution, StatCounter, TargetGroupTabs, TestimonialsGrid } from "@/components/ui/HomeSections";
import { HeroSection } from "@/components/ui/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MarqueeTrustBar />
      <FeatureSpotlight />
      <ProblemSolution />
      <FeaturesGrid />
      <TargetGroupTabs />
      <StatCounter />
      <IntegrationGrid />
      <PricingCards />
      <TestimonialsGrid />
      <FAQPinboardSection />
      <FooterCTA />
    </>
  );
}
