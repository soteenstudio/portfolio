import { SectionHeading } from "@/components/shared/section-heading";
import type { Dictionary } from "@/data/content";
import { aboutFactIds } from "@/data/structure";
import { reveal } from "@/lib/reveal";
export function About({ copy }: {
    copy: Dictionary["about"];
}) {
    return (<section id="about" className="scroll-mt-16 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <SectionHeading eyebrow={copy.eyebrow} title={copy.title} description={copy.description}/>
          <div {...reveal(120)} className="mt-8 max-w-2xl space-y-5 leading-relaxed text-muted-foreground">
            {copy.story.map((paragraph) => (<p key={paragraph}>{paragraph}</p>))}
          </div>
        </div>

        <div className="space-y-5 lg:col-span-6">
          <div className="grid gap-5 sm:grid-cols-2">
            {[copy.vision, copy.mission].map((block, index) => (<div key={block.title} {...reveal(index * 120, "right")} className="rounded-3xl border p-7 transition-colors hover:border-brand/40">
                <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-brand">
                  {block.title}
                </h3>
                <p className="mt-3 leading-relaxed">{block.body}</p>
              </div>))}
          </div>

          <dl {...reveal(120, "right")} className="grid grid-cols-2 gap-6 rounded-3xl bg-secondary/60 p-7">
            {aboutFactIds.map((factId) => (<div key={factId}>
                <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {copy.facts[factId].label}
                </dt>
                <dd className="mt-1 font-medium">{copy.facts[factId].value}</dd>
              </div>))}
          </dl>
        </div>
      </div>
    </section>);
}
