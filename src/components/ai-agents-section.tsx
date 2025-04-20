
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, Globe, Coins, Search } from "lucide-react";

const agentTypes = [
  {
    title: "Marketing Agent",
    description: "Autonomous promotion across decentralized networks",
    icon: Globe,
    features: [
      "Self-adjusting marketing strategies",
      "Multi-platform content distribution",
      "Community engagement optimization",
      "Privacy-preserving analytics"
    ]
  },
  {
    title: "Trading Agent",
    description: "AI-powered crypto trading with your parameters",
    icon: Coins,
    features: [
      "Custom risk management",
      "Multi-exchange arbitrage",
      "Pattern recognition",
      "Strategy backtesting"
    ]
  },
  {
    title: "Network Agent",
    description: "Optimize and secure your P2P connections",
    icon: Search,
    features: [
      "Route optimization",
      "Bandwidth allocation",
      "Peer discovery enhancement",
      "Secure relay management"
    ]
  }
];

export const AIAgentsSection: React.FC = () => {
  return (
    <section className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 cyber-grid-bg animate-cyber-grid-move opacity-10 z-0"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <Settings className="inline-block mr-2 mb-1 animate-spin-slow" />
            <span className="neon-glow text-cyber-purple">Autonomous AI Agents</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Let AI work for you. Deploy intelligent agents that operate 24/7 in the 
            decentralized ecosystem with full privacy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {agentTypes.map((agent, index) => (
            <Card key={index} className="glass-effect border-cyber-light/30 hover:neon-border transition-all">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-xl">{agent.title}</CardTitle>
                  <agent.icon className="w-6 h-6 text-cyber-teal" />
                </div>
                <CardDescription className="text-foreground/70">{agent.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {agent.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-cyber-teal rounded-full mt-1.5 mr-2"></span>
                      <span className="text-foreground/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-gradient-to-r from-cyber-teal to-cyber-blue hover:opacity-90">
                  Deploy Agent
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4 neon-accent text-cyber-teal">Custom Agent Development</h3>
          <p className="text-foreground/80 max-w-2xl mx-auto mb-6">
            Need a specialized autonomous agent? Create your own with our AI building blocks 
            or commission one from our decentralized developer marketplace.
          </p>
          <Button variant="outline" size="lg" className="border-cyber-teal/50 hover:border-cyber-teal hover:bg-cyber-teal/10">
            Build Custom Agent
          </Button>
        </div>
      </div>
    </section>
  );
};
