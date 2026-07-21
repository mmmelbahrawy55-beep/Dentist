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
    <section id="faq" className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0F766E]/[0.06] text-[#0F766E] text-[12px] font-semibold mb-5 tracking-[2px] uppercase"><span className="w-1.5 h-1.5 rounded-full bg-[#0F766E] animate-pulse" />{t.faq.badge}</span>
            <SplitText text={t.faq.title1} tag="h2" className="text-[clamp(2rem,4vw,3rem)] font-bold font-[family-name:var(--font-heading)] text-[#1A1A2E] leading-tight" />
            <SplitText text={t.faq.title2} tag="h2" className="text-[clamp(2rem,4vw,3rem)] font-bold font-[family-name:var(--font-heading)] leading-tight text-gradient mt-1" delay={0.15} />
          </div>
        </ScrollReveal>
        <StaggerChildren stagger={0.06}>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <StaggerItem key={i}>
                <div className="bg-[#F5F3F0] rounded-2xl overflow-hidden border border-[#EDE9E4]/50">
                  <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between p-5 md:p-6 text-left group">
                    <span className="font-semibold font-[family-name:var(--font-heading)] text-[#1A1A2E] pr-4 text-[15px] group-hover:text-[#0F766E] transition-colors duration-300">{faq.question}</span>
                    <motion.div animate={{ rotate: openIndex === i ? 180 : 0 }} transition={{ duration: 0.3 }} className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${openIndex === i ? "bg-[#0F766E] text-white" : "bg-[#0F766E]/[0.06] text-[#0F766E]"}`}>{openIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}</motion.div>
                  </button>
                  <AnimatePresence>{openIndex === i && (<motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4 }}><div className="px-5 md:px-6 pb-5 md:pb-6"><div className="pt-3 border-t border-[#EDE9E4]"><p className="text-[14px] text-[#555] leading-relaxed mt-4">{faq.answer}</p></div></div></motion.div>)}</AnimatePresence>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerChildren>
      </div>
    </section>
  );
}
