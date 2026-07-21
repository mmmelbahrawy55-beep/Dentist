"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, Award, Shield, Heart, Target, Gem } from "lucide-react";
import ScrollReveal, { StaggerChildren, StaggerItem } from "@/components/ui/ScrollReveal";
import { SplitText } from "@/components/ui/TextReveal";
import TiltCard from "@/components/ui/TiltCard";
import { useLang } from "@/components/ui/LanguageProvider";

const certifications = ["American Dental Association (ADA)", "International Congress of Oral Implantologists (ICOI)", "American Academy of Cosmetic Dentistry (AACD)", "Joint Commission Accreditation"];

export default function About() {
  const { t } = useLang();
  return (
    <section id="about" className="relative overflow-hidden bg-[#0A0A0F]">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0F766E]/[0.04] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C9A96E]/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="section-padding pb-0">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] text-[#C9A96E] text-[12px] font-semibold mb-5 tracking-[2px] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] animate-pulse" />
                {t.about.badge}
              </span>
              <SplitText text={t.about.title1} tag="h2" className="text-[clamp(2rem,4vw,3rem)] font-bold font-[family-name:var(--font-heading)] text-white leading-tight" />
              <SplitText text={t.about.title2} tag="h2" className="text-[clamp(2rem,4vw,3rem)] font-bold font-[family-name:var(--font-heading)] leading-tight bg-gradient-to-r from-[#C9A96E] via-[#E8D5A8] to-[#C9A96E] bg-clip-text text-transparent mt-1" delay={0.2} />
              <p className="text-[16px] text-white/50 mt-6 leading-relaxed max-w-2xl mx-auto">{t.about.description}</p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-20">
            {/* Image side with TiltCard */}
            <ScrollReveal direction="left" distance={50}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#0F766E]/10 to-[#C9A96E]/10 rounded-[2.5rem] blur-3xl" />
                <TiltCard glareColor="rgba(201,169,110,0.08)" maxTilt={6} scale={1.01}>
                  <div className="relative rounded-[2rem] overflow-hidden gradient-border">
                    <div className="aspect-[4/5] relative">
                      <Image
                        src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1200&q=85&auto=format&fit=crop"
                        alt="Modern dental clinic"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F]/60 via-transparent to-transparent" />

                      {/* Floating card */}
                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 5, repeat: Infinity }}
                        className="absolute bottom-6 left-6 right-6 bg-white/[0.08] backdrop-blur-xl border border-white/[0.1] rounded-2xl px-6 py-5"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#C9A96E] to-[#E8D5A8] flex items-center justify-center shadow-lg shadow-[#C9A96E]/20">
                            <Gem className="w-7 h-7 text-[#0A0A0F]" />
                          </div>
                          <div>
                            <p className="text-white font-bold text-[16px]">Since 2005</p>
                            <p className="text-white/50 text-[13px]">18+ Years of Excellence</p>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </TiltCard>
              </div>
            </ScrollReveal>

            {/* Text side */}
            <div>
              <ScrollReveal delay={0.1}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-[2px] bg-gradient-to-r from-[#C9A96E] to-transparent" />
                  <span className="text-[#C9A96E] text-[12px] font-semibold tracking-[2px] uppercase">Our Story</span>
                </div>
                <h3 className="text-[clamp(1.5rem,3vw,2.2rem)] font-bold font-[family-name:var(--font-heading)] text-white mb-5 leading-tight">
                  {t.about.storyTitle}
                </h3>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-white/50 leading-relaxed mb-5 text-[15px]">{t.about.storyText1}</p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <p className="text-white/50 leading-relaxed mb-8 text-[15px]">{t.about.storyText2}</p>
              </ScrollReveal>

              <StaggerChildren stagger={0.15} delay={0.3}>
                {[
                  { icon: Target, title: t.about.vision, text: t.about.visionText },
                  { icon: Heart, title: t.about.mission, text: t.about.missionText }
                ].map((item) => (
                  <StaggerItem key={item.title}>
                    <div className="flex gap-4 p-5 rounded-2xl bg-white/[0.04] border border-white/[0.06] mb-4 hover:bg-white/[0.07] transition-all duration-500">
                      <div className="w-12 h-12 rounded-xl bg-[#0F766E]/[0.1] flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-[#0F766E]" />
                      </div>
                      <div>
                        <h4 className="font-semibold font-[family-name:var(--font-heading)] text-white text-[15px]">{item.title}</h4>
                        <p className="text-white/40 text-[14px] mt-1 leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </div>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="section-padding py-16">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <StaggerChildren stagger={0.1}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
              {[
                { icon: Shield, title: t.about.features.tech, desc: t.about.features.techDesc },
                { icon: Heart, title: t.about.features.care, desc: t.about.features.careDesc },
                { icon: Award, title: t.about.features.award, desc: t.about.features.awardDesc },
                { icon: Target, title: t.about.features.precision, desc: t.about.features.precisionDesc }
              ].map((f) => (
                <StaggerItem key={f.title}>
                  <TiltCard glareColor="rgba(15,118,110,0.06)" maxTilt={5} scale={1.02} className="h-full">
                    <div className="h-full bg-white/[0.04] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-7 text-center hover:bg-white/[0.07] transition-all duration-500 group">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0F766E]/20 to-[#0F766E]/5 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-all duration-500">
                        <f.icon className="w-6 h-6 text-[#0F766E]" />
                      </div>
                      <h3 className="font-bold font-[family-name:var(--font-heading)] text-white mb-2 text-[15px]">{f.title}</h3>
                      <p className="text-[13px] text-white/40 leading-relaxed">{f.desc}</p>
                    </div>
                  </TiltCard>
                </StaggerItem>
              ))}
            </div>
          </StaggerChildren>

          {/* Certifications */}
          <ScrollReveal>
            <div className="bg-white/[0.04] backdrop-blur-sm border border-white/[0.06] rounded-3xl p-8 md:p-10">
              <h3 className="text-[18px] font-bold font-[family-name:var(--font-heading)] text-white mb-6 text-center">
                {t.about.certTitle}
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {certifications.map((cert) => (
                  <div key={cert} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/[0.04] transition-colors duration-300">
                    <CheckCircle className="w-5 h-5 text-[#0F766E] shrink-0" />
                    <span className="text-[14px] font-medium text-white/60">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
