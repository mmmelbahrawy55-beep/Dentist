"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeftRight, ChevronLeft, ChevronRight, ZoomIn, Award, Sparkles, Star } from "lucide-react";
import ScrollReveal, { StaggerChildren, StaggerItem } from "@/components/ui/ScrollReveal";
import { SplitText } from "@/components/ui/TextReveal";
import { useLang } from "@/components/ui/LanguageProvider";

const cases = [
  {
    beforeImg: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&q=90&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1445527815219-ecbfec455d5c?w=1200&q=90&auto=format&fit=crop",
    title: "Hollywood Smile Makeover",
    subtitle: "Full smile transformation with porcelain veneers",
    category: "Cosmetic",
    duration: "2 Weeks",
    rating: 5,
  },
  {
    beforeImg: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&q=90&auto=format&fit=crop",
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
    afterImg: "https://images.unsplash.com/photo-1619353115193-3f4ef1e4f5a7?w=1200&q=90&auto=format&fit=crop",
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
    <section id="gallery" className="section-padding bg-white dark:bg-[#080d1a] relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/[0.03] rounded-full blur-[150px]" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/[0.06] text-primary text-[13px] font-semibold mb-5 tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              {t.gallery.badge}
            </span>
            <SplitText
              text={t.gallery.title1}
              tag="h2"
              className="text-[clamp(2rem,4vw,3.2rem)] font-bold font-[family-name:var(--font-heading)] text-text-primary dark:text-white leading-tight"
            />
            <SplitText
              text={t.gallery.title2}
              tag="h2"
              className="text-[clamp(2rem,4vw,3.2rem)] font-bold font-[family-name:var(--font-heading)] leading-tight text-gradient mt-1"
              delay={0.15}
            />
            <p className="text-[16px] text-text-secondary dark:text-slate-400 mt-6 leading-relaxed max-w-2xl mx-auto">
              {t.gallery.description}
            </p>
          </div>
        </ScrollReveal>

        {/* Featured Before/After - Large Display */}
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
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  {/* Before Image */}
                  <div className="relative group">
                    <div className="absolute -inset-3 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="relative rounded-[2rem] overflow-hidden premium-shadow-xl">
                      <div className="aspect-[4/5] relative">
                        <Image
                          src={cases[activeIndex].beforeImg}
                          alt={`Before: ${cases[activeIndex].title}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute top-4 left-4 px-4 py-2 rounded-xl bg-red-500/90 backdrop-blur-sm text-white text-[13px] font-bold tracking-wide">
                          {t.gallery.before}
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center gap-2 text-white/60 text-[12px]">
                            <span className="w-2 h-2 rounded-full bg-red-400" />
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
                      transition={{ duration: 3, repeat: Infinity }}
                      className="w-20 h-20 mx-auto mb-6 rounded-[1.25rem] bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-xl shadow-primary/20"
                    >
                      <Sparkles className="w-9 h-9 text-white" />
                    </motion.div>

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-[12px] font-bold mb-4">
                      <Award className="w-3.5 h-3.5" />
                      {cases[activeIndex].category}
                    </div>

                    <h3 className="text-[clamp(1.3rem,2.5vw,1.8rem)] font-bold font-[family-name:var(--font-heading)] text-text-primary dark:text-white mb-2">
                      {cases[activeIndex].title}
                    </h3>
                    <p className="text-[14px] text-text-secondary dark:text-slate-400 mb-4 leading-relaxed">
                      {cases[activeIndex].subtitle}
                    </p>

                    <div className="flex items-center justify-center gap-4 mb-6">
                      <div className="text-center">
                        <p className="text-[11px] text-text-light dark:text-slate-500 uppercase tracking-wider">Duration</p>
                        <p className="text-[14px] font-bold text-text-primary dark:text-white">{cases[activeIndex].duration}</p>
                      </div>
                      <div className="w-px h-8 bg-primary/10" />
                      <div className="text-center">
                        <p className="text-[11px] text-text-light dark:text-slate-500 uppercase tracking-wider">Rating</p>
                        <div className="flex gap-0.5">
                          {[...Array(cases[activeIndex].rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-center gap-3">
                      <motion.button
                        onClick={prevCase}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-11 h-11 rounded-xl bg-primary/[0.06] flex items-center justify-center hover:bg-primary/10 transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5 text-primary" />
                      </motion.button>
                      <div className="flex gap-2">
                        {cases.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            className={`h-2 rounded-full transition-all duration-500 ${
                              i === activeIndex ? "w-8 bg-primary" : "w-2 bg-primary/20 hover:bg-primary/40"
                            }`}
                          />
                        ))}
                      </div>
                      <motion.button
                        onClick={nextCase}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-11 h-11 rounded-xl bg-primary/[0.06] flex items-center justify-center hover:bg-primary/10 transition-colors"
                      >
                        <ChevronRight className="w-5 h-5 text-primary" />
                      </motion.button>
                    </div>
                  </div>

                  {/* After Image */}
                  <div className="relative group">
                    <div className="absolute -inset-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="relative rounded-[2rem] overflow-hidden premium-shadow-xl">
                      <div className="aspect-[4/5] relative">
                        <Image
                          src={cases[activeIndex].afterImg}
                          alt={`After: ${cases[activeIndex].title}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute top-4 right-4 px-4 py-2 rounded-xl bg-green-500/90 backdrop-blur-sm text-white text-[13px] font-bold tracking-wide">
                          {t.gallery.after}
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center gap-2 text-white/60 text-[12px]">
                            <span className="w-2 h-2 rounded-full bg-green-400" />
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
                  className={`relative aspect-[3/4] rounded-[1.5rem] overflow-hidden cursor-col-resize select-none group transition-all duration-500 ${
                    activeIndex === i ? "ring-2 ring-primary ring-offset-2 ring-offset-white dark:ring-offset-[#080d1a] scale-[1.02]" : "opacity-70 hover:opacity-100"
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
                    className="absolute top-0 bottom-0 w-[2px] bg-white z-10"
                    style={{ left: `${sliderPositions[i]}%` }}
                  >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-xl flex items-center justify-center">
                      <ArrowLeftRight className="w-4 h-4 text-primary" />
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="px-2.5 py-1 rounded-lg bg-white/15 backdrop-blur-sm text-white text-[10px] font-bold tracking-wider uppercase mb-2 inline-block">
                      {item.category}
                    </span>
                    <h4 className="text-white font-bold text-[14px] font-[family-name:var(--font-heading)]">
                      {item.title}
                    </h4>
                    <p className="text-white/50 text-[11px] mt-0.5">{item.subtitle}</p>
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
