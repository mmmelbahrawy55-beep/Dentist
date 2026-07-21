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
    <section id="faq" className="section-padding bg-[#F5F0EA] dark:bg-[#0A0A0F] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#C9A96E]/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#B08D4F]/[0.06] dark:bg-white/[0.06] text-[#B08D4F] dark:text-[#C9A96E] text-[12px] font-semibold mb-5 tracking-[2px] uppercase"><span className="w-1.5 h-1.5 rounded-full bg-[#B08D4F] dark:bg-[#C9A96E] animate-pulse" />{t.faq.badge}</span>
            <SplitText text={t.faq.title1} tag="h2" className="text-[clamp(2rem,4vw,3rem)] font-bold font-[family-name:var(--font-heading)] text-[#1A1A2E] dark:text-white leading-tight" />
            <SplitText text={t.faq.title2} tag="h2" className="text-[clamp(2rem,4vw,3rem)] font-bold font-[family-name:var(--font-heading)] leading-tight bg-gradient-to-r from-[#B08D4F] via-[#C9A96E] to-[#B08D4F] dark:from-[#C9A96E] dark:via-[#E8D5A8] dark:to-[#C9A96E] bg-clip-text text-transparent mt-1" delay={0.15} />
          </div>
        </ScrollReveal>
        <StaggerChildren stagger={0.06}>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <StaggerItem key={i}>
                <div className="bg-white/70 dark:bg-white/[0.04] backdrop-blur-sm rounded-2xl overflow-hidden border border-[#B08D4F]/[0.08] dark:border-white/[0.06]">
                  <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between p-5 md:p-6 text-left group">
                    <span className="font-semibold font-[family-name:var(--font-heading)] text-[#1A1A2E] dark:text-white/80 pr-4 text-[15px] group-hover:text-[#B08D4F] dark:group-hover:text-[#C9A96E] transition-colors duration-300">{faq.question}</span>
                    <motion.div animate={{ rotate: openIndex === i ? 180 : 0 }} transition={{ duration: 0.3 }} className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${openIndex === i ? "bg-[#B08D4F] dark:bg-[#C9A96E] text-[#0A0A0F]" : "bg-[#B08D4F]/[0.06] dark:bg-[#C9A96E]/10 text-[#B08D4F] dark:text-[#C9A96E]"}`}>{openIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}</motion.div>
                  </button>
                  <AnimatePresence>{openIndex === i && (<motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4 }}><div className="px-5 md:px-6 pb-5 md:pb-6"><div className="pt-3 border-t border-[#B08D4F]/[0.08] dark:border-white/[0.06]"><p className="text-[14px] text-[#555] dark:text-white/50 leading-relaxed mt-4">{faq.answer}</p></div></div></motion.div>)}</AnimatePresence>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerChildren>
      </div>
    </section>
  );
}
