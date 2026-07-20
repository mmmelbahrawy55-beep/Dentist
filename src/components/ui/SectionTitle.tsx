"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionTitleProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  center?: boolean;
  light?: boolean;
  children?: ReactNode;
}

export default function SectionTitle({
  badge,
  title,
  highlight,
  description,
  center = true,
  light = false,
  children,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`mb-12 md:mb-16 ${center ? "text-center" : ""} max-w-3xl ${center ? "mx-auto" : ""}`}
    >
      {badge && (
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 tracking-wide uppercase">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          {badge}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] leading-tight mb-4 ${
          light ? "text-white" : "text-text-primary dark:text-white"
        }`}
      >
        {title}{" "}
        {highlight && <span className="text-gradient">{highlight}</span>}
      </h2>
      {description && (
        <p
          className={`text-base md:text-lg leading-relaxed ${
            light ? "text-white/70" : "text-text-secondary dark:text-slate-400"
          }`}
        >
          {description}
        </p>
      )}
      {children}
    </motion.div>
  );
}
