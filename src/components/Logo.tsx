import React from 'react';
interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}
const Logo: React.FC<LogoProps> = ({
  className = "",
  showText = true,
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };
  return <div className={`flex items-center gap-3 ${className}`}>
      <div className={`${sizeClasses[size]} rounded-full bg-gradient-to-br from-beauty-pink to-beauty-purple flex items-center justify-center relative`}>
        {/* Sparkles SVG */}
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
          <path d="M20 3v4" />
          <path d="M22 5h-4" />
          <path d="M4 17v2" />
          <path d="M5 18H3" />
        </svg>
      </div>
      {showText && <span className="font-montserrat gradient-text text-white font-bold mx-0 text-left text-xl">
          Smart Leads AI
        </span>}
    </div>;
};
export default Logo;