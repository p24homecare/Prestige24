"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useInView } from "@/lib/useInView";
import {
  Stethoscope,
  HeartPulse,
  HandHeart,
  Home,
  Check,
} from "lucide-react";
import Image from "next/image";

const serviceIcons = [Stethoscope, HeartPulse, HandHeart, Home];
const serviceKeys = [
  "skilledNursing",
  "privateDuty",
  "personalCare",
  "lifestyleSupport",
] as const;
const iconColors = [
  "bg-royal/10 text-royal",
  "bg-sky/10 text-sky",
  "bg-amber/10 text-amber",
  "bg-orange/10 text-orange",
];

export default function Services() {
  const { t } = useLanguage();
  const { ref, isInView } = useInView();

  return (
    <section id="services" className="section-padding bg-white">
      <div ref={ref} className={`container-max transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy mb-4">
            {t.services.sectionTitle}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            {t.services.sectionSubtitle}
          </p>
        </div>

        {/* Feature image */}
        <div className="relative w-full max-w-5xl mx-auto aspect-[16/7] rounded-2xl overflow-hidden shadow-lg mb-14">
          <Image
            src="/images/services-homecare.png"
            alt="Caregiver reviewing care plan with an elderly woman in a comfortable home setting"
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1024px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
        </div>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {serviceKeys.map((key, idx) => {
            const Icon = serviceIcons[idx];
            const service = t.services[key];
            return (
              <div
                key={key}
                className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-royal/20 transition-all duration-300 p-6 flex flex-col"
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${iconColors[idx]} group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-1">
                  {service.title}
                </h3>
                {"subtitle" in service && service.subtitle && (
                  <p className="text-xs font-medium text-sky mb-3">
                    {service.subtitle}
                  </p>
                )}
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mt-auto">
                  {service.items.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-sky flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {"note" in service && service.note && (
                  <p className="mt-4 text-xs text-royal font-medium italic">
                    {service.note}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
