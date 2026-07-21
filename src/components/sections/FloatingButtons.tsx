"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, ArrowUp, Send } from "lucide-react";

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>{isOpen && (
        <motion.div initial={{ opacity: 0, scale: 0.85, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.85, y: 20 }} transition={{ duration: 0.4 }} className="absolute bottom-[72px] right-0 w-[300px] bg-white/95 dark:bg-[#0A0A0F]/95 backdrop-blur-xl rounded-2xl p-5 mb-2 border border-[#B08D4F]/[0.08] dark:border-white/[0.08] shadow-2xl">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
              </div>
              <div>
                <h4 className="font-bold font-[family-name:var(--font-heading)] text-[#1A1A2E] dark:text-white text-[15px]">Chat with us</h4>
                <p className="text-[11px] text-[#555] dark:text-white/40">Usually replies instantly</p>
              </div>
            </div>
            <motion.button onClick={() => setIsOpen(false)} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-7 h-7 rounded-lg bg-[#B08D4F]/[0.06] dark:bg-white/[0.06] flex items-center justify-center">
              <X className="w-3.5 h-3.5 text-[#555] dark:text-white/50" />
            </motion.button>
          </div>
          <div className="bg-[#B08D4F]/[0.03] dark:bg-white/[0.04] rounded-xl p-3 mb-4 border border-[#B08D4F]/[0.06] dark:border-white/[0.06]">
            <p className="text-[13px] text-[#555] dark:text-white/60 leading-relaxed">Hi there! How can we help you today?</p>
          </div>
          <a href="https://wa.me/15550123456" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#25D366] text-white font-semibold text-[14px] hover:bg-[#20BD5A] transition-colors">
            <Send className="w-4 h-4" />Start Chat
          </a>
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
      <motion.button initial={{ opacity: 0, scale: 0.8, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.8, y: 20 }} whileHover={{ scale: 1.08, y: -3 }} whileTap={{ scale: 0.92 }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full bg-[#C9A96E] text-[#0A0A0F] flex items-center justify-center shadow-lg shadow-[#C9A96E]/30 hover:shadow-[#C9A96E]/50 transition-shadow">
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    )}</AnimatePresence>
  );
}
