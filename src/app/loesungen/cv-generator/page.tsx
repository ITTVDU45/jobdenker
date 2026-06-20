import { FooterCTA } from "@/components/ui/HomeSections";
import { CardsSection, PageHero, ProcessTimeline } from "@/components/ui/PageBlocks";

const features = [
  { title: "Anonymisierung", text: "Sensible Daten bleiben bis zur Freigabe geschützt." },
  { title: "Mehrsprachig", text: "CVs für DE, EN und TR lassen sich aus einem Profil erzeugen." },
  { title: "PDF in 30 Sekunden", text: "Geprüfte Daten werden direkt in professionelle Layouts übernommen." },
  { title: "Foto optional", text: "Templates passen sich an Arbeitgeber- und Datenschutzanforderungen an." },
];

export default function CvGeneratorPage() {
  return (
    <>
      <PageHero eyebrow="CV-Generator" title="Professionelle CVs. Anonym. In 30 Sekunden." subtitle="Aus strukturierten Profilen entstehen saubere Arbeitgeber-CVs, ohne Copy-Paste und Layoutstress." />
      <CardsSection title="CVs, die direkt nutzbar sind." items={features} light={false} />
      <ProcessTimeline steps={["Profil prüfen", "Template wählen", "Sprache festlegen", "PDF generieren"]} />
      <FooterCTA />
    </>
  );
}

