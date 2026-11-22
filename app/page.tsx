import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Values } from "@/components/sections/values";
import { Footer } from "@/components/sections/footer";
import { getDictionary } from "@/data/content";
import { defaultLocale } from "@/i18n/config";
export default function HomePage() {
    const locale = defaultLocale;
    const dict = getDictionary(locale);
    return (<>
      <Navbar locale={locale} copy={dict.nav}/>
      <main>
        <Hero locale={locale} copy={dict.hero}/>
        <Projects locale={locale} copy={dict.projects}/>
        <Values copy={dict.values}/>
      </main>
      <Footer locale={locale} dict={dict}/>
    </>);
}
