
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MailIcon, MapPin, Phone, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact Us | ConnectDev.pro";
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    subject: '',
    message: '',
    services: [] as string[]
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      services: checked 
        ? [...prev.services, value] 
        : prev.services.filter(service => service !== value)
    }));
  };

  /*
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Thank you for reaching out! We'll be in touch soon.");
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        organization: '',
        subject: '',
        message: '',
        services: []
      });
    }, 1000);
  };
  */
const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Thank you! Your message has been sent.");
        setIsSubmitted(true);
        // Reset form
        setFormData({
          name: '', email: '', phone: '', organization: '',
          subject: '', message: '', services: []
        });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceOptions = [
    "Integration Development",
    "Interoperability Assessment",
    "API Development",
    "Legacy System Integration",
    "Workflow Optimization",
    "Compliance & Security"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="pt-12 pb-8 md:pt-16 md:pb-10 bg-gradient-to-b from-gray-50 to-white">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <div 
                className="inline-block mb-6 px-4 py-1.5 bg-brand-blue-50 text-brand-blue-600 rounded-full text-sm font-medium animate-fade-in opacity-0" 
                style={{ animationDelay: '100ms' }}
              >
                Contact Us
              </div>
              
              <h1 
                className="text-4xl md:text-5xl font-display font-bold mb-6 animate-fade-in opacity-0" 
                style={{ animationDelay: '300ms' }}
              >
                Let's Discuss Your Integration Needs
              </h1>
              
              <p 
                className="text-xl text-gray-600 animate-fade-in opacity-0" 
                style={{ animationDelay: '500ms' }}
              >
                We're here to help with your healthcare interoperability challenges. Reach out to start the conversation.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Info & Form Section */}
        <section className="py-10 md:py-12">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <div 
                  className="bg-white rounded-xl p-8 border border-gray-100 shadow-card h-full animate-fade-in-left opacity-100" 
                  style={{ animationDelay: '700ms' }}
                >
                  <h2 className="text-2xl font-semibold mb-6 text-left">Get in Touch</h2>
                  
                  <div className="space-y-8">
                    <div className="flex items-start">
                      <div className="mt-1 bg-brand-blue-50 p-3 rounded-full mr-4">
                        <MailIcon className="h-5 w-5 text-brand-blue-500" />
                      </div>
                      <div className="text-left">
                        <h3 className="font-medium text-gray-900 mb-1">Email</h3>
                        <a href="mailto:info@connectdev.pro" className="text-gray-600 hover:text-brand-blue-500 transition-colors">
                          info@connectdev.pro
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mt-1 bg-brand-blue-50 p-3 rounded-full mr-4">
                        <Phone className="h-5 w-5 text-brand-blue-500" />
                      </div>
                      <div className="text-left">
                        <h3 className="font-medium text-gray-900 mb-1">Phone</h3>
                        <a href="tel:+15551234567" className="text-gray-600 hover:text-brand-blue-500 transition-colors">
                          (555) 123-4567
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mt-1 bg-brand-blue-50 p-3 rounded-full mr-4">
                        <MapPin className="h-5 w-5 text-brand-blue-500" />
                      </div>
                      <div className="text-left">
                        <h3 className="font-medium text-gray-900 mb-1">Location</h3>
                        <p className="text-gray-600">
                          5900 Balcones Drive, STE 100<br />
                          Austin, TX 78731
                        </p>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-gray-100 opacity-0">
                      <h3 className="font-medium text-gray-900 mb-3 text-left">Office Hours</h3>
                      <div className="space-y-2 text-left">
                        <p className="text-gray-600">Monday - Friday: 9am - 6pm PST</p>
                        <p className="text-gray-600">Saturday - Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div 
                  className="bg-white rounded-xl p-8 border border-gray-100 shadow-card animate-fade-in-right opacity-100" 
                  style={{ animationDelay: '900ms' }}
                >
                  {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center h-full py-8">
                      <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle2 className="h-8 w-8 text-green-500" />
                      </div>
                      <h2 className="text-2xl font-semibold mb-3">Thank You!</h2>
                      <p className="text-gray-600 text-center max-w-md mb-6">
                        Your message has been sent successfully. We'll get back to you as soon as possible.
                      </p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="px-6 py-2 bg-brand-blue-500 text-white font-medium rounded-full shadow-button button-hover focus:outline-none focus:ring-2 focus:ring-brand-blue-300 focus:ring-offset-2"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-semibold mb-6 text-left">Send Us a Message</h2>
                      
                      <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div className="text-left">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                              Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue-300 focus:border-brand-blue-300 transition-all"
                              placeholder="Your name"
                              required
                            />
                          </div>
                          
                          <div className="text-left">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                              Email Address <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue-300 focus:border-brand-blue-300 transition-all"
                              placeholder="you@example.com"
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div className="text-left">
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue-300 focus:border-brand-blue-300 transition-all"
                              placeholder="(555) 123-4567"
                            />
                          </div>
                          
                          <div className="text-left">
                            <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                              Organization
                            </label>
                            <input
                              type="text"
                              id="organization"
                              name="organization"
                              value={formData.organization}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue-300 focus:border-brand-blue-300 transition-all"
                              placeholder="Your organization"
                            />
                          </div>
                        </div>
                        
                        <div className="mb-6 text-left">
                          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                            Subject <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue-300 focus:border-brand-blue-300 transition-all"
                            placeholder="How can we help you?"
                            required
                          />
                        </div>
                        
                        <div className="mb-6 text-left">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Services You're Interested In
                          </label>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {serviceOptions.map((service, index) => (
                              <div key={index} className="flex items-start">
                                <input
                                  type="checkbox"
                                  id={`service-${index}`}
                                  name="services"
                                  value={service}
                                  checked={formData.services.includes(service)}
                                  onChange={handleCheckboxChange}
                                  className="mt-1 mr-2"
                                />
                                <label htmlFor={`service-${index}`} className="text-gray-600">
                                  {service}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="mb-6 text-left">
                          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                            Message <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue-300 focus:border-brand-blue-300 transition-all"
                            placeholder="Tell us about your interoperability needs or challenges..."
                            required
                          ></textarea>
                        </div>
                        
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full px-8 py-3 bg-brand-blue-500 text-white font-medium rounded-lg shadow-button hover:bg-brand-blue-600 focus:outline-none focus:ring-2 focus:ring-brand-blue-300 focus:ring-offset-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-10 md:py-12 bg-gray-50">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 
                  className="text-3xl font-display font-bold mb-6 animate-fade-in opacity-0" 
                  style={{ animationDelay: '100ms' }}
                >
                  Frequently Asked Questions
                </h2>
              </div>
              
              <div 
                className="space-y-6 animate-fade-in opacity-0" 
                style={{ animationDelay: '300ms' }}
              >
                {[
                  {
                    question: "What healthcare standards do you support?",
                    answer: "We support a wide range of healthcare standards including HL7 (v2 and v3), FHIR, DICOM, X12, NCPDP, CDA, and CCDAs. Our team has extensive experience implementing these standards in various healthcare settings."
                  },
                  {
                    question: "Can you help integrate our legacy systems?",
                    answer: "Yes, we specialize in connecting legacy healthcare systems with modern applications. We develop custom adapters, APIs, and middleware solutions to extend the useful life of your existing investments while enabling modern workflows."
                  },
                  {
                    question: "How long does a typical integration project take?",
                    answer: "Project timelines vary based on complexity, scope, and specific requirements. Simple integrations may take 4-8 weeks, while more complex enterprise-wide projects can take 3-6 months. We provide detailed timelines during our proposal phase."
                  },
                  {
                    question: "Do you provide ongoing support after implementation?",
                    answer: "Yes, we offer flexible support packages to ensure your integrations continue to function optimally. This includes monitoring, maintenance, troubleshooting, and adaptation to changing requirements or system updates."
                  },
                  {
                    question: "How do you ensure security and compliance?",
                    answer: "Security is integrated throughout our development process. We implement best practices for healthcare data protection, including encryption, access controls, and audit logging. All our solutions are designed to help you maintain HIPAA, GDPR, and other regulatory compliance."
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h3 className="text-lg font-semibold mb-3 text-left">{faq.question}</h3>
                    <p className="text-gray-600 text-left">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
