import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useSeo } from '@/hooks/use-seo';
import rpmPreview from '@/assets/portfolio-rpm-preview.jpg';

const projects = [
  {
    title: 'CareGrid — Remote Patient Monitoring',
    description: 'AI-powered RPM platform with real-time vitals monitoring, device management, clinical alerts, and a full business plan. Built for healthcare systems managing chronic care patients at home.',
    tags: ['RPM', 'AI/ML', 'FHIR', 'Real-Time Vitals', 'HIPAA'],
    image: rpmPreview,
    link: '/portfolio/rpm-demo',
    icon: <Activity className="h-5 w-5" />,
    status: 'Interactive Demo',
  },
];

const Portfolio = () => {
  useSeo({
    title: 'Portfolio - Healthcare Solutions We\'ve Built',
    description: 'Explore interactive demos and case studies showcasing ConnectDev.pro\'s healthcare interoperability solutions, from RPM platforms to EHR integrations.',
    url: '/portfolio',
    type: 'website',
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 pb-16">
        {/* Hero */}
        <section className="bg-foreground text-background py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-primary mb-6">
              <span className="w-8 h-px bg-primary inline-block" />
              Portfolio
              <span className="w-8 h-px bg-primary inline-block" />
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-6">
              Solutions We've <em className="text-primary not-italic">Built & Delivered</em>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Interactive demos and case studies showcasing our expertise in healthcare interoperability, clinical data platforms, and patient engagement systems.
            </p>
          </div>
        </section>

        {/* Projects */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid gap-10">
            {projects.map((project, idx) => (
              <Link
                key={idx}
                to={project.link}
                className="group block rounded-2xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden aspect-video md:aspect-auto">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      width={1280}
                      height={720}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary text-primary-foreground">
                        {project.status}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-primary mb-3">
                      {project.icon}
                      <span className="text-xs font-bold uppercase tracking-wider">Healthcare MVP</span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                      Launch Interactive Demo <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
