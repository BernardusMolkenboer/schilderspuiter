import React from "react";
import Image from "next/image";
import {
  Mail,
  ArrowRight,
  Star,
  Palette,
  Clock,
  Shield,
  Phone,
  CheckCircle2,
} from "lucide-react";

function SchilderwerkHero() {
  return (
    <section className="relative min-h-screen bg-background transition-colors duration-300">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[1000px] w-[1000px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[800px] w-[800px] rounded-full bg-primary/20 blur-3xl" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto max-w-screen-xl px-6 pt-24">
        {/* Experience badge */}
        <div className="mb-12 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-muted/20 bg-muted/10 p-1.5 pl-2 pr-6 backdrop-blur-sm">
            <span className="rounded-full bg-primary px-3 py-1 text-sm font-medium text-white">
              Vakmanschap
            </span>
            <span className="text-sm text-muted-foreground">
              30+ jaar ervaring in traditioneel schilderwerk
            </span>
          </div>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left content */}
          <div className="space-y-8 lg:col-span-6">
            <h1 className="text-6xl font-bold text-foreground md:text-7xl">
              Traditioneel
              <div className="relative mt-2 inline-block">
                <span className="relative z-10 text-primary">Schilderwerk</span>
                <span className="absolute bottom-2 left-0 h-3 w-full -skew-x-6 bg-primary/10" />
              </div>
              <div className="mt-2 text-muted-foreground">met Passie</div>
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              Ontdek het verschil van echt vakmanschap. Van klassieke technieken
              tot moderne afwerkingen, wij brengen uw visie tot leven met
              precisie en toewijding.
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: Palette,
                  text: "Persoonlijk Kleuradvies",
                  desc: "Op maat gemaakt voor uw ruimte",
                },
                {
                  icon: Shield,
                  text: "10 Jaar Garantie",
                  desc: "Op al ons schilderwerk",
                },
                {
                  icon: Clock,
                  text: "Flexibele Planning",
                  desc: "Aangepast aan uw schema",
                },
                {
                  icon: CheckCircle2,
                  text: "Gratis Inspectie",
                  desc: "Vooraf een duidelijk advies",
                },
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="group rounded-xl border border-muted/20 bg-muted/10 p-4 transition-all duration-300 hover:border-primary/50"
                  >
                    <Icon className="mb-2 h-6 w-6 text-primary" />
                    <p className="font-medium text-foreground">
                      {feature.text}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {feature.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col gap-4 pt-6 sm:flex-row">
              <a
                href="mailto:info@schilderwerk.nl"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-primary font-semibold text-white transition-all duration-300 hover:scale-105"
              >
                <span className="relative flex items-center gap-2 rounded-xl bg-background px-8 py-4">
                  <Mail className="h-5 w-5" />
                  <span>Gratis Offerte</span>
                  <ArrowRight className="h-5 w-5 transform transition-transform group-hover:translate-x-1" />
                </span>
              </a>
              <a
                href="tel:+31612345678"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-muted/20 bg-muted/10 px-8 py-4 font-semibold text-foreground transition-colors hover:bg-muted/20"
              >
                <Phone className="h-5 w-5" />
                <span>Bel Direct</span>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-8 border-t border-muted/20 pt-8">
              <div className="flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-muted/20 bg-muted/10"
                    >
                      <Star className="h-6 w-6 fill-primary text-primary" />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-foreground">Uitstekend</p>
                  <p className="text-muted-foreground">
                    1000+ tevreden klanten
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Image showcase */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-8">
                <div className="relative h-[500px] overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop"
                    alt="Professioneel schilderwerk"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                </div>
              </div>
              <div className="col-span-4 space-y-4">
                <div className="relative h-[240px] overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=2071&auto=format&fit=crop"
                    alt="Detail schilderwerk"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[240px] overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1604762524889-3e2fcc145683?q=80&w=2071&auto=format&fit=crop"
                    alt="Schilderwerk proces"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Stats bar */}
            <div className="mt-4 grid grid-cols-3 gap-4">
              {[
                { number: "30+", label: "Jaren Ervaring" },
                { number: "2500+", label: "Projecten Voltooid" },
                { number: "100%", label: "Klanttevredenheid" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center rounded-xl border border-muted/20 bg-muted/10 p-4"
                >
                  <span className="mb-1 text-2xl font-bold text-primary">
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

export default SchilderwerkHero;
