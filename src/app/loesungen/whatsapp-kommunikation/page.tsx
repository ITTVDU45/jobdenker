import { FooterCTA } from "@/components/ui/HomeSections";
import { AltSection, CardsSection, FAQSection, PageHero } from "@/components/ui/PageBlocks";

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
      <AltSection
        eyebrow="Im Lieblingskanal der Kandidaten"
        title="Erreiche Bewerber dort, wo sie antworten."
        text="Über die WhatsApp Cloud API erhalten Kandidaten Updates, Erinnerungen und Rückfragen im Kanal, den sie täglich nutzen. Das verkürzt Reaktionszeiten spürbar."
        bullets={["Höhere Antwortquote als per E-Mail", "Erinnerungen und Status-Updates automatisiert", "Schnellere Reaktion in jeder Phase"]}
        iconName="messageCircle"
        mockTitle="WhatsApp-Bot"
        mockLines={["Nachricht zugestellt", "Dokument angefragt", "Antwort erhalten"]}
      />
      <AltSection
        reverse
        light={false}
        eyebrow="Flows statt Chaos"
        title="Kommunikation bleibt am Profil."
        text="Chatbot-Flows strukturieren Dokumente, Rückfragen und Statusupdates. Jede Konversation bleibt am Kandidatenprofil dokumentiert, statt in privaten Chats verloren zu gehen."
        bullets={["Vorgefertigte Flows für Standardfälle", "Vollständige Historie am Profil", "Keine verstreuten Screenshots mehr"]}
        iconName="workflow"
        mockTitle="Chat-Flow"
        mockLines={["Begrüßung", "Dokumenten-Check", "Status-Update"]}
      />
      <FAQSection
        items={[
          { question: "Brauche ich einen WhatsApp-Business-Zugang?", answer: "Die Kommunikation läuft über die WhatsApp Cloud API, die für geschäftliche Kandidatenkommunikation ausgelegt ist." },
          { question: "Bleibt die Kommunikation dokumentiert?", answer: "Ja. Jede Konversation bleibt zentral am Kandidatenprofil und geht nicht in privaten Chats verloren." },
          { question: "Kann ich wiederkehrende Abläufe automatisieren?", answer: "Chatbot-Flows strukturieren Dokumente, Rückfragen und Statusupdates, sodass Standardfälle automatisch laufen." },
          { question: "Funktioniert das auch mehrsprachig?", answer: "Ja. Die Kommunikation kann mehrsprachig ausgerollt werden, passend zu internationalen Prozessen." },
        ]}
      />
      <FooterCTA />
    </>
  );
}

