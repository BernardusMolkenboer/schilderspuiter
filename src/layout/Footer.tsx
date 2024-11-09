import React from "react";
import Link from "next/link";
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
    <footer className="bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Branding Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">
              Schilder-Spuiter.nl
            </h3>
            <p className="text-muted-foreground">
              Professioneel Schilder- en Spuitwerk
            </p>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="rounded-full">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="mb-4 font-semibold text-primary">Diensten</h4>
            <ul className="space-y-2">
              {[
                ["Verfspuiten", "/diensten/verfspuiten"],
                ["Schilderwerk", "/diensten/schilderwerk"],
                ["Spackspuitwerk", "/diensten/spackspuitwerk"],
                ["Speciaal Schilderwerk", "/diensten/speciaal-schilderwerk"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="mb-4 font-semibold text-primary">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <span>
                  Voorbeeldstraat 123
                  <br />
                  1234 AB Amsterdam
                </span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary" />
                <span>+31 (0)6 12345678</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary" />
                <span>info@schilder-spuiter.nl</span>
              </li>
            </ul>
          </div>

          {/* Links Section */}
          <div>
            <h4 className="mb-4 font-semibold text-primary">Links</h4>
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
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-border pt-8 text-center text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Schilder-Spuiter.nl. Alle rechten
            voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
