import { FooterCTA } from "@/components/ui/HomeSections";
import { CardsSection, PageHero } from "@/components/ui/PageBlocks";

const items = [
  { title: "Stellen anlegen", text: "Arbeitgeber definieren Anforderungen direkt im Portal." },
  { title: "Match-Vorschläge sehen", text: "Top-Kandidaten werden mit Score und Begründung angezeigt." },
  { title: "CVs herunterladen", text: "Anonyme, geprüfte CVs stehen als PDF bereit." },
  { title: "Status verfolgen", text: "Entscheidungen und nächste Schritte bleiben transparent." },
  { title: "DSGVO-konform", text: "Personenbezogene Daten werden erst nach sauberer Freigabe sichtbar." },
  { title: "Teamfähig", text: "Fachbereiche können Kandidaten gemeinsam bewerten." },
];

export default function ArbeitgeberPage() {
  return (
    <>
      <PageHero eyebrow="Arbeitgeber" title="Offene Stellen besetzen. Einfach." subtitle="Ein eigenes Portal für Stellen, Kandidatenvorschläge, CV-Freigaben und Entscheidungen." />
      <CardsSection title="Schneller entscheiden, sauberer freigeben." items={items} light={false} />
      <FooterCTA />
    </>
  );
}

