import { PageHero } from "@/components/ui/PageBlocks";
import { Section } from "@/components/ui/Section";

export default function ImpressumPage() {
  return (
    <>
      <PageHero eyebrow="Rechtliches" title="Impressum" subtitle="Platzhalter für Anbieterkennzeichnung." />
      <Section><p className="mx-auto max-w-3xl leading-8 text-brand-muted">Bitte vor Launch mit vollständigen Unternehmensdaten, Adresse, Vertretungsberechtigten und Kontaktangaben befüllen.</p></Section>
    </>
  );
}

