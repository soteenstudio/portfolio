export const locales = ["id", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "id";

/** Nama bahasa yang ditampilkan pada language switcher. */
export const localeLabels: Record<Locale, string> = {
  id: "Bahasa Indonesia",
  en: "English",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
