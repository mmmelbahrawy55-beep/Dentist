"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, User, Stethoscope, CheckCircle, ChevronDown, Phone, Mail, MessageCircle } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { services, doctors } from "@/lib/data";

export default function Appointment() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    doctor: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const timeSlots = [
    "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM",
    "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM",
    "04:00 PM", "05:00 PM",
  ];

  return (
    <section id="appointment" className="section-padding bg-surface dark:bg-surface-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle
          badge="Book Now"
          title="Schedule Your"
          highlight="Appointment"
          description="Ready for a healthier, more beautiful smile? Book your appointment today and experience the Elite Dental difference."
        />

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-6 md:p-8"
            >
              <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] text-text-primary dark:text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-5">
                {[
                  { icon: Phone, label: "Phone", value: "+1 (555) 012-3456", href: "tel:+15550123456" },
                  { icon: Mail, label: "Email", value: "hello@elitedental.com", href: "mailto:hello@elitedental.com" },
                  { icon: MessageCircle, label: "WhatsApp", value: "+1 (555) 012-3456", href: "https://wa.me/15550123456" },
                  { icon: Clock, label: "Working Hours", value: "Mon-Fri: 8AM-6PM\nSat: 9AM-2PM" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-text-light dark:text-slate-500 uppercase tracking-wider font-medium mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm font-semibold text-text-primary dark:text-white hover:text-primary transition-colors whitespace-pre-line"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-text-primary dark:text-white whitespace-pre-line">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass rounded-3xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <p className="text-xs text-text-light dark:text-slate-500 uppercase tracking-wider font-medium">
                    Emergency
                  </p>
                  <p className="text-sm font-bold text-text-primary dark:text-white">24/7 Hotline</p>
                </div>
              </div>
              <a
                href="tel:+15550123999"
                className="block text-center py-3 rounded-xl bg-red-500/10 text-red-500 font-semibold text-sm hover:bg-red-500/20 transition-colors"
              >
                +1 (555) 012-3999
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="glass rounded-3xl p-8 md:p-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </motion.div>
                  <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-text-primary dark:text-white mb-3">
                    Appointment Booked!
                  </h3>
                  <p className="text-text-secondary dark:text-slate-400 mb-6">
                    We&apos;ll confirm your appointment shortly via email and phone. Thank you for choosing Elite Dental!
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", date: "", time: "", doctor: "", service: "", message: "" }); }}
                    className="btn-primary"
                  >
                    Book Another
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="glass rounded-3xl p-6 md:p-8"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    {[
                      { name: "name", label: "Full Name", type: "text", placeholder: "John Doe", icon: User, required: true },
                      { name: "email", label: "Email", type: "email", placeholder: "john@example.com", icon: Mail, required: true },
                      { name: "phone", label: "Phone", type: "tel", placeholder: "+1 (555) 000-0000", icon: Phone, required: true },
                      { name: "date", label: "Preferred Date", type: "date", icon: Calendar, required: true },
                    ].map((field) => (
                      <div key={field.name}>
                        <label className="block text-sm font-semibold text-text-primary dark:text-white mb-2">
                          {field.label}
                        </label>
                        <div className="relative">
                          <field.icon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-light dark:text-slate-500" />
                          <input
                            type={field.type}
                            name={field.name}
                            value={formData[field.name as keyof typeof formData]}
                            onChange={handleChange}
                            placeholder={field.placeholder}
                            required={field.required}
                            className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-primary/10 text-text-primary dark:text-white placeholder:text-text-light dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all text-sm"
                          />
                        </div>
                      </div>
                    ))}

                    <div>
                      <label className="block text-sm font-semibold text-text-primary dark:text-white mb-2">
                        Preferred Time
                      </label>
                      <div className="relative">
                        <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-light dark:text-slate-500" />
                        <div className="relative">
                          <select
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            required
                            className="w-full pl-11 pr-10 py-3.5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-primary/10 text-text-primary dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all text-sm appearance-none"
                          >
                            <option value="">Select Time</option>
                            {timeSlots.map((slot) => (
                              <option key={slot} value={slot}>{slot}</option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-light dark:text-slate-500 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-text-primary dark:text-white mb-2">
                        Doctor
                      </label>
                      <div className="relative">
                        <Stethoscope className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-light dark:text-slate-500" />
                        <div className="relative">
                          <select
                            name="doctor"
                            value={formData.doctor}
                            onChange={handleChange}
                            className="w-full pl-11 pr-10 py-3.5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-primary/10 text-text-primary dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all text-sm appearance-none"
                          >
                            <option value="">Any Available Doctor</option>
                            {doctors.map((doc) => (
                              <option key={doc.name} value={doc.name}>{doc.name}</option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-light dark:text-slate-500 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-sm font-semibold text-text-primary dark:text-white mb-2">
                        Service
                      </label>
                      <div className="relative">
                        <Stethoscope className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-light dark:text-slate-500" />
                        <div className="relative">
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                            className="w-full pl-11 pr-10 py-3.5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-primary/10 text-text-primary dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all text-sm appearance-none"
                          >
                            <option value="">Select Service</option>
                            {services.map((s) => (
                              <option key={s.title} value={s.title}>{s.title}</option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-light dark:text-slate-500 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-sm font-semibold text-text-primary dark:text-white mb-2">
                        Additional Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Tell us about your dental concerns..."
                        className="w-full px-4 py-3.5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-primary/10 text-text-primary dark:text-white placeholder:text-text-light dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all text-sm resize-none"
                      />
                    </div>
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center mt-6 text-base">
                    Confirm Appointment
                    <CheckCircle className="w-5 h-5" />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
