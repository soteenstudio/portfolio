import type { Locale } from "@/i18n/config";
import { en } from "./en";
import { id } from "./id";
import type { Dictionary } from "./types";
const dictionaries: Record<Locale, Dictionary> = { id, en };
export function getDictionary(locale: Locale): Dictionary {
    return dictionaries[locale];
}
export type { Dictionary } from "./types";
