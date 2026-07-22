"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorRipple() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 300, damping: 25 });
  const springY = useSpring(cursorY, { stiffness: 300, damping: 25 });

  const addRipple = useCallback((x: number, y: number) => {
    const ripple = document.createElement("div");
    ripple.className = "fixed rounded-full border border-[#C9A96E]/30 pointer-events-none z-[9999]";
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.style.translate = "-50% -50%";
    ripple.animate([
      { width: "0px", height: "0px", opacity: 0.6 },
      { width: "80px", height: "80px", opacity: 0 },
    ], { duration: 800, easing: "ease-out", fill: "forwards" });
    document.body.appendChild(ripple);
    setTimeout(() => ripple.remove(), 800);
  }, []);

  useEffect(() => {
    const isMobile = window.matchMedia("(pointer: coarse)").matches;
    if (isMobile) return;

    let hoverEls = new Set<Element>();
    let ticking = false;

    const onMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onDown = (e: MouseEvent) => {
      setClicking(true);
      addRipple(e.clientX, e.clientY);
    };
    const onUp = () => setClicking(false);

    const checkHover = () => {
      const hovered = document.querySelectorAll(":hover");
      const isHovering = Array.from(hovered).some(
        (el) => el.matches("a, button, [role='button'], input, select, textarea, [data-cursor-hover]")
      );
      setHovering(isHovering);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    // Lightweight hover check
    const observer = new MutationObserver(checkHover);
    observer.observe(document.body, { childList: true, subtree: true });
    document.addEventListener("mouseover", checkHover);
    document.addEventListener("mouseout", checkHover);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", checkHover);
      document.removeEventListener("mouseout", checkHover);
      observer.disconnect();
    };
  }, [cursorX, cursorY, visible, addRipple]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none hidden lg:block">
      <motion.div
        style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: hovering ? 64 : clicking ? 28 : 36,
          height: hovering ? 64 : clicking ? 28 : 36,
          borderWidth: hovering ? 1.5 : 1,
        }}
        transition={{ duration: 0.2 }}
        className="fixed top-0 left-0 rounded-full border-[#C9A96E]/25"
      />
      <motion.div
        style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: clicking ? 4 : hovering ? 8 : 5,
          height: clicking ? 4 : hovering ? 8 : 5,
        }}
        transition={{ duration: 0.1 }}
        className="fixed top-0 left-0 rounded-full bg-[#C9A96E]"
      />
    </div>
  );
}
