import { AppWindow, FlaskConical, Gamepad2, Gauge, GitBranch, GitFork, Github, Instagram, Lightbulb, Linkedin, Rocket, } from "lucide-react";
import type { FactId, LegalLink, NavGroupDef, RoleId, SectionId, ServiceDef, SocialLink, StatDef, ValueDef, } from "@/types";
import { projects } from "./projects";
export const siteName = "SoTeen Studio";
export const contactInfo = {
    email: "halo@soteen.studio",
    phone: "+62 000 0000 0000",
} as const;
export const navGroups: NavGroupDef[] = [
    { id: "studio", sections: ["about", "values", "careers"] },
    { id: "work", sections: ["services", "projects"] },
];
export const topLevelNav: SectionId[] = ["contact"];
export const aboutFactIds: FactId[] = ["location", "focus", "form", "model"];
export const coreValues: ValueDef[] = [
    { id: "open", icon: GitFork },
    { id: "experimental", icon: Lightbulb },
    { id: "efficient", icon: Gauge },
    { id: "independent", icon: Rocket },
];
export const services: ServiceDef[] = [
    { id: "experiment", icon: FlaskConical },
    { id: "game", icon: Gamepad2 },
    { id: "opensource", icon: GitBranch },
    { id: "product", icon: AppWindow },
];
export const careerRoles: RoleId[] = ["gameDesigner", "systemsEngineer", "maintainerQa"];
export const heroStats: StatDef[] = [
    { id: "focus", value: "3" },
    { id: "products", value: String(projects.length) },
    { id: "values", value: String(coreValues.length) },
];
export const socialLinks: SocialLink[] = [
    { label: "LinkedIn", href: "#", icon: Linkedin },
    { label: "GitHub", href: "https://github.com/soteenstudio", icon: Github },
    { label: "Instagram", href: "https://instagram.com/soteenstudio", icon: Instagram },
];
export const legalLinks: LegalLink[] = [
    { id: "privacy", href: "https://policies.soteenstudio.my.id/privacy" },
    { id: "terms", href: "https://policies.soteenstudio.my.id/terms" },
    { id: "cookies", href: "https://policies.soteenstudio.my.id/cookies" },
];
