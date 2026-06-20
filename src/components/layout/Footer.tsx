import Image from "next/image";
import Link from "next/link";
import { navPortals, navSolutions } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-brand-dark px-4 py-16 text-white md:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center transition hover:opacity-90" aria-label="Jobdenker Startseite">
            <Image src="/logo/jobdenker-logo-white.png" alt="Jobdenker" width={160} height={42} className="h-10 w-auto" />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-7 text-slate-400">KI-gestütztes Recruiting für internationale Vermittlungsteams, Arbeitgeber und Bewerber.</p>
          <div className="mt-6 flex gap-3 text-sm text-slate-400">
            <span>LinkedIn</span>
            <span>Xing</span>
            <span>YouTube</span>
          </div>
        </div>
        <FooterList title="Lösungen" items={navSolutions} />
        <FooterList title="Portale & Unternehmen" items={[...navPortals, ["Über uns", "/ueber-uns"], ["News & Ratgeber", "/blog"], ["Kontakt", "/kontakt"]]} />
        <div>
          <h3 className="font-heading font-semibold">Rechtliches</h3>
          <div className="mt-4 grid gap-3 text-sm text-slate-400">
            <Link href="/datenschutz">Datenschutz</Link>
            <Link href="/impressum">Impressum</Link>
            <Link href="/agb">AGB</Link>
          </div>
          <div className="mt-6 rounded-xl border border-white/10 p-4">
            <p className="text-sm font-semibold">Newsletter</p>
            <p className="mt-2 text-sm text-slate-400">Monatliche Insights zu KI, Recruiting und Automatisierung.</p>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Jobdenker. Alle Rechte vorbehalten.</p>
        <p>Next.js, React, TypeScript, Tailwind und bereit für MongoDB + MinIO.</p>
      </div>
    </footer>
  );
}

function FooterList({ title, items }: { title: string; items: readonly (readonly [string, string])[] }) {
  return (
    <div>
      <h3 className="font-heading font-semibold">{title}</h3>
      <div className="mt-4 grid gap-3 text-sm text-slate-400">
        {items.map(([label, href]) => (
          <Link key={href} href={href} className="hover:text-white">{label}</Link>
        ))}
      </div>
    </div>
  );
}
