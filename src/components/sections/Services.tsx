"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ScrollReveal, { StaggerChildren, StaggerItem } from "@/components/ui/ScrollReveal";
import { SplitText } from "@/components/ui/TextReveal";
import TiltCard from "@/components/ui/TiltCard";
import MagneticButton from "@/components/ui/MagneticButton";
import { services } from "@/lib/data";
import { useLang } from "@/components/ui/LanguageProvider";

export default function Services() {
  const { t } = useLang();
  return (
    <section id="services" className="section-padding bg-[#F5F0EA] dark:bg-[#0F0F14] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#0F766E]/[0.03] dark:bg-[#0F766E]/[0.04] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#B08D4F]/[0.06] dark:bg-white/[0.06] text-[#B08D4F] dark:text-[#C9A96E] text-[12px] font-semibold mb-5 tracking-[2px] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B08D4F] dark:bg-[#C9A96E] animate-pulse" />
              {t.services.badge}
            </span>
            <SplitText text={t.services.title1} tag="h2" className="text-[clamp(2rem,4vw,3rem)] font-bold font-[family-name:var(--font-heading)] text-[#1A1A2E] dark:text-white leading-tight" />
            <SplitText text={t.services.title2} tag="h2" className="text-[clamp(2rem,4vw,3rem)] font-bold font-[family-name:var(--font-heading)] leading-tight bg-gradient-to-r from-[#B08D4F] via-[#C9A96E] to-[#B08D4F] dark:from-[#C9A96E] dark:via-[#E8D5A8] dark:to-[#C9A96E] bg-clip-text text-transparent mt-1" delay={0.15} />
            <p className="text-[16px] text-[#555] dark:text-white/50 mt-6 leading-relaxed max-w-2xl mx-auto">{t.services.description}</p>
          </div>
        </ScrollReveal>

        <StaggerChildren stagger={0.06}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isFeatured = index < 3;
              return (
                <StaggerItem key={service.title}>
                  <TiltCard
                    glareColor={isFeatured ? "rgba(201,169,110,0.08)" : "rgba(15,118,110,0.06)"}
                    maxTilt={8}
                    scale={1.02}
                    className="h-full"
                  >
                    <div
                      className={`h-full relative rounded-2xl p-7 transition-all duration-500 group cursor-pointer overflow-hidden ${
                        isFeatured
                          ? "bg-gradient-to-br from-white/[0.9] to-white/[0.6] dark:from-white/[0.08] dark:to-white/[0.02] border border-[#B08D4F]/20 dark:border-[#C9A96E]/20"
                          : "bg-white/[0.7] dark:bg-white/[0.04] border border-[#B08D4F]/[0.08] dark:border-white/[0.06]"
                      }`}
                    >
                      {/* Hover glow */}
                      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                        isFeatured
                          ? "bg-gradient-to-br from-[#B08D4F]/[0.06] dark:from-[#C9A96E]/[0.08] to-transparent"
                          : "bg-gradient-to-br from-[#0F766E]/[0.06] dark:from-[#0F766E]/[0.08] to-transparent"
                      }`} />

                      <div className="relative z-10">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110 ${
                          isFeatured
                            ? "bg-gradient-to-br from-[#B08D4F]/15 dark:from-[#C9A96E]/20 to-[#B08D4F]/5 dark:to-[#C9A96E]/5"
                            : "bg-[#0F766E]/[0.08] dark:bg-[#0F766E]/[0.1]"
                        }`}>
                          <Icon className={`w-6 h-6 ${isFeatured ? "text-[#B08D4F] dark:text-[#C9A96E]" : "text-[#0F766E]"}`} />
                        </div>
                        <h3 className="font-bold font-[family-name:var(--font-heading)] text-[#1A1A2E] dark:text-white mb-2 text-[16px]">
                          {service.title}
                        </h3>
                        <p className="text-[13px] text-[#555] dark:text-white/40 leading-relaxed mb-5">
                          {service.description}
                        </p>
                        <div className="flex items-center gap-2 text-[12px] font-semibold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                          <span className={isFeatured ? "text-[#B08D4F] dark:text-[#C9A96E]" : "text-[#0F766E]"}>{t.services.learnMore}</span>
                          <ArrowRight className={`w-3.5 h-3.5 ${isFeatured ? "text-[#B08D4F] dark:text-[#C9A96E]" : "text-[#0F766E]"}`} />
                        </div>
                      </div>

                      {isFeatured && (
                        <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-[#B08D4F]/[0.08] dark:bg-[#C9A96E]/10 border border-[#B08D4F]/15 dark:border-[#C9A96E]/20">
                          <span className="text-[10px] font-bold text-[#B08D4F] dark:text-[#C9A96E] tracking-wider uppercase">Popular</span>
                        </div>
                      )}
                    </div>
                  </TiltCard>
                </StaggerItem>
              );
            })}
          </div>
        </StaggerChildren>

        <ScrollReveal delay={0.3}>
          <div className="mt-16 text-center">
            <MagneticButton>
              <a href="#appointment" className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#C9A96E] to-[#E8D5A8] text-[#0A0A0F] font-bold font-[family-name:var(--font-heading)] py-4 px-8 rounded-full text-[14px] transition-all duration-500 hover:shadow-[0_0_40px_rgba(201,169,110,0.3)] hover:scale-105">
                {t.nav.bookAppointment}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
