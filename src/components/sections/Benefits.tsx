
import React from 'react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M24 8v16l8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "24/7 Availability",
      description: "Never miss a potential booking again. Your AI agent works around the clock."
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
          <path d="M24 4L36 16v20L24 44 12 36V16L24 4z" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="24" cy="24" r="8" fill="currentColor"/>
        </svg>
      ),
      title: "Your Writing Style",
      description: "AI learns and mimics your personal communication style perfectly."
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
          <path d="M8 24h32M24 8l16 16-16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Instant Responses",
      description: "Customers get immediate answers, leading to higher conversion rates."
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
          <path d="M40 24c0 8.837-7.163 16-16 16S8 32.837 8 24 15.163 8 24 8s16 7.163 16 16z" stroke="currentColor" strokeWidth="2"/>
          <path d="M18 24l6 6 12-12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Higher Bookings",
      description: "Convert more visitors into paying customers with intelligent automation."
    }
  ];

  return (
    <section className="py-20 bg-beauty-cream">
      <div className="safe-zone">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-beauty-purple mb-6">
            Everything Your <span className="text-beauty-pink">Beauty Business</span> Needs
          </h2>
          <p className="text-xl text-beauty-purple max-w-3xl mx-auto">
            Designed specifically for salon owners who want to focus on what they love most—making clients beautiful
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300 bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="w-16 h-16 bg-beauty-pink rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:bg-beauty-purple transition-colors duration-300">
                {benefit.icon}
              </div>
              <h3 className="font-montserrat font-bold text-xl text-beauty-purple mb-3">
                {benefit.title}
              </h3>
              <p className="text-beauty-purple leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
