"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Award, GraduationCap } from "lucide-react";
import ScrollReveal, { StaggerChildren, StaggerItem } from "@/components/ui/ScrollReveal";
import { SplitText } from "@/components/ui/TextReveal";
import { doctors } from "@/lib/data";
import { useLang } from "@/components/ui/LanguageProvider";

export default function Doctors() {
  const { t } = useLang();
  return (
    <section id="doctors" className="section-padding bg-[#0A0A0F] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#C9A96E]/[0.03] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#0F766E]/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] text-[#C9A96E] text-[12px] font-semibold mb-5 tracking-[2px] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] animate-pulse" />
              {t.doctors.badge}
            </span>
            <SplitText text={t.doctors.title1} tag="h2" className="text-[clamp(2rem,4vw,3rem)] font-bold font-[family-name:var(--font-heading)] text-white leading-tight" />
            <SplitText text={t.doctors.title2} tag="h2" className="text-[clamp(2rem,4vw,3rem)] font-bold font-[family-name:var(--font-heading)] leading-tight bg-gradient-to-r from-[#C9A96E] via-[#E8D5A8] to-[#C9A96E] bg-clip-text text-transparent mt-1" delay={0.15} />
            <p className="text-[16px] text-white/50 mt-6 leading-relaxed max-w-2xl mx-auto">{t.doctors.description}</p>
          </div>
        </ScrollReveal>

        <StaggerChildren stagger={0.1}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctors.map((doc, index) => (
              <StaggerItem key={doc.name}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="group relative bg-white/[0.04] backdrop-blur-sm border border-white/[0.06] rounded-2xl overflow-hidden hover:bg-white/[0.07] transition-all duration-500"
                >
                  {/* Image */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={doc.image}
                      alt={doc.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F]/90 via-[#0A0A0F]/20 to-transparent" />

                    {/* Rating stars */}
                    <div className="absolute top-4 left-4 flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-[#C9A96E] text-[#C9A96E]" />
                      ))}
                    </div>

                    {/* Experience badge */}
                    <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-[#C9A96E]/20 backdrop-blur-sm border border-[#C9A96E]/30">
                      <span className="text-[10px] font-bold text-[#C9A96E]">{doc.experience}</span>
                    </div>

                    {/* Info overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h4 className="font-bold font-[family-name:var(--font-heading)] text-white text-[17px] mb-1">
                        {doc.name}
                      </h4>
                      <p className="text-[#14B8A6] text-[13px] font-medium mb-3">
                        {doc.specialty}
                      </p>

                      {/* Qualifications - visible on hover */}
                      <div className="space-y-1.5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                        {doc.qualifications.slice(0, 2).map((qual) => (
                          <div key={qual} className="flex items-center gap-2">
                            <GraduationCap className="w-3 h-3 text-[#C9A96E] shrink-0" />
                            <span className="text-[11px] text-white/60">{qual}</span>
                          </div>
                        ))}
                      </div>
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
