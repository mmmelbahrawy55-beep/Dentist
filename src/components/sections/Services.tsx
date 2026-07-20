"use client";

import { motion } from "framer-motion";
import ScrollReveal, { StaggerChildren, StaggerItem } from "@/components/ui/ScrollReveal";
import { SplitText } from "@/components/ui/TextReveal";
import { services } from "@/lib/data";
import { useLang } from "@/components/ui/LanguageProvider";

export default function Services() {
  const { t } = useLang();
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E]/20 to-transparent" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-20 md:mb-24">
            <span className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#C9A96E]/20 bg-[#C9A96E]/[0.05] text-[#C9A96E] text-[12px] font-semibold mb-6 tracking-[3px] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] animate-pulse" />
              {t.services.badge}
            </span>
            <SplitText
              text={t.services.title1}
              tag="h2"
              className="text-[clamp(2rem,4vw,3.5rem)] font-bold font-[family-name:var(--font-heading)] text-white leading-tight tracking-[-0.02em]"
            />
            <SplitText
              text={t.services.title2}
              tag="h2"
              className="text-[clamp(2rem,4vw,3.5rem)] font-bold font-[family-name:var(--font-heading)] leading-tight text-gradient-gold mt-1 tracking-[-0.02em]"
              delay={0.15}
            />
            <p className="text-[16px] text-[#888888] mt-8 leading-relaxed max-w-2xl mx-auto">
              {t.services.description}
            </p>
          </div>
        </ScrollReveal>

        <StaggerChildren stagger={0.08}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <StaggerItem key={service.title}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full glass rounded-3xl p-8 gold-border-glow relative overflow-hidden group cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-[#C9A96E]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    <div className="relative z-10">
                      <div className="w-16 h-16 rounded-2xl bg-[#C9A96E]/10 flex items-center justify-center mb-7 group-hover:bg-[#C9A96E]/15 transition-all duration-700 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#C9A96E]/10">
                        <Icon className="w-7 h-7 text-[#C9A96E]" />
                      </div>

                      <h3 className="font-bold font-[family-name:var(--font-heading)] text-white mb-3 text-[17px]">
                        {service.title}
                      </h3>
                      <p className="text-[13px] text-[#777] leading-relaxed">{service.description}</p>
                    </div>
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
