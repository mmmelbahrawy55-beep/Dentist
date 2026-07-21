"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, User, Stethoscope, CheckCircle, ChevronDown, Phone, Mail, MessageCircle } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SplitText } from "@/components/ui/TextReveal";
import { services, doctors } from "@/lib/data";
import { useLang } from "@/components/ui/LanguageProvider";

export default function Appointment() {
  const { t } = useLang();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", date: "", time: "", doctor: "", service: "", message: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };
  const timeSlots = ["08:00 AM","09:00 AM","10:00 AM","11:00 AM","12:00 PM","01:00 PM","02:00 PM","03:00 PM","04:00 PM","05:00 PM"];
  const inputClass = "w-full pl-11 pr-4 py-4 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#C9A96E]/20 focus:border-[#C9A96E]/30 transition-all text-[14px]";

  return (
    <section id="appointment" className="section-padding bg-[#0A0A0F] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#C9A96E]/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#0F766E]/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] text-[#C9A96E] text-[12px] font-semibold mb-5 tracking-[2px] uppercase"><span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] animate-pulse" />{t.appointment.badge}</span>
            <SplitText text={t.appointment.title1} tag="h2" className="text-[clamp(2rem,4vw,3rem)] font-bold font-[family-name:var(--font-heading)] text-white leading-tight" />
            <SplitText text={t.appointment.title2} tag="h2" className="text-[clamp(2rem,4vw,3rem)] font-bold font-[family-name:var(--font-heading)] leading-tight bg-gradient-to-r from-[#C9A96E] via-[#E8D5A8] to-[#C9A96E] bg-clip-text text-transparent mt-1" delay={0.15} />
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-5">
            <ScrollReveal direction="left" delay={0.1}>
              <div className="bg-white/[0.04] backdrop-blur-sm rounded-2xl p-6 border border-white/[0.06]">
                <h3 className="text-[18px] font-bold font-[family-name:var(--font-heading)] text-white mb-5">{t.appointment.contactInfo}</h3>
                <div className="space-y-4">
                  {[{ icon: Phone, label: "Phone", value: "+1 (555) 012-3456" }, { icon: Mail, label: "Email", value: "hello@elitedental.com" }, { icon: MessageCircle, label: "WhatsApp", value: "+1 (555) 012-3456" }, { icon: Clock, label: t.appointment.workingHours, value: t.appointment.hours }].map((item) => (
                    <div key={item.label} className="flex gap-4"><div className="w-11 h-11 rounded-xl bg-[#C9A96E]/10 flex items-center justify-center shrink-0"><item.icon className="w-4 h-4 text-[#C9A96E]" /></div><div><p className="text-[11px] text-white/40 uppercase tracking-widest font-semibold mb-0.5">{item.label}</p><p className="text-[14px] font-semibold text-white whitespace-pre-line leading-relaxed">{item.value}</p></div></div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="right" delay={0.1} className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white/[0.04] backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center border border-white/[0.06]">
                  <motion.div initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: "spring", stiffness: 200, delay: 0.2 }} className="w-20 h-20 rounded-full bg-[#C9A96E]/10 flex items-center justify-center mx-auto mb-6"><CheckCircle className="w-10 h-10 text-[#C9A96E]" /></motion.div>
                  <h3 className="text-[24px] font-bold font-[family-name:var(--font-heading)] text-white mb-3">{t.appointment.successTitle}</h3>
                  <p className="text-white/50 mb-8 text-[15px]">{t.appointment.successText}</p>
                  <button onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", date: "", time: "", doctor: "", service: "", message: "" }); }} className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#C9A96E] to-[#E8D5A8] text-[#0A0A0F] font-bold text-[15px] hover:shadow-[0_0_30px_rgba(201,169,110,0.3)] transition-all duration-500">{t.appointment.bookAnother}</button>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit} className="bg-white/[0.04] backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/[0.06]">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[{ name: "name", label: t.appointment.name, type: "text", placeholder: "John Doe", icon: User, required: true }, { name: "email", label: t.appointment.email, type: "email", placeholder: "john@example.com", icon: Mail, required: true }, { name: "phone", label: t.appointment.phone, type: "tel", placeholder: "+1 (555) 000-0000", icon: Phone, required: true }, { name: "date", label: t.appointment.date, type: "date", icon: Calendar, required: true }].map((field) => (
                      <div key={field.name}><label className="block text-[12px] font-semibold text-white/40 mb-2 tracking-wide uppercase">{field.label}</label><div className="relative"><field.icon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" /><input type={field.type} name={field.name} value={formData[field.name as keyof typeof formData]} onChange={handleChange} placeholder={field.placeholder} required={field.required} className={inputClass} /></div></div>
                    ))}
                    <div><label className="block text-[12px] font-semibold text-white/40 mb-2 tracking-wide uppercase">{t.appointment.time}</label><div className="relative"><Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" /><select name="time" value={formData.time} onChange={handleChange} required className={`${inputClass} appearance-none`}><option value="">{t.appointment.selectTime}</option>{timeSlots.map((s) => <option key={s} value={s}>{s}</option>)}</select><ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 pointer-events-none" /></div></div>
                    <div><label className="block text-[12px] font-semibold text-white/40 mb-2 tracking-wide uppercase">{t.appointment.doctor}</label><div className="relative"><Stethoscope className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" /><select name="doctor" value={formData.doctor} onChange={handleChange} className={`${inputClass} appearance-none`}><option value="">{t.appointment.anyDoctor}</option>{doctors.map((d) => <option key={d.name} value={d.name}>{d.name}</option>)}</select><ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 pointer-events-none" /></div></div>
                    <div className="sm:col-span-2"><label className="block text-[12px] font-semibold text-white/40 mb-2 tracking-wide uppercase">{t.appointment.service}</label><div className="relative"><Stethoscope className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" /><select name="service" value={formData.service} onChange={handleChange} required className={`${inputClass} appearance-none`}><option value="">{t.appointment.selectService}</option>{services.map((s) => <option key={s.title} value={s.title}>{s.title}</option>)}</select><ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 pointer-events-none" /></div></div>
                    <div className="sm:col-span-2"><label className="block text-[12px] font-semibold text-white/40 mb-2 tracking-wide uppercase">{t.appointment.message}</label><textarea name="message" value={formData.message} onChange={handleChange} rows={3} placeholder={t.appointment.messagePlaceholder} className="w-full px-4 py-4 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#C9A96E]/20 focus:border-[#C9A96E]/30 transition-all text-[14px] resize-none" /></div>
                  </div>
                  <motion.button type="submit" whileHover={{ scale: 1.01, y: -1 }} whileTap={{ scale: 0.99 }} className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#C9A96E] to-[#E8D5A8] text-[#0A0A0F] font-bold w-full justify-center mt-6 text-[15px] hover:shadow-[0_0_30px_rgba(201,169,110,0.3)] transition-all duration-500">{t.appointment.confirmBtn}<CheckCircle className="w-5 h-5" /></motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
