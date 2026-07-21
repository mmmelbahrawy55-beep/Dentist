"use client";

import { Shield } from "lucide-react";
import ScrollReveal, { StaggerChildren, StaggerItem } from "@/components/ui/ScrollReveal";
import { SplitText } from "@/components/ui/TextReveal";
import { insurancePartners } from "@/lib/data";
import { useLang } from "@/components/ui/LanguageProvider";

export default function Insurance() {
  const { t } = useLang();
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A3C6E]/[0.05] text-[#1A3C6E] text-[12px] font-semibold mb-5 tracking-[2px] uppercase"><span className="w-1.5 h-1.5 rounded-full bg-[#1A3C6E] animate-pulse" />{t.insurance.badge}</span>
            <SplitText text={t.insurance.title1} tag="h2" className="text-[clamp(2rem,4vw,3rem)] font-bold font-[family-name:var(--font-heading)] text-[#1A1A2E] leading-tight" />
            <SplitText text={t.insurance.title2} tag="h2" className="text-[clamp(2rem,4vw,3rem)] font-bold font-[family-name:var(--font-heading)] leading-tight text-gradient mt-1" delay={0.15} />
            <p className="text-[16px] text-[#4A5568] mt-6 leading-relaxed max-w-2xl mx-auto">{t.insurance.description}</p>
          </div>
        </ScrollReveal>
        <StaggerChildren stagger={0.06}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-5">
            {insurancePartners.map((partner) => (
              <StaggerItem key={partner}>
                <div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center gap-3 group cursor-pointer premium-shadow hover:premium-shadow-lg transition-all duration-500 border border-[#E2E8F0]/50">
                  <div className="w-14 h-14 rounded-2xl bg-[#1A3C6E]/[0.06] flex items-center justify-center group-hover:bg-[#1A3C6E]/[0.1] transition-all duration-500 group-hover:scale-110"><Shield className="w-6 h-6 text-[#1A3C6E]" /></div>
                  <span className="text-[14px] font-semibold text-[#1A1A2E] text-center">{partner}</span>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerChildren>
      </div>
    </section>
  );
}
