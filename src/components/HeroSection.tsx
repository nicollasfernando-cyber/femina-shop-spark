import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import heroImage from "@/assets/hero-products.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
              <span className="text-sm text-muted-foreground ml-2">412 avaliações</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-foreground">
              Redescubra Sua{" "}
              <span className="text-gradient-hero">Vitalidade</span> e Brilhe
              Todos os Dias.
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Suplementos premium desenvolvidos especialmente para a saúde
              feminina. Energia, beleza e equilíbrio hormonal com até 40% de
              desconto.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button variant="hero" size="lg" className="text-base px-10 py-6">
                Comprar Agora
              </Button>
              <Button variant="outline" size="lg" className="text-base px-10 py-6">
                Saiba Mais
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img
                src={heroImage}
                alt="Coleção de suplementos FemVital para saúde feminina"
                className="w-full h-auto object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
