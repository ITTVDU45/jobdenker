import { FooterCTA } from "@/components/ui/HomeSections";
import { CardsSection, PageHero } from "@/components/ui/PageBlocks";

const items = [
  { title: "WhatsApp Cloud API", text: "Kandidaten erhalten Updates im Kanal, den sie wirklich nutzen." },
  { title: "Chatbot-Flows", text: "Dokumente, Rückfragen und Statusupdates lassen sich vorstrukturieren." },
  { title: "Zentrale Historie", text: "Kommunikation bleibt am Profil und geht nicht in privaten Chats verloren." },
];

export default function WhatsappPage() {
  return (
    <>
      <PageHero eyebrow="Kommunikation" title="WhatsApp-Kommunikation, die im System bleibt." subtitle="Schnelle Kandidatenkommunikation ohne Informationsverlust und ohne verstreute Screenshots." />
      <CardsSection title="Direkt, dokumentiert, mehrsprachig." items={items} light={false} />
      <FooterCTA />
    </>
  );
}

