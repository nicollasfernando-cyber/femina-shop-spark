import { Button } from "@/components/ui/button";
import productCapsules from "@/assets/product-capsules.jpg";
import productPowder from "@/assets/product-powder.jpg";
import productGummies from "@/assets/product-gummies.jpg";
import productDrops from "@/assets/product-drops.jpg";

const products = [
  {
    name: "FemVital Capsules",
    description: "A powerful blend to support healthy hormone levels and sustained energy throughout the day.",
    image: productCapsules,
    price: "$39.99",
    oldPrice: "$69.99",
    checkoutUrl: "https://mailxgroup.mycartpanda.com/checkout/208286567:1",
  },
  {
    name: "FemVital Collagen Powder",
    description: "Premium hydrolyzed collagen for radiant skin, stronger hair, and healthier nails.",
    image: productPowder,
    price: "$34.99",
    oldPrice: "$59.99",
    checkoutUrl: "https://mailxgroup.mycartpanda.com/checkout/208287022:1",
  },
  {
    name: "FemVital Gummies",
    description: "Delicious daily gummies for hair, skin, and nails. Easy, tasty, and effective wellness support.",
    image: productGummies,
    price: "$29.99",
    oldPrice: "$49.99",
    checkoutUrl: "https://mailxgroup.mycartpanda.com/checkout/208287018:1",
  },
  {
    name: "FemVital Drops",
    description: "Fast-acting drops designed to relieve stress, sharpen mental clarity, and boost emotional well-being.",
    image: productDrops,
    price: "$32.99",
    oldPrice: "$54.99",
    checkoutUrl: "https://mailxgroup.mycartpanda.com/checkout/208287091:1",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
            Our Products
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Formulated with clinically studied natural ingredients for the modern woman.
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
                <a href={product.checkoutUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" className="w-full mt-2">
                    Shop Now
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
