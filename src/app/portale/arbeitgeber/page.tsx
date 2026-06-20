import { FooterCTA } from "@/components/ui/HomeSections";
import { AltSection, CardsSection, FAQSection, PageHero } from "@/components/ui/PageBlocks";

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
      <AltSection
        eyebrow="Kandidaten anonym prüfen"
        title="Top-Vorschläge mit Begründung."
        text="Arbeitgeber sehen passende Kandidaten mit Score und Begründung, anonymisiert und auf das Wesentliche reduziert. Das macht die Vorauswahl schneller und fairer."
        bullets={["Top-Kandidaten mit Fit-Score", "Anonyme, geprüfte CVs als PDF", "Schnellere Vorauswahl im Fachbereich"]}
        iconName="briefcase"
        mockTitle="Kandidatenvorschläge"
        mockLines={["Vorschlag A", "Vorschlag B", "Vorschlag C"]}
      />
      <AltSection
        reverse
        light={false}
        eyebrow="Kontrolliert freigeben"
        title="DSGVO-konform und teamfähig."
        text="Personenbezogene Daten werden erst nach sauberer Freigabe sichtbar. Fachbereiche können Kandidaten gemeinsam bewerten und Entscheidungen bleiben nachvollziehbar."
        bullets={["Daten erst nach Freigabe sichtbar", "Gemeinsame Bewertung im Team", "Entscheidungen und Status transparent"]}
        iconName="shieldCheck"
        mockTitle="Freigabe & Status"
        mockLines={["Anonym geprüft", "Team-Feedback", "Entscheidung"]}
      />
      <FAQSection
        items={[
          { question: "Sehen Arbeitgeber sofort persönliche Daten?", answer: "Nein. Kandidaten werden zunächst anonymisiert geprüft. Personenbezogene Daten werden erst nach sauberer Freigabe sichtbar." },
          { question: "Wie finde ich passende Kandidaten?", answer: "Das Portal zeigt Top-Vorschläge mit Score und Begründung pro offener Stelle." },
          { question: "Kann mein Team gemeinsam bewerten?", answer: "Ja. Fachbereiche können Kandidaten zusammen ansehen und bewerten, Entscheidungen bleiben dokumentiert." },
          { question: "Bekomme ich CVs als PDF?", answer: "Anonyme, geprüfte CVs stehen direkt als PDF zum Download bereit." },
        ]}
      />
      <FooterCTA />
    </>
  );
}

