"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import ScrollReveal, { StaggerChildren, StaggerItem } from "@/components/ui/ScrollReveal";
import TiltCard from "@/components/ui/TiltCard";
import { SplitText } from "@/components/ui/TextReveal";
import { insurancePartners } from "@/lib/data";

export default function Insurance() {
  return (
    <section className="section-padding bg-white dark:bg-[#080d1a] relative overflow-hidden mesh-bg">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/[0.06] text-primary text-[13px] font-semibold mb-5 tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Insurance
            </span>
            <SplitText text="Trusted Insurance" tag="h2" className="text-[clamp(2rem,4vw,3.2rem)] font-bold font-[family-name:var(--font-heading)] text-text-primary dark:text-white leading-tight" />
            <SplitText text="Partners" tag="h2" className="text-[clamp(2rem,4vw,3.2rem)] font-bold font-[family-name:var(--font-heading)] leading-tight text-gradient mt-1" delay={0.15} />
            <p className="text-[16px] text-text-secondary dark:text-slate-400 mt-6 leading-relaxed max-w-2xl mx-auto">
              We work with most major insurance providers to make quality dental care accessible.
            </p>
          </div>
        </ScrollReveal>

        <StaggerChildren stagger={0.06}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-5">
            {insurancePartners.map((partner) => (
              <StaggerItem key={partner}>
                <TiltCard glareColor="rgba(14,165,233,0.06)" maxTilt={6} scale={1.03}>
                  <div className="glass rounded-2xl p-6 md:p-7 flex flex-col items-center justify-center gap-3 group cursor-pointer hover:shadow-lg transition-all duration-500">
                    <div className="w-14 h-14 rounded-2xl bg-primary/[0.06] flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-500 group-hover:scale-110 transition-transform">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-[14px] font-semibold text-text-primary dark:text-white text-center">
                      {partner}
                    </span>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </div>
        </StaggerChildren>
      </div>
    </section>
  );
}
