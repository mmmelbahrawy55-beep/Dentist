"use client";

import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from "react";
import en from "@/lib/locales/en.json";
import ar from "@/lib/locales/ar.json";

type Lang = "en" | "ar";

interface LangContextType {
  lang: Lang;
  dir: "ltr" | "rtl";
  t: typeof en;
  toggle: () => void;
  setLang: (l: Lang) => void;
}

const translations = { en, ar };

const LangContext = createContext<LangContextType>({
  lang: "en",
  dir: "ltr",
  t: en,
  toggle: () => {},
  setLang: () => {},
});

export function useLang() {
  return useContext(LangContext);
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved) setLangState(saved);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    localStorage.setItem("lang", lang);
  }, [lang, mounted]);

  const toggle = useCallback(() => {
    setLangState((l) => (l === "en" ? "ar" : "en"));
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <LangContext.Provider value={{ lang, dir: lang === "ar" ? "rtl" : "ltr", t: translations[lang], toggle, setLang }}>
      {children}
    </LangContext.Provider>
  );
}
