import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Dictionary } from "@/data/content";
import { heroStats } from "@/data/structure";
import type { Locale } from "@/i18n/config";
import { reveal } from "@/lib/reveal";
import { sectionHref } from "@/lib/routes";

function renderTitle(title: string, highlight: string) {
  const [before, after] = title.split(highlight);
  if (after === undefined) return title;
  return (
    <>
      {before}
      <span className="relative whitespace-nowrap text-brand">
        {highlight}
        <span aria-hidden className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-brand/30" />
      </span>
      {after}
    </>
  );
}

interface HeroProps {
  locale: Locale;
  copy: Dictionary["hero"];
}

export function Hero({ locale, copy }: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="bg-dots pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_65%)]" />
      <div aria-hidden className="pointer-events-none absolute -right-32 -top-32 -z-10 size-[28rem] rounded-full bg-brand/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 pb-20 pt-20 sm:px-8 sm:pt-28 lg:pb-28 lg:pt-36">
        <p {...reveal(0)} className="mb-6 inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
          <span className="size-1.5 rounded-full bg-brand" />
          {copy.eyebrow}
        </p>

        <h1 {...reveal(100)} className="max-w-4xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-6xl lg:text-7xl">
          {renderTitle(copy.title, copy.highlight)}
        </h1>

        <p {...reveal(200)} className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          {copy.description}
        </p>

        <div {...reveal(300)} className="mt-10 flex flex-wrap items-center gap-3">
          <Button asChild size="lg" variant="brand" className="group">
            <Link href={sectionHref(locale, "projects")}>
              {copy.primaryCta}
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href={sectionHref(locale, "contact")}>{copy.secondaryCta}</Link>
          </Button>
        </div>

        <dl {...reveal(400)} className="mt-16 grid max-w-3xl grid-cols-1 gap-8 border-t pt-8 sm:grid-cols-3">
          {heroStats.map((stat) => (
            <div key={stat.id} className="flex flex-col-reverse">
              <dt className="mt-1 text-sm text-muted-foreground">{copy.stats[stat.id]}</dt>
              <dd className="font-display text-3xl font-semibold tracking-tight">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
