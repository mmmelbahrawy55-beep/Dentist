"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeftRight, ChevronLeft, ChevronRight, Sparkles, Star, Clock, Syringe } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SplitText } from "@/components/ui/TextReveal";
import TiltCard from "@/components/ui/TiltCard";
import { useLang } from "@/components/ui/LanguageProvider";

const cases = [
  {
    beforeImg: "https://images.unsplash.com/photo-1679741919483-acf704e00495?w=1100&q=95&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1677026010083-78ec7f1b84ed?w=1100&q=95&auto=format&fit=crop",
    title: "Complete Smile Makeover",
    subtitle: "Full mouth rehabilitation with premium porcelain veneers",
    category: "Cosmetic",
    duration: "2 Weeks",
    rating: 5,
  },
  {
    beforeImg: "https://images.unsplash.com/photo-1660732205502-2c4dcd3af74d?w=1100&q=95&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1664529842504-5743d286ec1b?w=1100&q=95&auto=format&fit=crop",
    title: "Full Mouth Reconstruction",
    subtitle: "Complete restoration of damaged and decayed teeth",
    category: "Reconstruction",
    duration: "6 Months",
    rating: 5,
  },
  {
    beforeImg: "https://images.unsplash.com/photo-1663182245833-7dd667277043?w=1100&q=95&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?w=1100&q=95&auto=format&fit=crop",
    title: "Professional Teeth Whitening",
    subtitle: "Advanced laser whitening for dramatically brighter teeth",
    category: "Whitening",
    duration: "45 Mins",
    rating: 5,
  },
  {
    beforeImg: "https://images.unsplash.com/photo-1660300110558-392c91835aa5?w=1100&q=95&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1654373535457-383a0a4d00f9?w=1100&q=95&auto=format&fit=crop",
    title: "Porcelain Veneers",
    subtitle: "Custom porcelain shells for a flawless, natural smile",
    category: "Veneers",
    duration: "10 Days",
    rating: 5,
  },
];

export default function Gallery() {
  const { t } = useLang();
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const [sliderHover, setSliderHover] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    const c = sliderRef.current;
    if (!c) return;
    const r = c.getBoundingClientRect();
    setSliderPos(Math.max(0, Math.min(100, ((clientX - r.left) / r.width) * 100)));
  }, []);

  return (
    <section id="gallery" className="section-padding bg-[#F5F0EA] dark:bg-[#0A0A0F] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#0F766E]/[0.04] dark:bg-[#0F766E]/[0.06] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#B08D4F]/[0.06] dark:bg-white/[0.06] text-[#B08D4F] dark:text-[#C9A96E] text-[12px] font-semibold mb-5 tracking-[2px] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B08D4F] dark:bg-[#C9A96E] animate-pulse" />
              {t.gallery.badge}
            </span>
            <SplitText text={t.gallery.title1} tag="h2" className="text-[clamp(2rem,4vw,3rem)] font-bold font-[family-name:var(--font-heading)] text-[#1A1A2E] dark:text-white leading-tight" />
            <SplitText text={t.gallery.title2} tag="h2" className="text-[clamp(2rem,4vw,3rem)] font-bold font-[family-name:var(--font-heading)] leading-tight bg-gradient-to-r from-[#B08D4F] via-[#C9A96E] to-[#B08D4F] dark:from-[#C9A96E] dark:via-[#E8D5A8] dark:to-[#C9A96E] bg-clip-text text-transparent mt-1" delay={0.15} />
            <p className="text-[16px] text-[#555] dark:text-white/50 mt-6 leading-relaxed max-w-2xl mx-auto">{t.gallery.description}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mb-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 items-center">
                  <TiltCard glareColor="rgba(201,169,110,0.06)" maxTilt={5} scale={1.01}>
                    <div className="relative rounded-[1.5rem] overflow-hidden group shadow-xl shadow-black/5">
                      <div className="aspect-[4/3] relative">
                        <Image
                          src={cases[activeIndex].beforeImg}
                          alt="Before treatment"
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          sizes="(max-width: 1024px) 100vw, 33vw"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        <div className="absolute top-4 left-4 px-4 py-2 rounded-xl bg-black/70 backdrop-blur-sm text-white text-[12px] font-bold tracking-wider uppercase flex items-center gap-2 border border-red-400/30">
                          <div className="w-2 h-2 rounded-full bg-red-400" />
                          {t.gallery.before}
                        </div>
                      </div>
                    </div>
                  </TiltCard>

                  <div className="text-center px-4 lg:px-8">
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#C9A96E] to-[#E8D5A8] flex items-center justify-center shadow-lg shadow-[#C9A96E]/20"
                    >
                      <Sparkles className="w-9 h-9 text-[#0A0A0F]" />
                    </motion.div>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#B08D4F]/[0.08] dark:bg-[#C9A96E]/10 text-[#B08D4F] dark:text-[#C9A96E] text-[12px] font-bold mb-4 border border-[#B08D4F]/15 dark:border-[#C9A96E]/20">
                      {cases[activeIndex].category}
                    </div>
                    <h3 className="text-[clamp(1.3rem,2.5vw,1.8rem)] font-bold font-[family-name:var(--font-heading)] text-[#1A1A2E] dark:text-white mb-2">
                      {cases[activeIndex].title}
                    </h3>
                    <p className="text-[14px] text-[#555] dark:text-white/50 mb-6 leading-relaxed">
                      {cases[activeIndex].subtitle}
                    </p>
                    <div className="flex items-center justify-center gap-6 mb-6">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#B08D4F] dark:text-[#C9A96E]" />
                        <div className="text-left">
                          <p className="text-[10px] text-[#999] dark:text-white/30 uppercase tracking-[2px]">Duration</p>
                          <p className="text-[14px] font-bold text-[#1A1A2E] dark:text-white">{cases[activeIndex].duration}</p>
                        </div>
                      </div>
                      <div className="w-px h-8 bg-[#B08D4F]/10 dark:bg-white/10" />
                      <div className="flex items-center gap-2">
                        <Syringe className="w-4 h-4 text-[#B08D4F] dark:text-[#C9A96E]" />
                        <div className="text-left">
                          <p className="text-[10px] text-[#999] dark:text-white/30 uppercase tracking-[2px]">Pain Level</p>
                          <p className="text-[14px] font-bold text-[#1A1A2E] dark:text-white">Minimal</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-2 mb-6">
                      {[...Array(cases[activeIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#C9A96E] text-[#C9A96E]" />
                      ))}
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <motion.button
                        onClick={() => setActiveIndex((i) => (i - 1 + cases.length) % cases.length)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-11 h-11 rounded-xl bg-[#B08D4F]/[0.06] dark:bg-white/[0.06] flex items-center justify-center hover:bg-[#B08D4F]/[0.1] dark:hover:bg-white/[0.1] transition-colors border border-[#B08D4F]/[0.08] dark:border-white/[0.08]"
                      >
                        <ChevronLeft className="w-5 h-5 text-[#1A1A2E] dark:text-white" />
                      </motion.button>
                      <div className="flex gap-2">
                        {cases.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            className={`h-1.5 rounded-full transition-all duration-500 ${
                              i === activeIndex
                                ? "w-8 bg-[#B08D4F] dark:bg-[#C9A96E]"
                                : "w-2 bg-[#B08D4F]/20 dark:bg-white/20 hover:bg-[#B08D4F]/40 dark:hover:bg-white/40"
                            }`}
                          />
                        ))}
                      </div>
                      <motion.button
                        onClick={() => setActiveIndex((i) => (i + 1) % cases.length)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-11 h-11 rounded-xl bg-[#B08D4F]/[0.06] dark:bg-white/[0.06] flex items-center justify-center hover:bg-[#B08D4F]/[0.1] dark:hover:bg-white/[0.1] transition-colors border border-[#B08D4F]/[0.08] dark:border-white/[0.08]"
                      >
                        <ChevronRight className="w-5 h-5 text-[#1A1A2E] dark:text-white" />
                      </motion.button>
                    </div>
                  </div>

                  <TiltCard glareColor="rgba(15,118,110,0.06)" maxTilt={5} scale={1.01}>
                    <div className="relative rounded-[1.5rem] overflow-hidden group shadow-xl shadow-black/5">
                      <div className="aspect-[4/3] relative">
                        <Image
                          src={cases[activeIndex].afterImg}
                          alt="After treatment"
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          sizes="(max-width: 1024px) 100vw, 33vw"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        <div className="absolute top-4 right-4 px-4 py-2 rounded-xl bg-gradient-to-r from-[#0F766E]/90 to-[#14B8A6]/90 text-white text-[12px] font-bold tracking-wider uppercase flex items-center gap-2 border border-emerald-400/30 backdrop-blur-sm">
                          {t.gallery.after}
                          <div className="w-2 h-2 rounded-full bg-emerald-300" />
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </ScrollReveal>

        {/* Interactive Before/After Slider */}
        <ScrollReveal>
          <div className="relative rounded-[2rem] overflow-hidden border border-[#B08D4F]/[0.08] dark:border-white/[0.06] shadow-2xl shadow-black/10">
            <div
              ref={sliderRef}
              className="relative aspect-[21/9] cursor-col-resize select-none"
              onMouseMove={(e) => handleMove(e.clientX)}
              onTouchMove={(e) => handleMove(e.touches[0].clientX)}
              onMouseEnter={() => setSliderHover(true)}
              onMouseLeave={() => setSliderHover(false)}
            >
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1660732205502-2c4dcd3af74d?w=1800&q=95&auto=format&fit=crop"
                  alt="Before treatment"
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
              </div>
              <div
                className="absolute inset-0"
                style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1664529842504-5743d286ec1b?w=1800&q=95&auto=format&fit=crop"
                  alt="After treatment"
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
              </div>
              <div
                className="absolute top-0 bottom-0 w-[3px] z-10 transition-all duration-150"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#C9A96E] via-white to-[#C9A96E]" />
                <div
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white shadow-2xl flex items-center justify-center transition-all duration-300 ${
                    sliderHover ? "scale-110 shadow-[#C9A96E]/30" : ""
                  }`}
                >
                  <ArrowLeftRight className={`w-5 h-5 text-[#0A0A0F] transition-transform duration-300 ${sliderHover ? "rotate-180" : ""}`} />
                </div>
              </div>
              <div className="absolute bottom-6 left-6 px-5 py-2.5 rounded-xl bg-black/70 backdrop-blur-sm text-white text-[12px] font-bold tracking-wider uppercase flex items-center gap-2 border border-red-400/30">
                <div className="w-2 h-2 rounded-full bg-red-400" />
                {t.gallery.before}
              </div>
              <div className="absolute bottom-6 right-6 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#0F766E]/90 to-[#14B8A6]/90 text-white text-[12px] font-bold tracking-wider uppercase flex items-center gap-2 border border-emerald-400/30 backdrop-blur-sm">
                {t.gallery.after}
                <div className="w-2 h-2 rounded-full bg-emerald-300" />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
