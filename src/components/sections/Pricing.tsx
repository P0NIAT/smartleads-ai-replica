
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
      bgColor: "bg-salon-blush/20"
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
      bgColor: "bg-beauty-pink"
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
      bgColor: "bg-beauty-lavender/30"
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
            Simple Pricing for <span className="text-beauty-pink">Beauty</span> Results
          </h2>
          <p className="text-xl text-beauty-purple max-w-3xl mx-auto">
            Choose the perfect plan for your beauty business. All plans include our signature personal writing style adaptation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 ${plan.bgColor} ${
                plan.popular
                  ? 'text-white shadow-2xl'
                  : 'text-beauty-purple border-2 border-beauty-lavender/20'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-beauty-lavender text-white px-6 py-2 rounded-full font-montserrat font-bold text-sm">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`font-montserrat font-bold text-2xl mb-2 ${
                  plan.popular ? 'text-white' : 'text-beauty-purple'
                }`}>
                  {plan.name}
                </h3>
                <p className={`mb-6 ${
                  plan.popular ? 'text-beauty-lavender' : 'text-beauty-purple'
                }`}>
                  {plan.description}
                </p>
                <div className="mb-2">
                  <span className={`text-5xl font-montserrat font-bold ${
                    plan.popular ? 'text-white' : 'text-beauty-purple'
                  }`}>
                    {plan.price}
                  </span>
                  <span className={`text-lg ${
                    plan.popular ? 'text-beauty-lavender' : 'text-beauty-purple'
                  }`}>
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="mb-8 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <span className={`text-xl ${
                      plan.popular ? 'text-beauty-lavender' : 'text-beauty-pink'
                    }`}>
                      ✓
                    </span>
                    <span className={plan.popular ? 'text-beauty-lavender' : 'text-beauty-purple'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => scrollToSection('contact')}
                className={`w-full py-4 font-montserrat font-bold text-lg transition-all duration-300 ${
                  plan.popular
                    ? 'bg-beauty-lavender hover:bg-beauty-purple text-white'
                    : 'bg-beauty-pink hover:bg-beauty-purple text-white'
                }`}
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
