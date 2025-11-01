
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Network, ActivitySquare, Database } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-10 md:pt-36 md:pb-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-52 w-96 h-96 bg-brand-blue-200/20 rounded-full blur-3xl"/>
        <div className="absolute bottom-1/4 -left-52 w-96 h-96 bg-brand-blue-200/20 rounded-full blur-3xl"/>
      </div>

      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          {/* Pills/Tag */}
          <div 
            className="inline-block mb-6 px-4 py-1.5 bg-brand-blue-50 text-brand-blue-600 rounded-full text-sm font-medium animate-fade-in-down opacity-0"
            style={{ animationDelay: '200ms' }}
          >
            Healthcare Interoperability Experts
          </div>
          
          {/* Main heading */}
          <h1 
            className="text-4xl md:text-6xl font-display font-bold text-pretty mb-6 tracking-tight text-gray-900 animate-fade-in opacity-0"
            style={{ animationDelay: '400ms' }}
          >
            Connecting Healthcare Systems with{' '}
            <span className="relative">
              <span className="relative z-10 text-brand-blue-500">
                Seamless Integration
              </span>
              <span className="absolute bottom-2 inset-x-0 h-3 bg-brand-blue-100/50 -z-0"></span>
            </span>
          </h1>
          
          {/* Subheading */}
          <p 
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto text-pretty animate-fade-in opacity-0"
            style={{ animationDelay: '600ms' }}
          >
            We specialize in developing interoperable healthcare solutions that connect systems, streamline workflows, and improve patient care through expert consultancy and development services.
          </p>
          
          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in opacity-0"
            style={{ animationDelay: '800ms' }}
          >
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-brand-blue-500 text-white font-medium rounded-full shadow-button button-hover focus:outline-none focus:ring-2 focus:ring-brand-blue-300 focus:ring-offset-2"
            >
              Get Started
              <ArrowRight className="inline-block ml-2 h-4 w-4" />
            </Link>
            <Link 
              to="/services" 
              className="px-8 py-3 bg-white text-gray-700 font-medium rounded-full border border-gray-200 shadow-sm button-hover focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
            >
              Explore Services
            </Link>
          </div>
          
          {/* Feature icons */}
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in-up opacity-0"
            style={{ animationDelay: '1000ms' }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-brand-blue-50 flex items-center justify-center mb-4">
                <Network className="h-8 w-8 text-brand-blue-500" />
              </div>
              <h3 className="font-medium text-lg mb-2">Interoperability</h3>
              <p className="text-gray-600 text-sm">Seamless connectivity between healthcare systems and standards</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-brand-blue-50 flex items-center justify-center mb-4">
                <ActivitySquare className="h-8 w-8 text-brand-blue-500" />
              </div>
              <h3 className="font-medium text-lg mb-2">Expert Consultancy</h3>
              <p className="text-gray-600 text-sm">Strategic guidance on healthcare integration challenges</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-brand-blue-50 flex items-center justify-center mb-4">
                <Database className="h-8 w-8 text-brand-blue-500" />
              </div>
              <h3 className="font-medium text-lg mb-2">Development</h3>
              <p className="text-gray-600 text-sm">Custom solutions built with modern technologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
