
import React from 'react';

const Integration: React.FC = () => {
  const integrations = [
    { name: "Instagram", icon: "📱" },
    { name: "Messenger", icon: "💬" },
    { name: "WhatsApp", icon: "📞" },
    { name: "Safari/Web", icon: "🌐" },
    { name: "Sheets", icon: "📊" },
    { name: "HubSpot", icon: "🎯" },
    { name: "Twilio", icon: "📧" },
    { name: "Calendly", icon: "📅" }
  ];

  return (
    <section className="py-20 bg-smart-white">
      <div className="safe-zone">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-smart-navy mb-6">
            Seamless <span className="text-smart-cyan">Integration</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with all your favorite tools and platforms in just a few clicks
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 rounded-2xl bg-smart-light-gray hover:bg-white hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-smart-cyan to-smart-gold rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:transform group-hover:scale-110 transition-transform duration-300">
                {integration.icon}
              </div>
              <span className="font-montserrat font-semibold text-smart-navy">
                {integration.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integration;
