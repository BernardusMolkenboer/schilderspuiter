import React from "react";
import Link from "next/link";
import {
  Home,
  ArrowRight,
  Mail,
  Paintbrush,
  SprayCan,
  Brush,
  Palette,
} from "lucide-react";

const services = [
  {
    title: "Spackspuiten",
    description:
      "Strakke afwerking met een ruime keuze aan structuren en kleuren.",
    href: "/spackspuiten",
    icon: Brush,
  },
  {
    title: "Verfspuiten",
    description:
      "Professionele verfapplicatie voor een perfecte en duurzame afwerking.",
    href: "/verfspuiten",
    icon: SprayCan,
  },
  {
    title: "Schilderwerk",
    description:
      "Vakkundig schilderwerk voor binnen en buiten met premium materialen.",
    href: "/schilderwerk",
    icon: Paintbrush,
  },
  {
    title: "Speciale Technieken",
    description:
      "Unieke decoratieve verfsoorten zoals metallic en Italiaanse stucco.",
    href: "/speciale-verfsoorten",
    icon: Palette,
  },
];

function ErrorSection() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background pt-20 transition-colors duration-300">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[1000px] w-[1000px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[800px] w-[800px] rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="flex min-h-screen flex-col items-center justify-center text-center">
          {/* 404 heading */}
          <h1 className="text-[8rem] font-bold leading-none text-primary md:text-[12rem]">
            404
          </h1>

          {/* Main content */}
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
              Oeps! Deze pagina bestaat niet
            </h2>
            <p className="mb-12 text-lg text-muted-foreground">
              Het lijkt erop dat u een pagina probeert te bereiken die niet
              bestaat of is verplaatst. Geen zorgen, we helpen u graag weer op
              weg.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <span className="relative flex items-center gap-2">
                  <Home className="h-5 w-5" />
                  <span>Terug naar Home</span>
                </span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-muted/10 px-8 py-4 font-semibold text-foreground backdrop-blur-sm transition-colors hover:bg-muted/20"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Opnemen
              </Link>
            </div>

            {/* Services Section */}
            <div className="mt-16">
              <h3 className="mb-6 text-xl font-bold text-foreground">
                Onze Diensten:
              </h3>
              <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    href={service.href}
                    className="group relative flex flex-col items-start rounded-xl border border-border bg-muted/10 p-6 transition-all duration-300 hover:bg-muted/20"
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <service.icon className="h-6 w-6 text-primary" />
                      <span className="text-lg font-semibold text-foreground">
                        {service.title}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                      {service.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ErrorSection;
