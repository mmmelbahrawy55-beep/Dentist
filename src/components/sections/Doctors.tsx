"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Star, ExternalLink, Globe } from "lucide-react";
import ScrollReveal, { StaggerChildren, StaggerItem } from "@/components/ui/ScrollReveal";
import { SplitText } from "@/components/ui/TextReveal";
import { doctors } from "@/lib/data";
import { useLang } from "@/components/ui/LanguageProvider";

const socialIcons = [Globe, Globe, Globe];

export default function Doctors() {
  const { t } = useLang();
  return (
    <section id="doctors" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E]/20 to-transparent" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-20 md:mb-24">
            <span className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#C9A96E]/20 bg-[#C9A96E]/[0.05] text-[#C9A96E] text-[12px] font-semibold mb-6 tracking-[3px] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] animate-pulse" />
              {t.doctors.badge}
            </span>
            <SplitText
              text={t.doctors.title1}
              tag="h2"
              className="text-[clamp(2rem,4vw,3.5rem)] font-bold font-[family-name:var(--font-heading)] text-white leading-tight tracking-[-0.02em]"
            />
            <SplitText
              text={t.doctors.title2}
              tag="h2"
              className="text-[clamp(2rem,4vw,3.5rem)] font-bold font-[family-name:var(--font-heading)] leading-tight text-gradient-gold mt-1 tracking-[-0.02em]"
              delay={0.15}
            />
            <p className="text-[16px] text-[#888888] mt-8 leading-relaxed max-w-2xl mx-auto">
              {t.doctors.description}
            </p>
          </div>
        </ScrollReveal>

        <StaggerChildren stagger={0.12}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctors.map((doc) => {
              const SocialIcon = socialIcons[0];
              return (
                <StaggerItem key={doc.name}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="group relative"
                  >
                    <div className="absolute -inset-3 bg-gradient-to-b from-[#C9A96E]/5 to-transparent rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    <div className="relative glass rounded-[2rem] overflow-hidden gold-border-glow">
                      <div className="relative aspect-[3/4] overflow-hidden">
                        <Image
                          src={doc.image}
                          alt={doc.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent" />

                        <div className="absolute inset-0 bg-[#C9A96E]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="flex gap-0.5">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-3 h-3 fill-[#C9A96E] text-[#C9A96E]" />
                              ))}
                            </div>
                          </div>

                          <h4 className="font-bold font-[family-name:var(--font-heading)] text-white text-[18px] mb-1">
                            {doc.name}
                          </h4>
                          <p className="text-[#C9A96E] text-[13px] font-medium">{doc.specialty}</p>
                        </div>

                        <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                          <div className="flex gap-2">
                            {[Globe, Globe, Globe].map((Icon, i) => (
                              <a key={i} href="#" className="w-9 h-9 rounded-full glass flex items-center justify-center hover:bg-[#C9A96E]/20 transition-colors border border-[#C9A96E]/20">
                                <Icon className="w-4 h-4 text-[#C9A96E]" />
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </div>
        </StaggerChildren>
      </div>
    </section>
  );
}
