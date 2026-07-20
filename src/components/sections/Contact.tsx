"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle, ChevronRight, Send } from "lucide-react";
import ScrollReveal, { StaggerChildren, StaggerItem } from "@/components/ui/ScrollReveal";
import { SplitText } from "@/components/ui/TextReveal";
import { socialLinks } from "@/lib/data";
import { FacebookIcon, InstagramIcon, TwitterIcon, LinkedinIcon, YoutubeIcon } from "@/components/ui/SocialIcons";

const contactInfo = [
  { icon: MapPin, title: "Visit Us", lines: ["123 Dental Avenue, Suite 500", "Beverly Hills, CA 90210"], action: { label: "Get Directions", href: "https://maps.google.com" } },
  { icon: Phone, title: "Call Us", lines: ["+1 (555) 012-3456", "+1 (555) 012-3457"], action: { label: "Call Now", href: "tel:+15550123456" } },
  { icon: Mail, title: "Email Us", lines: ["hello@elitedental.com", "appointments@elitedental.com"], action: { label: "Send Email", href: "mailto:hello@elitedental.com" } },
  { icon: Clock, title: "Working Hours", lines: ["Mon - Fri: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM", "Sunday: Emergency Only"], action: null },
];

const quickLinks = ["Home", "About Us", "Services", "Doctors", "Gallery", "Testimonials", "Blog", "Contact"];
const serviceLinks = ["Dental Implants", "Hollywood Smile", "Veneers", "Teeth Whitening", "Orthodontics", "Root Canal"];

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white dark:bg-[#080d1a] relative overflow-hidden mesh-bg">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/[0.06] text-primary text-[13px] font-semibold mb-5 tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Contact
            </span>
            <SplitText text="Get In" tag="h2" className="text-[clamp(2rem,4vw,3.2rem)] font-bold font-[family-name:var(--font-heading)] text-text-primary dark:text-white leading-tight" />
            <SplitText text="Touch" tag="h2" className="text-[clamp(2rem,4vw,3.2rem)] font-bold font-[family-name:var(--font-heading)] leading-tight text-gradient mt-1" delay={0.15} />
          </div>
        </ScrollReveal>

        <StaggerChildren stagger={0.08}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {contactInfo.map((info) => (
              <StaggerItem key={info.title}>
                <div className="glass rounded-[1.5rem] p-6 group hover:shadow-lg transition-all duration-500 h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/[0.06] flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors duration-500">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold font-[family-name:var(--font-heading)] text-text-primary dark:text-white mb-3 text-[16px]">
                    {info.title}
                  </h3>
                  <div className="space-y-1 mb-4">
                    {info.lines.map((line) => (
                      <p key={line} className="text-[13px] text-text-secondary dark:text-slate-400 leading-relaxed">{line}</p>
                    ))}
                  </div>
                  {info.action && (
                    <a href={info.action.href} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[13px] font-semibold text-primary hover:gap-2 transition-all duration-300">
                      {info.action.label}
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerChildren>

        <ScrollReveal>
          <div className="rounded-[2rem] overflow-hidden premium-shadow-xl mb-0">
            <div className="aspect-[21/9] relative">
              <Image
                src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=1600&q=80&auto=format&fit=crop"
                alt="Beverly Hills dental clinic location"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 md:left-10 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-[15px]">123 Dental Avenue, Suite 500</p>
                  <p className="text-white/60 text-[13px]">Beverly Hills, CA 90210</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, #080d1a, #020617)" }}>
      <div className="absolute inset-0 hero-grid opacity-20" />
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="section-padding pb-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-16">
            <ScrollReveal delay={0}>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-[14px] bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20">
                    <span className="text-white font-bold text-lg font-[family-name:var(--font-heading)]">E</span>
                  </div>
                  <div>
                    <span className="text-lg font-bold font-[family-name:var(--font-heading)] leading-none block text-white">Elite</span>
                    <span className="text-[9px] tracking-[0.25em] text-primary font-semibold uppercase">Dental Clinic</span>
                  </div>
                </div>
                <p className="text-slate-500 text-[14px] leading-relaxed mb-6">
                  Transforming smiles and changing lives through exceptional dental care since 2003.
                </p>
                <div className="flex gap-2.5">
                  {[
                    { icon: FacebookIcon, href: socialLinks.facebook },
                    { icon: InstagramIcon, href: socialLinks.instagram },
                    { icon: TwitterIcon, href: socialLinks.twitter },
                    { icon: LinkedinIcon, href: socialLinks.linkedin },
                    { icon: YoutubeIcon, href: socialLinks.youtube },
                  ].map((social) => (
                    <motion.a
                      key={social.href}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-10 h-10 rounded-xl bg-white/[0.04] flex items-center justify-center hover:bg-primary/15 hover:text-primary text-slate-500 transition-colors duration-300"
                    >
                      <social.icon className="w-4 h-4" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div>
                <h3 className="font-bold font-[family-name:var(--font-heading)] text-white text-[16px] mb-6">Quick Links</h3>
                <ul className="space-y-2.5">
                  {quickLinks.map((link) => (
                    <li key={link}>
                      <a href={`#${link.toLowerCase().replace(" ", "")}`} className="text-slate-500 text-[14px] hover:text-primary transition-colors duration-300 inline-flex items-center gap-2 hover:gap-3">
                        <ChevronRight className="w-3 h-3" />
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div>
                <h3 className="font-bold font-[family-name:var(--font-heading)] text-white text-[16px] mb-6">Our Services</h3>
                <ul className="space-y-2.5">
                  {serviceLinks.map((link) => (
                    <li key={link}>
                      <a href="#services" className="text-slate-500 text-[14px] hover:text-primary transition-colors duration-300 inline-flex items-center gap-2 hover:gap-3">
                        <ChevronRight className="w-3 h-3" />
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div>
                <h3 className="font-bold font-[family-name:var(--font-heading)] text-white text-[16px] mb-6">Newsletter</h3>
                <p className="text-slate-500 text-[14px] mb-4 leading-relaxed">
                  Subscribe for dental tips, special offers, and clinic updates.
                </p>
                <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/20 text-[14px] transition-all duration-300"
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center hover:bg-primary-dark transition-colors shrink-0"
                  >
                    <Send className="w-4 h-4 text-white" />
                  </motion.button>
                </form>
                <div className="mt-5 flex items-center gap-2">
                  <a href="https://wa.me/15550123456" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#25D366]/[0.08] text-[#25D366] text-[13px] font-medium hover:bg-[#25D366]/15 transition-colors">
                    <MessageCircle className="w-3.5 h-3.5" />
                    WhatsApp
                  </a>
                  <a href="tel:+15550123456"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/[0.06] text-primary text-[13px] font-medium hover:bg-primary/10 transition-colors">
                    <Phone className="w-3.5 h-3.5" />
                    Call Now
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="border-t border-white/[0.04] py-6">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-600 text-[13px]">
              &copy; {new Date().getFullYear()} Elite Dental Clinic. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-slate-600 text-[13px] hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-600 text-[13px] hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
