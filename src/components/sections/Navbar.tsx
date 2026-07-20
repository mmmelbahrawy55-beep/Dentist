"use client";

import { useState } from "react";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X, Sun, Moon, Phone, ArrowRight, Globe } from "lucide-react";
import { useTheme } from "@/components/ui/ThemeProvider";
import { useLang } from "@/components/ui/LanguageProvider";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { theme, toggle } = useTheme();
  const { lang, toggle: toggleLang, t } = useLang();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
    const total = typeof document !== "undefined" ? document.documentElement.scrollHeight - window.innerHeight : 1;
    setScrollProgress(total > 0 ? (latest / total) * 100 : 0);
  });

  const navLinks = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.doctors, href: "#doctors" },
    { label: t.nav.gallery, href: "#gallery" },
    { label: t.nav.testimonials, href: "#testimonials" },
    { label: t.nav.faq, href: "#faq" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[1px] z-[60] origin-left"
        style={{
          scaleX: scrollProgress / 100,
          background: "linear-gradient(90deg, #B08D4F, #C9A96E, #E8D5A8, #C9A96E, #B08D4F)",
        }}
      />

      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-[1px] left-0 right-0 z-50 transition-all duration-700 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <motion.div
          animate={{
            backgroundColor: scrolled ? "rgba(5,5,5,0.92)" : "transparent",
            backdropFilter: scrolled ? "blur(40px) saturate(200%)" : "blur(0px)",
            boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.3)" : "none",
          }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        />

        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 relative z-10">
          <div className="flex items-center justify-between">
            <motion.a
              href="#home"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 group"
            >
              <div className="w-11 h-11 rounded-[14px] bg-gradient-to-br from-[#C9A96E] to-[#E8D5A8] flex items-center justify-center shadow-lg shadow-[#C9A96E]/20 group-hover:shadow-[#C9A96E]/30 transition-shadow duration-500">
                <span className="text-[#0A0A0A] font-bold text-lg font-[family-name:var(--font-heading)]">E</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-lg font-bold font-[family-name:var(--font-heading)] text-white leading-none block tracking-tight">
                  Elite
                </span>
                <span className="text-[9px] tracking-[0.25em] text-[#C9A96E] font-semibold uppercase">
                  Dental Clinic
                </span>
              </div>
            </motion.a>

            <nav className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-[13px] font-medium text-[#888] hover:text-[#C9A96E] transition-all duration-300 rounded-xl hover:bg-[#C9A96E]/[0.04] group"
                >
                  {link.label}
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#C9A96E] group-hover:w-6 transition-all duration-500 ease-out" />
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-2.5">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                onClick={toggleLang}
                className="h-10 px-3 rounded-xl flex items-center justify-center gap-1.5 hover:bg-[#C9A96E]/[0.06] transition-colors duration-300 text-[#888] text-[13px] font-semibold"
                aria-label="Toggle language"
              >
                <Globe className="w-4 h-4" />
                {lang === "en" ? "عربي" : "EN"}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.08, rotate: 15 }}
                whileTap={{ scale: 0.92 }}
                onClick={toggle}
                className="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-[#C9A96E]/[0.06] transition-colors duration-300 text-[#888]"
                aria-label="Toggle theme"
              >
                <motion.div
                  key={theme}
                  initial={{ rotate: -90, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  {theme === "dark" ? <Sun className="w-[18px] h-[18px]" /> : <Moon className="w-[18px] h-[18px]" />}
                </motion.div>
              </motion.button>

              <a href="tel:+15550123" className="flex items-center gap-2 text-[13px] font-semibold text-white hover:text-[#C9A96E] transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#C9A96E]/10 flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5 text-[#C9A96E]" />
                </div>
                +1 (555) 0123
              </a>

              <motion.a
                href="#appointment"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="btn-premium text-[12px] py-2.5 px-6 rounded-xl"
              >
                {t.nav.bookNow}
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.a>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <motion.button
                whileTap={{ scale: 0.92 }}
                onClick={toggleLang}
                className="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-[#C9A96E]/[0.06] transition-colors text-[12px] font-bold text-[#888]"
              >
                {lang === "en" ? "عربي" : "EN"}
              </motion.button>
              <button
                onClick={toggle}
                className="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-[#C9A96E]/[0.06] transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="w-5 h-5 text-[#888]" /> : <Moon className="w-5 h-5 text-[#888]" />}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-[#C9A96E]/[0.06] transition-colors"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <X className="w-5 h-5 text-[#888]" />
                    </motion.div>
                  ) : (
                    <motion.div key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <Menu className="w-5 h-5 text-[#888]" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden overflow-hidden"
            >
              <motion.div className="glass-strong border-t border-[#C9A96E]/10">
                <div className="max-w-[1400px] mx-auto px-5 py-6 space-y-1">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      initial={{ opacity: 0, x: lang === "ar" ? 20 : -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 rounded-xl text-[#888] hover:text-[#C9A96E] hover:bg-[#C9A96E]/[0.04] font-medium transition-all text-[15px]"
                    >
                      {link.label}
                    </motion.a>
                  ))}
                  <div className="pt-4 border-t border-[#C9A96E]/10">
                    <a href="#appointment" onClick={() => setIsOpen(false)} className="btn-premium w-full justify-center text-center text-[14px]">
                      {t.nav.bookAppointment}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
