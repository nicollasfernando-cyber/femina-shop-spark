import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ana Paula S.",
    location: "São Paulo, SP",
    text: "Eu estava exausta o tempo todo, sem energia para nada. Depois de 3 semanas com as cápsulas FemVital, minha disposição voltou completamente. Me sinto como se tivesse 10 anos a menos! Recomendo para todas as mulheres.",
  },
  {
    name: "Mariana C.",
    location: "Rio de Janeiro, RJ",
    text: "O Colágeno Powder mudou minha pele completamente. Minhas amigas notaram a diferença antes mesmo de eu contar. A pele está mais firme, luminosa e as unhas pararam de quebrar. É o melhor investimento que fiz na minha beleza.",
  },
  {
    name: "Fernanda L.",
    location: "Belo Horizonte, MG",
    text: "As Gummies são deliciosas e super práticas! Nunca mais esqueci de tomar meu suplemento. Meu cabelo está crescendo mais rápido e mais forte. Além disso, o estresse do trabalho diminuiu bastante desde que comecei com os Drops.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
            O Que Nossas Clientes Dizem
          </h2>
          <p className="text-muted-foreground">Resultados reais de mulheres reais.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-background rounded-2xl p-8 shadow-card space-y-4 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
                <span className="text-xs text-muted-foreground ml-2">Compra Verificada</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
