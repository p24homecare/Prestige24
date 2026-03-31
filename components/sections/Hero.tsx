"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Phone, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy-500 to-royal">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-sky rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber rounded-full blur-3xl" />
      </div>

      <div className="relative container-max section-padding !py-20 sm:!py-28 lg:!py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sky text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-sky rounded-full animate-pulse" />
              {t.hero.tagline}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-white leading-tight mb-6 text-balance">
              {t.hero.headline}
            </h1>

            <p className="text-base sm:text-lg text-navy-200 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              {t.hero.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-amber text-white font-semibold rounded-lg hover:bg-amber-500 transition-all shadow-lg shadow-amber/25 hover:shadow-amber/40"
              >
                {t.hero.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:4708843905"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all"
              >
                <Phone className="w-4 h-4" />
                {t.hero.ctaCall}
              </a>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-pediatric.png"
                alt="Nurse in blue scrubs examining a young child with a stethoscope during a home visit"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-sky-50 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-sky" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">24/7 Support</p>
                <p className="text-sm font-bold text-navy">470-884-3905</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 60V20C240 0 480 40 720 30C960 20 1200 0 1440 20V60H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
