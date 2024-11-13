import React from "react";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";

function CTASection() {
  return (
    <section className="bg-background py-24 transition-colors duration-300">
      <div className="container mx-auto max-w-screen-xl px-6">
        {/* Section Content */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-foreground">
            Klaar voor een Professionele Verfbeurt?
          </h2>
          <p className="mb-12 text-lg text-muted-foreground">
            Ontvang een vrijblijvende offerte voor uw verfspuitproject en ontdek
            het verschil van professioneel vakwerk.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg bg-primary px-8 py-4 font-semibold text-white shadow-md transition-transform hover:scale-105"
              aria-label="Vraag een offerte aan via email"
            >
              <Mail className="mr-2 h-5 w-5" />
              Vraag Een Offerte Aan
            </Link>
            <Link
              href="tel:+31852129613"
              className="inline-flex items-center rounded-lg border border-border bg-muted/10 px-8 py-4 font-semibold text-foreground shadow-md transition-transform hover:bg-muted/20"
              aria-label="Bel direct voor een afspraak"
            >
              <Phone className="mr-2 h-5 w-5" />
              Bel Direct: +31 85 2129613
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
