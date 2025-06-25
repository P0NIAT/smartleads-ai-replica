
import React from 'react';
import { Button } from '@/components/ui/button';
import VideoPlayer from '../VideoPlayer';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-salon-mauve via-salon-mauve to-salon-blush relative overflow-hidden">
      <div className="safe-zone relative z-10">
        <div className="pt-32 pb-20">
          {/* Hero Content */}
          <div className="text-center mb-12">
            <h1 className="font-montserrat font-bold text-white mb-6 leading-tight">
              <span className="block text-3xl md:text-5xl lg:text-6xl">
                <span className="md:hidden">Luxe Beauty Salon</span>
                <span className="hidden md:block">Luxe <span className="text-salon-blush">Beauty</span> Salon</span>
              </span>
              <span className="block text-2xl md:text-4xl lg:text-5xl mt-2 text-salon-rose-gold">
                Your Beauty, Redefined
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Experience personalized beauty treatments that enhance your natural radiance and leave you feeling transformed
            </p>
          </div>

          {/* Video Container */}
          <div className="mb-12">
            <VideoPlayer
              src="/salon-intro.mp4"
              poster="/salon-hero.jpg"
              className="mx-auto"
            />
          </div>

          {/* Subtext and CTAs */}
          <div className="text-center">
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              From luxurious facials to precision cuts, manicures to massage therapy. 
              Book your appointment today and discover your most beautiful self.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => scrollToSection('demo')}
                size="lg"
                className="bg-salon-blush hover:bg-salon-rose-gold text-white font-montserrat font-bold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
              >
                Book a Free Consult
              </Button>
              
              <Button
                onClick={() => scrollToSection('pricing')}
                variant="outline"
                size="lg"
                className="border-2 border-salon-rose-gold text-salon-rose-gold hover:bg-salon-rose-gold hover:text-white font-montserrat font-bold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-circle absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-salon-blush/20 to-salon-rose-gold/20 rounded-full"></div>
        <div className="floating-circle absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-salon-rose-gold/20 to-salon-blush/20 rounded-full" style={{ animationDelay: '-2s' }}></div>
        <div className="floating-circle absolute bottom-1/3 left-1/6 w-20 h-20 bg-gradient-to-br from-salon-mauve/40 to-salon-blush/40 rounded-full" style={{ animationDelay: '-4s' }}></div>
      </div>
    </section>
  );
};

export default Hero;
