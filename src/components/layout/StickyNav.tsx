"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navPortals, navSolutions } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const dropdowns = {
  solutions: navSolutions,
  portals: navPortals,
};

export function StickyNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<"solutions" | "portals" | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition duration-300",
        scrolled || mobileOpen ? "border-b border-brand-border/80 bg-white/90 text-slate-900 shadow-sm backdrop-blur-xl" : "text-white",
      )}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8 lg:px-12">
        <Link href="/" className="flex items-center transition hover:opacity-90" aria-label="Jobdenker Startseite">
          <Image
            src={scrolled || mobileOpen ? "/logo/jobdenker-logo-color.png" : "/logo/jobdenker-logo-white.png"}
            alt="Jobdenker"
            width={150}
            height={40}
            priority
            className="h-8 w-auto md:h-9"
          />
        </Link>
        <div className="hidden items-center gap-8 lg:flex">
          <DropdownButton label="Lösungen" name="solutions" open={open} setOpen={setOpen} dark={!scrolled} />
          <DropdownButton label="Portale" name="portals" open={open} setOpen={setOpen} dark={!scrolled} />
          <Link href="/preise" className="text-sm font-semibold hover:text-brand-greenLight">Preise</Link>
          <Link href="/blog" className="text-sm font-semibold hover:text-brand-greenLight">News & Ratgeber</Link>
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/demo" className="rounded-xl bg-lime-gradient px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-green/25 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-green/35">
            Demo buchen
          </Link>
        </div>
        <button className="lg:hidden" aria-label="Menü öffnen" onClick={() => setMobileOpen(true)}>
          <Menu />
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            onMouseLeave={() => setOpen(null)}
            className="absolute left-1/2 top-20 hidden w-[520px] -translate-x-1/2 rounded-2xl border border-brand-border bg-white p-3 text-slate-900 shadow-2xl lg:block"
          >
            <div className="grid grid-cols-2 gap-2">
              {dropdowns[open].map(([label, href]) => (
                <Link key={href} href={href} className="rounded-xl p-4 hover:bg-brand-bgLight">
                  <span className="font-heading font-semibold">{label}</span>
                  <span className="mt-1 block text-sm text-brand-muted">Mehr erfahren</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-slate-950/40 backdrop-blur-sm lg:hidden" onClick={() => setMobileOpen(false)}>
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 260 }}
              className="ml-auto flex h-full w-[86%] max-w-sm flex-col bg-white p-6 text-slate-900 shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-8 flex items-center justify-between">
                <Image src="/logo/jobdenker-logo-color.png" alt="Jobdenker" width={140} height={37} className="h-8 w-auto" />
                <button aria-label="Menü schließen" onClick={() => setMobileOpen(false)}>
                  <X />
                </button>
              </div>
              <MobileGroup title="Lösungen" items={navSolutions} />
              <MobileGroup title="Portale" items={navPortals} />
              <Link href="/preise" className="border-t border-brand-border py-4 font-semibold">Preise</Link>
              <Link href="/blog" className="border-t border-brand-border py-4 font-semibold">News & Ratgeber</Link>
              <Link href="/demo" className="mt-6 rounded-xl bg-lime-gradient px-5 py-3 text-center font-semibold text-white shadow-lg shadow-brand-green/25">Demo buchen</Link>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function DropdownButton({
  label,
  name,
  open,
  setOpen,
  dark,
}: {
  label: string;
  name: "solutions" | "portals";
  open: "solutions" | "portals" | null;
  setOpen: (value: "solutions" | "portals" | null) => void;
  dark: boolean;
}) {
  return (
    <button
      onMouseEnter={() => setOpen(name)}
      onFocus={() => setOpen(name)}
      className={cn("flex items-center gap-1 text-sm font-semibold transition hover:text-brand-green", dark && "hover:text-brand-greenLight")}
    >
      {label}
      <ChevronDown className={cn("size-4 transition", open === name && "rotate-180")} />
    </button>
  );
}

function MobileGroup({ title, items }: { title: string; items: readonly (readonly [string, string])[] }) {
  return (
    <div className="mb-4">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-muted">{title}</p>
      {items.map(([label, href]) => (
        <Link key={href} href={href} className="block rounded-lg py-2 font-semibold hover:text-brand-greenDark">
          {label}
        </Link>
      ))}
    </div>
  );
}
