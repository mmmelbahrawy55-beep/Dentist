"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import ScrollReveal, { StaggerChildren, StaggerItem } from "@/components/ui/ScrollReveal";
import { SplitText } from "@/components/ui/TextReveal";
import { doctors } from "@/lib/data";
import { useLang } from "@/components/ui/LanguageProvider";

export default function Doctors() {
  const { t } = useLang();
  return (
    <section id="doctors" className="section-padding bg-[#F7F9FC] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A3C6E]/[0.05] text-[#1A3C6E] text-[12px] font-semibold mb-5 tracking-[2px] uppercase"><span className="w-1.5 h-1.5 rounded-full bg-[#1A3C6E] animate-pulse" />{t.doctors.badge}</span>
            <SplitText text={t.doctors.title1} tag="h2" className="text-[clamp(2rem,4vw,3rem)] font-bold font-[family-name:var(--font-heading)] text-[#1A1A2E] leading-tight" />
            <SplitText text={t.doctors.title2} tag="h2" className="text-[clamp(2rem,4vw,3rem)] font-bold font-[family-name:var(--font-heading)] leading-tight text-gradient mt-1" delay={0.15} />
            <p className="text-[16px] text-[#4A5568] mt-6 leading-relaxed max-w-2xl mx-auto">{t.doctors.description}</p>
          </div>
        </ScrollReveal>
        <StaggerChildren stagger={0.12}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctors.map((doc) => (
              <StaggerItem key={doc.name}>
                <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} className="group relative bg-white rounded-2xl overflow-hidden premium-shadow hover:premium-shadow-lg transition-all duration-500 border border-[#E2E8F0]/50">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image src={doc.image} alt={doc.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/70 via-[#1A1A2E]/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <div className="flex gap-0.5 mb-2">{[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-[#D4A853] text-[#D4A853]" />)}</div>
                      <h4 className="font-bold font-[family-name:var(--font-heading)] text-white text-[17px] mb-1">{doc.name}</h4>
                      <p className="text-[#0EA5E9] text-[13px] font-medium">{doc.specialty}</p>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerChildren>
      </div>
    </section>
  );
}
