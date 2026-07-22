"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Clock, Award, Activity } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useLang } from "@/components/ui/LanguageProvider";

const statsData = [
  { value: 15000, suffix: "+", label: "Happy Patients", icon: Users },
  { value: 20, suffix: "+", label: "Years Experience", icon: Clock },
  { value: 50, suffix: "+", label: "Awards Won", icon: Award },
  { value: 98, suffix: "%", label: "Success Rate", icon: Activity },
];

function AnimatedCounter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <span ref={ref}>
      {inView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="tabular-nums"
        >
          {end.toLocaleString()}{suffix}
        </motion.span>
      ) : (
        "0"
      )}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#B08D4F]/5 via-[#0F766E]/5 to-[#B08D4F]/5 dark:from-[#C9A96E]/8 dark:via-[#0F766E]/8 dark:to-[#C9A96E]/8" />
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-[#C9A96E]/[0.06] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/2 right-1/4 w-[300px] h-[300px] bg-[#0F766E]/[0.06] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {statsData.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="relative text-center p-8 rounded-2xl bg-white/60 dark:bg-white/[0.03] backdrop-blur-sm border border-[#B08D4F]/[0.08] dark:border-white/[0.06] hover:bg-white/80 dark:hover:bg-white/[0.06] transition-all duration-500 group"
                >
                  <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-gradient-to-br from-[#B08D4F]/10 to-[#0F766E]/10 dark:from-[#C9A96E]/10 dark:to-[#0F766E]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-6 h-6 text-[#B08D4F] dark:text-[#C9A96E]" />
                  </div>
                  <div className="text-[clamp(1.8rem,3vw,2.8rem)] font-bold font-[family-name:var(--font-heading)] bg-gradient-to-r from-[#B08D4F] to-[#0F766E] dark:from-[#C9A96E] dark:to-[#14B8A6] bg-clip-text text-transparent">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-[13px] text-[#555] dark:text-white/50 mt-2 font-medium tracking-wide">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
