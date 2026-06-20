import { FooterCTA } from "@/components/ui/HomeSections";
import { AltSection, BeforeAfter, CardsSection, FAQSection, PageHero, ProcessTimeline } from "@/components/ui/PageBlocks";

const features = [
  { title: "Template-System", text: "Outreach-Vorlagen für unterschiedliche Branchen, Rollen und Zielgruppen." },
  { title: "Personalisierung", text: "KI ergänzt Kontext zur offenen Stelle und zum Unternehmen." },
  { title: "Statistiken", text: "Antworten, Bounces und nächste Schritte bleiben im Sales-Portal sichtbar." },
  { title: "Lead-Pipeline", text: "Jeder Arbeitgeber landet in einer nachvollziehbaren Pipeline." },
];

export default function AkquiseAgentPage() {
  return (
    <>
      <PageHero eyebrow="Akquise-Agent" title="Dein autonomer Sales-Agent. 24/7." subtitle="Job-Profil eingeben, offene Stellen finden, Kontakte anreichern und Outreach vorbereitet versenden." />
      <ProcessTimeline steps={["Job-Profil eingeben", "Indeed via Apify scrapen", "Kontakte KI-gestützt enrichieren", "Outreach-Template auswählen", "Automatisch versenden und tracken"]} />
      <BeforeAfter />
      <CardsSection title="Sales-Automation mit Kontrolle." items={features} light={false} />
      <AltSection
        eyebrow="Der Agent arbeitet vor"
        title="Stellen finden, Firmen anreichern."
        text="Der Akquise-Agent durchsucht Quellen wie Indeed, findet passenden Bedarf und reichert Firmen- und Kontaktdaten an, damit dein Vertrieb nie bei Null startet."
        bullets={["Automatisches Scraping passender Stellen", "Firmen- und Kontaktdaten KI-gestützt angereichert", "Qualifizierte Leads statt Kaltliste"]}
        iconName="bot"
        mockTitle="Akquise-Run"
        mockLines={["Stellen gefunden", "Firmen angereichert", "Kontakte bereit"]}
      />
      <AltSection
        reverse
        light={false}
        eyebrow="Outreach mit Nachverfolgung"
        title="Personalisiert versenden, sauber tracken."
        text="Passende Templates werden mit Kontext zur Stelle und zum Unternehmen angereichert. Antworten, Bounces und Follow-ups bleiben in einer nachvollziehbaren Pipeline."
        bullets={["Templates mit KI-Personalisierung", "Antworten und Bounces im Blick", "Jeder Lead in einer klaren Pipeline"]}
        iconName="lineChart"
        mockTitle="Outreach-Pipeline"
        mockLines={["Versendet", "Geantwortet", "Follow-up"]}
      />
      <FAQSection
        items={[
          { question: "Woher kommen die Leads?", answer: "Der Agent scrapt passende offene Stellen, zum Beispiel über Indeed via Apify, und reichert die zugehörigen Firmen an." },
          { question: "Wird der Outreach personalisiert?", answer: "Ja. Die KI ergänzt Kontext zur offenen Stelle und zum Unternehmen, sodass Nachrichten relevant statt generisch wirken." },
          { question: "Behalte ich die Kontrolle über den Versand?", answer: "Outreach läuft über Templates und eine nachvollziehbare Pipeline, sodass jeder Schritt sichtbar und steuerbar bleibt." },
          { question: "Sehe ich, was funktioniert?", answer: "Antworten, Bounces und nächste Schritte bleiben im Sales-Portal sichtbar und messbar." },
        ]}
      />
      <FooterCTA />
    </>
  );
}

