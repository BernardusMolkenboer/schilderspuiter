"use client";

import Link from "next/link";
import {
  Paintbrush,
  SprayCan,
  Palette,
  Brush,
  ChevronDown,
  Phone,
  Mail,
  Clock,
  MapPin,
  Sun,
  Moon,
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

export function DesktopMenu() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="hidden items-center space-x-6 md:flex">
      <Link
        href="/"
        className="text-sm font-medium transition-colors hover:text-primary dark:hover:text-primary/80"
      >
        Home
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="flex items-center gap-1 px-3 py-2">
            Diensten
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[240px]">
          {services.map((service) => (
            <DropdownMenuItem key={service.href} asChild>
              <Link
                href={service.href}
                className="flex items-center gap-3 rounded-md p-2 hover:bg-muted dark:hover:bg-muted/50"
              >
                <service.icon className="h-5 w-5 text-primary dark:text-primary/80" />
                <div>
                  <div className="text-sm font-medium">{service.label}</div>
                  <div className="text-xs text-muted-foreground dark:text-muted">
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
        className="text-sm font-medium transition-colors hover:text-primary dark:hover:text-primary/80"
      >
        Over Ons
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="flex items-center gap-1 px-3 py-2">
            Contact
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[240px]">
          {contactInfo.map((item) => (
            <DropdownMenuItem key={item.href} asChild>
              <Link
                href={item.href}
                className="flex items-start gap-3 rounded-md p-2 hover:bg-muted dark:hover:bg-muted/50"
              >
                <item.icon className="h-5 w-5 text-primary dark:text-primary/80" />
                <div>
                  <div className="text-sm font-medium">{item.label}</div>
                  <div className="text-xs text-muted-foreground dark:text-muted">
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
  );
}
