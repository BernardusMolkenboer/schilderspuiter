import {
  Paintbrush,
  Clock,
  CheckCircle,
  Layers,
  Box,
  Target,
} from "lucide-react";

const features = [
  {
    icon: Paintbrush,
    title: "Efficiënte Applicatie",
    description:
      "Snelle en gelijkmatige verfapplicatie voor grote oppervlakken met professionele spuitapparatuur.",
  },
  {
    icon: CheckCircle,
    title: "Strak Resultaat",
    description:
      "Perfecte dekking en professionele afwerking zonder kwaststrepen of rolbanen.",
  },
  {
    icon: Layers,
    title: "Optimale Verfverdeling",
    description:
      "Gelijkmatige laagdikte voor maximale bescherming en duurzaamheid.",
  },
  {
    icon: Clock,
    title: "Tijdbesparing",
    description:
      "Significant sneller dan traditioneel schilderwerk, vooral bij grote oppervlakken.",
  },
  {
    icon: Box,
    title: "Alle Ondergronden",
    description:
      "Geschikt voor hout, metaal, kunststof en minerale ondergronden.",
  },
  {
    icon: Target,
    title: "Precisiewerk",
    description:
      "Nauwkeurige controle over verfapplicatie voor perfect resultaat.",
  },
];

export function Features() {
  return (
    <section className="bg-gray-50 py-24 transition-colors duration-300 dark:bg-neutral-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Onze Expertise
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            Professionele oplossingen voor elk schilderproject
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="relative rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg dark:bg-neutral-800"
              >
                <div className="absolute -top-4 left-6">
                  <div className="inline-flex items-center justify-center rounded-md bg-orange-600 p-3 shadow-lg">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="mt-8 text-xl font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
