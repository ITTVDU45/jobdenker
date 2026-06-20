import { FooterCTA } from "@/components/ui/HomeSections";
import { BeforeAfter, CardsSection, PageHero, ProcessTimeline } from "@/components/ui/PageBlocks";

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
      <FooterCTA />
    </>
  );
}

