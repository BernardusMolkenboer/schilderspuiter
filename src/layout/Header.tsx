"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Sun,
  Moon,
  Paintbrush,
  SprayCan,
  Palette,
  Brush,
  ChevronDown,
  Phone,
  Mail,
  Clock,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const services = [
  {
    href: "/verfspuiten",
    label: "Verfspuiten",
    icon: SprayCan,
    description: "Professionele spuittechnieken",
  },
  {
    href: "/schilderwerk",
    label: "Schilderwerk",
    icon: Paintbrush,
    description: "Vakkundig schilderwerk",
  },
  {
    href: "/spackspuitwerk",
    label: "Spackspuitwerk",
    icon: Brush,
    description: "Strakke wandafwerking",
  },
  {
    href: "/speciaal-schilderwerk",
    label: "Speciaal Schilderwerk",
    icon: Palette,
    description: "Unieke projecten",
  },
];

const contactInfo = [
  {
    icon: Phone,
    label: "Bel ons",
    info: "+31 (0)6 12345678",
    href: "tel:+31612345678",
  },
  {
    icon: Mail,
    label: "Email",
    info: "info@schilder-spuiter.nl",
    href: "mailto:info@schilder-spuiter.nl",
  },
  {
    icon: Clock,
    label: "Openingstijden",
    info: "Ma-Vr: 08:00-17:00",
    href: "/contact",
  },
  {
    icon: MapPin,
    label: "Locatie",
    info: "Amsterdam, Nederland",
    href: "/contact",
  },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-2xl font-bold text-transparent"
          >
            Schilder-Spuiter.nl
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center space-x-6 md:flex">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Home
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center gap-1 px-3 py-2"
                >
                  Diensten
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[240px]">
                {services.map((service) => (
                  <DropdownMenuItem key={service.href} asChild>
                    <Link
                      href={service.href}
                      className="flex items-center gap-3 rounded-md p-2 hover:bg-muted"
                    >
                      <service.icon className="h-5 w-5 text-primary" />
                      <div>
                        <div className="text-sm font-medium">
                          {service.label}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {service.description}
                        </div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/over-ons"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Over Ons
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center gap-1 px-3 py-2"
                >
                  Contact
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[240px]">
                {contactInfo.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link
                      href={item.href}
                      className="flex items-center gap-3 rounded-md p-2 hover:bg-muted"
                    >
                      <item.icon className="h-5 w-5 text-primary" />
                      <div>
                        <div className="text-sm font-medium">{item.label}</div>
                        <div className="text-xs text-muted-foreground">
                          {item.info}
                        </div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

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

            <Button asChild variant="default">
              <Link href="/contact">Offerte Aanvragen</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
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
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="space-y-4 border-b border-border bg-background/95 px-4 pb-6 pt-4 backdrop-blur-sm md:hidden">
          <Link
            href="/"
            className="block text-sm font-medium transition-colors hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>

          <div>
            <div className="mb-2 text-sm font-semibold text-muted-foreground">
              Diensten
            </div>
            <div className="space-y-2">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="block text-sm font-medium transition-colors hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/over-ons"
            className="block text-sm font-medium transition-colors hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Over Ons
          </Link>

          <div>
            <div className="mb-2 text-sm font-semibold text-muted-foreground">
              Contact
            </div>
            <div className="space-y-2">
              {contactInfo.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-sm font-medium transition-colors hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}: {item.info}
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-4">
            <Button asChild className="w-full">
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                Offerte Aanvragen
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
