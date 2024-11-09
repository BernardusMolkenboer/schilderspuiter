"use client";

import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, ArrowRight } from "lucide-react";
import { useState } from "react";
import { services } from "@/config/services";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex h-full flex-col">
          <div className="border-b px-4 py-6">
            <Link
              href="/"
              className="flex items-center gap-2"
              onClick={() => setOpen(false)}
            >
              <span className="font-bold">Schilder-Spuiter.nl</span>
            </Link>
          </div>
          <nav className="flex-1 overflow-auto py-4">
            <div className="space-y-4">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  onClick={() => setOpen(false)}
                  className="mx-2 flex items-center gap-2 rounded-lg px-4 py-2 text-sm hover:bg-accent"
                >
                  <service.icon className="h-4 w-4" />
                  <span>{service.title}</span>
                </Link>
              ))}
              <Link
                href="/over-ons"
                onClick={() => setOpen(false)}
                className="mx-2 flex items-center justify-between rounded-lg px-4 py-2 text-sm hover:bg-accent"
              >
                <span>Over Ons</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mx-2 flex items-center justify-between rounded-lg px-4 py-2 text-sm hover:bg-accent"
              >
                <span>Contact</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </nav>
          <div className="border-t p-4">
            <Button asChild className="w-full" size="lg">
              <Link href="/contact" onClick={() => setOpen(false)}>
                Neem Contact Op
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
