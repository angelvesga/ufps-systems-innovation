import { CheckCircle2, Briefcase, Rocket, Users } from "lucide-react";

const skills = [
  "Arquitectura y desarrollo de software empresarial",
  "Diseño e implementación de bases de datos",
  "Gestión de proyectos tecnológicos",
  "Implementación de soluciones de IA y analítica",
  "Auditoría y seguridad informática",
  "Desarrollo de aplicaciones web y móviles",
];

const opportunities = [
  { icon: Briefcase, title: "Desarrollador Full-Stack", desc: "Empresas tech locales y globales" },
  { icon: Rocket, title: "Emprendedor Digital", desc: "Crea tu propio producto o startup" },
  { icon: Users, title: "Líder de Equipos Tech", desc: "Project & Tech Lead en multinacionales" },
];

export function Profile() {
  return (
    <section id="perfil" className="py-28 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        <div className="reveal">
          <span className="text-sm font-medium text-primary">— Perfil Profesional</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            Listo para <span className="text-gradient">cualquier desafío</span> tecnológico
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Los ingenieros de sistemas egresados de la UFPS combinan rigor académico con
            habilidades prácticas, listos para aportar valor desde el primer día.
          </p>
          <ul className="mt-8 space-y-3">
            {skills.map((s) => (
              <li key={s} className="flex items-start gap-3">
                <CheckCircle2 className="size-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">{s}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4 reveal">
          {opportunities.map((o, i) => (
            <div
              key={o.title}
              className="group p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/40 hover:translate-x-1 transition-all"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="size-12 rounded-xl bg-primary/10 grid place-items-center group-hover:bg-gradient-primary transition-colors">
                  <o.icon className="size-5 text-primary group-hover:text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{o.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{o.desc}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="p-8 rounded-2xl bg-gradient-primary text-primary-foreground shadow-elegant">
            <div className="text-5xl font-display font-bold">95%</div>
            <p className="mt-2 text-sm opacity-90">
              de nuestros egresados consiguen empleo en menos de 6 meses tras graduarse.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
