"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export default function CursorRipple() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springX = useSpring(cursorX, { stiffness: 600, damping: 28 });
  const springY = useSpring(cursorY, { stiffness: 600, damping: 28 });
  const trailX = useSpring(cursorX, { stiffness: 120, damping: 18 });
  const trailY = useSpring(cursorY, { stiffness: 120, damping: 18 });

  const addRipple = useCallback((x: number, y: number) => {
    const id = Date.now();
    setRipples((prev) => [...prev, { id, x, y }]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 800);
  }, []);

  useEffect(() => {
    const isMobile = window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 1024;
    if (isMobile) return;

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const down = (e: MouseEvent) => {
      setClicking(true);
      addRipple(e.clientX, e.clientY);
    };
    const up = () => setClicking(false);

    const enterHover = () => setHovering(true);
    const leaveHover = () => setHovering(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    const interactiveEls = document.querySelectorAll("a, button, [role='button'], input, select, textarea, [data-cursor-hover]");
    interactiveEls.forEach((el) => {
      el.addEventListener("mouseenter", enterHover);
      el.addEventListener("mouseleave", leaveHover);
    });

    const observer = new MutationObserver(() => {
      const newEls = document.querySelectorAll("a, button, [role='button'], input, select, textarea, [data-cursor-hover]");
      newEls.forEach((el) => {
        el.removeEventListener("mouseenter", enterHover);
        el.removeEventListener("mouseleave", leaveHover);
        el.addEventListener("mouseenter", enterHover);
        el.addEventListener("mouseleave", leaveHover);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      interactiveEls.forEach((el) => {
        el.removeEventListener("mouseenter", enterHover);
        el.removeEventListener("mouseleave", leaveHover);
      });
      observer.disconnect();
    };
  }, [cursorX, cursorY, visible, addRipple]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none hidden lg:block">
      {/* Ripple effects */}
      {ripples.map((ripple) => (
        <motion.div
          key={ripple.id}
          initial={{ width: 0, height: 0, opacity: 0.6 }}
          animate={{ width: 80, height: 80, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            position: "fixed",
            left: ripple.x,
            top: ripple.y,
            translateX: "-50%",
            translateY: "-50%",
            borderRadius: "50%",
            border: "2px solid rgba(201, 169, 110, 0.4)",
          }}
        />
      ))}

      {/* Outer trail */}
      <motion.div
        style={{ x: trailX, y: trailY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: hovering ? 64 : clicking ? 30 : 40,
          height: hovering ? 64 : clicking ? 30 : 40,
          opacity: clicking ? 0.5 : 0.8,
          borderWidth: hovering ? 1.5 : 1,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed top-0 left-0 rounded-full border-[#C9A96E]/30"
      />

      {/* Inner dot */}
      <motion.div
        style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: clicking ? 4 : hovering ? 8 : 5,
          height: clicking ? 4 : hovering ? 8 : 5,
        }}
        transition={{ duration: 0.15 }}
        className="fixed top-0 left-0 rounded-full bg-[#C9A96E]"
      />

      {/* Glow on hover */}
      {hovering && (
        <motion.div
          style={{ x: trailX, y: trailY, translateX: "-50%", translateY: "-50%" }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.15, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="fixed top-0 left-0 w-24 h-24 rounded-full bg-[#C9A96E] blur-xl"
        />
      )}
    </div>
  );
}
