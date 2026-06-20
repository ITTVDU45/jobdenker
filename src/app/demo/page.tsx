import { CalendarDays, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/ui/PageBlocks";
import { Section } from "@/components/ui/Section";

export default function DemoPage() {
  return (
    <>
      <PageHero eyebrow="Demo buchen" title="Sieh Jobdenker in Aktion." subtitle="In 30 Minuten zeigen wir dir, wie Kandidaten, Arbeitgeber, KI-Matching und Automatisierung zusammenspielen." />
      <Section className="bg-brand-bgLight">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex min-h-96 items-center justify-center rounded-2xl border border-brand-border bg-white p-8 text-center">
            <div>
              <CalendarDays className="mx-auto mb-4 size-12 text-brand-greenDark" />
              <h2 className="font-heading text-2xl font-bold">Calendly-Platzhalter</h2>
              <p className="mt-3 text-brand-muted">Hier kann später dein Buchungstool eingebettet werden.</p>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-8">
            <h2 className="font-heading text-3xl font-bold">Was du in der Demo siehst</h2>
            {["Bewerberprofil aus Dokumenten erzeugen", "Matching-Score nachvollziehen", "Anonymen CV generieren", "Akquise-Agent Workflow", "Portale für Arbeitgeber und Bewerber"].map((item) => (
              <p key={item} className="mt-5 flex items-center gap-3 font-semibold"><CheckCircle2 className="size-5 text-brand-emerald" />{item}</p>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
