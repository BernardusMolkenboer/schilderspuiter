import React from "react";
import { Brush, Home, Building2, Warehouse } from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: Home,
    title: "Binnenschilderwerk",
    description: "Vakkundige afwerking van muren, plafonds en houtwerk",
    features: [
      "Muren en plafonds",
      "Kozijnen en deuren",
      "Radiatoren",
      "Trappenhuizen",
    ],
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop",
  },
  {
    icon: Building2,
    title: "Buitenschilderwerk",
    description: "Duurzame bescherming en verfraaiing van uw pand",
    features: ["Gevels", "Kozijnen", "Dakgoten", "Balkons"],
    image:
      "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?q=80&w=2071&auto=format&fit=crop",
  },
  {
    icon: Warehouse,
    title: "Projectschilderwerk",
    description: "Grootschalige schilderprojecten voor bedrijven",
    features: ["Kantoorpanden", "Bedrijfshallen", "Winkelcentra", "Scholen"],
    image:
      "https://images.unsplash.com/photo-1565636252854-41856180329c?q=80&w=2071&auto=format&fit=crop",
  },
];

function ServicesGrid() {
  return (
    <section
      id="services"
      className="bg-background py-24 transition-colors duration-300"
    >
      <div className="container mx-auto max-w-screen-xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-foreground">
            Onze Diensten
          </h2>
          <p className="text-lg text-muted-foreground">
            Ontdek ons uitgebreide aanbod aan schilderdiensten voor elk type
            project.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="overflow-hidden rounded-2xl bg-muted/10 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-neutral-800"
              >
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Icon className="mb-2 h-8 w-8 text-primary" />
                    <h3 className="text-2xl font-bold text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="mb-4 text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-foreground"
                      >
                        <Brush className="mr-2 h-4 w-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesGrid;
