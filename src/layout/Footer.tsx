import React from "react";
import Link from "next/link";
import LogoSchilder from "@/svg/logo";
import LogoSchilderWit from "@/svg/logoWit";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-white to-gray-50 text-black dark:from-[#151515] dark:to-[#151515] dark:text-gray-300">
      <div className="mx-auto max-w-screen-xl px-6 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Branding Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              {/* Light Theme Logo */}
              <LogoSchilder
                className="block h-10 w-auto dark:hidden"
                aria-label="Logo"
              />
              {/* Dark Theme Logo */}
              <LogoSchilderWit
                className="hidden h-10 w-auto dark:block"
                aria-label="Logo"
              />
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Professioneel Schilder- en Spuitwerk. Uw partner voor kwaliteit en
              vakmanschap.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-gray-300 text-primary hover:border-primary hover:text-primary dark:border-gray-600 dark:hover:border-primary dark:hover:text-primary"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-gray-300 text-primary hover:border-primary hover:text-primary dark:border-gray-600 dark:hover:border-primary dark:hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-gray-300 text-primary hover:border-primary hover:text-primary dark:border-gray-600 dark:hover:border-primary dark:hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-100">
              Diensten
            </h4>
            <ul className="space-y-2">
              {[
                ["Verfspuiten", "/verfspuiten"],
                ["Schilderwerk", "/schilderwerk"],
                ["Spackspuitwerk", "/spackspuitwerk"],
                ["Speciaal Schilderwerk", "/speciaal-schilderwerk"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-600 transition-colors hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-100">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary dark:text-primary" />
                <span className="text-gray-600 dark:text-gray-400">
                  Rijnstraat 42
                  <br />
                  8226 LS Lelystad, Nederland
                </span>
              </li>

              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-gray-600 dark:text-gray-400">
                  +31 (0)85 2129613
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-gray-600 dark:text-gray-400">
                  info@schilder-spuiter.nl
                </span>
              </li>
            </ul>
          </div>

          {/* Links Section */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-100">
              Links
            </h4>
            <ul className="space-y-2">
              {[
                ["Over Ons", "/over-ons"],
                ["Contact", "/contact"],
                ["Privacy", "/privacy"],
                ["Voorwaarden", "/voorwaarden"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-600 transition-colors hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-300 pt-8 text-center text-gray-600 dark:border-gray-700 dark:text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Schilder-Spuiter.nl. Alle rechten
            voorbehouden.
          </p>
          <p className="mt-2">Ontworpen met zorg en vakmanschap.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
