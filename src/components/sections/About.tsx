"use client";

import Image from "next/image";
import { CheckCircle, Award, Shield, Heart, Target, Gem } from "lucide-react";
import ScrollReveal, { StaggerChildren, StaggerItem } from "@/components/ui/ScrollReveal";
import { SplitText } from "@/components/ui/TextReveal";
import { useLang } from "@/components/ui/LanguageProvider";

const certifications = ["American Dental Association (ADA)", "International Congress of Oral Implantologists (ICOI)", "American Academy of Cosmetic Dentistry (AACD)", "Joint Commission Accreditation"];

export default function About() {
  const { t } = useLang();
  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0F766E]/[0.06] text-[#0F766E] text-[12px] font-semibold mb-5 tracking-[2px] uppercase"><span className="w-1.5 h-1.5 rounded-full bg-[#0F766E] animate-pulse" />{t.about.badge}</span>
            <SplitText text={t.about.title1} tag="h2" className="text-[clamp(2rem,4vw,3rem)] font-bold font-[family-name:var(--font-heading)] text-[#1A1A2E] leading-tight" />
            <SplitText text={t.about.title2} tag="h2" className="text-[clamp(2rem,4vw,3rem)] font-bold font-[family-name:var(--font-heading)] leading-tight text-gradient mt-1" delay={0.2} />
            <p className="text-[16px] text-[#555] mt-6 leading-relaxed max-w-2xl mx-auto">{t.about.description}</p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-20">
          <ScrollReveal direction="left" distance={50}>
            <div className="relative">
              <div className="absolute -inset-4 bg-[#0F766E]/[0.03] rounded-[2.5rem] blur-2xl" />
              <div className="relative rounded-[2rem] overflow-hidden premium-shadow-xl">
                <div className="aspect-[4/5] relative">
                  <Image src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1200&q=85&auto=format&fit=crop" alt="Modern dental clinic" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/15 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl px-6 py-4 premium-shadow">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#0F766E]/10 flex items-center justify-center"><Gem className="w-6 h-6 text-[#0F766E]" /></div>
                      <div><p className="text-[#1A1A2E] font-bold text-[15px]">Since 2005</p><p className="text-[#999] text-[12px]">18+ Years of Excellence</p></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal delay={0.1}>
              <div className="flex items-center gap-3 mb-4"><div className="warm-divider" /><span className="text-[#0F766E] text-[12px] font-semibold tracking-[2px] uppercase">Our Story</span></div>
              <h3 className="text-[clamp(1.5rem,3vw,2.2rem)] font-bold font-[family-name:var(--font-heading)] text-[#1A1A2E] mb-5 leading-tight">{t.about.storyTitle}</h3>
            </ScrollReveal>
            <ScrollReveal delay={0.2}><p className="text-[#555] leading-relaxed mb-5 text-[15px]">{t.about.storyText1}</p></ScrollReveal>
            <ScrollReveal delay={0.3}><p className="text-[#555] leading-relaxed mb-8 text-[15px]">{t.about.storyText2}</p></ScrollReveal>
            <StaggerChildren stagger={0.15} delay={0.3}>
              {[{ icon: Target, title: t.about.vision, text: t.about.visionText }, { icon: Heart, title: t.about.mission, text: t.about.missionText }].map((item) => (
                <StaggerItem key={item.title}>
                  <div className="flex gap-4 p-5 rounded-2xl bg-[#FDFCFB] border border-[#EDE9E4] mb-4 hover:bg-[#F5F3F0] transition-all duration-500">
                    <div className="w-12 h-12 rounded-xl bg-[#0F766E]/[0.06] flex items-center justify-center shrink-0"><item.icon className="w-5 h-5 text-[#0F766E]" /></div>
                    <div><h4 className="font-semibold font-[family-name:var(--font-heading)] text-[#1A1A2E] text-[15px]">{item.title}</h4><p className="text-[#555] text-[14px] mt-1 leading-relaxed">{item.text}</p></div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>

        <StaggerChildren stagger={0.1}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {[{ icon: Shield, title: t.about.features.tech, desc: t.about.features.techDesc }, { icon: Heart, title: t.about.features.care, desc: t.about.features.careDesc }, { icon: Award, title: t.about.features.award, desc: t.about.features.awardDesc }, { icon: Target, title: t.about.features.precision, desc: t.about.features.precisionDesc }].map((f) => (
              <StaggerItem key={f.title}>
                <div className="h-full bg-white rounded-2xl p-7 text-center premium-shadow hover:premium-shadow-lg transition-all duration-500 group border border-[#EDE9E4]/50">
                  <div className="w-14 h-14 rounded-2xl bg-[#0F766E]/[0.06] flex items-center justify-center mx-auto mb-5 group-hover:bg-[#0F766E]/[0.1] transition-all duration-500 group-hover:scale-110"><f.icon className="w-6 h-6 text-[#0F766E]" /></div>
                  <h3 className="font-bold font-[family-name:var(--font-heading)] text-[#1A1A2E] mb-2 text-[15px]">{f.title}</h3>
                  <p className="text-[13px] text-[#555] leading-relaxed">{f.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerChildren>

        <ScrollReveal>
          <div className="bg-[#F5F3F0] rounded-3xl p-8 md:p-10 border border-[#EDE9E4]">
            <h3 className="text-[18px] font-bold font-[family-name:var(--font-heading)] text-[#1A1A2E] mb-6 text-center">{t.about.certTitle}</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {certifications.map((cert) => (
                <div key={cert} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white transition-colors duration-300"><CheckCircle className="w-5 h-5 text-[#0F766E] shrink-0" /><span className="text-[14px] font-medium text-[#555]">{cert}</span></div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
