import { ArrowRight, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-tech.jpg";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero text-white">
      <img
        src={heroImg}
        alt=""
        width={1920}
        height={1080}
        className="absolute inset-0 size-full object-cover opacity-40 mix-blend-screen"
      />
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute -top-40 -right-40 size-[600px] rounded-full bg-primary/30 blur-3xl animate-float" />
      <div className="absolute -bottom-40 -left-40 size-[500px] rounded-full bg-primary-glow/20 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="max-w-3xl animate-fade-up">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur text-xs font-medium">
            <Sparkles className="size-3.5 text-primary-glow" />
            Universidad Francisco de Paula Santander
          </span>
          <h1 className="mt-6 text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95]">
            Ingeniería de
            <span className="block text-gradient">Sistemas</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl">
            Forma parte de la próxima generación de ingenieros que construyen el futuro digital con
            innovación, inteligencia artificial y desarrollo de software de clase mundial.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#programa"
              className="group inline-flex items-center gap-2 px-6 h-12 rounded-xl bg-gradient-primary text-primary-foreground font-medium shadow-elegant hover:shadow-glow transition-all"
            >
              Conocer más
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#areas"
              className="inline-flex items-center px-6 h-12 rounded-xl bg-white/10 border border-white/20 backdrop-blur text-white font-medium hover:bg-white/15 transition"
            >
              Explorar áreas
            </a>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
          {[
            ["10+", "Años formando"],
            ["7", "Áreas tech"],
            ["95%", "Empleabilidad"],
            ["∞", "Posibilidades"],
          ].map(([n, l]) => (
            <div key={l} className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
              <div className="text-3xl font-display font-bold text-primary-glow">{n}</div>
              <div className="text-xs text-white/60 mt-1">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
