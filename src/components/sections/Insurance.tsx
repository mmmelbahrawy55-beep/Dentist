"use client";

import { Shield } from "lucide-react";
import ScrollReveal, { StaggerChildren, StaggerItem } from "@/components/ui/ScrollReveal";
import { SplitText } from "@/components/ui/TextReveal";
import { insurancePartners } from "@/lib/data";
import { useLang } from "@/components/ui/LanguageProvider";

export default function Insurance() {
  const { t } = useLang();
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E]/20 to-transparent" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#C9A96E]/20 bg-[#C9A96E]/[0.05] text-[#C9A96E] text-[12px] font-semibold mb-6 tracking-[3px] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] animate-pulse" />
              {t.insurance.badge}
            </span>
            <SplitText text={t.insurance.title1} tag="h2" className="text-[clamp(2rem,4vw,3.5rem)] font-bold font-[family-name:var(--font-heading)] text-white leading-tight tracking-[-0.02em]" />
            <SplitText text={t.insurance.title2} tag="h2" className="text-[clamp(2rem,4vw,3.5rem)] font-bold font-[family-name:var(--font-heading)] leading-tight text-gradient-gold mt-1 tracking-[-0.02em]" delay={0.15} />
            <p className="text-[16px] text-[#888888] mt-8 leading-relaxed max-w-2xl mx-auto">
              {t.insurance.description}
            </p>
          </div>
        </ScrollReveal>

        <StaggerChildren stagger={0.06}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-5">
            {insurancePartners.map((partner) => (
              <StaggerItem key={partner}>
                <div className="glass rounded-2xl p-6 md:p-7 flex flex-col items-center justify-center gap-3 group cursor-pointer gold-border-glow hover:bg-[#C9A96E]/[0.03] transition-all duration-500">
                  <div className="w-14 h-14 rounded-2xl bg-[#C9A96E]/10 flex items-center justify-center group-hover:bg-[#C9A96E]/15 transition-all duration-500 group-hover:scale-110">
                    <Shield className="w-6 h-6 text-[#C9A96E]" />
                  </div>
                  <span className="text-[14px] font-semibold text-white text-center">
                    {partner}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerChildren>
      </div>
    </section>
  );
}
