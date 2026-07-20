"use client";

import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowLeftRight } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

const cases = [
  { before: "Smile Transformation", after: "Hollywood Smile", category: "Cosmetic" },
  { before: "Missing Teeth", after: "Dental Implants", category: "Implants" },
  { before: "Discolored Teeth", after: "Professional Whitening", category: "Whitening" },
  { before: "Crooked Teeth", after: "Orthodontic Results", category: "Orthodontics" },
];

export default function Gallery() {
  const [sliderPositions, setSliderPositions] = useState<number[]>(cases.map(() => 50));
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMove = useCallback(
    (clientX: number, containerIndex: number) => {
      const container = containerRefs.current[containerIndex];
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPositions((prev) => {
        const next = [...prev];
        next[containerIndex] = percentage;
        return next;
      });
    },
    []
  );

  return (
    <section id="gallery" className="section-padding bg-white dark:bg-[#0a1628] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle
          badge="Results"
          title="Stunning"
          highlight="Transformations"
          description="See the life-changing results our patients have achieved. Drag the slider to compare before and after treatments."
        />

        <div className="grid sm:grid-cols-2 gap-8">
          {cases.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group"
            >
              <div
                ref={(el) => { containerRefs.current[i] = el; }}
                className="relative aspect-[4/3] rounded-3xl overflow-hidden cursor-col-resize premium-shadow select-none"
                onMouseMove={(e) => handleMove(e.clientX, i)}
                onTouchMove={(e) => handleMove(e.touches[0].clientX, i)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-red-50 dark:from-red-950/30 dark:to-red-900/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-red-400/60 text-sm font-medium">Before Treatment</p>
                      <p className="text-red-500/40 text-xs mt-1">{item.before}</p>
                    </div>
                  </div>
                </div>

                <div
                  className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-teal-50 dark:from-emerald-950/30 dark:to-teal-900/20"
                  style={{ clipPath: `inset(0 0 0 ${sliderPositions[i]}%)` }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-emerald-400/60 text-sm font-medium">After Treatment</p>
                      <p className="text-emerald-500/40 text-xs mt-1">{item.after}</p>
                    </div>
                  </div>
                </div>

                <div
                  className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10"
                  style={{ left: `${sliderPositions[i]}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white premium-shadow flex items-center justify-center">
                    <ArrowLeftRight className="w-5 h-5 text-primary" />
                  </div>
                </div>

                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/20 backdrop-blur-sm text-white text-xs font-medium z-10">
                  Before
                </div>
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/20 backdrop-blur-sm text-white text-xs font-medium z-10">
                  After
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h3 className="font-bold font-[family-name:var(--font-heading)] text-text-primary dark:text-white">
                    {item.after}
                  </h3>
                  <p className="text-sm text-text-secondary dark:text-slate-400">{item.before} → {item.after}</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                  {item.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
