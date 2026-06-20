import { FooterCTA } from "@/components/ui/HomeSections";
import { AltSection, CardsSection, DashboardMock, FAQSection, PageHero, ProcessTimeline } from "@/components/ui/PageBlocks";

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
      <AltSection
        eyebrow="Erklärbarer Score"
        title="Ein Match, der sich begründen lässt."
        text="Jeder Score zeigt, warum ein Kandidat passt: über Qualifikation, Sprache, Erfahrung und Verfügbarkeit. So wird aus einer Zahl eine echte Entscheidungshilfe."
        bullets={["Transparente Gewichtung statt Blackbox", "Begründung pro Kandidat und Stelle", "Score direkt für Shortlists nutzbar"]}
        iconName="target"
        mockTitle="Matching Score"
        mockLines={["Qualifikation", "Sprache", "Verfügbarkeit"]}
      />
      <AltSection
        reverse
        light={false}
        eyebrow="Von Shortlist zu Entscheidung"
        title="Top-Vorschläge pro offener Stelle."
        text="Statt Stunden mit Screening zu verbringen, erhältst du sofort die stärksten Kandidaten je Stelle, sortiert nach Fit und bereit für die nächste Aktion."
        bullets={["Top-Matches automatisch sortiert", "Weniger manuelles Vorsortieren", "Schnellere, fundierte Entscheidungen"]}
        iconName="barChart"
        mockTitle="Top-Kandidaten"
        mockLines={["Pflegefachkraft", "Logistik-Leitung", "Elektrohelfer"]}
      />
      <FAQSection
        items={[
          { question: "Wie schnell liefert das Matching Ergebnisse?", answer: "Kandidaten werden in Sekunden bewertet, statt manuell über Stunden gesichtet zu werden." },
          { question: "Welche Kriterien fließen in den Score ein?", answer: "Qualifikation, Sprache, Erfahrung und Verfügbarkeit werden gewichtet und gemeinsam bewertet." },
          { question: "Ist der Score nachvollziehbar?", answer: "Ja. Zu jedem Match gibt es eine Begründung, warum ein Kandidat zu einer Stelle passt." },
          { question: "Kann ich Gewichtungen anpassen?", answer: "Das Matching ist auf operative Steuerung ausgelegt, sodass relevante Dimensionen je nach Bedarf priorisiert werden können." },
        ]}
      />
      <FooterCTA />
    </>
  );
}

