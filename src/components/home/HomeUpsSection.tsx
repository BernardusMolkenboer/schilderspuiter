import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";

function HomeUpsSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-4xl font-bold">
              Waarom Schilder-Spuiter.nl?
            </h2>
            <ul className="space-y-4 text-lg text-gray-700">
              <li>✓ Meer dan 15 jaar ervaring</li>
              <li>✓ Professioneel en betrouwbaar team</li>
              <li>✓ Hoogwaardige materialen en technieken</li>
              <li>✓ Garantie op al ons werk</li>
              <li>✓ Flexibele planning en snelle service</li>
            </ul>
            <div className="mt-8">
              <Link href="/over-ons">
                <Button size="lg">Leer ons kennen</Button>
              </Link>
            </div>
          </div>
          <div className="relative h-[400px]">
            <div
              className="h-full w-full rounded-lg bg-cover bg-center shadow-xl"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80')",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeUpsSection;
