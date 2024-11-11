"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Shield, Mail, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-background py-20">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-background pb-16 sm:pb-24 md:pb-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
              {/* Left Content */}
              <div className="space-y-8 lg:w-1/2">
                <div className="flex items-center gap-2">
                  <Shield className="h-6 w-6 text-primary" />
                  <span className="text-muted-foreground">
                    30+ Jaar Vakmanschap
                  </span>
                </div>

                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                  Uw Partner in{" "}
                  <span className="text-primary">Professionele Afwerking</span>
                </h1>

                <p className="mt-3 text-base text-muted-foreground sm:mt-5 sm:max-w-xl sm:text-lg">
                  Wij zijn gespecialiseerd in schilder- en spuitwerken van
                  hoogwaardige kwaliteit. Met passie voor het vak en oog voor
                  detail leveren wij het beste resultaat voor elk project.
                </p>

                <div className="flex gap-4">
                  <Link href="mailto:info@schilder-spuiter.nl">
                    <Button size="lg" className="gap-2">
                      <Mail className="h-5 w-5" />
                      Neem Contact Op
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="tel:+31612345678">
                    <Button size="lg" variant="outline" className="gap-2">
                      <Phone className="h-5 w-5" />
                      Bel Direct
                    </Button>
                  </Link>
                </div>

                <div className="space-y-4">
                  {[
                    "Professionele kwaliteit",
                    "Snelle service",
                    "Ervaren vakmanschap",
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      <p className="text-muted-foreground">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Image */}
              <div className="relative lg:w-1/2">
                <div className="relative h-[500px] w-full overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80"
                    alt="Professional painting"
                    fill
                    className="rounded-2xl object-cover"
                    priority
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 mix-blend-multiply" />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10" />
                </div>

                {/* Decorative Elements */}
                <div className="absolute -right-4 -top-4 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
                <div className="absolute -bottom-4 -left-4 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

                {/* Stats Card */}
                <div className="absolute -bottom-6 -left-6 rounded-lg border border-border bg-background/80 p-4 shadow-lg backdrop-blur-sm">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <Shield className="h-6 w-6 text-primary" />
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
