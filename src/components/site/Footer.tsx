import { Code2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="size-9 rounded-xl bg-gradient-primary grid place-items-center">
              <Code2 className="size-5 text-primary-foreground" />
            </span>
            UFPS<span className="text-primary">.IS</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            Programa de Ingeniería de Sistemas — Universidad Francisco de Paula Santander. Formando
            el talento tecnológico de la región y del país.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-sm">Navegación</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="#programa" className="hover:text-primary">Programa</a></li>
            <li><a href="#areas" className="hover:text-primary">Áreas</a></li>
            <li><a href="#perfil" className="hover:text-primary">Perfil</a></li>
            <li><a href="#beneficios" className="hover:text-primary">Beneficios</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-sm">Contacto</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>ingsistemas@ufps.edu.co</li>
            <li>+57 (607) 577 6655</li>
            <li>Cúcuta, Colombia</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row gap-3 justify-between items-center text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} UFPS — Ingeniería de Sistemas. Todos los derechos reservados.</div>
          <div>Diseñado con pasión tecnológica.</div>
        </div>
      </div>
    </footer>
  );
}
