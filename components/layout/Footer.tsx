"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Phone, Mail, Globe, MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-navy text-white">
      <div className="container-max section-padding !pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-8 text-center">
          {/* Brand */}
          <div>
            <Image
              src="/logo.png"
              alt="Prestige 24 Home Care"
              width={400}
              height={116}
              className="h-10 w-auto brightness-0 invert mb-4 mx-auto"
            />
            <p className="text-lg font-serif text-amber mb-3">{t.footer.tagline}</p>
            <p className="text-navy-200 text-sm leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-4 text-amber">{t.footer.quickLinks}</h3>
            <ul className="space-y-2.5">
              <li>
                <a href="#gapp" className="text-sm text-navy-200 hover:text-white transition-colors">
                  {t.nav.gapp}
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-sm text-navy-200 hover:text-white transition-colors">
                  {t.nav.whyUs}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-navy-200 hover:text-white transition-colors">
                  {t.nav.contact}
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-sm text-navy-200 hover:text-white transition-colors">
                  {t.footer.privacyPolicy}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-semibold mb-4 text-amber">{t.footer.contactInfo}</h3>
            <ul className="space-y-3 inline-block text-left">
              <li>
                <a href="tel:4708843905" className="flex items-center gap-2.5 text-sm text-navy-200 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-sky flex-shrink-0" />
                  470-884-3905
                </a>
              </li>
              <li>
                <a href="mailto:admin@p24homecare.com" className="flex items-center gap-2.5 text-sm text-navy-200 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-sky flex-shrink-0" />
                  admin@p24homecare.com
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2.5 text-sm text-navy-200">
                  <Globe className="w-4 h-4 text-sky flex-shrink-0" />
                  p24homecare.com
                </span>
              </li>
              <li>
                <span className="flex items-start gap-2.5 text-sm text-navy-200">
                  <MapPin className="w-4 h-4 text-sky flex-shrink-0 mt-0.5" />
                  Serving families across Georgia
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-navy-600 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-navy-300">{t.footer.copyright}</p>
          <div className="flex items-center gap-4">
            <a href="/privacy" className="text-xs text-navy-300 hover:text-white transition-colors">
              {t.footer.privacyPolicy}
            </a>
            <a href="/privacy#hipaa" className="text-xs text-navy-300 hover:text-white transition-colors">
              {t.footer.hipaaNotice}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
