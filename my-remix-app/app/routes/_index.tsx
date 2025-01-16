import { useState } from "react";
import { Menu, MenuItem, ProductItem, HoveredLink } from "../components/ui/navbar-menu";
import { Footer } from "../components/ui/footer";
import { SplineSceneBasic } from "../components/ui/spline-scene-basic";
import { HighlightGroup, HighlighterItem } from "../components/ui/highlighter";
import { Connect } from "../components/ui/connect";
import { FeatureSection } from "../components/ui/feature-section";
import { Link } from "@remix-run/react";
import { useTranslations } from "../utils/translations";

export default function Index() {
  const [active, setActive] = useState<string | null>(null);
  const { t } = useTranslations();

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <header className="p-8">
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item={t("navigation.services")}>
            <div className="flex flex-col space-y-4 p-4">
              <HoveredLink to="/services/consulting">
                {t("services.businessConsulting")}
              </HoveredLink>
              <HoveredLink to="/services/contracts">
                {t("services.contractServices")}
              </HoveredLink>
              <HoveredLink to="/services/management">
                {t("services.projectManagement")}
              </HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item={t("navigation.products")}>
            <div className="flex flex-col space-y-4 p-4">
              <ProductItem
                title={t("products.contractTemplates.title")}
                description={t("products.contractTemplates.description")}
                href="/products/templates"
                src="/placeholder-templates.jpg"
              />
              <ProductItem
                title={t("products.businessTools.title")}
                description={t("products.businessTools.description")}
                href="/products/tools"
                src="/placeholder-tools.jpg"
              />
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item={t("navigation.blog")}>
            <div className="flex flex-col space-y-4 p-4">
              <HoveredLink to="/blog">{t("blog.latestPosts")}</HoveredLink>
              <HoveredLink to="/blog?category=business">{t("blog.businessInsights")}</HoveredLink>
              <HoveredLink to="/blog?category=industry">{t("blog.industryNews")}</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item={t("navigation.about")}>
            <div className="flex flex-col space-y-4 p-4">
              <ProductItem
                title={t("about.ourStory.title")}
                description={t("about.ourStory.description")}
                href="/about"
                src="/placeholder-about.jpg"
              />
              <ProductItem
                title={t("about.team.title")}
                description={t("about.team.description")}
                href="/team"
                src="/placeholder-team.jpg"
              />
            </div>
          </MenuItem>
        </Menu>
      </header>

      <main className="flex-grow p-8 space-y-16">
        <SplineSceneBasic />
        
        <div className="container mx-auto px-4">
          <HighlightGroup>
            <HighlighterItem className="rounded-3xl">
              <div className="relative overflow-hidden rounded-3xl bg-black/[0.96] p-8">
                <div className="text-center space-y-6">
                  <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
                    {t("cta.title")}
                  </h2>
                  <p className="mx-auto max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    {t("cta.description")}
                  </p>
                  <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center">
                    <Link
                      to="/contact"
                      className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-black shadow transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50"
                    >
                      {t("cta.getStarted")}
                    </Link>
                    <Link
                      to="/services"
                      className="inline-flex h-10 items-center justify-center rounded-md border border-white/20 bg-black/50 px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-black/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50"
                    >
                      {t("cta.learnMore")}
                    </Link>
                  </div>
                </div>
              </div>
            </HighlighterItem>
          </HighlightGroup>
        </div>

        <FeatureSection />
        <Connect />
      </main>

      <Footer />
    </div>
  );
}
