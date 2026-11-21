import {
  Atom,
  Boxes,
  Compass,
  Handshake,
  Instagram,
  Layers,
  Linkedin,
  Github,
  Palette,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import type {
  CompanyFact,
  CoreValue,
  Cta,
  FooterColumn,
  HeroStat,
  NavItem,
  Project,
  SocialLink,
} from "@/types";

export const siteConfig = {
  name: "SoTeen Studio",
  tagline: "Studio digital untuk produk yang dibangun dengan teliti.",
  description:
    "SoTeen Studio merancang dan membangun produk digital, platform, dan pengalaman merek yang jernih, andal, dan berdampak.",
  email: "halo@soteen.studio",
  phone: "+62 000 0000 0000",
  address: "Jl. Contoh Raya No. 00, Denpasar, Bali, Indonesia",
} as const;

export const navItems: NavItem[] = [
  {
    label: "Perusahaan",
    children: [
      { label: "Tentang Kami", href: "#nilai", description: "Visi, misi, dan cara kerja kami." },
      { label: "Nilai Inti", href: "#nilai", description: "Prinsip yang memandu setiap keputusan." },
      { label: "Karier", href: "#kontak", description: "Bergabung dengan tim SoTeen." },
    ],
  },
  {
    label: "Proyek",
    children: [
      { label: "Semua Proyek", href: "#proyek", description: "Ekosistem produk dan studi kasus." },
      { label: "Layanan", href: "#proyek", description: "Dari strategi hingga peluncuran." },
    ],
  },
  { label: "Nilai", href: "#nilai" },
  { label: "Kontak", href: "#kontak" },
];

export const navCta: Cta = { label: "Mulai Diskusi", href: "#kontak" };

export const hero = {
  eyebrow: "SoTeen Studio · Est. 2024",
  title: "Kami membangun produk digital yang terasa sederhana.",
  highlight: "sederhana",
  description:
    "Kami membantu organisasi mengubah ide menjadi platform yang jelas, cepat, dan dipercaya penggunanya, dengan desain dan rekayasa yang berjalan beriringan.",
  primaryCta: { label: "Lihat Proyek", href: "#proyek" } satisfies Cta,
  secondaryCta: { label: "Hubungi Kami", href: "#kontak" } satisfies Cta,
};

export const heroStats: HeroStat[] = [
  { value: "40+", label: "Proyek terkirim" },
  { value: "12", label: "Industri dilayani" },
  { value: "98%", label: "Klien melanjutkan kerja sama" },
];

export const projectsSection = {
  id: "proyek",
  eyebrow: "Ekosistem",
  title: "Produk dan proyek yang kami bangun.",
  description:
    "Setiap karya berdiri sendiri, tetapi berbagi fondasi desain dan rekayasa yang sama.",
};

export const projects: Project[] = [
  {
    id: "atlas",
    name: "Atlas Platform",
    category: "Platform data",
    summary: "Dashboard terpadu untuk memantau operasional lintas cabang secara real-time.",
    status: "live",
    href: "#",
    icon: Compass,
    featured: true,
  },
  {
    id: "lumen",
    name: "Lumen Design System",
    category: "Sistem desain",
    summary: "Pustaka komponen dan token desain yang menjaga konsistensi lintas produk.",
    status: "live",
    href: "#",
    icon: Palette,
  },
  {
    id: "nexa",
    name: "Nexa Commerce",
    category: "E-commerce",
    summary: "Toko daring modular dengan alur checkout yang ringkas.",
    status: "beta",
    href: "#",
    icon: Boxes,
  },
  {
    id: "orbit",
    name: "Orbit Workflow",
    category: "Otomasi",
    summary: "Mesin alur kerja untuk menyederhanakan proses persetujuan internal.",
    status: "in-development",
    href: "#",
    icon: Workflow,
    featured: true,
  },
  {
    id: "quanta",
    name: "Quanta Labs",
    category: "Riset & prototipe",
    summary: "Ruang eksperimen untuk menguji teknologi baru sebelum masuk produksi.",
    status: "planned",
    href: "#",
    icon: Atom,
  },
  {
    id: "stratum",
    name: "Stratum CMS",
    category: "Manajemen konten",
    summary: "CMS headless yang fleksibel untuk tim konten dan pengembang.",
    status: "beta",
    href: "#",
    icon: Layers,
  },
];

export const valuesSection = {
  id: "nilai",
  eyebrow: "Profil Perusahaan",
  title: "Tim kecil, standar tinggi, dampak nyata.",
  description:
    "SoTeen Studio adalah tim desainer dan insinyur yang percaya bahwa produk terbaik lahir dari kejelasan tujuan dan perhatian pada detail.",
};

export const companyFacts: CompanyFact[] = [
  { label: "Didirikan", value: "2024" },
  { label: "Lokasi", value: "Denpasar, Bali" },
  { label: "Tim", value: "20+ profesional" },
  { label: "Fokus", value: "Produk & platform digital" },
];

export const coreValues: CoreValue[] = [
  {
    id: "clarity",
    title: "Kejelasan",
    description: "Kami menyederhanakan hal yang rumit agar pengguna dan tim selalu tahu langkah berikutnya.",
    icon: Sparkles,
  },
  {
    id: "integrity",
    title: "Integritas",
    description: "Jujur pada estimasi, transparan pada proses, dan bertanggung jawab pada hasil.",
    icon: ShieldCheck,
  },
  {
    id: "craft",
    title: "Kerajinan",
    description: "Detail kecil menentukan kualitas besar. Kami menyempurnakan sampai terasa tepat.",
    icon: Palette,
  },
  {
    id: "partnership",
    title: "Kemitraan",
    description: "Kami bekerja bersama klien sebagai satu tim, bukan sekadar penyedia jasa.",
    icon: Handshake,
  },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Perusahaan",
    links: [
      { label: "Tentang Kami", href: "#nilai" },
      { label: "Nilai Inti", href: "#nilai" },
      { label: "Karier", href: "#kontak" },
    ],
  },
  {
    title: "Proyek",
    links: [
      { label: "Atlas Platform", href: "#proyek" },
      { label: "Lumen Design System", href: "#proyek" },
      { label: "Semua Proyek", href: "#proyek" },
    ],
  },
  {
    title: "Sumber Daya",
    links: [
      { label: "Blog", href: "#" },
      { label: "Studi Kasus", href: "#" },
      { label: "Pusat Bantuan", href: "#" },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/soteenstudio", icon: Github },
  { label: "Instagram", href: "https://instagram.com/soteenstudio", icon: Instagram },
];

/** Placeholder legalitas: ganti dengan data resmi perusahaan sebelum publikasi. */
export const legalInfo = {
  entity: "PT SoTeen Studio Indonesia",
  registration: "NIB: 0000000000000 · NPWP: 00.000.000.0-000.000",
  notice: "Data legalitas di atas hanyalah placeholder.",
  links: [
    { label: "Kebijakan Privasi", href: "https://policies.soteenstudio.my.id/privacy" },
    { label: "Syarat & Ketentuan", href: "https://policies.soteenstudio.my.id/terms" },
    { label: "Kebijakan Cookie", href: "https://policies.soteenstudio.my.id/cookies" },
  ],
} as const;
