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

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 120 : -120, opacity: 0, scale: 0.96 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -120 : 120, opacity: 0, scale: 0.96 }),
  };

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="absolute inset-0 mesh-bg" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E]/20 to-transparent" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-20 md:mb-24">
            <span className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#C9A96E]/20 bg-[#C9A96E]/[0.05] text-[#C9A96E] text-[12px] font-semibold mb-6 tracking-[3px] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] animate-pulse" />
              {t.testimonials.badge}
            </span>
            <SplitText
              text={t.testimonials.title1}
              tag="h2"
              className="text-[clamp(2rem,4vw,3.5rem)] font-bold font-[family-name:var(--font-heading)] text-white leading-tight tracking-[-0.02em]"
            />
            <SplitText
              text={t.testimonials.title2}
              tag="h2"
              className="text-[clamp(2rem,4vw,3.5rem)] font-bold font-[family-name:var(--font-heading)] leading-tight text-gradient-gold mt-1 tracking-[-0.02em]"
              delay={0.15}
            />
            <p className="text-[16px] text-[#888888] mt-8 leading-relaxed max-w-2xl mx-auto">
              {t.testimonials.description}
            </p>
          </div>
        </ScrollReveal>

        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="overflow-hidden rounded-[2rem]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="glass rounded-[2rem] p-8 md:p-12 gold-border-glow"
              >
                <Quote className="w-12 h-12 text-[#C9A96E]/20 mb-6" />

                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#C9A96E] text-[#C9A96E]" />
                  ))}
                </div>

                <p className="text-[18px] md:text-[22px] text-white/85 leading-relaxed mb-10 font-light italic">
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#C9A96E]/10 flex items-center justify-center">
                      <User className="w-7 h-7 text-[#C9A96E]/60" />
                    </div>
                    <div>
                      <h4 className="font-bold font-[family-name:var(--font-heading)] text-white text-[16px]">
                        {testimonials[current].name}
                      </h4>
                      <p className="text-[13px] text-[#888]">{testimonials[current].service}</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <motion.button
                      onClick={prev}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.92 }}
                      className="w-11 h-11 rounded-xl glass gold-border-glow flex items-center justify-center hover:bg-[#C9A96E]/[0.05] transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5 text-[#C9A96E]" />
                    </motion.button>
                    <motion.button
                      onClick={next}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.92 }}
                      className="w-11 h-11 rounded-xl glass gold-border-glow flex items-center justify-center hover:bg-[#C9A96E]/[0.05] transition-colors"
                    >
                      <ChevronRight className="w-5 h-5 text-[#C9A96E]" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2.5 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
                  i === current ? "w-8 bg-[#C9A96E]" : "w-1.5 bg-[#C9A96E]/20 hover:bg-[#C9A96E]/40"
                }`}
              />
            ))}
          </div>
        </div>

        <ScrollReveal>
          <div className="text-center">
            <div className="inline-flex items-center gap-5 glass rounded-2xl px-8 py-5 gold-border-glow">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#C9A96E] text-[#C9A96E]" />
                ))}
              </div>
              <div className="w-px h-8 bg-[#C9A96E]/20" />
              <div className="text-left">
                <p className="text-white font-bold text-[18px]">4.9 / 5.0</p>
                <p className="text-[#888] text-[13px]">{t.testimonials.rating}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
