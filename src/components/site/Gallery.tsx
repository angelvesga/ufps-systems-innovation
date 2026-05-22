import lab from "@/assets/gallery-lab.jpg";
import code from "@/assets/gallery-code.jpg";
import server from "@/assets/gallery-server.jpg";
import ai from "@/assets/gallery-ai.jpg";
import students from "@/assets/gallery-students.jpg";
import vr from "@/assets/gallery-vr.jpg";

const items = [
  { src: lab, title: "Laboratorios", cls: "md:col-span-2 md:row-span-2" },
  { src: code, title: "Programación" },
  { src: ai, title: "Inteligencia Artificial" },
  { src: server, title: "Infraestructura" },
  { src: vr, title: "Realidad Mixta" },
  { src: students, title: "Comunidad", cls: "md:col-span-2" },
];

export function Gallery() {
  return (
    <section id="galeria" className="py-28 px-6 bg-secondary/40">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl reveal">
          <span className="text-sm font-medium text-primary">— Galería Tecnológica</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Vive la experiencia UFPS</h2>
          <p className="mt-5 text-muted-foreground">
            Espacios, herramientas y comunidad que potencian tu formación tecnológica.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-3">
          {items.map((it, i) => (
            <div
              key={it.title}
              className={`reveal group relative overflow-hidden rounded-2xl border border-border ${it.cls ?? ""}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <img
                src={it.src}
                alt={it.title}
                loading="lazy"
                className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                <div className="text-xs font-mono opacity-70">0{i + 1}</div>
                <div className="text-lg font-semibold mt-1">{it.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
