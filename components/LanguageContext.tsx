"use client";

import React, { createContext, useContext, useState } from "react";
import { Locale } from "@/constants/content";

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocale] = useState<Locale>("es");

  const toggleLanguage = () => {
    setLocale((prev) => (prev === "es" ? "en" : "es"));
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
