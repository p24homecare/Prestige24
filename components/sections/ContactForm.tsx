"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { Phone, Mail, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      contactMethod: "Phone",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <section id="contact" className="section-padding bg-navy">
        <div className="container-max">
          <div className="max-w-2xl mx-auto text-center">
            <CheckCircle2 className="w-16 h-16 text-sky mx-auto mb-6" />
            <h2 className="text-3xl font-serif font-bold text-white mb-4">
              {t.contact.success}
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <a
                href="tel:4708843905"
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber text-white font-semibold rounded-lg hover:bg-amber-500 transition-colors"
              >
                <Phone className="w-4 h-4" />
                {t.contact.callNow}
              </a>
              <button
                onClick={() => setStatus("idle")}
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
              >
                Submit Another Request
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding bg-navy">
      <div className="container-max">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Left: Info */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
              {t.contact.sectionTitle}
            </h2>
            <p className="text-navy-200 leading-relaxed mb-8">
              {t.contact.sectionSubtitle}
            </p>

            <div className="space-y-4 mb-8">
              <p className="text-sm text-navy-300 font-medium">
                {t.contact.directContact}
              </p>
              <a
                href="tel:4708843905"
                className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="w-10 h-10 bg-sky/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-sky" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">470-884-3905</p>
                  <p className="text-navy-300 text-xs">Available for consultations</p>
                </div>
              </a>
              <a
                href="mailto:admin@p24homecare.com"
                className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="w-10 h-10 bg-amber/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-amber" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">admin@p24homecare.com</p>
                  <p className="text-navy-300 text-xs">{t.contact.emailUs}</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 space-y-5"
              noValidate
            >
              {status === "error" && (
                <div className="flex items-center gap-2 p-3 bg-red-50 text-red-700 rounded-lg text-sm">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  {t.contact.error}
                </div>
              )}

              {/* Row 1: Name + Phone */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-navy mb-1.5">
                    {t.contact.fields.fullName} <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    {...register("fullName")}
                    placeholder={t.contact.placeholders.fullName}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-sky/50 focus:border-sky outline-none transition-all"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-red-600">{errors.fullName.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-navy mb-1.5">
                    {t.contact.fields.phone} <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    placeholder={t.contact.placeholders.phone}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-sky/50 focus:border-sky outline-none transition-all"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              {/* Row 2: Email + Age */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy mb-1.5">
                    {t.contact.fields.email} <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder={t.contact.placeholders.email}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-sky/50 focus:border-sky outline-none transition-all"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="patientAge" className="block text-sm font-medium text-navy mb-1.5">
                    {t.contact.fields.patientAge} <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="patientAge"
                    type="number"
                    min="0"
                    max="150"
                    {...register("patientAge")}
                    placeholder={t.contact.placeholders.patientAge}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-sky/50 focus:border-sky outline-none transition-all"
                  />
                  {errors.patientAge && (
                    <p className="mt-1 text-xs text-red-600">{errors.patientAge.message}</p>
                  )}
                </div>
              </div>

              {/* Row 3: Relationship + Service */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="relationship" className="block text-sm font-medium text-navy mb-1.5">
                    {t.contact.fields.relationship} <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="relationship"
                    {...register("relationship")}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-sky/50 focus:border-sky outline-none transition-all bg-white"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      {t.contact.selectPlaceholder}
                    </option>
                    {t.contact.options.relationship.map((opt: string) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.relationship && (
                    <p className="mt-1 text-xs text-red-600">{errors.relationship.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="serviceNeeded" className="block text-sm font-medium text-navy mb-1.5">
                    {t.contact.fields.serviceNeeded} <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="serviceNeeded"
                    {...register("serviceNeeded")}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-sky/50 focus:border-sky outline-none transition-all bg-white"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      {t.contact.selectPlaceholder}
                    </option>
                    {t.contact.options.service.map((opt: string) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.serviceNeeded && (
                    <p className="mt-1 text-xs text-red-600">{errors.serviceNeeded.message}</p>
                  )}
                </div>
              </div>

              {/* Row 4: Insurance */}
              <div>
                <label htmlFor="insurance" className="block text-sm font-medium text-navy mb-1.5">
                  {t.contact.fields.insurance} <span className="text-red-500">*</span>
                </label>
                <select
                  id="insurance"
                  {...register("insurance")}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-sky/50 focus:border-sky outline-none transition-all bg-white"
                  defaultValue=""
                >
                  <option value="" disabled>
                    {t.contact.selectPlaceholder}
                  </option>
                  {t.contact.options.insurance.map((opt: string) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                {errors.insurance && (
                  <p className="mt-1 text-xs text-red-600">{errors.insurance.message}</p>
                )}
              </div>

              {/* Row 5: Contact Method */}
              <div>
                <label className="block text-sm font-medium text-navy mb-2">
                  {t.contact.fields.contactMethod} <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-wrap gap-4">
                  {t.contact.options.contactMethod.map((method: string, idx: number) => {
                    const values = ["Phone", "Email", "Either"] as const;
                    return (
                      <label
                        key={method}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="radio"
                          value={values[idx]}
                          {...register("contactMethod")}
                          className="w-4 h-4 text-sky focus:ring-sky border-gray-300"
                        />
                        <span className="text-sm text-gray-700">{method}</span>
                      </label>
                    );
                  })}
                </div>
                {errors.contactMethod && (
                  <p className="mt-1 text-xs text-red-600">{errors.contactMethod.message}</p>
                )}
              </div>

              {/* Row 6: Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-navy mb-1.5">
                  {t.contact.fields.message}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  {...register("message")}
                  placeholder={t.contact.placeholders.message}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-sky/50 focus:border-sky outline-none transition-all resize-none"
                />
              </div>

              {/* Consent */}
              <div className="flex items-start gap-3">
                <input
                  id="consent"
                  type="checkbox"
                  {...register("consent")}
                  className="mt-1 w-4 h-4 text-sky focus:ring-sky border-gray-300 rounded"
                />
                <label htmlFor="consent" className="text-xs text-gray-600 leading-relaxed">
                  {t.contact.consent}
                </label>
              </div>
              {errors.consent && (
                <p className="text-xs text-red-600">{errors.consent.message}</p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full py-3.5 bg-amber text-white font-semibold rounded-lg hover:bg-amber-500 transition-colors shadow-lg shadow-amber/25 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    {t.contact.submitting}
                  </>
                ) : (
                  t.contact.submit
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
