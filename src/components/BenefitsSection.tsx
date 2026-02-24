import { Sparkles, Heart, Leaf, Brain } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Energia Radiante",
    description: "Alimente seu corpo com energia sustentável para brilhar o dia inteiro.",
  },
  {
    icon: Heart,
    title: "Equilíbrio Hormonal",
    description: "Suporte natural para seu ciclo e bem-estar hormonal completo.",
  },
  {
    icon: Leaf,
    title: "Ingredientes Premium",
    description: "Formulados com ingredientes naturais clinicamente estudados e de alta pureza.",
  },
  {
    icon: Brain,
    title: "Clareza Mental",
    description: "Melhore o foco, reduza o estresse e alcance a paz interior.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="text-center space-y-4 p-6 rounded-2xl bg-secondary/40 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mx-auto w-14 h-14 rounded-full bg-rose-light flex items-center justify-center">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
