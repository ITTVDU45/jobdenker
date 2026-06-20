import { FooterCTA } from "@/components/ui/HomeSections";
import { CardsSection, PageHero } from "@/components/ui/PageBlocks";
import { Section } from "@/components/ui/Section";
import { valueCards } from "@/lib/site-data";

export default function UeberUnsPage() {
  return (
    <>
      <PageHero eyebrow="Über uns" title="Recruiting sollte so smart sein wie die Menschen dahinter." subtitle="Jobdenker entsteht aus der Praxis internationaler Personalvermittlung: viele Rollen, viele Dokumente, viele Sprachen und zu viele manuelle Übergaben." />
      <Section title="Unsere Mission.">
        <div className="mx-auto max-w-3xl text-lg leading-8 text-brand-muted">
          <p>Wir bauen Jobdenker, damit Vermittlungsteams ihre Zeit wieder in Beziehungen, Qualität und Entscheidungen investieren können.</p>
          <p className="mt-5">KI übernimmt Strukturarbeit: Dokumente auslesen, Matching erklären, CVs erzeugen, Akquise vorbereiten und Status sichtbar machen.</p>
        </div>
      </Section>
      <CardsSection title="Unsere Werte." items={valueCards} light={false} />
      <FooterCTA />
    </>
  );
}

