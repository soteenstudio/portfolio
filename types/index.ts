import type { LucideIcon } from "lucide-react";
import type { Locale } from "@/i18n/config";

/** ID section pada halaman utama. Dipakai juga sebagai anchor (#about, dst). */
export type SectionId = "about" | "values" | "services" | "projects" | "careers" | "contact";
export type NavGroupId = "studio" | "work";

export type ProjectStatus = "live" | "beta" | "in-development" | "planned";
export type ValueId = "open" | "experimental" | "efficient" | "independent";
export type ServiceId = "experiment" | "game" | "opensource" | "product";
export type RoleId = "gameDesigner" | "systemsEngineer" | "maintainerQa";
export type StatId = "disciplines" | "products" | "values";
export type FactId = "location" | "focus" | "form" | "model";
export type LegalId = "privacy" | "terms" | "cookies";

export interface NavGroupDef {
  id: NavGroupId;
  sections: SectionId[];
}

export interface StatDef {
  id: StatId;
  value: string;
}

/** Teks satu proyek untuk satu bahasa. */
export interface ProjectContent {
  name: string;
  category: string;
  summary: string;
  /** Satu paragraf (string) atau beberapa paragraf (string[]). */
  overview: string | string[];
  highlights: string[];
}

export interface ProjectDef {
  /** Dipakai sebagai slug URL: /[locale]/projects/<id>. Harus unik. */
  id: string;
  status: ProjectStatus;
  icon: LucideIcon;
  /** Kartu lebar pada grid proyek. */
  featured?: boolean;
  stack: string[];
  /** Wajib lengkap untuk semua bahasa di `i18n/config.ts` (TypeScript akan menandai yang kurang). */
  content: Record<Locale, ProjectContent>;
}

export interface ValueDef {
  id: ValueId;
  icon: LucideIcon;
}

export interface ServiceDef {
  id: ServiceId;
  icon: LucideIcon;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface LegalLink {
  id: LegalId;
  href: string;
}

export interface CompanyFact {
  id: FactId;
  icon: LucideIcon;
}

export interface CoreValue {
  id: ValueId;
  icon: LucideIcon;
}

export interface Cta {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}