import { FooterCTA, IntegrationGrid } from "@/components/ui/HomeSections";
import { CardsSection, PageHero } from "@/components/ui/PageBlocks";

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
      <FooterCTA />
    </>
  );
}

