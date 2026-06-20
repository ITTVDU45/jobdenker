import { FooterCTA } from "@/components/ui/HomeSections";
import { AltSection, CardsSection, FAQSection, PageHero } from "@/components/ui/PageBlocks";

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
      <AltSection
        eyebrow="Transparenz für Kandidaten"
        title="Immer wissen, was als Nächstes kommt."
        text="Bewerber pflegen ihr Profil, laden Dokumente hoch und sehen jederzeit, in welcher Phase ihre Bewerbung steht. Das reduziert Rückfragen und schafft Vertrauen."
        bullets={["Profil und Dokumente selbst pflegen", "Bewerbungs- und Visa-Status jederzeit sichtbar", "Weniger Rückfragen, mehr Klarheit"]}
        iconName="globe2"
        mockTitle="Bewerber-Portal"
        mockLines={["Profil aktuell", "Dokumente hochgeladen", "Status sichtbar"]}
      />
      <AltSection
        reverse
        light={false}
        eyebrow="Mehrsprachig begleitet"
        title="Einfach genug für internationale Prozesse."
        text="Prozesse und Kommunikation lassen sich mehrsprachig ausrollen. Kandidaten werden in ihrer Sprache abgeholt, inklusive Updates per WhatsApp im gewohnten Kanal."
        bullets={["Mehrsprachige Begleitung im Prozess", "Updates im bevorzugten Kanal", "Klarer Weg von Bewerbung bis Onboarding"]}
        iconName="languages"
        mockTitle="Begleitung"
        mockLines={["Sprache gewählt", "WhatsApp-Update", "Nächster Schritt"]}
      />
      <FAQSection
        items={[
          { question: "Was können Bewerber im Portal tun?", answer: "Stammdaten und Sprachkenntnisse pflegen, Dokumente hochladen und jederzeit den aktuellen Status sehen." },
          { question: "Sehe ich, wie es mit meiner Bewerbung weitergeht?", answer: "Ja. Bewerbungs-, Matching-, Visa- und Onboarding-Status bleiben transparent." },
          { question: "Funktioniert das auch in anderen Sprachen?", answer: "Prozesse und Kommunikation können mehrsprachig ausgerollt werden, passend zu internationalen Vermittlungen." },
          { question: "Werde ich über Updates informiert?", answer: "Ja. Updates können im bevorzugten Kanal wie WhatsApp zugestellt und am Profil dokumentiert werden." },
        ]}
      />
      <FooterCTA />
    </>
  );
}

