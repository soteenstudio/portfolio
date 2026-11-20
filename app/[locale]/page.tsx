import { notFound } from "next/navigation";
import { About } from "@/components/sections/about";
import { Careers } from "@/components/sections/careers";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { Values } from "@/components/sections/values";
import { getDictionary } from "@/data/content";
import { isLocale } from "@/i18n/config";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <>
      <Hero locale={locale} copy={dict.hero} />
      <About copy={dict.about} />
      <Values copy={dict.values} />
      <Services copy={dict.services} />
      <Projects locale={locale} copy={dict.projects} />
      <Careers copy={dict.careers} />
      <Contact copy={dict.contact} address={dict.site.address} />
    </>
  );
}
