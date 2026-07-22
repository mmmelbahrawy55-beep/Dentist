"use client";

import { motion } from "framer-motion";
import { Award, Shield, Star, Heart, Sparkles, Syringe } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useLang } from "@/components/ui/LanguageProvider";

const awards = [
  { icon: Award, name: "ADA Accredited", desc: "American Dental Association" },
  { icon: Shield, name: "ISO Certified", desc: "International Standards" },
  { icon: Star, name: "Top Rated 2025", desc: "Patient Choice Award" },
  { icon: Heart, name: "Community Care", desc: "Excellence in Service" },
  { icon: Sparkles, name: "Innovation Lab", desc: "Digital Dentistry Leader" },
  { icon: Syringe, name: "Safety First", desc: "Sterilization Certified" },
  { icon: Award, name: "Best Clinic", desc: "Regional Winner 2024" },
  { icon: Shield, name: "HIPAA Compliant", desc: "Data Protection" },
];

const duplicated = [...awards, ...awards];

export default function AwardsMarquee() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-[#F5F0EA]/50 dark:bg-white/[0.02]">
      <div className="max-w-[1400px] mx-auto px-6 mb-10">
        <ScrollReveal>
          <div className="text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#B08D4F]/[0.06] dark:bg-white/[0.06] text-[#B08D4F] dark:text-[#C9A96E] text-[12px] font-semibold mb-4 tracking-[2px] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B08D4F] dark:bg-[#C9A96E] animate-pulse" />
              Accreditations
            </span>
            <h3 className="text-[clamp(1.5rem,2.5vw,2rem)] font-bold font-[family-name:var(--font-heading)] text-[#1A1A2E] dark:text-white">
              Our Certifications &amp; Awards
            </h3>
          </div>
        </ScrollReveal>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F5F0EA]/80 dark:from-[#0A0A0F]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F5F0EA]/80 dark:from-[#0A0A0F]/80 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {duplicated.map((award, i) => {
            const Icon = award.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-4 px-6 py-4 rounded-xl bg-white/60 dark:bg-white/[0.03] border border-[#B08D4F]/[0.06] dark:border-white/[0.06] whitespace-nowrap hover:bg-white/80 dark:hover:bg-white/[0.06] transition-all group shrink-0"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#B08D4F]/10 to-[#0F766E]/10 dark:from-[#C9A96E]/10 dark:to-[#0F766E]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5 text-[#B08D4F] dark:text-[#C9A96E]" />
                </div>
                <div>
                  <p className="text-[14px] font-bold text-[#1A1A2E] dark:text-white">{award.name}</p>
                  <p className="text-[11px] text-[#555] dark:text-white/40">{award.desc}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
