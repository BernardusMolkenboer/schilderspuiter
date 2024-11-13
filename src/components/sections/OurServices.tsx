import React from "react";
import {
  SprayCan,
  Paintbrush,
  Grid,
  Sparkles,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    icon: SprayCan,
    title: "Professioneel Verfspuiten",
    description:
      "Onze geavanceerde verfspuittechnieken bieden een egale dekking en duurzame afwerking, perfect voor zowel kleine als grote projecten.",
    details: [
      "Egale dekking zonder strepen of kwaststreken",
      "Tot 4x sneller dan traditioneel schilderwerk",
      "Langdurige bescherming en behoud van kleur",
      "Milieuvriendelijke verfopties",
    ],
    href: "/verfspuiten",
  },
  {
    icon: Paintbrush,
    title: "Vakkundig Schilderwerk",
    description:
      "Met meer dan 30 jaar ervaring leveren wij traditioneel schilderwerk met oog voor detail en kwaliteit.",
    details: [
      "Gratis inspectie en persoonlijk kleuradvies",
      "Gebruik van premium materialen en technieken",
      "Flexibele planning, aangepast aan uw schema",
      "10 jaar garantie op al ons schilderwerk",
    ],
    href: "/schilderwerk",
  },
  {
    icon: Grid,
    title: "Professioneel Spackspuitwerk",
    description:
      "Wij bieden strakke wand- en plafondafwerking met verschillende structuren en kleuren, perfect voor elk type project.",
    details: [
      "Naadloze en gladde afwerking",
      "Geluidsdempende en brandvertragende opties",
      "Scheuroverbrugging voor renovaties",
      "Snelle en efficiënte uitvoering",
    ],
    href: "/spackspuitwerk",
  },
  {
    icon: Sparkles,
    title: "Exclusieve Decoratieve Technieken",
    description:
      "Creëer unieke en luxueuze effecten met onze specialistische decoratieve schildertechnieken.",
    details: [
      "Giorgio Graesan Oro voor een elegante gouden afwerking",
      "Metallic effecten voor een tijdloze uitstraling",
      "Stucco Veneziano voor een klassieke marmerlook",
      "Maatwerkoplossingen voor uw specifieke wensen",
    ],
    href: "/speciaal-schilderwerk",
  },
];

export default function OurServices() {
  return (
    <section
      className="bg-background py-24 transition-colors duration-300"
      id="diensten"
    >
      <div className="container mx-auto max-w-screen-xl px-6">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-foreground">
            Onze Diensten
          </h2>
          <p className="text-lg text-muted-foreground">
            Ontdek ons breed scala aan hoogwaardige schilder- en spuittechnieken
            die ontworpen zijn om aan al uw wensen te voldoen.
          </p>
        </div>

        {/* Services Grid */}
        <div className="relative grid gap-8 md:grid-cols-4">
          {/* Horizontal Line (Desktop) */}
          <div className="absolute left-0 right-0 top-[50%] hidden h-2 bg-muted/10 dark:bg-neutral-700 md:block"></div>

          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <a
                key={index}
                href={service.href}
                className="relative flex h-full flex-col rounded-xl bg-muted/10 p-6 shadow-md transition-shadow hover:shadow-xl dark:bg-neutral-800"
              >
                {/* Vertical Line (Mobile) */}
                {index < services.length - 1 && (
                  <div className="absolute left-[50%] top-full block h-12 w-2 bg-muted/10 dark:bg-neutral-700 md:hidden"></div>
                )}
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-4 text-center text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mb-6 text-center text-muted-foreground">
                  {service.description}
                </p>
                <ul className="mb-auto space-y-2">
                  {service.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <CheckCircle className="mr-2 h-4 w-4 flex-shrink-0 text-primary" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
