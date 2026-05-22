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

export default function App() {
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
