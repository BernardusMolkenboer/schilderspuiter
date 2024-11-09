import React from "react";
import { ClipboardCheck, Droplet, Sparkles, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Inspectie & Advies",
    description:
      "Grondige inspectie van het te behandelen oppervlak en persoonlijk advies over de beste aanpak.",
  },
  {
    icon: Droplet,
    title: "Voorbereiding",
    description:
      "Zorgvuldige voorbehandeling van alle oppervlakken en bescherming van omliggende elementen.",
  },
  {
    icon: Sparkles,
    title: "Verfspuiten",
    description:
      "Professionele verfapplicatie met hoogwaardige apparatuur voor een perfect resultaat.",
  },
  {
    icon: CheckCircle,
    title: "Eindcontrole",
    description:
      "Uitgebreide kwaliteitscontrole en oplevering volgens afgesproken specificaties.",
  },
];

function ProcessSection() {
  return (
    <section className="bg-gray-50 py-24 transition-colors duration-300 dark:bg-neutral-900">
      <div className="container mx-auto max-w-screen-xl px-6">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white">
            Ons Werkproces
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Een gestructureerde aanpak voor het beste resultaat
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid gap-8 md:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-full top-[50%] hidden h-2 w-full bg-white dark:bg-neutral-700 md:block"></div>
                )}
                {index < steps.length - 1 && (
                  <div className="absolute left-[50%] top-full block h-full w-1 bg-white dark:bg-neutral-700 md:hidden"></div>
                )}

                {/* Step Card */}
                <div className="relative z-10 rounded-xl bg-white p-6 shadow-lg dark:bg-neutral-800">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-4 text-center text-xl font-semibold text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-center text-gray-600 dark:text-gray-400">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
