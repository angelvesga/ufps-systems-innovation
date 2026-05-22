import { TrendingUp, Lightbulb, Code, Rocket, Wifi, Brain } from "lucide-react";

const benefits = [
  { icon: TrendingUp, title: "Alta demanda laboral", desc: "El sector tech crece año tras año, con miles de vacantes sin cubrir." },
  { icon: Lightbulb, title: "Innovación constante", desc: "Trabaja con las tecnologías más recientes y resuelve problemas reales." },
  { icon: Code, title: "Desarrollo de software", desc: "Crea productos digitales que usan millones de personas." },
  { icon: Rocket, title: "Emprendimiento digital", desc: "Lanza tu propia startup o producto SaaS desde cualquier lugar." },
  { icon: Wifi, title: "Trabajo remoto global", desc: "Accede a oportunidades internacionales sin moverte de casa." },
  { icon: Brain, title: "Inteligencia artificial", desc: "Lidera la revolución de la IA aplicada a la industria." },
];

export function Benefits() {
  return (
    <section id="beneficios" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="text-sm font-medium text-primary">— Beneficios</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            ¿Por qué estudiar <span className="text-gradient">Sistemas</span>?
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className="reveal group relative p-7 rounded-2xl bg-gradient-card border border-border hover:shadow-elegant transition-all"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="absolute top-7 right-7 text-4xl font-display font-bold text-primary/15 group-hover:text-primary/30 transition-colors">
                0{i + 1}
              </div>
              <div className="size-12 rounded-xl bg-primary/10 grid place-items-center">
                <b.icon className="size-6 text-primary" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
