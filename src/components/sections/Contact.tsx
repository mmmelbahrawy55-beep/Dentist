"use client";

import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal, { StaggerChildren, StaggerItem } from "@/components/ui/ScrollReveal";
import { SplitText } from "@/components/ui/TextReveal";
import { useLang } from "@/components/ui/LanguageProvider";

export default function Contact() {
  const { t } = useLang();
  return (
    <section id="contact" className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0F766E]/[0.06] text-[#0F766E] text-[12px] font-semibold mb-5 tracking-[2px] uppercase"><span className="w-1.5 h-1.5 rounded-full bg-[#0F766E] animate-pulse" />{t.contact.badge}</span>
            <SplitText text={t.contact.title1} tag="h2" className="text-[clamp(2rem,4vw,3rem)] font-bold font-[family-name:var(--font-heading)] text-[#1A1A2E] leading-tight" />
            <SplitText text={t.contact.title2} tag="h2" className="text-[clamp(2rem,4vw,3rem)] font-bold font-[family-name:var(--font-heading)] leading-tight text-gradient mt-1" delay={0.15} />
          </div>
        </ScrollReveal>
        <div className="grid lg:grid-cols-2 gap-12">
          <ScrollReveal direction="left" distance={50}>
            <div className="space-y-5">
              <StaggerChildren stagger={0.1}>
                {[{ icon: MapPin, title: t.contact.visit, lines: t.contact.address.split("\n") }, { icon: Phone, title: t.contact.call, lines: [t.contact.phone1, t.contact.phone2] }, { icon: Mail, title: t.contact.email, lines: [t.contact.emailAddr, t.contact.emailAddr2] }, { icon: Clock, title: t.contact.hours, lines: t.contact.hoursDetail.split("\n") }].map((info) => (
                  <StaggerItem key={info.title}><div className="flex gap-4 p-5 bg-[#F5F3F0] rounded-2xl border border-[#EDE9E4] hover:bg-white hover:premium-shadow transition-all duration-500 group"><div className="w-12 h-12 rounded-xl bg-[#0F766E]/[0.06] flex items-center justify-center shrink-0 group-hover:bg-[#0F766E]/[0.1] transition-colors"><info.icon className="w-5 h-5 text-[#0F766E]" /></div><div><h4 className="font-bold font-[family-name:var(--font-heading)] text-[#1A1A2E] text-[15px] mb-1">{info.title}</h4>{info.lines.map((line, j) => <p key={j} className="text-[#555] text-[14px] leading-relaxed">{line}</p>)}</div></div></StaggerItem>
                ))}
              </StaggerChildren>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" distance={50}>
            <div className="bg-[#F5F3F0] rounded-3xl p-8 md:p-10 border border-[#EDE9E4]">
              <h3 className="text-[20px] font-bold font-[family-name:var(--font-heading)] text-[#1A1A2E] mb-6">{t.contact.badge}</h3>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><label className="block text-[12px] text-[#555] mb-2 tracking-wide uppercase">Name</label><input type="text" className="w-full px-5 py-4 rounded-xl bg-white border border-[#EDE9E4] text-[#1A1A2E] placeholder-[#999] focus:outline-none focus:ring-2 focus:ring-[#0F766E]/20 transition-colors text-[14px]" placeholder="Your name" /></div>
                  <div><label className="block text-[12px] text-[#555] mb-2 tracking-wide uppercase">Email</label><input type="email" className="w-full px-5 py-4 rounded-xl bg-white border border-[#EDE9E4] text-[#1A1A2E] placeholder-[#999] focus:outline-none focus:ring-2 focus:ring-[#0F766E]/20 transition-colors text-[14px]" placeholder="Your email" /></div>
                </div>
                <div><label className="block text-[12px] text-[#555] mb-2 tracking-wide uppercase">Message</label><textarea rows={4} className="w-full px-5 py-4 rounded-xl bg-white border border-[#EDE9E4] text-[#1A1A2E] placeholder-[#999] focus:outline-none focus:ring-2 focus:ring-[#0F766E]/20 transition-colors resize-none text-[14px]" placeholder="How can we help you?" /></div>
                <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="btn-premium w-full justify-center"><Send className="w-4 h-4" />{t.contact.sendEmail}</motion.button>
              </form>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#" className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] text-[12px] font-medium hover:bg-[#25D366]/15 transition-colors"><MessageCircle className="w-4 h-4" />WhatsApp</a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
