"use client";

import { Heart, MapPin, Phone, Mail, ChevronRight } from "lucide-react";
import { useLang } from "@/components/ui/LanguageProvider";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { services } from "@/lib/data";

const quickLinks = ["home", "about", "services", "gallery", "doctors", "contact"] as const;

export default function Footer() {
  const { t, lang } = useLang();
  return (
    <footer className="relative overflow-hidden border-t border-[#C9A96E]/10">
      <div className="absolute inset-0 mesh-bg" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <ScrollReveal>
          <div className="section-padding pb-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
              <div className="lg:col-span-1">
                <h3 className="text-[28px] font-bold font-[family-name:var(--font-heading)] text-white mb-4 tracking-tight">
                  Elite Dental
                </h3>
                <p className="text-[14px] text-[#777] leading-relaxed mb-6">{t.footer.desc}</p>
                <div className="flex gap-3">
                  {["F", "I", "T", "L", "Y"].map((letter, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-[#C9A96E]/10 transition-colors border border-[#C9A96E]/10 group"
                    >
                      <span className="text-[#666] group-hover:text-[#C9A96E] transition-colors text-[11px] font-bold">
                        {letter}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold font-[family-name:var(--font-heading)] text-white text-[15px] mb-6">
                  {t.footer.quickLinks}
                </h4>
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link}>
                      <a
                        href={`#${link}`}
                        className="flex items-center gap-2 text-[14px] text-[#888] hover:text-[#C9A96E] transition-colors group"
                      >
                        <ChevronRight className="w-3 h-3 text-[#C9A96E]/40 group-hover:text-[#C9A96E] transition-colors" />
                        {t.nav[link]}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold font-[family-name:var(--font-heading)] text-white text-[15px] mb-6">
                  {t.footer.ourServices}
                </h4>
                <ul className="space-y-3">
                  {services.map((service) => (
                    <li key={service.title}>
                      <a href="#services" className="flex items-center gap-2 text-[14px] text-[#888] hover:text-[#C9A96E] transition-colors group">
                        <ChevronRight className="w-3 h-3 text-[#C9A96E]/40 group-hover:text-[#C9A96E] transition-colors" />
                        {service.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold font-[family-name:var(--font-heading)] text-white text-[15px] mb-6">
                  {t.contact.call}
                </h4>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-[14px] text-[#888]">
                    <MapPin className="w-4 h-4 text-[#C9A96E] shrink-0 mt-0.5" />
                    {t.contact.address.split("\n")[0]}
                  </li>
                  <li className="flex gap-3 text-[14px] text-[#888]">
                    <Phone className="w-4 h-4 text-[#C9A96E] shrink-0 mt-0.5" />
                    {t.contact.phone1}
                  </li>
                  <li className="flex gap-3 text-[14px] text-[#888]">
                    <Mail className="w-4 h-4 text-[#C9A96E] shrink-0 mt-0.5" />
                    {t.contact.emailAddr}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="border-t border-[#C9A96E]/10 px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[13px] text-[#666]">
              &copy; {new Date().getFullYear()} Elite Dental. {t.footer.rights}
            </p>
            <div className="flex items-center gap-1 text-[13px] text-[#666]">
              <span>Made with</span>
              <Heart className="w-3.5 h-3.5 fill-[#C9A96E] text-[#C9A96E]" />
              <span>Premium Quality</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
