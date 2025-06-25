
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Setup & Training",
      description: "We analyze your business and train your AI agent to match your communication style perfectly."
    },
    {
      number: "02", 
      title: "Integration",
      description: "Seamlessly connect to Instagram, WhatsApp, your website, and booking systems in minutes."
    },
    {
      number: "03",
      title: "Go Live",
      description: "Your AI agent starts converting visitors into bookings 24/7, sounding exactly like you."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-smart-navy to-smart-navy/90">
      <div className="safe-zone">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-white mb-6">
            How It <span className="text-smart-gold">Works</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get your personalized AI agent up and running in just three simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-smart-cyan rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-smart-gold transition-colors duration-300">
                  <span className="font-montserrat font-bold text-2xl text-white">
                    {step.number}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-px bg-smart-cyan/30 transform translate-x-10"></div>
                )}
              </div>
              
              <h3 className="font-montserrat font-bold text-2xl text-white mb-4">
                {step.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
