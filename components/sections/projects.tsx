import { ProjectCard } from "@/components/shared/project-card";
import { SectionHeading } from "@/components/shared/section-heading";
import type { Dictionary } from "@/data/content";
import { projects } from "@/data/projects";
import type { Locale } from "@/i18n/config";

interface ProjectsProps {
  locale: Locale;
  copy: Dictionary["projects"];
}

export function Projects({ locale, copy }: ProjectsProps) {
  return (
    <section id="projects" className="scroll-mt-16 border-t bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              locale={locale}
              copy={copy}
              revealDelay={(index % 3) * 100}
              className={project.featured ? "md:col-span-3 lg:col-span-4" : "md:col-span-3 lg:col-span-2"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
