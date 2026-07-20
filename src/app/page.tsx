"use client";

import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Doctors from "@/components/sections/Doctors";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Appointment from "@/components/sections/Appointment";
import Insurance from "@/components/sections/Insurance";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import { WhatsAppButton, ScrollToTop } from "@/components/sections/FloatingButtons";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Doctors />
        <Gallery />
        <Testimonials />
        <Appointment />
        <Insurance />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}
