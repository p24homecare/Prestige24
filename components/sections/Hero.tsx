"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Phone, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy-500 to-royal">
      <div className="relative container-max section-padding !py-20 sm:!py-28 lg:!py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left">
            <p className="text-xs sm:text-sm uppercase tracking-widest text-sky/80 font-medium mb-6">
              Trusted GAPP Provider
            </p>

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
          </div>
        </div>
      </div>

    </section>
  );
}
