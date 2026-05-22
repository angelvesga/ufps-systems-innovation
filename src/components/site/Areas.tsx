import { Code2, Database, Network, Brain, Globe2, ShieldCheck, Boxes } from "lucide-react";

const areas = [
  { icon: Code2, title: "Programación", desc: "Algoritmos, estructuras de datos y paradigmas modernos de desarrollo." },
  { icon: Database, title: "Bases de Datos", desc: "Modelado, SQL/NoSQL y arquitecturas de datos a gran escala." },
  { icon: Network, title: "Redes y Telecom.", desc: "Protocolos, infraestructura y comunicaciones críticas." },
  { icon: Brain, title: "Inteligencia Artificial", desc: "Machine Learning, deep learning y sistemas inteligentes." },
  { icon: Globe2, title: "Desarrollo Web", desc: "Aplicaciones web modernas, full-stack y experiencias inmersivas." },
  { icon: ShieldCheck, title: "Ciberseguridad", desc: "Protección de sistemas, ethical hacking y respuesta a incidentes." },
  { icon: Boxes, title: "Multimedia & XR", desc: "Realidad mixta, gráficos avanzados y experiencias 3D." },
];

export function Areas() {
  return (
    <section id="areas" className="py-28 px-6 bg-secondary/40 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="text-sm font-medium text-primary">— Áreas de Formación</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Domina las disciplinas del futuro</h2>
          <p className="mt-5 text-muted-foreground">
            Siete pilares tecnológicos que te preparan para liderar la transformación digital.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {areas.map((a, i) => (
            <article
              key={a.title}
              className="reveal group relative p-7 rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-300"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="absolute -top-20 -right-20 size-48 rounded-full bg-primary/0 group-hover:bg-primary/10 blur-3xl transition-all duration-500" />
              <div className="relative">
                <div className="size-14 rounded-2xl bg-gradient-primary grid place-items-center shadow-elegant group-hover:scale-110 transition-transform">
                  <a.icon className="size-7 text-primary-foreground" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
                <div className="mt-5 text-xs font-mono text-primary/70">
                  0{i + 1}/0{areas.length}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
