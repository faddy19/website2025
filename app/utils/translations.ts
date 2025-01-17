import { useLocation } from "@remix-run/react";
import { useState, useEffect } from "react";
import enTranslations from "../translations/en.json";
import deTranslations from "../translations/de.json";

type Language = "en" | "de";
type TranslationRecord = {
  [key: string]: string | TranslationRecord;
};

export const translations = {
  en: {
    ...enTranslations as TranslationRecord,
    imprint: {
      title: "Imprint",
      responsibleContent: "Responsible for Content",
      managingDirector: "Managing Director",
      director: "Fatih Damat",
      companyName: "capsula.ai",
      address: "Martinistraße 62-66",
      cityPostal: "28195 Bremen",
      phone: "Phone: +49 421 37703470",
      openingHours: "Opening Hours",
      hours: "Open · Closes at 18:00",
      
      disclaimer: "Disclaimer",
      liabilityContent: "Liability for Content",
      liabilityContentText: "The contents of our pages were created with great care. However, we cannot guarantee the accuracy, completeness and timeliness of the content.",
      
      liabilityService: "As a service provider, we are responsible for our own content on these pages in accordance with general laws pursuant to § 7 Para.1 TMG. According to §§ 8 to 10 TMG, however, we are not obligated as a service provider to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information according to general laws remain unaffected. However, liability in this regard is only possible from the time of knowledge of a specific legal violation. Upon becoming aware of corresponding legal violations, we will remove this content immediately.",
      
      liabilityLinks: "Liability for Links",
      liabilityLinksText: "Our offer contains links to external third-party websites over whose content we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognizable at the time of linking. However, permanent monitoring of the content of the linked pages is not reasonable without concrete evidence of a legal violation. If we become aware of any legal violations, we will remove such links immediately.",
      
      copyright: "Copyright",
      copyrightText: "The content and works created by the site operators on these pages are subject to German copyright law. The reproduction, editing, distribution and any kind of exploitation outside the limits of copyright law require the written consent of the respective author or creator. Downloads and copies of this page are only permitted for private, non-commercial use. Insofar as the content on this page was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is marked as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. If we become aware of any infringements, we will remove such content immediately."
    },
    community: {
      title: "Community Support",
      subtitle: "Supporting Education and Social Impact",
      description: "At capsula.ai, we believe in giving back to the community and supporting those who are making a positive impact.",
      
      eligibility: "Who is Eligible",
      eligibilityTitle: "Our Support Program is Available for:",
      students: "Students",
      studentsDesc: "Working on AI and technology projects for their academic research or thesis",
      nonprofits: "Non-Profit Organizations",
      nonprofitsDesc: "Using AI to create positive social impact",
      individuals: "Individuals with Limited Resources",
      individualsDesc: "Pursuing innovative AI projects but facing financial constraints",
      
      offerings: "What We Offer",
      offeringsTitle: "Our Support Includes:",
      consultation: "Free Consultations",
      consultationDesc: "Expert guidance on AI strategy and implementation",
      mentoring: "Technical Mentoring",
      mentoringDesc: "Support in developing AI solutions and overcoming technical challenges",
      resources: "Learning Resources",
      resourcesDesc: "Access to educational materials and best practices",
      
      contact: "Get in Touch",
      contactDesc: "If you qualify for our community support program, please reach out to us with details about your project.",
      email: "Email: contact@capsula.ai",
      phone: "Phone: +49 421 37703470",
      hours: "Open · Closes at 18:00"
    }
  },
  de: {
    ...deTranslations as TranslationRecord,
    imprint: {
      title: "Impressum",
      responsibleContent: "Inhaltlich Verantwortliche",
      managingDirector: "Geschäftsführer",
      director: "Fatih Damat",
      companyName: "capsula.ai",
      address: "Martinistraße 62-66",
      cityPostal: "28195 Bremen",
      phone: "Telefon: +49 421 37703470",
      openingHours: "Öffnungszeiten",
      hours: "Geöffnet · Schließt um 18:00 Uhr",
      
      disclaimer: "Haftungsausschluss",
      liabilityContent: "Haftung für Inhalte",
      liabilityContentText: "Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.",
      
      liabilityService: "Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei bekannt werden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.",
      
      liabilityLinks: "Haftung für Links",
      liabilityLinksText: "Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.",
      
      copyright: "Urheberrecht",
      copyrightText: "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen."
    },
    community: {
      title: "Community Support",
      subtitle: "Unterstützung für Bildung und soziale Wirkung",
      description: "Bei capsula.ai glauben wir daran, der Gemeinschaft etwas zurückzugeben und diejenigen zu unterstützen, die einen positiven Einfluss ausüben.",
      
      eligibility: "Wer ist berechtigt",
      eligibilityTitle: "Unser Unterstützungsprogramm ist verfügbar für:",
      students: "Studierende",
      studentsDesc: "Die an KI- und Technologieprojekten für ihre akademische Forschung oder Abschlussarbeit arbeiten",
      nonprofits: "Gemeinnützige Organisationen",
      nonprofitsDesc: "Die KI nutzen, um positive gesellschaftliche Wirkung zu erzielen",
      individuals: "Personen mit begrenzten Ressourcen",
      individualsDesc: "Die innovative KI-Projekte verfolgen, aber finanzielle Einschränkungen haben",
      
      offerings: "Was wir anbieten",
      offeringsTitle: "Unsere Unterstützung umfasst:",
      consultation: "Kostenlose Beratungen",
      consultationDesc: "Expertenberatung zu KI-Strategie und Implementierung",
      mentoring: "Technisches Mentoring",
      mentoringDesc: "Unterstützung bei der Entwicklung von KI-Lösungen und der Bewältigung technischer Herausforderungen",
      resources: "Lernressourcen",
      resourcesDesc: "Zugang zu Bildungsmaterialien und Best Practices",
      
      contact: "Kontakt aufnehmen",
      contactDesc: "Wenn Sie für unser Community-Support-Programm in Frage kommen, kontaktieren Sie uns bitte mit Details zu Ihrem Projekt.",
      email: "E-Mail: contact@capsula.ai",
      phone: "Telefon: +49 421 37703470",
      hours: "Geöffnet · Schließt um 18:00 Uhr"
    }
  },
};

export function useTranslations() {
  const location = useLocation();
  const [currentLanguage, setCurrentLanguage] = useState<Language>("en");

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const lang = (searchParams.get("lang") as Language) || "en";
    setCurrentLanguage(lang);
  }, [location.search]);

  function t(key: string): string {
    const keys = key.split(".");
    let value: string | TranslationRecord = translations[currentLanguage];
    
    for (const k of keys) {
      if (value && typeof value === "object") {
        value = value[k];
      } else {
        return key; // Return the key if translation is not found
      }
    }
    
    return typeof value === "string" ? value : key;
  }

  return {
    t,
    currentLanguage,
  };
} 