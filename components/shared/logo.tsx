import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { siteName } from "@/data/structure";
import { cn } from "@/lib/utils";

export function Logo({ locale, className }: { locale: Locale; className?: string }) {
  return (
    <Link
      href={`/${locale}`}
      aria-label={siteName}
      className={cn("group inline-flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight", className)}
    >
      <span
        aria-hidden
        className="grid size-8 place-items-center rounded-lg bg-primary text-sm font-bold text-primary-foreground transition-transform duration-300 group-hover:-rotate-6"
      >
        S
      </span>
      SoTeen<span className="font-normal text-muted-foreground">Studio</span>
    </Link>
  );
}
