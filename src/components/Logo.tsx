
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
      <div className={`${sizeClasses[size]} rounded-full bg-gradient-to-br from-salon-rose-gold to-salon-blush flex items-center justify-center`}>
        <svg viewBox="0 0 40 40" className="w-6 h-6 text-white">
          <path fill="currentColor" d="M20 2L30 12v16L20 38 10 28V12L20 2zm0 4l-6 6v12l6 10 6-10V12l-6-6z"/>
          <circle cx="20" cy="20" r="6" fill="currentColor"/>
        </svg>
      </div>
      {showText && (
        <span className="font-montserrat font-bold text-xl gradient-text">
          Luxe Beauty Salon
        </span>
      )}
    </div>
  );
};

export default Logo;
