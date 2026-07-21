"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, MapPin, Phone, Mail, ChevronRight, Send, ArrowRight } from "lucide-react";
import { useLang } from "@/components/ui/LanguageProvider";
import { services, socialLinks } from "@/lib/data";
import { FacebookIcon, InstagramIcon, TwitterIcon, LinkedinIcon, YoutubeIcon } from "@/components/ui/SocialIcons";

const quickLinks = ["home", "about", "services", "gallery", "doctors", "contact"] as const;
const socialIcons = [
  { icon: FacebookIcon, href: socialLinks.facebook, label: "Facebook" },
  { icon: InstagramIcon, href: socialLinks.instagram, label: "Instagram" },
  { icon: TwitterIcon, href: socialLinks.twitter, label: "Twitter" },
  { icon: LinkedinIcon, href: socialLinks.linkedin, label: "LinkedIn" },
  { icon: YoutubeIcon, href: socialLinks.youtube, label: "YouTube" },
];

export default function Footer() {
  const { t } = useLang();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-[#050508] border-t border-white/[0.04] relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#C9A96E]/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="section-padding pb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
            {/* Brand + Newsletter */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-[14px] bg-gradient-to-br from-[#C9A96E] to-[#E8D5A8] flex items-center justify-center shadow-lg shadow-[#C9A96E]/20">
                  <span className="text-[#0A0A0F] font-bold text-xl font-[family-name:var(--font-heading)]">E</span>
                </div>
                <div>
                  <span className="text-xl font-bold font-[family-name:var(--font-heading)] text-white leading-none block tracking-tight">Elite</span>
                  <span className="text-[9px] tracking-[0.25em] text-[#C9A96E] font-semibold uppercase">Dental Clinic</span>
                </div>
              </div>
              <p className="text-[14px] text-white/40 leading-relaxed mb-8 max-w-sm">{t.footer.desc}</p>

              {/* Newsletter */}
              <div className="bg-white/[0.03] rounded-2xl p-6 border border-white/[0.06]">
                <h4 className="font-bold font-[family-name:var(--font-heading)] text-white text-[15px] mb-2">Stay Updated</h4>
                <p className="text-[13px] text-white/40 mb-4">Get the latest dental tips and exclusive offers.</p>
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white placeholder-white/30 text-[13px] focus:outline-none focus:ring-2 focus:ring-[#C9A96E]/20 focus:border-[#C9A96E]/30 transition-all"
                    required
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#C9A96E] to-[#E8D5A8] flex items-center justify-center text-[#0A0A0F] shrink-0"
                  >
                    {subscribed ? (
                      <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-sm">✓</motion.span>
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                  </motion.button>
                </form>
                {subscribed && (
                  <motion.p initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="text-[#C9A96E] text-[12px] mt-2">
                    Thanks for subscribing!
                  </motion.p>
                )}
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2 lg:col-start-7">
              <h4 className="font-bold font-[family-name:var(--font-heading)] text-white text-[15px] mb-5">{t.footer.quickLinks}</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <a href={`#${link}`} className="flex items-center gap-2 text-[14px] text-white/40 hover:text-[#C9A96E] transition-colors group">
                      <ChevronRight className="w-3 h-3 text-[#C9A96E]/40 group-hover:text-[#C9A96E] transition-colors group-hover:translate-x-0.5 transition-transform" />
                      {t.nav[link]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="lg:col-span-2">
              <h4 className="font-bold font-[family-name:var(--font-heading)] text-white text-[15px] mb-5">{t.footer.ourServices}</h4>
              <ul className="space-y-3">
                {services.slice(0, 6).map((s) => (
                  <li key={s.title}>
                    <a href="#services" className="flex items-center gap-2 text-[14px] text-white/40 hover:text-[#C9A96E] transition-colors group">
                      <ChevronRight className="w-3 h-3 text-[#C9A96E]/40 group-hover:text-[#C9A96E] transition-colors group-hover:translate-x-0.5 transition-transform" />
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-3">
              <h4 className="font-bold font-[family-name:var(--font-heading)] text-white text-[15px] mb-5">{t.contact.call}</h4>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3 text-[14px] text-white/40">
                  <MapPin className="w-4 h-4 text-[#C9A96E] shrink-0 mt-0.5" />
                  {t.contact.address.split("\n")[0]}
                </li>
                <li className="flex gap-3 text-[14px] text-white/40">
                  <Phone className="w-4 h-4 text-[#C9A96E] shrink-0 mt-0.5" />
                  {t.contact.phone1}
                </li>
                <li className="flex gap-3 text-[14px] text-white/40">
                  <Mail className="w-4 h-4 text-[#C9A96E] shrink-0 mt-0.5" />
                  {t.contact.emailAddr}
                </li>
              </ul>

              {/* Social Icons */}
              <div className="flex gap-2">
                {socialIcons.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-white/40 hover:text-[#C9A96E] hover:bg-[#C9A96E]/10 hover:border-[#C9A96E]/20 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.04] px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[13px] text-white/25">&copy; {new Date().getFullYear()} Elite Dental. {t.footer.rights}</p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-[12px] text-white/25 hover:text-[#C9A96E] transition-colors">Privacy Policy</a>
              <a href="#" className="text-[12px] text-white/25 hover:text-[#C9A96E] transition-colors">Terms of Service</a>
              <div className="flex items-center gap-1 text-[13px] text-white/25">
                <span>Made with</span>
                <Heart className="w-3.5 h-3.5 fill-[#C9A96E] text-[#C9A96E]" />
                <span>Premium Quality</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
