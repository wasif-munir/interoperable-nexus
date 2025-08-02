
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-5">
              <img src="/logo-transparent.png" alt="ConnectDev.pro" className="h-8 mr-3" />
              <span className="text-xl font-display font-medium">
                ConnectDev<span className="text-brand-blue-300 font-semibold">.pro</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 text-sm text-left">
              Healthcare interoperability consultancy and development services, connecting systems and improving patient care.
            </p>
            <div className="text-left text-sm text-gray-500">
              © {currentYear} ConnectDev.pro. All rights reserved.
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-left">Quick Links</h3>
            <ul className="space-y-3 text-left">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'About Us', path: '/about' },
                { name: 'Contact', path: '/contact' },
              ].map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <ChevronRight className="h-4 w-4 mr-1" /> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-left">Services</h3>
            <ul className="space-y-3 text-left">
              {[
                'Integration Development',
                'API Solutions',
                'FHIR Implementation',
                'Legacy Systems Integration',
                'Interoperability Consulting',
              ].map((service, index) => (
                <li key={index}>
                  <Link to="/services" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <ChevronRight className="h-4 w-4 mr-1" /> {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-left">Contact</h3>
            <ul className="space-y-3 text-left">
              <li className="text-gray-400">
                San Francisco, CA
              </li>
              <li>
                <a href="mailto:info@connectdev.pro" className="text-gray-400 hover:text-white transition-colors">
                  info@connectdev.pro
                </a>
              </li>
              <li>
                <a href="tel:+15551234567" className="text-gray-400 hover:text-white transition-colors">
                  (555) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
