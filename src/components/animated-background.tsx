
import React from 'react';

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Grid lines */}
      <div className="cyber-grid-bg animate-cyber-grid-move opacity-20 absolute inset-0"></div>
      
      {/* Glowing orbs */}
      <div className="absolute w-96 h-96 rounded-full bg-cyber-purple/20 filter blur-3xl -top-20 -right-20 animate-float"></div>
      <div className="absolute w-80 h-80 rounded-full bg-cyber-teal/20 filter blur-3xl bottom-10 left-10 animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute w-64 h-64 rounded-full bg-cyber-blue/20 filter blur-3xl top-1/2 left-1/4 animate-float" style={{animationDelay: '2s'}}></div>
      
      {/* Animated lines */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyber-teal to-transparent opacity-30 animate-glow-pulse"></div>
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyber-purple to-transparent opacity-30 animate-glow-pulse"></div>
      <div className="absolute top-0 left-0 h-full w-0.5 bg-gradient-to-b from-transparent via-cyber-blue to-transparent opacity-30 animate-glow-pulse"></div>
      <div className="absolute top-0 right-0 h-full w-0.5 bg-gradient-to-b from-transparent via-cyber-purple to-transparent opacity-30 animate-glow-pulse"></div>
    </div>
  );
};
