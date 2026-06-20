import { FooterCTA } from "@/components/ui/HomeSections";
import { CardsSection, PageHero } from "@/components/ui/PageBlocks";

const items = [
  { title: "Arbeitgeberprofile", text: "Kontakte, Branchen, Anforderungen und offene Stellen sauber bündeln." },
  { title: "Stellenverwaltung", text: "Rollen, Skills, Sprache, Standort und Verfügbarkeit als Matching-Basis." },
  { title: "Freigabeprozesse", text: "Anonyme CVs und Kandidatenvorschläge kontrolliert teilen." },
];

export default function ArbeitgeberverwaltungPage() {
  return (
    <>
      <PageHero eyebrow="Arbeitgeber & Stellen" title="Arbeitgeber verwalten und Stellen schneller besetzen." subtitle="Vom ersten Kontakt bis zum Kandidatenvorschlag bleibt alles in einem strukturierten Workflow." />
      <CardsSection title="Mehr Kontext für bessere Matches." items={items} light={false} />
      <FooterCTA />
    </>
  );
}

