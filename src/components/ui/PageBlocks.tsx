"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  FileText,
  Globe2,
  HeartHandshake,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { MeshBlobs, MotionDiv, fadeLeft, fadeRight, fadeUp, stagger } from "@/components/ui/Motion";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

const cardIcons = {
  calendarCheck: CalendarCheck,
  fileText: FileText,
  globe2: Globe2,
  heartHandshake: HeartHandshake,
  messageCircle: MessageCircle,
  shieldCheck: ShieldCheck,
  sparkles: Sparkles,
  target: Target,
  usersRound: UsersRound,
  zap: Zap,
} as const;

type CardIconName = keyof typeof cardIcons;

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="bg-mesh relative overflow-hidden px-4 pb-16 pt-32 text-white md:px-8 md:pb-24 md:pt-40 lg:px-12">
      <MeshBlobs />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <MotionDiv initial="hidden" animate="visible" variants={stagger}>
          <MotionDiv variants={fadeUp}>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-greenLight">{eyebrow}</p>
          </MotionDiv>
          <MotionDiv variants={fadeUp}>
            <h1 className="mt-5 font-heading text-4xl font-bold tracking-tight text-balance md:text-6xl">{title}</h1>
          </MotionDiv>
          <MotionDiv variants={fadeUp}>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">{subtitle}</p>
          </MotionDiv>
          <MotionDiv variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/demo" variant="gradient">Demo buchen</ButtonLink>
            <ButtonLink href="/kontakt" variant="ghost" className="border border-white/30">Kontakt aufnehmen</ButtonLink>
          </MotionDiv>
        </MotionDiv>
        <motion.div initial="hidden" animate="visible" variants={fadeRight}>
          {children ?? <DashboardMock />}
        </motion.div>
      </div>
    </section>
  );
}

export function DashboardMock({ title = "Live Cockpit" }: { title?: string }) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      className="rounded-2xl border border-white/10 bg-card/80 p-4 shadow-2xl shadow-black/30 backdrop-blur"
    >
      <div className="rounded-xl bg-card p-5">
        <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
          <p className="font-heading text-xl font-semibold">{title}</p>
          <span className="rounded-full bg-brand-green/15 px-3 py-1 text-sm text-brand-greenLight">aktiv</span>
        </div>
        {["Qualifikation", "Sprache", "Erfahrung", "Verfügbarkeit"].map((item, index) => {
          const score = 92 - index * 2;
          return (
            <div key={item} className="mb-4">
              <div className="mb-2 flex justify-between text-sm">
                <span className="text-slate-300">{item}</span>
                <span>{score}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${score}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="h-2 rounded-full bg-lime-gradient"
                />
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export function ProcessTimeline({ steps }: { steps: readonly string[] }) {
  return (
    <Section className="bg-brand-bgLight" title="So läuft der Workflow." subtitle="Vom ersten Signal bis zur Platzierung bleibt jeder Schritt sichtbar.">
      <MotionDiv initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger} className="mx-auto max-w-4xl">
        {steps.map((step, index) => (
          <MotionDiv key={step} variants={fadeLeft} className="grid grid-cols-[3rem_1fr] gap-4">
            <div className="flex flex-col items-center">
              <span className="flex size-10 items-center justify-center rounded-full bg-lime-gradient font-heading font-bold text-white shadow-lg shadow-brand-green/20">{index + 1}</span>
              {index < steps.length - 1 && <span className="h-14 w-px bg-gradient-to-b from-brand-green/50 to-brand-border" />}
            </div>
            <div className="pb-8">
              <h3 className="font-heading text-xl font-semibold">{step}</h3>
              <p className="mt-2 leading-7 text-brand-muted">Jobdenker bereitet Daten, Status und nächste Aktion direkt im passenden Portal auf.</p>
            </div>
          </MotionDiv>
        ))}
      </MotionDiv>
    </Section>
  );
}

export function CardsSection({
  title,
  subtitle,
  items,
  light = true,
}: {
  title: string;
  subtitle?: string;
  items: readonly { title: string; text: string; iconName?: CardIconName }[];
  light?: boolean;
}) {
  return (
    <Section className={light ? "bg-white" : "bg-mesh-light"} title={title} subtitle={subtitle}>
      <MotionDiv initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger} className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => {
          const Icon = item.iconName ? cardIcons[item.iconName] : CheckCircle2;
          return (
            <MotionDiv key={item.title} variants={fadeUp} className="group rounded-2xl border border-brand-border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-green/40 hover:shadow-xl hover:shadow-brand-green/10">
              <div className="mb-4 inline-flex rounded-xl bg-lime-gradient p-3 text-white shadow-lg shadow-brand-green/20 transition group-hover:scale-110">
                <Icon className="size-6" />
              </div>
              <h3 className="font-heading text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-7 text-brand-muted">{item.text}</p>
            </MotionDiv>
          );
        })}
      </MotionDiv>
    </Section>
  );
}

export function BeforeAfter() {
  return (
    <Section title="Vorher viel Handarbeit. Nachher ein laufender Agent.">
      <MotionDiv initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger} className="grid gap-5 md:grid-cols-2">
        <MotionDiv variants={fadeLeft}>
          <CompareCard title="Vorher" points={["4 Stunden Akquise pro Tag", "Stellen manuell suchen", "Kontakte einzeln recherchieren", "Nachverfolgung in Tabellen"]} />
        </MotionDiv>
        <MotionDiv variants={fadeRight}>
          <CompareCard title="Nachher" positive points={["15 Minuten Setup", "Indeed-Scraping via Apify vorbereitet", "Kontakte KI-gestützt angereichert", "Outreach und Status im System"]} />
        </MotionDiv>
      </MotionDiv>
    </Section>
  );
}

function CompareCard({ title, points, positive }: { title: string; points: string[]; positive?: boolean }) {
  return (
    <div className={cn("h-full rounded-2xl border p-6", positive ? "border-brand-green/30 bg-brand-bgLight" : "border-red-200 bg-red-50")}>
      <h3 className="font-heading text-2xl font-bold">{title}</h3>
      <div className="mt-5 grid gap-3">
        {points.map((point) => (
          <p key={point} className="flex items-center gap-3 font-semibold">
            <CheckCircle2 className={cn("size-5", positive ? "text-brand-green" : "text-red-500")} />
            {point}
          </p>
        ))}
      </div>
    </div>
  );
}

export function LinkGrid({ items }: { items: readonly (readonly [string, string])[] }) {
  return (
    <MotionDiv initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={stagger} className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map(([label, href]) => (
        <MotionDiv key={href} variants={fadeUp}>
          <Link href={href} className="group flex h-full flex-col rounded-2xl border border-brand-border bg-white p-6 transition hover:-translate-y-1 hover:border-brand-green/40 hover:shadow-xl hover:shadow-brand-green/10">
            <span className="font-heading text-xl font-semibold">{label}</span>
            <span className="mt-4 flex items-center gap-2 text-sm font-semibold text-brand-greenDark">Mehr erfahren <ArrowRight className="size-4 transition group-hover:translate-x-1" /></span>
          </Link>
        </MotionDiv>
      ))}
    </MotionDiv>
  );
}
