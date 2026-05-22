import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Areas } from "@/components/site/Areas";
import { Profile } from "@/components/site/Profile";
import { Gallery } from "@/components/site/Gallery";
import { Benefits } from "@/components/site/Benefits";
import { Stats } from "@/components/site/Stats";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Ingeniería de Sistemas — UFPS" },
      { name: "description", content: "Programa de Ingeniería de Sistemas de la UFPS: software, IA, ciberseguridad, redes y desarrollo web. Forma parte del futuro tecnológico." },
      { property: "og:title", content: "Ingeniería de Sistemas — UFPS" },
      { property: "og:description", content: "Programa universitario de Ingeniería de Sistemas en la Universidad Francisco de Paula Santander." },
    ],
  }),
});

function Index() {
  useReveal();
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Areas />
      <Profile />
      <Gallery />
      <Benefits />
      <Stats />
      <Contact />
      <Footer />
    </main>
  );
}
