"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import ScrollReveal, { StaggerChildren, StaggerItem } from "@/components/ui/ScrollReveal";
import { SplitText } from "@/components/ui/TextReveal";
import { faqs } from "@/lib/data";
import { useLang } from "@/components/ui/LanguageProvider";

export default function FAQ() {
  const { t } = useLang();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E]/20 to-transparent" />

      <div className="max-w-4xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#C9A96E]/20 bg-[#C9A96E]/[0.05] text-[#C9A96E] text-[12px] font-semibold mb-6 tracking-[3px] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] animate-pulse" />
              {t.faq.badge}
            </span>
            <SplitText text={t.faq.title1} tag="h2" className="text-[clamp(2rem,4vw,3.5rem)] font-bold font-[family-name:var(--font-heading)] text-white leading-tight tracking-[-0.02em]" />
            <SplitText text={t.faq.title2} tag="h2" className="text-[clamp(2rem,4vw,3.5rem)] font-bold font-[family-name:var(--font-heading)] leading-tight text-gradient-gold mt-1 tracking-[-0.02em]" delay={0.15} />
          </div>
        </ScrollReveal>

        <StaggerChildren stagger={0.06}>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <StaggerItem key={i}>
                <div className="glass rounded-2xl overflow-hidden gold-border-glow">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left group"
                  >
                    <span className="font-semibold font-[family-name:var(--font-heading)] text-white pr-4 text-[15px] md:text-[16px] group-hover:text-[#C9A96E] transition-colors duration-300">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openIndex === i ? 180 : 0, scale: openIndex === i ? 1.1 : 1 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
                        openIndex === i ? "bg-[#C9A96E] text-[#0A0A0A]" : "bg-[#C9A96E]/10 text-[#C9A96E]"
                      }`}
                    >
                      {openIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-5 md:px-6 pb-5 md:pb-6">
                          <div className="pt-3 border-t border-[#C9A96E]/10">
                            <p className="text-[14px] text-[#888] leading-relaxed mt-4">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerChildren>
      </div>
    </section>
  );
}
