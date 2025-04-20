
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Bitcoin, Users, Lock } from "lucide-react";

const marketItems = [
  {
    title: "Digital Asset #1024",
    description: "Rare collectible from the Cyber Series",
    price: "0.23 XMR",
    seller: "Anon1337",
    badge: "Verified",
    image: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='286' height='180' viewBox='0 0 286 180'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Crect width='286' height='180' fill='%23121323'/%3E%3Cpath fill='%23b967ff' d='M113 44.5v91l70-45.5z'/%3E%3Cpath fill='%2301ffc3' d='M183 44.5v91l-70-45.5z'/%3E%3C/g%3E%3C/svg%3E",
  },
  {
    title: "P2P Service Contract",
    description: "Secure escrow for anonymous services",
    price: "1.05 BTC",
    seller: "CryptoNode42",
    badge: "New",
    image: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='286' height='180' viewBox='0 0 286 180'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Crect width='286' height='180' fill='%23121323'/%3E%3Ccircle cx='143' cy='90' r='50' stroke='%23b967ff' stroke-width='8'/%3E%3Ccircle cx='143' cy='90' r='30' stroke='%2301ffc3' stroke-width='8'/%3E%3C/g%3E%3C/svg%3E",
  },
  {
    title: "AI-Powered Trading Bot",
    description: "Autonomous algorithm with private keys",
    price: "5.00 ETH",
    seller: "QuantumDev",
    badge: "Popular",
    image: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='286' height='180' viewBox='0 0 286 180'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Crect width='286' height='180' fill='%23121323'/%3E%3Cpath stroke='%23ff71ce' stroke-width='8' d='M40 90h206M143 20v140'/%3E%3Ccircle cx='143' cy='90' r='40' stroke='%2345a6ff' stroke-width='8'/%3E%3C/g%3E%3C/svg%3E",
  },
];

export const MarketplaceSection: React.FC = () => {
  return (
    <section className="py-20" id="marketplace">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <ShoppingBag className="inline-block mr-2 mb-1" />
            <span className="neon-accent text-cyber-teal">P2P Marketplace</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Trade digital assets, services, and autonomous agents in a fully private, 
            decentralized marketplace with no intermediaries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {marketItems.map((item, index) => (
            <Card key={index} className="glass-effect border-cyber-light/30 overflow-hidden hover:border-cyber-purple/50 transition-all">
              <div className="h-44 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <Badge className="bg-cyber-purple/80">{item.badge}</Badge>
                </div>
                <CardDescription className="text-foreground/60">{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Bitcoin className="w-4 h-4 mr-2 text-cyber-yellow" />
                    <span className="font-bold">{item.price}</span>
                  </div>
                  <div className="flex items-center text-sm text-foreground/60">
                    <Users className="w-3 h-3 mr-1" />
                    <span>{item.seller}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-cyber-blue hover:bg-cyber-blue/80">
                  Trade Securely
                  <Lock className="w-3 h-3 ml-2" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button variant="outline" className="border-cyber-teal/50 hover:border-cyber-teal hover:bg-cyber-teal/10">
            View All Listings
          </Button>
        </div>
      </div>
    </section>
  );
};
