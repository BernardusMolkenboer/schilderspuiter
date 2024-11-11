import React from "react";
import Image from "next/image";
import { Heart, ArrowRight } from "lucide-react";

function MissionStatement() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-screen-xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Image Section */}
          <div className="relative">
            <div className="relative h-[600px] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop"
                alt="Professioneel schilderwerk"
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
              <Heart className="mr-2 h-4 w-4" />
              <span className="text-sm font-medium">Onze Missie</span>
            </div>

            {/* Heading */}
            <h2 className="mb-8 text-4xl font-bold">
              Wij Creëren{" "}
              <span className="text-primary">Blijvende Indrukken</span>
            </h2>

            {/* Description */}
            <p className="mb-8 text-lg text-muted-foreground">
              Als dochteronderneming van Stucologie combineren we jarenlange
              expertise met innovatieve technieken. Onze missie is het leveren
              van uitzonderlijke kwaliteit in schilder- en spuitwerk, waarbij we
              streven naar perfectie in elk detail.
            </p>

            {/* Features */}
            <div className="mb-8 grid gap-6 sm:grid-cols-2">
              {[
                { title: "Vakmanschap", desc: "30+ jaar ervaring" },
                { title: "Innovatie", desc: "Moderne technieken" },
                { title: "Kwaliteit", desc: "Premium materialen" },
                { title: "Service", desc: "Persoonlijke aanpak" },
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
              href="mailto:info@schilder-spuiter.nl"
              className="inline-flex items-center font-semibold text-primary transition-colors hover:text-primary/90"
            >
              Ontdek meer over onze missie
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionStatement;
