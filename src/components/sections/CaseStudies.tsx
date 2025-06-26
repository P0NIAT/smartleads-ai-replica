
import React from 'react';
import { Button } from '@/components/ui/button';

const CaseStudies: React.FC = () => {
  const studies = [
    {
      business: "Luxe Nail Studio",
      location: "London, UK",
      metric: "+22%",
      description: "Monthly Bookings",
      details: "Increased customer engagement through 24/7 AI chat support, resulting in significantly more bookings.",
      image: "/case-study-1.jpg"
    },
    {
      business: "Bella Hair Salon", 
      location: "Manchester, UK",
      metric: "+17%",
      description: "Monthly Bookings", 
      details: "Automated appointment scheduling and customer inquiries led to improved booking conversion rates.",
      image: "/case-study-2.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-beauty-purple to-beauty-pink">
      <div className="safe-zone">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-white mb-6">
            Real <span className="text-beauty-lavender">Results</span> from Real Businesses
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            See how beauty businesses like yours are thriving with Smart Leads AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {studies.map((study, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-white/20"
            >
              <div className="mb-6">
                <div className="bg-white/10 rounded-xl h-48 mb-6 flex items-center justify-center">
                  <span className="text-white text-lg">Case Study Image</span>
                </div>
              </div>
              
              <div className="text-center mb-6">
                <div className="text-6xl font-montserrat font-bold text-beauty-lavender mb-2 relative">
                  {study.metric}
                  <div className="absolute inset-0 text-white opacity-20 blur-sm">{study.metric}</div>
                </div>
                <div className="text-xl font-semibold text-white mb-1">
                  {study.description}
                </div>
              </div>

              <h3 className="font-montserrat font-bold text-2xl text-white mb-2">
                {study.business}
              </h3>
              <p className="text-beauty-lavender font-medium mb-4">{study.location}</p>
              <p className="text-gray-200 leading-relaxed mb-6">
                {study.details}
              </p>

              <Button
                variant="ghost"
                className="text-beauty-lavender hover:text-white font-semibold p-0 h-auto group-hover:transform group-hover:scale-105 transition-all duration-300"
              >
                Read Case Study →
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
