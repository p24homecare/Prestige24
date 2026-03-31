"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";
import { Phone, Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { key: "services", href: "#services" },
  { key: "gapp", href: "#gapp" },
  { key: "whyUs", href: "#why-us" },
  { key: "howItWorks", href: "#how-it-works" },
] as const;

export default function Navbar() {
  const { t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="container-max section-padding !py-0">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex-shrink-0" aria-label="Prestige 24 Home Care - Home">
            <Image
              src="/logo.png"
              alt="Prestige 24 Home Care"
              width={400}
              height={116}
              className="h-10 sm:h-12 w-auto"
              priority
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
            {navLinks.map(({ key, href }) => (
              <a
                key={key}
                href={href}
                className="text-sm font-medium text-navy-400 hover:text-navy transition-colors"
              >
                {t.nav[key]}
              </a>
            ))}
          </nav>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:4708843905"
              className="flex items-center gap-1.5 text-sm font-medium text-navy hover:text-royal transition-colors"
            >
              <Phone className="w-4 h-4" />
              470-884-3905
            </a>
            <LanguageToggle />
            <a
              href="#contact"
              className="px-5 py-2.5 bg-amber text-white text-sm font-semibold rounded-lg hover:bg-amber-500 transition-colors shadow-sm"
            >
              {t.nav.contact}
            </a>
          </div>

          {/* Mobile: phone + hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="tel:4708843905"
              className="p-2 text-navy hover:text-royal transition-colors"
              aria-label="Call 470-884-3905"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-navy hover:text-royal transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="container-max px-4 py-4 flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map(({ key, href }) => (
              <a
                key={key}
                href={href}
                onClick={handleNavClick}
                className="px-4 py-3 text-base font-medium text-navy-400 hover:text-navy hover:bg-navy-50 rounded-lg transition-colors"
              >
                {t.nav[key]}
              </a>
            ))}
            <hr className="my-2 border-gray-100" />
            <div className="flex items-center justify-between px-4 py-2">
              <LanguageToggle />
              <a
                href="#contact"
                onClick={handleNavClick}
                className="px-5 py-2.5 bg-amber text-white text-sm font-semibold rounded-lg hover:bg-amber-500 transition-colors"
              >
                {t.nav.contact}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
