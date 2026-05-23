import type { Metadata } from "next";
import { DM_Sans, Lora } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prestige 24 Home Care | GAPP Pediatric Home Care in Georgia",
  description:
    "Specialized pediatric home care through Georgia's GAPP program. Skilled nursing, personal care, and respiratory support for medically fragile children. Medicaid-funded. Call 470-884-3905.",
  keywords: [
    "GAPP program Georgia",
    "pediatric home care",
    "Georgia Pediatric Program",
    "medically fragile children",
    "pediatric skilled nursing",
    "Medicaid pediatric care Georgia",
    "tracheostomy care children",
    "ventilator care pediatric",
    "pediatric private duty nursing",
    "GAPP Medicaid",
  ],
  openGraph: {
    title: "Prestige 24 Home Care | GAPP Pediatric Home Care in Georgia",
    description:
      "Specialized pediatric home care through Georgia's GAPP program. Skilled nursing, personal care, and respiratory support for medically fragile children.",
    type: "website",
    locale: "en_US",
    siteName: "Prestige 24 Home Care",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${lora.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeHealthCareService",
              name: "Prestige 24 Home Care",
              description:
                "Specialized pediatric home care through Georgia's GAPP program. Skilled nursing, personal care, and respiratory support for medically fragile children.",
              telephone: "+1-470-884-3905",
              email: "admin@p24homecare.com",
              url: "https://p24homecare.com",
              areaServed: {
                "@type": "State",
                name: "Georgia",
              },
              serviceType: [
                "Georgia Pediatric Program (GAPP)",
                "Pediatric Skilled Nursing",
                "Pediatric Private Duty Nursing",
                "Pediatric Personal Care",
                "Respiratory Care for Children",
              ],
              medicalSpecialty: [
                "Pediatric Care",
                "Home Health Care",
              ],
              availableChannel: {
                "@type": "ServiceChannel",
                servicePhone: {
                  "@type": "ContactPoint",
                  telephone: "+1-470-884-3905",
                  contactType: "customer service",
                  availableLanguage: ["English", "Spanish"],
                },
              },
            }),
          }}
        />
      </head>
      <body className="font-sans">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
