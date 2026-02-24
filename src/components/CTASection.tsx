import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-products.jpg";

const CTASection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-card">
            <img
              src={heroImage}
              alt="FemVital Products"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground leading-tight">
              The ultimate solution for{" "}
              <span className="text-gradient-hero">women's health</span> and
              beauty.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">FEMVITAL</strong> is a premium Women's Health 
              Complex specifically engineered to support the needs of the modern woman. 
              Our formula works to optimize energy production, support beauty from within, 
              and restore hormonal balance — giving you the vitality you need to 
              conquer every aspect of your life.
            </p>
            <Button variant="hero" size="lg" className="text-base px-10 py-6">
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
