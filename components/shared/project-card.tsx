import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectStatusBadge } from "@/components/shared/project-status-badge";
import type { Dictionary } from "@/data/content";
import type { Locale } from "@/i18n/config";
import { projectHref } from "@/lib/routes";
import { reveal } from "@/lib/reveal";
import { cn } from "@/lib/utils";
import type { ProjectDef } from "@/types";

interface ProjectCardProps {
  project: ProjectDef;
  locale: Locale;
  copy: Dictionary["projects"];
  /** Dipakai induk grid untuk mengatur lebar kartu. */
  className?: string;
  /** Jeda animasi muncul (ms) untuk efek berurutan. */
  revealDelay?: number;
}

export function ProjectCard({ project, locale, copy, className, revealDelay = 0 }: ProjectCardProps) {
  const { icon: Icon, status, id } = project;
  const text = project.content[locale];

  return (
    <Link
      href={projectHref(locale, id)}
      {...reveal(revealDelay)}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-3xl border bg-background p-7 transition-all duration-300",
        "hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className,
      )}
    >
      <div>
        <div className="mb-8 flex items-start justify-between">
          <span className="grid size-11 place-items-center rounded-2xl bg-secondary text-foreground transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
            <Icon className="size-5" />
          </span>
          <ProjectStatusBadge status={status} label={copy.statuses[status]} />
        </div>
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{text.category}</p>
        <h3 className="mt-2 font-display text-xl font-semibold tracking-tight">{text.name}</h3>
        <p className={cn("mt-3 leading-relaxed text-muted-foreground", project.featured && "max-w-lg")}>
          {text.summary}
        </p>
      </div>
      <span className="mt-8 inline-flex items-center gap-1 text-sm font-medium">
        {copy.learnMore}
        <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
