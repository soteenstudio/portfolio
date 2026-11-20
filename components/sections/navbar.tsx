"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LanguageSwitcher } from "@/components/shared/language-switcher";
import { Logo } from "@/components/shared/logo";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import type { Dictionary } from "@/data/content";
import { navGroups, topLevelNav } from "@/data/structure";
import type { Locale } from "@/i18n/config";
import { sectionHref } from "@/lib/routes";
import { cn } from "@/lib/utils";

interface NavbarProps {
  locale: Locale;
  copy: Dictionary["nav"];
}

export function Navbar({ locale, copy }: NavbarProps) {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b border-transparent bg-background/80 backdrop-blur-md transition-colors",
        scrolled && "border-border",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo locale={locale} />

        <nav aria-label={copy.ariaMain} className="hidden items-center gap-1 md:flex">
          {navGroups.map((group) => (
            <DropdownMenu key={group.id}>
              <DropdownMenuTrigger className="group inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-muted-foreground outline-none transition-colors hover:bg-accent hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring data-[state=open]:bg-accent data-[state=open]:text-foreground">
                {copy.groups[group.id]}
                <ChevronDown className="size-3.5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                {group.sections.map((section) => (
                  <DropdownMenuItem key={section} asChild>
                    <Link href={sectionHref(locale, section)}>
                      <span className="font-medium">{copy.sections[section].label}</span>
                      <span className="text-xs text-muted-foreground">{copy.sections[section].description}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ))}
          {topLevelNav.map((section) => (
            <Link
              key={section}
              href={sectionHref(locale, section)}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {copy.sections[section].label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher locale={locale} label={copy.language} />
          <ThemeToggle label={copy.theme} />
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link href={sectionHref(locale, "contact")}>{copy.cta}</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={open ? copy.closeMenu : copy.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {open ? (
        <nav aria-label={copy.ariaMobile} className="border-t bg-background px-5 py-4 md:hidden">
          <ul className="space-y-4">
            {navGroups.map((group) => (
              <li key={group.id}>
                <p className="px-3 pb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {copy.groups[group.id]}
                </p>
                <ul>
                  {group.sections.map((section) => (
                    <li key={section}>
                      <Link
                        href={sectionHref(locale, section)}
                        onClick={closeMenu}
                        className="block rounded-xl px-3 py-2.5 text-sm font-medium hover:bg-accent"
                      >
                        {copy.sections[section].label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
            {topLevelNav.map((section) => (
              <li key={section}>
                <Link
                  href={sectionHref(locale, section)}
                  onClick={closeMenu}
                  className="block rounded-xl px-3 py-2.5 text-sm font-medium hover:bg-accent"
                >
                  {copy.sections[section].label}
                </Link>
              </li>
            ))}
          </ul>
          <Button asChild className="mt-4 w-full">
            <Link href={sectionHref(locale, "contact")} onClick={closeMenu}>
              {copy.cta}
            </Link>
          </Button>
        </nav>
      ) : null}
    </header>
  );
}
