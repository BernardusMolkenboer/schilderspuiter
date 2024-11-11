import React from "react";
import Image from "next/image";
import {
  PaintBucket,
  Brush,
  Palette,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: PaintBucket,
    title: "Spackspuiten",
    description:
      "Professionele wandafwerking met moderne spuittechnieken voor een perfect glad resultaat.",
    features: [
      "Strakke afwerking",
      "Snelle uitvoering",
      "Verschillende structuren",
    ],
    image:
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: Brush,
    title: "Verfspuiten",
    description:
      "Efficiënte en hoogwaardige verfapplicatie voor grote oppervlakken met een egaal resultaat.",
    features: ["Egale dekking", "Tijdbesparend", "Professionele apparatuur"],
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=2071&auto=format&fit=crop",
  },
  {
    icon: Palette,
    title: "Schilderwerk",
    description:
      "Traditioneel schilderwerk met oog voor detail en gebruik van premium materialen.",
    features: ["Precisiewerk", "Duurzame afwerking", "Kleuradvies"],
    image:
      "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?q=80&w=2071&auto=format&fit=crop",
  },
  {
    icon: Sparkles,
    title: "Speciale Technieken",
    description:
      "Exclusieve decoratieve technieken zoals Giorgio Graesan Oro en metallic effecten.",
    features: ["Luxe afwerking", "Unieke effecten", "Maatwerk mogelijk"],
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop",
  },
];

function ServicesGrid() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-foreground">
            Onze Diensten
          </h2>
          <p className="text-lg text-muted-foreground">
            Ontdek ons uitgebreide aanbod aan professionele
            afwerkingstechnieken.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl bg-muted shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              {/* Image Section */}
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <service.icon className="mb-2 h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <p className="mb-4 text-muted-foreground">
                  {service.description}
                </p>
                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-muted-foreground"
                    >
                      <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`/${service.title.toLowerCase().replace(" ", "-")}`}
                  className="inline-flex items-center font-semibold text-primary transition-colors hover:text-primary/90"
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

export default ServicesGrid;
