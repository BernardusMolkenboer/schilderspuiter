import React from "react";
import Image from "next/image";
import { Trophy, ArrowRight } from "lucide-react";

function WhyUsSection() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-screen-xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Image Section */}
          <div className="relative">
            <div className="relative h-[600px] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop"
                alt="Finished wall example"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
          </div>

          {/* Right Content Section */}
          <div>
            {/* Badge */}
            <div className="mb-6 inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-primary">
              <Trophy className="mr-2 h-4 w-4" />
              <span className="text-sm font-medium">
                Waarom Kiezen Voor Ons?
              </span>
            </div>

            {/* Heading */}
            <h2 className="mb-8 text-4xl font-bold">
              Expertise die het verschil maakt in{" "}
              <span className="text-primary">elk project</span>
            </h2>

            {/* Description */}
            <p className="mb-8 text-lg text-muted-foreground">
              Wij zijn gespecialiseerd in het professioneel spuiten van wanden
              en plafonds. Met oog voor detail en hoogwaardige materialen
              leveren wij een perfect resultaat.
            </p>

            {/* Features */}
            <div className="mb-8 grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: "Ervaren vakmensen",
                  desc: "15+ jaar ervaring in de sector",
                },
                {
                  title: "Hoogwaardige afwerking",
                  desc: "Gebruik van premium materialen",
                },
                {
                  title: "Betaalbare prijzen",
                  desc: "Transparante prijsopgave vooraf",
                },
                {
                  title: "Snelle service",
                  desc: "Flexibele planning mogelijk",
                },
              ].map((item, index) => (
                <div key={index} className="rounded-xl bg-muted p-6">
                  <h3 className="mb-2 font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <a
              href="mailto:info@spackspuitenservice.nl"
              className="inline-flex items-center font-semibold text-primary transition-colors hover:text-primary/90"
            >
              Ontdek meer over onze aanpak
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUsSection;
