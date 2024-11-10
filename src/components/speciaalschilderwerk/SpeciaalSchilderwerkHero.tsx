import React from "react";
import Image from "next/image";
import { Mail, ArrowRight, Star, Palette, Sparkles, Crown } from "lucide-react";

function SpecialPaintHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background transition-colors duration-300">
      {/* Animated background blobs */}
      <div className="absolute inset-0">
        <div className="animate-blob absolute -left-4 top-0 h-96 w-96 rounded-full bg-primary/10 opacity-70 mix-blend-multiply blur-3xl filter"></div>
        <div className="animate-blob animation-delay-2000 absolute -right-4 top-0 h-96 w-96 rounded-full bg-secondary/10 opacity-70 mix-blend-multiply blur-3xl filter"></div>
        <div className="animate-blob animation-delay-4000 absolute -bottom-8 left-20 h-96 w-96 rounded-full bg-accent/10 opacity-70 mix-blend-multiply blur-3xl filter"></div>
      </div>

      <div className="container relative z-10 mx-auto max-w-screen-xl px-6 pb-20 pt-32">
        {/* Top badge */}
        <div className="mb-12 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/10 p-2 pl-3 pr-6 backdrop-blur-sm">
            <span className="flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-sm font-medium text-white">
              <Crown className="h-4 w-4" />
              Exclusief
            </span>
            <span className="text-sm text-muted-foreground">
              Luxe Decoratieve Technieken
            </span>
          </div>
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left content */}
          <div className="space-y-8">
            <h1 className="text-6xl font-bold text-foreground md:text-7xl">
              <span>Exclusieve</span>
              <div className="mt-2">Decoratieve Verfkunst</div>
            </h1>

            <p className="text-xl leading-relaxed text-muted-foreground">
              Transformeer uw ruimte met onze exclusieve decoratieve
              verftechnieken. Van Italiaanse stucco tot moderne metallic
              effecten, wij creëren unieke kunstwerken op uw muren.
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Palette, text: "Luxe Afwerking" },
                { icon: Sparkles, text: "Unieke Effecten" },
                { icon: Star, text: "Premium Materialen" },
                { icon: Crown, text: "Vakmanschap" },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-xl border border-border bg-muted/10 p-4 transition-colors hover:bg-muted/20"
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
                href="mailto:info@schilder-spuiter.nl"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-primary px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-primary/90"
                aria-label="Vraag een offerte aan via email"
              >
                <Mail className="h-5 w-5" />
                <span>Vraag Een Offerte</span>
                <ArrowRight className="h-5 w-5 transform transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-muted/10 px-8 py-4 font-semibold text-foreground transition-colors hover:bg-muted/20"
                aria-label="Bekijk ons portfolio"
              >
                Bekijk Ons Portfolio
              </a>
            </div>
          </div>

          {/* Right content - Image grid */}
          <div className="relative">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-7">
                <div className="relative h-[500px] overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop"
                    alt="Luxe wandafwerking"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                </div>
              </div>
              <div className="col-span-5 space-y-4">
                <div className="relative h-[240px] overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1604147706283-d7119b5b822c?q=80&w=2032&auto=format&fit=crop"
                    alt="Decoratief schilderwerk"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[240px] overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop"
                    alt="Speciale verftechniek"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Stats bar */}
            <div className="mt-4 grid grid-cols-3 gap-4">
              {[
                { number: "25+", label: "Unieke Technieken" },
                { number: "15+", label: "Jaren Expertise" },
                { number: "100%", label: "Maatwerk" },
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

export default SpecialPaintHero;
