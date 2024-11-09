"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface HeroSectionProps {
  title: string;
  description: string;
  image: string;
}

export function HeroSection({ title, description, image }: HeroSectionProps) {
  return (
    <div className="relative flex min-h-[80vh] items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${image}')` }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
        <h1 className="mb-6 text-4xl font-bold md:text-6xl">{title}</h1>
        <p className="mb-8 text-xl text-gray-200 md:text-2xl">{description}</p>
        <Link href="/contact">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Neem Contact Op
          </Button>
        </Link>
      </div>
    </div>
  );
}
