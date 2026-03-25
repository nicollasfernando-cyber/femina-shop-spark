import { Star } from "lucide-react";

const AnnouncementBar = () => {
  return (
    <div className="bg-gradient-hero py-2.5 text-primary-foreground text-center text-sm font-medium tracking-widest uppercase">
      ✨ Summer Sale — Save Up To 40% Off ✨
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="#home" className="flex items-center gap-2">
          <span className="font-serif text-2xl font-bold tracking-tight text-foreground">
            VEL<span className="text-primary">ARA</span>
          </span>
          <span className="text-xs text-muted-foreground tracking-widest uppercase hidden sm:inline">
            Health
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {[{ label: "Home", href: "home" }, { label: "Products", href: "products" }, { label: "About", href: "about" }, { label: "Testimonials", href: "testimonials" }].map((item) => (
            <a
              key={item.label}
              href={`#${item.href}`}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors tracking-wide"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export { AnnouncementBar, Navbar };