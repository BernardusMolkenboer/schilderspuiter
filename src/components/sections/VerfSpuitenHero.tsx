import React from "react";
import Image from "next/image";
import {
  Mail,
  ArrowRight,
  Star,
  CheckCircle2,
  Paintbrush,
  Droplet,
} from "lucide-react";

function VerfSpuitenHero() {
  return (
    <section className="relative min-h-screen bg-background">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-1/4 -top-1/2 h-[1000px] w-[1000px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 h-[800px] w-[800px] rounded-full bg-secondary/10 blur-3xl" />
      </div>

      {/* Main content */}
      <div className="container relative z-10 mx-auto max-w-screen-xl px-6 pt-20">
        {/* Top badge */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/10 p-1.5 pl-2 pr-6 backdrop-blur-sm">
            <span className="flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-sm font-medium text-white">
              <Star className="h-3.5 w-3.5" />
              Nieuw
            </span>
            <span className="text-sm text-muted-foreground">
              Introductiekorting tot 20%
            </span>
          </div>
        </div>

        <div className="grid items-center gap-12 pb-20 lg:grid-cols-12">
          {/* Left content */}
          <div className="space-y-8 lg:col-span-5">
            <h1 className="text-5xl font-bold text-foreground md:text-6xl">
              Transformeer uw ruimte met
              <div className="mt-2 text-primary">Professioneel Verfspuiten</div>
            </h1>

            <p className="text-xl leading-relaxed text-muted-foreground">
              Ontdek de toekomst van schilderwerk met onze geavanceerde
              spuittechnieken voor een perfect en duurzaam resultaat.
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: CheckCircle2, text: "Strakke Afwerking" },
                { icon: Paintbrush, text: "Snelle Uitvoering" },
                { icon: Star, text: "10 Jaar Garantie" },
                { icon: Droplet, text: "Milieuvriendelijk" },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-xl border border-border bg-muted/10 p-4"
                >
                  <feature.icon className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <a
                href="mailto:info@verfspuitenservice.nl"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-primary p-[2px] font-semibold text-white transition-all duration-300 hover:scale-105"
                aria-label="Gratis offerte aanvragen via email"
              >
                <span className="relative flex items-center gap-2 rounded-xl bg-background px-8 py-4">
                  <Mail className="h-5 w-5" />
                  <span>Gratis Offerte</span>
                  <ArrowRight className="h-5 w-5 transform transition-transform group-hover:translate-x-1" />
                </span>
              </a>
              <button
                className="inline-flex items-center justify-center rounded-xl border border-border bg-muted/10 px-8 py-4 font-semibold text-foreground transition-colors hover:bg-muted/20"
                aria-label="Bekijk onze projecten"
              >
                Bekijk Onze Projecten
              </button>
            </div>
          </div>

          {/* Right content - Image grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-8">
                <div className="relative h-[400px] overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop"
                    alt="Professional paint spraying"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                </div>
              </div>
              <div className="col-span-4 space-y-4">
                <div className="relative h-[192px] overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=2071&auto=format&fit=crop"
                    alt="Paint detail"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[192px] overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=2070&auto=format&fit=crop"
                    alt="Paint spraying"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Stats bar */}
            <div className="mt-4 grid grid-cols-3 gap-4">
              {[
                { number: "2500+", label: "Projecten Voltooid" },
                { number: "15+", label: "Jaren Ervaring" },
                { number: "100%", label: "Klanttevredenheid" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center rounded-xl border border-border bg-muted/10 p-4"
                >
                  <span className="mb-1 text-2xl font-bold text-foreground">
                    {stat.number}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VerfSpuitenHero;
