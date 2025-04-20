
import React from "react";
import { cn } from "@/lib/utils";

interface NeonTextProps {
  children: React.ReactNode;
  color?: "purple" | "teal" | "blue" | "pink" | "yellow";
  className?: string;
}

export const NeonText: React.FC<NeonTextProps> = ({ 
  children, 
  color = "purple",
  className 
}) => {
  const colorClasses = {
    purple: "text-cyber-purple neon-glow",
    teal: "text-cyber-teal neon-accent",
    blue: "text-cyber-blue",
    pink: "text-cyber-pink",
    yellow: "text-cyber-yellow"
  };

  return (
    <span className={cn(colorClasses[color], className)}>
      {children}
    </span>
  );
};
