import React from "react";
import { Palette, Droplet, Sun, Shield } from "lucide-react";
import Image from "next/image";

function ColorSection() {
  return (
    <section className="bg-background py-24 transition-colors duration-300">
      <div className="container mx-auto max-w-screen-xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Text Content */}
          <div>
            <div className="mb-6 inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-primary">
              <Palette className="mr-2 h-4 w-4" />
              <span className="text-sm font-medium">Kleuradvies op Maat</span>
            </div>
            <h2 className="mb-8 text-4xl font-bold text-foreground">
              De Juiste Kleur voor{" "}
              <span className="text-primary">Elke Ruimte</span>
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Wij begrijpen dat de juiste kleurkeuze essentieel is voor de
              uitstraling van uw ruimte. Ons ervaren team helpt u bij het maken
              van de perfecte keuze, rekening houdend met lichtinval,
              ruimtegebruik en uw persoonlijke voorkeuren.
            </p>

            {/* Features */}
            <div className="mb-8 grid gap-6 sm:grid-cols-2">
              {[
                {
                  icon: Palette,
                  title: "Uitgebreid Kleuradvies",
                  desc: "Professioneel advies op locatie",
                },
                {
                  icon: Droplet,
                  title: "Kwaliteitsverf",
                  desc: "Alleen de beste verfmerken",
                },
                {
                  icon: Sun,
                  title: "Lichtanalyse",
                  desc: "Optimale kleurkeuze per ruimte",
                },
                {
                  icon: Shield,
                  title: "Kleurecht",
                  desc: "Langdurig kleurbehoud",
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="rounded-xl bg-muted/10 p-6 shadow-md"
                  >
                    <Icon className="mb-4 h-6 w-6 text-primary" />
                    <h3 className="mb-2 font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Color Showcase */}
          <div className="relative">
            <div className="grid grid-cols-3 gap-4">
              {[
                "/images/wanden-en-plafonds-schilderwerk.png",
                "/images/renovatie-schilderwerk.png",
                "/images/kleuren-schilderwerk.png",
                "/images/traditioneel-schilderwerk.png",
                "/images/rol-en-hand-schilderwerk.png",
                "/images/schilderwerk-in-kleur.png",
              ].map((src, index) => (
                <div
                  key={index}
                  className={`relative ${
                    index % 2 === 0 ? "h-48" : "h-64"
                  } overflow-hidden rounded-xl`}
                >
                  <Image
                    src={src}
                    alt={`Kleurvoorbeeld ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ColorSection;
