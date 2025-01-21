import { useState } from "react";
import { Menu, MenuItem, HoveredLink } from "../components/ui/navbar-menu";
import { Footerdemo } from "../components/ui/footer-section";
import { useTranslations } from "../utils/translations";
import { cn } from "../utils/cn";
import { Link } from "@remix-run/react";

export default function PrivacyPage() {
  const [active, setActive] = useState<string | null>(null);
  const { t } = useTranslations();

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <header className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/50 backdrop-blur-xl dark:border-gray-800 dark:bg-gray-950/50">
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="services">
            <HoveredLink>Services</HoveredLink>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="products">
            <HoveredLink>Products</HoveredLink>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="company">
            <HoveredLink>Company</HoveredLink>
          </MenuItem>
        </Menu>
      </header>

      <main className={cn(
        "flex-grow pt-24 transition-all duration-300",
        active && "blur-md brightness-[0.3] bg-black/50"
      )}>
        <div className="container mx-auto px-4 py-8 mb-16 prose prose-invert max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">Datenschutz</h1>
          <p className="text-sm text-neutral-400 mb-8">Stand: Dezember 2024</p>

          {/* Responsible Party */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Verantwortlicher</h2>
            <p className="text-neutral-300">
              Verantwortlicher im Sinne des Datenschutzrechts sind wir, die<br />
              capsula.ai<br />
              Martinistraße 62-66<br />
              28195 Bremen<br />
              Tel: +49 421 37703470<br />
              Email: info@capsula.ai
            </p>
          </section>

          {/* Section 1: General Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Allgemeines zu dieser Datenschutzerklärung</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">1.1.</h3>
                <p className="text-neutral-300">
                  Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten im Zusammenhang mit dieser Webseite auf.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">1.2.</h3>
                <p className="text-neutral-300">
                  Zu den verwendeten Begrifflichkeiten, wie z. B. „personenbezogene Daten" oder deren „Verarbeitung" verweisen wir auf die Definitionen in Art. 4 der Datenschutzgrundverordnung (DSGVO).
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Data Processing */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Allgemeines zur Datenverarbeitung</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">2.1. Umfang der Verarbeitung personenbezogener Daten</h3>
                <p className="text-neutral-300">
                  Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur Bereitstellung einer funktionsfähigen Webseite sowie unserer Inhalte und Leistungen erforderlich ist.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">2.2. Rechtsgrundlage für die Verarbeitung personenbezogener Daten</h3>
                <div className="space-y-4">
                  <p className="text-neutral-300">
                    Soweit wir für Verarbeitungsvorgänge personenbezogener Daten eine Einwilligung der betroffenen Person einholen, dient Art. 6 I 1 lit. a) DSGVO als Rechtsgrundlage.
                  </p>
                  <p className="text-neutral-300">
                    Bei der Verarbeitung personenbezogener Daten, die zur Erfüllung eines Vertrages zwischen uns und der betroffenen Person erforderlich ist, dient Art. 6 I 1 lit. b) DSGVO als Rechtsgrundlage. Dies gilt auch für Verarbeitungsvorgänge, die zur Durchführung vorvertraglicher Maßnahmen auf eine Anfrage hin, insb. Kundenanfragen, erforderlich sind.
                  </p>
                  <p className="text-neutral-300">
                    Soweit die Verarbeitung personenbezogener Daten zur Erfüllung einer rechtlichen Verpflichtung, der wir unterliegen, erforderlich ist, dient Art. 6 I 1 lit.c) DSGVO als Rechtsgrundlage.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">2.3. Empfänger</h3>
                <p className="text-neutral-300 mb-2">
                  Wir geben Ihre personenbezogenen Daten grundsätzlich nur an andere Empfänger weiter, wenn dies zur Erfüllung der beschriebenen Zwecke erforderlich ist, Sie uns Ihre Einwilligung hierfür erteilt haben oder wir gesetzlich oder aufgrund einer gerichtlichen oder behördlichen Anordnung dazu berechtigt oder verpflichtet sind.
                </p>
                <ul className="list-disc pl-6 space-y-1 text-neutral-300">
                  <li>IT-Dienstleister</li>
                  <li>Marketing-Dienstleister</li>
                  <li>Druck-Dienstleister</li>
                  <li>Logistik-Dienstleister</li>
                  <li>Beratung und Consulting</li>
                  <li>Staatliche Stellen (z. B. Finanzbehörden)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">2.4. Datenlöschung und Speicherdauer</h3>
                <p className="text-neutral-300">
                  Wir bewahren Ihre personenbezogenen Daten nur so lange auf, wie es notwendig ist, um die beschriebenen Zwecke erfüllen zu können. Nach Ablauf der geltenden Aufbewahrungsfristen werden wir Ihre personenbezogenen Daten auf sichere Weise löschen oder anonymisieren.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Website Provision and Log Files */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Bereitstellung der Webseite und Erstellung von Logfiles</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">3.1. Beschreibung und Umfang der Datenverarbeitung</h3>
                <p className="text-neutral-300 mb-2">
                  Bei jedem Aufruf unserer Internetseite erfasst unser System automatisiert Daten und Informationen des Computersystems des aufrufenden Rechners. Folgende Daten werden hierbei erhoben:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-neutral-300">
                  <li>IP-Adresse</li>
                  <li>Informationen über den Browsertyp und die verwendete Version</li>
                  <li>Betriebssystem des Nutzers</li>
                  <li>Datum und Uhrzeit des Zugriffs</li>
                  <li>Webseiten, die vom System des Nutzers über unsere Webseite aufgerufen werden</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">3.2. Rechtsgrundlage für die Datenverarbeitung</h3>
                <p className="text-neutral-300">
                  Rechtsgrundlage für die vorübergehende Speicherung der Daten und Logfiles ist Art. 6 I 1 lit.f DSGVO.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">3.3. Zweck der Datenverarbeitung</h3>
                <p className="text-neutral-300">
                  Die vorübergehende Speicherung der IP-Adresse durch das System ist notwendig, um eine Auslieferung der Website an den Rechner des Nutzers zu ermöglichen. Hierfür muss die IP-Adresse des Nutzers für die Dauer der Sitzung gespeichert bleiben.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Cookies */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Verwendung von Cookies und ähnlichen Technologien</h2>
            <div className="space-y-4">
              <p className="text-neutral-300">
                Auf unserer Webseite werden Cookies und ähnliche Technologien von uns und Dritten verwendet, mit denen Informationen in Ihrem Endgerät gespeichert werden können oder ein Zugriff auf Informationen, die bereits in Ihrem Endgerät gespeichert sind, ermöglicht wird.
              </p>
              <p className="text-neutral-300">
                Die Speicherung von Informationen in Ihrem Endgerät oder der Zugriff auf Informationen, die bereits in Ihrem Endgerät gespeichert sind, erfolgt grundsätzlich nur auf der Grundlage einer von Ihnen erteilten Einwilligung (§ 25 I TTDSG).
              </p>
            </div>
          </section>

          {/* Section 5: Newsletter */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Newsletter</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">5.1. Beschreibung und Umfang der Datenverarbeitung</h3>
                <p className="text-neutral-300">
                  Auf unserer Internetseite besteht die Möglichkeit, einen kostenfreien Newsletter zu abonnieren. Bei der Anmeldung zum Newsletter verwenden wir das sog. Double-Opt-In-Verfahren.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">5.2. Rechtsgrundlage für die Datenverarbeitung</h3>
                <p className="text-neutral-300">
                  Wir senden Ihnen unseren Newsletter auf der Grundlage Ihrer Einwilligung zu, Art. 6 I 1 lit.a) DSGVO.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">5.3. Zweck der Datenverarbeitung</h3>
                <p className="text-neutral-300">
                  Die Erhebung der E-Mail-Adresse dient zum einwandfreien Versand des Newsletters und zur Verhinderung von Missbrauch.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: Whitepapers and Downloads */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Download von Whitepapern und anderen Download-Dokumenten</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">6.1. Beschreibung und Umfang der Datenverarbeitung</h3>
                <p className="text-neutral-300 mb-4">
                  Sofern Sie die auf unserer Webseite erhältlichen Whitepaper und Download-Dokumente erhalten möchten, erteilen Sie uns im Gegenzug eine Marketingeinwilligung und wir verarbeiten die von Ihnen im Zusammenhang mit der Einwilligung bereitgestellten Daten wie:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-neutral-300">
                  <li>Ihren Vor- und Nachnamen</li>
                  <li>Ihre E-Mail-Adresse</li>
                  <li>ggf. Name Ihrer Firma und Ihrer Position</li>
                  <li>ggf. weitere Angaben, die Sie bei der Abgabe der Einwilligung gemacht haben</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">6.2. Rechtsgrundlage für die Verarbeitung personenbezogener Daten</h3>
                <p className="text-neutral-300">
                  Die Datenverarbeitung zur Bereitstellung des jeweiligen Whitepapers beruht auf einem Vertrag mit Ihnen (Art. 6 I 1 lit. b) DSGVO). Die anschließende Marketing-Kommunikation hingegen beruht auf Ihrer Einwilligung (Art. 6 I 1 lit. a) DSGVO).
                </p>
              </div>
            </div>
          </section>

          {/* Section 7: Contact Form */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Kontaktformular und E-Mail-Kontakt</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">7.1. Beschreibung und Umfang der Datenverarbeitung</h3>
                <p className="text-neutral-300 mb-4">
                  Auf unserer Webseite besteht die Möglichkeit, mit Hilfe eines Kontaktformulars elektronisch mit uns in Kontakt zu treten. Folgende Daten werden dabei erhoben:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-neutral-300">
                  <li>Name</li>
                  <li>Vorname</li>
                  <li>Telefonnummer (Handy oder Festnetz)</li>
                  <li>E-Mail-Adresse</li>
                  <li>Ihre Position und das Unternehmen, für welches Sie tätig sind</li>
                  <li>Land, aus dem Sie anfragen</li>
                  <li>Inhalt Ihrer Nachricht</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 8: Surveys and Typeform */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Umfragen und Einsatz von Typeform</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">8.1. Beschreibung und Umfang der Datenverarbeitung</h3>
                <p className="text-neutral-300 mb-4">
                  Wir nutzen auf unserer Webseite Typeform, ein Umfrage-Tool der Typeform SL, um Ihnen die Teilnahme an unseren Umfragen zu ermöglichen und Umfrageergebnisse zu veröffentlichen. Dabei werden folgende Daten verarbeitet:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-neutral-300">
                  <li>Ihre (anonymisierten) Antworten im Zusammenhang mit unserer Umfrage</li>
                  <li>Ihre Kontaktdaten, einschließlich Name Ihrer Firma</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 9: Application Process */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Datenverarbeitung im Rahmen unseres Bewerbungsprozesses</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">9.1. Beschreibung und Umfang der Datenverarbeitung</h3>
                <p className="text-neutral-300 mb-4">
                  Bei Bewerbungen über unser Online-Bewerbungsportal oder via E-Mail verarbeiten wir folgende personenbezogene Daten:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-neutral-300">
                  <li>Name, Vorname</li>
                  <li>E-Mail-Adresse</li>
                  <li>Telefonnummer</li>
                  <li>Mögliches Startdatum</li>
                  <li>Gehaltsvorstellungen</li>
                  <li>Angaben zum Werdegang und zu Qualifikationen</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 10: HubSpot Usage */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Einsatz von HubSpot</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">10.1. Beschreibung und Umfang der Datenverarbeitung</h3>
                <p className="text-neutral-300 mb-4">
                  Für unser E-Mail-Marketing, Kontakt- und Kundenmanagement sowie Reporting nutzen wir HubSpot. Dabei werden folgende Daten verarbeitet:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-neutral-300">
                  <li>Kontaktdaten</li>
                  <li>Geräte- und Browserinformationen</li>
                  <li>Nutzeraktivitäten</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 11: Google Analytics */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Einsatz von Google Analytics</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">11.1. Beschreibung und Umfang der Datenverarbeitung</h3>
                <p className="text-neutral-300 mb-4">
                  Wir nutzen auf unserer Webseite Google Analytics, ein Webanalysedienst der Google Irland Limited, um die Nutzung unserer Webseite auszuwerten. Dabei werden folgende Daten verarbeitet:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-neutral-300">
                  <li>IP-Adresse, wobei diese gekürzt wird (sog. "IP-Masking")</li>
                  <li>Geräte- und browserbezogene Daten</li>
                  <li>Nutzungsbezogene Informationen, einschließlich Online Identifier</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">11.2. Rechtsgrundlage für die Verarbeitung personenbezogener Daten</h3>
                <p className="text-neutral-300">
                  Rechtsgrundlage für die Datenverarbeitung ist Ihre Einwilligung nach Art. 6 I 1 lit. a) DSGVO.
                </p>
              </div>
            </div>
          </section>

          {/* Section 12: Google Ads Conversion Tracking */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Einsatz von Google Ads Conversion Tracking und Google Consent Mode</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">12.1. Beschreibung und Umfang der Datenverarbeitung</h3>
                <p className="text-neutral-300 mb-4">
                  Wir nutzen Google Ads Conversion Tracking, um nachvollziehen zu können, ob Nutzer nach einem Klick auf eine Werbeanzeige eine bestimmte Aktion ausführen. Dabei werden folgende Daten verarbeitet:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-neutral-300">
                  <li>IP-Adresse</li>
                  <li>Geräte- und browserbezogene Daten</li>
                  <li>Nutzungsbezogene Informationen</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 13: Google Optimize */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">13. Einsatz von Google Optimize</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">13.1. Beschreibung und Umfang der Datenverarbeitung</h3>
                <p className="text-neutral-300 mb-4">
                  Wir nutzen Google Optimize für A/B-Testing, um die verschiedenen Möglichkeiten, Inhalte auf unserer Webseite bereitzustellen, zu testen. Dabei werden folgende Daten verarbeitet:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-neutral-300">
                  <li>IP-Adresse (mit IP-Masking)</li>
                  <li>Geräte- und browserbezogene Daten</li>
                  <li>Nutzungsbezogene Informationen</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 14: Google Tag Manager */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">14. Einsatz des Google Tag Managers</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">14.1. Beschreibung und Umfang der Datenverarbeitung</h3>
                <p className="text-neutral-300 mb-4">
                  Wir nutzen den Google Tag Manager, um Tags zentral über eine Benutzeroberfläche einzubinden. Dabei werden folgende Daten verarbeitet:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-neutral-300">
                  <li>Geräte- und browserbezogene Daten</li>
                  <li>Aggregierte, nutzungsbezogene Informationen zur Tag-Auslösung</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 15: Google Maps */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">15. Einsatz von Google Maps</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">15.1. Beschreibung und Umfang der Datenverarbeitung</h3>
                <p className="text-neutral-300 mb-4">
                  Wir nutzen Google Maps, um eine Kartenfunktion auf unserer Webseite bereitzustellen. Dabei werden folgende Daten verarbeitet:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-neutral-300">
                  <li>Geräte- und browserbezogene Daten</li>
                  <li>Nutzungsbezogene Informationen</li>
                  <li>Standortinformationen</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">15.2. Rechtsgrundlage und Zweck</h3>
                <p className="text-neutral-300">
                  Rechtsgrundlage für die Datenverarbeitung ist Ihre Einwilligung nach Art. 6 I 1 lit. a) DSGVO. Der Zweck liegt in der Bereitstellung der Kartenfunktion, einschließlich des Routenplaners.
                </p>
              </div>
            </div>
          </section>

          {/* Section 16: Google reCAPTCHA */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">16. Einsatz von Google reCAPTCHA</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">16.1. Beschreibung und Umfang der Datenverarbeitung</h3>
                <p className="text-neutral-300 mb-4">
                  Wir nutzen Google reCAPTCHA, um zu prüfen, ob Eingaben bzw. Interaktionen durch Menschen oder missbräuchlich durch eine automatisierte, maschinelle Verarbeitung erfolgen. Dabei können folgende Daten verarbeitet werden:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-neutral-300">
                  <li>IP-Adressen</li>
                  <li>Geräte- und browserbezogene Daten</li>
                  <li>Nutzungsbezogene Informationen, einschließlich Ergebnisse von manuellen Erkennungsvorgängen</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">16.2. Rechtsgrundlage und Zweck</h3>
                <p className="text-neutral-300">
                  Rechtsgrundlage ist das berechtigte Interesse nach Art. 6 I 1 lit. f) DSGVO, um unsere Webseite vor Missbrauch zu schützen. Der Zweck liegt in der Prüfung menschlicher Eingaben zur Verhinderung von Missbrauch.
                </p>
              </div>
            </div>
          </section>

          {/* Section 17: Hotjar */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">17. Einsatz von Hotjar</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">17.1. Beschreibung und Umfang der Datenverarbeitung</h3>
                <p className="text-neutral-300 mb-4">
                  Wir nutzen Hotjar zur Analyse der Nutzung unserer Webseite. Dabei werden pseudonymisierte Nutzerprofile erstellt und folgende Daten verarbeitet:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-neutral-300">
                  <li>IP-Adressen</li>
                  <li>Geräteinformationen und browserbezogene Daten</li>
                  <li>Nutzungsbezogene Informationen</li>
                  <li>Standortdaten</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">17.2. Rechtsgrundlage und Zweck</h3>
                <p className="text-neutral-300">
                  Rechtsgrundlage ist Ihre Einwilligung nach Art. 6 I 1 lit. a) DSGVO. Der Zweck liegt in der Webanalyse zur bedarfsgerechten Gestaltung und Optimierung unserer Webseite.
                </p>
              </div>
            </div>
          </section>

          {/* Section 18: Wordfence */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">18. Einsatz von Wordfence</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">18.1. Beschreibung und Umfang der Datenverarbeitung</h3>
                <p className="text-neutral-300 mb-4">
                  Wir nutzen Wordfence, um Brute-Force- und DDoS-Angriffe sowie Malware zu erkennen. Dabei können folgende Daten verarbeitet werden:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-neutral-300">
                  <li>IP-Adressen</li>
                  <li>Geräte- und browserbezogene Daten</li>
                  <li>Nutzungsbezogene Informationen</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">18.2. Rechtsgrundlage und Zweck</h3>
                <p className="text-neutral-300">
                  Rechtsgrundlage ist Ihre Einwilligung nach Art. 6 I 1 lit. a) DSGVO. Der Zweck liegt in der Erkennung von Angriffen und der Aufrechterhaltung der Sicherheit unserer Webseite.
                </p>
              </div>
            </div>
          </section>

          {/* Section 19: Contact Form 7 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">19. Einsatz von Contact Form 7</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">19.1. Beschreibung und Umfang der Datenverarbeitung</h3>
                <p className="text-neutral-300 mb-4">
                  Wir nutzen Contact Form 7 zur Analyse der Nutzung der Kontaktformulare. Dabei können folgende Daten verarbeitet werden:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-neutral-300">
                  <li>IP-Adressen</li>
                  <li>Geräte- und browserbezogene Daten</li>
                  <li>Nutzungsbezogene Informationen</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">19.2. Rechtsgrundlage und Zweck</h3>
                <p className="text-neutral-300">
                  Rechtsgrundlage ist Ihre Einwilligung nach Art. 6 I 1 lit. a) DSGVO. Der Zweck liegt in der Analyse und Optimierung der Kontaktformulare.
                </p>
              </div>
            </div>
          </section>

          {/* Section 20: Facebook Pixel */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">20. Einsatz von Facebook Pixel</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">20.1. Beschreibung und Umfang der Datenverarbeitung</h3>
                <p className="text-neutral-300 mb-4">
                  Wir nutzen Facebook Pixel zur Nachverfolgung von Nutzerinteraktionen mit unseren Facebook-Werbeanzeigen. Dabei können folgende Daten verarbeitet werden:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-neutral-300">
                  <li>IP-Adressen</li>
                  <li>Geräte- und browserbezogene Daten</li>
                  <li>Nutzungsbezogene Informationen (Interaktionen, Klicks, etc.)</li>
                  <li>Standortdaten</li>
                </ul>
                <p className="text-neutral-300 mt-4">
                  Wir sind gemeinsam mit Meta Ireland datenschutzrechtlich verantwortlich. Details zur Vereinbarung finden Sie unter: https://www.facebook.com/legal/controller_addendum
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">20.2. Rechtsgrundlage und Zweck</h3>
                <p className="text-neutral-300">
                  Rechtsgrundlage ist Ihre Einwilligung nach Art. 6 I 1 lit. a) DSGVO. Der Zweck liegt in der Analyse und Optimierung unserer Werbeanzeigen sowie der Anzeige personalisierter Werbung.
                </p>
              </div>
            </div>
          </section>

          {/* Section 21: Borlabs CMP */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">21. Einsatz der Consent Management Plattform (CMP) von Borlabs</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">21.1. Beschreibung und Umfang der Datenverarbeitung</h3>
                <p className="text-neutral-300 mb-4">
                  Wir nutzen die Consent Management Platform von Borlabs zur Verwaltung Ihrer Einwilligungen und Datenschutzeinstellungen. Dabei können folgende Daten verarbeitet werden:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-neutral-300">
                  <li>IP-Adressen</li>
                  <li>Einwilligungsbezogene Informationen und Einstellungen</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">21.2. Rechtsgrundlage und Zweck</h3>
                <p className="text-neutral-300">
                  Die Verarbeitung erfolgt zur Erfüllung rechtlicher Pflichten nach Art. 6 I 1 lit. c) DSGVO sowie aufgrund berechtigter Interessen nach Art. 6 I 1 lit. f) DSGVO.
                </p>
              </div>
            </div>
          </section>

          {/* Section 22: Facebook Fanpage */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">22. Facebook Fanpage</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">22.1. Beschreibung und Umfang der Datenverarbeitung</h3>
                <p className="text-neutral-300 mb-4">
                  Wir betreiben eine Facebook Fanpage und nutzen Seiten-Insights zur Analyse. Dabei können folgende Daten verarbeitet werden:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-neutral-300">
                  <li>IP-Adressen</li>
                  <li>Geräte- und browserbezogene Daten</li>
                  <li>Nutzungsbezogene Informationen</li>
                  <li>Standortdaten</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">22.2. Rechtsgrundlage und Zweck</h3>
                <p className="text-neutral-300">
                  Rechtsgrundlage ist das berechtigte Interesse nach Art. 6 I 1 lit. f) DSGVO zur Präsentation und Analyse unserer Fanpage.
                </p>
              </div>
            </div>
          </section>

          {/* Section 23: LinkedIn */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">23. LinkedIn</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">23.1. Beschreibung und Umfang der Datenverarbeitung</h3>
                <p className="text-neutral-300 mb-4">
                  Wir betreiben eine Unternehmensseite auf LinkedIn und nutzen Page Insights. Dabei können folgende Daten verarbeitet werden:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-neutral-300">
                  <li>IP-Adressen</li>
                  <li>Geräte- und browserbezogene Daten</li>
                  <li>Nutzungsbezogene Informationen (Reichweite, Aufrufe, etc.)</li>
                  <li>Standortdaten</li>
                </ul>
                <p className="text-neutral-300 mt-4">
                  Details zur gemeinsamen Verantwortlichkeit finden Sie unter: https://legal.linkedin.com/pages-joint-controller-addendum
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">23.2. Rechtsgrundlage und Zweck</h3>
                <p className="text-neutral-300">
                  Rechtsgrundlage ist das berechtigte Interesse nach Art. 6 I 1 lit. f) DSGVO zur Präsentation und Analyse unserer Unternehmensseite.
                </p>
              </div>
            </div>
          </section>

          {/* Section 24: YouTube */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">24. YouTube</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">24.1. Beschreibung und Umfang der Datenverarbeitung</h3>
                <p className="text-neutral-300 mb-4">
                  Wir betreiben eine Unternehmensseite auf YouTube und analysieren deren Nutzung. Dabei können folgende Daten verarbeitet werden:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-neutral-300">
                  <li>IP-Adressen</li>
                  <li>Geräte- und browserbezogene Daten</li>
                  <li>Nutzungsbezogene Informationen (Reichweite, Profilbesuche, etc.)</li>
                </ul>
                <p className="text-neutral-300 mt-4">
                  Nutzungsbedingungen: https://www.youtube.com/t/terms
                  <br />
                  Datenschutz: https://policies.google.com/privacy
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">24.2. Rechtsgrundlage und Zweck</h3>
                <p className="text-neutral-300">
                  Rechtsgrundlage ist das berechtigte Interesse nach Art. 6 I 1 lit. f) DSGVO zur Präsentation und Analyse unserer YouTube-Präsenz.
                </p>
              </div>
            </div>
          </section>

          {/* Section 25: TikTok */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">25. TikTok</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">25.1. Beschreibung und Umfang der Datenverarbeitung</h3>
                <p className="text-neutral-300 mb-4">
                  Wir betreiben eine Unternehmensseite auf TikTok und analysieren deren Nutzung. Dabei können folgende Daten verarbeitet werden:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-neutral-300">
                  <li>IP-Adressen</li>
                  <li>Geräte- und browserbezogene Daten</li>
                  <li>Nutzungsbezogene Informationen (Reichweite, Interaktionen, Videoansichten, etc.)</li>
                </ul>
                <p className="text-neutral-300 mt-4">
                  Nutzungsbedingungen: https://www.tiktok.com/legal/page/eea/terms-of-service/de-DE
                  <br />
                  Datenschutz: https://www.tiktok.com/legal/privacy-policy-eea
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">25.2. Rechtsgrundlage und Zweck</h3>
                <p className="text-neutral-300">
                  Rechtsgrundlage ist das berechtigte Interesse nach Art. 6 I 1 lit. f) DSGVO zur Präsentation und Analyse unserer TikTok-Präsenz.
                </p>
              </div>
            </div>
          </section>

          {/* Section 26: Ihre Rechte */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">26. Ihre Rechte in Bezug auf die Sie betreffenden, personenbezogenen Daten</h2>
            <div className="space-y-6">
              <p className="text-neutral-300">
                Unter der Datenschutz-Grundverordnung stehen Ihnen folgende Rechte zu:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-neutral-300">
                <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Widerspruchsrecht bei berechtigtem Interesse (Art. 21 DSGVO)</li>
              </ul>
              
              <div className="space-y-4">
                <p className="text-neutral-300">
                  Sie haben das Recht, erteilte Einwilligungen jederzeit mit Wirkung für die Zukunft zu widerrufen.
                </p>
                
                <p className="text-neutral-300">
                  Beschwerderecht bei der Aufsichtsbehörde: Hessischer Beauftragter für Datenschutz und Informationsfreiheit, Gustav-Stresemann-Ring 1, 65189 Wiesbaden.
                </p>
                
                <p className="text-neutral-300">
                  Bei Datenverarbeitung außerhalb der EU/des EWR stellen wir ein vergleichbares Schutzniveau sicher. Eine Kopie der Garantien erhalten Sie über datenschutz@statworx.com.
                </p>
              </div>
            </div>
          </section>

          {/* Section 27: Änderungen */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">27. Änderungen der Datenschutzerklärung</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">27.1. Änderungsvorbehalte</h3>
                <p className="text-neutral-300">
                  Wir behalten uns vor, die Datenschutzerklärung zu ändern, um sie an geänderte Rechtslagen oder bei Änderungen des Dienstes sowie der Datenverarbeitung anzupassen. Dies gilt jedoch nur im Hinblick auf Erklärungen zur Datenverarbeitung. Sofern Einwilligungen erforderlich sind oder Bestandteile Regelungen des Vertragsverhältnisses enthalten, erfolgen die Änderungen nur mit Zustimmung der Kunden.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">27.2. Informationspflicht</h3>
                <p className="text-neutral-300">
                  Kunden werden gebeten sich regelmäßig über den Inhalt der Datenschutzerklärung zu informieren.
                </p>
              </div>
            </div>
          </section>

          {/* Back to Home Link */}
          <div className="mt-12 border-t pt-8">
            <Link to="/" className="text-blue-400 hover:text-blue-300 transition-colors">
              ← Zurück zur Startseite
            </Link>
          </div>
        </div>
      </main>

      <Footerdemo />
    </div>
  );
} 