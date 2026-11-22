import { Check } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import type { Dictionary } from "@/data/content";
import { services } from "@/data/structure";
import { reveal } from "@/lib/reveal";
export function Services({ copy }: {
    copy: Dictionary["services"];
}) {
    return (<section id="services" className="scroll-mt-16 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow={copy.eyebrow} title={copy.title} description={copy.description}/>

        <ul className="mt-14 grid gap-x-12 md:grid-cols-2">
          {services.map(({ id, icon: Icon }, index) => {
            const item = copy.items[id];
            return (<li key={id} {...reveal((index % 2) * 120)} className="group border-t py-10">
                <div className="flex items-start gap-5">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-secondary transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                    <Icon className="size-5"/>
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-tight">{item.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{item.description}</p>

                    <p className="mt-6 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {copy.deliverablesLabel}
                    </p>
                    <ul className="mt-3 space-y-2">
                      {item.deliverables.map((deliverable) => (<li key={deliverable} className="flex items-center gap-2 text-sm">
                          <Check className="size-4 text-brand"/>
                          {deliverable}
                        </li>))}
                    </ul>
                  </div>
                </div>
              </li>);
        })}
        </ul>
      </div>
    </section>);
}
