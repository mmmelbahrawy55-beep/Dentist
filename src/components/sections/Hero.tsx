"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight, MessageCircle, Star, Shield, Award, ChevronDown, Sparkles, Zap } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import MagneticButton from "@/components/ui/MagneticButton";
import ParticleField from "@/components/ui/ParticleField";
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
    <section ref={containerRef} id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#FDFBF7] dark:bg-[#0A0A0F]">
      {/* Full-screen animated background image */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <div className="absolute inset-0 animate-kenburns">
          <Image
            src="https://images.unsplash.com/photo-1677026010083-78ec7f1b84ed?w=1920&q=90&auto=format&fit=crop"
            alt="Perfect white smile"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#FDFBF7]/90 via-[#FDFBF7]/55 to-[#FDFBF7]/15 dark:from-[#0A0A0F]/90 dark:via-[#0A0A0F]/55 dark:to-[#0A0A0F]/15 max-md:from-[#FDFBF7]/95 max-md:via-[#FDFBF7]/70 max-md:to-[#FDFBF7]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF7]/60 via-transparent to-[#FDFBF7]/10 dark:from-[#0A0A0F]/60 dark:via-transparent dark:to-[#0A0A0F]/10" />
      </motion.div>

      {/* Particle field */}
      <div className="absolute inset-0 dark:block hidden">
        <ParticleField />
      </div>

      {/* Light theme floating orbs */}
      <div className="absolute inset-0 dark:hidden pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, rgba(201,169,110,0.2) 0%, transparent 70%)", left: "10%", top: "20%" }}
          animate={{ x: [0, 50, -30, 0], y: [0, -40, 20, 0], scale: [1, 1.2, 0.9, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, rgba(15,118,110,0.2) 0%, transparent 70%)", right: "15%", bottom: "30%" }}
          animate={{ x: [0, -40, 20, 0], y: [0, 30, -20, 0], scale: [1, 0.9, 1.1, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div style={{ y: contentY, opacity, scale }} className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 pt-28 pb-16 max-md:pt-24 max-md:pb-10 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
            <span className="inline-flex items-center gap-2 sm:gap-3 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/80 dark:bg-white/[0.08] backdrop-blur-md border border-[#B08D4F]/15 dark:border-white/[0.1] text-[#1A1A2E]/80 dark:text-white/80 text-[10px] sm:text-[12px] font-semibold tracking-[1.5px] sm:tracking-[2px] uppercase shadow-lg shadow-[#B08D4F]/5 dark:shadow-none">
              <span className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-[#C9A96E] text-[#C9A96E]" />)}</span>
              <span className="w-px h-3.5 bg-[#B08D4F]/20 dark:bg-white/20" />
              {t.hero.badge}
              <Sparkles className="w-3 h-3 text-[#B08D4F] dark:text-[#C9A96E]" />
            </span>
          </motion.div>

          {/* Heading - massive dramatic typography */}
          <div className="mt-6 sm:mt-8 mb-5 sm:mb-7">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.4rem,8vw,6rem)] font-bold font-[family-name:var(--font-heading)] text-[#1A1A2E] dark:text-white leading-[1.05] tracking-[-0.03em]"
            >
              {t.hero.title1}
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.4rem,8vw,6rem)] font-bold font-[family-name:var(--font-heading)] leading-[1.05] tracking-[-0.03em] bg-gradient-to-r from-[#B08D4F] via-[#C9A96E] to-[#B08D4F] dark:from-[#C9A96E] dark:via-[#E8D5A8] dark:to-[#C9A96E] bg-clip-text text-transparent"
            >
              {t.hero.title2}
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-[15px] sm:text-[18px] text-[#555] dark:text-white/60 mb-8 sm:mb-12 max-w-lg leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 sm:mb-16"
          >
            <MagneticButton>
              <a href="#appointment" className="group relative flex items-center justify-center gap-3 bg-gradient-to-r from-[#C9A96E] to-[#E8D5A8] text-[#0A0A0F] font-bold font-[family-name:var(--font-heading)] py-4 sm:py-5 px-8 sm:px-10 rounded-full text-[14px] sm:text-[15px] w-full sm:w-auto transition-all duration-500 hover:shadow-[0_0_50px_rgba(201,169,110,0.35)] overflow-hidden premium-btn">
                <span className="relative z-10">{t.hero.bookBtn}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 relative z-10" />
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: ["-200%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
                />
              </a>
            </MagneticButton>
            <MagneticButton>
              <a href="https://wa.me/15550123456" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-3 bg-white/80 dark:bg-white/[0.08] backdrop-blur-md border border-[#B08D4F]/15 dark:border-white/[0.15] text-[#1A1A2E] dark:text-white font-bold font-[family-name:var(--font-heading)] py-4 sm:py-5 px-8 sm:px-10 rounded-full text-[14px] sm:text-[15px] w-full sm:w-auto transition-all duration-500 hover:bg-white dark:hover:bg-white/[0.15] hover:border-[#B08D4F]/30 dark:hover:border-white/[0.25] hover:shadow-[0_0_30px_rgba(15,118,110,0.15)]">
                <MessageCircle className="w-4 h-4" />
                {t.hero.whatsappBtn}
              </a>
            </MagneticButton>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex flex-wrap items-center gap-6 text-[#555] dark:text-white/40 text-[12px] tracking-wide uppercase"
          >
            {[
              { icon: Shield, text: "FDA Approved", color: "text-[#0F766E]" },
              { icon: Award, text: "50+ Awards", color: "text-[#B08D4F] dark:text-[#C9A96E]" },
              { icon: Star, text: "4.9 Rating", color: "text-[#B08D4F] dark:text-[#C9A96E]", fill: true },
              { icon: Zap, text: "Instant Booking", color: "text-[#0F766E]" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 + i * 0.1 }}
                className="flex items-center gap-2"
              >
                <item.icon className={`w-4 h-4 ${item.color} ${item.fill ? "fill-current" : ""}`} />
                <span>{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats bar - premium glass card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 sm:mt-24 lg:mt-32"
        >
          <div className="relative">
            {/* Glow behind stats */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#B08D4F]/5 via-[#0F766E]/5 to-[#B08D4F]/5 dark:from-[#C9A96E]/10 dark:via-[#0F766E]/10 dark:to-[#C9A96E]/10 rounded-[2.5rem] blur-2xl" />

            <div className="relative bg-white/80 dark:bg-white/[0.06] backdrop-blur-xl border border-[#B08D4F]/10 dark:border-white/[0.08] rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 gold-glow gold-border-shimmer">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8 + i * 0.1 }}
                  >
                    <AnimatedCounter {...stat} />
                  </motion.div>
                ))}
              </div>

              {/* Decorative line */}
              <div className="absolute bottom-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#B08D4F]/20 dark:via-[#C9A96E]/20 to-transparent" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Premium floating dental image on mobile */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="sm:hidden absolute bottom-24 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="relative">
          <div className="absolute -inset-3 bg-gradient-to-r from-[#C9A96E]/20 to-[#E8D5A8]/20 rounded-full blur-xl animate-pulse-ring" />
          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-white/50 shadow-xl shadow-[#C9A96E]/10">
            <Image
              src="https://images.unsplash.com/photo-1677026010083-78ec7f1b84ed?w=400&q=90&auto=format&fit=crop"
              alt="Perfect smile"
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-4 border border-dashed border-[#C9A96E]/20 rounded-full"
          />
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:block"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }} className="flex flex-col items-center gap-3">
          <span className="text-[#555] dark:text-white/30 text-[10px] tracking-[3px] uppercase">{t.hero.scroll}</span>
          <motion.div
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-[#B08D4F]/30 dark:border-white/20 flex items-start justify-center p-1.5"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-[#B08D4F] dark:bg-[#C9A96E]"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
