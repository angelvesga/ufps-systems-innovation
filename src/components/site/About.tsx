import { Cpu, Database, Globe, Shield } from "lucide-react";

const cards = [
  { icon: Cpu, title: "Software & Sistemas", desc: "Diseño, construcción y mantenimiento de soluciones tecnológicas robustas." },
  { icon: Database, title: "Datos & Backend", desc: "Bases de datos, arquitectura escalable y procesamiento de información." },
  { icon: Globe, title: "Redes & Cloud", desc: "Infraestructura conectada, telecomunicaciones y servicios distribuidos." },
  { icon: Shield, title: "IA & Ciberseguridad", desc: "Inteligencia artificial aplicada y protección de activos digitales." },
];

export function About() {
  return (
    <section id="programa" className="py-28 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl reveal">
          <span className="text-sm font-medium text-primary">— Acerca del Programa</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            Una carrera que <span className="text-gradient">transforma realidades</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            La Ingeniería de Sistemas de la UFPS forma profesionales integrales capaces de diseñar,
            desarrollar e implementar soluciones tecnológicas que impactan empresas, comunidades y
            el mundo. Una formación sólida en software, datos, redes, IA, ciberseguridad y
            desarrollo web.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c, i) => (
            <div
              key={c.title}
              className="reveal group p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-elegant"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="size-12 rounded-xl bg-primary/10 grid place-items-center group-hover:bg-gradient-primary transition-colors">
                <c.icon className="size-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
