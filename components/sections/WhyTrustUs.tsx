"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useInView } from "@/lib/useInView";
import {
  UserCheck,
  ShieldCheck,
  RefreshCw,
  MessageSquare,
  FileSearch,
} from "lucide-react";
import Image from "next/image";

const reasonIcons = [UserCheck, ShieldCheck, RefreshCw, MessageSquare, FileSearch];
const reasonKeys = [
  "personalized",
  "caregivers",
  "consistency",
  "communication",
  "paperwork",
] as const;

export default function WhyTrustUs() {
  const { t } = useLanguage();
  const { ref, isInView } = useInView();

  return (
    <section id="why-us" className="section-padding bg-white">
      <div ref={ref} className={`container-max transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/trust-consultation.png"
                alt="Healthcare professional with tablet consulting an elderly woman at home"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-sky/10 rounded-2xl -z-10" />
          </div>

          {/* Content side */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy mb-4">
              {t.whyUs.sectionTitle}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              {t.whyUs.sectionSubtitle}
            </p>

            <div className="space-y-5">
              {reasonKeys.map((key, idx) => {
                const Icon = reasonIcons[idx];
                const reason = t.whyUs.reasons[key];
                return (
                  <div key={key} className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-navy/5 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-royal" />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy text-sm mb-0.5">
                        {reason.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 p-4 bg-sky/5 rounded-xl border border-sky/10">
              <p className="text-sm text-gray-700 italic leading-relaxed">
                {t.whyUs.closing}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
