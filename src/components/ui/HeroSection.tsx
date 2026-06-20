"use client";

import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { AnimatedCounter, MeshBlobs, MotionDiv, fadeUp, stagger } from "@/components/ui/Motion";

export function HeroSection() {
  return (
    <section className="bg-mesh relative overflow-hidden px-4 pb-20 pt-32 text-white md:px-8 md:pb-28 md:pt-40 lg:px-12">
      <MeshBlobs />
      {/* feines Raster für Tiefe */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(circle at 50% 35%, black, transparent 75%)",
        }}
        aria-hidden
      />

      <MotionDiv initial="hidden" animate="visible" variants={stagger} className="relative mx-auto max-w-7xl text-center">
        <MotionDiv
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-greenLight backdrop-blur"
        >
          <Sparkles className="size-4 animate-pulse-glow" />
          KI-Recruiting der nächsten Generation
        </MotionDiv>

        <MotionDiv variants={fadeUp}>
          <h1 className="mx-auto mt-7 max-w-4xl font-heading text-4xl font-bold tracking-tight text-balance md:text-6xl lg:text-7xl">
            Vermittlung, die{" "}
            <span className="shimmer-text animate-gradient bg-[length:200%_auto]">denkt.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-200 md:text-xl">
            Jobdenker automatisiert deinen gesamten Recruiting-Prozess von der Lead-Generierung bis zur Visa-Begleitung. KI-Matching, WhatsApp-Bot und Dokumentenanalyse in einer Plattform.
          </p>
        </MotionDiv>

        <MotionDiv variants={fadeUp} className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href="/demo" variant="gradient" className="px-7 py-4 text-base">
            Kostenlose Demo buchen
          </ButtonLink>
          <ButtonLink href="/loesungen" variant="ghost" className="px-7 py-4 text-base">
            Funktionen entdecken <ArrowRight className="size-4 transition group-hover:translate-x-1" />
          </ButtonLink>
        </MotionDiv>

        <MotionDiv variants={fadeUp} className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-300">
          <span className="inline-flex items-center gap-2"><BadgeCheck className="size-4 text-brand-greenLight" /> DSGVO-konform</span>
          <span className="inline-flex items-center gap-2"><BadgeCheck className="size-4 text-brand-greenLight" /> In Minuten startklar</span>
          <span className="inline-flex items-center gap-2"><BadgeCheck className="size-4 text-brand-greenLight" /> Keine Kreditkarte nötig</span>
        </MotionDiv>

        <MotionDiv
          variants={fadeUp}
          className="relative mx-auto mt-16 grid max-w-6xl gap-5 rounded-3xl border border-white/10 bg-card/80 p-4 shadow-2xl shadow-black/40 backdrop-blur md:grid-cols-[1.15fr_0.85fr] md:p-6"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-2xl border border-white/10 bg-card p-5 text-left"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-sm text-slate-400">Matching Cockpit</p>
                <h2 className="font-heading text-2xl font-semibold">Top-Kandidaten</h2>
              </div>
              <span className="rounded-full bg-brand-green/15 px-3 py-1 text-sm font-semibold text-brand-greenLight">98% Fit</span>
            </div>
            {["Pflegefachkraft Intensiv", "Logistik Schichtleitung", "Elektrohelfer Montage"].map((role, index) => {
              const score = 94 - index * 3;
              return (
                <div key={role} className="mt-4 rounded-xl bg-white/5 p-4">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold">{role}</p>
                    <p className="text-sm text-brand-greenLight">{score}%</p>
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${score}%` }}
                      transition={{ duration: 1.1, delay: 0.4 + index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                      className="h-2 rounded-full bg-lime-gradient"
                    />
                  </div>
                </div>
              );
            })}
          </motion.div>

          <div className="grid gap-5">
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              className="rounded-2xl border border-white/10 bg-card p-5 text-left"
            >
              <ShieldCheck className="mb-4 size-8 text-brand-greenLight" />
              <p className="font-heading text-xl font-semibold">Anonyme CVs</p>
              <p className="mt-2 text-sm leading-6 text-slate-400">Mehrsprachige PDFs für Arbeitgeberfreigaben, ohne sensible Daten zu früh offenzulegen.</p>
            </motion.div>
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
              className="rounded-2xl border border-white/10 bg-card p-5 text-left"
            >
              <p className="flex items-center gap-2 text-sm text-slate-400">
                <TrendingUp className="size-4 text-brand-greenLight" /> Pipeline heute
              </p>
              <p className="mt-2 font-heading text-4xl font-bold">
                <AnimatedCounter value={247} />
              </p>
              <p className="mt-2 text-sm text-brand-greenLight">+31 qualifizierte Leads durch KI-Akquise</p>
            </motion.div>
          </div>
        </MotionDiv>
      </MotionDiv>
    </section>
  );
}
