
import React from 'react';
import { Button } from '@/components/ui/button';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Starter",
      price: "£49",
      period: "/mo*",
      description: "Perfect for small beauty businesses",
      features: [
        "1 AI agent",
        "1,000 conversations/month",
        "1 integration",
        "Custom tuning & training",
        "Templates included",
        "Priority support",
        "Analytics dashboard",
        "Cancel anytime"
      ],
      popular: false,
      bgColor: "bg-white"
    },
    {
      name: "Growing Business", 
      price: "£99",
      period: "/mo*",
      description: "Perfect for established beauty businesses",
      features: [
        "3 AI agents",
        "3,000 conversations/month", 
        "3 integrations",
        "All Starter features",
        "Advanced analytics",
        "Multi-platform support",
        "Priority training",
        "Cancel anytime"
      ],
      popular: true,
      bgColor: "bg-beauty-pink/10"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing*",
      description: "Perfect for large chains & franchises",
      features: [
        "Unlimited AI agents",
        "Unlimited conversations",
        "Unlimited integrations", 
        "Dedicated onboarding & SLA",
        "API + custom integration",
        "24×7 premium support",
        "White-label options",
        "Cancel anytime"
      ],
      popular: false,
      bgColor: "bg-beauty-lavender/10"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-beauty-cream">
      <div className="safe-zone">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-beauty-purple mb-6">
            Simple Pricing for <span className="text-beauty-pink">Beautiful</span> Results
          </h2>
          <p className="text-xl text-beauty-purple max-w-3xl mx-auto">
            Choose the perfect plan to transform your beauty business. All plans include everything you need to get started.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 ${plan.bgColor} border-2 ${
                plan.popular
                  ? 'border-beauty-pink shadow-2xl'
                  : 'border-beauty-lavender/20 shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-beauty-pink text-white px-6 py-2 rounded-full font-montserrat font-bold text-sm">
                    ✨ Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-beauty-pink rounded-full flex items-center justify-center mx-auto mb-4">
                  {index === 0 && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white w-6 h-6">
                      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
                      <path d="M20 3v4"/>
                      <path d="M22 5h-4"/>
                      <path d="M4 17v2"/>
                      <path d="M5 18H3"/>
                    </svg>
                  )}
                  {index === 1 && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white w-6 h-6">
                      <path d="M6 3h12l4 6-10 13L2 9l4-6z"/>
                      <path d="M11 3 8 9l4 13 4-13-3-6"/>
                      <path d="M2 9h20"/>
                    </svg>
                  )}
                  {index === 2 && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white w-6 h-6">
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                      <line x1="16" x2="16" y1="2" y2="6"/>
                      <line x1="8" x2="8" y1="2" y2="6"/>
                      <line x1="3" x2="21" y1="10" y2="10"/>
                    </svg>
                  )}
                </div>
                <h3 className="font-montserrat font-bold text-2xl mb-2 text-beauty-purple">
                  {plan.name}
                </h3>
                <p className="mb-6 text-beauty-purple">
                  {plan.description}
                </p>
                <div className="mb-2">
                  <span className="text-5xl font-montserrat font-bold text-beauty-purple">
                    {plan.price}
                  </span>
                  <span className="text-lg text-beauty-purple">
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="mb-8 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <span className="text-xl text-beauty-pink">
                      ✓
                    </span>
                    <span className="text-beauty-purple">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => scrollToSection('contact')}
                className="w-full py-4 font-montserrat font-bold text-lg transition-all duration-300 bg-beauty-pink hover:bg-beauty-purple text-white"
              >
                Choose Your Plan
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-beauty-purple mt-8">
          * + setup fee
        </p>
      </div>
    </section>
  );
};

export default Pricing;
