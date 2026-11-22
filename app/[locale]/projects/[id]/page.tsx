import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/shared/project-card";
import { ProjectStatusBadge } from "@/components/shared/project-status-badge";
import { getDictionary } from "@/data/content";
import { getProject, projects } from "@/data/projects";
import { isLocale, locales } from "@/i18n/config";
import { reveal } from "@/lib/reveal";
import { sectionHref } from "@/lib/routes";
interface ProjectPageProps {
    params: Promise<{
        locale: string;
        id: string;
    }>;
}
export function generateStaticParams() {
    return locales.flatMap((locale) => projects.map((project) => ({ locale, id: project.id })));
}
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
    const { locale, id } = await params;
    const project = getProject(id);
    if (!isLocale(locale) || !project)
        return {};
    const text = project.content[locale];
    const path = `/${locale}/projects/${project.id}`;
    return {
        title: text.name,
        description: text.summary,
        alternates: {
            canonical: path,
            languages: Object.fromEntries(locales.map((l) => [l, `/${l}/projects/${project.id}`])),
        },
        openGraph: {
            title: text.name,
            description: text.summary,
            url: path,
            locale: locale === "id" ? "id_ID" : "en_US",
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title: text.name,
            description: text.summary,
        },
    };
}
export default async function ProjectPage({ params }: ProjectPageProps) {
    const { locale, id } = await params;
    const project = getProject(id);
    if (!isLocale(locale) || !project)
        notFound();
    const dict = getDictionary(locale);
    const text = project.content[locale];
    const labels = dict.projectDetail;
    const Icon = project.icon;
    const others = projects.filter((p) => p.id !== project.id).slice(0, 3);
    return (<>
      <article className="mx-auto max-w-7xl px-5 pb-24 pt-12 sm:px-8 sm:pt-16">
        <Link href={sectionHref(locale, "projects")} className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1"/>
          {labels.back}
        </Link>

        <div className="mt-10 grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <span className="grid size-14 place-items-center rounded-2xl bg-brand text-brand-foreground">
              <Icon className="size-6"/>
            </span>
            <p className="mt-8 text-xs font-medium uppercase tracking-wider text-muted-foreground">{text.category}</p>
            <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              {text.name}
            </h1>
            <p className="mt-5 max-w-2xl text-xl leading-relaxed text-muted-foreground">{text.summary}</p>

            <section {...reveal(0)} className="mt-14 border-t pt-10">
              <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-brand">
                {labels.overview}
              </h2>
              <div className="mt-4 max-w-2xl space-y-5 text-lg leading-relaxed">
                {[text.overview].flat().map((paragraph) => (<p key={paragraph}>{paragraph}</p>))}
              </div>
            </section>

            <section {...reveal(0)} className="mt-12 border-t pt-10">
              <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-brand">
                {labels.highlights}
              </h2>
              <ul className="mt-5 space-y-4">
                {text.highlights.map((highlight, index) => (<li key={highlight} {...reveal(index * 100)} className="flex items-start gap-3 text-lg">
                    <Check className="mt-1 size-5 shrink-0 text-brand"/>
                    {highlight}
                  </li>))}
              </ul>
            </section>
          </div>

          <aside className="lg:col-span-4">
            <div {...reveal(150, "right")} className="space-y-8 rounded-3xl border p-7 lg:sticky lg:top-28">
              <dl className="space-y-6">
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {labels.status}
                  </dt>
                  <dd className="mt-2">
                    <ProjectStatusBadge status={project.status} label={dict.projects.statuses[project.status]}/>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {labels.stack}
                  </dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (<span key={tech} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium">
                        {tech}
                      </span>))}
                  </dd>
                </div>
                {text.links && text.links.length > 0 && (<div>
                    <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {labels.links}
                    </dt>
                    <dd className="mt-2 flex flex-wrap gap-2">
                      {text.links.map((item) => {
                const [rawLabel, url] = item.split(" ");
                const label = rawLabel.replaceAll("_", " ");
                return (<a key={url} href={url} target="_blank" rel="noreferrer noopener" className="rounded-full bg-secondary px-3 py-1 text-xs font-medium">
                            {label}
                          </a>);
            })}
                    </dd>
                  </div>)}
              </dl>

              <div className="border-t pt-6">
                <h2 className="font-display text-lg font-semibold tracking-tight">{labels.ctaTitle}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{labels.ctaDescription}</p>
                <Button asChild variant="brand" className="mt-5 w-full">
                  <Link href={sectionHref(locale, "contact")}>{labels.ctaButton}</Link>
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </article>

      <section className="border-t bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 {...reveal()} className="font-display text-2xl font-semibold tracking-tight">{labels.others}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {others.map((other, index) => (<ProjectCard key={other.id} project={other} locale={locale} copy={dict.projects} revealDelay={index * 100}/>))}
          </div>
        </div>
      </section>
    </>);
}
