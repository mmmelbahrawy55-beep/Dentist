"use client";

import { Shield } from "lucide-react";
import ScrollReveal, { StaggerChildren, StaggerItem } from "@/components/ui/ScrollReveal";
import { SplitText } from "@/components/ui/TextReveal";
import { insurancePartners } from "@/lib/data";
import { useLang } from "@/components/ui/LanguageProvider";

export default function Insurance() {
  const { t } = useLang();
  return (
    <section className="section-padding bg-[#0F0F14] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#0F766E]/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] text-[#C9A96E] text-[12px] font-semibold mb-5 tracking-[2px] uppercase"><span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] animate-pulse" />{t.insurance.badge}</span>
            <SplitText text={t.insurance.title1} tag="h2" className="text-[clamp(2rem,4vw,3rem)] font-bold font-[family-name:var(--font-heading)] text-white leading-tight" />
            <SplitText text={t.insurance.title2} tag="h2" className="text-[clamp(2rem,4vw,3rem)] font-bold font-[family-name:var(--font-heading)] leading-tight bg-gradient-to-r from-[#C9A96E] via-[#E8D5A8] to-[#C9A96E] bg-clip-text text-transparent mt-1" delay={0.15} />
            <p className="text-[16px] text-white/50 mt-6 leading-relaxed max-w-2xl mx-auto">{t.insurance.description}</p>
          </div>
        </ScrollReveal>
        <StaggerChildren stagger={0.06}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-5">
            {insurancePartners.map((partner) => (
              <StaggerItem key={partner}>
                <div className="bg-white/[0.04] backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center justify-center gap-3 group cursor-pointer border border-white/[0.06] hover:border-[#C9A96E]/20 transition-all duration-500">
                  <div className="w-14 h-14 rounded-2xl bg-[#C9A96E]/10 flex items-center justify-center group-hover:bg-[#C9A96E]/[0.15] transition-all duration-500 group-hover:scale-110"><Shield className="w-6 h-6 text-[#C9A96E]" /></div>
                  <span className="text-[14px] font-semibold text-white/80 text-center">{partner}</span>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerChildren>
      </div>
    </section>
  );
}
