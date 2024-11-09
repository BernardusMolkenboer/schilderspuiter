import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

function OurServices() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mb-8 text-3xl font-bold text-gray-900 sm:text-4xl">
            Onze Diensten
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Verfspuiten",
                description:
                  "Professionele spuittechnieken voor een perfect resultaat",
                href: "/verfspuiten",
              },
              {
                title: "Schilderwerk",
                description: "Vakkundig schilderwerk voor binnen en buiten",
                href: "/schilderwerk",
              },
              {
                title: "Spackspuitwerk",
                description: "Strakke wandafwerking met moderne technieken",
                href: "/spackspuitwerk",
              },
              {
                title: "Speciaal Schilderwerk",
                description: "Unieke projecten en speciale technieken",
                href: "/speciaal-schilderwerk",
              },
            ].map((service) => (
              <div
                key={service.href}
                className="rounded-lg bg-gray-50 p-6 shadow-md transition-all hover:shadow-lg"
              >
                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mb-6 text-gray-600">{service.description}</p>
                <Link href={service.href}>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">
                    Meer Info <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurServices;
