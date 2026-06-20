import { FooterCTA } from "@/components/ui/HomeSections";
import { AltSection, CardsSection, FAQSection, PageHero, ProcessTimeline } from "@/components/ui/PageBlocks";
import { adminFeatures, processSteps } from "@/lib/site-data";

export default function PersonalvermittlerPage() {
  return (
    <>
      <PageHero eyebrow="Personalvermittler" title="Dein komplettes Recruiting-Cockpit." subtitle="Bewerber, Matching, CVs, Akquise, WhatsApp und Visa-Prozesse in einem Admin-Portal." />
      <CardsSection title="Alles, was Backoffice und Vermittlung brauchen." items={adminFeatures} light={false} />
      <ProcessTimeline steps={processSteps} />
      <AltSection
        eyebrow="Ein Cockpit für alles"
        title="Schluss mit dem Tool-Wirrwarr."
        text="Bewerber, Dokumente, Matching, CV-Export, Akquise und Kommunikation laufen in einem Admin-Portal zusammen. Dein Team arbeitet auf einer Datenbasis statt in fünf Tools."
        bullets={["Alle Kandidaten und Aufgaben an einem Ort", "Ein Datenmodell für das ganze Team", "Weniger Übergaben, weniger Fehler"]}
        iconName="usersRound"
        mockTitle="Vermittler-Cockpit"
        mockLines={["Bewerber", "Matching", "CV-Export"]}
      />
      <AltSection
        reverse
        light={false}
        eyebrow="Schneller vermitteln"
        title="Von der Aufnahme bis zur Platzierung."
        text="Jeder Schritt vom Lead über Dokumente und Matching bis zur Visa-Begleitung ist sichtbar. So bleibt der Prozess steuerbar und Platzierungen werden planbarer."
        bullets={["Status pro Kandidat und Platzierung", "Visa- und Dokumentenstatus im Blick", "Klare nächste Aktion in jedem Schritt"]}
        iconName="rocket"
        mockTitle="Platzierungs-Flow"
        mockLines={["Lead erfasst", "Matching aktiv", "Platzierung"]}
      />
      <FAQSection
        items={[
          { question: "Für wen ist das Vermittler-Portal gedacht?", answer: "Für Personalvermittler und Recruiting-Teams, die Bewerber, Matching, CVs, Akquise und Kommunikation zentral steuern wollen." },
          { question: "Arbeiten alle auf derselben Datenbasis?", answer: "Ja. Alle Module greifen auf ein gemeinsames Datenmodell zu, sodass Übergaben sauber bleiben." },
          { question: "Kann ich Visa- und Dokumentenprozesse abbilden?", answer: "Status für internationale Vermittlungsprozesse inklusive Visa und Dokumenten lässt sich durchgängig führen." },
          { question: "Wie starte ich am besten?", answer: "Am einfachsten über eine Demo, in der wir gemeinsam die wichtigsten Workflows für dein Team durchgehen." },
        ]}
      />
      <FooterCTA />
    </>
  );
}

