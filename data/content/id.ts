import type { Dictionary } from "./types";
export const id: Dictionary = {
    meta: {
        title: "SoTeen Studio | Profil Studio",
        description: "SoTeen Studio merancang dan membangun produk digital, platform, dan identitas merek yang jelas, andal, dan berdampak.",
    },
    site: {
        tagline: "Studio independen yang membangun game, perangkat lunak terbuka, dan eksperimen teknis.",
        description: "SoTeen Studio merancang dan membangun produk digital, platform, dan identitas merek yang jelas, andal, dan berdampak.",
        address: "Denpasar, Bali, Indonesia (alamat lengkap menyusul)",
    },
    nav: {
        ariaMain: "Navigasi utama",
        ariaMobile: "Navigasi seluler",
        ariaFooter: "Navigasi footer",
        openMenu: "Buka menu",
        closeMenu: "Tutup menu",
        language: "Pilih bahasa",
        theme: "Ganti tema terang/gelap",
        cta: "Mulai Diskusi",
        groups: { studio: "Studio", work: "Karya" },
        sections: {
            about: { label: "Tentang Kami", description: "Cerita, visi, dan misi studio kami." },
            values: { label: "Nilai Inti", description: "Prinsip di balik setiap karya yang kami rilis." },
            careers: { label: "Karier & Kolaborasi", description: "Ikut bereksperimen dan membangun bersama kami." },
            services: { label: "Fokus Karya", description: "Dari eksperimen bebas hingga rilis ke publik." },
            projects: { label: "Proyek", description: "Game, perangkat lunak terbuka, dan hasil eksperimen studio." },
            contact: { label: "Kontak", description: "Terhubung dan berdiskusi dengan tim kami." },
        },
    },
    hero: {
        eyebrow: "SoTeen Studio · Studio digital independen",
        title: "Membangun game, perangkat lunak terbuka, dan eksperimen teknologi yang relevan.",
        highlight: "relevan",
        description: "SoTeen Studio adalah studio pengembangan perangkat lunak independen. Kami merancang ekosistem game interaktif, merilis perkakas open-source untuk komunitas developer, serta mengeksplorasi berbagai ide teknis di luar kebiasaan.",
        primaryCta: "Lihat Proyek",
        secondaryCta: "Hubungi Kami",
        stats: {
            focus: "Area fokus",
            products: "Produk dalam ekosistem",
            values: "Nilai inti",
        },
    },
    about: {
        eyebrow: "Tentang Kami",
        title: "Studio kecil dengan rasa ingin tahu besar.",
        description: "SoTeen Studio adalah tim pengembang yang membangun game untuk pemain dan perangkat lunak terbuka untuk sesama developer, dengan berpegang pada prinsip kejelasan fungsi serta perhatian pada detail.",
        story: [
            "Kami percaya bahwa ide terbaik sering lahir dari eksperimen bebas tanpa batasan tujuan di awal. Dari sana, hanya karya yang benar-benar matang dan layak guna yang kami pertahankan untuk dirilis ke publik, baik sebagai proyek open-source maupun produk komersial.",
            "Dengan tim yang ramping dan bergerak cepat, kami leluasa mengulik teknologi dari fondasinya sambil tetap menjaga keseimbangan antara kontribusi bagi komunitas dan keberlanjutan bisnis studio.",
        ],
        vision: {
            title: "Visi",
            body: "Menjadi studio teknologi independen yang melahirkan produk digital berdampak luas, mendorong budaya berbagi kode terbuka, dan terus berani menguji batas baru dalam pengembangan perangkat lunak.",
        },
        mission: {
            title: "Misi",
            body: "Mengembangkan game berkualitas, membangun perkakas open-source yang bermanfaat, dan mengubah eksperimen teknis menjadi produk digital yang fungsional secara berkelanjutan.",
        },
        facts: {
            location: { label: "Lokasi", value: "Denpasar, Bali" },
            focus: { label: "Fokus", value: "Produk & platform digital" },
            form: { label: "Bentuk", value: "Studio independen" },
            model: { label: "Rilis", value: "Open-source & komersial" },
        },
    },
    values: {
        eyebrow: "Nilai Inti",
        title: "Prinsip di balik setiap karya yang kami rilis.",
        description: "Empat nilai ini menjadi pegangan kami dalam bereksperimen, membangun produk untuk pemain maupun developer, dan menjaga keseimbangan antara karya terbuka dan komersial.",
        items: {
            open: {
                title: "Terbuka Secara Prinsip",
                description: "Kami percaya ilmu dan kode terbaik tumbuh lewat kolaborasi terbuka, sambil tetap menjaga keberlanjutan produk komersial kami.",
            },
            experimental: {
                title: "Eksperimental",
                description: "Ide yang terdengar aneh sering kali menjadi pintu masuk menuju arsitektur dan mekanik produk yang segar.",
            },
            efficient: {
                title: "Efisien dan Fungsional",
                description: "Kami mengutamakan performa nyata, arsitektur yang bersih, dan pengalaman pengguna tanpa kerumitan yang tidak perlu.",
            },
            independent: {
                title: "Mandiri dan Adaptif",
                description: "Bergerak cepat sebagai tim kecil yang fokus pada eksekusi nyata dan kualitas produk jangka panjang.",
            },
        },
    },
    services: {
        eyebrow: "Fokus Karya",
        title: "Dari eksperimen bebas hingga rilis ke publik.",
        description: "Kami menyaring berbagai ide liar di studio menjadi produk nyata yang siap dimainkan maupun digunakan.",
        deliverablesLabel: "Cakupan rilis",
        items: {
            experiment: {
                title: "Eksperimen & Prototipe",
                description: "Menguji ide teknis tanpa batasan di awal untuk melihat mekanik atau konsep mana yang layak dilanjut.",
                deliverables: ["Riset fondasi teknis", "Prototipe cepat", "Kurasi kelayakan rilis"],
            },
            game: {
                title: "Pengembangan Game",
                description: "Merancang pengalaman bermain interaktif dengan sistem yang solid dan performa ringan bagi pemain.",
                deliverables: ["Mekanik permainan", "Sistem multiplayer & ekonomi", "Optimalisasi aset & UI"],
            },
            opensource: {
                title: "Ekosistem Open-Source",
                description: "Membangun perkakas, runtime, dan pustaka kode terbuka yang praktis bagi sesama developer.",
                deliverables: ["Developer tools & CLI", "Dokumentasi & standar", "Pemeliharaan repositori"],
            },
            product: {
                title: "Produk & Aplikasi Digital",
                description: "Mengembangkan perangkat lunak fungsional untuk kebutuhan umum maupun komersial secara berkelanjutan.",
                deliverables: ["Aplikasi web ringan", "Layanan & infrastruktur", "Distribusi lintas platform"],
            },
        },
    },
    projects: {
        eyebrow: "Proyek",
        title: "Produk dan proyek yang kami bangun.",
        description: "Setiap karya berdiri sendiri, tetapi berbagi fondasi desain dan rekayasa yang sama.",
        learnMore: "Lihat detail",
        statuses: {
            live: "Live",
            beta: "Beta",
            "in-development": "Dalam pengembangan",
            planned: "Direncanakan",
        },
    },
    projectDetail: {
        back: "Kembali ke semua proyek",
        overview: "Ringkasan",
        highlights: "Sorotan utama",
        stack: "Teknologi",
        links: "Tautan",
        status: "Status",
        ctaTitle: "Tertarik mencoba atau berkolaborasi?",
        ctaDescription: "Kirim masukan, laporkan bug, atau hubungi kami kalau mau ngobrol soal kolaborasi.",
        ctaButton: "Hubungi Kami",
        others: "Proyek lainnya",
    },
    careers: {
        eyebrow: "Karier & Kolaborasi",
        title: "Ikut bereksperimen dan membangun bersama kami.",
        description: "Kami senang bertemu dengan pembuat karya yang punya rasa ingin tahu tinggi dan peduli pada detail. Saat ini kami terbuka untuk kolaborasi di beberapa peran berikut.",
        roles: {
            gameDesigner: {
                title: "Game & Creative Designer",
                type: "Kolaborasi proyek",
                description: "Merancang konsep permainan, aset visual, dan pengalaman interaksi yang seru bagi pemain.",
            },
            systemsEngineer: {
                title: "Systems & Game Engineer",
                type: "Kolaborasi proyek",
                description: "Membangun mekanik game, perkakas developer, dan eksperimen teknis yang ringan serta solid.",
            },
            maintainerQa: {
                title: "Open-Source Maintainer & QA",
                type: "Fleksibel",
                description: "Menguji fitur, merapikan dokumentasi, dan menjaga kualitas setiap karya sebelum dirilis ke publik.",
            },
        },
        applyLabel: "Ajukan",
        openTitle: "Punya keahlian atau ide liar di luar daftar ini?",
        openDescription: "Kirimkan profil, GitHub, atau portofolio karya Anda. Kami selalu terbuka untuk kolaborasi baru.",
        openCta: "Kirim Profil",
    },
    contact: {
        eyebrow: "Kontak",
        title: "Terhubung dan berdiskusi dengan tim kami.",
        description: "Punya pertanyaan seputar game, masukan untuk proyek open-source, atau tertarik menjalin kolaborasi? Kirimkan pesan dan kami akan segera merespons.",
        emailLabel: "Email",
        phoneLabel: "Telepon",
        addressLabel: "Lokasi",
        cta: "Kirim Email",
    },
    footer: {
        ecosystem: "Ekosistem",
        rights: "Hak cipta dilindungi.",
        legalNotice: "Ketentuan penggunaan dan lisensi setiap proyek mengikuti aturan masing-masing rilis.",
        links: {
            privacy: "Kebijakan Privasi",
            terms: "Syarat & Ketentuan",
            cookies: "Kebijakan Cookie",
        },
    },
};
