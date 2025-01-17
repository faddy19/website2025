import { useState } from "react";
import { Menu } from "../components/ui/navbar-menu";
import { SplineSceneBasic } from "../components/ui/spline-scene-basic";
import { FeatureSection } from "../components/ui/feature-section";
import { Connect } from "../components/ui/connect";
import { Footerdemo } from "../components/ui/footer-section";
import { useTranslations } from "../utils/translations";

export default function Index() {
  const [active, setActive] = useState<string | null>(null);
  const { t } = useTranslations();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/50 backdrop-blur-xl dark:border-gray-800 dark:bg-gray-950/50">
        <Menu setActive={setActive}>
          {active}
        </Menu>
      </header>

      <main className="flex-grow pt-24">
        <SplineSceneBasic />
        <FeatureSection />
        <Connect />
      </main>

      <Footerdemo />
    </div>
  );
} 