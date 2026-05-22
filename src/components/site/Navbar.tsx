import { useEffect, useState } from "react";
import { Moon, Sun, Code2, Menu, X } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#programa", label: "Programa" },
  { href: "#areas", label: "Áreas" },
  { href: "#perfil", label: "Perfil" },
  { href: "#galeria", label: "Galería" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2 font-display font-bold text-lg">
          <span className="size-9 rounded-xl bg-gradient-primary grid place-items-center shadow-glow">
            <Code2 className="size-5 text-primary-foreground" />
          </span>
          <span>UFPS<span className="text-primary">.IS</span></span>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Cambiar tema"
            className="size-10 grid place-items-center rounded-lg border border-border hover:bg-secondary transition-colors"
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <a
            href="#contacto"
            className="hidden sm:inline-flex items-center px-4 h-10 rounded-lg bg-gradient-primary text-primary-foreground font-medium text-sm shadow-elegant hover:opacity-90 transition"
          >
            Inscríbete
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden size-10 grid place-items-center rounded-lg border border-border"
            aria-label="Menú"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <ul className="px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2.5 rounded-md text-sm hover:bg-secondary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
