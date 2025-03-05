
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import AnimatedCard from '@/components/ui/AnimatedCard';
import { FileCode, Server, ShieldCheck, Network, Workflow, ActivitySquare, FilesIcon, DatabaseIcon, GitPullRequestIcon, ClipboardListIcon, HeartPulseIcon, CodesandboxIcon } from 'lucide-react';

const ServiceDetailCard = ({ 
  icon: Icon, 
  title, 
  description, 
  features = [],
  delay = 0
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
  features?: string[]; 
  delay?: number;
}) => {
  return (
    <AnimatedCard 
      className="flex flex-col h-full" 
      delayAnimation={delay}
    >
      <div className="p-6 md:p-8 flex flex-col h-full">
        <div className="mb-6 flex items-center">
          <div className="w-12 h-12 rounded-lg bg-brand-blue-50 flex items-center justify-center mr-4">
            <Icon className="h-6 w-6 text-brand-blue-500" />
          </div>
          <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
        </div>
        
        <p className="text-gray-700 mb-8 text-left">{description}</p>
        
        {features.length > 0 && (
          <div className="mt-auto">
            <h4 className="font-medium text-left mb-3">What we offer:</h4>
            <ul className="space-y-2 text-left">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="text-brand-blue-500 mr-2 mt-1 flex-shrink-0">•</div>
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </AnimatedCard>
  );
};

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Services | ConnectDev.pro";
  }, []);

  const servicesData = [
    {
      icon: FileCode,
      title: "Integration Development",
      description: "We design and build custom integration solutions that enable seamless data exchange between healthcare systems.",
      features: [
        "Custom interface development for HL7, FHIR, DICOM, X12, and other healthcare standards",
        "API design and implementation",
        "Integration engine configuration and customization",
        "Scalable and maintainable integration architecture"
      ]
    },
    {
      icon: ActivitySquare,
      title: "Interoperability Assessment",
      description: "We analyze your existing systems and workflows to identify integration opportunities and challenges.",
      features: [
        "Comprehensive system inventory and gap analysis",
        "Integration strategy development",
        "Workflow optimization recommendations",
        "Roadmap for improved interoperability"
      ]
    },
    {
      icon: Network,
      title: "API Development",
      description: "We create RESTful APIs and microservices that enable modern, flexible integration between applications.",
      features: [
        "API design and development following REST and FHIR principles",
        "API gateway implementation",
        "Authentication and authorization",
        "API documentation and developer portals"
      ]
    },
    {
      icon: Server,
      title: "Legacy System Integration",
      description: "We help organizations connect their legacy systems with modern applications to extend their useful life.",
      features: [
        "Legacy system assessment and modernization planning",
        "Custom adapters and middleware development",
        "Data migration and synchronization",
        "Hybrid cloud integration solutions"
      ]
    },
    {
      icon: Workflow,
      title: "Workflow Optimization",
      description: "We streamline clinical and operational workflows through improved system integration and automation.",
      features: [
        "Clinical workflow analysis and optimization",
        "Process automation implementation",
        "Alert and notification system design",
        "Reporting and analytics integration"
      ]
    },
    {
      icon: ShieldCheck,
      title: "Compliance & Security",
      description: "We ensure your integrations meet HIPAA, GDPR, and other healthcare data security requirements.",
      features: [
        "Security assessment and compliance review",
        "Secure API and integration design",
        "Encryption and access control implementation",
        "Audit logging and monitoring systems"
      ]
    },
    {
      icon: HeartPulseIcon,
      title: "Health Standards Implementation",
      description: "We implement healthcare data standards to improve interoperability and data exchange capabilities.",
      features: [
        "FHIR implementation and customization",
        "HL7 v2 and v3 interfaces",
        "DICOM connectivity solutions",
        "IHE profile implementation"
      ]
    },
    {
      icon: CodesandboxIcon,
      title: "Custom Healthcare Solutions",
      description: "We develop tailored applications that address specific healthcare integration challenges.",
      features: [
        "Patient portal integrations",
        "Population health data aggregation",
        "Clinical decision support system integration",
        "Remote patient monitoring connectivity"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="pt-20 pb-20 md:pt-28 md:pb-28 bg-gradient-to-b from-gray-50 to-white">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <div 
                className="inline-block mb-6 px-4 py-1.5 bg-brand-blue-50 text-brand-blue-600 rounded-full text-sm font-medium animate-fade-in opacity-0" 
                style={{ animationDelay: '100ms' }}
              >
                Our Services
              </div>
              
              <h1 
                className="text-4xl md:text-5xl font-display font-bold mb-6 animate-fade-in opacity-0" 
                style={{ animationDelay: '300ms' }}
              >
                Healthcare Interoperability Solutions
              </h1>
              
              <p 
                className="text-xl text-gray-600 animate-fade-in opacity-0" 
                style={{ animationDelay: '500ms' }}
              >
                We provide end-to-end consulting and development services to solve your most complex healthcare integration challenges.
              </p>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="py-16 md:py-24">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {servicesData.map((service, index) => (
                <ServiceDetailCard 
                  key={index} 
                  icon={service.icon} 
                  title={service.title} 
                  description={service.description} 
                  features={service.features} 
                  delay={300 + index * 100}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Integration Technologies */}
        <section className="py-20 bg-gray-50">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div 
                className="inline-block mb-6 px-4 py-1.5 bg-brand-blue-50 text-brand-blue-600 rounded-full text-sm font-medium animate-fade-in opacity-0" 
                style={{ animationDelay: '100ms' }}
              >
                Technologies
              </div>
              
              <h2 
                className="text-3xl md:text-4xl font-display font-bold mb-6 animate-fade-in opacity-0" 
                style={{ animationDelay: '300ms' }}
              >
                Our Technical Expertise
              </h2>
              
              <p 
                className="text-xl text-gray-600 animate-fade-in opacity-0" 
                style={{ animationDelay: '500ms' }}
              >
                We work with a wide range of healthcare technologies and standards to deliver robust interoperability solutions.
              </p>
            </div>
            
            <div 
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto animate-fade-in opacity-0" 
              style={{ animationDelay: '700ms' }}
            >
              {[
                "HL7 v2 & v3",
                "FHIR",
                "DICOM",
                "IHE Profiles",
                "X12",
                "REST APIs",
                "GraphQL",
                "OAuth 2.0",
                "SMART on FHIR",
                "CDA",
                "CCDAs",
                "NCPDP",
                "Cloud APIs",
                "Microservices",
                "Integration Engines",
                "ETL Platforms"
              ].map((tech, index) => (
                <div 
                  key={index} 
                  className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm text-center hover:shadow-md transition-shadow"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-20 bg-brand-blue-500 text-white">
          <div className="section-container">
            <div 
              className="max-w-4xl mx-auto text-center animate-fade-in opacity-0" 
              style={{ animationDelay: '100ms' }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Ready to Solve Your Interoperability Challenges?
              </h2>
              
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Let's discuss how our expertise can help you connect systems, streamline workflows, and improve patient care.
              </p>
              
              <Link 
                to="/contact" 
                className="px-8 py-3 bg-white text-brand-blue-600 font-medium rounded-full shadow-button button-hover focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-brand-blue-500"
              >
                Contact Us Today
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
