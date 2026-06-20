"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { Variants } from "framer-motion";
import { useEffect, useRef } from "react";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, ease } },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.55, ease } },
};

export const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.09 } },
};

export const MotionDiv = motion.div;
export const MotionSection = motion.section;
export const MotionSpan = motion.span;

/** Sanft schwebende, animierte Hintergrund-Blobs in Lime auf dunklem Blau. */
export function MeshBlobs({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <div className="absolute -left-20 top-10 size-72 rounded-full bg-brand-green/25 blur-3xl animate-blob" />
      <div className="absolute right-0 top-0 size-96 rounded-full bg-brand-greenLight/15 blur-3xl animate-blob [animation-delay:-4s]" />
      <div className="absolute bottom-0 left-1/3 size-80 rounded-full bg-brand-greenLight/20 blur-3xl animate-blob [animation-delay:-8s]" />
    </div>
  );
}

/** Zählt von 0 auf den Zielwert hoch, sobald sichtbar. */
export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  className = "",
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1600, bounce: 0 });
  const rounded = useTransform(spring, (latest) => Math.round(latest).toLocaleString("de-DE"));

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, value, motionValue]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
