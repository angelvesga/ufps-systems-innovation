import { Mail, MapPin, Phone, Send, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contacto" className="py-28 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
        <div className="reveal">
          <span className="text-sm font-medium text-primary">— Contacto</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            Empieza tu camino <span className="text-gradient">hoy</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Resolveremos tus dudas sobre el programa, admisiones y vida universitaria.
          </p>

          <div className="mt-10 space-y-5">
            {[
              { icon: MapPin, title: "Campus UFPS", desc: "Av. Gran Colombia No. 12E-96, Cúcuta, Colombia" },
              { icon: Mail, title: "Email", desc: "ingsistemas@ufps.edu.co" },
              { icon: Phone, title: "Teléfono", desc: "+57 (607) 577 6655" },
            ].map((c) => (
              <div key={c.title} className="flex items-start gap-4">
                <div className="size-11 rounded-xl bg-primary/10 grid place-items-center flex-shrink-0">
                  <c.icon className="size-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">{c.title}</div>
                  <div className="text-sm text-muted-foreground mt-0.5">{c.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex gap-3">
            {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Red social"
                className="size-11 grid place-items-center rounded-xl border border-border hover:border-primary hover:text-primary transition-colors"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            setTimeout(() => setSent(false), 3000);
          }}
          className="reveal p-8 md:p-10 rounded-3xl bg-gradient-card border border-border shadow-elegant"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Nombre" placeholder="Tu nombre" />
            <Field label="Email" type="email" placeholder="tu@email.com" />
          </div>
          <div className="mt-5">
            <Field label="Asunto" placeholder="Sobre qué quieres consultar" />
          </div>
          <div className="mt-5">
            <label className="text-sm font-medium">Mensaje</label>
            <textarea
              required
              rows={5}
              placeholder="Cuéntanos más..."
              className="mt-2 w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition resize-none"
            />
          </div>
          <button
            type="submit"
            className="mt-6 inline-flex items-center justify-center gap-2 w-full h-12 rounded-xl bg-gradient-primary text-primary-foreground font-medium shadow-elegant hover:shadow-glow transition-all"
          >
            {sent ? "¡Mensaje enviado!" : (<>Enviar mensaje <Send className="size-4" /></>)}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, type = "text", placeholder }: { label: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        required
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full px-4 h-12 rounded-xl bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
      />
    </div>
  );
}
