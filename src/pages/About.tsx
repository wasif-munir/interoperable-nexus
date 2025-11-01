
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Award, Users, Clock, Lightbulb, Layers, ShieldCheck } from 'lucide-react';
import AnimatedCard from '@/components/ui/AnimatedCard';

const CoreValue = ({ 
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
      className="p-6 text-left" 
      delayAnimation={delay}
    >
      <div className="mb-4 w-12 h-12 rounded-full bg-brand-blue-50 flex items-center justify-center">
        <Icon className="h-6 w-6 text-brand-blue-500" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </AnimatedCard>
  );
};

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About Us | ConnectDev.pro";
  }, []);

  const coreValues = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We constantly explore new technologies and methodologies to solve complex healthcare integration problems."
    },
    {
      icon: ShieldCheck,
      title: "Reliability",
      description: "We build solutions that healthcare organizations can depend on for their critical operations."
    },
    {
      icon: Layers,
      title: "Expertise",
      description: "Our team brings deep technical knowledge and healthcare domain expertise to every project."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with clients as true partners to ensure optimal outcomes."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="pt-12 pb-10 md:pt-16 md:pb-12">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-left order-2 lg:order-1">
                <div 
                  className="inline-block mb-6 px-4 py-1.5 bg-brand-blue-50 text-brand-blue-600 rounded-full text-sm font-medium animate-fade-in opacity-0" 
                  style={{ animationDelay: '100ms' }}
                >
                  About Us
                </div>
                
                <h1 
                  className="text-4xl md:text-5xl font-display font-bold mb-6 animate-fade-in opacity-0" 
                  style={{ animationDelay: '300ms' }}
                >
                  Bridging Gaps in Healthcare Technology
                </h1>
                
                <p 
                  className="text-xl text-gray-600 mb-6 animate-fade-in opacity-0" 
                  style={{ animationDelay: '500ms' }}
                >
                  ConnectDev.pro was founded with a mission to solve the interoperability challenges that healthcare organizations face daily. 
                </p>
                
                <p 
                  className="text-lg text-gray-600 mb-8 animate-fade-in opacity-0" 
                  style={{ animationDelay: '700ms' }}
                >
                  We combine deep technical expertise with healthcare domain knowledge to deliver solutions that connect systems, streamline workflows, and improve patient care.
                </p>
                
                <div 
                  className="animate-fade-in opacity-0" 
                  style={{ animationDelay: '900ms' }}
                >
                  <Link 
                    to="/contact" 
                    className="px-8 py-3 bg-brand-blue-500 text-white font-medium rounded-full shadow-button button-hover focus:outline-none focus:ring-2 focus:ring-brand-blue-300 focus:ring-offset-2"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
              
              <div className="relative order-1 lg:order-2">
                <div 
                  className="rounded-xl overflow-hidden shadow-elevated animate-fade-in opacity-0" 
                  style={{ animationDelay: '600ms' }}
                >
                  <div className="aspect-w-4 aspect-h-3 bg-gradient-to-br from-brand-blue-500 to-brand-blue-700">
                    <div className="p-8 md:p-12 flex items-center justify-center">
                      <div className="glass rounded-lg p-8 border border-white/20 w-full max-w-md">
                        <div className="grid grid-cols-2 gap-4 text-white">
                          <div className="text-center p-4">
                            <div className="text-3xl md:text-4xl font-bold mb-2">20+</div>
                            <div className="text-sm md:text-base text-white/80">Years of Experience</div>
                          </div>
                          <div className="text-center p-4">
                            <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
                            <div className="text-sm md:text-base text-white/80">Healthcare Clients</div>
                          </div>
                          <div className="text-center p-4">
                            <div className="text-3xl md:text-4xl font-bold mb-2">150+</div>
                            <div className="text-sm md:text-base text-white/80">Integrations Completed</div>
                          </div>
                          <div className="text-center p-4">
                            <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
                            <div className="text-sm md:text-base text-white/80">Support Available</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Mission */}
        <section className="py-10 md:py-12 bg-gray-50">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div 
                className="inline-block mb-6 px-4 py-1.5 bg-brand-blue-50 text-brand-blue-600 rounded-full text-sm font-medium animate-fade-in opacity-0" 
                style={{ animationDelay: '100ms' }}
              >
                Our Mission
              </div>
              
              <h2 
                className="text-3xl md:text-4xl font-display font-bold mb-6 animate-fade-in opacity-0" 
                style={{ animationDelay: '300ms' }}
              >
                Advancing Healthcare Through Seamless Integration
              </h2>
              
              <p 
                className="text-xl text-gray-600 animate-fade-in opacity-0" 
                style={{ animationDelay: '500ms' }}
              >
                Our mission is to transform healthcare delivery by creating interoperable solutions that connect systems, unify data, and empower providers to deliver better patient care.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value, index) => (
                <CoreValue 
                  key={index} 
                  icon={value.icon} 
                  title={value.title} 
                  description={value.description} 
                  delay={700 + index * 100}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Our Approach */}
        <section className="py-10 md:py-12">
          <div className="section-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div 
                className="inline-block mb-6 px-4 py-1.5 bg-brand-blue-50 text-brand-blue-600 rounded-full text-sm font-medium animate-fade-in opacity-0" 
                style={{ animationDelay: '100ms' }}
              >
                Our Approach
              </div>
              
              <h2 
                className="text-3xl md:text-4xl font-display font-bold mb-6 animate-fade-in opacity-0" 
                style={{ animationDelay: '300ms' }}
              >
                How We Deliver Value
              </h2>
              
              <p 
                className="text-xl text-gray-600 animate-fade-in opacity-0" 
                style={{ animationDelay: '500ms' }}
              >
                We believe in a collaborative, transparent approach that focuses on your unique needs.
              </p>
            </div>
            
            <div className="relative max-w-4xl mx-auto">
              {/* Timeline */}
              <div 
                className="absolute left-1/2 top-0 bottom-0 w-1 bg-brand-blue-100 -translate-x-1/2 hidden md:block animate-fade-in opacity-0" 
                style={{ animationDelay: '700ms' }}
              ></div>
              
              {/* Steps */}
              <div className="space-y-16 relative">
                {[
                  {
                    title: "Discovery",
                    description: "We start by deeply understanding your integration challenges, workflows, and objectives.",
                    icon: Lightbulb
                  },
                  {
                    title: "Strategic Planning",
                    description: "We develop a comprehensive integration strategy aligned with your goals and technology landscape.",
                    icon: Layers
                  },
                  {
                    title: "Implementation",
                    description: "Our team delivers solutions with careful attention to security, performance, and usability.",
                    icon: Award
                  },
                  {
                    title: "Ongoing Support",
                    description: "We provide continuous support and optimization to ensure your integrations evolve with your needs.",
                    icon: Clock
                  }
                ].map((step, index) => {
                  const isEven = index % 2 === 0;
                  const Icon = step.icon;
                  
                  return (
                    <div key={index} className="relative">
                      <div 
                        className={`md:absolute md:top-0 md:${isEven ? 'left-1/2 pl-12' : 'right-1/2 pr-12 text-right'} md:w-1/2 animate-fade-in opacity-0`}
                        style={{ animationDelay: `${900 + index * 200}ms` }}
                      >
                        <div className="bg-white rounded-xl p-6 shadow-card border border-gray-100 md:max-w-md relative">
                          <div 
                            className={`hidden md:block absolute top-1/2 ${isEven ? '-left-6' : '-right-6'} -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-sm p-2`}
                          >
                            <div className="w-full h-full rounded-full bg-brand-blue-50 flex items-center justify-center">
                              <Icon className="h-5 w-5 text-brand-blue-500" />
                            </div>
                          </div>
                          
                          <div className="md:hidden flex items-center mb-4">
                            <div className="w-10 h-10 rounded-full bg-brand-blue-50 flex items-center justify-center mr-3">
                              <Icon className="h-5 w-5 text-brand-blue-500" />
                            </div>
                            <h3 className="text-xl font-semibold">{step.title}</h3>
                          </div>
                          
                          <h3 className="hidden md:block text-xl font-semibold mb-3">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div 
              className="text-center mt-16 animate-fade-in opacity-0" 
              style={{ animationDelay: '1700ms' }}
            >
              <Link 
                to="/services" 
                className="px-8 py-3 bg-brand-blue-500 text-white font-medium rounded-full shadow-button button-hover focus:outline-none focus:ring-2 focus:ring-brand-blue-300 focus:ring-offset-2"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
