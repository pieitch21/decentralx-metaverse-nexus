
import React from "react";
import { Logo } from "@/components/ui/logo";
import { Github, Twitter, Shield } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-cyber-light/30 pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">
          <div>
            <Logo size="md" className="mb-4" />
            <p className="text-foreground/70 mb-6">
              The next evolution of decentralized autonomous networks. 
              Private, secure, and entirely peer-to-peer.
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: Twitter, href: "#", label: "Twitter" },
                { Icon: Github, href: "#", label: "GitHub" },
                { Icon: Shield, href: "#", label: "Security" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="text-foreground/60 hover:text-cyber-teal transition-colors"
                >
                  <social.Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold mb-4 text-cyber-purple">Platform</h3>
              <ul className="space-y-2">
                {["Marketplace", "Wallet", "Governance", "AI Agents"].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-foreground/70 hover:text-cyber-teal transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-cyber-purple">Resources</h3>
              <ul className="space-y-2">
                {["Documentation", "Whitepaper", "Security", "Privacy"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-foreground/70 hover:text-cyber-teal transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-cyber-purple">Privacy First</h3>
            <p className="text-foreground/70 mb-4">
              DecentralX is built on privacy-preserving principles. No data collection, 
              no tracking, and fully encrypted communications.
            </p>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-cyber-teal rounded-full mr-2"></div>
              <span className="text-foreground/90 text-sm">Always-on encryption</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-cyber-light/20 pt-6 mt-6 text-center text-foreground/50 text-sm">
          <p>
            Released under MIT License | Using cryptography to preserve human freedom
          </p>
        </div>
      </div>
    </footer>
  );
};
