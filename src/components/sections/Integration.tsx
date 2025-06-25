
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
    <section className="py-20 bg-beauty-lavender">
      <div className="safe-zone">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-white mb-6">
            Seamless <span className="text-beauty-pink">Integration</span>
          </h2>
          <p className="text-xl text-beauty-white max-w-3xl mx-auto">
            Connect with all your favorite tools and platforms in just a few clicks
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 rounded-2xl bg-white/10 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-beauty-pink rounded-full flex items-center justify-center text-2xl mb-4 group-hover:transform group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-beauty-purple/30">
                {integration.icon}
              </div>
              <span className="font-montserrat font-semibold text-white">
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
