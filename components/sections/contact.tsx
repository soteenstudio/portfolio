import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Dictionary } from "@/data/content";
import { contactInfo } from "@/data/structure";
import { reveal } from "@/lib/reveal";
interface ContactProps {
    copy: Dictionary["contact"];
    address: string;
}
export function Contact({ copy, address }: ContactProps) {
    const rows = [
        { icon: Mail, label: copy.emailLabel, value: contactInfo.email, href: `mailto:${contactInfo.email}` },
        { icon: Phone, label: copy.phoneLabel, value: contactInfo.phone, href: undefined },
        { icon: MapPin, label: copy.addressLabel, value: address, href: undefined },
    ];
    return (<section id="contact" className="scroll-mt-16 pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div {...reveal(0, "scale")} className="relative overflow-hidden rounded-[2rem] bg-primary px-8 py-14 text-primary-foreground sm:px-14 sm:py-20">
          <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-brand/30 blur-3xl"/>

          <div className="relative grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="mb-4 flex items-center gap-2 text-sm font-medium text-brand">
                <span aria-hidden className="h-px w-6 bg-brand"/>
                {copy.eyebrow}
              </p>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
                {copy.title}
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-primary-foreground/70">{copy.description}</p>
              <Button asChild size="lg" variant="brand" className="mt-9">
                <a href={`mailto:${contactInfo.email}`}>{copy.cta}</a>
              </Button>
            </div>

            <dl className="space-y-6 lg:col-span-5">
              {rows.map(({ icon: Icon, label, value, href }) => (<div key={label} className="flex items-start gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary-foreground/10">
                    <Icon className="size-4"/>
                  </span>
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wider text-primary-foreground/60">{label}</dt>
                    <dd className="mt-0.5">
                      {href ? (<a href={href} className="underline-offset-4 hover:underline">
                          {value}
                        </a>) : (value)}
                    </dd>
                  </div>
                </div>))}
            </dl>
          </div>
        </div>
      </div>
    </section>);
}
