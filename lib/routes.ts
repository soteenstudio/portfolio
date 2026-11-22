import type { Locale } from "@/i18n/config";
import type { SectionId } from "@/types";
export function sectionHref(locale: Locale, section: SectionId): string {
    return `/${locale}#${section}`;
}
export function projectHref(locale: Locale, id: string): string {
    return `/${locale}/projects/${id}`;
}
