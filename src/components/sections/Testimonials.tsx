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
    <section id="testimonials" className="section-padding relative overflow-hidden" style={{ background: "linear-gradient(160deg, #020617, #0c4a6e, #0e7490, #0d9488)" }}>
      <div className="absolute inset-0 hero-grid opacity-30" />
      <div className="absolute inset-0">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-blob" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-accent/8 rounded-full blur-[120px] animate-blob" style={{ animationDelay: "3s" }} />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] text-white/70 text-[13px] font-semibold mb-5 tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              {t.testimonials.badge}
            </span>
            <SplitText
              text={t.testimonials.title1}
              tag="h2"
              className="text-[clamp(2rem,4vw,3.2rem)] font-bold font-[family-name:var(--font-heading)] text-white leading-tight"
            />
            <SplitText
              text={t.testimonials.title2}
              tag="h2"
              className="text-[clamp(2rem,4vw,3.2rem)] font-bold font-[family-name:var(--font-heading)] leading-tight text-gradient mt-1"
              delay={0.15}
            />
            <p className="text-[16px] text-white/45 mt-6 leading-relaxed max-w-2xl mx-auto">
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
                className="glass rounded-[2rem] p-8 md:p-12 border border-white/[0.06]"
              >
                <Quote className="w-12 h-12 text-primary/20 mb-6" />

                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-[18px] md:text-[22px] text-white/85 leading-relaxed mb-10 font-light italic">
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.06] flex items-center justify-center">
                      <User className="w-7 h-7 text-white/40" />
                    </div>
                    <div>
                      <h4 className="font-bold font-[family-name:var(--font-heading)] text-white text-[16px]">
                        {testimonials[current].name}
                      </h4>
                      <p className="text-[13px] text-white/40">{testimonials[current].service}</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <motion.button
                      onClick={prev}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.92 }}
                      className="w-11 h-11 rounded-xl bg-white/[0.06] flex items-center justify-center hover:bg-white/[0.12] transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5 text-white/60" />
                    </motion.button>
                    <motion.button
                      onClick={next}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.92 }}
                      className="w-11 h-11 rounded-xl bg-white/[0.06] flex items-center justify-center hover:bg-white/[0.12] transition-colors"
                    >
                      <ChevronRight className="w-5 h-5 text-white/60" />
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
                  i === current ? "w-8 bg-white" : "w-1.5 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

        <ScrollReveal>
          <div className="text-center">
            <div className="inline-flex items-center gap-5 glass rounded-2xl px-8 py-5 border border-white/[0.06]">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-left">
                <p className="text-white font-bold text-[18px]">4.9 / 5.0</p>
                <p className="text-white/40 text-[13px]">{t.testimonials.rating}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
