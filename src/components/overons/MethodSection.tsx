import React from "react";
import { ClipboardCheck, Brush, Sparkles, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Persoonlijk Advies",
    description:
      "We beginnen met een uitgebreide consultatie om uw wensen en eisen in kaart te brengen.",
    details: [
      "Grondige inspectie",
      "Kleuradvies",
      "Technische analyse",
      "Kostenberekening",
    ],
  },
  {
    icon: Brush,
    title: "Voorbereiding",
    description:
      "Zorgvuldige voorbehandeling van alle oppervlakken voor het beste resultaat.",
    details: [
      "Oppervlakte reiniging",
      "Reparaties",
      "Grondwerk",
      "Bescherming omgeving",
    ],
  },
  {
    icon: Sparkles,
    title: "Uitvoering",
    description:
      "Vakkundige toepassing van de gekozen techniek met premium materialen.",
    details: [
      "Professionele applicatie",
      "Kwaliteitscontrole",
      "Precisiewerk",
      "Tijdmanagement",
    ],
  },
  {
    icon: CheckCircle,
    title: "Oplevering",
    description:
      "Grondige controle en perfecte afwerking van het eindresultaat.",
    details: [
      "Eindcontrole",
      "Kwaliteitsgarantie",
      "Opleverdocumentatie",
      "Nazorg",
    ],
  },
];

export default function MethodSection() {
  return (
    <section className="bg-background py-24 transition-colors duration-300">
      <div className="container mx-auto max-w-screen-xl px-6">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-foreground">
            Onze Werkwijze
          </h2>
          <p className="text-lg text-muted-foreground">
            Een gestructureerde aanpak voor het beste resultaat, van begin tot
            eind.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative grid gap-8 md:grid-cols-4">
          {/* Horizontal Connector Line (Desktop) */}
          <div className="absolute left-0 right-0 top-[50%] hidden h-2 bg-muted/10 dark:bg-neutral-700 md:block"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Vertical Connector Line (Mobile) */}
                {index < steps.length - 1 && (
                  <div className="absolute left-[50%] top-full block h-12 w-2 bg-muted/10 dark:bg-neutral-700 md:hidden"></div>
                )}

                {/* Step Card */}
                <div className="relative z-10 rounded-xl bg-muted/10 p-6 shadow-md dark:bg-neutral-800">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-4 text-center text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mb-6 text-center text-muted-foreground">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <CheckCircle className="mr-2 h-4 w-4 flex-shrink-0 text-primary" />
                        {detail}
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
