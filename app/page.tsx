"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import GAPPProgram from "@/components/sections/GAPPProgram";
import WhyTrustUs from "@/components/sections/WhyTrustUs";
import Testimonials from "@/components/sections/Testimonials";
import HowItWorks from "@/components/sections/HowItWorks";
import ContactForm from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <GAPPProgram />
        <WhyTrustUs />
        <Testimonials />
        <HowItWorks />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
