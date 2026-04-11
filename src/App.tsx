
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Portfolio from "./pages/Portfolio";
import PortfolioRpmDemo from "./pages/PortfolioRpmDemo";
import BlogAiInteroperability from "./pages/BlogAiInteroperability";
import BlogHealthcareInteroperabilityTrends from "./pages/BlogHealthcareInteroperabilityTrends";
import BlogFhirR5 from "./pages/BlogFhirR5";
import BlogReducingIntegrationCosts from "./pages/BlogReducingIntegrationCosts";
import BlogEhrMigration from "./pages/BlogEhrMigration";
import BlogApiSecurity from "./pages/BlogApiSecurity";
import BlogLegacySystemModernization from "./pages/BlogLegacySystemModernization";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner position="top-right" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/rpm-demo" element={<PortfolioRpmDemo />} />
          <Route path="/blog/ai-healthcare-interoperability" element={<BlogAiInteroperability />} />
          <Route path="/blog/future-of-healthcare-interoperability" element={<BlogHealthcareInteroperabilityTrends />} />
          <Route path="/blog/fhir-r5-what-you-need-to-know" element={<BlogFhirR5 />} />
          <Route path="/blog/reducing-integration-costs" element={<BlogReducingIntegrationCosts />} />
          <Route path="/blog/ehr-migration-guide" element={<BlogEhrMigration />} />
          <Route path="/blog/api-security-healthcare" element={<BlogApiSecurity />} />
          <Route path="/blog/legacy-system-modernization" element={<BlogLegacySystemModernization />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
