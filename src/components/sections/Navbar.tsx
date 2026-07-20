"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Phone, ChevronRight } from "lucide-react";
import { useTheme } from "@/components/ui/ThemeProvider";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Doctors", href: "#doctors" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary/20 z-[60]"
        initial={{ scaleX: 0 }}
        style={{ scaleX: scrollProgress / 100, transformOrigin: "0%" }}
      />
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-1 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-strong premium-shadow py-3" : "py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <motion.a
              href="#home"
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3"
            >
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-bold text-lg font-[family-name:var(--font-heading)]">E</span>
              </div>
              <div>
                <span className="text-lg font-bold font-[family-name:var(--font-heading)] text-text-primary dark:text-white leading-none block">
                  Elite
                </span>
                <span className="text-[10px] tracking-[0.2em] text-primary font-semibold uppercase">
                  Dental Clinic
                </span>
              </div>
            </motion.a>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-text-secondary dark:text-slate-300 hover:text-primary transition-colors rounded-xl hover:bg-primary/5 group"
                >
                  {link.label}
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full group-hover:w-6 transition-all duration-300" />
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={toggle}
                className="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-primary/10 transition-colors text-text-secondary dark:text-slate-300"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <a
                href="tel:+15550123"
                className="flex items-center gap-2 text-sm font-semibold text-text-primary dark:text-white"
              >
                <Phone className="w-4 h-4 text-primary" />
                +1 (555) 0123
              </a>

              <a href="#appointment" className="btn-primary text-sm py-3 px-6">
                Book Now
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={toggle}
                className="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-primary/10 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-primary/10 transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
              className="lg:hidden glass-strong border-t border-primary/10 overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-4 py-6 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 rounded-xl text-text-secondary dark:text-slate-300 hover:text-primary hover:bg-primary/5 font-medium transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <div className="pt-4 border-t border-primary/10">
                  <a href="#appointment" className="btn-primary w-full justify-center text-center">
                    Book Appointment
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
