import { FooterCTA } from "@/components/ui/HomeSections";
import { AltSection, CardsSection, FAQSection, PageHero, ProcessTimeline } from "@/components/ui/PageBlocks";

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
      <AltSection
        eyebrow="Vom Profil zum PDF"
        title="Geprüfte Daten, fertiges Layout."
        text="Aus dem Kandidatenprofil entsteht in Sekunden ein sauberer Arbeitgeber-CV. Kein Copy-Paste, kein Formatieren, keine Layout-Diskussion mehr."
        bullets={["Profil-Daten direkt ins Template", "Professionelle Layouts auf Knopfdruck", "PDF-Export in unter einer Minute"]}
        iconName="fileText"
        mockTitle="CV-Export"
        mockLines={["Daten übernommen", "Layout gewählt", "PDF erzeugt"]}
      />
      <AltSection
        reverse
        light={false}
        eyebrow="Anonym & mehrsprachig"
        title="Schützt Daten bis zur Freigabe."
        text="CVs lassen sich anonymisiert und mehrsprachig erzeugen. Sensible Informationen werden erst sichtbar, wenn du sie freigibst, und passen sich an Datenschutzanforderungen an."
        bullets={["Anonymisierte Arbeitgeber-CVs", "Mehrsprachig aus einem Profil (DE, EN, TR)", "Foto und Felder optional je nach Vorgabe"]}
        iconName="shieldCheck"
        mockTitle="Anonymer CV"
        mockLines={["Name verborgen", "Sprache: EN", "Freigabe-bereit"]}
      />
      <FAQSection
        items={[
          { question: "Wie lange dauert die CV-Erstellung?", answer: "Aus geprüften Profildaten entsteht ein fertiger PDF-CV in etwa 30 Sekunden." },
          { question: "Sind die CVs wirklich anonym?", answer: "Ja. Sensible und personenbezogene Daten bleiben bis zur ausdrücklichen Freigabe geschützt." },
          { question: "Welche Sprachen werden unterstützt?", answer: "Aus einem Profil lassen sich mehrsprachige CVs erzeugen, zum Beispiel Deutsch, Englisch und Türkisch." },
          { question: "Kann ich das Layout an Arbeitgeber anpassen?", answer: "Templates passen sich an Arbeitgeber- und Datenschutzanforderungen an, inklusive optionalem Foto." },
        ]}
      />
      <FooterCTA />
    </>
  );
}

