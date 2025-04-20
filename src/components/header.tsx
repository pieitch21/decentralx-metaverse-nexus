
import React, { useState } from "react";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Menu, X, Wallet, Search, Globe, Shield, EyeOff, Settings } from "lucide-react";

const NavItems = [
  { name: "Marketplace", icon: Globe },
  { name: "Wallet", icon: Wallet },
  { name: "Governance", icon: Shield },
  { name: "Privacy", icon: EyeOff },
  { name: "AI Agents", icon: Settings },
];

export const Header: React.FC = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header className="border-b border-cyber-light/30 backdrop-blur-md bg-background/80 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Logo size="md" className="text-3xl" />
        
        <nav className="hidden md:flex items-center space-x-8">
          {NavItems.map((item) => (
            <a 
              key={item.name}
              href={`#${item.name.toLowerCase()}`}
              className="flex items-center space-x-2 text-foreground/80 hover:text-cyber-teal transition-colors"
            >
              <item.icon className="w-4 h-4" />
              <span>{item.name}</span>
            </a>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" size="sm" className="border-cyber-purple/50 hover:border-cyber-purple hover:bg-cyber-purple/10">
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
          <Button className="bg-cyber-purple hover:bg-cyber-purple/80 text-white animate-glow-pulse">
            <Wallet className="w-4 h-4 mr-2" />
            Connect Wallet
          </Button>
        </div>
        
        <Button 
          variant="ghost" 
          size="icon"
          className="md:hidden"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        >
          {mobileNavOpen ? <X /> : <Menu />}
        </Button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileNavOpen && (
        <div className="md:hidden py-4 px-4 bg-cyber-dark border-b border-cyber-light/30 glass-effect">
          <nav className="flex flex-col space-y-4">
            {NavItems.map((item) => (
              <a 
                key={item.name}
                href={`#${item.name.toLowerCase()}`}
                className="flex items-center space-x-2 text-foreground/80 hover:text-cyber-teal py-2"
                onClick={() => setMobileNavOpen(false)}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </a>
            ))}
            <Button className="bg-cyber-purple hover:bg-cyber-purple/80 text-white mt-2">
              <Wallet className="w-4 h-4 mr-2" />
              Connect Wallet
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
