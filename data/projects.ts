/**
 * DAFTAR PROYEK: satu-satunya tempat yang perlu diubah untuk menambah, menghapus,
 * atau mengurutkan proyek. Halaman beranda, footer, dan halaman detail
 * (/[locale]/projects/[id]) otomatis mengikuti array ini.
 *
 * Cara menambah proyek: salin satu objek di bawah, ganti `id` (slug unik untuk URL),
 * `status`, `icon`, `stack`, lalu isi `content` untuk setiap bahasa. Jika bahasa baru
 * ditambahkan di `i18n/config.ts`, TypeScript akan menandai proyek yang belum
 * punya terjemahannya.
 *
 * Catatan: isi di bawah masih data contoh (placeholder); ganti dengan proyek SoTeen Studio.
 */
import {
  Atom,
  FileText,
  LayoutDashboard,
  Palette,
  ShoppingCart,
  Workflow,
} from "lucide-react";
import type { ProjectDef } from "@/types";

export const projects: ProjectDef[] = [
  {
    id: "lightvm",
    status: "live",
    icon: LayoutDashboard,
    featured: true,
    stack: ["Rust", "TypeScript", "C"],
    content: {
      id: {
        name: "LightVM",
        category: "Runtime & Virtualisasi",
        summary: "Mesin virtual berbasis kemampuan yang dirancang untuk eksekusi bytecode yang aman, dapat diprediksi, dan optimal.",
        overview:
          "LightVM adalah mesin virtual deterministik berperforma tinggi yang dirancang untuk menjembatani logika yang mudah dibaca manusia dengan eksekusi yang efisien di tingkat mesin. Dibangun menggunakan Rust, mesin ini mengutamakan transparansi sumber daya dan keamanan, sehingga menjadi runtime yang tepat untuk sistem embedded, mesin simulasi, serta aplikasi yang menuntut performa tinggi.",
        highlights: [
          "Eksekusi Eksplisit",
          "Sadar Sumber Daya",
          "Keamanan Eksplisit",
        ],
      },
      en: {
        name: "LightVM",
        category: "Runtime & Virtualization",
        summary: "A capability-based virtual machine designed for secure, predictable, and optimized bytecode execution.",
        overview:
          "LightVM is a high-performance, deterministic virtual machine designed to bridge the gap between human-readable logic and machine-efficient execution. Built with Rust, it prioritizes resource transparency and safety, making it an ideal runtime for embedded systems, simulation engines, and performance-critical applications.",
        highlights: [
          "Explicit Execution",
          "Resource Conscious",
          "Explicit Security",
        ],
      },
    },
  },
  {
    id: "storage-auction-simulator",
    status: "in-development",
    icon: Palette,
    stack: ["Roblox Studio", "Luau", "Rojo", "Wally"],
    content: {
      id: {
        name: "Storage Auction Simulator",
        category: "Game Simulasi (Roblox)",
        summary: "Game lelang penyimpanan dan pertambangan di Roblox yang mempertemukan pemain dalam jual beli item hasil mining di Auction House, lengkap dengan sistem peningkatan serta gacha pickaxe.",
        overview: [
          "Storage Auction Simulator adalah game simulasi dan ekonomi pemain di Roblox yang menggabungkan aktivitas mining dengan pelelangan terbuka antarpeserta di Auction House. Setiap lot penyimpanan menyimpan peluang sekaligus risiko, menuntut pemain membaca nilai barang sebelum menawar dan bersaing secara langsung dengan pemain lain.",
          "Progresi peralatan difokuskan pada pengembangan pickaxe melalui jalur upgrade maupun gacha untuk mempercepat penggalian dan membuka akses ke material yang lebih bernilai. Kami merancang game ini agar ritme ekonomi antarpemain tetap hidup, sistem intinya solid, dan pengalaman bermainnya terasa terarah tanpa mengorbankan kenyamanan performa."
        ],
        highlights: [
          "Token desain untuk warna, tipografi, dan jarak",
          "Komponen yang ramah aksesibilitas",
          "Dokumentasi untuk desainer dan pengembang",
        ],
      },
      en: {
        name: "Storage Auction Simulator",
        category: "Simulation Game (Roblox)",
        summary: "A component library and design tokens that keep every product consistent.",
        overview:
          "Lumen is a component library and set of design tokens that forms the visual foundation of all our products, from color to interaction patterns.",
        highlights: [
          "Design tokens for color, typography, and spacing",
          "Accessibility-friendly components",
          "Documentation for designers and developers",
        ],
      },
    },
  },
  {
    id: "nexa",
    status: "beta",
    icon: ShoppingCart,
    stack: ["Next.js", "TypeScript", "REST API"],
    content: {
      id: {
        name: "Nexa Commerce",
        category: "E-commerce",
        summary: "Toko daring modular dengan alur checkout yang ringkas.",
        overview:
          "Nexa Commerce adalah fondasi toko daring modular yang dapat disesuaikan dengan alur bisnis yang berbeda, dengan fokus pada checkout yang ringkas.",
        highlights: [
          "Katalog dan inventaris modular",
          "Alur checkout yang ringkas",
          "Dirancang untuk integrasi pembayaran dan pengiriman",
        ],
      },
      en: {
        name: "Nexa Commerce",
        category: "E-commerce",
        summary: "A modular online store with a streamlined checkout flow.",
        overview:
          "Nexa Commerce is a modular online store foundation that adapts to different business flows, with a focus on a streamlined checkout.",
        highlights: [
          "Modular catalog and inventory",
          "Streamlined checkout flow",
          "Designed for payment and shipping integrations",
        ],
      },
    },
  },
  {
    id: "orbit",
    status: "in-development",
    icon: Workflow,
    featured: true,
    stack: ["React", "Node.js", "PostgreSQL"],
    content: {
      id: {
        name: "Orbit Workflow",
        category: "Otomasi",
        summary: "Mesin alur kerja untuk menyederhanakan proses persetujuan internal.",
        overview:
          "Orbit Workflow membantu tim merancang alur persetujuan dan proses internal tanpa bergantung pada spreadsheet dan pesan berantai.",
        highlights: [
          "Pembangun alur kerja visual",
          "Notifikasi dan pelacakan status",
          "Riwayat audit untuk setiap keputusan",
        ],
      },
      en: {
        name: "Orbit Workflow",
        category: "Automation",
        summary: "A workflow engine that simplifies internal approval processes.",
        overview:
          "Orbit Workflow helps teams design approval flows and internal processes without relying on spreadsheets and chain messages.",
        highlights: [
          "Visual workflow builder",
          "Notifications and status tracking",
          "Audit history for every decision",
        ],
      },
    },
  },
  {
    id: "quanta",
    status: "planned",
    icon: Atom,
    stack: ["TypeScript", "Python"],
    content: {
      id: {
        name: "Quanta Labs",
        category: "Riset & prototipe",
        summary: "Ruang eksperimen untuk menguji teknologi baru sebelum masuk produksi.",
        overview:
          "Quanta Labs adalah ruang eksperimen tempat kami menguji teknologi dan ide baru dalam bentuk prototipe sebelum dipertimbangkan untuk produksi.",
        highlights: [
          "Prototipe cepat dengan umpan balik terukur",
          "Evaluasi teknologi baru secara terstruktur",
          "Dokumentasi temuan untuk seluruh tim",
        ],
      },
      en: {
        name: "Quanta Labs",
        category: "Research & prototypes",
        summary: "An experimentation space for testing new technology before it reaches production.",
        overview:
          "Quanta Labs is the experimentation space where we test new technology and ideas as prototypes before considering them for production.",
        highlights: [
          "Rapid prototypes with measurable feedback",
          "Structured evaluation of new technology",
          "Documented findings for the whole team",
        ],
      },
    },
  },
  {
    id: "stratum",
    status: "beta",
    icon: FileText,
    stack: ["Node.js", "GraphQL", "PostgreSQL"],
    content: {
      id: {
        name: "Stratum CMS",
        category: "Manajemen konten",
        summary: "CMS headless yang fleksibel untuk tim konten dan pengembang.",
        overview:
          "Stratum adalah CMS headless yang memisahkan pengelolaan konten dari tampilan, sehingga tim konten dan pengembang dapat bekerja paralel.",
        highlights: [
          "Model konten yang fleksibel",
          "API yang bersih untuk berbagai kanal",
          "Alur penyuntingan dan peninjauan",
        ],
      },
      en: {
        name: "Stratum CMS",
        category: "Content management",
        summary: "A flexible headless CMS for content teams and developers.",
        overview:
          "Stratum is a headless CMS that separates content management from presentation, so content teams and developers can work in parallel.",
        highlights: [
          "Flexible content models",
          "Clean API for multiple channels",
          "Editing and review workflow",
        ],
      },
    },
  },
];

export function getProject(id: string): ProjectDef | undefined {
  return projects.find((project) => project.id === id);
}
