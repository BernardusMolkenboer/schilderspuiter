import Image from "next/image";
import { Mail, ArrowRight, Shield, Trophy, Clock } from "lucide-react";
import Link from "next/link";

export default function SpackspuitenHero() {
  return (
    <section className="relative overflow-hidden bg-background pt-20">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-background pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28">
          <div className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20">
            <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
              {/* Left Content */}
              <div className="space-y-8 lg:w-1/2">
                <div className="flex items-center gap-2">
                  <Trophy className="h-6 w-6 text-primary" />
                  <span className="text-muted-foreground">
                    #1 Spackspuit Specialist in Nederland
                  </span>
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

                <div className="flex flex-wrap gap-4">
                  <Link href="mailto:info@spackspuitenservice.nl">
                    <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-white shadow-lg hover:bg-primary/90">
                      <Mail className="h-5 w-5" />
                      Vraag Een Offerte Aan
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </Link>
                  <Link href="tel:+31612345678">
                    <button className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-8 py-4 text-foreground shadow hover:bg-muted">
                      <Clock className="h-5 w-5" />
                      Direct Contact
                    </button>
                  </Link>
                </div>

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

              {/* Right Image */}
              <div className="relative lg:w-1/2">
                <div className="relative h-[500px] w-full overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop"
                    alt="Professional wall finishing"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
