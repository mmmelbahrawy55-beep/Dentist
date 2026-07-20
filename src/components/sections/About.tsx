"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle, Award, Shield, Heart, Target, Eye } from "lucide-react";
import ScrollReveal, { StaggerChildren, StaggerItem } from "@/components/ui/ScrollReveal";
import TiltCard from "@/components/ui/TiltCard";
import { LineReveal, SplitText } from "@/components/ui/TextReveal";

const features = [
  { icon: Shield, title: "Advanced Technology", desc: "Latest dental equipment and digital diagnostics" },
  { icon: Heart, title: "Patient-First Care", desc: "Your comfort and health are our top priority" },
  { icon: Award, title: "Award-Winning Team", desc: "Recognized excellence in dental care" },
  { icon: Target, title: "Precision Results", desc: "Meticulous attention to every detail" },
];

const certifications = [
  "American Dental Association (ADA)",
  "International Congress of Oral Implantologists (ICOI)",
  "American Academy of Cosmetic Dentistry (AACD)",
  "Joint Commission Accreditation",
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-surface dark:bg-surface-dark relative overflow-hidden mesh-bg">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/[0.06] text-primary text-[13px] font-semibold mb-5 tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              About Us
            </span>
            <SplitText
              text="Where Excellence Meets"
              tag="h2"
              className="text-[clamp(2rem,4vw,3.2rem)] font-bold font-[family-name:var(--font-heading)] text-text-primary dark:text-white leading-tight"
            />
            <SplitText
              text="Compassionate Care"
              tag="h2"
              className="text-[clamp(2rem,4vw,3.2rem)] font-bold font-[family-name:var(--font-heading)] leading-tight text-gradient mt-1"
              delay={0.2}
            />
            <p className="text-[16px] text-text-secondary dark:text-slate-400 mt-6 leading-relaxed max-w-2xl mx-auto">
              For over two decades, Elite Dental Clinic has been the trusted destination for families seeking
              exceptional dental care in a luxurious, welcoming environment.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-20">
          <ScrollReveal direction="left" distance={50}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/15 to-secondary/15 rounded-[2.5rem] blur-2xl" />
              <div className="relative rounded-[2rem] overflow-hidden premium-shadow-xl">
                <div className="aspect-video bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/5 flex items-center justify-center">
                  <div className="text-center">
                    <Eye className="w-20 h-20 text-primary/20 mx-auto mb-4" />
                    <p className="text-text-secondary dark:text-slate-400 text-sm font-medium">Clinic Interior Image</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal delay={0.1}>
              <h3 className="text-[clamp(1.5rem,3vw,2.2rem)] font-bold font-[family-name:var(--font-heading)] text-text-primary dark:text-white mb-5">
                Our Story
              </h3>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-text-secondary dark:text-slate-400 leading-relaxed mb-5 text-[15px]">
                Founded in 2003, Elite Dental Clinic was born from a simple yet powerful vision: to redefine dental
                care by combining clinical excellence with an unparalleled patient experience.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-text-secondary dark:text-slate-400 leading-relaxed mb-8 text-[15px]">
                Our vision is to be the global benchmark for dental excellence. Our mission is to transform lives
                through healthy, beautiful smiles — delivered with compassion, precision, and state-of-the-art technology.
              </p>
            </ScrollReveal>

            <StaggerChildren stagger={0.12} delay={0.3}>
              {[
                { icon: Target, title: "Our Vision", text: "To be the global benchmark for dental excellence and patient care." },
                { icon: Heart, title: "Our Mission", text: "Transforming lives through healthy, beautiful smiles with compassion and precision." },
              ].map((item) => (
                <StaggerItem key={item.title}>
                  <div className="flex gap-4 p-5 rounded-2xl bg-primary/[0.03] border border-primary/[0.06] mb-4 hover:bg-primary/[0.06] transition-colors duration-500">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold font-[family-name:var(--font-heading)] text-text-primary dark:text-white text-[15px]">
                        {item.title}
                      </h4>
                      <p className="text-text-secondary dark:text-slate-400 text-[14px] mt-1 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>

        <StaggerChildren stagger={0.1}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <TiltCard glareColor="rgba(14,165,233,0.06)" maxTilt={8} scale={1.03}>
                  <div className="h-full glass rounded-3xl p-7 text-center hover:shadow-lg dark:hover:shadow-primary/[0.05] transition-all duration-500 group">
                    <div className="w-14 h-14 rounded-2xl bg-primary/[0.06] flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/10 transition-colors duration-500 group-hover:scale-110 transition-transform">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold font-[family-name:var(--font-heading)] text-text-primary dark:text-white mb-2 text-[16px]">
                      {feature.title}
                    </h3>
                    <p className="text-[13px] text-text-secondary dark:text-slate-400 leading-relaxed">{feature.desc}</p>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </div>
        </StaggerChildren>

        <ScrollReveal>
          <div className="glass rounded-3xl p-8 md:p-10">
            <h3 className="text-[20px] font-bold font-[family-name:var(--font-heading)] text-text-primary dark:text-white mb-6 text-center">
              Our Certifications & Accreditations
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {certifications.map((cert) => (
                <div key={cert} className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/[0.03] transition-colors duration-300">
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                  <span className="text-[14px] font-medium text-text-primary dark:text-slate-300">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
