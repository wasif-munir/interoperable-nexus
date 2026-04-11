
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { useSeo } from '@/hooks/use-seo';

const blogPosts = [
  {
    id: 0,
    slug: 'ai-healthcare-interoperability',
    title: 'AI Is Transforming Healthcare. But Can It Talk to Itself?',
    excerpt: 'Artificial intelligence is delivering remarkable clinical breakthroughs — yet the US healthcare system remains a patchwork of siloed data that prevents AI from reaching its true potential.',
    date: 'February 21, 2026',
    readTime: '8 min read',
    category: 'Healthcare · AI · Policy',
    image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=600&h=400&fit=crop',
    hasPage: true,
  },
  {
    id: 1,
    slug: 'future-of-healthcare-interoperability',
    title: 'The Future of Healthcare Interoperability: Trends to Watch in 2026',
    excerpt: 'Explore the emerging trends shaping healthcare data exchange, from AI-driven integrations to new FHIR standards that are transforming patient care.',
    date: 'February 15, 2026',
    readTime: '10 min read',
    category: 'Industry Trends',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
    hasPage: true,
  },
  {
    id: 2,
    slug: 'fhir-r5-what-you-need-to-know',
    title: 'FHIR R5: What You Need to Know for Your Organization',
    excerpt: 'A comprehensive guide to the latest FHIR release and how it impacts your integration strategy, compliance requirements, and development roadmap.',
    date: 'February 8, 2026',
    readTime: '8 min read',
    category: 'FHIR',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    hasPage: true,
  },
  {
    id: 3,
    slug: 'reducing-integration-costs',
    title: '5 Strategies to Reduce Healthcare Integration Costs',
    excerpt: 'Practical approaches to streamline your integration projects, minimize technical debt, and maximize ROI on your interoperability investments.',
    date: 'January 28, 2026',
    readTime: '5 min read',
    category: 'Best Practices',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
    hasPage: true,
  },
  {
    id: 4,
    slug: 'ehr-migration-guide',
    title: 'EHR Migration: A Step-by-Step Guide for Healthcare Systems',
    excerpt: 'Navigate the complexities of migrating between electronic health record systems while maintaining data integrity and minimizing downtime.',
    date: 'January 20, 2026',
    readTime: '10 min read',
    category: 'Guides',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
    hasPage: true,
  },
  {
    id: 5,
    slug: 'api-security-healthcare',
    title: 'API Security Best Practices for Healthcare Applications',
    excerpt: 'Learn how to protect sensitive patient data with robust API security measures, from OAuth 2.0 implementation to HIPAA-compliant architectures.',
    date: 'January 12, 2026',
    readTime: '7 min read',
    category: 'Security',
    image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=600&h=400&fit=crop',
    hasPage: true,
  },
  {
    id: 6,
    slug: 'legacy-system-modernization',
    title: 'Modernizing Legacy Healthcare Systems Without Starting Over',
    excerpt: 'Discover incremental modernization strategies that let you upgrade aging infrastructure while keeping critical systems running.',
    date: 'January 5, 2026',
    readTime: '6 min read',
    category: 'Legacy Systems',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
    hasPage: true,
  },
];

const Blog = () => {
  useSeo({
    title: 'Blog - Healthcare Interoperability Insights',
    description: 'Expert insights on healthcare interoperability, FHIR standards, EHR integration, API security, and digital health trends from ConnectDev.pro.',
    url: '/blog',
    type: 'website',
  });
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-brand-blue-50 text-brand-blue-600 rounded-full text-sm font-medium mb-4">
              Our Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Insights & Resources
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay up to date with the latest in healthcare interoperability, integration best practices, and industry news.
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-6 flex flex-col flex-grow text-left">
                  <span className="inline-block self-start px-3 py-1 bg-brand-blue-50 text-brand-blue-600 rounded-full text-xs font-medium mb-3">
                    {post.category}
                  </span>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-xs text-gray-400 gap-4 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" /> {post.readTime}
                    </span>
                  </div>
                  {(post as any).hasPage ? (
                    <Link to={`/blog/${post.slug}`} className="text-brand-blue-500 font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
                      Read More <ArrowRight className="h-4 w-4" />
                    </Link>
                  ) : (
                    <span className="text-brand-blue-500 font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all cursor-pointer">
                      Read More <ArrowRight className="h-4 w-4" />
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
