import { useState } from "react";
import { Menu, MenuItem, HoveredLink, ProductItem } from "../components/ui/navbar-menu";
import { Footerdemo } from "../components/ui/footer-section";
import { useTranslations } from "../utils/translations";
import { cn } from "../utils/cn";

export default function CommunityPage() {
  const [active, setActive] = useState<string | null>(null);
  const { t, currentLanguage } = useTranslations();

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <header className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/50 backdrop-blur-xl dark:border-gray-800 dark:bg-gray-950/50">
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="Services">
            <div>
              <h3 className="text-lg font-medium text-white mb-4">AI Services</h3>
              <div className="grid gap-2">
                <HoveredLink to="/services/ai-strategy">AI Strategy & Consulting</HoveredLink>
                <HoveredLink to="/services/infrastructure">Infrastructure & Engineering</HoveredLink>
                <HoveredLink to="/services/solutions">Solutions & Development</HoveredLink>
                <HoveredLink to="/services/training">Trainings & Upskilling</HoveredLink>
                <HoveredLink to="/services/data-science">Data Science Consulting</HoveredLink>
                <HoveredLink to="/services/support">AI Implementation Support</HoveredLink>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-4">Latest Projects</h3>
              <div className="space-y-4">
                <ProductItem
                  title="GenAI Platform"
                  description="Enterprise-grade generative AI platform"
                  href="/products/genai"
                  src="/images/optimized/shubham-dhage--0eh8fTZLA0-unsplash.jpg"
                />
                <ProductItem
                  title="AI Analytics Suite"
                  description="Advanced analytics and insights platform"
                  href="/products/analytics"
                  src="/images/optimized/shubham-dhage-y-spk3B7IO0-unsplash.jpg"
                />
              </div>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Products">
            <div>
              <h3 className="text-lg font-medium text-white mb-4">AI Solutions</h3>
              <div className="grid gap-2">
                <HoveredLink to="/products/genai">GenAI Suite</HoveredLink>
                <HoveredLink to="/products/analytics">Analytics Platform</HoveredLink>
                <HoveredLink to="/products/nlp">NLP Tools</HoveredLink>
                <HoveredLink to="/products/vision">Computer Vision SDK</HoveredLink>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-4">Enterprise Tools</h3>
              <div className="grid gap-2">
                <HoveredLink to="/products/automation">AI Automation</HoveredLink>
                <HoveredLink to="/products/integration">Integration Tools</HoveredLink>
                <HoveredLink to="/products/deployment">Deployment Solutions</HoveredLink>
                <HoveredLink to="/products/monitoring">AI Monitoring</HoveredLink>
              </div>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Research">
            <div>
              <h3 className="text-lg font-medium text-white mb-4">Research Areas</h3>
              <div className="grid gap-2">
                <HoveredLink to="/research/publications">Publications</HoveredLink>
                <HoveredLink to="/research/projects">Current Projects</HoveredLink>
                <HoveredLink to="/research/collaborations">Academic Collaborations</HoveredLink>
                <HoveredLink to="/research/innovations">Innovation Lab</HoveredLink>
                <HoveredLink to="/research/papers">White Papers</HoveredLink>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-4">Latest Research</h3>
              <div className="space-y-4">
                <ProductItem
                  title="AI Ethics Framework"
                  description="Guidelines for responsible AI development"
                  href="/research/ethics"
                  src="/images/optimized/robert-clark-srJKzBWP3fg-unsplash.jpg"
                />
              </div>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Blog">
            <div>
              <h3 className="text-lg font-medium text-white mb-4">Latest Posts</h3>
              <div className="grid gap-2">
                <HoveredLink to="/blog/ai-insights">AI Insights</HoveredLink>
                <HoveredLink to="/blog/tech-trends">Tech Trends</HoveredLink>
                <HoveredLink to="/blog/case-studies">Case Studies</HoveredLink>
                <HoveredLink to="/blog/tutorials">Tutorials & Guides</HoveredLink>
                <HoveredLink to="/blog/news">Company News</HoveredLink>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-4">Featured</h3>
              <div className="space-y-4">
                <ProductItem
                  title="Future of AI"
                  description="Our vision for AI in 2024 and beyond"
                  href="/blog/future-of-ai"
                  src="/images/optimized/aayush-shah-Gp49ltsswdE-unsplash.jpg"
                />
              </div>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Company">
            <div>
              <h3 className="text-lg font-medium text-white mb-4">About Us</h3>
              <div className="grid gap-2">
                <HoveredLink to="/about">About Us</HoveredLink>
                <HoveredLink to="/team">Our Team</HoveredLink>
                <HoveredLink to="/careers">Careers</HoveredLink>
                <HoveredLink to="/community">Community Support</HoveredLink>
                <a href="mailto:info@capsula.ai" className="text-sm text-neutral-400 hover:text-white transition-colors">Contact</a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-4">Latest News</h3>
              <div className="space-y-4">
                <ProductItem
                  title="Company Growth"
                  description="Our journey and future plans"
                  href="/about/growth"
                  src="/images/optimized/masud-merzaye-EXHiq2ox0_g-unsplash.jpg"
                />
              </div>
            </div>
          </MenuItem>
        </Menu>
      </header>

      <main className={cn(
        "flex-grow pt-24 transition-all duration-300",
        active && "blur-md brightness-[0.3] bg-black/50"
      )}>
        <div className="container mx-auto px-4 py-8 mb-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-neutral-400">{t("community.title")}</h1>
            <h2 className="text-2xl text-neutral-400 mb-6">{t("community.subtitle")}</h2>
            <p className="text-lg max-w-2xl mx-auto text-neutral-300">{t("community.description")}</p>
          </div>
          
          {/* Eligibility Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-neutral-400">{t("community.eligibility")}</h2>
            <h3 className="text-xl mb-6 text-neutral-300">{t("community.eligibilityTitle")}</h3>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="p-6 rounded-xl bg-black/[0.96] text-white border border-white/[0.1] hover:border-white/[0.2] transition-colors">
                <h4 className="text-xl font-semibold mb-3 text-white/90">{t("community.students")}</h4>
                <p className="text-neutral-300">{t("community.studentsDesc")}</p>
              </div>
              <div className="p-6 rounded-xl bg-black/[0.96] text-white border border-white/[0.1] hover:border-white/[0.2] transition-colors">
                <h4 className="text-xl font-semibold mb-3 text-white/90">{t("community.nonprofits")}</h4>
                <p className="text-neutral-300">{t("community.nonprofitsDesc")}</p>
              </div>
              <div className="p-6 rounded-xl bg-black/[0.96] text-white border border-white/[0.1] hover:border-white/[0.2] transition-colors">
                <h4 className="text-xl font-semibold mb-3 text-white/90">{t("community.individuals")}</h4>
                <p className="text-neutral-300">{t("community.individualsDesc")}</p>
              </div>
            </div>
          </section>

          {/* Offerings Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-neutral-400">{t("community.offerings")}</h2>
            <h3 className="text-xl mb-6 text-neutral-300">{t("community.offeringsTitle")}</h3>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="p-6 rounded-xl bg-black/[0.96] text-white border border-white/[0.1] hover:border-white/[0.2] transition-colors">
                <h4 className="text-xl font-semibold mb-3 text-white/90">{t("community.consultation")}</h4>
                <p className="text-neutral-300">{t("community.consultationDesc")}</p>
              </div>
              <div className="p-6 rounded-xl bg-black/[0.96] text-white border border-white/[0.1] hover:border-white/[0.2] transition-colors">
                <h4 className="text-xl font-semibold mb-3 text-white/90">{t("community.mentoring")}</h4>
                <p className="text-neutral-300">{t("community.mentoringDesc")}</p>
              </div>
              <div className="p-6 rounded-xl bg-black/[0.96] text-white border border-white/[0.1] hover:border-white/[0.2] transition-colors">
                <h4 className="text-xl font-semibold mb-3 text-white/90">{t("community.resources")}</h4>
                <p className="text-neutral-300">{t("community.resourcesDesc")}</p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-neutral-400">{t("community.contact")}</h2>
              <p className="mb-8 text-neutral-300">{t("community.contactDesc")}</p>
              <div className="space-y-2 text-neutral-300">
                <p>{t("community.email")}</p>
                <p>{t("community.phone")}</p>
                <p>{t("community.hours")}</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footerdemo />
    </div>
  );
} 