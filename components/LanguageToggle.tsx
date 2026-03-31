"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Globe } from "lucide-react";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-full border border-navy-200 hover:bg-navy-50 transition-colors"
      aria-label={`Switch to ${language === "en" ? "Spanish" : "English"}`}
    >
      <Globe className="w-4 h-4" />
      <span>{language === "en" ? "ES" : "EN"}</span>
    </button>
  );
}
