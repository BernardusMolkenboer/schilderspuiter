import React from "react";
import Image from "next/image";
import { Sparkles, Palette, ArrowRight } from "lucide-react";

const techniques = [
  {
    title: "Giorgio Graesan Oro",
    description: "Luxueuze gouden afwerking met Italiaanse allure.",
    features: [
      "Elegante uitstraling",
      "Duurzame afwerking",
      "Uniek lichteffect",
    ],
    image:
      "https://images.unsplash.com/photo-1604147706283-d7119b5b822c?q=80&w=2032&auto=format&fit=crop",
  },
  {
    title: "Metallic Effects",
    description: "Moderne metallic effecten voor een tijdloze look.",
    features: ["Rijke texturen", "Lichtreflecterend", "Veelzijdig toepasbaar"],
    image:
      "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop",
  },
  {
    title: "Stucco Veneziano",
    description: "Klassieke Venetiaanse pleistertechniek.",
    features: ["Marmerlook", "Hoogglans finish", "Tijdloze elegantie"],
    image:
      "https://images.unsplash.com/photo-1604147495798-57beb5d6af73?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function FeaturedTechniques() {
  return (
    <section className="bg-background py-24 transition-colors duration-300">
      <div className="container mx-auto max-w-screen-xl px-6">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-primary">
            <Palette className="mr-2 h-4 w-4" />
            <span className="text-sm font-medium">Exclusieve Technieken</span>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-foreground">
            Ontdek Onze Specialistische Verftechnieken
          </h2>
          <p className="text-lg text-muted-foreground">
            Van klassieke Italiaanse stijlen tot moderne effecten, wij bieden
            een breed scala aan specialistische technieken voor een unieke
            afwerking.
          </p>
        </div>

        {/* Techniques Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {techniques.map((technique, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl bg-muted shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-neutral-800"
            >
              {/* Image Section */}
              <div className="relative h-64">
                <Image
                  src={technique.image}
                  alt={technique.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent dark:from-black/60 dark:via-black/30" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white dark:text-white/90">
                    {technique.title}
                  </h3>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <p className="mb-4 text-muted-foreground">
                  {technique.description}
                </p>
                <ul className="mb-6 space-y-2">
                  {technique.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center text-muted-foreground"
                    >
                      <Sparkles className="mr-2 h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`#${technique.title.toLowerCase().replace(" ", "-")}`}
                  className="inline-flex items-center font-semibold text-primary transition-colors hover:text-primary/90"
                  aria-label={`Meer informatie over ${technique.title}`}
                >
                  Meer informatie
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
