import { Atom, FileText, LayoutDashboard, Palette, ShoppingCart, Workflow, } from "lucide-react";
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
                links: ["Repositori_GitHub https://github.com/soteenstudio/lightvm", "Dokumentasi https://lightvm.soteenstudio.my.id"],
                summary: "Mesin virtual berbasis Rust dengan eksekusi eksplisit, kontrol sumber daya terukur, dan pipeline terpisah dari resolusi simbol hingga validasi dan benchmarking.",
                overview: [
                    "LightVM adalah mesin virtual yang dibangun di atas Rust dengan pendekatan eksekusi langsung tanpa keajaiban tersembunyi, jejak memori yang dijaga tetap ringkas, serta batas keamanan dan kuota yang diatur secara eksplisit oleh host. Alur kerjanya memisahkan proses inti dan utilitas pendukung agar setiap tahap tetap jelas dan terkendali.",
                    "Di dalamnya terdapat resolusi simbol lewat Torja, optimasi bytecode opsional melalui Gazle, pemeriksaan batas serta kuota eksekusi lewat Krates, dan pengukuran performa terpisah menggunakan Itme. Proyek ini kami kembangkan sebagai fondasi runtime teknis yang transparan, terukur, dan bisa diuji langsung pada skenario komputasi yang menuntut kendali ketat."
                ],
                highlights: [
                    "Eksekusi Eksplisit",
                    "Sadar Sumber Daya",
                    "Keamanan Eksplisit",
                ],
            },
            en: {
                name: "LightVM",
                category: "Runtime & Virtualization",
                links: ["GitHub_Repository https://github.com/soteenstudio/lightvm", "Documentation https://lightvm.soteenstudio.my.id"],
                summary: "A Rust-based virtual machine with explicit execution, measurable resource limits, and separated stages from symbol resolution to validation and benchmarking.",
                overview: [
                    "LightVM is a virtual machine built in Rust around explicit instruction dispatch, a lean memory footprint, and host-configured security boundaries and quotas. Its pipeline separates core execution concerns from optional and diagnostic tooling so each stage stays predictable and easy to reason about.",
                    "It brings together symbol resolution via Torja, optional bytecode optimization through Gazle, structural and runtime quota checks in Krates, and standalone performance measurement with Itme. We built it as a transparent, resource-conscious runtime for workloads that demand clear control over execution."
                ],
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
                summary: "Game lelang penyimpanan dan mining di Roblox dengan jual beli antarpemain di Auction House serta progresi pickaxe.",
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
                summary: "A Roblox storage auction and mining game with player-to-player Auction House trading and pickaxe progression.",
                overview: [
                    "Storage Auction Simulator is a player-driven economy and simulation game on Roblox that pairs mining with open bidding in an Auction House. Every storage lot carries both upside and risk, pushing players to judge item value before bidding directly against others.",
                    "Tool progression centers on upgrading and rolling for pickaxes to dig faster and reach higher-value materials. We designed the game to keep player market dynamics active, maintain solid core systems, and deliver focused gameplay without sacrificing performance."
                ],
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
                overview: "Nexa Commerce adalah fondasi toko daring modular yang dapat disesuaikan dengan alur bisnis yang berbeda, dengan fokus pada checkout yang ringkas.",
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
                overview: "Nexa Commerce is a modular online store foundation that adapts to different business flows, with a focus on a streamlined checkout.",
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
                overview: "Orbit Workflow membantu tim merancang alur persetujuan dan proses internal tanpa bergantung pada spreadsheet dan pesan berantai.",
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
                overview: "Orbit Workflow helps teams design approval flows and internal processes without relying on spreadsheets and chain messages.",
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
                overview: "Quanta Labs adalah ruang eksperimen tempat kami menguji teknologi dan ide baru dalam bentuk prototipe sebelum dipertimbangkan untuk produksi.",
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
                overview: "Quanta Labs is the experimentation space where we test new technology and ideas as prototypes before considering them for production.",
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
                overview: "Stratum adalah CMS headless yang memisahkan pengelolaan konten dari tampilan, sehingga tim konten dan pengembang dapat bekerja paralel.",
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
                overview: "Stratum is a headless CMS that separates content management from presentation, so content teams and developers can work in parallel.",
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
