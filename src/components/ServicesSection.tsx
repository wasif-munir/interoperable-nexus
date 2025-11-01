
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileCode, Server, ShieldCheck, Network, Workflow, ActivitySquare } from 'lucide-react';
import AnimatedCard from './ui/AnimatedCard';

const ServiceItem = ({ 
  icon: Icon, 
  title, 
  description, 
  delay = 0 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
  delay?: number;
}) => {
  return (
    <AnimatedCard 
      className="flex flex-col h-full p-6 md:p-8" 
      delayAnimation={delay}
    >
      <div className="mb-5 w-12 h-12 rounded-lg bg-brand-blue-50 flex items-center justify-center">
        <Icon className="h-6 w-6 text-brand-blue-500" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-left">{title}</h3>
      <p className="text-gray-600 mb-5 text-left flex-grow">{description}</p>
      <div className="mt-auto text-left">
        <Link 
          to="/services" 
          className="inline-flex items-center font-medium text-brand-blue-500 hover:text-brand-blue-700 transition-colors"
        >
          Learn more <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </AnimatedCard>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: FileCode,
      title: "Integration Development",
      description: "Custom development of healthcare integration solutions using HL7, FHIR, DICOM, and other healthcare standards."
    },
    {
      icon: ActivitySquare,
      title: "Interoperability Assessment",
      description: "Comprehensive analysis of your existing systems and workflows to identify integration opportunities and challenges."
    },
    {
      icon: Network,
      title: "API Development",
      description: "Design and implementation of RESTful APIs and microservices for connecting healthcare applications."
    },
    {
      icon: Server,
      title: "Legacy System Integration",
      description: "Connect and modernize legacy healthcare systems to work with your modern infrastructure."
    },
    {
      icon: Workflow,
      title: "Workflow Optimization",
      description: "Streamline clinical and operational workflows through improved system integration and automation."
    },
    {
      icon: ShieldCheck,
      title: "Compliance & Security",
      description: "Ensure your integrations meet HIPAA, GDPR, and other healthcare data security requirements."
    }
  ];

  return (
    <section id="services" className="pb-10 md:pb-16 bg-gray-50">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div 
            className="inline-block mb-6 px-4 py-1.5 bg-brand-blue-50 text-brand-blue-600 rounded-full text-sm font-medium animate-fade-in opacity-0" 
            style={{ animationDelay: '100ms' }}
          >
            Our Services
          </div>
          <h2 
            className="text-3xl md:text-4xl font-display font-bold mb-6 animate-fade-in opacity-0" 
            style={{ animationDelay: '300ms' }}
          >
            Expert Healthcare Interoperability Solutions
          </h2>
          <p 
            className="text-xl text-gray-600 animate-fade-in opacity-0" 
            style={{ animationDelay: '500ms' }}
          >
            We provide end-to-end consultancy and development services to solve your most complex healthcare integration challenges.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceItem 
              key={index} 
              icon={service.icon} 
              title={service.title} 
              description={service.description} 
              delay={300 + (index * 100)}
            />
          ))}
        </div>

        <div 
          className="mt-16 text-center animate-fade-in opacity-0"
          style={{ animationDelay: '1200ms' }}
        >
          <Link 
            to="/services" 
            className="px-8 py-3 bg-brand-blue-500 text-white font-medium rounded-full shadow-button button-hover focus:outline-none focus:ring-2 focus:ring-brand-blue-300 focus:ring-offset-2"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
