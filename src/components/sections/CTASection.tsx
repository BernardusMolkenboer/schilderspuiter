import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";

function CTASection() {
  return (
    <section className="bg-orange-600 py-16 transition-colors duration-300 dark:bg-orange-700">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-bold text-white">
          Klaar voor uw volgende project?
        </h2>
        <Link href="/contact">
          <Button
            size="lg"
            className="bg-white text-orange-600 hover:bg-gray-100 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800"
          >
            Neem Contact Op
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default CTASection;
