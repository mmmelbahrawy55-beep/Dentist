"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, GraduationCap } from "lucide-react";
import ScrollReveal, { StaggerChildren, StaggerItem } from "@/components/ui/ScrollReveal";
import { SplitText } from "@/components/ui/TextReveal";
import { useLang } from "@/components/ui/LanguageProvider";

const doctorsData = [
  {
    name: "Dr. Ahmed Hassan",
    specialty: "Cosmetic Dentistry",
    experience: "15+ Years",
    qualifications: ["DDS - New York University", "Fellow AACD", "Smile Design Expert"],
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&q=95&auto=format&fit=crop&crop=face"
  },
  {
    name: "Dr. Sarah Mitchell",
    specialty: "Orthodontics",
    experience: "12+ Years",
    qualifications: ["DMD - Harvard School", "Invisalign Diamond", "Board Certified"],
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964ac31?w=800&q=95&auto=format&fit=crop&crop=face"
  },
  {
    name: "Dr. Michael Chen",
    specialty: "Dental Implants",
    experience: "18+ Years",
    qualifications: ["DDS - Columbia", "ICOI Fellow", "Implant Surgeon"],
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=95&auto=format&fit=crop&crop=face"
  },
  {
    name: "Dr. Emily Roberts",
    specialty: "Endodontics",
    experience: "10+ Years",
    qualifications: ["DMD - UPenn", "Root Canal Specialist", "Pain Management Expert"],
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=95&auto=format&fit=crop&crop=face"
  },
];

export default function Doctors() {
  const { t } = useLang();
  return (
    <section id="doctors" className="section-padding bg-[#FDFBF7] dark:bg-[#0A0A0F] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#C9A96E]/[0.03] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#0F766E]/[0.03] dark:bg-[#0F766E]/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#B08D4F]/[0.06] dark:bg-white/[0.06] text-[#B08D4F] dark:text-[#C9A96E] text-[12px] font-semibold mb-5 tracking-[2px] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B08D4F] dark:bg-[#C9A96E] animate-pulse" />
              {t.doctors.badge}
            </span>
            <SplitText text={t.doctors.title1} tag="h2" className="text-[clamp(2rem,4vw,3rem)] font-bold font-[family-name:var(--font-heading)] text-[#1A1A2E] dark:text-white leading-tight" />
            <SplitText text={t.doctors.title2} tag="h2" className="text-[clamp(2rem,4vw,3rem)] font-bold font-[family-name:var(--font-heading)] leading-tight bg-gradient-to-r from-[#B08D4F] via-[#C9A96E] to-[#B08D4F] dark:from-[#C9A96E] dark:via-[#E8D5A8] dark:to-[#C9A96E] bg-clip-text text-transparent mt-1" delay={0.15} />
            <p className="text-[16px] text-[#555] dark:text-white/50 mt-6 leading-relaxed max-w-2xl mx-auto">{t.doctors.description}</p>
          </div>
        </ScrollReveal>

        <StaggerChildren stagger={0.1}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctorsData.map((doc) => (
              <StaggerItem key={doc.name}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="group relative bg-white/70 dark:bg-white/[0.04] backdrop-blur-sm border border-[#B08D4F]/[0.08] dark:border-white/[0.06] rounded-2xl overflow-hidden hover:bg-white dark:hover:bg-white/[0.07] transition-all duration-500 shadow-lg shadow-black/[0.02] dark:shadow-black/[0.2]"
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={doc.image}
                      alt={doc.name}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/90 via-[#1A1A2E]/30 to-transparent dark:from-[#0A0A0F]/90 dark:via-[#0A0A0F]/30 to-transparent" />

                    {/* Stars */}
                    <div className="absolute top-4 left-4 flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-[#C9A96E] text-[#C9A96E]" />
                      ))}
                    </div>

                    {/* Experience */}
                    <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-[#C9A96E]/20 backdrop-blur-sm border border-[#C9A96E]/30">
                      <span className="text-[10px] font-bold text-[#B08D4F] dark:text-[#C9A96E]">{doc.experience}</span>
                    </div>

                    {/* Bottom info */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h4 className="font-bold font-[family-name:var(--font-heading)] text-white text-[17px] mb-1">
                        {doc.name}
                      </h4>
                      <p className="text-[#14B8A6] text-[13px] font-medium mb-3">
                        {doc.specialty}
                      </p>

                      <div className="space-y-1.5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                        {doc.qualifications.map((qual) => (
                          <div key={qual} className="flex items-center gap-2">
                            <GraduationCap className="w-3 h-3 text-[#C9A96E] shrink-0" />
                            <span className="text-[11px] text-white/60">{qual}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerChildren>
      </div>
    </section>
  );
}
