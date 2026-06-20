import { FooterCTA } from "@/components/ui/HomeSections";
import { AltSection, CardsSection, FAQSection, PageHero, ProcessTimeline } from "@/components/ui/PageBlocks";

const items = [
  { title: "Lead-Pipeline", text: "Arbeitgeberkontakte werden von Quelle bis Abschluss nachvollziehbar." },
  { title: "Akquise-Runs", text: "Scraping, Enrichment und Outreach laufen als strukturierte Kampagnen." },
  { title: "Templates", text: "Sales-Nachrichten bleiben konsistent und dennoch personalisiert." },
  { title: "Tracking", text: "Antworten, Bounces und Follow-ups werden sichtbar." },
];

export default function VertriebPage() {
  return (
    <>
      <PageHero eyebrow="Vertrieb" title="Akquise, die nicht bei Null beginnt." subtitle="Das Vertriebsportal findet Bedarf, qualifiziert Arbeitgeber und hält Outreach sauber nach." />
      <CardsSection title="Eine Pipeline für Arbeitgeberwachstum." items={items} light={false} />
      <ProcessTimeline steps={["Zielprofil definieren", "Stellenquellen scannen", "Kontakte anreichern", "Outreach starten", "Antworten nachverfolgen"]} />
      <AltSection
        eyebrow="Bedarf finden, bevor andere anrufen"
        title="Akquise startet nicht bei Null."
        text="Statt Kaltliste findet das Vertriebsportal echten Bedarf: passende offene Stellen werden gescannt, Firmen qualifiziert und mit Kontaktdaten angereichert."
        bullets={["Echter Bedarf statt Zufallskontakte", "Firmen automatisch qualifiziert", "Kontakte angereichert und einsatzbereit"]}
        iconName="megaphone"
        mockTitle="Akquise-Run"
        mockLines={["Stellen gescannt", "Firmen qualifiziert", "Kontakte bereit"]}
      />
      <AltSection
        reverse
        light={false}
        eyebrow="Outreach mit Nachverfolgung"
        title="Eine Pipeline, die nichts verliert."
        text="Outreach läuft über konsistente, personalisierte Templates. Antworten, Bounces und Follow-ups bleiben in einer Pipeline sichtbar, sodass kein Lead untergeht."
        bullets={["Konsistente, personalisierte Templates", "Antworten und Bounces im Blick", "Follow-ups strukturiert nachverfolgt"]}
        iconName="lineChart"
        mockTitle="Sales-Pipeline"
        mockLines={["Kontaktiert", "In Gespräch", "Follow-up"]}
      />
      <FAQSection
        items={[
          { question: "Wie findet das Portal passende Arbeitgeber?", answer: "Es scannt Stellenquellen nach echtem Bedarf, qualifiziert Firmen und reichert Kontaktdaten an." },
          { question: "Bleiben Sales-Nachrichten konsistent?", answer: "Ja. Templates sorgen für einheitliche Nachrichten, die dennoch personalisiert werden." },
          { question: "Sehe ich, was aus einem Lead wird?", answer: "Antworten, Bounces und Follow-ups bleiben in einer nachvollziehbaren Pipeline sichtbar." },
          { question: "Lässt sich Akquise als Kampagne fahren?", answer: "Scraping, Enrichment und Outreach laufen als strukturierte Akquise-Runs statt als Einzelaktionen." },
        ]}
      />
      <FooterCTA />
    </>
  );
}

