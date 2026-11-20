import type { Locale } from "@/i18n/config";
import type { SectionId } from "@/types";

/** Tautan ke section di halaman utama; juga bekerja dari halaman detail. */
export function sectionHref(locale: Locale, section: SectionId): string {
  return `/${locale}#${section}`;
}

export function projectHref(locale: Locale, id: string): string {
  return `/${locale}/projects/${id}`;
}
