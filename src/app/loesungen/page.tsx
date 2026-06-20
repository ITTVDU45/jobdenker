import { FooterCTA } from "@/components/ui/HomeSections";
import { LinkGrid, PageHero } from "@/components/ui/PageBlocks";
import { Section } from "@/components/ui/Section";
import { navSolutions } from "@/lib/site-data";

export default function SolutionsPage() {
  return (
    <>
      <PageHero eyebrow="Lösungen" title="Ein Betriebssystem für moderne Personalvermittlung." subtitle="Jobdenker bündelt Bewerbermanagement, KI-Matching, CV-Erstellung, Kommunikation, Akquise und Integrationen in einer Plattform." />
      <Section className="bg-brand-bgLight" title="Entdecke die Module." subtitle="Jedes Modul löst einen konkreten Bruch im Recruiting-Prozess.">
        <LinkGrid items={navSolutions} />
      </Section>
      <FooterCTA />
    </>
  );
}

