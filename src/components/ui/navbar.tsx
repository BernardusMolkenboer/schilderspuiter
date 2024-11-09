"use client";

import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/layout/mobile-nav";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Brush, Droplet, Paintbrush, Palette } from "lucide-react";

const services = [
  {
    title: "Verfspuiten",
    href: "/verfspuiten",
    description: "Professionele verfspuitservice voor een perfect resultaat",
    icon: Droplet,
  },
  {
    title: "Schilderwerk",
    href: "/schilderwerk",
    description: "Vakkundig schilderwerk voor binnen en buiten",
    icon: Brush,
  },
  {
    title: "Spackspuitwerk",
    href: "/spackspuitwerk",
    description: "Strakke wand- en plafondafwerking",
    icon: Paintbrush,
  },
  {
    title: "Speciaal Schilderwerk",
    href: "/speciaal-schilderwerk",
    description: "Unieke en creatieve schilderoplossingen",
    icon: Palette,
  },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <MobileNav />
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="text-xl font-bold">Schilder-Spuiter.nl</span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Diensten</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {services.map((service) => (
                      <li key={service.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={service.href}
                            className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            )}
                          >
                            <div className="flex items-center gap-2">
                              <service.icon className="h-4 w-4" />
                              <div className="text-sm font-medium leading-none">
                                {service.title}
                              </div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {service.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Button asChild className="w-full md:w-auto" variant="orange">
              <Link href="/contact">Neem Contact Op</Link>
            </Button>
          </div>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
