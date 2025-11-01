
import React, { useState } from 'react';
import { MailIcon, MapPin, Phone } from 'lucide-react';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Thank you for reaching out! We'll be in touch soon.");
      setFormData({
        name: '',
        email: '',
        organization: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="pb-20 md:pb-32 bg-gray-50">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div 
            className="inline-block mb-6 px-4 py-1.5 bg-brand-blue-50 text-brand-blue-600 rounded-full text-sm font-medium animate-fade-in opacity-0" 
            style={{ animationDelay: '100ms' }}
          >
            Contact Us
          </div>
          
          <h2 
            className="text-3xl md:text-4xl font-display font-bold mb-6 animate-fade-in opacity-0" 
            style={{ animationDelay: '300ms' }}
          >
            Let's Discuss Your Integration Needs
          </h2>
          
          <p 
            className="text-xl text-gray-600 animate-fade-in opacity-0" 
            style={{ animationDelay: '500ms' }}
          >
            Reach out to learn how we can help with your healthcare interoperability challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Contact Information */}
          <div 
            className="lg:col-span-2 animate-fade-in-left opacity-0" 
            style={{ animationDelay: '700ms' }}
          >
            <div className="bg-white rounded-xl p-8 shadow-card">
              <h3 className="text-2xl font-semibold mb-6 text-left">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 bg-brand-blue-50 p-2 rounded-full mr-4">
                    <MailIcon className="h-5 w-5 text-brand-blue-500" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-medium text-gray-900">Email</h4>
                    <p className="text-gray-600">info@connectdev.pro</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 bg-brand-blue-50 p-2 rounded-full mr-4">
                    <Phone className="h-5 w-5 text-brand-blue-500" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-medium text-gray-900">Phone</h4>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 bg-brand-blue-50 p-2 rounded-full mr-4">
                    <MapPin className="h-5 w-5 text-brand-blue-500" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-medium text-gray-900">Location</h4>
                    <p className="text-gray-600">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            className="lg:col-span-3 animate-fade-in-right opacity-0" 
            style={{ animationDelay: '900ms' }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-card">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="text-left">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
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
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue-300 focus:border-brand-blue-300 transition-all"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6 text-left">
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
              
              <div className="mb-6 text-left">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  How can we help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue-300 focus:border-brand-blue-300 transition-all"
                  placeholder="Tell us about your interoperability needs..."
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
