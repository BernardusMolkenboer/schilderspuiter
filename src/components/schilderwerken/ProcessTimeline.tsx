import React from "react";
import { ClipboardCheck, Brush, Sparkles, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Inspectie & Advies",
    description:
      "Grondige inspectie van het te schilderen oppervlak en persoonlijk kleuradvies.",
  },
  {
    icon: Brush,
    title: "Voorbereiding",
    description:
      "Zorgvuldige voorbehandeling van alle oppervlakken en bescherming van de omgeving.",
  },
  {
    icon: Sparkles,
    title: "Schilderwerk",
    description:
      "Vakkundige uitvoering met hoogwaardige materialen en technieken.",
  },
  {
    icon: CheckCircle,
    title: "Eindcontrole",
    description:
      "Uitgebreide kwaliteitscontrole en oplevering volgens afspraak.",
  },
];

function ProcessTimeline() {
  return (
    <section className="bg-background py-24 transition-colors duration-300">
      <div className="container mx-auto max-w-screen-xl px-6">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-foreground">
            Ons Werkproces
          </h2>
          <p className="text-lg text-muted-foreground">
            Een gestructureerde aanpak voor het beste resultaat.
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
                  <div className="absolute left-full top-[50%] hidden h-2 w-full bg-muted/10 dark:bg-neutral-700 md:block"></div>
                )}
                {index < steps.length - 1 && (
                  <div className="absolute left-[50%] top-full block h-full w-1 bg-muted/10 dark:bg-neutral-700 md:hidden"></div>
                )}

                {/* Step Card */}
                <div className="relative z-10 rounded-xl bg-muted/10 p-6 shadow-md dark:bg-neutral-800">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-4 text-center text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-center text-muted-foreground">
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

export default ProcessTimeline;
