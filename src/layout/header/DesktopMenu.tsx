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
import { useState, useRef } from "react";

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
    info: "+31 (0)85 2129613",
    href: "tel:+31852129613",
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
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current); // Clear any pending timeout
    }
    setHoveredMenu(menu);
  };

  const handleMouseLeave = () => {
    // Set a delay before hiding the menu
    timeoutRef.current = setTimeout(() => {
      setHoveredMenu(null);
    }, 200); // Delay in milliseconds
  };

  return (
    <div className="hidden items-center space-x-6 md:flex">
      <Link
        href="/"
        className="text-sm font-medium transition-colors hover:text-primary dark:hover:text-primary/80"
      >
        Home
      </Link>

      <div
        className="relative"
        onMouseEnter={() => handleMouseEnter("diensten")}
        onMouseLeave={handleMouseLeave}
      >
        <Button
          variant="ghost"
          className="flex items-center gap-1 px-3 py-2"
          aria-label="Open diensten menu"
        >
          Diensten
          <ChevronDown className="h-4 w-4" />
        </Button>
        {hoveredMenu === "diensten" && (
          <div className="absolute right-0 mt-2 w-[240px] rounded-md border border-border bg-white text-black shadow-md dark:border-neutral-700 dark:bg-neutral-900 dark:text-white">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group flex items-center gap-3 rounded-md p-2 hover:bg-muted dark:hover:bg-neutral-800"
              >
                <service.icon className="h-5 w-5 text-primary group-hover:text-primary" />
                <div>
                  <div className="text-sm font-medium group-hover:text-primary">
                    {service.label}
                  </div>
                  <div className="text-xs text-muted-foreground dark:text-neutral-400">
                    {service.description}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <Link
        href="/over-ons"
        className="text-sm font-medium transition-colors hover:text-primary dark:hover:text-primary/80"
      >
        Over Ons
      </Link>

      <div
        className="relative"
        onMouseEnter={() => handleMouseEnter("contact")}
        onMouseLeave={handleMouseLeave}
      >
        <Button
          variant="ghost"
          className="flex items-center gap-1 px-3 py-2"
          aria-label="Open contact menu"
        >
          Contact
          <ChevronDown className="h-4 w-4" />
        </Button>
        {hoveredMenu === "contact" && (
          <div className="absolute right-0 mt-2 w-[240px] rounded-md border border-border bg-white text-black shadow-md dark:border-neutral-700 dark:bg-neutral-900 dark:text-white">
            {contactInfo.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-start gap-3 rounded-md p-2 hover:bg-muted dark:hover:bg-neutral-800"
              >
                <item.icon className="h-5 w-5 text-primary group-hover:text-primary" />
                <div>
                  <div className="text-sm font-medium group-hover:text-primary">
                    {item.label}
                  </div>
                  <div className="text-xs text-muted-foreground dark:text-neutral-400">
                    {item.info}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <Button
        variant="ghost"
        size="icon"
        aria-label="Toggle dark and light mode"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
      </Button>

      <Button asChild variant="default" aria-label="Offerte aanvragen">
        <Link href="/contact">Offerte Aanvragen</Link>
      </Button>
    </div>
  );
}
