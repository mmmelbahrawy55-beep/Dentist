"use client";

import { Heart, MapPin, Phone, Mail, ChevronRight } from "lucide-react";
import { useLang } from "@/components/ui/LanguageProvider";
import { services } from "@/lib/data";

const quickLinks = ["home", "about", "services", "gallery", "doctors", "contact"] as const;

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="bg-[#0A0A0F] border-t border-white/[0.06] relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#C9A96E]/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="section-padding pb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="lg:col-span-1">
              <h3 className="text-[26px] font-bold font-[family-name:var(--font-heading)] text-white mb-4 tracking-tight">Elite Dental</h3>
              <p className="text-[14px] text-white/40 leading-relaxed mb-6">{t.footer.desc}</p>
            </div>
            <div>
              <h4 className="font-bold font-[family-name:var(--font-heading)] text-white text-[15px] mb-5">{t.footer.quickLinks}</h4>
              <ul className="space-y-3">{quickLinks.map((link) => <li key={link}><a href={`#${link}`} className="flex items-center gap-2 text-[14px] text-white/40 hover:text-[#C9A96E] transition-colors group"><ChevronRight className="w-3 h-3 text-[#C9A96E]/60 group-hover:text-[#C9A96E] transition-colors" />{t.nav[link]}</a></li>)}</ul>
            </div>
            <div>
              <h4 className="font-bold font-[family-name:var(--font-heading)] text-white text-[15px] mb-5">{t.footer.ourServices}</h4>
              <ul className="space-y-3">{services.map((s) => <li key={s.title}><a href="#services" className="flex items-center gap-2 text-[14px] text-white/40 hover:text-[#C9A96E] transition-colors group"><ChevronRight className="w-3 h-3 text-[#C9A96E]/60 group-hover:text-[#C9A96E] transition-colors" />{s.title}</a></li>)}</ul>
            </div>
            <div>
              <h4 className="font-bold font-[family-name:var(--font-heading)] text-white text-[15px] mb-5">{t.contact.call}</h4>
              <ul className="space-y-4">
                <li className="flex gap-3 text-[14px] text-white/40"><MapPin className="w-4 h-4 text-[#C9A96E] shrink-0 mt-0.5" />{t.contact.address.split("\n")[0]}</li>
                <li className="flex gap-3 text-[14px] text-white/40"><Phone className="w-4 h-4 text-[#C9A96E] shrink-0 mt-0.5" />{t.contact.phone1}</li>
                <li className="flex gap-3 text-[14px] text-white/40"><Mail className="w-4 h-4 text-[#C9A96E] shrink-0 mt-0.5" />{t.contact.emailAddr}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-white/[0.06] px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[13px] text-white/30">&copy; {new Date().getFullYear()} Elite Dental. {t.footer.rights}</p>
            <div className="flex items-center gap-1 text-[13px] text-white/30"><span>Made with</span><Heart className="w-3.5 h-3.5 fill-[#C9A96E] text-[#C9A96E]" /><span>Premium Quality</span></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
