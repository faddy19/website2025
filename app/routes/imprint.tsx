import { useState } from "react";
import { Menu } from "../components/ui/navbar-menu";
import { Footerdemo } from "../components/ui/footer-section";
import { useTranslations } from "../utils/translations";

export default function ImprintPage() {
  const [active, setActive] = useState<string | null>(null);
  const { t, currentLanguage } = useTranslations();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/50 backdrop-blur-xl dark:border-gray-800 dark:bg-gray-950/50">
        <Menu setActive={setActive}>
          {active}
        </Menu>
      </header>

      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-8 mb-16">
          <h1 className="text-4xl font-bold mb-12">{t("imprint.title")}</h1>
          
          {/* Company Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t("imprint.responsibleContent")}</h2>
            <div className="space-y-2">
              <h3 className="font-semibold">{t("imprint.managingDirector")}</h3>
              <p>{t("imprint.director")}</p>
              <p>{t("imprint.companyName")}</p>
              <p>{t("imprint.address")}</p>
              <p>{t("imprint.cityPostal")}</p>
              <p>{t("imprint.phone")}</p>
              
              <div className="mt-4">
                <h3 className="font-semibold">{t("imprint.openingHours")}</h3>
                <p>{t("imprint.hours")}</p>
              </div>
            </div>
          </section>

          {/* Disclaimer */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t("imprint.disclaimer")}</h2>
            
            {/* Liability for Content */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">{t("imprint.liabilityContent")}</h3>
              <p className="mb-4">{t("imprint.liabilityContentText")}</p>
              <p className="mb-4">{t("imprint.liabilityService")}</p>
            </div>

            {/* Liability for Links */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">{t("imprint.liabilityLinks")}</h3>
              <p>{t("imprint.liabilityLinksText")}</p>
            </div>

            {/* Copyright */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">{t("imprint.copyright")}</h3>
              <p>{t("imprint.copyrightText")}</p>
            </div>
          </section>
        </div>
      </main>

      <Footerdemo />
    </div>
  );
} 