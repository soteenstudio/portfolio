import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/sections/footer";
import { Navbar } from "@/components/sections/navbar";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { ThemeSync } from "@/components/shared/theme-sync";
import { getDictionary } from "@/data/content";
import { siteName } from "@/data/structure";
import { isLocale, locales } from "@/i18n/config";
import { themeInitScript } from "@/lib/theme";
import "../globals.css";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const display = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-display", display: "swap" });

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Pick<LocaleLayoutProps, "params">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);

  return {
    title: { default: dict.meta.title, template: `%s | ${siteName}` },
    description: dict.meta.description,
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])),
    },
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <html lang={locale} className={`${sans.variable} ${display.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <ThemeSync />
        <ScrollReveal />
        <Navbar locale={locale} copy={dict.nav} />
        <main>{children}</main>
        <Footer locale={locale} dict={dict} />
      </body>
    </html>
  );
}
