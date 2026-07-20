"use client";

import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowLeftRight } from "lucide-react";
import ScrollReveal, { StaggerChildren, StaggerItem } from "@/components/ui/ScrollReveal";
import { SplitText } from "@/components/ui/TextReveal";

const cases = [
  { before: "Smile Transformation", after: "Hollywood Smile", category: "Cosmetic" },
  { before: "Missing Teeth", after: "Dental Implants", category: "Implants" },
  { before: "Discolored Teeth", after: "Professional Whitening", category: "Whitening" },
  { before: "Crooked Teeth", after: "Orthodontic Results", category: "Orthodontics" },
];

export default function Gallery() {
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

  return (
    <section id="gallery" className="section-padding bg-white dark:bg-[#080d1a] relative overflow-hidden mesh-bg">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/[0.06] text-primary text-[13px] font-semibold mb-5 tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Results
            </span>
            <SplitText
              text="Stunning"
              tag="h2"
              className="text-[clamp(2rem,4vw,3.2rem)] font-bold font-[family-name:var(--font-heading)] text-text-primary dark:text-white leading-tight"
            />
            <SplitText
              text="Transformations"
              tag="h2"
              className="text-[clamp(2rem,4vw,3.2rem)] font-bold font-[family-name:var(--font-heading)] leading-tight text-gradient mt-1"
              delay={0.15}
            />
            <p className="text-[16px] text-text-secondary dark:text-slate-400 mt-6 leading-relaxed max-w-2xl mx-auto">
              See the life-changing results our patients have achieved. Drag the slider to compare before and after.
            </p>
          </div>
        </ScrollReveal>

        <StaggerChildren stagger={0.12}>
          <div className="grid sm:grid-cols-2 gap-8">
            {cases.map((item, i) => (
              <StaggerItem key={i}>
                <div
                  ref={(el) => { containerRefs.current[i] = el; }}
                  className="relative aspect-[4/3] rounded-[1.75rem] overflow-hidden cursor-col-resize select-none group"
                  onMouseMove={(e) => handleMove(e.clientX, i)}
                  onTouchMove={(e) => handleMove(e.touches[0].clientX, i)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-amber-50 dark:from-red-950/30 dark:to-amber-900/20 transition-all duration-700">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-red-400/50 text-sm font-semibold">Before Treatment</p>
                        <p className="text-red-500/30 text-xs mt-1">{item.before}</p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-teal-50 dark:from-emerald-950/30 dark:to-teal-900/20"
                    style={{ clipPath: `inset(0 0 0 ${sliderPositions[i]}%)` }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-emerald-400/50 text-sm font-semibold">After Treatment</p>
                        <p className="text-emerald-500/30 text-xs mt-1">{item.after}</p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="absolute top-0 bottom-0 w-[2px] bg-white z-10 transition-none"
                    style={{ left: `${sliderPositions[i]}%` }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-xl flex items-center justify-center"
                      style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.15)" }}
                    >
                      <ArrowLeftRight className="w-5 h-5 text-primary" />
                    </motion.div>
                  </div>

                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/20 backdrop-blur-sm text-white text-[11px] font-semibold z-10 tracking-wide">
                    Before
                  </div>
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/20 backdrop-blur-sm text-white text-[11px] font-semibold z-10 tracking-wide">
                    After
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold font-[family-name:var(--font-heading)] text-text-primary dark:text-white text-[16px]">
                      {item.after}
                    </h3>
                    <p className="text-[13px] text-text-secondary dark:text-slate-400">{item.before} → {item.after}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-primary/[0.06] text-primary text-[11px] font-semibold">
                    {item.category}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerChildren>
      </div>
    </section>
  );
}
