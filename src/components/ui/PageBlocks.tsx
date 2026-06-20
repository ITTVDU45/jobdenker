"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Brain,
  Briefcase,
  Building2,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  CreditCard,
  Database,
  FileText,
  Globe2,
  HeartHandshake,
  Languages,
  LineChart,
  Megaphone,
  MessageCircle,
  Phone,
  Plug,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
  Workflow,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { MeshBlobs, MotionDiv, fadeLeft, fadeRight, fadeUp, stagger } from "@/components/ui/Motion";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

const cardIcons = {
  barChart: BarChart3,
  bot: Bot,
  brain: Brain,
  briefcase: Briefcase,
  building: Building2,
  calendarCheck: CalendarCheck,
  creditCard: CreditCard,
  database: Database,
  fileText: FileText,
  globe2: Globe2,
  handshake: HeartHandshake,
  heartHandshake: HeartHandshake,
  languages: Languages,
  lineChart: LineChart,
  megaphone: Megaphone,
  messageCircle: MessageCircle,
  phone: Phone,
  plug: Plug,
  rocket: Rocket,
  search: Search,
  shieldCheck: ShieldCheck,
  sparkles: Sparkles,
  target: Target,
  usersRound: UsersRound,
  workflow: Workflow,
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

function FeatureMock({ iconName, title, lines }: { iconName: CardIconName; title: string; lines: string[] }) {
  const Icon = cardIcons[iconName];
  return (
    <div className="relative mx-auto max-w-md">
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="rounded-2xl border border-brand-border bg-white p-5 shadow-xl shadow-brand-blue/10"
      >
        <div className="flex items-center justify-between border-b border-brand-border pb-4">
          <div className="flex items-center gap-3">
            <span className="bg-lime-gradient flex size-11 items-center justify-center rounded-xl text-brand-blue shadow-lg shadow-brand-green/20">
              <Icon className="size-5" />
            </span>
            <p className="font-heading font-semibold text-brand-blue">{title}</p>
          </div>
          <span className="flex items-center gap-1.5 rounded-full bg-brand-green/10 px-3 py-1 text-xs font-semibold text-brand-greenDark">
            <span className="size-2 rounded-full bg-brand-green" /> live
          </span>
        </div>
        <div className="mt-4 grid gap-3">
          {lines.map((line, index) => {
            const width = 92 - index * 16;
            return (
              <div key={line} className="rounded-xl bg-brand-bgLight p-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-brand-blue">{line}</span>
                  <span className="text-xs font-semibold text-brand-greenDark">{width}%</span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${width}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-lime-gradient h-1.5 rounded-full"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
        className="absolute -bottom-4 -right-3 flex items-center gap-2 rounded-xl bg-card px-4 py-2.5 text-sm font-semibold text-white shadow-xl"
      >
        <Sparkles className="size-4 text-brand-green" /> automatisiert
      </motion.div>
    </div>
  );
}

export type AltSectionProps = {
  reverse?: boolean;
  light?: boolean;
  eyebrow: string;
  title: string;
  text: string;
  bullets: string[];
  iconName: CardIconName;
  mockTitle: string;
  mockLines: string[];
};

export function AltSection({ reverse = false, light = true, eyebrow, title, text, bullets, iconName, mockTitle, mockLines }: AltSectionProps) {
  return (
    <section className={cn("px-4 py-16 md:px-8 md:py-24 lg:px-12", light ? "bg-white" : "bg-brand-bgLight")}>
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-14">
        <MotionDiv
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={reverse ? fadeRight : fadeLeft}
          className={cn("order-2", reverse ? "md:order-2" : "md:order-1")}
        >
          <FeatureMock iconName={iconName} title={mockTitle} lines={mockLines} />
        </MotionDiv>

        <MotionDiv
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={reverse ? fadeLeft : fadeRight}
          className={cn("order-1", reverse ? "md:order-1" : "md:order-2")}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-greenDark">{eyebrow}</p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance md:text-4xl">{title}</h2>
          <p className="mt-5 leading-8 text-brand-muted">{text}</p>
          <div className="mt-6 grid gap-3">
            {bullets.map((bullet) => (
              <div key={bullet} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-green" />
                <span className="font-semibold text-brand-blue">{bullet}</span>
              </div>
            ))}
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}

export function FAQSection({
  items,
  title = "Häufige Fragen",
  subtitle = "Was Teams vor dem Start am häufigsten wissen wollen.",
  light = true,
}: {
  items: readonly { question: string; answer: string }[];
  title?: string;
  subtitle?: string;
  light?: boolean;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <Section className={light ? "bg-white" : "bg-brand-bgLight"} title={title} subtitle={subtitle}>
      <div className="mx-auto max-w-3xl divide-y divide-brand-border overflow-hidden rounded-2xl border border-brand-border bg-white">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.question}>
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition hover:bg-brand-bgLight md:px-6"
                aria-expanded={isOpen}
              >
                <span className="font-heading font-semibold text-brand-blue">{item.question}</span>
                <ChevronDown className={cn("size-5 shrink-0 text-brand-muted transition", isOpen && "rotate-180 text-brand-greenDark")} />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 leading-7 text-brand-muted md:px-6">{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
