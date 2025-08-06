
import React from 'react';
import { Button } from '@/components/ui/button';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Starter",
      price: "£49",
      period: "/month*",
      description: "Get your first automation up and running – perfect for new or small businesses looking to save time and attract their first clients.",
      features: [
        "1 AI agent",
        "1 Social Media Assistant",
        "1 Update a Month",
        "500 conversations/month",
        "HubSpot CRM",
        "Cancel anytime"
      ],
      popular: false,
      bgColor: "bg-white",
      icon: "💼"
    },
    {
      name: "Premium", 
      price: "£99",
      period: "/month*",
      description: "Unlock powerful tools and smarter workflows designed to help growing beauty businesses boost bookings and stay organized.",
      features: [
        "3 AI Agents",
        "3 Social Media Assistants", 
        "3 updates a month",
        "1,500 conversations/month",
        "HubSpot CRM",
        "Cancel anytime"
      ],
      popular: true,
      bgColor: "bg-beauty-pink/10",
      icon: "🚀"
    },
    {
      name: "Ultimate",
      price: "£299",
      period: "/month*",
      description: "Our all‑in‑one package—built on real‑world experience to deliver automation, insights, and growth for ambitious salons.",
      features: [
        "1 AI Voice Assistant",
        "5 AI Agents",
        "5 Social Media Assistants",
        "5 Updates a month", 
        "Unlimited conversations",
        "CRM of your choice",
        "Cancel anytime"
      ],
      popular: false,
      bgColor: "bg-beauty-lavender/10",
      icon: "👑"
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
                  <span className="bg-beauty-pink text-white px-4 py-2 rounded-full font-montserrat font-bold text-sm whitespace-nowrap">
                    ✨ Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-beauty-pink rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{plan.icon}</span>
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
                <span className="hidden md:inline lg:hidden">Choose Plan</span>
                <span className="md:hidden lg:inline">Choose Your Plan</span>
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
