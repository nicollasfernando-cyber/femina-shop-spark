import { Button } from "@/components/ui/button";
import productCapsules from "@/assets/product-capsules.jpg";
import productPowder from "@/assets/product-powder.jpg";
import productGummies from "@/assets/product-gummies.jpg";
import productDrops from "@/assets/product-drops.jpg";

const products = [
  {
    name: "FemVital Cápsulas",
    description: "Fórmula poderosa para equilíbrio hormonal e energia sustentável ao longo do dia.",
    image: productCapsules,
    price: "R$ 149,90",
    oldPrice: "R$ 249,90",
  },
  {
    name: "FemVital Colágeno Powder",
    description: "Colágeno hidrolisado premium para pele radiante, cabelos fortes e unhas saudáveis.",
    image: productPowder,
    price: "R$ 129,90",
    oldPrice: "R$ 219,90",
  },
  {
    name: "FemVital Gummies",
    description: "Vitaminas em gomas deliciosas para cabelo, pele e unhas. Suporte diário prático e gostoso.",
    image: productGummies,
    price: "R$ 99,90",
    oldPrice: "R$ 169,90",
  },
  {
    name: "FemVital Drops",
    description: "Gotas de ação rápida para alívio do estresse, clareza mental e bem-estar emocional.",
    image: productDrops,
    price: "R$ 119,90",
    oldPrice: "R$ 199,90",
  },
];

const ProductsSection = () => {
  return (
    <section id="produtos" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
            Nossos Produtos
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Desenvolvidos com ingredientes naturais clinicamente estudados para
            a mulher moderna.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="group bg-background rounded-2xl overflow-hidden shadow-card hover:shadow-soft transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden bg-secondary/30">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5 space-y-3">
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-primary">{product.price}</span>
                  <span className="text-sm text-muted-foreground line-through">{product.oldPrice}</span>
                </div>
                <Button variant="hero" className="w-full mt-2">
                  Comprar
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
