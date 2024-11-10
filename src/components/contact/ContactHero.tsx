import { Mail, Phone, Clock } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative bg-background pb-24 pt-40 transition-colors duration-300">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[1000px] w-[1000px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[800px] w-[800px] rounded-full bg-secondary/10 blur-3xl" />
      </div>
      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
            Neem Contact Met Ons Op
          </h1>
          <p className="mb-12 text-lg text-muted-foreground">
            Heeft u vragen of wilt u een offerte aanvragen? Wij staan voor u
            klaar en helpen u graag verder.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Phone,
                title: "Bel Ons",
                info: "+31 6 12345678",
                link: "tel:+31612345678",
              },
              {
                icon: Mail,
                title: "Email",
                info: "info@schilder-spuiter.nl",
                link: "mailto:info@schilder-spuiter.nl",
              },
              {
                icon: Clock,
                title: "Openingstijden",
                info: "Ma - Vr: 08:00 - 18:00",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-xl border border-border bg-muted/10 p-6 backdrop-blur-sm transition-colors hover:bg-muted/20"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">
                  {item.title}
                </h3>
                {item.link ? (
                  <a
                    href={item.link}
                    className="text-primary transition-colors hover:text-primary/80"
                  >
                    {item.info}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{item.info}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
