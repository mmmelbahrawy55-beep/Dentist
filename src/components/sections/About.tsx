"use client";

import Image from "next/image";
import { CheckCircle, Award, Shield, Heart, Target, Crown, Gem } from "lucide-react";
import ScrollReveal, { StaggerChildren, StaggerItem } from "@/components/ui/ScrollReveal";
import { SplitText } from "@/components/ui/TextReveal";
import { useLang } from "@/components/ui/LanguageProvider";

const certifications = [
  "American Dental Association (ADA)",
  "International Congress of Oral Implantologists (ICOI)",
  "American Academy of Cosmetic Dentistry (AACD)",
  "Joint Commission Accreditation",
];

export default function About() {
  const { t } = useLang();
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E]/20 to-transparent" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-20 md:mb-24">
            <span className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#C9A96E]/20 bg-[#C9A96E]/[0.05] text-[#C9A96E] text-[12px] font-semibold mb-6 tracking-[3px] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] animate-pulse" />
              {t.about.badge}
            </span>
            <SplitText
              text={t.about.title1}
              tag="h2"
              className="text-[clamp(2rem,4vw,3.5rem)] font-bold font-[family-name:var(--font-heading)] text-white leading-tight tracking-[-0.02em]"
            />
            <SplitText
              text={t.about.title2}
              tag="h2"
              className="text-[clamp(2rem,4vw,3.5rem)] font-bold font-[family-name:var(--font-heading)] leading-tight text-gradient-gold mt-1 tracking-[-0.02em]"
              delay={0.2}
            />
            <p className="text-[16px] text-[#888888] mt-8 leading-relaxed max-w-2xl mx-auto">
              {t.about.description}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          <ScrollReveal direction="left" distance={50}>
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-r from-[#C9A96E]/10 to-transparent rounded-[3rem] blur-3xl" />
              <div className="relative rounded-[2rem] overflow-hidden premium-shadow-xl gold-border-glow">
                <div className="aspect-[4/5] relative">
                  <Image
                    src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1200&q=85&auto=format&fit=crop"
                    alt="Modern luxury dental clinic"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/40 to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="glass rounded-2xl px-6 py-4 gold-border-glow">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-[#C9A96E]/10 flex items-center justify-center shrink-0">
                          <Gem className="w-7 h-7 text-[#C9A96E]" />
                        </div>
                        <div>
                          <p className="text-white font-bold text-[16px]">Since 2005</p>
                          <p className="text-[#888] text-[12px]">18+ Years of Excellence</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal delay={0.1}>
              <div className="flex items-center gap-3 mb-6">
                <div className="luxury-line" />
                <span className="text-[#C9A96E] text-[12px] font-semibold tracking-[3px] uppercase">Our Story</span>
              </div>
              <h3 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold font-[family-name:var(--font-heading)] text-white mb-6 leading-tight">
                {t.about.storyTitle}
              </h3>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-[#999] leading-relaxed mb-6 text-[15px]">
                {t.about.storyText1}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-[#999] leading-relaxed mb-10 text-[15px]">
                {t.about.storyText2}
              </p>
            </ScrollReveal>

            <StaggerChildren stagger={0.15} delay={0.3}>
              {[
                { icon: Target, title: t.about.vision, text: t.about.visionText },
                { icon: Heart, title: t.about.mission, text: t.about.missionText },
              ].map((item) => (
                <StaggerItem key={item.title}>
                  <div className="flex gap-5 p-6 rounded-2xl glass gold-border-glow mb-4 hover:bg-[#C9A96E]/[0.03] transition-all duration-700">
                    <div className="w-14 h-14 rounded-xl bg-[#C9A96E]/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-[#C9A96E]" />
                    </div>
                    <div>
                      <h4 className="font-bold font-[family-name:var(--font-heading)] text-white text-[16px]">
                        {item.title}
                      </h4>
                      <p className="text-[#888] text-[14px] mt-1.5 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>

        <StaggerChildren stagger={0.12}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
            {[
              { icon: Shield, title: t.about.features.tech, desc: t.about.features.techDesc },
              { icon: Heart, title: t.about.features.care, desc: t.about.features.careDesc },
              { icon: Award, title: t.about.features.award, desc: t.about.features.awardDesc },
              { icon: Target, title: t.about.features.precision, desc: t.about.features.precisionDesc },
            ].map((feature) => (
              <StaggerItem key={feature.title}>
                <div className="h-full glass rounded-3xl p-8 text-center gold-border-glow hover:bg-[#C9A96E]/[0.03] transition-all duration-700 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#C9A96E]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-[#C9A96E]/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#C9A96E]/15 transition-all duration-700 group-hover:scale-110">
                      <feature.icon className="w-7 h-7 text-[#C9A96E]" />
                    </div>
                    <h3 className="font-bold font-[family-name:var(--font-heading)] text-white mb-3 text-[16px]">
                      {feature.title}
                    </h3>
                    <p className="text-[13px] text-[#777] leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerChildren>

        <ScrollReveal>
          <div className="glass rounded-3xl p-10 gold-border-glow">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="luxury-line" />
              <h3 className="text-[22px] font-bold font-[family-name:var(--font-heading)] text-white text-center">
                {t.about.certTitle}
              </h3>
              <div className="luxury-line" style={{ background: "linear-gradient(270deg, #C9A96E, transparent)" }} />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert) => (
                <div key={cert} className="flex items-center gap-4 p-4 rounded-xl hover:bg-[#C9A96E]/[0.03] transition-colors duration-500">
                  <div className="w-10 h-10 rounded-lg bg-[#C9A96E]/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-[#C9A96E]" />
                  </div>
                  <span className="text-[14px] font-medium text-[#CCC]">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
