import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, ArrowRight, Star, Palette, Sparkles, Crown } from "lucide-react";

function SpecialPaintHero() {
  return (
    <section className="relative overflow-hidden bg-background pb-24 pt-32">
      {/* Animated background blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-4 top-0 h-96 w-96 rounded-full bg-primary/10 opacity-70 mix-blend-multiply blur-3xl" />
        <div className="absolute -right-4 top-0 h-96 w-96 rounded-full bg-secondary/10 opacity-70 mix-blend-multiply blur-3xl" />
        <div className="absolute -bottom-8 left-20 h-96 w-96 rounded-full bg-accent/10 opacity-70 mix-blend-multiply blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top badge */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/10 px-3 py-2 backdrop-blur-sm">
            <span className="flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-sm font-medium text-white">
              <Crown className="h-4 w-4" />
              Exclusief
            </span>
            <span className="text-sm text-muted-foreground">
              Luxe Decoratieve Technieken
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
          {/* Left content */}
          <div className="space-y-8 lg:w-1/2">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              <span>Exclusieve</span>
              <div className="mt-2">Decoratieve Verfkunst</div>
            </h1>

            <p className="text-base text-muted-foreground sm:max-w-xl sm:text-lg">
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
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-white shadow-lg transition-all duration-300 hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <Mail className="h-5 w-5" />
                <span>Vraag Een Offerte</span>
                <ArrowRight className="h-5 w-5 transform transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-8 py-4 text-foreground shadow transition-colors hover:bg-muted hover:text-primary focus:ring-2 focus:ring-muted focus:ring-offset-2"
              >
                <ArrowRight className="h-5 w-5" />
                <span>Bekijk Ons Portfolio</span>
              </Link>
            </div>
          </div>

          {/* Right content - Image grid */}
          <div className="relative lg:w-1/2">
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
                  <span className="mb-1 text-3xl font-bold text-foreground">
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
