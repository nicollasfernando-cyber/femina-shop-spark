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
              {[...Array(5)].map((_, i) =>
              <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              )}
              <span className="text-sm text-muted-foreground ml-2">412 reviews</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-foreground">
              Reclaim Your{" "}
              <span className="text-gradient-hero">Radiance</span> and Thrive
              Every Day.
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Premium supplements crafted exclusively for women's wellness.
              Energy, beauty, and hormonal balance — now up to 40% off.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="#products">
                <Button variant="hero" size="lg" className="text-base px-10 py-6">
                  Shop Now
                </Button>
              </a>
              <a href="#products">
                <Button variant="outline" size="lg" className="text-base px-10 py-6">
                  Learn More
                </Button>
              </a>
            </div>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img

                alt="Velara women's wellness supplement collection"
                className="w-full h-auto object-cover"
                loading="eager" src="/lovable-uploads/e4c5ea1b-1169-4e18-8096-c2e98fe722d7.png" />
              
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;