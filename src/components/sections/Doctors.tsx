"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";
import ScrollReveal, { StaggerChildren, StaggerItem } from "@/components/ui/ScrollReveal";
import TiltCard from "@/components/ui/TiltCard";
import { SplitText } from "@/components/ui/TextReveal";
import { LinkedinIcon, TwitterIcon } from "@/components/ui/SocialIcons";
import { doctors } from "@/lib/data";
import { useLang } from "@/components/ui/LanguageProvider";

const doctorImages = [
  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1594824476967-48c8b964ac31?w=600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&q=80&auto=format&fit=crop",
];

export default function Doctors() {
  const { t } = useLang();
  return (
    <section id="doctors" className="section-padding bg-surface dark:bg-surface-dark relative overflow-hidden mesh-bg">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/[0.06] text-primary text-[13px] font-semibold mb-5 tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              {t.doctors.badge}
            </span>
            <SplitText
              text={t.doctors.title1}
              tag="h2"
              className="text-[clamp(2rem,4vw,3.2rem)] font-bold font-[family-name:var(--font-heading)] text-text-primary dark:text-white leading-tight"
            />
            <SplitText
              text={t.doctors.title2}
              tag="h2"
              className="text-[clamp(2rem,4vw,3.2rem)] font-bold font-[family-name:var(--font-heading)] leading-tight text-gradient mt-1"
              delay={0.15}
            />
            <p className="text-[16px] text-text-secondary dark:text-slate-400 mt-6 leading-relaxed max-w-2xl mx-auto">
              {t.doctors.description}
            </p>
          </div>
        </ScrollReveal>

        <StaggerChildren stagger={0.12}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctors.map((doctor, i) => (
              <StaggerItem key={doctor.name}>
                <TiltCard glareColor="rgba(14,165,233,0.06)" maxTilt={8} scale={1.02}>
                  <div className="group">
                    <div className="relative mb-5">
                      <div className="absolute -inset-2 bg-gradient-to-r from-primary/15 to-secondary/15 rounded-[1.75rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />
                      <div className="relative overflow-hidden rounded-[1.5rem] bg-white dark:bg-slate-800/80 transition-all duration-700 group-hover:shadow-xl">
                        <div className="aspect-[3/4] relative">
                          <Image
                            src={doctorImages[i]}
                            alt={`Portrait of ${doctor.name} - ${doctor.specialty}`}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
                          <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out">
                            <div className="flex gap-2">
                              <a href="#" className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center hover:bg-white/25 transition-colors">
                                <LinkedinIcon className="w-4 h-4 text-white" />
                              </a>
                              <a href="#" className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center hover:bg-white/25 transition-colors">
                                <TwitterIcon className="w-4 h-4 text-white" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="px-1">
                      <h3 className="text-[17px] font-bold font-[family-name:var(--font-heading)] text-text-primary dark:text-white mb-1">
                        {doctor.name}
                      </h3>
                      <p className="text-[13px] text-primary font-medium mb-2">{doctor.specialty}</p>

                      <div className="flex items-center gap-2 text-[12px] text-text-secondary dark:text-slate-400 mb-3">
                        <Clock className="w-3.5 h-3.5" />
                        {doctor.experience}
                      </div>

                      <div className="space-y-1 mb-4">
                        {doctor.qualifications.map((q) => (
                          <p key={q} className="text-[12px] text-text-light dark:text-slate-500 leading-relaxed">
                            {q}
                          </p>
                        ))}
                      </div>

                      <a
                        href="#appointment"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary/[0.06] text-primary text-[13px] font-semibold hover:bg-primary hover:text-white transition-all duration-500 group/btn"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        {t.doctors.bookBtn}
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300" />
                      </a>
                    </div>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </div>
        </StaggerChildren>
      </div>
    </section>
  );
}
