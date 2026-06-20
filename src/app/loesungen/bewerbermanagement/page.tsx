import { FooterCTA } from "@/components/ui/HomeSections";
import { AltSection, CardsSection, FAQSection, PageHero, ProcessTimeline } from "@/components/ui/PageBlocks";

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
      <AltSection
        eyebrow="Strukturierte Profile"
        title="Aus Dokumenten werden saubere Profile."
        text="CV, Pass, Zertifikate und Freitext werden automatisch ausgelesen und in ein einheitliches Kandidatenprofil übersetzt. Kein Abtippen, keine doppelte Datenpflege."
        bullets={["Automatische Extraktion aus PDF und Bild", "Pflichtfelder und Lücken sofort erkennbar", "Ein Profil als verlässliche Datenbasis"]}
        iconName="brain"
        mockTitle="KI-Profilanalyse"
        mockLines={["Lebenslauf erkannt", "Skills extrahiert", "Dokumente geprüft"]}
      />
      <AltSection
        reverse
        light={false}
        eyebrow="Status & Dokumente"
        title="Jeder Schritt bleibt sichtbar."
        text="Von der ersten Bewerbung über Vermittlung und Visa bis zum Onboarding läuft alles in einem Verlauf. Fehlende oder abgelaufene Dokumente fallen sofort auf."
        bullets={["Status pro Kandidat auf einen Blick", "Hinweis bei abgelaufenen Dokumenten", "Lückenlose Historie am Profil"]}
        iconName="workflow"
        mockTitle="Status-Verlauf"
        mockLines={["Bewerbung erfasst", "Matching aktiv", "Onboarding"]}
      />
      <FAQSection
        items={[
          { question: "Welche Dokumente kann Jobdenker auslesen?", answer: "Lebensläufe, Pässe, Zeugnisse und Zertifikate als PDF oder Bild werden automatisch in strukturierte Profildaten übersetzt." },
          { question: "Sehe ich, welche Dokumente fehlen?", answer: "Ja. Fehlende, geprüfte und abgelaufene Dokumente sind pro Kandidat sofort sichtbar, inklusive Hinweis für den nächsten Schritt." },
          { question: "Bleiben Notizen und Verlauf erhalten?", answer: "Alle Statuswechsel, Notizen und Aktionen bleiben am Profil dokumentiert und sind jederzeit nachvollziehbar." },
          { question: "Ist die Verarbeitung DSGVO-konform?", answer: "Daten werden strukturiert und zugriffsgesteuert verarbeitet. Personenbezogene Informationen werden erst nach klarer Freigabe weitergegeben." },
        ]}
      />
      <FooterCTA />
    </>
  );
}

