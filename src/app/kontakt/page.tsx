"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { PageHero } from "@/components/ui/PageBlocks";
import { Section } from "@/components/ui/Section";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  role: z.string(),
  message: z.string().min(10),
});

type ContactValues = z.infer<typeof schema>;

export default function KontaktPage() {
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful } } = useForm<ContactValues>({ resolver: zodResolver(schema) });
  return (
    <>
      <PageHero eyebrow="Kontakt" title="Meld dich bei uns." subtitle="Sag uns kurz, wer du bist und welchen Recruiting-Prozess du modernisieren möchtest." />
      <Section className="bg-brand-bgLight">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <form onSubmit={handleSubmit(() => undefined)} className="grid gap-4 rounded-2xl border border-brand-border bg-white p-6">
            <Input label="Name" error={errors.name?.message} {...register("name")} />
            <Input label="E-Mail" error={errors.email?.message} {...register("email")} />
            <Input label="Firma" error={errors.company?.message} {...register("company")} />
            <label className="grid gap-2 text-sm font-semibold">Ich bin...
              <select className="rounded-xl border border-brand-border px-4 py-3" {...register("role")}>
                <option>Personalvermittler</option>
                <option>Arbeitgeber</option>
                <option>Bewerber</option>
                <option>Sonstiges</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-semibold">Nachricht
              <textarea className="min-h-36 rounded-xl border border-brand-border px-4 py-3" {...register("message")} />
              {errors.message && <span className="text-xs text-red-500">Bitte mindestens 10 Zeichen eingeben.</span>}
            </label>
            <button className="rounded-xl bg-lime-gradient px-5 py-3 font-semibold text-white shadow-lg shadow-brand-green/25 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-green/35">Nachricht senden</button>
            {isSubmitSuccessful && <p className="text-sm font-semibold text-brand-emerald">Danke. Das Formular ist als Frontend-Stub vorbereitet.</p>}
          </form>
          <div className="bg-mesh relative overflow-hidden rounded-2xl p-8 text-white">
            <h2 className="font-heading text-3xl font-bold">Direkter Draht</h2>
            <p className="mt-4 text-slate-300">E-Mail: hello@jobdenker.de</p>
            <p className="mt-2 text-slate-300">Telefon: +49 000 000000</p>
            <p className="mt-2 text-slate-300">Standort: Deutschland</p>
          </div>
        </div>
      </Section>
    </>
  );
}

function Input({ label, error, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string }) {
  return (
    <label className="grid gap-2 text-sm font-semibold">
      {label}
      <input className="rounded-xl border border-brand-border px-4 py-3" {...props} />
      {error && <span className="text-xs text-red-500">Bitte korrekt ausfüllen.</span>}
    </label>
  );
}

