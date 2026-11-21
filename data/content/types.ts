import type {
  FactId,
  LegalId,
  NavGroupId,
  ProjectStatus,
  RoleId,
  SectionId,
  ServiceId,
  StatId,
  ValueId,
} from "@/types";

export interface SectionCopy {
  eyebrow: string;
  title: string;
  description: string;
}

interface TitledText {
  title: string;
  body: string;
}

/** Bentuk kamus untuk satu bahasa. Menambah bahasa baru = membuat objek bertipe ini. */
export interface Dictionary {
  meta: { title: string; description: string };
  site: { tagline: string; description: string; address: string };
  nav: {
    ariaMain: string;
    ariaMobile: string;
    ariaFooter: string;
    openMenu: string;
    closeMenu: string;
    language: string;
    theme: string;
    cta: string;
    groups: Record<NavGroupId, string>;
    sections: Record<SectionId, { label: string; description: string }>;
  };
  hero: {
    eyebrow: string;
    title: string;
    /** Harus berupa potongan persis dari `title`. */
    highlight: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    stats: Record<StatId, string>;
  };
  about: SectionCopy & {
    story: string[];
    vision: TitledText;
    mission: TitledText;
    facts: Record<FactId, { label: string; value: string }>;
  };
  values: SectionCopy & {
    items: Record<ValueId, { title: string; description: string }>;
  };
  services: SectionCopy & {
    deliverablesLabel: string;
    items: Record<ServiceId, { title: string; description: string; deliverables: string[] }>;
  };
  projects: SectionCopy & {
    learnMore: string;
    statuses: Record<ProjectStatus, string>;
  };
  projectDetail: {
    back: string;
    overview: string;
    highlights: string;
    stack: string;
    links: string;
    status: string;
    ctaTitle: string;
    ctaDescription: string;
    ctaButton: string;
    others: string;
  };
  careers: SectionCopy & {
    roles: Record<RoleId, { title: string; type: string; description: string }>;
    applyLabel: string;
    openTitle: string;
    openDescription: string;
    openCta: string;
  };
  contact: SectionCopy & {
    emailLabel: string;
    phoneLabel: string;
    addressLabel: string;
    cta: string;
  };
  footer: {
    ecosystem: string;
    rights: string;
    legalNotice: string;
    links: Record<LegalId, string>;
  };
}
