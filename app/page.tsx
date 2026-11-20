import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Values } from "@/components/sections/values";
import { Footer } from "@/components/sections/footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Values />
      </main>
      <Footer />
    </>
  );
}
