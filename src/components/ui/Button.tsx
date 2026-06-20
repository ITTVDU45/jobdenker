import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "light" | "gradient";
  className?: string;
};

export function ButtonLink({ href, children, variant = "primary", className }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5",
        variant === "primary" &&
          "bg-lime-gradient shadow-lg shadow-brand-green/25 hover:shadow-xl hover:shadow-brand-green/35",
        variant === "gradient" &&
          "bg-lime-gradient text-white shadow-lg shadow-brand-green/25 hover:shadow-xl hover:shadow-brand-green/35 hover:opacity-95",
        variant === "secondary" &&
          "border border-brand-border bg-white text-slate-800 hover:border-brand-green hover:text-brand-greenDark",
        variant === "ghost" && "text-white hover:bg-white/10",
        variant === "light" && "bg-white text-brand-blue shadow-xl shadow-slate-950/10 hover:bg-slate-50 hover:text-brand-greenDark",
        className,
      )}
    >
      {children}
    </Link>
  );
}
