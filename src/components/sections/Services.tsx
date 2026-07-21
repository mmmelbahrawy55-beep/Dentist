"use client";

import { motion } from "framer-motion";
import ScrollReveal, { StaggerChildren, StaggerItem } from "@/components/ui/ScrollReveal";
import { SplitText } from "@/components/ui/TextReveal";
import { services } from "@/lib/data";
import { useLang } from "@/components/ui/LanguageProvider";

export default function Services() {
  const { t } = useLang();
  return (
    <section id="services" className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A3C6E]/[0.05] text-[#1A3C6E] text-[12px] font-semibold mb-5 tracking-[2px] uppercase"><span className="w-1.5 h-1.5 rounded-full bg-[#1A3C6E] animate-pulse" />{t.services.badge}</span>
            <SplitText text={t.services.title1} tag="h2" className="text-[clamp(2rem,4vw,3rem)] font-bold font-[family-name:var(--font-heading)] text-[#1A1A2E] leading-tight" />
            <SplitText text={t.services.title2} tag="h2" className="text-[clamp(2rem,4vw,3rem)] font-bold font-[family-name:var(--font-heading)] leading-tight text-gradient mt-1" delay={0.15} />
            <p className="text-[16px] text-[#4A5568] mt-6 leading-relaxed max-w-2xl mx-auto">{t.services.description}</p>
          </div>
        </ScrollReveal>
        <StaggerChildren stagger={0.08}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <StaggerItem key={service.title}>
                  <motion.div whileHover={{ y: -6, scale: 1.02 }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} className="h-full bg-white rounded-2xl p-7 premium-shadow hover:premium-shadow-lg transition-all duration-500 group border border-[#E2E8F0]/50 cursor-pointer">
                    <div className="w-14 h-14 rounded-2xl bg-[#1A3C6E]/[0.06] flex items-center justify-center mb-5 group-hover:bg-[#1A3C6E]/[0.1] transition-all duration-500 group-hover:scale-110"><Icon className="w-6 h-6 text-[#1A3C6E]" /></div>
                    <h3 className="font-bold font-[family-name:var(--font-heading)] text-[#1A1A2E] mb-2 text-[16px]">{service.title}</h3>
                    <p className="text-[13px] text-[#4A5568] leading-relaxed">{service.description}</p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </div>
        </StaggerChildren>
      </div>
    </section>
  );
}
