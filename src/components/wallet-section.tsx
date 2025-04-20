import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wallet, Shield, Lock, Eye, ArrowUpRight } from "lucide-react";

export const WalletSection: React.FC = () => {
  const FEE_PERCENTAGE = 0.2;
  const PLATFORM_WALLET = "46WobiPFyqAhqtk9tH9uV8EjFd99oTeoBETqpqwa974vDzFfooHjNZ7PiC4Xfe3wAwD9XZBBRFWVt6TQDTKqCAVF4kRzVj5";

  return (
    <section className="py-20 relative" id="wallet">
      <div className="absolute w-96 h-96 rounded-full bg-cyber-blue/10 filter blur-3xl top-20 right-20 animate-float"></div>
      
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <Wallet className="inline-block mr-2 mb-1" />
            <span className="neon-glow text-cyber-purple">Self-Custodial Wallet</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Your keys, your coins. Complete control with zero tracking. 
            Integrated with privacy coins and lightning network.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <Card className="glass-effect border-cyber-light/30 lg:col-span-3 neon-border">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-2xl neon-glow text-cyber-purple">Multi-Asset Wallet</CardTitle>
                <Eye className="text-cyber-teal" />
              </div>
              <CardDescription className="text-foreground/60">Self-custodial private keys</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { symbol: "XMR", name: "Monero", amount: "23.5", value: "$4,652" },
                  { symbol: "BTC", name: "Bitcoin", amount: "0.385", value: "$12,950" },
                  { symbol: "ETH", name: "Ethereum", amount: "4.21", value: "$8,724" },
                ].map((coin) => (
                  <div key={coin.symbol} className="bg-cyber-dark rounded-lg p-3 border border-cyber-light/20">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-bold">{coin.symbol}</span>
                      <span className="text-xs text-foreground/60">{coin.name}</span>
                    </div>
                    <div className="text-lg font-bold mb-1">{coin.amount}</div>
                    <div className="text-xs text-foreground/60">{coin.value}</div>
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Send", "Receive", "Swap", "History"].map((action) => (
                  <Button 
                    key={action} 
                    variant="outline" 
                    className="border-cyber-purple/30 hover:border-cyber-purple hover:bg-cyber-purple/10"
                  >
                    {action}
                  </Button>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-2">
              <p className="text-xs text-foreground/40 italic">
                <Lock className="inline w-3 h-3 mr-1" />
                All private keys are stored locally and never leave your device
              </p>
              <p className="text-xs text-foreground/40">
                Platform fee: {FEE_PERCENTAGE}% of transactions
              </p>
            </CardFooter>
          </Card>
          
          <Card className="glass-effect border-cyber-light/30 lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-xl text-cyber-teal">Lightning Network</CardTitle>
              <CardDescription className="text-foreground/60">Instant, low-fee transactions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-cyber-dark rounded-lg p-4 border border-cyber-light/20">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-bold">Lightning Capacity</span>
                </div>
                <div className="text-lg font-bold mb-1">0.05 BTC</div>
                <div className="text-xs text-foreground/60">6 active channels</div>
              </div>
              
              <Button className="w-full bg-cyber-teal hover:bg-cyber-teal/80">
                Open Channel
                <ArrowUpRight className="w-3 h-3 ml-2" />
              </Button>
            </CardContent>
            <CardFooter>
              <p className="text-xs text-foreground/40">
                Lightning enables instant micropayments with near-zero fees
              </p>
            </CardFooter>
          </Card>
        </div>
        
        <div className="mt-12 bg-cyber-dark/50 backdrop-blur-md border border-cyber-light/20 rounded-xl p-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-cyber-teal" />
                Enhanced Privacy Protection
              </h3>
              <p className="text-foreground/80">
                DecentralX uses advanced cryptographic techniques including zero-knowledge proofs, 
                coin mixing, and onion routing to ensure complete transaction privacy.
              </p>
            </div>
            <div className="md:w-1/3 text-right">
              <Button className="bg-cyber-teal hover:bg-cyber-teal/80">
                Activate Privacy Shield
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
