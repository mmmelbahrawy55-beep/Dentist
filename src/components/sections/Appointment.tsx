"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, User, Stethoscope, CheckCircle, ChevronDown, Phone, Mail, MessageCircle } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SplitText } from "@/components/ui/TextReveal";
import { services, doctors } from "@/lib/data";

export default function Appointment() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", date: "", time: "", doctor: "", service: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const timeSlots = ["08:00 AM","09:00 AM","10:00 AM","11:00 AM","12:00 PM","01:00 PM","02:00 PM","03:00 PM","04:00 PM","05:00 PM"];

  const inputClass = "w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/40 dark:bg-white/[0.04] border border-primary/[0.08] text-text-primary dark:text-white placeholder:text-text-light dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/20 transition-all duration-300 text-[14px]";

  return (
    <section id="appointment" className="section-padding bg-surface dark:bg-surface-dark relative overflow-hidden mesh-bg">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/[0.06] text-primary text-[13px] font-semibold mb-5 tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Book Now
            </span>
            <SplitText
              text="Schedule Your"
              tag="h2"
              className="text-[clamp(2rem,4vw,3.2rem)] font-bold font-[family-name:var(--font-heading)] text-text-primary dark:text-white leading-tight"
            />
            <SplitText
              text="Appointment"
              tag="h2"
              className="text-[clamp(2rem,4vw,3.2rem)] font-bold font-[family-name:var(--font-heading)] leading-tight text-gradient mt-1"
              delay={0.15}
            />
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-5">
            <ScrollReveal direction="left" delay={0.1}>
              <div className="glass rounded-[1.75rem] p-6 md:p-7">
                <h3 className="text-[18px] font-bold font-[family-name:var(--font-heading)] text-text-primary dark:text-white mb-5">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: Phone, label: "Phone", value: "+1 (555) 012-3456", href: "tel:+15550123456" },
                    { icon: Mail, label: "Email", value: "hello@elitedental.com", href: "mailto:hello@elitedental.com" },
                    { icon: MessageCircle, label: "WhatsApp", value: "+1 (555) 012-3456", href: "https://wa.me/15550123456" },
                    { icon: Clock, label: "Working Hours", value: "Mon-Fri: 8AM-6PM\nSat: 9AM-2PM" },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-4 group/item">
                      <div className="w-11 h-11 rounded-xl bg-primary/[0.06] flex items-center justify-center shrink-0 group-hover/item:bg-primary/10 transition-colors">
                        <item.icon className="w-4.5 h-4.5 text-primary" />
                      </div>
                      <div>
                        <p className="text-[11px] text-text-light dark:text-slate-600 uppercase tracking-widest font-semibold mb-0.5">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a href={item.href} className="text-[14px] font-semibold text-text-primary dark:text-white hover:text-primary transition-colors whitespace-pre-line leading-relaxed">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-[14px] font-semibold text-text-primary dark:text-white whitespace-pre-line leading-relaxed">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2}>
              <div className="glass rounded-[1.75rem] p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-red-500/[0.08] flex items-center justify-center">
                    <Phone className="w-4 h-4 text-red-500" />
                  </div>
                  <div>
                    <p className="text-[11px] text-text-light dark:text-slate-600 uppercase tracking-widest font-semibold">Emergency</p>
                    <p className="text-[14px] font-bold text-text-primary dark:text-white">24/7 Hotline</p>
                  </div>
                </div>
                <a href="tel:+15550123999" className="block text-center py-3 rounded-xl bg-red-500/[0.06] text-red-500 font-semibold text-[13px] hover:bg-red-500/10 transition-colors">
                  +1 (555) 012-3999
                </a>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="right" delay={0.1} className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="glass rounded-[1.75rem] p-8 md:p-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    className="w-20 h-20 rounded-full bg-green-500/[0.08] flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </motion.div>
                  <h3 className="text-[24px] font-bold font-[family-name:var(--font-heading)] text-text-primary dark:text-white mb-3">
                    Appointment Booked!
                  </h3>
                  <p className="text-text-secondary dark:text-slate-400 mb-8 text-[15px]">
                    We&apos;ll confirm your appointment shortly via email and phone. Thank you for choosing Elite Dental!
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", date: "", time: "", doctor: "", service: "", message: "" }); }}
                    className="btn-premium"
                  >
                    Book Another
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="glass rounded-[1.75rem] p-6 md:p-8"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { name: "name", label: "Full Name", type: "text", placeholder: "John Doe", icon: User, required: true },
                      { name: "email", label: "Email", type: "email", placeholder: "john@example.com", icon: Mail, required: true },
                      { name: "phone", label: "Phone", type: "tel", placeholder: "+1 (555) 000-0000", icon: Phone, required: true },
                      { name: "date", label: "Preferred Date", type: "date", icon: Calendar, required: true },
                    ].map((field) => (
                      <div key={field.name}>
                        <label className="block text-[13px] font-semibold text-text-primary dark:text-white mb-2">{field.label}</label>
                        <div className="relative">
                          <field.icon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-light dark:text-slate-600" />
                          <input
                            type={field.type}
                            name={field.name}
                            value={formData[field.name as keyof typeof formData]}
                            onChange={handleChange}
                            placeholder={field.placeholder}
                            required={field.required}
                            className={inputClass}
                          />
                        </div>
                      </div>
                    ))}

                    <div>
                      <label className="block text-[13px] font-semibold text-text-primary dark:text-white mb-2">Preferred Time</label>
                      <div className="relative">
                        <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-light dark:text-slate-600" />
                        <select name="time" value={formData.time} onChange={handleChange} required className={`${inputClass} appearance-none`}>
                          <option value="">Select Time</option>
                          {timeSlots.map((slot) => (<option key={slot} value={slot}>{slot}</option>))}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-light dark:text-slate-600 pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[13px] font-semibold text-text-primary dark:text-white mb-2">Doctor</label>
                      <div className="relative">
                        <Stethoscope className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-light dark:text-slate-600" />
                        <select name="doctor" value={formData.doctor} onChange={handleChange} className={`${inputClass} appearance-none`}>
                          <option value="">Any Available Doctor</option>
                          {doctors.map((doc) => (<option key={doc.name} value={doc.name}>{doc.name}</option>))}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-light dark:text-slate-600 pointer-events-none" />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-[13px] font-semibold text-text-primary dark:text-white mb-2">Service</label>
                      <div className="relative">
                        <Stethoscope className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-light dark:text-slate-600" />
                        <select name="service" value={formData.service} onChange={handleChange} required className={`${inputClass} appearance-none`}>
                          <option value="">Select Service</option>
                          {services.map((s) => (<option key={s.title} value={s.title}>{s.title}</option>))}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-light dark:text-slate-600 pointer-events-none" />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-[13px] font-semibold text-text-primary dark:text-white mb-2">Additional Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Tell us about your dental concerns..."
                        className="w-full px-4 py-3.5 rounded-xl bg-white/40 dark:bg-white/[0.04] border border-primary/[0.08] text-text-primary dark:text-white placeholder:text-text-light dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/20 transition-all duration-300 text-[14px] resize-none"
                      />
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01, y: -1 }}
                    whileTap={{ scale: 0.99 }}
                    className="btn-premium w-full justify-center mt-6 text-[15px]"
                  >
                    Confirm Appointment
                    <CheckCircle className="w-5 h-5" />
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
