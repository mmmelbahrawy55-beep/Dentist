"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeftRight, ChevronLeft, ChevronRight, Sparkles, Award, Star, Diamond } from "lucide-react";
import ScrollReveal, { StaggerChildren, StaggerItem } from "@/components/ui/ScrollReveal";
import { SplitText } from "@/components/ui/TextReveal";
import { useLang } from "@/components/ui/LanguageProvider";

const cases = [
  {
    beforeImg: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&q=90&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1619353115193-3f4ef1e4f5a7?w=1200&q=90&auto=format&fit=crop",
    title: "Hollywood Smile Makeover",
    subtitle: "Full smile transformation with porcelain veneers",
    category: "Cosmetic",
    duration: "2 Weeks",
    rating: 5,
  },
  {
    beforeImg: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&q=90&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&q=90&auto=format&fit=crop",
    title: "Dental Implant Restoration",
    subtitle: "Natural-looking implants replacing missing teeth",
    category: "Implants",
    duration: "3 Months",
    rating: 5,
  },
  {
    beforeImg: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=90&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=1200&q=90&auto=format&fit=crop",
    title: "Professional Teeth Whitening",
    subtitle: "8 shades brighter in a single session",
    category: "Whitening",
    duration: "1 Hour",
    rating: 5,
  },
  {
    beforeImg: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&q=90&auto=format&fit=crop&crop=faces",
    afterImg: "https://images.unsplash.com/photo-1445527815219-ecbfec455d5c?w=1200&q=90&auto=format&fit=crop",
    title: "Orthodontic Alignment",
    subtitle: "Perfect teeth alignment with clear aligners",
    category: "Orthodontics",
    duration: "12 Months",
    rating: 5,
  },
];

export default function Gallery() {
  const { t } = useLang();
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderPositions, setSliderPositions] = useState<number[]>(cases.map(() => 50));
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMove = useCallback((clientX: number, idx: number) => {
    const container = containerRefs.current[idx];
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPositions((prev) => { const n = [...prev]; n[idx] = pct; return n; });
  }, []);

  const nextCase = () => setActiveIndex((i) => (i + 1) % cases.length);
  const prevCase = () => setActiveIndex((i) => (i - 1 + cases.length) % cases.length);

  return (
    <section id="gallery" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E]/20 to-transparent" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-20 md:mb-24">
            <span className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#C9A96E]/20 bg-[#C9A96E]/[0.05] text-[#C9A96E] text-[12px] font-semibold mb-6 tracking-[3px] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] animate-pulse" />
              {t.gallery.badge}
            </span>
            <SplitText
              text={t.gallery.title1}
              tag="h2"
              className="text-[clamp(2rem,4vw,3.5rem)] font-bold font-[family-name:var(--font-heading)] text-white leading-tight tracking-[-0.02em]"
            />
            <SplitText
              text={t.gallery.title2}
              tag="h2"
              className="text-[clamp(2rem,4vw,3.5rem)] font-bold font-[family-name:var(--font-heading)] leading-tight text-gradient-gold mt-1 tracking-[-0.02em]"
              delay={0.15}
            />
            <p className="text-[16px] text-[#888888] mt-8 leading-relaxed max-w-2xl mx-auto">
              {t.gallery.description}
            </p>
          </div>
        </ScrollReveal>

        {/* Featured Before/After - Large Display */}
        <ScrollReveal>
          <div className="mb-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  {/* Before Image */}
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-[#C9A96E]/5 to-transparent rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="relative rounded-[2rem] overflow-hidden premium-shadow-xl gold-border-glow">
                      <div className="aspect-[4/5] relative">
                        <Image
                          src={cases[activeIndex].beforeImg}
                          alt={`Before: ${cases[activeIndex].title}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/70 via-transparent to-transparent" />
                        <div className="absolute top-5 left-5 px-5 py-2.5 rounded-xl bg-[#050505]/80 backdrop-blur-sm border border-[#C9A96E]/20 text-[#C9A96E] text-[12px] font-bold tracking-[2px] uppercase">
                          {t.gallery.before}
                        </div>
                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="flex items-center gap-2 text-[#999] text-[12px]">
                            <span className="w-2 h-2 rounded-full bg-[#C9A96E]/50" />
                            Before Treatment
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center Info */}
                  <div className="text-center px-4">
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="w-24 h-24 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-[#C9A96E] to-[#E8D5A8] flex items-center justify-center shadow-xl shadow-[#C9A96E]/20"
                    >
                      <Diamond className="w-11 h-11 text-[#0A0A0A]" />
                    </motion.div>

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C9A96E]/10 border border-[#C9A96E]/20 text-[#C9A96E] text-[12px] font-bold mb-5 tracking-[2px] uppercase">
                      <Award className="w-3.5 h-3.5" />
                      {cases[activeIndex].category}
                    </div>

                    <h3 className="text-[clamp(1.3rem,2.5vw,2rem)] font-bold font-[family-name:var(--font-heading)] text-white mb-3">
                      {cases[activeIndex].title}
                    </h3>
                    <p className="text-[14px] text-[#888] mb-6 leading-relaxed">
                      {cases[activeIndex].subtitle}
                    </p>

                    <div className="flex items-center justify-center gap-5 mb-8">
                      <div className="text-center">
                        <p className="text-[10px] text-[#666] uppercase tracking-[2px]">Duration</p>
                        <p className="text-[14px] font-bold text-white mt-1">{cases[activeIndex].duration}</p>
                      </div>
                      <div className="w-px h-10 bg-[#C9A96E]/20" />
                      <div className="text-center">
                        <p className="text-[10px] text-[#666] uppercase tracking-[2px]">Rating</p>
                        <div className="flex gap-0.5 mt-1">
                          {[...Array(cases[activeIndex].rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-[#C9A96E] text-[#C9A96E]" />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-center gap-3">
                      <motion.button
                        onClick={prevCase}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 rounded-xl glass gold-border-glow flex items-center justify-center hover:bg-[#C9A96E]/[0.05] transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5 text-[#C9A96E]" />
                      </motion.button>
                      <div className="flex gap-2">
                        {cases.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            className={`h-1.5 rounded-full transition-all duration-500 ${
                              i === activeIndex ? "w-10 bg-[#C9A96E]" : "w-3 bg-[#C9A96E]/20 hover:bg-[#C9A96E]/40"
                            }`}
                          />
                        ))}
                      </div>
                      <motion.button
                        onClick={nextCase}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 rounded-xl glass gold-border-glow flex items-center justify-center hover:bg-[#C9A96E]/[0.05] transition-colors"
                      >
                        <ChevronRight className="w-5 h-5 text-[#C9A96E]" />
                      </motion.button>
                    </div>
                  </div>

                  {/* After Image */}
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-l from-[#C9A96E]/5 to-transparent rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="relative rounded-[2rem] overflow-hidden premium-shadow-xl gold-border-glow">
                      <div className="aspect-[4/5] relative">
                        <Image
                          src={cases[activeIndex].afterImg}
                          alt={`After: ${cases[activeIndex].title}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/70 via-transparent to-transparent" />
                        <div className="absolute top-5 right-5 px-5 py-2.5 rounded-xl bg-[#C9A96E]/90 backdrop-blur-sm text-[#0A0A0A] text-[12px] font-bold tracking-[2px] uppercase">
                          {t.gallery.after}
                        </div>
                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="flex items-center gap-2 text-[#999] text-[12px]">
                            <span className="w-2 h-2 rounded-full bg-[#C9A96E]" />
                            After Treatment
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </ScrollReveal>

        {/* Interactive Slider Grid */}
        <StaggerChildren stagger={0.1}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {cases.map((item, i) => (
              <StaggerItem key={i}>
                <div
                  ref={(el) => { containerRefs.current[i] = el; }}
                  className={`relative aspect-[3/4] rounded-[1.5rem] overflow-hidden cursor-col-resize select-none group transition-all duration-700 ${
                    activeIndex === i ? "gold-border-glow premium-shadow-xl scale-[1.03]" : "opacity-60 hover:opacity-100 premium-border"
                  }`}
                  onMouseMove={(e) => handleMove(e.clientX, i)}
                  onTouchMove={(e) => handleMove(e.touches[0].clientX, i)}
                  onClick={() => setActiveIndex(i)}
                >
                  <div className="absolute inset-0">
                    <Image
                      src={item.beforeImg}
                      alt={`Before: ${item.title}`}
                      fill
                      className="object-cover"
                      sizes="25vw"
                    />
                  </div>

                  <div
                    className="absolute inset-0"
                    style={{ clipPath: `inset(0 0 0 ${sliderPositions[i]}%)` }}
                  >
                    <Image
                      src={item.afterImg}
                      alt={`After: ${item.title}`}
                      fill
                      className="object-cover"
                      sizes="25vw"
                    />
                  </div>

                  <div
                    className="absolute top-0 bottom-0 w-[2px] bg-[#C9A96E] z-10"
                    style={{ left: `${sliderPositions[i]}%` }}
                  >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#C9A96E] shadow-xl flex items-center justify-center">
                      <ArrowLeftRight className="w-4 h-4 text-[#0A0A0A]" />
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-[#050505]/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="px-3 py-1.5 rounded-lg bg-[#C9A96E]/20 border border-[#C9A96E]/20 text-[#C9A96E] text-[10px] font-bold tracking-[2px] uppercase mb-3 inline-block">
                      {item.category}
                    </span>
                    <h4 className="text-white font-bold text-[15px] font-[family-name:var(--font-heading)]">
                      {item.title}
                    </h4>
                    <p className="text-[#888] text-[12px] mt-1">{item.subtitle}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerChildren>
      </div>
    </section>
  );
}
