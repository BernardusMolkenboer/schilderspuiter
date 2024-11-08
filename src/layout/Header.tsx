import React, { useState, useEffect } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import HamburgerIcon from "@/components/HamburgerIcon";
import { useTheme } from "next-themes";
import { ThemeToggle } from "@/components/ThemeToggle";

// Define menu item types
type MenuItem = {
  title: string;
  link: string;
};

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const menuItems: MenuItem[] = [
    { title: "Home", link: "/" },
    { title: "Over Ons", link: "/about" },
    { title: "Diensten", link: "/services" },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDarkMode = resolvedTheme === "dark";

  return (
    <header className="relative z-40 w-full">
      <div
        className={`fixed left-0 right-0 top-0 z-30 w-full px-4 drop-shadow ${
          isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}
      >
        <div className="relative mx-auto flex max-w-screen-xl items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="text-lg font-bold">
            <span
              className={`${
                isDarkMode ? "text-white" : "text-gray-900"
              } hover:opacity-80`}
            >
              Schilder-Spuiter
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden space-x-6 md:flex">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className={`text-sm font-medium ${
                  isDarkMode ? "hover:text-gray-300" : "hover:text-gray-700"
                }`}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Contact Button & Theme Toggle */}
          <div className="hidden items-center space-x-4 md:flex">
            <ThemeToggle />
            <Link
              href="/contact"
              className="transform rounded-full bg-gradient-to-r from-blue-500 to-blue-700 px-5 py-2 text-white shadow-lg transition hover:scale-105"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="focus:outline-none md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <HamburgerIcon
              color={isDarkMode ? "white" : "black"}
              isOpen={isMenuOpen}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <MobileMenu closeMenu={() => setIsMenuOpen(false)}>
            <nav className="space-y-4">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className={`block text-sm font-medium ${
                    isDarkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </MobileMenu>
        )}
      </div>
    </header>
  );
}

export default Header;
