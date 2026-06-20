import { FooterCTA } from "@/components/ui/HomeSections";
import { CardsSection, PageHero, ProcessTimeline } from "@/components/ui/PageBlocks";

const items = [
  { title: "Profil-KI", text: "Dokumente und Freitext werden in strukturierte Kandidatenprofile übersetzt." },
  { title: "Dokumentenstatus", text: "Fehlende, geprüfte und abgelaufene Dokumente sind sofort sichtbar." },
  { title: "Status-Tracking", text: "Bewerbung, Vermittlung, Visa und Onboarding laufen in einem Verlauf." },
];

export default function BewerbermanagementPage() {
  return (
    <>
      <PageHero eyebrow="Bewerbermanagement" title="Bewerberdaten ohne Chaos." subtitle="Alle Kandidaten, Dokumente, Notizen und Statuswechsel an einem Ort." />
      <CardsSection title="Von Upload bis Vermittlung." items={items} light={false} />
      <ProcessTimeline steps={["Lead aufnehmen", "Dokumente hochladen", "KI-Profil erzeugen", "Status verfolgen", "Matching starten"]} />
      <FooterCTA />
    </>
  );
}

