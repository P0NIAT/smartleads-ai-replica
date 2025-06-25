
import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = "", showText = true, size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12', 
    lg: 'w-16 h-16'
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`${sizeClasses[size]} rounded-full bg-gradient-to-br from-beauty-pink to-beauty-purple flex items-center justify-center relative`}>
        {/* Main star */}
        <svg viewBox="0 0 40 40" className="w-6 h-6 text-white">
          <path 
            fill="currentColor" 
            d="M20 2l4.5 13.8h14.5l-11.7 8.5 4.5 13.8L20 29.6l-11.8 8.5 4.5-13.8L1 15.8h14.5L20 2z"
          />
        </svg>
        
        {/* Sparkling/twinkle effects */}
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full opacity-80 animate-pulse"></div>
        <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-beauty-lavender rounded-full opacity-60 animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1 left-1 w-1 h-1 bg-beauty-pink rounded-full opacity-70 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-2 right-2 w-0.5 h-0.5 bg-white rounded-full opacity-90 animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>
      {showText && (
        <span className="font-montserrat font-bold text-xl gradient-text">
          Smart Leads AI
        </span>
      )}
    </div>
  );
};

export default Logo;
