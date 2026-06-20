import { FooterCTA } from "@/components/ui/HomeSections";
import { CardsSection, PageHero } from "@/components/ui/PageBlocks";

const items = [
  { title: "Profil pflegen", text: "Kandidaten aktualisieren Stammdaten, Berufserfahrung und Sprachkenntnisse." },
  { title: "Dokumente hochladen", text: "CV, Pass und Zertifikate landen direkt im System." },
  { title: "Status sehen", text: "Bewerbungs-, Matching-, Visa- und Onboarding-Status bleiben transparent." },
  { title: "Mehrsprachig", text: "Prozesse und Kommunikation können international ausgerollt werden." },
];

export default function BewerberPage() {
  return (
    <>
      <PageHero eyebrow="Bewerber" title="Mehr Überblick für Kandidaten." subtitle="Ein Bewerberportal für Dokumente, Status und Kommunikation. Einfach genug für internationale Prozesse." />
      <CardsSection title="Weniger Rückfragen, mehr Klarheit." items={items} light={false} />
      <FooterCTA />
    </>
  );
}

