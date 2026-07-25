"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MorphingBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {isVisible && (
        <>
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full opacity-[0.02] dark:opacity-[0.03]"
            style={{
              background: "radial-gradient(circle, rgba(201,169,110,0.4) 0%, transparent 70%)",
            }}
            animate={{
              x: ["0%", "30%", "-20%", "10%", "0%"],
              y: ["0%", "-40%", "20%", "-10%", "0%"],
              scale: [1, 1.2, 0.9, 1.1, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full opacity-[0.02] dark:opacity-[0.025]"
            style={{
              background: "radial-gradient(circle, rgba(15,118,110,0.4) 0%, transparent 70%)",
              right: "10%",
              top: "20%",
            }}
            animate={{
              x: ["0%", "-30%", "15%", "-5%", "0%"],
              y: ["0%", "30%", "-20%", "15%", "0%"],
              scale: [1, 0.9, 1.15, 0.95, 1],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </>
      )}
      <div
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(201,169,110,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,169,110,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
    </div>
  );
}
