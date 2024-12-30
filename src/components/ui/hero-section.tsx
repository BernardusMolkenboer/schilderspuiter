"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Badge from "../Badge";

export function HeroSection() {
  const benefits = [
    "Professionele kwaliteit",
    "Snelle service",
    "Ervaren vakmanschap",
  ];

  return (
    <div className="relative bg-background pt-10">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-background pb-8 sm:pb-16 md:pb-20 lg:pb-28">
          <div className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20">
            {/* 
              flex-col = vertical on mobile => image below text
              md:flex-row = horizontal on medium+ screens => image on right
            */}
            <div className="flex flex-col items-start justify-between gap-12 md:flex-row">
              {/* Left (Text) */}
              <div className="space-y-8 md:w-1/2">
                <div className="flex items-center gap-2">
                  <Badge icon={Star} text="Toonaangevend in vakmanschap" />
                </div>

                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                  <span className="block">Professioneel</span>
                  <span className="block text-primary">
                    Schilder- en Spuitwerk
                  </span>
                </h1>

                <p className="mt-3 text-base text-muted-foreground sm:mt-5 sm:max-w-xl sm:text-lg">
                  Transformeer uw ruimte met onze expertise in schilder- en
                  spuitwerk. Wij leveren hoogwaardige resultaten voor zowel
                  particuliere als zakelijke projecten.
                </p>

                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      <p className="text-muted-foreground">{benefit}</p>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Link href="/contact">
                    <Button size="lg" className="gap-2">
                      Neem Contact Op
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#diensten">
                    <Button size="lg" variant="outline">
                      Onze Diensten
                    </Button>
                  </Link>
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <div className="flex -space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="inline-block h-8 w-8 rounded-full ring-2 ring-background"
                        style={{
                          backgroundColor: `hsl(${i * 20 + 180}, 70%, 90%)`,
                        }}
                      />
                    ))}
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold text-foreground">
                      2500+ Projecten
                    </p>
                    <p className="text-muted-foreground">Succesvol afgerond</p>
                  </div>
                </div>
              </div>
              {/* End Left (Text) */}

              {/* Right (Image) */}
              <div className="relative w-full md:w-1/2">
                {/* 
                  w-full on mobile => full width
                  md:w-1/2 => half width on medium+ screens
                  Use a fixed or responsive height so the container is visible.
                */}
                <div className="relative h-64 w-full overflow-hidden rounded-2xl sm:h-72 md:h-[500px]">
                  {/* Optional gradient overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 mix-blend-multiply" />
                  <Image
                    src="/images/spuitwerk.png"
                    alt="Professioneel Schilder- en Spuitwerk"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10" />
                </div>

                {/* Decorative Elements hidden on small screens */}
                <div className="pointer-events-none absolute -right-4 -top-4 hidden h-72 w-72 rounded-full bg-primary/5 blur-3xl sm:block" />
                <div className="pointer-events-none absolute -bottom-4 -left-4 hidden h-72 w-72 rounded-full bg-primary/10 blur-3xl sm:block" />

                {/* Stats Card (absolute on md+) */}
                <div className="relative mt-4 rounded-lg border border-border bg-background/80 p-4 shadow-lg backdrop-blur-sm md:absolute md:-bottom-6 md:-left-6 md:mt-0 md:block">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <Star className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        4.9/5 Rating
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Klanttevredenheid
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Right (Image) */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
