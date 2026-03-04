import { Star } from "lucide-react";
import testimonialSarah from "@/assets/testimonial-sarah.jpg";
import testimonialJessica from "@/assets/testimonial-jessica.jpg";
import testimonialEmily from "@/assets/testimonial-emily.jpg";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Austin, Texas",
    photo: testimonialSarah,
    text: "I was exhausted all the time, dragging myself through every day. After just 3 weeks on FemVital Capsules, my energy came roaring back. I feel like I'm in my 20s again! Every woman needs this in her routine.",
  },
  {
    name: "Jessica R.",
    location: "Miami, Florida",
    photo: testimonialJessica,
    text: "The Collagen Powder completely transformed my skin. My friends noticed the difference before I even told them. My complexion is glowing, my nails stopped breaking, and my hair feels thicker. Best investment I've made in myself.",
  },
  {
    name: "Emily T.",
    location: "Denver, Colorado",
    photo: testimonialEmily,
    text: "The Gummies taste amazing and are so easy to take! I never forget my supplements anymore. My hair is growing faster and stronger, and the Drops have seriously helped me manage work stress. I'm a customer for life.",
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
