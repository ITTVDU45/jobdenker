import { FooterCTA } from "@/components/ui/HomeSections";
import { LinkGrid, PageHero } from "@/components/ui/PageBlocks";
import { Section } from "@/components/ui/Section";
import { navPortals } from "@/lib/site-data";

export default function PortalePage() {
  return (
    <>
      <PageHero eyebrow="Portale" title="Für jede Rolle die passende Ansicht." subtitle="Personalvermittler, Arbeitgeber, Bewerber und Vertrieb arbeiten auf derselben Datenbasis mit eigenen Workflows." />
      <Section className="bg-brand-bgLight" title="Wähle dein Portal.">
        <LinkGrid items={navPortals} />
      </Section>
      <FooterCTA />
    </>
  );
}

