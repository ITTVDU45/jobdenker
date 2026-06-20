import { FAQListSection, FAQPinboardSection, FooterCTA } from "@/components/ui/HomeSections";
import { PageHero } from "@/components/ui/PageBlocks";
import { faqItems } from "@/lib/site-data";

export default function FAQPage() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Antworten auf die wichtigsten Fragen." subtitle="Alles rund um Jobdenker, KI-Workflows, Matching, Portale, Kommunikation und Integrationen." />
      <FAQPinboardSection
        items={faqItems.slice(0, 4)}
        title="Die vier häufigsten Fragen zuerst."
        subtitle="Kurz erklärt, damit du schnell einschätzen kannst, wie Jobdenker in deinen Prozess passt."
        showMoreButton={false}
      />
      <FAQListSection items={faqItems} />
      <FooterCTA />
    </>
  );
}
