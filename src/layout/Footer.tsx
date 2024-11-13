import React from "react";
import Link from "next/link";
import LogoSchilder from "@/svg/logo";
import LogoSchilderWit from "@/svg/logoWit";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import AbnLogoAnimated from "@/components/abnlogo";
import AbnLogoAnimatedWhite from "@/components/abnlogowhite";

function Footer() {
  const socialLinks = [
    { icon: Facebook, link: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, link: "https://instagram.com", label: "Instagram" },
    { icon: Linkedin, link: "https://linkedin.com", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-gradient-to-br from-white to-gray-50 text-black dark:from-[#151515] dark:to-[#151515] dark:text-gray-300">
      <div className="mx-auto max-w-screen-xl px-6 pb-6 pt-12">
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
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-primary transition-all hover:border-primary hover:text-primary dark:border-gray-600 dark:hover:border-primary dark:hover:text-primary"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-100">
              Diensten
            </h3>
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
            <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-100">
              Contact
            </h3>
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
            <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-100">
              Links
            </h3>
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
        {/* Subfooter */}
        <div className="mt-12 border-t border-gray-300 pt-5 text-center dark:border-gray-700">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            {/* Copyright Section */}
            <div className="text-sm text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()}{" "}
              <span className="font-medium text-gray-800 dark:text-gray-100">
                Schilder-Spuiter.nl
              </span>{" "}
              Alle rechten voorbehouden.
            </div>

            {/* Designed By */}
            <div className="flex items-center gap-2">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Ontworpen met zorg en vakmanschap door
              </p>
              <div className="h-8">
                <Link href="https://www.abn.company" target="_blank">
                  {/* Light Theme Animated Logo */}
                  <AbnLogoAnimated className="block h-full dark:hidden" />
                  {/* Dark Theme Animated Logo */}
                  <AbnLogoAnimatedWhite className="hidden h-full dark:block" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
