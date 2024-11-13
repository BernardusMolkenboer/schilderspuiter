"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  const benefits = [
    "Professionele kwaliteit",
    "Snelle service",
    "Ervaren vakmanschap",
  ];

  return (
    <div className="relative overflow-hidden bg-background pt-20">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-background pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28">
          <div className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20">
            <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
              {/* Left Content */}
              <div className="space-y-8 lg:w-1/2">
                <div className="flex items-center gap-2">
                  <Star className="h-6 w-6 text-primary" />
                  <span className="text-muted-foreground">
                    Toonaangevend in vakmanschap
                  </span>
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
                      <div className="flex-shrink-0">
                        <Check className="h-5 w-5 text-primary" />
                      </div>
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

              {/* Right Image */}
              <div className="relative lg:w-1/2">
                <div className="relative h-[500px] w-full overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 mix-blend-multiply" />
                  <Image
                    src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80"
                    alt="Professional painting"
                    fill
                    className="rounded-2xl object-cover"
                    priority
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10" />
                </div>

                {/* Decorative Elements */}
                <div className="absolute -right-4 -top-4 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
                <div className="absolute -bottom-4 -left-4 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

                {/* Stats Card */}
                <div className="absolute -bottom-6 -left-6 rounded-lg border border-border bg-background/80 p-4 shadow-lg backdrop-blur-sm">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
