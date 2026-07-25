"use client";

import dynamic from "next/dynamic";

const Gallery = dynamic(() => import("@/components/sections/Gallery"), { ssr: false, loading: () => <div className="min-h-[60vh]" /> });
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"), { ssr: false, loading: () => <div className="min-h-[50vh]" /> });
const Appointment = dynamic(() => import("@/components/sections/Appointment"), { ssr: false, loading: () => <div className="min-h-[60vh]" /> });
const Insurance = dynamic(() => import("@/components/sections/Insurance"), { ssr: false, loading: () => <div className="min-h-[40vh]" /> });
const FAQ = dynamic(() => import("@/components/sections/FAQ"), { ssr: false, loading: () => <div className="min-h-[50vh]" /> });
const Contact = dynamic(() => import("@/components/sections/Contact"), { ssr: false, loading: () => <div className="min-h-[50vh]" /> });
const CursorRipple = dynamic(() => import("@/components/ui/CursorRipple"), { ssr: false });
const PageLoader = dynamic(() => import("@/components/ui/PageLoader"), { ssr: false });
const NoiseOverlay = dynamic(() => import("@/components/ui/NoiseOverlay"), { ssr: false });
const ScrollProgress = dynamic(() => import("@/components/ui/ScrollProgress"), { ssr: false });
const MorphingBackground = dynamic(() => import("@/components/ui/MorphingBackground"), { ssr: false });

import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import AwardsMarquee from "@/components/sections/AwardsMarquee";
import Services from "@/components/sections/Services";
import Doctors from "@/components/sections/Doctors";
import Footer from "@/components/sections/Footer";
import { WhatsAppButton, ScrollToTop } from "@/components/sections/FloatingButtons";
import SectionDivider from "@/components/ui/SectionDivider";

export default function ClientPage() {
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
