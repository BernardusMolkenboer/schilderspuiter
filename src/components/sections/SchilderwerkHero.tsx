import React from "react";
import Image from "next/image";
import {
  Mail,
  ArrowRight,
  Star,
  Palette,
  Clock,
  Shield,
  Trophy,
  Phone,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import Badge from "../Badge";

function SchilderwerkHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background pb-24 pt-32">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-0 h-[1000px] w-[1000px] -translate-x-1/2 rounded-full bg-primary/10 opacity-70 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[800px] w-[800px] rounded-full bg-primary/20 opacity-70 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Experience badge */}
        <div className="mb-8 flex justify-center">
          <Badge
            icon={Trophy}
            text="30+ Jaar Ervaring in traditioneel schilderwerk"
          />
        </div>

        <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
          {/* Left content */}
          <div className="mt-10 space-y-8 lg:w-1/2">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Traditioneel
              <div className="relative mt-2 inline-block">
                <span className="relative z-10 text-primary">Schilderwerk</span>
                <span className="absolute bottom-2 left-0 h-3 w-full -skew-x-6 bg-primary/10" />
              </div>
              <div className="mt-2 text-muted-foreground">met Passie</div>
            </h1>

            <p className="text-base text-muted-foreground sm:max-w-xl sm:text-lg">
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
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-white shadow-lg transition-all duration-300 hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <Mail className="h-5 w-5" />
                <span>Neem contact op</span>
                <ArrowRight className="h-5 w-5 transform transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="tel:+31852129613"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-8 py-4 text-foreground shadow transition-colors hover:bg-muted hover:text-primary focus:ring-2 focus:ring-muted focus:ring-offset-2"
              >
                <Phone className="h-5 w-5" />
                Bel Direct
              </Link>
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
          <div className="relative lg:w-1/2">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-8">
                <div className="relative h-[500px] overflow-hidden rounded-2xl">
                  <Image
                    src="/images/traditioneel-schilderwerk.png"
                    alt="Traditioneel schilderwerk"
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
                    src="/images/schilderwerk-in-kleur.png"
                    alt="Detail schilderwerk"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[240px] overflow-hidden rounded-2xl">
                  <Image
                    src="/images/rol-en-hand-schilderwerk.png"
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

export default SchilderwerkHero;
