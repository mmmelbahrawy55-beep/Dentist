"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, User } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SplitText } from "@/components/ui/TextReveal";
import { testimonials } from "@/lib/data";
import { useLang } from "@/components/ui/LanguageProvider";

export default function Testimonials() {
  const { t } = useLang();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const next = useCallback(() => { setDirection(1); setCurrent((c) => (c + 1) % testimonials.length); }, []);
  const prev = useCallback(() => { setDirection(-1); setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length); }, []);
  useEffect(() => { const timer = setInterval(next, 6000); return () => clearInterval(timer); }, [next]);
  const variants = { enter: (dir: number) => ({ x: dir > 0 ? 120 : -120, opacity: 0, scale: 0.96 }), center: { x: 0, opacity: 1, scale: 1 }, exit: (dir: number) => ({ x: dir > 0 ? -120 : 120, opacity: 0, scale: 0.96 }) };

  return (
    <section id="testimonials" className="section-padding bg-[#F5F0EA] dark:bg-[#0F0F14] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#C9A96E]/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#B08D4F]/[0.06] dark:bg-white/[0.06] text-[#B08D4F] dark:text-[#C9A96E] text-[12px] font-semibold mb-5 tracking-[2px] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B08D4F] dark:bg-[#C9A96E] animate-pulse" />
              {t.testimonials.badge}
            </span>
            <SplitText text={t.testimonials.title1} tag="h2" className="text-[clamp(2rem,4vw,3rem)] font-bold font-[family-name:var(--font-heading)] text-[#1A1A2E] dark:text-white leading-tight" />
            <SplitText text={t.testimonials.title2} tag="h2" className="text-[clamp(2rem,4vw,3rem)] font-bold font-[family-name:var(--font-heading)] leading-tight bg-gradient-to-r from-[#B08D4F] via-[#C9A96E] to-[#B08D4F] dark:from-[#C9A96E] dark:via-[#E8D5A8] dark:to-[#C9A96E] bg-clip-text text-transparent mt-1" delay={0.15} />
            <p className="text-[16px] text-[#555] dark:text-white/50 mt-6 leading-relaxed max-w-2xl mx-auto">{t.testimonials.description}</p>
          </div>
        </ScrollReveal>

        <div className="relative max-w-4xl mx-auto mb-12">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div key={current} custom={direction} variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="bg-white/80 dark:bg-white/[0.04] backdrop-blur-sm rounded-[2rem] p-8 md:p-12 border border-[#B08D4F]/[0.08] dark:border-white/[0.06]">
              <Quote className="w-12 h-12 text-[#B08D4F]/20 dark:text-[#C9A96E]/20 mb-6" />
              <div className="flex gap-1 mb-6">{[...Array(testimonials[current].rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-[#C9A96E] text-[#C9A96E]" />)}</div>
              <p className="text-[18px] md:text-[22px] text-[#555] dark:text-white/80 leading-relaxed mb-10 font-light italic">&ldquo;{testimonials[current].text}&rdquo;</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#B08D4F]/[0.08] dark:bg-[#C9A96E]/10 flex items-center justify-center">
                    <User className="w-7 h-7 text-[#B08D4F]/60 dark:text-[#C9A96E]/60" />
                  </div>
                  <div>
                    <h4 className="font-bold font-[family-name:var(--font-heading)] text-[#1A1A2E] dark:text-white text-[16px]">{testimonials[current].name}</h4>
                    <p className="text-[13px] text-[#555] dark:text-white/40">{testimonials[current].service}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <motion.button onClick={prev} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }} className="w-11 h-11 rounded-xl bg-[#B08D4F]/[0.06] dark:bg-white/[0.06] flex items-center justify-center hover:bg-[#B08D4F]/[0.1] dark:hover:bg-white/[0.1] transition-colors border border-[#B08D4F]/[0.08] dark:border-white/[0.08]">
                    <ChevronLeft className="w-5 h-5 text-[#1A1A2E] dark:text-white" />
                  </motion.button>
                  <motion.button onClick={next} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }} className="w-11 h-11 rounded-xl bg-[#B08D4F]/[0.06] dark:bg-white/[0.06] flex items-center justify-center hover:bg-[#B08D4F]/[0.1] dark:hover:bg-white/[0.1] transition-colors border border-[#B08D4F]/[0.08] dark:border-white/[0.08]">
                    <ChevronRight className="w-5 h-5 text-[#1A1A2E] dark:text-white" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center gap-2.5 mt-8">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }} className={`h-1.5 rounded-full transition-all duration-500 ${i === current ? "w-8 bg-[#B08D4F] dark:bg-[#C9A96E]" : "w-1.5 bg-[#B08D4F]/20 dark:bg-white/20 hover:bg-[#B08D4F]/40 dark:hover:bg-white/40"}`} />
            ))}
          </div>
        </div>

        <ScrollReveal>
          <div className="text-center">
            <div className="inline-flex items-center gap-5 bg-white/80 dark:bg-white/[0.04] backdrop-blur-sm rounded-2xl px-8 py-5 border border-[#B08D4F]/[0.08] dark:border-white/[0.06]">
              <div className="flex items-center gap-1">{[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-[#C9A96E] text-[#C9A96E]" />)}</div>
              <div className="w-px h-8 bg-[#B08D4F]/10 dark:bg-white/10" />
              <div className="text-left">
                <p className="text-[#1A1A2E] dark:text-white font-bold text-[18px]">4.9 / 5.0</p>
                <p className="text-[#555] dark:text-white/40 text-[13px]">{t.testimonials.rating}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
