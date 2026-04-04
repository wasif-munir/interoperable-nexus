
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';

const BlogApiSecurity = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-28 pb-16">
        <section className="bg-foreground text-background py-16 md:py-24 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-primary mb-6">
              <span className="w-8 h-px bg-primary inline-block" />
              Security
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-6">
              API Security{' '}
              <em className="text-primary not-italic">Best Practices</em> for Healthcare Applications
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed mb-8">
              Learn how to protect sensitive patient data with robust API security measures, from OAuth 2.0 implementation to HIPAA-compliant architectures.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground border-t border-muted/20 pt-6">
              <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> Jan 12, 2026</span>
              <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> 7 min read</span>
              <span className="flex items-center gap-1"><Tag className="h-3.5 w-3.5" /> Security</span>
            </div>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-16 text-left">
          <p className="text-foreground/80 leading-relaxed mb-6">
            As healthcare organizations increasingly expose APIs for interoperability, mobile applications, and partner integrations, the attack surface expands dramatically. Healthcare data breaches cost an average of $10.93 million per incident — the highest of any industry. Securing your APIs isn't optional; it's a business imperative.
          </p>

          <blockquote className="my-10 p-8 bg-foreground text-background rounded-lg relative">
            <span className="absolute top-2 left-6 text-7xl text-primary opacity-50 leading-none font-serif">"</span>
            <p className="text-lg md:text-xl italic font-display leading-relaxed relative z-10">
              In healthcare, API security isn't just about protecting data — it's about protecting patients. A breach can delay treatment, compromise care decisions, and erode the trust that healthcare depends on.
            </p>
          </blockquote>

          <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">1. Implement OAuth 2.0 with SMART on FHIR</h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            OAuth 2.0 with the SMART on FHIR profile is the gold standard for healthcare API authentication. It provides granular scope-based access control, supports both patient-facing and clinician-facing applications, and is required by CMS for Patient Access APIs. Implement PKCE (Proof Key for Code Exchange) for public clients to prevent authorization code interception attacks.
          </p>

          <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">2. Enforce Least-Privilege Access</h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            Every API client should request only the minimum scopes needed for its function. A scheduling application doesn't need access to clinical notes. A billing system doesn't need lab results. Define fine-grained scopes aligned with FHIR resource types and implement server-side enforcement that cannot be bypassed by client-side manipulation.
          </p>

          <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">3. Encrypt Everything in Transit and at Rest</h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            TLS 1.2 or higher is mandatory for all API communications. But don't stop at transport encryption. Implement field-level encryption for sensitive data elements like SSNs and clinical notes. Use hardware security modules (HSMs) for key management. And ensure that logs and audit trails don't inadvertently expose PHI in plaintext.
          </p>

          <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">4. Implement Rate Limiting and Throttling</h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            Without rate limiting, APIs are vulnerable to denial-of-service attacks and data harvesting. Implement tiered rate limits based on client identity and scope. Monitor for unusual access patterns — a client that suddenly requests 10x its normal volume may indicate a compromised credential.
          </p>

          <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">5. Build Comprehensive Audit Logging</h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            HIPAA requires audit trails for access to PHI. Your API audit logs should capture who accessed what data, when, from where, and why. Use structured logging formats that support automated analysis. Retain logs for at least six years per HIPAA requirements, and implement tamper-evident logging to ensure log integrity.
          </p>

          <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">6. Validate and Sanitize All Inputs</h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            Never trust client input. Validate FHIR resources against their profiles before processing. Sanitize search parameters to prevent injection attacks. Implement strict content-type checking and reject requests with unexpected payloads. Use API gateways that provide automated input validation as a first line of defense.
          </p>

          <div className="mt-16 pt-8 border-t border-border">
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:underline font-medium">
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogApiSecurity;
