"use client";

import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import AwardsMarquee from "@/components/sections/AwardsMarquee";
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
import CursorRipple from "@/components/ui/CursorRipple";
import PageLoader from "@/components/ui/PageLoader";
import NoiseOverlay from "@/components/ui/NoiseOverlay";
import ScrollProgress from "@/components/ui/ScrollProgress";
import MorphingBackground from "@/components/ui/MorphingBackground";
import SectionDivider from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <>
      <PageLoader />
      <CursorRipple />
      <NoiseOverlay />
      <MorphingBackground />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider variant="gradient" />
        <Stats />
        <SectionDivider variant="gradient" />
        <AwardsMarquee />
        <SectionDivider />
        <Services />
        <SectionDivider />
        <Doctors />
        <SectionDivider />
        <Gallery />
        <SectionDivider />
        <Testimonials />
        <SectionDivider />
        <Appointment />
        <SectionDivider />
        <Insurance />
        <SectionDivider />
        <FAQ />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}
