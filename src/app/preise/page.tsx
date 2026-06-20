import { FooterCTA, PricingCards } from "@/components/ui/HomeSections";
import { PageHero } from "@/components/ui/PageBlocks";
import { Section } from "@/components/ui/Section";
import { CheckCircle2, Minus } from "lucide-react";

const rows = [
  ["KI-Dokumentenanalyse", true, true, true],
  ["Basis-Matching", true, true, true],
  ["Alle Portale", false, true, true],
  ["Akquise-Agent", false, true, true],
  ["White-Label", false, false, true],
  ["Dedizierter Support", false, false, true],
];

export default function PreisePage() {
  return (
    <>
      <PageHero eyebrow="Preise" title="Faire Preise für jede Teamgröße." subtitle="Starte schlank und erweitere Jobdenker, wenn dein Recruiting-Prozess wächst." />
      <PricingCards />
      <Section title="Feature-Vergleich." subtitle="Die wichtigsten Unterschiede auf einen Blick.">
        <div className="overflow-hidden rounded-2xl border border-brand-border bg-white">
          <div className="grid grid-cols-4 bg-brand-bgLight p-4 font-heading font-semibold">
            <span>Feature</span><span>Starter</span><span>Professional</span><span>Enterprise</span>
          </div>
          {rows.map(([feature, starter, pro, enterprise]) => (
            <div key={String(feature)} className="grid grid-cols-4 border-t border-brand-border p-4 text-sm">
              <span className="font-semibold">{feature}</span>
              {[starter, pro, enterprise].map((value, index) => value ? <CheckCircle2 key={index} className="size-5 text-brand-emerald" /> : <Minus key={index} className="size-5 text-brand-muted" />)}
            </div>
          ))}
        </div>
      </Section>
      <Section className="bg-brand-bgLight" title="Häufige Fragen.">
        <div className="mx-auto grid max-w-4xl gap-4">
          {["Kann ich monatlich kündigen?", "Wie funktionieren Credits?", "Ist Jobdenker DSGVO-konform?", "Gibt es Enterprise-Verträge?", "Können wir eigene Integrationen anbinden?", "Wann kommen MongoDB und MinIO ins Spiel?"].map((q) => (
            <details key={q} className="rounded-xl border border-brand-border bg-white p-5">
              <summary className="cursor-pointer font-heading font-semibold">{q}</summary>
              <p className="mt-3 leading-7 text-brand-muted">Ja. In der Demo klären wir den passenden Setup-, Betriebs- und Integrationsumfang für dein Team.</p>
            </details>
          ))}
        </div>
      </Section>
      <FooterCTA />
    </>
  );
}

