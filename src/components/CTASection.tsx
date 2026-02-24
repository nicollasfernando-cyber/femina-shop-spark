import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-products.jpg";

const CTASection = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-card">
            <img
              src={heroImage}
              alt="Produtos FemVital"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground leading-tight">
              A solução definitiva para a{" "}
              <span className="text-gradient-hero">saúde e beleza</span> da
              mulher moderna.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">FEMVITAL</strong> é um complexo de saúde feminina 
              especialmente desenvolvido para atender às necessidades da mulher contemporânea. 
              Nossa fórmula trabalha para otimizar a produção de energia, apoiar a beleza de dentro 
              para fora e restaurar o equilíbrio hormonal — proporcionando a vitalidade que você 
              precisa para conquistar todos os seus objetivos.
            </p>
            <Button variant="hero" size="lg" className="text-base px-10 py-6">
              Comprar Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
