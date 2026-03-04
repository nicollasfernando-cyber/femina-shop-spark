import { Sparkles, Heart, Leaf, Brain } from "lucide-react";
import productBottle from "@/assets/product-femvital-bottle.png";

const benefits = [
  {
    icon: Sparkles,
    title: "Radiant Energy",
    description: "Fuel your body with sustained energy to glow all day long.",
  },
  {
    icon: Heart,
    title: "Hormonal Balance",
    description: "Natural support for your cycle and complete hormonal well-being.",
  },
  {
    icon: Leaf,
    title: "Premium Ingredients",
    description: "Formulated with clinically studied, high-purity natural ingredients.",
  },
  {
    icon: Brain,
    title: "Mental Clarity",
    description: "Sharpen your focus, reduce stress, and find your inner calm.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Product Image - Left Side */}
          <div className="w-full lg:w-5/12 flex justify-center">
            <img
              src={productBottle}
              alt="FemVital Capsules"
              className="max-h-[500px] w-auto object-contain"
            />
          </div>

          {/* Benefits Grid - Right Side */}
          <div className="w-full lg:w-7/12">
            <div className="grid sm:grid-cols-2 gap-8">
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
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
