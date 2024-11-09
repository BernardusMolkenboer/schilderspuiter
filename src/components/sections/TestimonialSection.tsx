import React from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Geweldig werk geleverd! De muren zijn perfect glad en de service was uitzonderlijk professioneel. Zeer tevreden met het eindresultaat.",
    author: "Jan en Petra van der Berg",
    location: "Utrecht",
    rating: 5,
    project: "Complete Woning",
  },
  {
    text: "Zeer professioneel team dat snel en efficiënt werkt. De prijs-kwaliteitverhouding is uitstekend en de nazorg is top!",
    author: "Kees Bakker",
    location: "Rotterdam",
    rating: 5,
    project: "Renovatie Kantoor",
  },
  {
    text: "Betrouwbaar, betaalbaar en een perfect resultaat. Het team denkt mee en geeft goed advies. Echt een aanrader!",
    author: "Laura Jansen",
    location: "Amsterdam",
    rating: 5,
    project: "Nieuwbouw Project",
  },
];

function TestimonialsSection() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-screen-xl px-4">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-foreground">
            Wat Onze Klanten Zeggen
          </h2>
          <p className="text-lg text-muted-foreground">
            Ontdek waarom klanten ons vertrouwen voor hun spackspuit projecten.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative rounded-2xl bg-muted p-8 transition-shadow duration-300 hover:shadow-xl"
            >
              <Quote className="absolute right-4 top-4 h-8 w-8 text-muted-foreground/30" />
              <div className="mb-4 flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current text-primary" />
                ))}
              </div>
              <p className="relative z-10 mb-6 text-muted-foreground">
                {testimonial.text}
              </p>
              <div className="border-t border-border pt-4">
                <p className="text-lg font-semibold text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-muted-foreground">{testimonial.location}</p>
                <p className="mt-1 text-sm text-primary">
                  {testimonial.project}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
