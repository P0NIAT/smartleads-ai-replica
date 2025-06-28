
import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/sections/Hero';
import Benefits from '../components/sections/Benefits';
import BookConsultation from '../components/sections/BookConsultation';
import Demo from '../components/sections/Demo';
import CaseStudies from '../components/sections/CaseStudies';
import Integration from '../components/sections/Integration';
import Testimonials from '../components/sections/Testimonials';
import Pricing from '../components/sections/Pricing';
import Footer from '../components/sections/Footer';
import ChatWidget from '../components/ChatWidget';

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Add intersection observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));

    // Add smooth scroll listeners
    document.addEventListener('click', handleSmoothScroll);

    return () => {
      document.removeEventListener('click', handleSmoothScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Benefits />
      <BookConsultation />
      <Demo />
      <CaseStudies />
      <Integration />
      <Testimonials />
      <Pricing />
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
