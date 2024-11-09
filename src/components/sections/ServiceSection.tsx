import React from "react";
import Image from "next/image";
import { PaintBucket, Ruler, Wrench, ArrowRight } from "lucide-react";

const services = [
  {
    icon: PaintBucket,
    title: "Spackspuiten voor Wanden",
    description:
      "Strakke afwerking met een ruime keuze aan structuren en kleuren.",
    features: [
      "Gladde afwerking",
      "Verschillende structuren",
      "Kleur naar keuze",
    ],
    image:
      "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?q=80&w=2071&auto=format&fit=crop",
  },
  {
    icon: Ruler,
    title: "Spackspuiten voor Plafonds",
    description: "Egaal en duurzaam spuitwerk voor een stijlvolle uitstraling.",
    features: ["Naadloze afwerking", "Geluidsdempend", "Brandvertragend"],
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop",
  },
  {
    icon: Wrench,
    title: "Reparatie en Renovatie",
    description:
      "Herstel van bestaande afwerkingen voor een frisse uitstraling.",
    features: ["Scheuroverbrugging", "Kleurmatching", "Snelle uitvoering"],
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
  },
];

function ServicesSection() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-screen-xl px-6">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-foreground">
            Onze Diensten
          </h2>
          <p className="text-lg text-muted-foreground">
            Ontdek ons uitgebreide aanbod aan professionele spackspuitservices
            voor elk type project.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group overflow-hidden rounded-2xl bg-muted  transition-all duration-300 hover:shadow-xl"
            >
              {/* Service Image */}
              <div className="relative h-64">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <service.icon className="mb-2 h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Service Details */}
              <div className="p-6">
                <p className="mb-4 text-muted-foreground">
                  {service.description}
                </p>
                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center text-foreground"
                    >
                      <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="mailto:info@spackspuitenservice.nl"
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

export default ServicesSection;
