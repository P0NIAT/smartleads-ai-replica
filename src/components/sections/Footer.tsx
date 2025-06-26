
import React from 'react';
import Logo from '../Logo';
import { Button } from '@/components/ui/button';

const Footer: React.FC = () => {
  const links = {
    "Product": ["Features", "Pricing", "Demo", "Integrations"],
    "Company": ["About Us", "Careers", "Contact", "Blog"],
    "Support": ["Help Center", "Documentation", "Privacy Policy", "Terms of Service"]
  };

  const socialIcons = [{
    name: "Instagram",
    icon: "📱",
    href: "#"
  }, {
    name: "Facebook",
    icon: "📘",
    href: "#"
  }, {
    name: "Twitter",
    icon: "🐦",
    href: "#"
  }, {
    name: "LinkedIn",
    icon: "💼",
    href: "#"
  }];

  return (
    <footer id="contact" className="bg-gradient-to-br from-beauty-purple to-beauty-pink text-white py-[25px]">
      <div className="safe-zone">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Logo className="mb-6" />
            <p className="text-gray-200 leading-relaxed mb-6">
              AI agents that sound exactly like you, helping beauty businesses convert more visitors into bookings 24/7.
            </p>
            <Button 
              className="bg-beauty-lavender hover:bg-beauty-purple text-white font-montserrat font-semibold transition-all duration-300" 
              onClick={() => window.location.href = 'mailto:info@smartleadsai.com'}
            >
              Email Us
            </Button>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category} className="space-y-4">
              <h4 className="font-montserrat font-bold text-lg text-white">
                {category}
              </h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-gray-200 hover:text-white transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-8">
          {socialIcons.map(social => (
            <a 
              key={social.name} 
              href={social.href} 
              className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-xl hover:bg-beauty-lavender hover:transform hover:scale-110 transition-all duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-gray-200">© 2025 Smart Leads AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
