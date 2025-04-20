
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Users, Shield, Coins, Globe, Search } from "lucide-react";

const principles = [
  {
    title: "Self-Sovereign Identity",
    description: "Own your digital identity without reliance on central authorities",
    icon: Users,
    color: "cyber-purple",
    points: [
      "Private keys never leave your device",
      "Pseudonymous participation by default",
      "Reputation systems that preserve privacy",
      "Zero knowledge identity proofs"
    ]
  },
  {
    title: "Financial Freedom",
    description: "Be your own bank with full control over your assets",
    icon: Coins,
    color: "cyber-teal",
    points: [
      "No third-party custody of funds",
      "Cross-chain interoperability",
      "Censorship-resistant transactions",
      "Lightning-fast microtransactions"
    ]
  },
  {
    title: "Distributed Consensus",
    description: "No central points of failure or control",
    icon: Globe,
    color: "cyber-blue",
    points: [
      "Byzantine fault-tolerant consensus",
      "Equitable governance participation",
      "Anti-fragile network design",
      "Open protocol standards"
    ]
  },
  {
    title: "Privacy by Default",
    description: "Your data belongs to you alone",
    icon: Shield,
    color: "cyber-pink",
    points: [
      "End-to-end encryption for all data",
      "IP obfuscation through routing",
      "Metadata minimization",
      "Plausible deniability in all actions"
    ]
  },
  {
    title: "Open Innovation",
    description: "Permissionless development and integration",
    icon: Search,
    color: "cyber-yellow",
    points: [
      "MIT licensed core protocol",
      "Composable building blocks",
      "Developer-friendly APIs",
      "Transparent codebase and operations"
    ]
  }
];

export const PrinciplesSection: React.FC = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <Shield className="inline-block mr-2 mb-1" />
            <span className="bg-gradient-to-r from-cyber-purple via-cyber-teal to-cyber-blue text-transparent bg-clip-text">
              Core Principles
            </span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            DecentralX is built on libertarian ideals and cypherpunk ethos, 
            drawing inspiration from Bitcoin's revolutionary approach.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((principle, index) => (
            <Card 
              key={index} 
              className="glass-effect border-cyber-light/30 hover:border-cyber-purple/50 transition-all"
            >
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{principle.title}</CardTitle>
                  <principle.icon className={`w-5 h-5 text-${principle.color}`} />
                </div>
                <CardDescription className="text-foreground/60">{principle.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {principle.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <Check className={`w-4 h-4 mr-2 text-${principle.color} flex-shrink-0`} />
                      <span className="text-foreground/80 text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 p-6 bg-cyber-dark/60 backdrop-blur-md border border-cyber-light/20 rounded-xl text-center">
          <blockquote className="text-xl italic text-foreground/90 max-w-3xl mx-auto">
            "The social power of our technology—the freedom for two human beings to transact without third party permission—is more 
            important than all other technical aspects combined."
          </blockquote>
          <p className="mt-4 text-sm text-foreground/60">— Inspired by cypherpunk principles</p>
        </div>
      </div>
    </section>
  );
};
