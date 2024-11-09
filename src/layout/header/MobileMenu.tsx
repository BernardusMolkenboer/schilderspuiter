"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Paintbrush,
  SprayCan,
  Palette,
  Brush,
  Sun,
  Moon,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const services = [
  { href: "/verfspuiten", label: "Verfspuiten", icon: SprayCan },
  { href: "/schilderwerk", label: "Schilderwerk", icon: Paintbrush },
  { href: "/spackspuitwerk", label: "Spackspuitwerk", icon: Brush },
  {
    href: "/speciaal-schilderwerk",
    label: "Speciaal Schilderwerk",
    icon: Palette,
  },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-2 md:hidden">
      {/* Dark/Light Theme Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
      </Button>

      {/* Menu Button */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="animate-slide-in-right w-[300px] bg-background sm:w-[400px]"
        >
          <SheetTitle className="mb-4 px-4 text-lg font-bold text-primary">
            Menu
          </SheetTitle>
          <nav className="flex-1 overflow-auto py-4">
            {/* Home */}
            <Link
              href="/"
              className="flex items-center rounded-md px-4 py-3 text-sm font-medium hover:bg-muted"
              onClick={() => setOpen(false)}
            >
              <Menu className="mr-3 h-5 w-5 text-primary" />
              Home
            </Link>

            {/* Diensten */}
            <div className="mt-2">
              <div className="px-4 py-2 text-sm font-semibold text-muted-foreground">
                Diensten
              </div>
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="flex items-center rounded-md px-4 py-3 text-sm font-medium hover:bg-muted"
                  onClick={() => setOpen(false)}
                >
                  <service.icon className="mr-3 h-5 w-5 text-primary" />
                  {service.label}
                </Link>
              ))}
            </div>

            {/* Over Ons */}
            <Link
              href="/over-ons"
              className="mt-4 flex items-center rounded-md px-4 py-3 text-sm font-medium hover:bg-muted"
              onClick={() => setOpen(false)}
            >
              <Palette className="mr-3 h-5 w-5 text-primary" />
              Over Ons
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className="mt-4 flex items-center rounded-md px-4 py-3 text-sm font-medium hover:bg-muted"
              onClick={() => setOpen(false)}
            >
              <Brush className="mr-3 h-5 w-5 text-primary" />
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="border-t border-border p-4">
            <Button asChild className="w-full">
              <Link href="/contact" onClick={() => setOpen(false)}>
                Offerte Aanvragen
              </Link>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
