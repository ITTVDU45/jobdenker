"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight, Bot, Brain, Briefcase, Check, CheckCircle2, ChevronLeft, ChevronRight, Cloud, CreditCard, Database, FileText, Globe2, LayoutGrid, Megaphone, MessageCircle, Paperclip, Phone, Plug, Search, ShieldCheck, Sparkles, Star, Target, TrendingUp, Users, X, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { AnimatedCounter, MeshBlobs, MotionDiv, fadeLeft, fadeRight, fadeUp, scaleIn, stagger } from "@/components/ui/Motion";
import { Section } from "@/components/ui/Section";
import { blogPosts, faqItems, features, plans, targetGroups, testimonials } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const featureIcons = {
  bot: Bot,
  brain: Brain,
  fileText: FileText,
  messageCircle: MessageCircle,
  plug: Plug,
  target: Target,
} as const;

export function MarqueeTrustBar() {
  const logos = ["People4Europe", "TalentBridge", "WorkNow", "HireOps", "DACH Recruit", "Meta Leads", "CareStaff", "EuroJobs"];
  return (
    <section className="overflow-hidden border-y border-brand-border bg-white py-10">
      <p className="mb-6 text-center text-sm font-semibold uppercase tracking-[0.18em] text-brand-muted">Vertrauen von Recruiting-Teams in DACH</p>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
        <div className="flex w-max animate-marquee gap-4 whitespace-nowrap">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={`${logo}-${index}`}
              className="min-w-48 rounded-xl border border-brand-border bg-white px-8 py-4 text-center font-heading font-semibold text-slate-500 shadow-sm transition hover:border-brand-green/40 hover:text-brand-greenDark"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type SpotlightPoint = { icon: typeof FileText; title: string; text: string };

function SpotlightRow({
  reverse = false,
  eyebrow,
  title,
  points,
  visual,
}: {
  reverse?: boolean;
  eyebrow: string;
  title: string;
  points: SpotlightPoint[];
  visual: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-3xl border border-brand-border bg-gradient-to-br from-brand-bgLight to-white p-6 shadow-sm md:p-10">
      <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
        {/* Visual */}
        <MotionDiv
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={reverse ? fadeRight : fadeLeft}
          className={cn("order-2", reverse ? "md:order-2" : "md:order-1")}
        >
          {visual}
        </MotionDiv>

        {/* Info */}
        <MotionDiv
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={reverse ? fadeLeft : fadeRight}
          className={cn("order-1", reverse ? "md:order-1" : "md:order-2")}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">{eyebrow}</p>
          <h3 className="mt-3 font-heading text-2xl font-bold tracking-tight text-balance md:text-3xl">{title}</h3>
          <div className="mt-7 grid gap-6">
            {points.map((point) => {
              const Icon = point.icon;
              return (
                <div key={point.title} className="flex gap-4">
                  <span className="bg-lime-gradient inline-flex size-11 shrink-0 items-center justify-center rounded-xl shadow-lg shadow-brand-green/20">
                    <Icon className="size-5 text-brand-blue" />
                  </span>
                  <div>
                    <h4 className="font-heading text-lg font-semibold">{point.title}</h4>
                    <p className="mt-1 leading-7 text-brand-muted">{point.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </MotionDiv>
      </div>
    </div>
  );
}

function ProfileMock() {
  return (
    <div className="relative mx-auto max-w-md">
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="rounded-2xl border border-brand-border bg-white p-5 shadow-xl shadow-brand-blue/10"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="bg-lime-gradient flex size-10 items-center justify-center rounded-full font-heading font-bold text-brand-blue">A</span>
            <div>
              <p className="font-heading font-semibold text-brand-blue">Neues Bewerberprofil</p>
              <p className="text-xs text-brand-muted">aus Lebenslauf erstellt</p>
            </div>
          </div>
          <span className="bg-lime-gradient rounded-full px-3 py-1 text-xs font-semibold text-brand-blue">Neu</span>
        </div>

        <div className="mt-5 grid gap-3">
          {[
            ["Qualifikation", "Pflegefachkraft Intensiv"],
            ["Sprache", "Deutsch B2 · Englisch C1"],
            ["Verfügbarkeit", "ab sofort"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-xl bg-brand-bgLight p-3">
              <p className="text-xs uppercase tracking-wide text-brand-muted">{label}</p>
              <p className="mt-0.5 text-sm font-semibold text-brand-blue">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-lg border border-brand-border bg-white px-3 py-1.5 text-xs font-semibold text-brand-blue">
            <Paperclip className="size-3.5" /> Lebenslauf.pdf
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-lg border border-brand-border bg-white px-3 py-1.5 text-xs font-semibold text-brand-blue">
            <FileText className="size-3.5" /> Zertifikat.pdf
          </span>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute -bottom-5 -right-3 flex items-center gap-2 rounded-xl border border-brand-border bg-card px-4 py-2.5 text-sm font-semibold text-white shadow-xl"
      >
        <Sparkles className="size-4 text-brand-green" />
        KI liest aus …
      </motion.div>
    </div>
  );
}

function PipelineMock() {
  const tasks = [
    ["Dokumente analysiert", true],
    ["Profil vervollständigt", true],
    ["Matching gestartet", false],
  ] as const;
  return (
    <div className="relative mx-auto max-w-md">
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
        className="rounded-2xl border border-brand-border bg-white p-5 shadow-xl shadow-brand-blue/10"
      >
        <div className="flex items-center justify-between">
          <span className="bg-lime-gradient rounded-full px-3 py-1 text-xs font-semibold text-brand-blue">In Bearbeitung</span>
          <span className="text-xs font-semibold text-brand-muted">8 von 10 Schritten</span>
        </div>
        <h4 className="mt-4 font-heading text-lg font-semibold text-brand-blue">Matching: Pflegefachkraft Intensiv</h4>

        <div className="mt-3 h-2 overflow-hidden rounded-full bg-brand-bgLight">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-lime-gradient h-2 rounded-full"
          />
        </div>

        <div className="mt-5 grid gap-2.5">
          {tasks.map(([label, done]) => (
            <div key={label} className="flex items-center gap-3 rounded-xl bg-brand-bgLight px-3 py-2.5">
              <span className={cn("flex size-5 items-center justify-center rounded-md", done ? "bg-lime-gradient" : "border border-brand-border bg-white")}>
                {done && <Check className="size-3.5 text-brand-blue" />}
              </span>
              <span className={cn("text-sm font-semibold", done ? "text-brand-blue" : "text-brand-muted")}>{label}</span>
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div className="flex -space-x-2">
            {["A", "M", "S"].map((initial) => (
              <span key={initial} className="bg-lime-gradient flex size-7 items-center justify-center rounded-full border-2 border-white text-xs font-bold text-brand-blue">{initial}</span>
            ))}
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue">
            <Users className="size-4" /> Team vergeben
          </span>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
        className="absolute -top-4 -left-3 flex items-center gap-2 rounded-xl border border-brand-border bg-card px-4 py-2.5 text-sm font-semibold text-white shadow-xl"
      >
        <Target className="size-4 text-brand-green" />
        94% Fit
      </motion.div>
    </div>
  );
}

export function FeatureSpotlight() {
  return (
    <Section
      title="Ein Cockpit, das den ganzen Prozess trägt."
      subtitle="Von der Dokumentenanalyse bis zur Platzierung greift alles ineinander. Keine Brüche, keine Tool-Wechsel."
    >
      <MotionDiv initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={stagger} className="grid gap-6">
        <MotionDiv variants={fadeUp}>
          <SpotlightRow
            eyebrow="Bewerber & Dokumente"
            title="Profile entstehen automatisch aus Dokumenten."
            points={[
              { icon: FileText, title: "KI-Dokumentenanalyse", text: "CVs, Pässe und Zertifikate werden ausgelesen und in saubere, strukturierte Profile übersetzt." },
              { icon: ShieldCheck, title: "Anonyme CV-Generierung", text: "Mehrsprachige PDF-CVs für Arbeitgeberfreigaben, ohne sensible Daten zu früh offenzulegen." },
            ]}
            visual={<ProfileMock />}
          />
        </MotionDiv>

        <MotionDiv variants={fadeUp}>
          <SpotlightRow
            reverse
            eyebrow="Matching & Pipeline"
            title="Eine Pipeline, die mitdenkt und vorschlägt."
            points={[
              { icon: Target, title: "Intelligentes Matching", text: "Qualifikation, Sprache, Erfahrung und Verfügbarkeit fließen in einen nachvollziehbaren Score." },
              { icon: Bot, title: "Akquise & Outreach", text: "Offene Stellen finden, Firmen anreichern und passende Nachrichten automatisch vorbereiten." },
            ]}
            visual={<PipelineMock />}
          />
        </MotionDiv>
      </MotionDiv>
    </Section>
  );
}

export function ProblemSolution() {
  const pairs = [
    ["Stundenlange Dateneingabe", "KI befüllt Profile automatisch aus Dokumenten"],
    ["Falscher Bewerber, falsche Stelle", "KI-Matching mit 4-dimensionalem Scoring"],
    ["Mühsame Kaltakquise", "Akquise-Agent scrapt und kontaktiert automatisch"],
  ];
  return (
    <Section title="Recruiting ist kaputt. Wir haben es repariert." subtitle="Jobdenker entfernt die manuellen Brüche zwischen Bewerber, Arbeitgeber, Vertrieb und Backoffice.">
      <MotionDiv initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger} className="grid gap-5">
        {pairs.map(([problem, solution]) => (
          <MotionDiv key={problem} variants={fadeUp} className="grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
            <div className="rounded-xl border border-red-200 bg-red-50 p-6">
              <X className="mb-4 size-6 text-red-500" />
              <p className="font-heading text-xl font-semibold text-slate-900">{problem}</p>
            </div>
            <div className="hidden items-center px-2 text-brand-green md:flex">
              <ArrowRight className="size-6" />
            </div>
            <div className="rounded-xl border border-brand-green/30 bg-brand-bgLight p-6">
              <CheckCircle2 className="mb-4 size-6 text-brand-green" />
              <p className="font-heading text-xl font-semibold text-slate-900">{solution}</p>
            </div>
          </MotionDiv>
        ))}
      </MotionDiv>
    </Section>
  );
}

export function FeaturesGrid({ items = features, title = "Alles in einer Plattform.", subtitle = "Kein Tool-Chaos mehr. Jobdenker vereint alle Workflows unter einem Dach." }) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = useCallback((direction: "prev" | "next") => {
    const track = carouselRef.current;
    if (!track) return;

    const firstCard = track.querySelector<HTMLElement>("[data-feature-card]");
    const gap = Number.parseFloat(getComputedStyle(track).columnGap || "0");
    const cardWidth = firstCard?.getBoundingClientRect().width ?? track.clientWidth * 0.82;
    const maxScroll = track.scrollWidth - track.clientWidth;
    const nextScroll = direction === "next" ? track.scrollLeft + cardWidth + gap : track.scrollLeft - cardWidth - gap;
    const target = direction === "next" && nextScroll >= maxScroll - 8 ? 0 : direction === "prev" && nextScroll <= 0 ? maxScroll : nextScroll;

    track.scrollTo({ left: target, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 767px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!mobile.matches || reducedMotion.matches) return;

    const interval = window.setInterval(() => scrollCarousel("next"), 4500);
    return () => window.clearInterval(interval);
  }, [scrollCarousel]);

  return (
    <Section className="bg-mesh-light" title={title} subtitle={subtitle}>
      <div className="relative">
        <button
          type="button"
          onClick={() => scrollCarousel("prev")}
          className="absolute left-0 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-brand-border bg-white/95 text-brand-blue shadow-lg shadow-slate-900/10 backdrop-blur transition hover:border-brand-green hover:text-brand-greenDark md:hidden"
          aria-label="Vorherige Funktion anzeigen"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          onClick={() => scrollCarousel("next")}
          className="absolute right-0 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-brand-border bg-white/95 text-brand-blue shadow-lg shadow-slate-900/10 backdrop-blur transition hover:border-brand-green hover:text-brand-greenDark md:hidden"
          aria-label="Nächste Funktion anzeigen"
        >
          <ChevronRight className="size-5" />
        </button>
        <MotionDiv
          ref={carouselRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="scrollbar-none -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-3 md:mx-0 md:grid md:snap-none md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3"
          aria-label={`${title} Funktionen`}
        >
        {items.map((feature) => {
          const Icon = featureIcons[feature.iconName];
            return (
              <MotionDiv
                key={feature.title}
                variants={fadeUp}
                data-feature-card
                className="group min-w-[82%] snap-center rounded-2xl border border-brand-border bg-white transition duration-300 hover:-translate-y-1 hover:border-brand-green/40 hover:shadow-xl hover:shadow-brand-green/10 sm:min-w-[48%] md:min-w-0"
              >
                <Link href={feature.href} className="flex h-full flex-col p-6">
                  <div className="mb-5 inline-flex w-fit rounded-xl bg-lime-gradient p-3 text-white shadow-lg shadow-brand-green/20 transition group-hover:scale-110">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold">{feature.title}</h3>
                  <p className="mt-3 leading-7 text-brand-muted">{feature.text}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-greenDark transition group-hover:gap-3">
                    Mehr dazu
                    <ArrowRight className="size-4" />
                  </span>
                </Link>
              </MotionDiv>
            );
          })}
        </MotionDiv>
      </div>
    </Section>
  );
}

export function TargetGroupTabs() {
  const [active, setActive] = useState(0);
  const group = targetGroups[active];
  return (
    <Section title="Für jeden die richtige Ansicht." subtitle="Fünf Portale, ein Datenmodell und klare Workflows für jede Rolle.">
      <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-2">
        {targetGroups.map((item, index) => (
          <button
            key={item.label}
            onClick={() => setActive(index)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold transition",
              active === index ? "bg-lime-gradient text-white shadow-lg shadow-brand-green/20" : "bg-brand-bgLight text-slate-700 hover:text-brand-greenDark",
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="mt-10 overflow-hidden rounded-2xl border border-brand-border bg-white shadow-xl shadow-slate-200/70">
        <AnimatePresence mode="wait">
          <motion.div key={group.label} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }} className="grid gap-8 p-6 md:grid-cols-2 md:p-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-green">{group.label}</p>
              <h3 className="mt-3 font-heading text-3xl font-bold">{group.title}</h3>
              <p className="mt-4 leading-7 text-brand-muted">{group.text}</p>
              <div className="mt-6 grid gap-3">
                {group.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-center gap-3 text-sm font-semibold">
                    <Check className="size-5 text-brand-green" />
                    {bullet}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-mesh rounded-2xl p-5 text-white">
              <div className="mb-5 flex gap-2">
                <span className="size-3 rounded-full bg-red-400" />
                <span className="size-3 rounded-full bg-yellow-400" />
                <span className="size-3 rounded-full bg-green-400" />
              </div>
              <div className="grid gap-3">
                {group.bullets.map((bullet, index) => {
                  const score = 82 + index * 4;
                  return (
                    <div key={bullet} className="rounded-xl bg-white/10 p-4 backdrop-blur">
                      <div className="flex items-center justify-between">
                        <span>{bullet}</span>
                        <span className="text-sm text-brand-greenLight">{score}%</span>
                      </div>
                      <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          key={`${group.label}-${bullet}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${score}%` }}
                          transition={{ duration: 0.9, delay: 0.1 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                          className="h-2 rounded-full bg-lime-gradient"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  );
}

export function StatCounter() {
  const stats: { value: number; suffix?: string; prefix?: string; label: string; hint: string; icon: typeof Plug }[] = [
    { value: 10000, suffix: "+", label: "Vermittlungen pro Monat", hint: "Zielwert Plattform", icon: TrendingUp },
    { value: 98, suffix: "%", label: "Matching-Genauigkeit", hint: "4-dimensionaler Score", icon: Target },
    { value: 3, suffix: "x", label: "Schnellerer Recruiting-Prozess", hint: "weniger Handarbeit", icon: Zap },
    { value: 5, label: "Portale, eine Plattform", hint: "ein Datenmodell", icon: LayoutGrid },
  ];
  return (
    <section className="bg-white px-4 py-20 md:px-8 md:py-28 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Karte */}
        <div className="relative overflow-hidden rounded-[2rem] bg-card p-8 text-white shadow-2xl shadow-brand-blue/20 md:p-14">
          {/* animierter Hintergrund */}
          <div className="absolute inset-0 animate-gradient bg-[length:200%_200%] bg-[radial-gradient(circle_at_18%_20%,rgba(199,231,12,0.16),transparent_45%),radial-gradient(circle_at_82%_80%,rgba(163,230,53,0.14),transparent_45%)]" aria-hidden />
          <MeshBlobs />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "52px 52px",
              maskImage: "radial-gradient(circle at 50% 0%, black, transparent 75%)",
            }}
            aria-hidden
          />

          <div className="relative">
            <MotionDiv
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto mb-12 max-w-3xl text-center"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-greenLight backdrop-blur">
                <Sparkles className="size-4 animate-pulse-glow" /> In Zahlen
              </span>
              <h2 className="mt-6 font-heading text-3xl font-bold tracking-tight text-balance md:text-5xl">Recruiting mit messbarem Tempo.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">Die Zielwerte der Plattform sind auf hohe Automatisierung und klare operative Steuerung ausgelegt.</p>
            </MotionDiv>

            <MotionDiv initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={stagger} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <MotionDiv
                    key={stat.label}
                    variants={scaleIn}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-brand-green/40 hover:bg-white/10"
                  >
                    <div className="flex items-center justify-between">
                      <span className="bg-lime-gradient inline-flex size-11 items-center justify-center rounded-xl text-brand-blue shadow-lg shadow-brand-green/20 transition group-hover:scale-110">
                        <Icon className="size-5" />
                      </span>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">{stat.hint}</span>
                    </div>
                    <p className="mt-5 font-heading text-4xl font-bold text-white md:text-5xl">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                    </p>
                    <p className="mt-1.5 text-sm text-slate-300">{stat.label}</p>
                    <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                        className="bg-lime-gradient h-1 rounded-full"
                      />
                    </div>
                  </MotionDiv>
                );
              })}
            </MotionDiv>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TestimonialsGrid() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = useCallback((direction: "prev" | "next") => {
    const track = carouselRef.current;
    if (!track) return;

    const firstCard = track.querySelector<HTMLElement>("[data-testimonial-card]");
    const gap = Number.parseFloat(getComputedStyle(track).columnGap || "0");
    const cardWidth = firstCard?.getBoundingClientRect().width ?? track.clientWidth * 0.82;
    const maxScroll = track.scrollWidth - track.clientWidth;
    const nextScroll = direction === "next" ? track.scrollLeft + cardWidth + gap : track.scrollLeft - cardWidth - gap;
    const target = direction === "next" && nextScroll >= maxScroll - 8 ? 0 : direction === "prev" && nextScroll <= 0 ? maxScroll : nextScroll;

    track.scrollTo({ left: target, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 767px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!mobile.matches || reducedMotion.matches) return;

    const interval = window.setInterval(() => scrollCarousel("next"), 5200);
    return () => window.clearInterval(interval);
  }, [scrollCarousel]);

  return (
    <Section className="bg-brand-bgLight" title="Was Teams über Jobdenker sagen.">
      <div className="relative">
        <button
          type="button"
          onClick={() => scrollCarousel("prev")}
          className="absolute left-0 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-brand-border bg-white/95 text-brand-blue shadow-lg shadow-slate-900/10 backdrop-blur transition hover:border-brand-green hover:text-brand-greenDark md:hidden"
          aria-label="Vorherige Bewertung anzeigen"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          onClick={() => scrollCarousel("next")}
          className="absolute right-0 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-brand-border bg-white/95 text-brand-blue shadow-lg shadow-slate-900/10 backdrop-blur transition hover:border-brand-green hover:text-brand-greenDark md:hidden"
          aria-label="Nächste Bewertung anzeigen"
        >
          <ChevronRight className="size-5" />
        </button>
        <MotionDiv
          ref={carouselRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="scrollbar-none -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-3 md:mx-0 md:grid md:snap-none md:grid-cols-3 md:gap-5 md:overflow-visible md:px-0 md:pb-0"
          aria-label="Kundenbewertungen"
        >
          {testimonials.map((item) => (
            <MotionDiv
              key={item.name}
              variants={fadeUp}
              data-testimonial-card
              className="min-w-[82%] snap-center rounded-2xl border border-brand-border bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-green/10 sm:min-w-[48%] md:min-w-0"
            >
              <div className="mb-5 overflow-hidden rounded-xl border border-brand-border bg-brand-bgLight">
                <Image src={item.image} alt={item.imageAlt} width={640} height={420} className="aspect-[16/10] w-full object-cover" />
              </div>
              <div className="mb-5 flex gap-1 text-brand-greenLight">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-current" />)}</div>
              <p className="leading-7 text-slate-700">„{item.quote}”</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-full bg-lime-gradient font-heading font-bold text-white">{item.name.charAt(0)}</div>
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-brand-muted">{item.role}, {item.company}</p>
                </div>
              </div>
            </MotionDiv>
          ))}
        </MotionDiv>
      </div>
    </Section>
  );
}

const hubNodes = [
  { icon: MessageCircle, x: 20, y: 20 },
  { icon: Megaphone, x: 50, y: 11 },
  { icon: CreditCard, x: 81, y: 23 },
  { icon: Briefcase, x: 87, y: 62 },
  { icon: Globe2, x: 52, y: 89 },
  { icon: Database, x: 15, y: 67 },
];

function ConnectorHub() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <svg viewBox="0 0 100 100" className="absolute inset-0 size-full" fill="none" aria-hidden>
        <defs>
          <marker id="hub-arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#a3e635" />
          </marker>
        </defs>
        {hubNodes.map((node) => {
          const dx = 50 - node.x;
          const dy = 50 - node.y;
          const len = Math.hypot(dx, dy);
          const ex = 50 - (dx / len) * 11;
          const ey = 50 - (dy / len) * 11;
          const d = `M ${node.x} ${node.y} L ${ex} ${ey}`;
          return (
            <g key={`${node.x}-${node.y}`}>
              <path d={d} stroke="#12324a" strokeOpacity="0.18" strokeWidth="0.7" markerEnd="url(#hub-arrow)" />
              <path d={d} stroke="#a3e635" strokeWidth="0.9" strokeDasharray="2 5" strokeLinecap="round" className="animate-flow" />
            </g>
          );
        })}
      </svg>

      {/* Knoten */}
      {hubNodes.map((node, index) => {
        const Icon = node.icon;
        return (
          <motion.div
            key={`${node.x}-${node.y}-node`}
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            animate={{ y: [0, index % 2 === 0 ? -8 : 8, 0] }}
            transition={{ duration: 5 + index * 0.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="flex size-12 items-center justify-center rounded-2xl border border-brand-border bg-white text-brand-blue shadow-lg shadow-brand-blue/10 md:size-14">
              <Icon className="size-5 md:size-6" />
            </span>
          </motion.div>
        );
      })}

      {/* Zentraler Knoten */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <span className="absolute inset-0 -z-10 rounded-2xl bg-brand-green/40 [animation:ping-ring_2.6s_ease-out_infinite]" />
        <span className="bg-lime-gradient flex size-16 items-center justify-center rounded-2xl text-brand-blue shadow-xl shadow-brand-green/30 md:size-20">
          <Plug className="size-7 md:size-9" />
        </span>
      </div>
    </div>
  );
}

type BentoVariant = "feature" | "lime" | "imageInside" | "text" | "navy" | "bgImage";
type BentoCardData = {
  name: string;
  category: string;
  text: string;
  icon: typeof Plug;
  variant: BentoVariant;
  wide?: boolean;
};

const bentoConnectors: BentoCardData[] = [
  { name: "WhatsApp", category: "Kommunikation", text: "Bewerber-Chats laufen automatisch ins Profil und bleiben sauber dokumentiert.", icon: MessageCircle, variant: "feature", wide: true },
  { name: "Twilio", category: "Voice & SMS", text: "SMS, Anrufe und Verifizierung direkt aus dem Workflow.", icon: Phone, variant: "lime" },
  { name: "Meta Lead Ads", category: "Lead-Gen", text: "Aus Kampagnen-Leads werden strukturierte Kandidatenprofile.", icon: Megaphone, variant: "imageInside" },
  { name: "Stripe", category: "Billing", text: "Abos, Rechnungen und Zahlungen ohne Medienbruch.", icon: CreditCard, variant: "text" },
  { name: "WordPress", category: "Web", text: "Stellenanzeigen und Formulare direkt von der Website.", icon: Globe2, variant: "imageInside" },
  { name: "Microsoft Teams", category: "Collaboration", text: "Dokumente, Benachrichtigungen und Übergaben ins Team holen.", icon: Users, variant: "bgImage", wide: true },
  { name: "MinIO", category: "Storage", text: "Sicherer Objekt-Speicher für CVs und Dokumente.", icon: Database, variant: "navy" },
  { name: "Indeed", category: "Jobbörsen", text: "Stellen ausspielen und Bewerbungen automatisch einsammeln.", icon: Briefcase, variant: "bgImage", wide: true },
  { name: "Apify", category: "Automation", text: "Scraping und Daten-Anreicherung für die Akquise.", icon: Cloud, variant: "text" },
];

function BentoCard({ card }: { card: BentoCardData }) {
  const Icon = card.icon;
  const span = card.wide ? "lg:col-span-2" : "";

  if (card.variant === "feature") {
    return (
      <MotionDiv variants={fadeUp} className={cn("group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-card p-7 text-white shadow-sm", span)}>
        <Icon className="pointer-events-none absolute -right-6 -top-6 size-40 text-white/5 transition group-hover:scale-110" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.5] bg-[radial-gradient(circle_at_85%_15%,rgba(163,230,53,0.18),transparent_45%)]"
          aria-hidden
        />
        <div className="relative flex items-center justify-between">
          <span className="bg-lime-gradient inline-flex size-12 items-center justify-center rounded-xl text-brand-blue shadow-lg shadow-brand-green/20">
            <Icon className="size-6" />
          </span>
          <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-brand-greenLight">verbunden</span>
        </div>
        <div className="relative mt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-greenLight">{card.category}</p>
          <h3 className="mt-2 font-heading text-2xl font-bold">{card.name}</h3>
          <p className="mt-3 max-w-sm leading-7 text-slate-300">{card.text}</p>
        </div>
      </MotionDiv>
    );
  }

  if (card.variant === "lime") {
    return (
      <MotionDiv variants={fadeUp} className={cn("bg-lime-gradient group flex flex-col justify-between overflow-hidden rounded-3xl p-7 text-brand-blue shadow-sm", span)}>
        <span className="inline-flex size-12 items-center justify-center rounded-xl bg-brand-blue text-brand-greenLight shadow-lg shadow-brand-blue/20 transition group-hover:scale-105">
          <Icon className="size-6" />
        </span>
        <div className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue/70">{card.category}</p>
          <h3 className="mt-2 font-heading text-2xl font-bold">{card.name}</h3>
          <p className="mt-2 leading-7 text-brand-blue/80">{card.text}</p>
        </div>
      </MotionDiv>
    );
  }

  if (card.variant === "navy") {
    return (
      <MotionDiv variants={fadeUp} className={cn("group flex flex-col items-center justify-center gap-4 rounded-3xl bg-card p-7 text-center text-white shadow-sm", span)}>
        <span className="bg-lime-gradient inline-flex size-14 items-center justify-center rounded-2xl text-brand-blue shadow-lg shadow-brand-green/20 transition group-hover:scale-105">
          <Icon className="size-7" />
        </span>
        <div>
          <h3 className="font-heading text-xl font-bold">{card.name}</h3>
          <p className="mt-1 text-sm leading-6 text-slate-300">{card.text}</p>
        </div>
      </MotionDiv>
    );
  }

  if (card.variant === "bgImage") {
    return (
      <MotionDiv variants={fadeUp} className={cn("group relative flex flex-col justify-end overflow-hidden rounded-3xl p-7 text-white shadow-sm", span)}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#12324a] via-[#15402f] to-[#0c2435]" aria-hidden />
        <div className="absolute inset-0 animate-gradient bg-[length:200%_200%] bg-[radial-gradient(circle_at_25%_25%,rgba(199,231,12,0.22),transparent_50%)]" aria-hidden />
        <Icon className="pointer-events-none absolute right-5 top-5 size-12 text-white/15 transition group-hover:scale-110" />
        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-greenLight">{card.category}</p>
          <h3 className="mt-2 font-heading text-2xl font-bold">{card.name}</h3>
          <p className="mt-2 max-w-md leading-7 text-slate-200">{card.text}</p>
        </div>
      </MotionDiv>
    );
  }

  if (card.variant === "imageInside") {
    return (
      <MotionDiv variants={fadeUp} className={cn("group flex flex-col overflow-hidden rounded-3xl border border-brand-border bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-green/10", span)}>
        <div className="relative flex h-28 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-brand-blue to-brand-green">
          <div
            className="absolute inset-0 opacity-30"
            style={{ backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)", backgroundSize: "20px 20px" }}
            aria-hidden
          />
          <Icon className="relative size-10 text-white transition group-hover:scale-110" />
        </div>
        <div className="px-4 pb-4 pt-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-greenDark">{card.category}</p>
          <h3 className="mt-1.5 font-heading text-xl font-semibold">{card.name}</h3>
          <p className="mt-2 text-sm leading-6 text-brand-muted">{card.text}</p>
        </div>
      </MotionDiv>
    );
  }

  // text
  return (
    <MotionDiv variants={fadeUp} className={cn("group flex flex-col rounded-3xl border border-brand-border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-brand-green/40 hover:shadow-xl hover:shadow-brand-green/10", span)}>
      <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-bgLight text-brand-greenDark transition group-hover:bg-lime-gradient group-hover:text-brand-blue">
        <Icon className="size-5" />
      </span>
      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-brand-greenDark">{card.category}</p>
      <h3 className="mt-1.5 font-heading text-xl font-semibold">{card.name}</h3>
      <p className="mt-2 text-sm leading-6 text-brand-muted">{card.text}</p>
      <div className="mt-auto flex items-center gap-2 pt-5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-greenDark">
        <span className="size-2 rounded-full bg-brand-green" /> API-ready
      </div>
    </MotionDiv>
  );
}

export function IntegrationGrid() {
  return (
    <section className="bg-brand-bgLight px-4 py-20 md:px-8 md:py-28 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <MotionDiv initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeRight}>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-greenDark">Integrationen</p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance md:text-5xl">Verbindet sich mit deinem Stack.</h2>
            <p className="mt-5 max-w-lg text-lg leading-8 text-brand-muted">
              Jobdenker ist als Plattform gedacht: Recruiting, Sales, Kommunikation, Dokumente und Billing arbeiten zusammen. Alles fließt in ein Datenmodell.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {["10+ Integrationen", "API-ready", "Webhooks", "DSGVO-konform"].map((tag) => (
                <span key={tag} className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-white px-4 py-2 text-sm font-semibold text-brand-blue">
                  <CheckCircle2 className="size-4 text-brand-green" /> {tag}
                </span>
              ))}
            </div>
          </MotionDiv>

          <MotionDiv initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}>
            <ConnectorHub />
          </MotionDiv>
        </div>

        {/* Bento-Grid */}
        <MotionDiv
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="mt-14 grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {bentoConnectors.map((card) => (
            <BentoCard key={card.name} card={card} />
          ))}
        </MotionDiv>
      </div>
    </section>
  );
}

export function PricingCards() {
  const [yearly, setYearly] = useState(false);
  return (
    <Section className="bg-brand-bgLight" title="Transparente Preise. Keine Überraschungen.">
      <div className="mb-10 flex justify-center">
        <button onClick={() => setYearly(!yearly)} className="rounded-full border border-brand-border bg-white p-1 text-sm font-semibold">
          <span className={cn("inline-block rounded-full px-4 py-2 transition", !yearly && "bg-lime-gradient text-white")}>Monatlich</span>
          <span className={cn("inline-block rounded-full px-4 py-2 transition", yearly && "bg-lime-gradient text-white")}>Jährlich -20%</span>
        </button>
      </div>
      <MotionDiv initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger} className="grid items-start gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <MotionDiv
            key={plan.name}
            variants={fadeUp}
            className={cn(
              "relative rounded-2xl border p-6 transition",
              plan.featured
                ? "border-brand-dark bg-brand-dark text-white shadow-2xl shadow-brand-green/25 md:scale-105"
                : "border-brand-border bg-white hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-green/10",
            )}
          >
            {plan.featured && <span className="absolute -top-3 left-6 rounded-full bg-brand-greenLight px-3 py-1 text-xs font-semibold text-brand-darkCard">Beliebtester Plan</span>}
            <h3 className="font-heading text-2xl font-bold">{plan.name}</h3>
            <p className={cn("mt-3 leading-7", plan.featured ? "text-emerald-50/90" : "text-brand-muted")}>{plan.text}</p>
            <p className="mt-6 font-heading text-4xl font-bold">{plan.price}{plan.price.includes("€") && <span className="text-base font-medium">/Monat</span>}</p>
            <div className="mt-6 grid gap-3">
              {plan.features.map((feature) => (
                <p key={feature} className="flex items-center gap-2 text-sm font-semibold"><Check className={cn("size-5", plan.featured ? "text-brand-greenLight" : "text-brand-green")} />{feature}</p>
              ))}
            </div>
            <ButtonLink href="/demo" variant={plan.featured ? "light" : "gradient"} className="mt-7 w-full">Plan besprechen</ButtonLink>
          </MotionDiv>
        ))}
      </MotionDiv>
    </Section>
  );
}

export function FAQPinboardSection({
  items = faqItems.slice(0, 4),
  title = "Fragen, die Teams vor dem Start stellen.",
  subtitle = "Schnelle Antworten zu Plattform, KI, Matching und Workflows.",
  showMoreButton = true,
}: {
  items?: readonly { question: string; answer: string; category: string }[];
  title?: string;
  subtitle?: string;
  showMoreButton?: boolean;
}) {
  const pinColors = ["bg-brand-green", "bg-brand-blue", "bg-brand-greenLight", "bg-brand-blueDark"] as const;
  const cardStyles = [
    "border-brand-green/30 bg-brand-bgLight text-brand-blue",
    "border-brand-border bg-white text-brand-blue",
    "border-brand-green/40 bg-lime-gradient text-brand-blue",
    "border-brand-blue/20 bg-brand-blue text-white",
  ] as const;
  const categoryStyles = [
    "bg-white text-brand-greenDark",
    "bg-brand-bgLight text-brand-greenDark",
    "bg-white/75 text-brand-blue",
    "bg-white/10 text-brand-greenLight",
  ] as const;
  const answerStyles = ["text-brand-muted", "text-brand-muted", "text-brand-blue/75", "text-slate-200"] as const;
  const numberStyles = ["text-brand-greenDark", "text-brand-blue", "text-brand-blue", "text-brand-greenLight"] as const;
  const rotations = ["-rotate-3", "rotate-2", "-rotate-2", "rotate-3"] as const;
  const offsets = ["md:mt-5", "md:mt-24", "md:mt-12", "md:mt-28"] as const;

  return (
    <section className="relative overflow-hidden bg-white px-4 py-20 md:px-8 md:py-28 lg:px-12">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 hidden h-px border-t border-dashed border-brand-border md:block" />
      <div className="pointer-events-none absolute inset-x-0 top-[38%] hidden h-px border-t border-dashed border-brand-border md:block" />
      <div className="pointer-events-none absolute inset-x-0 top-[65%] hidden h-px border-t border-dashed border-brand-border md:block" />
      <div className="pointer-events-none absolute right-[14%] top-10 size-24 rounded-full bg-brand-green/10 blur-2xl" />
      <div className="pointer-events-none absolute left-[8%] bottom-12 size-32 rounded-full bg-brand-blue/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-brand-greenDark">FAQ</p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-balance md:text-5xl">{title}</h2>
          <p className="mt-5 text-lg leading-8 text-brand-muted">{subtitle}</p>
        </div>

        <MotionDiv initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger} className="mt-14 grid gap-6 md:grid-cols-4 md:gap-5">
          {items.map((item, index) => (
            <MotionDiv
              key={item.question}
              variants={fadeUp}
              className={cn("group relative rounded-[1.75rem] bg-white p-3 shadow-2xl shadow-slate-200/80 transition duration-300 hover:-translate-y-2 hover:rotate-0", rotations[index % rotations.length], offsets[index % offsets.length])}
            >
              <div className={cn("absolute left-1/2 top-0 z-10 size-8 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-lg shadow-brand-blue/15 ring-4 ring-white", pinColors[index % pinColors.length])}>
                <span className="absolute left-1/2 top-7 h-5 w-px -translate-x-1/2 bg-brand-border" />
              </div>
              <div className={cn("min-h-64 rounded-[1.35rem] border p-6", cardStyles[index % cardStyles.length])}>
                <p className={cn("font-heading text-lg font-semibold", numberStyles[index % numberStyles.length])}>{String(index + 1).padStart(2, "0")}</p>
                <span className={cn("mt-4 inline-flex rounded-full px-3 py-1 text-xs font-semibold", categoryStyles[index % categoryStyles.length])}>{item.category}</span>
                <h3 className="mt-5 font-heading text-xl font-bold leading-tight">{item.question}</h3>
                <p className={cn("mt-4 text-sm leading-6", answerStyles[index % answerStyles.length])}>{item.answer}</p>
              </div>
            </MotionDiv>
          ))}
        </MotionDiv>

        {showMoreButton && (
          <div className="mt-14 flex justify-center">
            <ButtonLink href="/faq" variant="gradient">
              Mehr Fragen
              <ArrowRight className="size-4" />
            </ButtonLink>
          </div>
        )}
      </div>
    </section>
  );
}

export function FAQListSection({ items = faqItems }: { items?: readonly { question: string; answer: string; category: string }[] }) {
  return (
    <Section className="bg-brand-bgLight" title="Alle häufigen Fragen." subtitle="Modular gepflegt und jederzeit erweiterbar.">
      <div className="mx-auto grid max-w-5xl gap-4">
        {items.map((item, index) => (
          <MotionDiv key={item.question} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: index * 0.04 }} className="rounded-2xl border border-brand-border bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <span className="rounded-full bg-brand-green/10 px-3 py-1 text-xs font-semibold text-brand-greenDark">{item.category}</span>
                <h2 className="mt-4 font-heading text-2xl font-bold text-brand-blue">{item.question}</h2>
                <p className="mt-3 leading-7 text-brand-muted">{item.answer}</p>
              </div>
              <span className="font-heading text-3xl font-bold text-brand-green/50">{String(index + 1).padStart(2, "0")}</span>
            </div>
          </MotionDiv>
        ))}
      </div>
    </Section>
  );
}

export function BlogArticlesCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = useCallback((direction: "prev" | "next") => {
    const track = carouselRef.current;
    if (!track) return;

    const firstCard = track.querySelector<HTMLElement>("[data-blog-card]");
    const gap = Number.parseFloat(getComputedStyle(track).columnGap || "0");
    const cardWidth = firstCard?.getBoundingClientRect().width ?? track.clientWidth * 0.82;
    const maxScroll = track.scrollWidth - track.clientWidth;
    const nextScroll = direction === "next" ? track.scrollLeft + cardWidth + gap : track.scrollLeft - cardWidth - gap;
    const target = direction === "next" && nextScroll >= maxScroll - 8 ? 0 : direction === "prev" && nextScroll <= 0 ? maxScroll : nextScroll;

    track.scrollTo({ left: target, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reducedMotion.matches) return;

    const interval = window.setInterval(() => scrollCarousel("next"), 6200);
    return () => window.clearInterval(interval);
  }, [scrollCarousel]);

  return (
    <section className="overflow-hidden bg-white px-4 py-20 md:px-8 md:py-28 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <h2 className="font-heading text-5xl font-bold uppercase leading-[0.95] tracking-tight text-slate-950 sm:text-6xl md:text-7xl lg:text-8xl">
            News & <span className="text-brand-green">Ratgeber</span>
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-brand-muted md:pb-3">
            Aktuelle Einblicke zu Recruiting-Automatisierung, KI-Matching, Dokumentenprozessen und vernetzten Workflows.
          </p>
        </div>

        <div className="relative mt-14">
          <MotionDiv
            ref={carouselRef}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
            className="scrollbar-none -mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-5 md:-mx-8 md:px-8 lg:-mx-12 lg:px-12"
            aria-label="Aktuelle Blogartikel"
          >
            {blogPosts.map((post) => (
              <MotionDiv
                key={post.title}
                variants={fadeUp}
                data-blog-card
                className="min-w-[86%] snap-center sm:min-w-[70%] md:min-w-[620px] lg:min-w-[760px]"
              >
                <Link href="/blog" className="group relative block h-[430px] overflow-hidden rounded-3xl bg-brand-bgLight shadow-xl shadow-slate-200/80 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-green/15 md:h-[470px]">
                  <Image src={post.image} alt={post.imageAlt} fill sizes="(max-width: 768px) 86vw, 760px" className="object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/22 via-transparent to-transparent" />
                  <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white p-5 shadow-2xl shadow-slate-950/10 md:inset-x-6 md:bottom-6 md:p-6">
                    <span className="inline-flex rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold text-brand-blue">{post.category}</span>
                    <h3 className="mt-4 font-heading text-xl font-bold leading-tight text-slate-950 md:text-2xl">{post.title}</h3>
                    <p className="mt-3 line-clamp-2 text-sm leading-6 text-brand-muted md:text-base">{post.teaser}</p>
                    <div className="mt-5 flex flex-wrap items-center gap-2 text-sm font-semibold text-brand-muted">
                      <span>{post.date}</span>
                      <span aria-hidden>·</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              </MotionDiv>
            ))}
          </MotionDiv>

          <div className="mt-7 flex items-center justify-center gap-8">
            <button
              type="button"
              onClick={() => scrollCarousel("prev")}
              className="group flex items-center gap-3 text-brand-blue transition hover:text-brand-greenDark"
              aria-label="Vorherige Blogartikel anzeigen"
            >
              <span className="h-px w-24 bg-current transition group-hover:w-28" />
              <ChevronLeft className="size-6" />
            </button>
            <button
              type="button"
              onClick={() => scrollCarousel("next")}
              className="group flex items-center gap-3 text-brand-blue transition hover:text-brand-greenDark"
              aria-label="Nächste Blogartikel anzeigen"
            >
              <ChevronRight className="size-6" />
              <span className="h-px w-24 bg-current transition group-hover:w-28" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaVisual() {
  const container: Variants = {
    hidden: {},
    visible: { transition: { delayChildren: 0.6, staggerChildren: 0.12 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  };
  const matches = [
    ["Aylin K.", 96],
    ["Martin S.", 91],
    ["Selin D.", 88],
  ] as const;

  return (
    <div className="relative mx-auto max-w-md">
      <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-2xl border border-white/15 bg-white/10 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl"
        >
          <motion.div variants={item} className="flex items-center gap-2 text-sm font-semibold text-white">
            <Globe2 className="size-5 text-brand-green" /> Internationale Vermittlung
          </motion.div>

          <motion.div variants={item} className="mt-4 flex gap-2">
            <div className="flex-1 rounded-xl bg-white/95 px-4 py-3 text-left">
              <p className="text-[11px] uppercase tracking-wide text-brand-muted">Stelle oder Qualifikation</p>
              <p className="text-sm font-semibold text-brand-blue">Pflegefachkraft Intensiv</p>
            </div>
            <span className="bg-lime-gradient flex items-center justify-center rounded-xl px-4 text-brand-blue shadow-lg shadow-black/20">
              <Search className="size-5" />
            </span>
          </motion.div>

          <div className="mt-4 grid gap-2.5">
            {matches.map(([name, score], index) => (
              <motion.div key={name} variants={item} className="rounded-xl bg-white/10 p-3">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-sm font-semibold text-white">
                    <span className="bg-lime-gradient flex size-6 items-center justify-center rounded-full text-[11px] font-bold text-brand-blue">{name.charAt(0)}</span>
                    {name}
                  </span>
                  <span className="text-sm font-semibold text-brand-greenLight">{score}%</span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${score}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.9 + index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-lime-gradient h-1.5 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* schwebende Elemente */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute -top-5 -left-4"
      >
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="flex items-center gap-2 rounded-xl bg-white px-3.5 py-2 text-sm font-semibold text-brand-blue shadow-xl">
          <Target className="size-4 text-brand-greenDark" /> 98% Fit
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="absolute -bottom-5 -right-3"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }} className="bg-lime-gradient flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-semibold text-brand-blue shadow-xl">
          <Sparkles className="size-4" /> +31 Leads heute
        </motion.div>
      </motion.div>
    </div>
  );
}

export function FooterCTA() {
  return (
    <>
      <BlogArticlesCarousel />
      <section className="bg-card px-4 pb-16 pt-20 md:px-8 md:pb-20 md:pt-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          {/* abgerundete Bild-Karte */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl shadow-black/40">
            {/* animiertes "Bild" als Hintergrund der Karte */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0c2435] via-[#12324a] to-[#15402f]" aria-hidden />
            <div className="absolute inset-0 animate-gradient bg-[length:200%_200%] bg-[radial-gradient(circle_at_20%_30%,rgba(199,231,12,0.18),transparent_45%),radial-gradient(circle_at_85%_70%,rgba(163,230,53,0.16),transparent_45%)]" aria-hidden />
            <MeshBlobs />
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                backgroundSize: "48px 48px",
                maskImage: "radial-gradient(circle at 30% 50%, black, transparent 80%)",
              }}
              aria-hidden
            />

            <div className="relative grid items-center gap-10 p-8 text-white md:grid-cols-2 md:gap-12 md:p-14 lg:p-16">
              {/* Text — blendet zuerst ein */}
              <motion.div
                initial={{ opacity: 0, x: -32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-greenLight backdrop-blur">
                  <Sparkles className="size-4 animate-pulse-glow" /> Jetzt loslegen
                </span>
                <h2 className="mt-6 font-heading text-3xl font-bold tracking-tight text-balance md:text-5xl">
                  Bereit, Recruiting zu <span className="shimmer-text animate-gradient bg-[length:200%_auto]">modernisieren?</span>
                </h2>
                <p className="mt-5 max-w-md text-lg leading-8 text-slate-200">Starte mit einer kostenlosen Demo und sieh Jobdenker live in Aktion.</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href="/demo" variant="gradient">Demo buchen</ButtonLink>
                  <ButtonLink href="/kontakt" variant="ghost" className="border border-white/30">Kontakt aufnehmen</ButtonLink>
                </div>
              </motion.div>

              {/* Animiertes Element-Panel — blendet verzögert von rechts ein */}
              <motion.div
                initial={{ opacity: 0, x: 48 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <CtaVisual />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
