
import React, { useEffect } from 'react';

const BookConsultation: React.FC = () => {
  useEffect(() => {
    // Load Calendly script if not already loaded
    if (!document.querySelector('script[src*="calendly.com"]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-beauty-purple to-beauty-pink">
      <div className="safe-zone">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-white mb-6">
            Book Your <span className="text-beauty-lavender">Free Consultation</span>
          </h2>
          <p className="text-xl text-beauty-cream max-w-3xl mx-auto">
            Ready to transform your business with AI? Schedule a free consultation to discuss your needs and see how our AI agents can boost your bookings.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div 
              className="calendly-inline-widget"
              data-url="https://calendly.com/smartleadsai/free-consultation"
              style={{ 
                minWidth: '320px', 
                height: '700px',
                width: '100%'
              }}
            ></div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-beauty-lavender font-medium">
              ✨ No commitment required • 30-minute session • Personalized recommendations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookConsultation;
