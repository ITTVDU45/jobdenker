import { FooterCTA } from "@/components/ui/HomeSections";
import { AltSection, CardsSection, FAQSection, PageHero } from "@/components/ui/PageBlocks";

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
      <AltSection
        eyebrow="Arbeitgeberprofile"
        title="Arbeitgeber sauber im Überblick."
        text="Kontakte, Branchen, Ansprechpartner und Anforderungen bündeln sich pro Arbeitgeber. So weiß jeder im Team sofort, was gebraucht wird und wo der Prozess steht."
        bullets={["Alle Kontakte und Notizen pro Firma", "Anforderungen als Matching-Grundlage", "Keine verstreuten Excel-Listen mehr"]}
        iconName="building"
        mockTitle="Arbeitgeberprofil"
        mockLines={["Branche & Standort", "Offene Stellen", "Ansprechpartner"]}
      />
      <AltSection
        reverse
        light={false}
        eyebrow="Stellen & Freigaben"
        title="Stellen werden zur Matching-Basis."
        text="Rollen, Skills, Sprache, Standort und Verfügbarkeit werden strukturiert hinterlegt. Anonyme Kandidatenvorschläge lassen sich kontrolliert und DSGVO-konform teilen."
        bullets={["Strukturierte Stellenanforderungen", "Anonyme CV-Freigaben pro Stelle", "Kontrolle darüber, wer was sieht"]}
        iconName="briefcase"
        mockTitle="Stellenverwaltung"
        mockLines={["Anforderungen", "Passende Kandidaten", "Freigabe-Status"]}
      />
      <FAQSection
        items={[
          { question: "Wie lege ich einen Arbeitgeber an?", answer: "Arbeitgeber werden mit Kontakten, Branche, Anforderungen und offenen Stellen als eigenes Profil angelegt und wachsen über die Zeit mit." },
          { question: "Kann ich Kandidaten anonym teilen?", answer: "Ja. Anonyme, geprüfte CVs lassen sich pro Stelle freigeben, bevor personenbezogene Daten sichtbar werden." },
          { question: "Sehen Arbeitgeber nur ihre eigenen Daten?", answer: "Freigaben sind kontrolliert: Du bestimmst, welche Kandidaten und Informationen ein Arbeitgeber sieht." },
          { question: "Lassen sich Stellen für das Matching nutzen?", answer: "Rollen, Skills, Sprache und Verfügbarkeit dienen direkt als Grundlage für das KI-Matching." },
        ]}
      />
      <FooterCTA />
    </>
  );
}

