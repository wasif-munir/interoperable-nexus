
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

const AboutSection = () => {
  const expertise = [
    "Healthcare integration architecture",
    "HL7 v2, FHIR, and DICOM standards",
    "Modern API development",
    "System migration and legacy integration",
    "Healthcare workflow optimization",
    "Compliance and security"
  ];

  return (
    <section id="about" className="py-20 md:py-32 overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image/Visual Section */}
          <div className="relative">
            <div 
              className="rounded-xl overflow-hidden shadow-elevated animate-fade-in-left opacity-0" 
              style={{ animationDelay: '300ms' }}
            >
              <div className="aspect-w-4 aspect-h-3 bg-gradient-to-br from-brand-blue-400 to-brand-blue-600 p-6 lg:p-10">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 shadow-glossy h-full flex flex-col justify-center">
                  <div className="flex flex-col gap-4 text-left">
                    <div className="text-white/90 text-lg md:text-xl italic">
                      "ConnectDev.pro transformed our integration landscape, connecting our legacy systems with modern applications and improving our data flow substantially."
                    </div>
                    <div className="text-white font-semibold">
                      — Healthcare Technology Director
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brand-blue-100 rounded-full animate-pulse-soft opacity-70 -z-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gray-100 rounded-full animate-float -z-10"></div>
          </div>
          
          {/* Content Section */}
          <div className="text-left">
            <div 
              className="inline-block mb-6 px-4 py-1.5 bg-brand-blue-50 text-brand-blue-600 rounded-full text-sm font-medium animate-fade-in opacity-0" 
              style={{ animationDelay: '100ms' }}
            >
              About Us
            </div>
            
            <h2 
              className="text-3xl md:text-4xl font-display font-bold mb-6 animate-fade-in opacity-0" 
              style={{ animationDelay: '300ms' }}
            >
              Expert Guidance in Healthcare Interoperability
            </h2>
            
            <p 
              className="text-lg text-gray-700 mb-6 animate-fade-in opacity-0" 
              style={{ animationDelay: '500ms' }}
            >
              At ConnectDev.pro, we combine deep healthcare domain knowledge with technical expertise to deliver interoperability solutions that connect systems, improve workflows, and enhance patient care.
            </p>
            
            <p 
              className="text-lg text-gray-700 mb-8 animate-fade-in opacity-0" 
              style={{ animationDelay: '700ms' }}
            >
              Our team brings years of experience in healthcare IT integration, helping organizations overcome complex challenges in connecting disparate systems.
            </p>
            
            <div 
              className="mb-8 animate-fade-in opacity-0" 
              style={{ animationDelay: '900ms' }}
            >
              <h3 className="font-semibold text-xl mb-4">Our Expertise:</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {expertise.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-brand-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div 
              className="animate-fade-in opacity-0" 
              style={{ animationDelay: '1100ms' }}
            >
              <Link 
                to="/about" 
                className="px-8 py-3 bg-brand-blue-500 text-white font-medium rounded-full shadow-button button-hover focus:outline-none focus:ring-2 focus:ring-brand-blue-300 focus:ring-offset-2"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
