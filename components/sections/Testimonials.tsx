"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useInView } from "@/lib/useInView";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const { t } = useLanguage();
  const { ref, isInView } = useInView();

  return (
    <section className="section-padding !py-14 sm:!py-16 lg:!py-20 bg-white">
      <div ref={ref} className={`container-max transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy mb-3">
            {t.testimonials.sectionTitle}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {t.testimonials.sectionSubtitle}
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {t.testimonials.reviews.map(
            (review: { name: string; role: string; text: string; rating: number }, idx: number) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 sm:p-8 flex flex-col"
              >
                <Quote className="w-8 h-8 text-sky/30 mb-4" />
                <p className="text-gray-700 leading-relaxed mb-6 flex-grow text-sm sm:text-base">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber text-amber"
                    />
                  ))}
                </div>
                <div>
                  <p className="font-bold text-navy text-sm">{review.name}</p>
                  <p className="text-xs text-gray-500">{review.role}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
