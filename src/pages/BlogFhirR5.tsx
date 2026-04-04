
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';

const BlogFhirR5 = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-28 pb-16">
        {/* Hero */}
        <section className="bg-foreground text-background py-16 md:py-24 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-primary mb-6">
              <span className="w-8 h-px bg-primary inline-block" />
              FHIR Standards
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-6">
              FHIR R5:{' '}
              <em className="text-primary not-italic">What You Need to Know</em> for Your Organization
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed mb-8">
              A comprehensive guide to the latest FHIR release and how it impacts your integration strategy, compliance requirements, and development roadmap.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground border-t border-muted/20 pt-6">
              <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> Feb 8, 2026</span>
              <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> 8 min read</span>
              <span className="flex items-center gap-1"><Tag className="h-3.5 w-3.5" /> FHIR</span>
            </div>
          </div>
        </section>

        {/* Article Body */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-16 text-left">
          <p className="text-foreground/80 leading-relaxed mb-6">
            The HL7 FHIR (Fast Healthcare Interoperability Resources) standard has become the backbone of modern healthcare data exchange. With the release of FHIR R5, the standard takes significant steps forward in addressing real-world interoperability challenges that healthcare organizations face daily.
          </p>
          <p className="text-foreground/80 leading-relaxed mb-6">
            Understanding these changes is critical for CIOs, integration architects, and development teams planning their technology roadmaps for the next three to five years.
          </p>

          <blockquote className="my-10 p-8 bg-foreground text-background rounded-lg relative">
            <span className="absolute top-2 left-6 text-7xl text-primary opacity-50 leading-none font-serif">"</span>
            <p className="text-lg md:text-xl italic font-display leading-relaxed relative z-10">
              FHIR R5 isn't just an incremental update — it represents a fundamental shift toward making interoperability practical, not just possible.
            </p>
          </blockquote>

          <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">Key Changes in FHIR R5</h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            FHIR R5 introduces several significant enhancements that directly impact how organizations design and implement their integration strategies. The most notable changes include improved subscription mechanisms, enhanced resource definitions, and better support for clinical decision support workflows.
          </p>

          <h3 className="text-xl font-display font-semibold text-foreground mt-8 mb-3">1. Topic-Based Subscriptions</h3>
          <p className="text-foreground/80 leading-relaxed mb-6">
            The new subscription model replaces the channel-based approach with topic-based subscriptions, making it easier to define what events trigger notifications. This is particularly useful for real-time clinical alerting and care coordination scenarios where timely data delivery is critical.
          </p>

          <h3 className="text-xl font-display font-semibold text-foreground mt-8 mb-3">2. New and Updated Resources</h3>
          <p className="text-foreground/80 leading-relaxed mb-6">
            R5 promotes several resources from draft to normative status, providing greater stability for implementers. Notable additions include the SubscriptionTopic, InventoryReport, and Permission resources, which address gaps in previous versions that forced organizations to rely on custom extensions.
          </p>

          <h3 className="text-xl font-display font-semibold text-foreground mt-8 mb-3">3. Improved Cross-Version Compatibility</h3>
          <p className="text-foreground/80 leading-relaxed mb-6">
            One of the biggest pain points in FHIR adoption has been managing multiple versions across trading partners. R5 introduces better tooling and guidance for cross-version compatibility, reducing the burden on integration teams that must support partners at different stages of FHIR adoption.
          </p>

          <h3 className="text-xl font-display font-semibold text-foreground mt-8 mb-3">4. Enhanced Clinical Workflow Support</h3>
          <p className="text-foreground/80 leading-relaxed mb-6">
            The CDS Hooks integration is tighter in R5, with improved support for clinical decision support at the point of care. This means EHR vendors and clinical app developers can more easily embed evidence-based recommendations directly into clinician workflows without custom development.
          </p>

          <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">Impact on Compliance</h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            With CMS and ONC regulations increasingly referencing FHIR, organizations must plan their migration path carefully. While R4 remains the regulatory baseline for now, R5 features are expected to appear in future rulemaking. Organizations that begin planning now will have a significant advantage when compliance requirements shift.
          </p>

          <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">Planning Your Migration</h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            Migration from R4 to R5 doesn't need to happen overnight. A phased approach works best: start by auditing your current FHIR implementations, identify which R5 features address existing pain points, and build a timeline that aligns with your organization's strategic initiatives and vendor roadmaps.
          </p>
          <p className="text-foreground/80 leading-relaxed mb-6">
            The key is to avoid treating FHIR migration as a one-time project. Instead, build an integration architecture that can evolve with the standard, reducing the cost and disruption of future upgrades.
          </p>

          <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">How ConnectDevPro Can Help</h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            Our team specializes in guiding healthcare organizations through FHIR transitions. From initial assessment to production deployment, we provide the technical expertise and strategic guidance needed to make your R5 migration smooth and cost-effective.
          </p>

          {/* Back to Blog */}
          <div className="mt-16 pt-8 border-t border-border">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogFhirR5;
