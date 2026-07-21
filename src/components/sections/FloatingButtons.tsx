"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, ArrowUp } from "lucide-react";

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>{isOpen && (
        <motion.div initial={{ opacity: 0, scale: 0.85, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.85, y: 20 }} transition={{ duration: 0.4 }} className="absolute bottom-[72px] right-0 w-[300px] bg-white rounded-2xl p-5 mb-2 premium-shadow-lg border border-[#EDE9E4]/50">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-bold font-[family-name:var(--font-heading)] text-[#1A1A2E] text-[15px]">Chat with us</h4>
            <motion.button onClick={() => setIsOpen(false)} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-7 h-7 rounded-lg bg-[#0F766E]/[0.06] flex items-center justify-center"><X className="w-3.5 h-3.5 text-[#0F766E]" /></motion.button>
          </div>
          <p className="text-[13px] text-[#555] mb-4 leading-relaxed">Hi there! How can we help you today?</p>
          <a href="https://wa.me/15550123456" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#25D366] text-white font-semibold text-[14px] hover:bg-[#20BD5A] transition-colors"><MessageCircle className="w-5 h-5" />Start Chat</a>
        </motion.div>
      )}</AnimatePresence>
      <motion.button whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }} onClick={() => setIsOpen(!isOpen)} className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-[#25D366]/30">
        <AnimatePresence mode="wait">{isOpen ? <motion.div key="close" initial={{ rotate: -90, scale: 0 }} animate={{ rotate: 0, scale: 1 }} exit={{ rotate: 90, scale: 0 }}><X className="w-6 h-6" /></motion.div> : <motion.div key="chat" initial={{ rotate: 90, scale: 0 }} animate={{ rotate: 0, scale: 1 }} exit={{ rotate: -90, scale: 0 }}><MessageCircle className="w-6 h-6" /></motion.div>}</AnimatePresence>
      </motion.button>
    </div>
  );
}

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const h = () => setVisible(window.scrollY > 500); window.addEventListener("scroll", h, { passive: true }); return () => window.removeEventListener("scroll", h); }, []);
  return (
    <AnimatePresence>{visible && (
      <motion.button initial={{ opacity: 0, scale: 0.8, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.8, y: 20 }} whileHover={{ scale: 1.08, y: -3 }} whileTap={{ scale: 0.92 }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full bg-[#0F766E] text-white flex items-center justify-center shadow-lg shadow-[#0F766E]/30"><ArrowUp className="w-5 h-5" /></motion.button>
    )}</AnimatePresence>
  );
}
