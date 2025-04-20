
import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
}

export const Logo: React.FC<LogoProps> = ({ size = "md", className, ...props }) => {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-4xl",
  };

  return (
    <div className={cn("font-bold flex items-center", className)} {...props}>
      <span className="neon-glow text-cyber-purple mr-1">{size === "sm" ? "D" : "Decentral"}</span>
      <span className="neon-accent text-cyber-teal">{size === "sm" ? "X" : "X"}</span>
    </div>
  );
};
