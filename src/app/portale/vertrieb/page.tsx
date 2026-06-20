import { FooterCTA } from "@/components/ui/HomeSections";
import { CardsSection, PageHero, ProcessTimeline } from "@/components/ui/PageBlocks";

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
      <FooterCTA />
    </>
  );
}

