"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight, MessageCircle, Star, Shield, Award, ChevronDown } from "lucide-react";
import { SplitText } from "@/components/ui/TextReveal";
import ScrollReveal, { StaggerChildren, StaggerItem } from "@/components/ui/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { stats } from "@/lib/data";
import { useLang } from "@/components/ui/LanguageProvider";

export default function Hero() {
  const { t } = useLang();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section ref={containerRef} id="home" className="relative min-h-[100vh] flex items-center overflow-hidden bg-[#F7F9FC]">
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <div className="absolute inset-0 hero-grid opacity-60" />
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#0EA5E9]/[0.04] rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#1A3C6E]/[0.04] rounded-full blur-[120px]" />
      </motion.div>

      <motion.div style={{ y: contentY, opacity, scale }} className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#1A3C6E]/[0.05] border border-[#1A3C6E]/10 text-[#1A3C6E] text-[12px] font-semibold tracking-[2px] uppercase">
                <span className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-[#D4A853] text-[#D4A853]" />)}</span>
                <span className="w-px h-3.5 bg-[#1A3C6E]/15" />
                {t.hero.badge}
              </span>
            </motion.div>

            <div className="mt-8 mb-7">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.4 }}>
                <SplitText text={t.hero.title1} tag="h1" className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold font-[family-name:var(--font-heading)] text-[#1A1A2E] leading-[1.08] tracking-[-0.02em]" delay={0.4} />
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.7 }}>
                <SplitText text={t.hero.title2} tag="h1" className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold font-[family-name:var(--font-heading)] leading-[1.08] tracking-[-0.02em] text-gradient" delay={0.7} />
              </motion.div>
            </div>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 1 }} className="text-[17px] text-[#4A5568] mb-10 max-w-lg leading-relaxed">
              {t.hero.subtitle}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 1.2 }} className="flex flex-col sm:flex-row gap-4 mb-14">
              <a href="#appointment" className="btn-premium text-[14px] py-4 px-8 rounded-2xl">{t.hero.bookBtn}<ArrowRight className="w-4 h-4" /></a>
              <a href="https://wa.me/15550123456" target="_blank" rel="noopener noreferrer" className="btn-outline text-[14px] py-4 px-8 rounded-2xl"><MessageCircle className="w-4 h-4" />{t.hero.whatsappBtn}</a>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 1.4 }} className="flex flex-wrap items-center gap-5 text-[#A0AEC0] text-[12px] tracking-wide uppercase">
              {[{ icon: Shield, text: "FDA Approved", color: "text-[#0EA5E9]" }, { icon: Award, text: "50+ Awards", color: "text-[#D4A853]" }, { icon: Star, text: "4.9 Rating", color: "text-[#D4A853]", fill: true }].map((item, i) => (
                <div key={i} className="flex items-center gap-2"><item.icon className={`w-4 h-4 ${item.color} ${item.fill ? "fill-current" : ""}`} /><span>{item.text}</span></div>
              ))}
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, x: 60, scale: 0.95 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }} className="relative hidden lg:block">
            <div className="relative perspective-2000">
              <motion.div animate={{ rotateY: [-2, 2, -2], rotateX: [1, -1, 1] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} style={{ transformStyle: "preserve-3d" }} className="relative">
                <div className="absolute -inset-8 bg-gradient-to-r from-[#1A3C6E]/10 to-[#0EA5E9]/10 rounded-[2.5rem] blur-3xl" />
                <div className="relative rounded-[2rem] overflow-hidden premium-shadow-xl">
                  <div className="aspect-[4/5] relative">
                    <Image src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&q=85&auto=format&fit=crop" alt="Premium dental care" fill className="object-cover" priority sizes="(max-width: 1024px) 100vw, 50vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/30 via-transparent to-transparent" />
                  </div>
                  <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-8 -right-6 glass rounded-2xl px-6 py-5 premium-shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#0EA5E9]/10 flex items-center justify-center">
                        <svg className="w-6 h-6 text-[#0EA5E9]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <div><p className="text-[#1A1A2E] text-[15px] font-bold">15,000+</p><p className="text-[#A0AEC0] text-[11px]">Happy Patients</p></div>
                    </div>
                  </motion.div>
                  <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }} className="absolute bottom-16 -left-6 glass rounded-2xl px-6 py-5 premium-shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#D4A853]/10 flex items-center justify-center">
                        <Award className="w-6 h-6 text-[#D4A853]" />
                      </div>
                      <div><p className="text-[#1A1A2E] text-[15px] font-bold">Award Winning</p><p className="text-[#A0AEC0] text-[11px]">Best Clinic 2024</p></div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.6 }} className="mt-20 lg:mt-28">
          <div className="glass rounded-3xl p-8 md:p-10 premium-shadow">
            <StaggerChildren stagger={0.1} delay={1.8}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat) => (<StaggerItem key={stat.label}><AnimatedCounter {...stat} /></StaggerItem>))}
              </div>
            </StaggerChildren>
          </div>
        </motion.div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="flex flex-col items-center gap-2">
          <span className="text-[#A0AEC0] text-[10px] tracking-[3px] uppercase">{t.hero.scroll}</span>
          <ChevronDown className="w-4 h-4 text-[#A0AEC0]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
