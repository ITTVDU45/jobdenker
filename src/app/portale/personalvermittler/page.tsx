import { FooterCTA } from "@/components/ui/HomeSections";
import { CardsSection, PageHero, ProcessTimeline } from "@/components/ui/PageBlocks";
import { adminFeatures, processSteps } from "@/lib/site-data";

export default function PersonalvermittlerPage() {
  return (
    <>
      <PageHero eyebrow="Personalvermittler" title="Dein komplettes Recruiting-Cockpit." subtitle="Bewerber, Matching, CVs, Akquise, WhatsApp und Visa-Prozesse in einem Admin-Portal." />
      <CardsSection title="Alles, was Backoffice und Vermittlung brauchen." items={adminFeatures} light={false} />
      <ProcessTimeline steps={processSteps} />
      <FooterCTA />
    </>
  );
}

