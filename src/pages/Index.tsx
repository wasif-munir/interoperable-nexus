import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LogoConcepts from '@/components/LogoConcepts';
const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "ConnectDev.pro | Healthcare Interoperability Consultancy & Development";
  }, []);
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection className="" />
        <ServicesSection className="" />
        <AboutSection className="" />
        <ContactSection />
      </main>
      <Footer />
    </div>;
};
export default Index;