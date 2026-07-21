"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight, MessageCircle, Star, Shield, Award, ChevronDown } from "lucide-react";
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

  return (
    <section ref={containerRef} id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0A0F]">
      {/* Full-screen background image */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1677026010083-78ec7f1b84ed?w=1920&q=90&auto=format&fit=crop"
          alt="Perfect white smile"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0F]/95 via-[#0A0A0F]/70 to-[#0A0A0F]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F]/80 via-transparent to-[#0A0A0F]/30" />
      </motion.div>

      {/* Floating sparkle dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#C9A96E]/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <motion.div style={{ y: contentY, opacity }} className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 pt-32 pb-20 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
            <span className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/[0.1] text-white/80 text-[12px] font-semibold tracking-[2px] uppercase">
              <span className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-[#C9A96E] text-[#C9A96E]" />)}</span>
              <span className="w-px h-3.5 bg-white/20" />
              {t.hero.badge}
            </span>
          </motion.div>

          {/* Heading */}
          <div className="mt-8 mb-7">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-[clamp(2.8rem,7vw,5.5rem)] font-bold font-[family-name:var(--font-heading)] text-white leading-[1.05] tracking-[-0.03em]"
            >
              {t.hero.title1}
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-[clamp(2.8rem,7vw,5.5rem)] font-bold font-[family-name:var(--font-heading)] leading-[1.05] tracking-[-0.03em] bg-gradient-to-r from-[#C9A96E] via-[#E8D5A8] to-[#C9A96E] bg-clip-text text-transparent"
            >
              {t.hero.title2}
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-[17px] text-white/60 mb-10 max-w-lg leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 mb-14"
          >
            <a href="#appointment" className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#C9A96E] to-[#E8D5A8] text-[#0A0A0F] font-bold font-[family-name:var(--font-heading)] py-4 px-8 rounded-full text-[14px] transition-all duration-500 hover:shadow-[0_0_40px_rgba(201,169,110,0.3)] hover:scale-105">
              {t.hero.bookBtn}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="https://wa.me/15550123456" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 bg-white/[0.08] backdrop-blur-md border border-white/[0.15] text-white font-bold font-[family-name:var(--font-heading)] py-4 px-8 rounded-full text-[14px] transition-all duration-500 hover:bg-white/[0.15] hover:border-white/[0.25]">
              <MessageCircle className="w-4 h-4" />
              {t.hero.whatsappBtn}
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex flex-wrap items-center gap-6 text-white/40 text-[12px] tracking-wide uppercase"
          >
            {[
              { icon: Shield, text: "FDA Approved", color: "text-[#0F766E]" },
              { icon: Award, text: "50+ Awards", color: "text-[#C9A96E]" },
              { icon: Star, text: "4.9 Rating", color: "text-[#C9A96E]", fill: true }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <item.icon className={`w-4 h-4 ${item.color} ${item.fill ? "fill-current" : ""}`} />
                <span>{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-20 lg:mt-28"
        >
          <div className="bg-white/[0.06] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-8 md:p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <AnimatedCounter key={stat.label} {...stat} />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="flex flex-col items-center gap-2">
          <span className="text-white/30 text-[10px] tracking-[3px] uppercase">{t.hero.scroll}</span>
          <ChevronDown className="w-4 h-4 text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
