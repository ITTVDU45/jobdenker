import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  dark?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function Section({ id, eyebrow, title, subtitle, dark, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("px-4 py-20 md:px-8 md:py-28 lg:px-12", dark ? "bg-brand-dark text-white" : "bg-white", className)}>
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title || subtitle) && (
          <div className="mx-auto mb-12 max-w-3xl text-center">
            {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-brand-greenDark">{eyebrow}</p>}
            {title && <h2 className="font-heading text-3xl font-bold tracking-tight text-balance md:text-5xl">{title}</h2>}
            {subtitle && <p className={cn("mt-5 text-lg leading-8", dark ? "text-slate-300" : "text-brand-muted")}>{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
