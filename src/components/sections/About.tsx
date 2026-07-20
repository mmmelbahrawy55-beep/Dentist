"use client";

import { motion } from "framer-motion";
import { CheckCircle, Award, Shield, Heart, Target, Eye } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";

const features = [
  { icon: Shield, title: "Advanced Technology", desc: "Latest dental equipment and digital diagnostics" },
  { icon: Heart, title: "Patient-First Care", desc: "Your comfort and health are our top priority" },
  { icon: Award, title: "Award-Winning Team", desc: "Recognized excellence in dental care" },
  { icon: Target, title: "Precision Results", desc: "Meticulous attention to every detail" },
];

const certifications = [
  "American Dental Association (ADA)",
  "International Congress of Oral Implantologists (ICOI)",
  "American Academy of Cosmetic Dentistry (AACD)",
  "Joint Commission Accreditation",
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-surface dark:bg-surface-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle
          badge="About Us"
          title="Where Excellence Meets"
          highlight="Compassionate Care"
          description="For over two decades, Elite Dental Clinic has been the trusted destination for families seeking exceptional dental care in a luxurious, welcoming environment."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-[2rem] blur-xl" />
              <div className="relative bg-white dark:bg-slate-800 rounded-[2rem] overflow-hidden premium-shadow">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <div className="text-center">
                    <Eye className="w-16 h-16 text-primary/40 mx-auto mb-3" />
                    <p className="text-text-secondary dark:text-slate-400 text-sm font-medium">Clinic Interior Image</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-heading)] text-text-primary dark:text-white mb-4"
            >
              Our Story
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-text-secondary dark:text-slate-400 leading-relaxed mb-6"
            >
              Founded in 2003, Elite Dental Clinic was born from a simple yet powerful vision: to redefine dental
              care by combining clinical excellence with an unparalleled patient experience. What began as a small
              practice has grown into one of the most respected dental institutions, serving over 15,000 patients
              with a 98% satisfaction rate.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-text-secondary dark:text-slate-400 leading-relaxed mb-8"
            >
              Our vision is to be the global benchmark for dental excellence. Our mission is to transform lives
              through healthy, beautiful smiles — delivered with compassion, precision, and state-of-the-art
              technology.
            </motion.p>

            <div className="space-y-4 mb-8">
              {[
                { icon: Target, title: "Our Vision", text: "To be the global benchmark for dental excellence and patient care." },
                { icon: Heart, title: "Our Mission", text: "Transforming lives through healthy, beautiful smiles with compassion and precision." },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex gap-4 p-4 rounded-2xl bg-primary/5 border border-primary/10"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold font-[family-name:var(--font-heading)] text-text-primary dark:text-white text-sm">
                      {item.title}
                    </h4>
                    <p className="text-text-secondary dark:text-slate-400 text-sm mt-1">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, i) => (
            <GlassCard key={feature.title} delay={i * 0.1} className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold font-[family-name:var(--font-heading)] text-text-primary dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-text-secondary dark:text-slate-400">{feature.desc}</p>
            </GlassCard>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 md:p-10"
        >
          <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] text-text-primary dark:text-white mb-6 text-center">
            Our Certifications & Accreditations
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/5 transition-colors"
              >
                <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-sm font-medium text-text-primary dark:text-slate-300">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
