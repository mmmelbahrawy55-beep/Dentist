"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeftRight, ChevronLeft, ChevronRight, Sparkles, Star } from "lucide-react";
import ScrollReveal, { StaggerChildren, StaggerItem } from "@/components/ui/ScrollReveal";
import { SplitText } from "@/components/ui/TextReveal";
import { useLang } from "@/components/ui/LanguageProvider";

const cases = [
  { beforeImg: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&q=90&auto=format&fit=crop", afterImg: "https://images.unsplash.com/photo-1619353115193-3f4ef1e4f5a7?w=1200&q=90&auto=format&fit=crop", title: "Hollywood Smile Makeover", subtitle: "Full smile transformation with porcelain veneers", category: "Cosmetic", duration: "2 Weeks" },
  { beforeImg: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&q=90&auto=format&fit=crop", afterImg: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&q=90&auto=format&fit=crop", title: "Dental Implant Restoration", subtitle: "Natural-looking implants replacing missing teeth", category: "Implants", duration: "3 Months" },
  { beforeImg: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=90&auto=format&fit=crop", afterImg: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=1200&q=90&auto=format&fit=crop", title: "Professional Teeth Whitening", subtitle: "8 shades brighter in a single session", category: "Whitening", duration: "1 Hour" },
  { beforeImg: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&q=90&auto=format&fit=crop&crop=faces", afterImg: "https://images.unsplash.com/photo-1445527815219-ecbfec455d5c?w=1200&q=90&auto=format&fit=crop", title: "Orthodontic Alignment", subtitle: "Perfect teeth alignment with clear aligners", category: "Orthodontics", duration: "12 Months" },
];

export default function Gallery() {
  const { t } = useLang();
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);
  const handleMove = useCallback((clientX: number) => { const c = sliderRef.current; if (!c) return; const r = c.getBoundingClientRect(); setSliderPos(Math.max(0, Math.min(100, ((clientX - r.left) / r.width) * 100))); }, []);

  return (
    <section id="gallery" className="section-padding bg-[#F5F3F0] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0F766E]/[0.06] text-[#0F766E] text-[12px] font-semibold mb-5 tracking-[2px] uppercase"><span className="w-1.5 h-1.5 rounded-full bg-[#0F766E] animate-pulse" />{t.gallery.badge}</span>
            <SplitText text={t.gallery.title1} tag="h2" className="text-[clamp(2rem,4vw,3rem)] font-bold font-[family-name:var(--font-heading)] text-[#1A1A2E] leading-tight" />
            <SplitText text={t.gallery.title2} tag="h2" className="text-[clamp(2rem,4vw,3rem)] font-bold font-[family-name:var(--font-heading)] leading-tight text-gradient mt-1" delay={0.15} />
            <p className="text-[16px] text-[#555] mt-6 leading-relaxed max-w-2xl mx-auto">{t.gallery.description}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mb-16">
            <AnimatePresence mode="wait">
              <motion.div key={activeIndex} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div className="relative rounded-[1.5rem] overflow-hidden premium-shadow-xl">
                    <div className="aspect-[4/5] relative"><Image src={cases[activeIndex].beforeImg} alt="Before" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/40 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4 px-4 py-2 rounded-xl bg-[#1A1A2E]/70 backdrop-blur-sm text-white text-[12px] font-bold">{t.gallery.before}</div>
                    </div>
                  </div>
                  <div className="text-center px-4">
                    <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 3, repeat: Infinity }} className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#0F766E] to-[#14B8A6] flex items-center justify-center shadow-lg shadow-[#0F766E]/20"><Sparkles className="w-9 h-9 text-white" /></motion.div>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#C9A96E]/10 text-[#C9A96E] text-[12px] font-bold mb-4">{cases[activeIndex].category}</div>
                    <h3 className="text-[clamp(1.3rem,2.5vw,1.8rem)] font-bold font-[family-name:var(--font-heading)] text-[#1A1A2E] mb-2">{cases[activeIndex].title}</h3>
                    <p className="text-[14px] text-[#555] mb-4 leading-relaxed">{cases[activeIndex].subtitle}</p>
                    <div className="flex items-center justify-center gap-4 mb-6">
                      <div className="text-center"><p className="text-[10px] text-[#999] uppercase tracking-[2px]">Duration</p><p className="text-[14px] font-bold text-[#1A1A2E]">{cases[activeIndex].duration}</p></div>
                      <div className="w-px h-8 bg-[#EDE9E4]" />
                      <div className="text-center"><p className="text-[10px] text-[#999] uppercase tracking-[2px]">Rating</p><div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-[#C9A96E] text-[#C9A96E]" />)}</div></div>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <motion.button onClick={() => setActiveIndex((i) => (i - 1 + cases.length) % cases.length)} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-11 h-11 rounded-xl bg-[#0F766E]/[0.06] flex items-center justify-center hover:bg-[#0F766E]/[0.1] transition-colors"><ChevronLeft className="w-5 h-5 text-[#0F766E]" /></motion.button>
                      <div className="flex gap-2">{cases.map((_, i) => <button key={i} onClick={() => setActiveIndex(i)} className={`h-1.5 rounded-full transition-all duration-500 ${i === activeIndex ? "w-8 bg-[#0F766E]" : "w-2 bg-[#0F766E]/20 hover:bg-[#0F766E]/40"}`} />)}</div>
                      <motion.button onClick={() => setActiveIndex((i) => (i + 1) % cases.length)} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-11 h-11 rounded-xl bg-[#0F766E]/[0.06] flex items-center justify-center hover:bg-[#0F766E]/[0.1] transition-colors"><ChevronRight className="w-5 h-5 text-[#0F766E]" /></motion.button>
                    </div>
                  </div>
                  <div className="relative rounded-[1.5rem] overflow-hidden premium-shadow-xl">
                    <div className="aspect-[4/5] relative"><Image src={cases[activeIndex].afterImg} alt="After" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/40 via-transparent to-transparent" />
                      <div className="absolute top-4 right-4 px-4 py-2 rounded-xl bg-[#0F766E] text-white text-[12px] font-bold">{t.gallery.after}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div ref={sliderRef} className="relative aspect-[21/9] rounded-[2rem] overflow-hidden cursor-col-resize select-none premium-shadow-xl" onMouseMove={(e) => handleMove(e.clientX)} onTouchMove={(e) => handleMove(e.touches[0].clientX)}>
            <div className="absolute inset-0"><Image src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600&q=90&auto=format&fit=crop" alt="Before" fill className="object-cover" sizes="100vw" /></div>
            <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}><Image src="https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=1600&q=90&auto=format&fit=crop" alt="After" fill className="object-cover" sizes="100vw" /></div>
            <div className="absolute top-0 bottom-0 w-[3px] bg-[#0F766E] z-10" style={{ left: `${sliderPos}%` }}><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center"><ArrowLeftRight className="w-5 h-5 text-[#0F766E]" /></div></div>
            <div className="absolute bottom-6 left-6 px-4 py-2 rounded-xl bg-[#1A1A2E]/70 backdrop-blur-sm text-white text-[12px] font-bold">{t.gallery.before}</div>
            <div className="absolute bottom-6 right-6 px-4 py-2 rounded-xl bg-[#0F766E] text-white text-[12px] font-bold">{t.gallery.after}</div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
