"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useInView } from "@/lib/useInView";
import {
  DollarSign,
  Award,
  FileText,
  Clock,
  Phone,
  ClipboardCheck,
  Home,
  Users,
  Activity,
  Stethoscope,
  Wind,
  MessageCircle,
  Check,
} from "lucide-react";
import Image from "next/image";

const highlightIcons = [DollarSign, Award, FileText, Clock];
const highlightKeys = ["noCost", "licensedNurses", "personalizedPlans", "noWaitlist"] as const;
const highlightColors = [
  "bg-amber/10 text-amber border-amber/20",
  "bg-royal/10 text-royal border-royal/20",
  "bg-sky/10 text-sky border-sky/20",
  "bg-orange/10 text-orange border-orange/20",
];

const stepIcons = [Phone, ClipboardCheck, Home, Users];
const stepKeys = ["step1", "step2", "step3", "step4"] as const;

const categoryIcons = [Activity, Stethoscope, Wind, MessageCircle];
const categoryKeys = ["dailyCare", "clinicalSupport", "respiratoryCare", "careCoordination"] as const;

export default function GAPPProgram() {
  const { t } = useLanguage();
  const { ref, isInView } = useInView();

  return (
    <section id="gapp" className="section-padding bg-gray-50">
      <div ref={ref} className={`container-max transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky/10 rounded-full text-sky text-sm font-semibold mb-4">
            GAPP
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy mb-4">
            {t.gapp.sectionTitle}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            {t.gapp.sectionSubtitle}
          </p>
        </div>

        {/* What is GAPP + Image */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-12 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              {t.gapp.whatIsGapp}
            </p>
          </div>
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/gapp-pediatric.png"
              alt="Caregiver smiling with a young child in a wheelchair"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Highlight badges */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {highlightKeys.map((key, idx) => {
            const Icon = highlightIcons[idx];
            const highlight = t.gapp.highlights[key];
            return (
              <div
                key={key}
                className={`rounded-xl border p-5 ${highlightColors[idx]} bg-white`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Icon className="w-6 h-6" />
                  <h3 className="font-bold text-navy text-sm">{highlight.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* GAPP Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-serif font-bold text-navy text-center mb-8">
            {t.gapp.servicesTitle}
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {categoryKeys.map((key, idx) => {
              const Icon = categoryIcons[idx];
              const category = t.gapp.serviceCategories[key];
              return (
                <div key={key} className="bg-white rounded-xl border border-gray-100 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-navy/5 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-royal" />
                    </div>
                    <h4 className="font-bold text-navy">{category.title}</h4>
                  </div>
                  <ul className="space-y-2.5">
                    {category.items.map((item: string, i: number) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <Check className="w-4 h-4 text-sky flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Getting Started Steps */}
        <div className="bg-navy rounded-2xl p-6 sm:p-10">
          <h3 className="text-2xl font-serif font-bold text-white text-center mb-2">
            {t.gapp.gettingStartedTitle}
          </h3>
          <p className="text-navy-200 text-center mb-10 max-w-xl mx-auto">
            {t.gapp.gettingStartedSubtitle}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stepKeys.map((key, idx) => {
              const Icon = stepIcons[idx];
              const step = t.gapp.steps[key];
              return (
                <div key={key} className="relative">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-amber rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {idx + 1}
                    </div>
                    <Icon className="w-5 h-5 text-sky" />
                  </div>
                  <h4 className="font-bold text-white mb-2">{step.title}</h4>
                  <p className="text-sm text-navy-200 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

          <p className="text-center text-sm text-sky mt-8 font-medium">
            {t.gapp.timelineNote}
          </p>
        </div>
      </div>
    </section>
  );
}
