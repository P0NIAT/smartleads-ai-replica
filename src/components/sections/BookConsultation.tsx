
import React from 'react';

const BookConsultation: React.FC = () => {
  return (
    <section id="book-consultation" className="py-20 bg-gradient-to-br from-beauty-purple to-beauty-pink">
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
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden">
            <iframe
              src="https://calendly.com/smartleadsai/free-consultation"
              width="100%"
              height="900"
              frameBorder="0"
              scrolling="no"
              className="block"
              title="Schedule a Free Consultation"
            ></iframe>
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
