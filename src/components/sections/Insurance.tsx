"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { insurancePartners } from "@/lib/data";

export default function Insurance() {
  return (
    <section className="section-padding bg-white dark:bg-[#0a1628] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle
          badge="Insurance"
          title="Trusted Insurance"
          highlight="Partners"
          description="We work with most major insurance providers to make quality dental care accessible and affordable."
        />

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6">
          {insurancePartners.map((partner, i) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="glass rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center gap-3 group cursor-pointer hover:premium-shadow transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <span className="text-sm font-semibold text-text-primary dark:text-white text-center">
                {partner}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
