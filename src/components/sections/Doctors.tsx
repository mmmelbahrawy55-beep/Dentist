"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, User } from "lucide-react";
import { LinkedinIcon, TwitterIcon } from "@/components/ui/SocialIcons";
import SectionTitle from "@/components/ui/SectionTitle";
import { doctors } from "@/lib/data";

export default function Doctors() {
  return (
    <section id="doctors" className="section-padding bg-surface dark:bg-surface-dark relative overflow-hidden">
      <div className="absolute top-20 left-20 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle
          badge="Our Team"
          title="Meet Our Expert"
          highlight="Specialists"
          description="Our team of internationally trained, board-certified dental specialists brings decades of combined experience to deliver exceptional results."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor, i) => (
            <motion.div
              key={doctor.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group"
            >
              <div className="relative mb-6">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-slate-800 premium-shadow group-hover:premium-shadow-xl transition-all duration-500">
                  <div className="aspect-[3/4] bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center relative overflow-hidden">
                    <User className="w-20 h-20 text-primary/20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      <div className="flex gap-2">
                        <a href="#" className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                          <LinkedinIcon className="w-4 h-4 text-white" />
                        </a>
                        <a href="#" className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                          <TwitterIcon className="w-4 h-4 text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center px-2">
                <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] text-text-primary dark:text-white mb-1">
                  {doctor.name}
                </h3>
                <p className="text-sm text-primary font-medium mb-2">{doctor.specialty}</p>

                <div className="flex items-center justify-center gap-4 text-xs text-text-secondary dark:text-slate-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {doctor.experience}
                  </span>
                </div>

                <div className="space-y-1 mb-4">
                  {doctor.qualifications.map((q) => (
                    <p key={q} className="text-xs text-text-light dark:text-slate-500">
                      {q}
                    </p>
                  ))}
                </div>

                <a
                  href="#appointment"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary/10 text-primary text-sm font-semibold hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Calendar className="w-4 h-4" />
                  Book Appointment
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
