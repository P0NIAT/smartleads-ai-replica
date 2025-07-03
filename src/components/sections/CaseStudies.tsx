
import React from 'react';

const CaseStudies: React.FC = () => {
  const studies = [
    {
      business: "Best Nails",
      location: "Northampton, UK",
      metric: "+22%",
      description: "Monthly Bookings",
      details: "Increased customer engagement through 24/7 AI chat support, resulting in significantly more bookings.",
      image: "https://kqiueydxpgxcqelzuosu.supabase.co/storage/v1/object/public/pictures//logoBestNails.png"
    },
    {
      business: "Bella Hair Salon", 
      location: "Manchester, UK",
      metric: "+17%",
      description: "Monthly Bookings", 
      details: "Automated appointment scheduling and customer inquiries led to improved booking conversion rates.",
      image: "https://kqiueydxpgxcqelzuosu.supabase.co/storage/v1/object/public/pictures//logoChair.png"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-beauty-purple to-beauty-pink">
      <div className="safe-zone">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-white mb-6">
            Real <span className="text-beauty-lavender">Results</span> from Real Businesses
          </h2>
          <p className="text-xl text-beauty-cream max-w-3xl mx-auto">
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
                <div className="bg-white/10 rounded-xl w-48 h-48 mx-auto mb-6 flex items-center justify-center overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={`${study.business} logo`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="text-center mb-6">
                <div className="text-6xl font-montserrat font-bold text-beauty-lavender mb-2 relative" style={{ textShadow: '1px 1px 0px white' }}>
                  {study.metric}
                </div>
                <div className="text-xl font-semibold text-white mb-1">
                  {study.description}
                </div>
              </div>

              <h3 className="font-montserrat font-bold text-2xl text-white mb-2">
                {study.business}
              </h3>
              <p className="text-white font-medium mb-4">{study.location}</p>
              <p className="text-beauty-cream leading-relaxed mb-6">
                {study.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
