import { Star } from "lucide-react";
import testimonialAmanda from "@/assets/testimonial-amanda.jpg";
import testimonialRachel from "@/assets/testimonial-rachel.jpg";
import testimonialDanielle from "@/assets/testimonial-danielle.jpg";

const testimonials = [
  {
    name: "Amanda L.",
    location: "Portland, Oregon",
    photo: testimonialAmanda,
    text: "I was constantly drained and struggling to keep up with my daily routine. After just 3 weeks on Velara Capsules, my energy completely transformed. I feel vibrant and alive again! This has become an essential part of my wellness routine.",
  },
  {
    name: "Rachel K.",
    location: "Charlotte, North Carolina",
    photo: testimonialRachel,
    text: "The Collagen Powder has been a game-changer for my skin. My coworkers kept asking what I was doing differently. My complexion is radiant, my nails are stronger, and my hair has so much more volume. Absolutely worth every penny.",
  },
  {
    name: "Danielle W.",
    location: "San Diego, California",
    photo: testimonialDanielle,
    text: "The Gummies are delicious and so convenient! I actually look forward to taking my supplements now. My hair is growing faster than ever, and the Drops have been incredible for managing my daily stress. I'm a loyal customer for life.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground">Real results from real women.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-background rounded-2xl p-8 shadow-card flex gap-5 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <img
                src={testimonial.photo}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full object-cover shrink-0 shadow-md border-2 border-border"
              />
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                  <span className="text-xs text-muted-foreground ml-2">Verified Purchase</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;