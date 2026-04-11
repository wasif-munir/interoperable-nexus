import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Monitor, Activity, Shield } from 'lucide-react';
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

const PortfolioSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-primary mb-4">
            <span className="w-8 h-px bg-primary inline-block" />
            Portfolio
            <span className="w-8 h-px bg-primary inline-block" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Our Work in Action
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Explore interactive demos and case studies showcasing our healthcare interoperability solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:gap-10">
          {projects.map((project, idx) => (
            <Link
              key={idx}
              to={project.link}
              className="group block rounded-2xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
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

                {/* Content */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-primary mb-3">
                    {project.icon}
                    <span className="text-xs font-bold uppercase tracking-wider">Healthcare MVP</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                      >
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

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-primary border border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            View All Projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
