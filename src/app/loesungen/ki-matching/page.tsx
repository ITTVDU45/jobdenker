import { FooterCTA } from "@/components/ui/HomeSections";
import { CardsSection, DashboardMock, PageHero, ProcessTimeline } from "@/components/ui/PageBlocks";

const dimensions = [
  { title: "Qualifikation", text: "Skills, Zertifikate und Berufsprofil werden gegen konkrete Stellenanforderungen geprüft." },
  { title: "Sprache", text: "Sprachniveau und Kommunikationsbedarf fließen direkt in die Bewertung ein." },
  { title: "Erfahrung", text: "Stationen, Branchen und Einsatzbereiche werden mit Gewichtung verglichen." },
  { title: "Verfügbarkeit", text: "Startdatum, Standort, Visa-Status und Dokumente werden im Score berücksichtigt." },
];

export default function KiMatchingPage() {
  return (
    <>
      <PageHero eyebrow="KI-Matching" title="Der richtige Mensch. Die richtige Stelle." subtitle="Manuelles Screening kostet Tage. Jobdenker bewertet Kandidaten in Sekunden und erklärt, warum ein Match passt.">
        <DashboardMock title="Matching Score" />
      </PageHero>
      <CardsSection title="Vier Dimensionen statt Bauchgefühl." subtitle="Jeder Score ist nachvollziehbar und operational nutzbar." items={dimensions} light={false} />
      <ProcessTimeline steps={["Bewerber-Profil anlegen", "Offene Stelle definieren", "KI analysiert 4 Dimensionen", "Score, Begründung und Top-Matches erhalten"]} />
      <FooterCTA />
    </>
  );
}

