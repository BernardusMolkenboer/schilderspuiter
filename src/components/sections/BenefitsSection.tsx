import React from "react";
import { Droplet, Paintbrush, Zap, Shield, Clock } from "lucide-react";

const benefits = [
  {
    icon: Paintbrush,
    title: "Egale Dekking",
    description:
      "Perfecte en gelijkmatige verflaag zonder strepen of kwaststreken.",
  },
  {
    icon: Zap,
    title: "Snelle Uitvoering",
    description: "Tot 4x sneller dan traditioneel schilderwerk.",
  },
  {
    icon: Shield,
    title: "Duurzaam Resultaat",
    description: "Langdurige bescherming en behoud van kleur.",
  },
  {
    icon: Clock,
    title: "Tijdsbesparing",
    description: "Efficiënte werkwijze met minimale overlast.",
  },
];

function BenefitsSection() {
  return (
    <section className="bg-gray-50 py-24 transition-colors duration-300 dark:bg-neutral-900">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-primary">
            <Droplet className="mr-2 h-4 w-4" />
            <span className="text-sm font-medium">
              Professioneel Verfspuiten
            </span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Waarom Kiezen Voor Ons?
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            Ontdek de voordelen van onze geavanceerde verfspuittechnieken.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
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
                  {benefit.title}
                </h3>
                <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;
