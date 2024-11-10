import React from "react";
import { Shield, Award, Users, Clock } from "lucide-react";

const expertiseAreas = [
  {
    icon: Shield,
    title: "Premium Materialen",
    description:
      "Wij werken uitsluitend met hoogwaardige materialen van gerenommeerde merken voor een duurzaam resultaat.",
  },
  {
    icon: Award,
    title: "Gecertificeerde Experts",
    description:
      "Ons team bestaat uit gediplomeerde vakmensen met specialistische kennis van decoratieve technieken.",
  },
  {
    icon: Users,
    title: "Persoonlijke Aanpak",
    description:
      "Voor elk project stellen we een op maat gemaakt plan op, afgestemd op uw wensen en de specifieke situatie.",
  },
  {
    icon: Clock,
    title: "Tijdige Oplevering",
    description:
      "We werken efficiënt en gestructureerd om uw project binnen de afgesproken tijd op te leveren.",
  },
];

export default function ExpertiseSection() {
  return (
    <section className="bg-gray-50 py-24 transition-colors duration-300 dark:bg-neutral-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Onze Expertise
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            Met jarenlange ervaring in specialistische schildertechnieken bieden
            wij expertise die het verschil maakt in elk project.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div
                key={index}
                className="relative rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg dark:bg-neutral-800"
              >
                <div className="absolute -top-4 left-6">
                  <div className="inline-flex items-center justify-center rounded-md bg-primary p-3 shadow-lg">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="mt-8 text-xl font-semibold text-gray-900 dark:text-white">
                  {area.title}
                </h3>
                <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
                  {area.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
