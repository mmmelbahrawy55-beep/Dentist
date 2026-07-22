"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/components/ui/LanguageProvider";

const sections = [
  { id: "home", label: "Home", labelAr: "الرئيسية" },
  { id: "about", label: "About", labelAr: "عن العيادة" },
  { id: "services", label: "Services", labelAr: "خدماتنا" },
  { id: "doctors", label: "Doctors", labelAr: "أطباؤنا" },
  { id: "gallery", label: "Gallery", labelAr: "معرض الأعمال" },
  { id: "testimonials", label: "Reviews", labelAr: "التقييمات" },
  { id: "appointment", label: "Book", labelAr: "الحجز" },
  { id: "faq", label: "FAQ", labelAr: "الأسئلة" },
  { id: "contact", label: "Contact", labelAr: "تواصل" },
];

export default function ScrollProgress() {
  const [activeSection, setActiveSection] = useState("home");
  const [progress, setProgress] = useState(0);
  const { lang } = useLang();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);

      // Find active section
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 3) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col items-end gap-3">
      {sections.map((section) => {
        const isActive = activeSection === section.id;
        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="group flex items-center gap-3"
          >
            {/* Label - appears on hover */}
            <span className={`text-[11px] font-medium tracking-wide transition-all duration-300 ${
              isActive
                ? "text-[#C9A96E] opacity-100 translate-x-0"
                : "text-white/30 dark:text-white/30 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
            }`}>
              {lang === "ar" ? section.labelAr : section.label}
            </span>

            {/* Dot */}
            <div className="relative">
              <motion.div
                animate={{
                  width: isActive ? 10 : 4,
                  height: isActive ? 10 : 4,
                  backgroundColor: isActive ? "#C9A96E" : "rgba(255,255,255,0.2)",
                }}
                transition={{ duration: 0.3 }}
                className="rounded-full"
              />
              {isActive && (
                <motion.div
                  layoutId="activeDot"
                  className="absolute inset-0 rounded-full border border-[#C9A96E]/40"
                  style={{ margin: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
            </div>
          </a>
        );
      })}
    </div>
  );
}
