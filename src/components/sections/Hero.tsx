"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight, MessageCircle, Play, ChevronDown, Shield, Award, Star } from "lucide-react";
import { SplitText } from "@/components/ui/TextReveal";
import ScrollReveal, { StaggerChildren, StaggerItem } from "@/components/ui/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { stats } from "@/lib/data";
import { useLang } from "@/components/ui/LanguageProvider";

export default function Hero() {
  const { t } = useLang();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-[100vh] flex items-center overflow-hidden"
    >
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#111111] to-[#0A0A0A]" />
        <div className="absolute inset-0 hero-grid opacity-40" />

        <div className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] bg-[#C9A96E]/[0.06] rounded-full blur-[150px] animate-blob" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#C9A96E]/[0.04] rounded-full blur-[150px] animate-blob" style={{ animationDelay: "3s" }} />
        <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-[#0EA5E9]/[0.03] rounded-full blur-[100px] animate-blob" style={{ animationDelay: "5s" }} />
      </motion.div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-[#C9A96E]/[0.04]"
            style={{
              width: [80, 120, 60, 100][i],
              height: [80, 120, 60, 100][i],
              left: `${[10, 80, 30, 70][i]}%`,
              top: `${[20, 60, 75, 30][i]}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 90, 180],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{
              duration: [9, 11, 8, 10][i],
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        style={{ y: contentY, opacity, scale }}
        className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 pt-32 pb-20 w-full"
      >
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#C9A96E]/20 bg-[#C9A96E]/[0.05] text-[#C9A96E] text-[12px] font-semibold tracking-[3px] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] animate-pulse" />
                {t.hero.badge}
              </span>
            </motion.div>

            <div className="mt-10 mb-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <SplitText
                  text={t.hero.title1}
                  tag="h1"
                  className="text-[clamp(2.8rem,6.5vw,5.5rem)] font-bold font-[family-name:var(--font-heading)] text-white leading-[1.02] tracking-[-0.03em]"
                  delay={0.5}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.8 }}
              >
                <SplitText
                  text={t.hero.title2}
                  tag="h1"
                  className="text-[clamp(2.8rem,6.5vw,5.5rem)] font-bold font-[family-name:var(--font-heading)] leading-[1.02] tracking-[-0.03em] text-gradient-gold"
                  delay={0.8}
                />
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.1 }}
              className="text-[17px] text-[#888888] mb-12 max-w-lg leading-relaxed"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-16"
            >
              <a href="#appointment" className="btn-premium">
                {t.hero.bookBtn}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="https://wa.me/15550123456" target="_blank" rel="noopener noreferrer"
                className="btn-outline">
                <MessageCircle className="w-4 h-4" />
                {t.hero.whatsappBtn}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.5 }}
              className="flex flex-wrap items-center gap-6 text-[#666666] text-[12px] tracking-wide uppercase"
            >
              {[
                { icon: Shield, text: "FDA Approved" },
                { icon: Award, text: "50+ Awards" },
                { icon: Star, text: "4.9 Rating", fill: true },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <item.icon className={`w-4 h-4 text-[#C9A96E] ${item.fill ? "fill-[#C9A96E]" : ""}`} />
                  <span>{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 80, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative perspective-2000">
              <motion.div
                animate={{ rotateY: [-2, 2, -2], rotateX: [1, -1, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d" }}
                className="relative"
              >
                <div className="absolute -inset-10 bg-gradient-to-r from-[#C9A96E]/15 to-[#C9A96E]/5 rounded-[3rem] blur-3xl" />
                <div className="relative rounded-[2rem] premium-shadow-xl overflow-hidden gold-border-glow">
                  <div className="aspect-[4/5] relative">
                    <Image
                      src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&q=85&auto=format&fit=crop"
                      alt="Premium dental care"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/70 via-transparent to-transparent" />
                  </div>

                  <motion.div
                    animate={{ y: [0, -14, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-10 -right-8 glass rounded-2xl px-6 py-5 gold-border-glow"
                    style={{ transform: "translateZ(50px)" }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#C9A96E]/10 flex items-center justify-center">
                        <svg className="w-6 h-6 text-[#C9A96E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white text-[15px] font-bold">15,000+</p>
                        <p className="text-[#666] text-[11px]">Happy Patients</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, -14, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
                    className="absolute bottom-20 -left-8 glass rounded-2xl px-6 py-5 gold-border-glow"
                    style={{ transform: "translateZ(40px)" }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#C9A96E]/10 flex items-center justify-center">
                        <Award className="w-6 h-6 text-[#C9A96E]" />
                      </div>
                      <div>
                        <p className="text-white text-[15px] font-bold">Award Winning</p>
                        <p className="text-[#666] text-[11px]">Best Clinic 2024</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-24 lg:mt-32"
        >
          <div className="glass rounded-3xl p-8 md:p-10 gold-border-glow">
            <StaggerChildren stagger={0.1} delay={2.0}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat) => (
                  <StaggerItem key={stat.label}>
                    <AnimatedCounter {...stat} />
                  </StaggerItem>
                ))}
              </div>
            </StaggerChildren>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[#C9A96E]/40 text-[10px] tracking-[4px] uppercase">{t.hero.scroll}</span>
          <ChevronDown className="w-4 h-4 text-[#C9A96E]/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
