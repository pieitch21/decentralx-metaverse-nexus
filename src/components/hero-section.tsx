
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 cyber-grid-bg animate-cyber-grid-move opacity-20 z-0"></div>
      <div className="absolute w-96 h-96 rounded-full bg-cyber-purple/20 filter blur-3xl -top-10 -right-10 animate-float"></div>
      <div className="absolute w-96 h-96 rounded-full bg-cyber-teal/20 filter blur-3xl -bottom-10 -left-10 animate-float"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="neon-glow text-cyber-purple animate-glow-pulse">Decentral</span>
            <span className="neon-accent text-cyber-teal">X</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8">
            The next evolution of decentralized autonomous networks.
            Trade, create, and govern in a fully private P2P metaverse.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button className="bg-cyber-purple hover:bg-cyber-purple/80 text-white p-6 w-full sm:w-auto animate-glow-pulse">
              Launch App
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" className="border-cyber-teal/50 hover:border-cyber-teal hover:bg-cyber-teal/10 p-6 w-full sm:w-auto">
              Explore Marketplace
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Privacy First", value: "100%" },
              { label: "P2P Trades", value: "Self-Custody" },
              { label: "Governance", value: "Decentralized" },
              { label: "Autonomous", value: "AI-Powered" },
            ].map((stat) => (
              <div key={stat.label} className="glass-effect rounded-lg py-4 px-2">
                <p className="text-xl sm:text-3xl font-bold text-cyber-teal neon-accent mb-1">{stat.value}</p>
                <p className="text-sm text-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
