"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  ChevronRight,
  Send,
} from "lucide-react";
import { FacebookIcon, InstagramIcon, TwitterIcon, LinkedinIcon, YoutubeIcon } from "@/components/ui/SocialIcons";
import SectionTitle from "@/components/ui/SectionTitle";
import { socialLinks } from "@/lib/data";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["123 Dental Avenue, Suite 500", "Beverly Hills, CA 90210"],
    action: { label: "Get Directions", href: "https://maps.google.com" },
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+1 (555) 012-3456", "+1 (555) 012-3457"],
    action: { label: "Call Now", href: "tel:+15550123456" },
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["hello@elitedental.com", "appointments@elitedental.com"],
    action: { label: "Send Email", href: "mailto:hello@elitedental.com" },
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Mon - Fri: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM", "Sunday: Emergency Only"],
    action: null,
  },
];

const quickLinks = [
  "Home", "About Us", "Services", "Doctors",
  "Gallery", "Testimonials", "Blog", "Contact",
];

const serviceLinks = [
  "Dental Implants", "Hollywood Smile", "Veneers",
  "Teeth Whitening", "Orthodontics", "Root Canal",
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white dark:bg-[#0a1628] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle
          badge="Contact"
          title="Get In"
          highlight="Touch"
          description="Have questions? We'd love to hear from you. Reach out through any of the channels below."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, i) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-3xl p-6 group hover:premium-shadow transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <info.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold font-[family-name:var(--font-heading)] text-text-primary dark:text-white mb-3">
                {info.title}
              </h3>
              <div className="space-y-1 mb-4">
                {info.lines.map((line) => (
                  <p key={line} className="text-sm text-text-secondary dark:text-slate-400">
                    {line}
                  </p>
                ))}
              </div>
              {info.action && (
                <a
                  href={info.action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all"
                >
                  {info.action.label}
                  <ChevronRight className="w-4 h-4" />
                </a>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden premium-shadow mb-16"
        >
          <div className="aspect-[21/9] bg-gradient-to-br from-primary/10 to-secondary/10 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary/30 mx-auto mb-3" />
                <p className="text-text-secondary dark:text-slate-400 font-medium">Interactive Google Map</p>
                <p className="text-text-light dark:text-slate-500 text-sm mt-1">123 Dental Avenue, Beverly Hills, CA 90210</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="section-padding pb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <span className="text-white font-bold text-lg font-[family-name:var(--font-heading)]">E</span>
                </div>
                <div>
                  <span className="text-lg font-bold font-[family-name:var(--font-heading)] leading-none block">
                    Elite
                  </span>
                  <span className="text-[10px] tracking-[0.2em] text-primary font-semibold uppercase">
                    Dental Clinic
                  </span>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Transforming smiles and changing lives through exceptional dental care since 2003.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: FacebookIcon, href: socialLinks.facebook },
                  { icon: InstagramIcon, href: socialLinks.instagram },
                  { icon: TwitterIcon, href: socialLinks.twitter },
                  { icon: LinkedinIcon, href: socialLinks.linkedin },
                  { icon: YoutubeIcon, href: socialLinks.youtube },
                ].map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="font-bold font-[family-name:var(--font-heading)] text-lg mb-6">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(" ", "")}`}
                      className="text-slate-400 text-sm hover:text-primary transition-colors inline-flex items-center gap-2 hover:gap-3"
                    >
                      <ChevronRight className="w-3 h-3" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="font-bold font-[family-name:var(--font-heading)] text-lg mb-6">
                Our Services
              </h3>
              <ul className="space-y-3">
                {serviceLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#services"
                      className="text-slate-400 text-sm hover:text-primary transition-colors inline-flex items-center gap-2 hover:gap-3"
                    >
                      <ChevronRight className="w-3 h-3" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="font-bold font-[family-name:var(--font-heading)] text-lg mb-6">
                Newsletter
              </h3>
              <p className="text-slate-400 text-sm mb-4">
                Subscribe for dental tips, special offers, and clinic updates.
              </p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm"
                />
                <button
                  type="submit"
                  className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center hover:bg-primary-dark transition-colors shrink-0"
                >
                  <Send className="w-4 h-4 text-white" />
                </button>
              </form>
              <div className="mt-6 flex items-center gap-2">
                <a
                  href="https://wa.me/15550123456"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#25D366]/10 text-[#25D366] text-sm font-medium hover:bg-[#25D366]/20 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
                <a
                  href="tel:+15550123456"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} Elite Dental Clinic. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-slate-500 text-sm hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-500 text-sm hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
