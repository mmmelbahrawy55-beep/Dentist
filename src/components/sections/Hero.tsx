"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight, MessageCircle, Star, Shield, Award, Sparkles, Zap } from "lucide-react";
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
    <section ref={containerRef} id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0A0F]">
      {/* Background image with Ken Burns and gradient overlays */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <div className="absolute inset-0 animate-kenburns">
          <Image
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=90&auto=format&fit=crop"
            alt="Premium dental clinic interior"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-[#0A0A0F]/[0.78]" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#C9A96E]/[0.06] via-transparent to-emerald-500/[0.03]" />
        <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-[#C9A96E]/[0.05] rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-full h-[40vh] bg-gradient-to-t from-[#0A0A0F] to-transparent" />
      </motion.div>

      {/* Particle field */}
      <div className="absolute inset-0">
        <ParticleField />
      </div>

      <motion.div style={{ y: contentY, opacity, scale }} className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 pt-28 pb-16 max-md:pt-24 max-md:pb-10 w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="max-w-3xl">
            {/* Badge */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
              <span className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/[0.06] backdrop-blur-md border border-white/[0.08] text-white/70 text-[10px] sm:text-[11px] font-semibold tracking-[2px] uppercase">
                <span className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-[#C9A96E] text-[#C9A96E]" />)}</span>
                <span className="w-px h-3.5 bg-white/15" />
                {t.hero.badge}
                <Sparkles className="w-3 h-3 text-[#C9A96E]" />
              </span>
            </motion.div>

            {/* Heading */}
            <div className="mt-6 sm:mt-8 mb-5 sm:mb-7">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(2.4rem,7vw,5.5rem)] font-bold font-[family-name:var(--font-heading)] text-white leading-[1.05] tracking-[-0.03em]"
              >
                {t.hero.title1}
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(2.4rem,7vw,5.5rem)] font-bold font-[family-name:var(--font-heading)] leading-[1.05] tracking-[-0.03em] bg-gradient-to-r from-[#C9A96E] via-[#E8D5A8] to-[#C9A96E] bg-clip-text text-transparent"
              >
                {t.hero.title2}
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-[15px] sm:text-[17px] text-white/45 mb-8 sm:mb-10 max-w-lg leading-relaxed"
            >
              {t.hero.subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-14"
            >
              <MagneticButton>
                <a href="#appointment" className="group relative flex items-center justify-center gap-3 bg-gradient-to-r from-[#C9A96E] to-[#E8D5A8] text-[#0A0A0F] font-bold font-[family-name:var(--font-heading)] py-4 sm:py-4.5 px-8 sm:px-10 rounded-xl text-[14px] sm:text-[15px] w-full sm:w-auto transition-all duration-500 hover:shadow-[0_0_50px_rgba(201,169,110,0.35)] overflow-hidden premium-btn">
                  <span className="relative z-10">{t.hero.bookBtn}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 relative z-10" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ x: ["-200%", "200%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
                  />
                </a>
              </MagneticButton>
              <MagneticButton>
                <a href="https://wa.me/15550123456" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-3 bg-white/[0.06] backdrop-blur-md border border-white/[0.1] text-white font-bold font-[family-name:var(--font-heading)] py-4 sm:py-4.5 px-8 sm:px-10 rounded-xl text-[14px] sm:text-[15px] w-full sm:w-auto transition-all duration-500 hover:bg-white/[0.1] hover:border-white/[0.2] hover:shadow-[0_0_30px_rgba(15,118,110,0.15)]">
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
              className="flex flex-wrap items-center gap-x-5 sm:gap-x-6 gap-y-2 sm:gap-y-3 text-white/30 text-[10px] sm:text-[11px] tracking-wide uppercase"
            >
              {[
                { icon: Shield, text: "FDA Approved", color: "text-emerald-400" },
                { icon: Award, text: "50+ Awards", color: "text-[#C9A96E]" },
                { icon: Star, text: "4.9 Rating", color: "text-[#C9A96E]", fill: true },
                { icon: Zap, text: "Instant Booking", color: "text-emerald-400" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5 + i * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <item.icon className={`w-3.5 h-3.5 ${item.color} ${item.fill ? "fill-current" : ""}`} />
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Floating Image Card */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block relative"
          >
            <div className="relative">
              {/* Glow behind card */}
              <div className="absolute -inset-8 bg-[#C9A96E]/10 rounded-[2rem] blur-3xl" />

              {/* Main card */}
              <div className="relative w-[420px] h-[520px] rounded-[2rem] overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/40">
                <Image
                  src="https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=800&q=90&auto=format&fit=crop"
                  alt="Modern dental clinic"
                  fill
                  className="object-cover"
                  priority
                  sizes="420px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Top badge */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 }}
                  className="absolute top-5 right-5 flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/[0.1] text-white text-[12px] font-semibold"
                >
                  <Award className="w-3.5 h-3.5 text-[#C9A96E]" />
                  {new Date().getFullYear()}
                </motion.div>

                {/* Bottom label */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8 }}
                  className="absolute bottom-6 left-6 right-6"
                >
                  <div className="flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-white/[0.08] backdrop-blur-md border border-white/[0.1]">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C9A96E] to-[#E8D5A8] flex items-center justify-center shrink-0">
                      <Sparkles className="w-5 h-5 text-[#0A0A0F]" />
                    </div>
                    <div>
                      <p className="text-[9px] text-white/40 uppercase tracking-[2px] font-medium">Speciality</p>
                      <p className="text-white text-[14px] font-bold">Elite Dental Care</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Floating accent dot */}
              <motion.div
                animate={{ y: [0, -8, 0], opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-6 top-1/3 w-3 h-3 rounded-full bg-[#C9A96E]/50"
              />
              <motion.div
                animate={{ y: [0, 6, 0], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-4 bottom-1/3 w-2 h-2 rounded-full bg-emerald-400/40"
              />
            </div>
          </motion.div>

          {/* Mobile: Floating image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="lg:hidden relative"
          >
            <div className="relative mx-auto w-full max-w-[360px]">
              <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/40">
                <Image
                  src="https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=800&q=90&auto=format&fit=crop"
                  alt="Modern dental clinic"
                  fill
                  className="object-cover"
                  priority
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {/* Top badge */}
                <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/[0.1] text-white text-[11px] font-semibold">
                  <Award className="w-3 h-3 text-[#C9A96E]" />
                  {new Date().getFullYear()}
                </div>
                {/* Bottom label */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/[0.08] backdrop-blur-md border border-white/[0.1]">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#C9A96E] to-[#E8D5A8] flex items-center justify-center shrink-0">
                      <Sparkles className="w-4 h-4 text-[#0A0A0F]" />
                    </div>
                    <div>
                      <p className="text-[8px] text-white/40 uppercase tracking-[2px] font-medium">Speciality</p>
                      <p className="text-white text-[13px] font-bold">Elite Dental Care</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 sm:mt-20 lg:mt-28"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-[#C9A96E]/5 rounded-[2rem] blur-2xl" />
            <div className="relative bg-white/[0.04] backdrop-blur-xl border border-white/[0.06] rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 gold-glow">
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
              <div className="absolute bottom-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E]/15 to-transparent" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:block"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }} className="flex flex-col items-center gap-3">
          <span className="text-white/20 text-[10px] tracking-[3px] uppercase">{t.hero.scroll}</span>
          <motion.div
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/15 flex items-start justify-center p-1.5"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
