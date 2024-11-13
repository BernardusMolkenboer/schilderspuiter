import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";

function HomeUpsSection() {
  return (
    <section className="bg-gray-50 py-20 transition-colors duration-300 dark:bg-neutral-900">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Text Content */}
          <div>
            <h2 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white">
              Waarom Schilder-Spuiter.nl?
            </h2>
            <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-400">
              <li>✓ Meer dan 15 jaar ervaring</li>
              <li>✓ Professioneel en betrouwbaar team</li>
              <li>✓ Hoogwaardige materialen en technieken</li>
              <li>✓ Garantie op al ons werk</li>
              <li>✓ Flexibele planning en snelle service</li>
            </ul>
            <div className="mt-8">
              <Link href="/over-ons">
                <Button
                  size="lg"
                  className="bg-orange-600 text-white hover:bg-orange-700"
                >
                  Leer ons kennen
                </Button>
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative h-[400px]">
            <div
              className="h-full w-full rounded-lg bg-cover bg-center shadow-xl"
              style={{
                backgroundImage: "url('/images/waarom-schilder-spuiter.png')",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeUpsSection;
