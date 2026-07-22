"use client";

import { motion } from "framer-motion";

interface TextShimmerProps {
  text: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "p" | "span";
}

export default function TextShimmer({ text, className = "", tag = "span" }: TextShimmerProps) {
  const Tag = tag;
  return (
    <Tag className={`relative inline-block ${className}`}>
      <span className="relative z-10">{text}</span>
      <motion.span
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(201,169,110,0.15) 25%, rgba(232,213,168,0.25) 50%, rgba(201,169,110,0.15) 75%, transparent 100%)",
          backgroundSize: "200% 100%",
        }}
        animate={{
          backgroundPosition: ["200% 0", "-200% 0"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </Tag>
  );
}
