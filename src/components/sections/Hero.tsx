"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MessageCircle, Star, Shield, Award, Sparkles, ChevronDown } from "lucide-react";
import { SplitText } from "@/components/ui/TextReveal";
import ScrollReveal, { StaggerChildren, StaggerItem } from "@/components/ui/ScrollReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { stats } from "@/lib/data";

export default function Hero() {
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
        className="absolute inset-0 bg-[#020617]"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c4a6e]/80 via-[#0e7490]/60 to-[#0d9488]/50" />
        <div className="absolute inset-0 hero-grid opacity-100" />

        <div className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] bg-primary/15 rounded-full blur-[120px] animate-blob" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-secondary/15 rounded-full blur-[120px] animate-blob" style={{ animationDelay: "3s" }} />
        <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-accent/8 rounded-full blur-[100px] animate-blob" style={{ animationDelay: "5s" }} />

        <div className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </motion.div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-white/[0.03]"
            style={{
              width: [60, 90, 45, 75, 55, 85][i],
              height: [60, 90, 45, 75, 55, 85][i],
              left: `${[8, 75, 25, 85, 50, 15][i]}%`,
              top: `${[15, 55, 80, 25, 45, 70][i]}%`,
            }}
            animate={{
              y: [0, -25, 0],
              rotate: [0, 90, 180],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: [7, 9, 8, 10, 6, 11][i],
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        style={{ y: contentY, opacity, scale }}
        className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 pt-36 pb-20 w-full"
      >
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.06] backdrop-blur-sm border border-white/[0.08] text-white/80 text-[13px] font-medium tracking-wide">
                <span className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                  ))}
                </span>
                <span className="w-px h-3.5 bg-white/20" />
                #1 Rated Dental Clinic
              </span>
            </motion.div>

            <div className="mt-8 mb-7">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <SplitText
                  text="Your Perfect"
                  tag="h1"
                  className="text-[clamp(2.5rem,6vw,5rem)] font-bold font-[family-name:var(--font-heading)] text-white leading-[1.05] tracking-tight"
                  delay={0.4}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.7 }}
              >
                <SplitText
                  text="Smile Awaits"
                  tag="h1"
                  className="text-[clamp(2.5rem,6vw,5rem)] font-bold font-[family-name:var(--font-heading)] leading-[1.05] tracking-tight text-gradient"
                  delay={0.7}
                />
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1 }}
              className="text-[17px] text-white/55 mb-10 max-w-lg leading-relaxed"
            >
              Experience world-class dental care where cutting-edge technology meets luxury comfort. Our
              award-winning specialists craft smiles that change lives.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 mb-14"
            >
              <MagneticButton strength={0.2}>
                <a href="#appointment" className="btn-premium text-[15px] py-4 px-8 rounded-2xl bg-white text-[#0c4a6e] shadow-2xl shadow-black/20 hover:shadow-black/30"
                  style={{ boxShadow: "0 20px 60px -10px rgba(0,0,0,0.3)" }}>
                  Book Appointment
                  <ArrowRight className="w-5 h-5" />
                </a>
              </MagneticButton>
              <MagneticButton strength={0.2}>
                <a href="https://wa.me/15550123456" target="_blank" rel="noopener noreferrer"
                  className="btn-premium text-[15px] py-4 px-8 rounded-2xl bg-[#25D366] shadow-2xl"
                  style={{ boxShadow: "0 20px 60px -10px rgba(37,211,102,0.3)" }}>
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </a>
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.4 }}
              className="flex flex-wrap items-center gap-5 text-white/40 text-[13px]"
            >
              {[
                { icon: Shield, text: "FDA Approved", color: "text-secondary-light" },
                { icon: Award, text: "50+ Awards", color: "text-accent" },
                { icon: Star, text: "4.9 Rating", color: "text-accent", fill: true },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <item.icon className={`w-4 h-4 ${item.color} ${item.fill ? "fill-current" : ""}`} />
                  <span>{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative perspective-2000">
              <motion.div
                animate={{ rotateY: [-3, 3, -3], rotateX: [2, -2, 2] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d" }}
                className="relative"
              >
                <div className="absolute -inset-8 bg-gradient-to-r from-primary/25 to-secondary/25 rounded-[2.5rem] blur-3xl" />
                <div className="relative rounded-[2rem] border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm overflow-hidden">
                  <div className="aspect-[4/5] bg-gradient-to-br from-white/[0.08] to-white/[0.02] flex items-center justify-center">
                    <svg className="w-28 h-28 text-white/10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>

                  <motion.div
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-8 -right-6 glass rounded-2xl px-5 py-4 border border-white/[0.08]"
                    style={{ transform: "translateZ(40px)" }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-green-500/15 flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white text-sm font-bold">15,000+</p>
                        <p className="text-white/40 text-[11px]">Happy Patients</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-16 -left-6 glass rounded-2xl px-5 py-4 border border-white/[0.08]"
                    style={{ transform: "translateZ(30px)" }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-accent/15 flex items-center justify-center">
                        <Award className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-white text-sm font-bold">Award Winning</p>
                        <p className="text-white/40 text-[11px]">Best Clinic 2024</p>
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
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-20 lg:mt-28"
        >
          <div className="glass rounded-3xl p-8 md:p-10 border border-white/[0.06]">
            <StaggerChildren stagger={0.1} delay={1.8}>
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-white/30 text-[11px] tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4 text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
