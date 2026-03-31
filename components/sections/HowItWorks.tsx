"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useInView } from "@/lib/useInView";
import { Phone, Calendar, FileText, Heart } from "lucide-react";
import Image from "next/image";

const stepIcons = [Phone, Calendar, FileText, Heart];
const stepColors = [
  "bg-royal text-white",
  "bg-sky text-white",
  "bg-amber text-white",
  "bg-navy text-white",
];

export default function HowItWorks() {
  const { t } = useLanguage();
  const { ref, isInView } = useInView();

  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div ref={ref} className={`container-max transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy mb-4">
            {t.howItWorks.sectionTitle}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            {t.howItWorks.sectionSubtitle}
          </p>
        </div>

        {/* Feature image */}
        <div className="relative w-full max-w-3xl mx-auto aspect-[16/7] rounded-2xl overflow-hidden shadow-lg mb-14">
          <Image
            src="/images/personal-care.png"
            alt="Nurse helping an elderly woman walk with supportive care"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 768px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
        </div>

        {/* Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-14 left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-0.5 bg-gray-200" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {t.howItWorks.steps.map(
              (step: { title: string; description: string }, idx: number) => {
                const Icon = stepIcons[idx];
                return (
                  <div key={idx} className="text-center relative">
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 ${stepColors[idx]} shadow-lg relative z-10`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-xs font-bold text-gray-400 mb-1">
                      STEP {idx + 1}
                    </div>
                    <h3 className="font-bold text-navy mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
