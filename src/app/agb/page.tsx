import { PageHero } from "@/components/ui/PageBlocks";
import { Section } from "@/components/ui/Section";

export default function AgbPage() {
  return (
    <>
      <PageHero eyebrow="Rechtliches" title="AGB" subtitle="Platzhalter für die finalen Nutzungsbedingungen." />
      <Section><p className="mx-auto max-w-3xl leading-8 text-brand-muted">Die AGB sollten passend zum späteren SaaS-, Billing- und Credit-Modell erstellt und geprüft werden.</p></Section>
    </>
  );
}

