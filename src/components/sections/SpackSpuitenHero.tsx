import Image from "next/image";
import { Mail, ArrowRight, Phone, Shield, Trophy, Clock } from "lucide-react";
import Link from "next/link";
import Badge from "../Badge";

export default function SpackspuitenHero() {
  return (
    // 1) Remove overflow-hidden to avoid accidental clipping on small screens
    <section className="relative bg-background pt-10">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-background pb-8 sm:pb-16 md:pb-20 lg:pb-28">
          <div className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20">
            {/* Stack on mobile (image below text), row on large screens */}
            <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
              {/* Left Content */}
              <div className="space-y-8 lg:w-1/2">
                <div className="flex items-center gap-2">
                  <Badge
                    icon={Trophy}
                    text="1 Spackspuit Specialist in Nederland"
                  />
                </div>

                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                  Professioneel Spackspuiten Voor Een{" "}
                  <span className="text-primary">Perfecte Afwerking!</span>
                </h1>

                <p className="mt-3 text-base text-muted-foreground sm:mt-5 sm:max-w-xl sm:text-lg">
                  Transformeer uw ruimte met onze expertise in strakke en
                  duurzame muur- en plafondafwerking. Meer dan 15 jaar ervaring
                  in hoogwaardige resultaten.
                </p>

                {/* CTA buttons */}
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-white shadow-lg transition-all duration-300 hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    <Mail className="h-5 w-5" />
                    <span>Neem contact op</span>
                    {/* Use group-hover for subtle arrow animation */}
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="tel:+31852129613"
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-8 py-4 text-foreground shadow transition-colors hover:bg-muted hover:text-primary focus:ring-2 focus:ring-muted focus:ring-offset-2"
                  >
                    <Phone className="h-5 w-5" />
                    Bel Direct
                  </Link>
                </div>

                {/* Small Feature Grid */}
                <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
                  {[
                    { icon: Shield, text: "10 Jaar Garantie" },
                    { icon: Clock, text: "Snelle Service" },
                    { icon: Trophy, text: "Gecertificeerd" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <item.icon className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* End Left Content */}

              {/* Right Image */}
              <div className="relative w-full lg:w-1/2">
                {/* 2) Give a defined height that scales at each breakpoint */}
                <div className="relative h-64 w-full overflow-hidden rounded-2xl sm:h-72 md:h-[500px]">
                  <Image
                    src="/images/spackspuiten-plafond.png"
                    alt="Professional wall finishing"
                    fill
                    className="rounded-2xl object-cover"
                    priority
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10" />
                </div>

                {/* 3) Decorative Elements => behind the image; also hidden on small if desired */}
                <div
                  className="pointer-events-none absolute -right-4 -top-4 hidden h-72 w-72 
                              rounded-full bg-primary/5 blur-3xl sm:block"
                  style={{ zIndex: 0 }} // behind
                />
                <div
                  className="pointer-events-none absolute -bottom-4 -left-4 hidden h-72 w-72 
                              rounded-full bg-primary/10 blur-3xl sm:block"
                  style={{ zIndex: 0 }}
                />

                {/* 4) Stats Card => absolute on lg+, relative on mobile */}
                <div className="relative mt-4 rounded-lg border border-border bg-background/80 p-4 shadow-lg backdrop-blur-sm lg:absolute lg:-bottom-6 lg:-left-6 lg:mt-0">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { number: "15+", label: "Jaren Ervaring" },
                      { number: "1000+", label: "Projecten Voltooid" },
                      { number: "98%", label: "Tevreden Klanten" },
                      { number: "5.0", label: "Gemiddelde Score" },
                    ].map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="mb-1 text-3xl font-bold text-foreground">
                          {stat.number}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* End Stats Card */}
              </div>
              {/* End Right Image */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
