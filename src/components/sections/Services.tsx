"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import ScrollReveal, { StaggerChildren, StaggerItem } from "@/components/ui/ScrollReveal";
import TiltCard from "@/components/ui/TiltCard";
import { SplitText } from "@/components/ui/TextReveal";
import { services } from "@/lib/data";

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="section-padding bg-white dark:bg-[#080d1a] relative overflow-hidden mesh-bg">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/[0.06] text-primary text-[13px] font-semibold mb-5 tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Our Services
            </span>
            <SplitText
              text="Comprehensive Dental"
              tag="h2"
              className="text-[clamp(2rem,4vw,3.2rem)] font-bold font-[family-name:var(--font-heading)] text-text-primary dark:text-white leading-tight"
            />
            <SplitText
              text="Services"
              tag="h2"
              className="text-[clamp(2rem,4vw,3.2rem)] font-bold font-[family-name:var(--font-heading)] leading-tight text-gradient mt-1"
              delay={0.15}
            />
            <p className="text-[16px] text-text-secondary dark:text-slate-400 mt-6 leading-relaxed max-w-2xl mx-auto">
              From routine check-ups to complete smile makeovers, we offer a full spectrum of dental services
              using the latest technology and techniques.
            </p>
          </div>
        </ScrollReveal>

        <StaggerChildren stagger={0.06}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {services.map((service, i) => (
              <StaggerItem key={service.title}>
                <TiltCard glareColor={`${service.color}10`} maxTilt={6} scale={1.03}>
                  <div
                    className="h-full rounded-3xl p-6 transition-all duration-500 group cursor-pointer border border-transparent hover:border-primary/[0.08] relative overflow-hidden"
                    style={{ background: "var(--card-bg)", backdropFilter: "blur(20px)" }}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                      style={{
                        background: `radial-gradient(circle at 50% 0%, ${service.color}08, transparent 70%)`,
                      }}
                    />

                    <div className="relative z-10">
                      <div
                        className="w-13 h-13 rounded-2xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                        style={{ background: `${service.color}10` }}
                      >
                        <service.icon
                          className="w-6 h-6 transition-colors duration-300"
                          style={{ color: service.color }}
                        />
                      </div>

                      <h3 className="text-[17px] font-bold font-[family-name:var(--font-heading)] text-text-primary dark:text-white mb-2.5 group-hover:text-primary dark:group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>

                      <p className="text-[13px] text-text-secondary dark:text-slate-400 leading-relaxed mb-5 line-clamp-3">
                        {service.description}
                      </p>

                      <div className="flex items-center gap-2 text-[13px] font-semibold text-primary group-hover:gap-3 transition-all duration-500">
                        Learn More
                        <motion.div
                          animate={hoveredIndex === i ? { x: 3, y: -3 } : { x: 0, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </motion.div>
                      </div>
                    </div>

                    <AnimatePresence>
                      {hoveredIndex === i && (
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute top-4 right-4 w-8 h-8 rounded-xl flex items-center justify-center z-10"
                          style={{ background: `${service.color}12` }}
                        >
                          <service.icon className="w-4 h-4" style={{ color: service.color }} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </div>
        </StaggerChildren>
      </div>
    </section>
  );
}
