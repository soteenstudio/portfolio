import Link from "next/link";
import { Logo } from "@/components/shared/logo";
import type { Dictionary } from "@/data/content";
import { projects } from "@/data/projects";
import { legalLinks, navGroups, siteName, socialLinks, topLevelNav } from "@/data/structure";
import type { Locale } from "@/i18n/config";
import { projectHref, sectionHref } from "@/lib/routes";
import { reveal } from "@/lib/reveal";
interface FooterProps {
    locale: Locale;
    dict: Dictionary;
}
export function Footer({ locale, dict }: FooterProps) {
    const lastGroupIndex = navGroups.length - 1;
    const columns = [
        ...navGroups.map((group, index) => ({
            title: dict.nav.groups[group.id],
            links: [...group.sections, ...(index === lastGroupIndex ? topLevelNav : [])].map((section) => ({
                label: dict.nav.sections[section].label,
                href: sectionHref(locale, section),
            })),
        })),
        {
            title: dict.footer.ecosystem,
            links: projects.map((project) => ({
                label: project.content[locale].name,
                href: projectHref(locale, project.id),
            })),
        },
    ];
    return (<footer className="border-t bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8" {...reveal(0, "fade")}>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo locale={locale}/>
            <p className="mt-5 max-w-sm leading-relaxed text-muted-foreground">{dict.site.tagline}</p>

            <ul className="mt-8 flex gap-2">
              {socialLinks.map(({ label, href, icon: Icon }) => (<li key={label}>
                  <Link href={href} aria-label={label} className="grid size-10 place-items-center rounded-full border bg-background text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:text-brand">
                    <Icon className="size-4"/>
                  </Link>
                </li>))}
            </ul>
          </div>

          <nav aria-label={dict.nav.ariaFooter} className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
            {columns.map((column) => (<div key={column.title}>
                <h3 className="text-sm font-semibold">{column.title}</h3>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (<li key={link.href}>
                      <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                        {link.label}
                      </Link>
                    </li>))}
                </ul>
              </div>))}
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t pt-8 text-xs text-muted-foreground lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-1">
            <p>
              © {new Date().getFullYear()} {siteName}. {dict.footer.rights}
            </p>
            <p>{dict.footer.legalNotice}</p>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((link) => (<li key={link.id}>
                <Link href={link.href} className="hover:text-foreground">
                  {dict.footer.links[link.id]}
                </Link>
              </li>))}
          </ul>
        </div>
      </div>
    </footer>);
}
