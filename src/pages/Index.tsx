import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { PrinciplesSection } from "@/components/principles-section";
import { MarketplaceSection } from "@/components/marketplace-section";
import { WalletSection } from "@/components/wallet-section";
import { GovernanceSection } from "@/components/governance-section";
import { PrivacySection } from "@/components/privacy-section";
import { AIAgentsSection } from "@/components/ai-agents-section";
import { Footer } from "@/components/footer";
import { AnimatedBackground } from "@/components/animated-background";

const Index = () => {
  return (
    <div className="min-h-screen bg-cyber-darker text-foreground relative">
      <AnimatedBackground />
      <Header />
      <main>
        <HeroSection />
        <PrinciplesSection />
        <MarketplaceSection />
        <WalletSection />
        <GovernanceSection />
        <PrivacySection />
        <AIAgentsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
