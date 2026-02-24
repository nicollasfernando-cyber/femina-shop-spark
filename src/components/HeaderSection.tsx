import { Star } from "lucide-react";

const AnnouncementBar = () => {
  return (
    <div className="bg-gradient-hero py-2.5 text-primary-foreground text-center text-sm font-medium tracking-widest uppercase">
      ✨ Promoção de Verão — Até 40% de Desconto ✨
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="#home" className="flex items-center gap-2">
          <span className="font-serif text-2xl font-bold tracking-tight text-foreground">
            FEM<span className="text-primary">VITAL</span>
          </span>
          <span className="text-xs text-muted-foreground tracking-widest uppercase hidden sm:inline">
            Women's Health
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {["Início", "Produtos", "Sobre", "Depoimentos"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors tracking-wide"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export { AnnouncementBar, Navbar };
