import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prestige 24 Home Care | Compassionate In-Home Care in Georgia",
  description:
    "Trusted in-home care services for children and adults in Georgia. Skilled nursing, private duty nursing, personal care assistance, GAPP pediatric program. Call 470-884-3905.",
  keywords: [
    "home care Georgia",
    "pediatric home care",
    "GAPP program",
    "skilled nursing",
    "private duty nursing",
    "personal care assistance",
    "in-home care",
    "Medicaid home care Georgia",
    "medically fragile children",
    "elder care Georgia",
  ],
  openGraph: {
    title: "Prestige 24 Home Care | Compassionate In-Home Care in Georgia",
    description:
      "Trusted in-home care services for children and adults. Skilled nursing, GAPP pediatric program, personal care, and lifestyle support.",
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
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeHealthCareService",
              name: "Prestige 24 Home Care",
              description:
                "Trusted in-home care services for children and adults in Georgia. Skilled nursing, private duty nursing, personal care assistance, and GAPP pediatric program.",
              telephone: "+1-470-884-3905",
              email: "admin@p24homecare.com",
              url: "https://p24homecare.com",
              areaServed: {
                "@type": "State",
                name: "Georgia",
              },
              serviceType: [
                "Skilled Nursing Care",
                "Private Duty Nursing",
                "Personal Care Assistance",
                "Lifestyle Support & Companion Care",
                "Georgia Pediatric Program (GAPP)",
              ],
              medicalSpecialty: [
                "Pediatric Care",
                "Geriatric Care",
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
