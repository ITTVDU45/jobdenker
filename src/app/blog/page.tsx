import type { Metadata } from "next";
import { blogPosts } from "@/lib/site-data";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageBlocks";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "News & Ratgeber",
  description: "Strategien, Automatisierungsideen und operative Einblicke für moderne Vermittlungsteams.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero eyebrow="News & Ratgeber" title="Recruiting-Insights. Von Praktikern für Praktiker." subtitle="Strategien, Automatisierungsideen und operative Einblicke für moderne Vermittlungsteams." />
      <Section className="bg-brand-bgLight" title="Aktuelle Artikel.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.title} className="group overflow-hidden rounded-2xl border border-brand-border bg-white transition hover:-translate-y-1 hover:border-brand-green/40 hover:shadow-xl hover:shadow-brand-green/10">
              <div className="relative h-48 overflow-hidden">
                <Image src={post.image} alt={post.imageAlt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <span className="rounded-full bg-brand-green/10 px-3 py-1 text-xs font-semibold text-brand-greenDark">{post.category}</span>
                <h2 className="mt-4 font-heading text-xl font-semibold">{post.title}</h2>
                <p className="mt-3 leading-7 text-brand-muted">{post.teaser}</p>
                <p className="mt-5 text-sm text-brand-muted">{post.date} · {post.readTime}</p>
                <p className="mt-5 text-sm font-semibold text-brand-greenDark">Weiterlesen</p>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
