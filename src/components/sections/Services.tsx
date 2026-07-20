"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { services } from "@/lib/data";

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="section-padding bg-white dark:bg-[#0a1628] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle
          badge="Our Services"
          title="Comprehensive Dental"
          highlight="Services"
          description="From routine check-ups to complete smile makeovers, we offer a full spectrum of dental services using the latest technology and techniques."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div
                className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"
                style={{ background: `${service.color}15` }}
              />
              <div className="relative h-full glass rounded-3xl p-6 transition-all duration-500 group-hover:-translate-y-2 group-hover:premium-shadow-xl border border-transparent group-hover:border-primary/10">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110"
                  style={{ background: `${service.color}15` }}
                >
                  <service.icon
                    className="w-7 h-7 transition-colors duration-300"
                    style={{ color: service.color }}
                  />
                </div>

                <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] text-text-primary dark:text-white mb-3">
                  {service.title}
                </h3>

                <p className="text-sm text-text-secondary dark:text-slate-400 leading-relaxed mb-5 line-clamp-3">
                  {service.description}
                </p>

                <button className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-300">
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <AnimatePresence>
                  {hoveredIndex === i && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ background: `${service.color}15` }}
                    >
                      <service.icon className="w-4 h-4" style={{ color: service.color }} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
