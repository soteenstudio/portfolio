import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { About } from "@/components/sections/about";
import { Careers } from "@/components/sections/careers";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { Values } from "@/components/sections/values";
import { getDictionary } from "@/data/content";
import { isLocale, locales } from "@/i18n/config";
const BASE_URL = "https://soteenstudio.my.id";
interface HomePageProps {
    params: Promise<{
        locale: string;
    }>;
}
export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
    const { locale } = await params;
    if (!isLocale(locale))
        return {};
    const dict = getDictionary(locale);
    return {
        alternates: {
            canonical: `/${locale}`,
            languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])),
        },
        openGraph: {
            title: dict.meta.title,
            description: dict.meta.description,
            url: `/${locale}`,
            locale: locale === "id" ? "id_ID" : "en_US",
            type: "website",
        },
    };
}
export default async function HomePage({ params }: HomePageProps) {
    const { locale } = await params;
    if (!isLocale(locale))
        notFound();
    const dict = getDictionary(locale);
    const siteName = dict.meta.title?.split(/\s+[|\-—]\s+/)[0].trim() || "SoTeen Studio";
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                name: siteName,
                url: BASE_URL,
                description: dict.site.description,
                address: {
                    "@type": "PostalAddress",
                    addressLocality: dict.about.facts.location.value,
                    addressCountry: "ID",
                },
            },
            {
                "@type": "WebSite",
                name: siteName,
                url: `${BASE_URL}/${locale}`,
                description: dict.site.description,
                inLanguage: locale,
            },
        ],
    };
    return (<>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}/>
      <Hero locale={locale} copy={dict.hero}/>
      <About copy={dict.about}/>
      <Values copy={dict.values}/>
      <Services copy={dict.services}/>
      <Projects locale={locale} copy={dict.projects}/>
      <Careers copy={dict.careers}/>
      <Contact copy={dict.contact} address={dict.site.address}/>
    </>);
}
