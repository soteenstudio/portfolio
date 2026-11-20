import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/section-heading";
import type { Dictionary } from "@/data/content";
import { careerRoles, contactInfo } from "@/data/structure";
import { reveal } from "@/lib/reveal";

export function Careers({ copy }: { copy: Dictionary["careers"] }) {
  const mailto = (subject: string) =>
    `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}`;

  return (
    <section id="careers" className="scroll-mt-16 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />
        </div>

        <div className="lg:col-span-7">
          <ul className="divide-y border-y">
            {careerRoles.map((roleId, index) => {
              const role = copy.roles[roleId];
              return (
                <li key={roleId} {...reveal(index * 100, "right")}>
                  <a
                    href={mailto(role.title)}
                    className="group flex items-center justify-between gap-6 py-6 transition-colors hover:bg-secondary/40 sm:px-4"
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="font-display text-lg font-semibold tracking-tight">{role.title}</h3>
                        <Badge variant="outline">{role.type}</Badge>
                      </div>
                      <p className="mt-1 text-muted-foreground">{role.description}</p>
                    </div>
                    <span className="inline-flex shrink-0 items-center gap-1 text-sm font-medium">
                      {copy.applyLabel}
                      <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div {...reveal(100)} className="mt-8 flex flex-col gap-4 rounded-3xl bg-secondary/60 p-7 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-display text-lg font-semibold tracking-tight">{copy.openTitle}</h3>
              <p className="mt-1 max-w-md text-muted-foreground">{copy.openDescription}</p>
            </div>
            <Button asChild variant="outline" className="shrink-0">
              <a href={mailto(copy.openCta)}>{copy.openCta}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
