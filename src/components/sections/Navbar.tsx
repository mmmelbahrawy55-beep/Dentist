"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValueEvent, useScroll, useMotionValue } from "framer-motion";
import { Menu, X, Sun, Moon, Phone, ArrowRight, Globe } from "lucide-react";
import { useTheme } from "@/components/ui/ThemeProvider";
import { useLang } from "@/components/ui/LanguageProvider";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { theme, toggle } = useTheme();
  const { lang, toggle: toggleLang, t } = useLang();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
    const total = typeof document !== "undefined" ? document.documentElement.scrollHeight - window.innerHeight : 1;
    setScrollProgress(total > 0 ? (latest / total) * 100 : 0);

    if (latest > lastScrollY && latest > 300) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setLastScrollY(latest);
  });

  const navLinks = [
    { label: t.nav.home, href: "#home" }, { label: t.nav.about, href: "#about" }, { label: t.nav.services, href: "#services" }, { label: t.nav.doctors, href: "#doctors" }, { label: t.nav.gallery, href: "#gallery" }, { label: t.nav.testimonials, href: "#testimonials" }, { label: t.nav.faq, href: "#faq" }, { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <>
      {/* Scroll progress bar - gold */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left"
        style={{
          scaleX: scrollProgress / 100,
          background: "linear-gradient(90deg, #C9A96E, #E8D5A8, #C9A96E)",
        }}
      />

      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidden ? -100 : 0, opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-[2px] left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}
      >
        {/* Glass background */}
        <motion.div
          animate={{
            backgroundColor: scrolled ? "rgba(10,10,15,0.85)" : "transparent",
            backdropFilter: scrolled ? "blur(40px) saturate(200%)" : "blur(0px)",
            boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)" : "none",
          }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 border-b border-white/[0.04]"
        />

        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 relative z-10">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a href="#home" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-[14px] bg-gradient-to-br from-[#C9A96E] to-[#E8D5A8] flex items-center justify-center shadow-lg shadow-[#C9A96E]/20 group-hover:shadow-[#C9A96E]/40 transition-shadow duration-500">
                <span className="text-[#0A0A0F] font-bold text-lg font-[family-name:var(--font-heading)]">E</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-lg font-bold font-[family-name:var(--font-heading)] text-white leading-none block tracking-tight">Elite</span>
                <span className="text-[9px] tracking-[0.25em] text-[#C9A96E] font-semibold uppercase">Dental Clinic</span>
              </div>
            </motion.a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-[13px] font-medium text-white/50 hover:text-[#C9A96E] transition-all duration-300 rounded-xl hover:bg-white/[0.04] group"
                >
                  {link.label}
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#C9A96E] group-hover:w-6 transition-all duration-500 ease-out rounded-full" />
                </a>
              ))}
            </nav>

            {/* Desktop actions */}
            <div className="hidden lg:flex items-center gap-2.5">
              <motion.button whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }} onClick={toggleLang} className="h-10 px-3 rounded-xl flex items-center justify-center gap-1.5 hover:bg-white/[0.06] transition-colors text-white/50 text-[13px] font-semibold">
                <Globe className="w-4 h-4" />{lang === "en" ? "عربي" : "EN"}
              </motion.button>
              <motion.button whileHover={{ scale: 1.08, rotate: 15 }} whileTap={{ scale: 0.92 }} onClick={toggle} className="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-white/[0.06] transition-colors text-white/50">
                <motion.div key={theme} initial={{ rotate: -90, scale: 0 }} animate={{ rotate: 0, scale: 1 }} transition={{ duration: 0.3 }}>
                  {theme === "dark" ? <Sun className="w-[18px] h-[18px]" /> : <Moon className="w-[18px] h-[18px]" />}
                </motion.div>
              </motion.button>
              <a href="tel:+15550123" className="flex items-center gap-2 text-[13px] font-semibold text-white/60 hover:text-[#C9A96E] transition-colors">
                <div className="w-8 h-8 rounded-lg bg-white/[0.06] flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5 text-[#C9A96E]" />
                </div>
                +1 (555) 0123
              </a>
              <motion.a
                href="#appointment"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#C9A96E] to-[#E8D5A8] text-[#0A0A0F] font-bold text-[12px] hover:shadow-[0_0_30px_rgba(201,169,110,0.3)] transition-all duration-500"
              >
                {t.nav.bookNow}<ArrowRight className="w-3.5 h-3.5" />
              </motion.a>
            </div>

            {/* Mobile actions */}
            <div className="flex items-center gap-2 lg:hidden">
              <motion.button whileTap={{ scale: 0.92 }} onClick={toggleLang} className="w-10 h-10 rounded-xl flex items-center justify-center text-[12px] font-bold text-white/50">
                {lang === "en" ? "عربي" : "EN"}
              </motion.button>
              <button onClick={toggle} className="w-10 h-10 rounded-xl flex items-center justify-center text-white/50">
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button onClick={() => setIsOpen(!isOpen)} className="w-10 h-10 rounded-xl flex items-center justify-center text-white/50">
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}><X className="w-5 h-5" /></motion.div>
                  ) : (
                    <motion.div key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}><Menu className="w-5 h-5" /></motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden overflow-hidden"
            >
              <motion.div className="bg-[#0A0A0F]/95 backdrop-blur-2xl border-t border-white/[0.06]">
                <div className="max-w-[1400px] mx-auto px-5 py-6 space-y-1">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      initial={{ opacity: 0, x: lang === "ar" ? 20 : -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 rounded-xl text-white/50 hover:text-[#C9A96E] hover:bg-white/[0.04] font-medium transition-all text-[15px]"
                    >
                      {link.label}
                    </motion.a>
                  ))}
                  <div className="pt-4 border-t border-white/[0.06]">
                    <a
                      href="#appointment"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-[#C9A96E] to-[#E8D5A8] text-[#0A0A0F] font-bold text-[14px] hover:shadow-[0_0_30px_rgba(201,169,110,0.3)] transition-all duration-500"
                    >
                      {t.nav.bookAppointment}<ArrowRight className="w-4 h-4" />
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
