
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Users, Check, ArrowRight, Settings } from "lucide-react";

const governanceProposals = [
  {
    id: "PROP-42",
    title: "Protocol Fee Reduction",
    description: "Proposal to reduce marketplace fees from 0.5% to 0.25%",
    votes: { for: 78, against: 22 },
    status: "Active",
    timeLeft: "2 days",
  },
  {
    id: "PROP-43",
    title: "Add New Privacy Features",
    description: "Implement advanced coin mixing techniques for all transactions",
    votes: { for: 91, against: 9 },
    status: "Active",
    timeLeft: "5 days",
  },
  {
    id: "PROP-44",
    title: "AI Agent Improvement",
    description: "Upgrade the autonomous marketing agent algorithms",
    votes: { for: 63, against: 37 },
    status: "Active",
    timeLeft: "3 days",
  },
];

export const GovernanceSection: React.FC = () => {
  return (
    <section className="py-20 relative" id="governance">
      {/* Background elements */}
      <div className="absolute w-96 h-96 rounded-full bg-cyber-purple/10 filter blur-3xl bottom-20 left-20 animate-float"></div>
      
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <Shield className="inline-block mr-2 mb-1" />
            <span className="neon-glow text-cyber-blue">Decentralized Governance</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            True democracy in the digital realm. Vote on proposals, shape the platform, 
            and participate in a truly autonomous ecosystem.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {governanceProposals.map((proposal) => (
            <Card key={proposal.id} className="glass-effect border-cyber-light/30 overflow-hidden">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{proposal.title}</CardTitle>
                  <span className="text-xs px-2 py-1 rounded bg-cyber-blue/20 text-cyber-blue">
                    {proposal.id}
                  </span>
                </div>
                <CardDescription className="text-foreground/60">{proposal.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full bg-cyber-dark/50 rounded-full h-4 mb-3">
                  <div 
                    className="bg-gradient-to-r from-cyber-blue to-cyber-purple h-4 rounded-full animate-pulse" 
                    style={{ width: `${proposal.votes.for}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm">
                  <span>For: {proposal.votes.for}%</span>
                  <span>Against: {proposal.votes.against}%</span>
                </div>
                
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm text-foreground/60">
                    <span className="inline-block w-2 h-2 bg-cyber-teal rounded-full mr-1"></span>
                    {proposal.status} ({proposal.timeLeft} left)
                  </span>
                </div>
              </CardContent>
              <CardFooter className="grid grid-cols-2 gap-2">
                <Button className="bg-cyber-blue hover:bg-cyber-blue/80">
                  <Check className="w-4 h-4 mr-1" /> Vote For
                </Button>
                <Button variant="outline" className="border-cyber-blue/30 hover:border-cyber-blue hover:bg-cyber-blue/10">
                  Vote Against
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="bg-cyber-dark/60 backdrop-blur-md border border-cyber-light/20 rounded-xl p-6 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-xl font-bold mb-2 flex items-center">
                <Settings className="w-5 h-5 mr-2 text-cyber-purple" />
                Governance Statistics
              </h3>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {[
                  { label: "Active Proposals", value: "7" },
                  { label: "Total Votes", value: "142,531" },
                  { label: "Participation Rate", value: "83%" },
                  { label: "Implemented Changes", value: "41" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-foreground/60 text-sm">{stat.label}</p>
                    <p className="text-lg font-bold">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Submit Your Own Proposal</h3>
              <p className="text-foreground/80 mb-4">
                Have an idea to improve DecentralX? Submit your proposal and let the community decide.
              </p>
              <Button className="w-full bg-cyber-purple hover:bg-cyber-purple/80">
                Create Proposal <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
