
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { EyeOff, Lock, Shield, Globe } from "lucide-react";

export const PrivacySection: React.FC = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <EyeOff className="inline-block mr-2 mb-1" />
            <span className="neon-accent text-cyber-teal">Privacy By Design</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Your data belongs to you alone. DecentralX is built from the ground up with 
            privacy as its core principle, inspired by Monero's philosophy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <Lock className="w-5 h-5 mr-2 text-cyber-purple" />
                Zero Knowledge Architecture
              </h3>
              <p className="text-foreground/80">
                DecentralX utilizes zero-knowledge proofs to verify transactions without revealing any 
                information about the sender, receiver, or amount. This ensures complete privacy while 
                maintaining the integrity of the network.
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-cyber-purple" />
                No Data Collection
              </h3>
              <p className="text-foreground/80">
                Unlike traditional platforms, DecentralX doesn't collect or store any user data. 
                All information is encrypted and stored locally on your device, ensuring that 
                your activities remain private and secure.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <Globe className="w-5 h-5 mr-2 text-cyber-purple" />
                Decentralized Infrastructure
              </h3>
              <p className="text-foreground/80">
                Our P2P network architecture eliminates central points of failure and censorship. 
                By distributing data across the network, we ensure that your information cannot 
                be compromised or controlled by any single entity.
              </p>
            </div>
          </div>
          
          <div className="glass-effect border border-cyber-light/30 rounded-xl p-8 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-cyber-purple/20 filter blur-2xl"></div>
            <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-cyber-teal/20 filter blur-2xl"></div>
            
            <h3 className="text-2xl font-bold mb-6 relative z-10">Privacy Features</h3>
            
            <div className="space-y-4 relative z-10">
              {[
                "Ring signatures for transaction anonymity",
                "Stealth addresses for recipient privacy",
                "Confidential transactions to hide amounts",
                "Onion routing for network-level privacy",
                "Encrypted messaging with forward secrecy",
                "Trustless coin mixing protocols",
                "Local key storage with hardware support",
                "Privacy-preserving smart contracts"
              ].map((feature, i) => (
                <Card key={i} className="bg-cyber-dark/50 border-cyber-light/20">
                  <CardContent className="p-4">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-cyber-teal rounded-full mr-3"></div>
                      <span>{feature}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 text-center relative z-10">
              <Button className="bg-gradient-to-r from-cyber-purple to-cyber-teal hover:opacity-90">
                Explore Privacy Whitepaper
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
