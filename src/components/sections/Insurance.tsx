"use client";

import { Shield } from "lucide-react";
import ScrollReveal, { StaggerChildren, StaggerItem } from "@/components/ui/ScrollReveal";
import { SplitText } from "@/components/ui/TextReveal";
import { insurancePartners } from "@/lib/data";
import { useLang } from "@/components/ui/LanguageProvider";

export default function Insurance() {
  const { t } = useLang();
  return (
    <section className="section-padding bg-[#FDFBF7] dark:bg-[#0F0F14] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#0F766E]/[0.03] dark:bg-[#0F766E]/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#B08D4F]/[0.06] dark:bg-white/[0.06] text-[#B08D4F] dark:text-[#C9A96E] text-[12px] font-semibold mb-5 tracking-[2px] uppercase"><span className="w-1.5 h-1.5 rounded-full bg-[#B08D4F] dark:bg-[#C9A96E] animate-pulse" />{t.insurance.badge}</span>
            <SplitText text={t.insurance.title1} tag="h2" className="text-[clamp(2rem,4vw,3rem)] font-bold font-[family-name:var(--font-heading)] text-[#1A1A2E] dark:text-white leading-tight" />
            <SplitText text={t.insurance.title2} tag="h2" className="text-[clamp(2rem,4vw,3rem)] font-bold font-[family-name:var(--font-heading)] leading-tight bg-gradient-to-r from-[#B08D4F] via-[#C9A96E] to-[#B08D4F] dark:from-[#C9A96E] dark:via-[#E8D5A8] dark:to-[#C9A96E] bg-clip-text text-transparent mt-1" delay={0.15} />
            <p className="text-[16px] text-[#555] dark:text-white/50 mt-6 leading-relaxed max-w-2xl mx-auto">{t.insurance.description}</p>
          </div>
        </ScrollReveal>
        <StaggerChildren stagger={0.06}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-5">
            {insurancePartners.map((partner) => (
              <StaggerItem key={partner}>
                <div className="bg-white/80 dark:bg-white/[0.04] backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center justify-center gap-3 group cursor-pointer hover:bg-white dark:hover:bg-white/[0.07] transition-all duration-500 border border-[#B08D4F]/[0.08] dark:border-white/[0.06]">
                  <div className="w-14 h-14 rounded-2xl bg-[#0F766E]/[0.06] dark:bg-[#0F766E]/[0.1] flex items-center justify-center group-hover:bg-[#0F766E]/[0.1] dark:group-hover:bg-[#0F766E]/[0.15] transition-all duration-500 group-hover:scale-110"><Shield className="w-6 h-6 text-[#0F766E]" /></div>
                  <span className="text-[14px] font-semibold text-[#1A1A2E] dark:text-white/80 text-center">{partner}</span>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerChildren>
      </div>
    </section>
  );
}
