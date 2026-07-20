"use client";

import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal, { StaggerChildren, StaggerItem } from "@/components/ui/ScrollReveal";
import { SplitText } from "@/components/ui/TextReveal";
import { useLang } from "@/components/ui/LanguageProvider";

export default function Contact() {
  const { t } = useLang();
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E]/20 to-transparent" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-20 md:mb-24">
            <span className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#C9A96E]/20 bg-[#C9A96E]/[0.05] text-[#C9A96E] text-[12px] font-semibold mb-6 tracking-[3px] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] animate-pulse" />
              {t.contact.badge}
            </span>
            <SplitText
              text={t.contact.title1}
              tag="h2"
              className="text-[clamp(2rem,4vw,3.5rem)] font-bold font-[family-name:var(--font-heading)] text-white leading-tight tracking-[-0.02em]"
            />
            <SplitText
              text={t.contact.title2}
              tag="h2"
              className="text-[clamp(2rem,4vw,3.5rem)] font-bold font-[family-name:var(--font-heading)] leading-tight text-gradient-gold mt-1 tracking-[-0.02em]"
              delay={0.15}
            />
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          <ScrollReveal direction="left" distance={50}>
            <div className="space-y-6">
              <StaggerChildren stagger={0.1}>
                {[
                  { icon: MapPin, title: t.contact.visit, lines: t.contact.address.split("\n"), action: t.contact.directions },
                  { icon: Phone, title: t.contact.call, lines: [t.contact.phone1, t.contact.phone2], action: t.contact.callNow },
                  { icon: Mail, title: t.contact.email, lines: [t.contact.emailAddr, t.contact.emailAddr2], action: t.contact.sendEmail },
                  { icon: Clock, title: t.contact.hours, lines: t.contact.hoursDetail.split("\n") },
                ].map((info) => (
                  <StaggerItem key={info.title}>
                    <div className="flex gap-5 p-6 glass rounded-2xl gold-border-glow hover:bg-[#C9A96E]/[0.03] transition-all duration-700 group">
                      <div className="w-14 h-14 rounded-xl bg-[#C9A96E]/10 flex items-center justify-center shrink-0 group-hover:bg-[#C9A96E]/15 transition-colors">
                        <info.icon className="w-6 h-6 text-[#C9A96E]" />
                      </div>
                      <div>
                        <h4 className="font-bold font-[family-name:var(--font-heading)] text-white text-[15px] mb-1">
                          {info.title}
                        </h4>
                        {info.lines.map((line, j) => (
                          <p key={j} className="text-[#888] text-[14px] leading-relaxed">{line}</p>
                        ))}
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" distance={50}>
            <div className="glass rounded-3xl p-8 md:p-10 gold-border-glow">
              <h3 className="text-[22px] font-bold font-[family-name:var(--font-heading)] text-white mb-8">
                {t.contact.badge}
              </h3>
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[12px] text-[#888] mb-2 tracking-wide uppercase">Name</label>
                    <input
                      type="text"
                      className="w-full px-5 py-4 rounded-xl bg-[#0A0A0A] border border-[#C9A96E]/10 text-white placeholder-[#555] focus:outline-none focus:border-[#C9A96E]/30 transition-colors text-[14px]"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] text-[#888] mb-2 tracking-wide uppercase">Email</label>
                    <input
                      type="email"
                      className="w-full px-5 py-4 rounded-xl bg-[#0A0A0A] border border-[#C9A96E]/10 text-white placeholder-[#555] focus:outline-none focus:border-[#C9A96E]/30 transition-colors text-[14px]"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[12px] text-[#888] mb-2 tracking-wide uppercase">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-5 py-4 rounded-xl bg-[#0A0A0A] border border-[#C9A96E]/10 text-white placeholder-[#555] focus:outline-none focus:border-[#C9A96E]/30 transition-colors text-[14px]"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="block text-[12px] text-[#888] mb-2 tracking-wide uppercase">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-5 py-4 rounded-xl bg-[#0A0A0A] border border-[#C9A96E]/10 text-white placeholder-[#555] focus:outline-none focus:border-[#C9A96E]/30 transition-colors resize-none text-[14px]"
                    placeholder="How can we help you?"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-premium w-full justify-center"
                >
                  <Send className="w-4 h-4" />
                  {t.contact.sendEmail}
                </motion.button>
              </form>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#" className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass gold-border-glow text-[#C9A96E] text-[12px] font-medium hover:bg-[#C9A96E]/[0.05] transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
