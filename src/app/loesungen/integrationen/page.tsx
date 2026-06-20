import { FooterCTA, IntegrationGrid } from "@/components/ui/HomeSections";
import { AltSection, CardsSection, FAQSection, PageHero } from "@/components/ui/PageBlocks";

const spotlights = [
  { title: "Meta Lead Ads", text: "Leads aus Facebook und Instagram werden automatisch zu Bewerberprofilen konvertiert." },
  { title: "Microsoft Teams", text: "Bewerberdokumente aus Teams werden zentral importiert und am Profil abgelegt." },
  { title: "WordPress GraphQL", text: "Stellenanzeigen und Blog-Inhalte lassen sich aus Jobdenker heraus synchronisieren." },
  { title: "MongoDB bereit", text: "Das Datenmodell ist auf spätere persistente Kandidaten-, Arbeitgeber- und Stellenobjekte vorbereitet." },
  { title: "MinIO bereit", text: "Dokumenten-Uploads können später sauber in objektbasierten Storage wandern." },
  { title: "Stripe Credits", text: "Credit-Billing pro Aktion lässt sich als eigenständiger Zahlungsflow anbinden." },
];

export default function IntegrationenPage() {
  return (
    <>
      <PageHero eyebrow="Integrationen" title="Jobdenker spricht mit deinem ganzen Stack." subtitle="Von Leadquellen über Dokumente bis Billing: die Plattform ist für vernetzte Workflows gebaut." />
      <IntegrationGrid />
      <CardsSection title="Integration-Spotlights." items={spotlights} light={false} />
      <AltSection
        eyebrow="Verbunden mit Leadquellen"
        title="Aus Kampagnen werden Kandidaten."
        text="Leads aus Meta Lead Ads und Anzeigen werden automatisch zu strukturierten Bewerberprofilen. Dokumente aus Teams und Web-Formulare landen direkt im richtigen Datensatz."
        bullets={["Meta Lead Ads ohne manuelle Übergabe", "Dokumente aus Teams zentral importiert", "WordPress-Stellen und Formulare angebunden"]}
        iconName="plug"
        mockTitle="Datenflüsse"
        mockLines={["Meta Lead Ads", "Microsoft Teams", "WordPress"]}
      />
      <AltSection
        reverse
        light={false}
        eyebrow="Bereit für Storage & Billing"
        title="Ein Datenmodell, das mitwächst."
        text="Die Plattform ist auf persistente Daten (MongoDB), objektbasierten Storage (MinIO) und Credit-Billing über Stripe vorbereitet, damit Workflows ohne Brüche skalieren."
        bullets={["MongoDB für persistente Objekte vorbereitet", "MinIO für Dokumenten-Storage angelegt", "Stripe-Credits als eigener Zahlungsflow"]}
        iconName="database"
        mockTitle="Plattform-Stack"
        mockLines={["MongoDB", "MinIO", "Stripe"]}
      />
      <FAQSection
        items={[
          { question: "Welche Integrationen sind vorgesehen?", answer: "Unter anderem Meta Lead Ads, Microsoft Teams, WordPress, Stripe, Twilio, WhatsApp, Indeed, Apify und MinIO." },
          { question: "Werden Leads automatisch zu Profilen?", answer: "Ja. Leads aus Kampagnen lassen sich automatisch in strukturierte Bewerberprofile überführen." },
          { question: "Ist die Plattform auf Wachstum vorbereitet?", answer: "Das Datenmodell ist für persistente Daten, objektbasierten Storage und Credit-Billing ausgelegt." },
          { question: "Kann ich eigene Systeme anbinden?", answer: "Jobdenker ist als vernetzte Plattform mit API-ready-Workflows und Webhooks gedacht, sodass weitere Systeme angebunden werden können." },
        ]}
      />
      <FooterCTA />
    </>
  );
}

