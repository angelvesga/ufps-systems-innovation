import { useEffect, useRef, useState } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const dur = 1800;
          const tick = (t: number) => {
            const p = Math.min((t - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.round(to * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [to]);

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-display font-bold text-gradient">
      {n.toLocaleString()}{suffix}
    </div>
  );
}

const stats = [
  { n: 1800, suffix: "+", label: "Estudiantes activos" },
  { n: 500, suffix: "+", label: "Proyectos desarrollados" },
  { n: 7, suffix: "", label: "Áreas tecnológicas" },
  { n: 95, suffix: "%", label: "Nivel de empleabilidad" },
];

export function Stats() {
  return (
    <section className="py-24 px-6 bg-gradient-hero text-white relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label} className="reveal">
            <Counter to={s.n} suffix={s.suffix} />
            <div className="mt-3 text-sm text-white/70 uppercase tracking-wider">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
