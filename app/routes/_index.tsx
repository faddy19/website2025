import { useState } from "react";
import { Menu, MenuItem, ProductItem, HoveredLink } from "../components/ui/navbar-menu";
import { SplineSceneBasic } from "../components/ui/spline-scene-basic";
import { FeatureSection } from "../components/ui/feature-section";
import { Connect } from "../components/ui/connect";
import { Footerdemo } from "../components/ui/footer-section";
import { useTranslations } from "../utils/translations";

export default function Index() {
  const [active, setActive] = useState<string | null>(null);
  const { t } = useTranslations();

  return (
    <div className="min-h-screen flex flex-col bg-black">
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
                title="AI Strategy Development"
                description="Custom AI solutions for enterprise needs"
                href="/services/ai-strategy"
                src="/images/shubham-dhage--0eh8fTZLA0-unsplash.jpg"
              />
              <ProductItem
                title="Advanced Analytics"
                description="Data-driven insights and solutions"
                href="/services/analytics"
                src="/images/shubham-dhage-y-spk3B7IO0-unsplash.jpg"
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
            <h3 className="text-lg font-medium text-white mb-4">Featured Products</h3>
            <div className="space-y-4">
              <ProductItem
                title="AI Innovation Lab"
                description="Cutting-edge AI research and development"
                href="/products/innovation"
                src="/images/robert-clark-srJKzBWP3fg-unsplash.jpg"
              />
              <ProductItem
                title="Enterprise Solutions"
                description="Scalable AI infrastructure and tools"
                href="/products/enterprise"
                src="/images/aakash-dhage-cmosdvcAZgo-unsplash.jpg"
              />
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
                title="Future of AI"
                description="Exploring next-generation AI technologies"
                href="/research/future-ai"
                src="/images/jan-habarta-KQb_r_4WOVE-unsplash.jpg"
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
                src="/placeholder-future.jpg"
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
              <HoveredLink to="/contact">Contact</HoveredLink>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Latest News</h3>
            <div className="space-y-4">
              <ProductItem
                title="Company Growth"
                description="Our journey and future plans"
                href="/about/growth"
                src="/placeholder-growth.jpg"
              />
            </div>
          </div>
        </MenuItem>
      </Menu>

      <main className="flex-grow">
        <SplineSceneBasic />
        <FeatureSection />
        <Connect />
      </main>

      <Footerdemo />
    </div>
  );
} 