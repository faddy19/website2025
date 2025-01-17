import { useState } from "react";
import { Menu } from "../components/ui/navbar-menu";
import { Footerdemo } from "../components/ui/footer-section";
import { useTranslations } from "../utils/translations";

export default function CommunityPage() {
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
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">{t("community.title")}</h1>
            <h2 className="text-2xl text-muted-foreground mb-6">{t("community.subtitle")}</h2>
            <p className="text-lg max-w-2xl mx-auto">{t("community.description")}</p>
          </div>
          
          {/* Eligibility Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-8">{t("community.eligibility")}</h2>
            <h3 className="text-xl mb-6">{t("community.eligibilityTitle")}</h3>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="p-6 rounded-lg bg-card">
                <h4 className="text-xl font-semibold mb-3">{t("community.students")}</h4>
                <p className="text-muted-foreground">{t("community.studentsDesc")}</p>
              </div>
              <div className="p-6 rounded-lg bg-card">
                <h4 className="text-xl font-semibold mb-3">{t("community.nonprofits")}</h4>
                <p className="text-muted-foreground">{t("community.nonprofitsDesc")}</p>
              </div>
              <div className="p-6 rounded-lg bg-card">
                <h4 className="text-xl font-semibold mb-3">{t("community.individuals")}</h4>
                <p className="text-muted-foreground">{t("community.individualsDesc")}</p>
              </div>
            </div>
          </section>

          {/* Offerings Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-8">{t("community.offerings")}</h2>
            <h3 className="text-xl mb-6">{t("community.offeringsTitle")}</h3>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="p-6 rounded-lg bg-card">
                <h4 className="text-xl font-semibold mb-3">{t("community.consultation")}</h4>
                <p className="text-muted-foreground">{t("community.consultationDesc")}</p>
              </div>
              <div className="p-6 rounded-lg bg-card">
                <h4 className="text-xl font-semibold mb-3">{t("community.mentoring")}</h4>
                <p className="text-muted-foreground">{t("community.mentoringDesc")}</p>
              </div>
              <div className="p-6 rounded-lg bg-card">
                <h4 className="text-xl font-semibold mb-3">{t("community.resources")}</h4>
                <p className="text-muted-foreground">{t("community.resourcesDesc")}</p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-semibold mb-6">{t("community.contact")}</h2>
              <p className="mb-8">{t("community.contactDesc")}</p>
              <div className="space-y-2">
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