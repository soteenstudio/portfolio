# SoTeen Studio - Company Profile Template

Next.js (App Router) + TypeScript + Tailwind CSS + shadcn/ui (Radix UI). Dua bahasa: Indonesia (`/id`) dan English (`/en`).

## Menjalankan
```bash
npm install
npm run dev
```
Membuka `/` akan diarahkan otomatis ke `/id` atau `/en` sesuai bahasa browser (`middleware.ts`).

## Struktur halaman
| Rute | Isi |
| --- | --- |
| `/[locale]` | Hero, About (`#about`), Values (`#values`), Services (`#services`), Projects (`#projects`), Careers (`#careers`), Contact (`#contact`) |
| `/[locale]/projects/[id]` | Halaman detail mandiri untuk setiap proyek |

## Kustomisasi
- **Teks** (per bahasa): `data/content/id.ts` dan `data/content/en.ts`. Bentuknya dijaga oleh `data/content/types.ts`, jadi TypeScript akan menandai kunci yang lupa diterjemahkan.
- **Daftar proyek**: `data/projects.ts` (array). Untuk menambah, menghapus, atau mengurutkan proyek cukup ubah file ini: id (slug URL), status, ikon, stack, dan teks per bahasa (`content.id` / `content.en`). Beranda, footer, dan halaman detail otomatis mengikuti.
- **Data struktural lain** (ikon, urutan, tautan sosial, kontak): `data/structure.ts`
- **Menambah bahasa**: tambahkan kode di `i18n/config.ts`, buat kamus baru bertipe `Dictionary`, daftarkan di `data/content/index.ts`, lalu lengkapi `content` pada setiap proyek di `data/projects.ts`.
- **Warna brand**: variabel `--brand` di `app/globals.css`. Warna mode gelap ada di blok `.dark` pada file yang sama.
- **Tema terang/gelap**: tombol di navbar (`components/shared/theme-toggle.tsx`). Default mengikuti preferensi sistem, pilihan pengguna disimpan di `localStorage`.
- **Animasi scroll**: tambahkan `{...reveal(delay, variant)}` (dari `lib/reveal.ts`) pada elemen yang ingin dianimasikan. Variannya `up` (default), `left`, `right`, `scale`, `fade`. Animasi otomatis nonaktif jika pengguna memilih *reduced motion*.
- **Section**: `components/sections/*`, komponen bersama: `components/shared/*`, komponen UI: `components/ui/*`

## Catatan konten
Semua teks, angka, dan kontak adalah data dummy. Email, telepon, alamat, tautan sosial, dan tautan legal (`#`) perlu diganti. Teks footer sengaja netral karena SoTeen Studio belum berbadan hukum; tambahkan nama badan usaha dan nomor legalitas di `footer.legalNotice` setelah tersedia.
