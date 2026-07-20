"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  glareColor?: string;
  maxTilt?: number;
  scale?: number;
}

export default function TiltCard({
  children,
  className = "",
  glareColor = "rgba(14,165,233,0.08)",
  maxTilt = 12,
  scale = 1.02,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [maxTilt, -maxTilt]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-maxTilt, maxTilt]), { stiffness: 300, damping: 30 });
  const scaleValue = useSpring(hovering ? scale : 1, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
  };

  const handleMouseEnter = () => setHovering(true);
  const handleMouseLeave = () => {
    setHovering(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div className={`perspective-1000 ${className}`}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          scale: scaleValue,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-full backface-hidden"
      >
        <motion.div
          animate={{ opacity: hovering ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 rounded-[inherit] z-10 pointer-events-none overflow-hidden"
        >
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at ${50 + (x.get() || 0) * 50}% ${50 + (y.get() || 0) * 50}%, ${glareColor}, transparent 60%)`,
            }}
          />
        </motion.div>
        {children}
      </motion.div>
    </div>
  );
}
