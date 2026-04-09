"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "../ui/Container";
import { DICTIONARY, SITE_CONFIG } from "@/constants/content";
import { Button } from "../ui/Button";
import { useLanguage } from "../LanguageContext";

export const Navbar = () => {
  const { locale, toggleLanguage } = useLanguage();
  const d = DICTIONARY[locale];
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || isMenuOpen ? "bg-white shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <Container className="flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className={`text-2xl font-bold tracking-tighter ${(scrolled || isMenuOpen) ? "text-primary" : "text-white"}`}>
            {SITE_CONFIG.name.split(" ")[0]}
            <span className="text-accent underline decoration-2 underline-offset-4">
              {SITE_CONFIG.name.split(" ")[1]}
            </span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {d.nav.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                scrolled ? "text-secondary" : "text-white/90"
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="flex items-center space-x-2 border-l border-white/20 pl-6 ml-2">
            <button 
                onClick={toggleLanguage}
                className={`text-xs font-bold transition-all px-2 py-1 rounded ${
                    locale === 'es' ? "bg-accent text-white" : scrolled ? "text-secondary hover:text-accent" : "text-white/60 hover:text-white"
                }`}
            >
                ES
            </button>
            <button 
                onClick={toggleLanguage}
                className={`text-xs font-bold transition-all px-2 py-1 rounded ${
                    locale === 'en' ? "bg-accent text-white" : scrolled ? "text-secondary hover:text-accent" : "text-white/60 hover:text-white"
                }`}
            >
                EN
            </button>
          </div>

          <Button 
            size="sm" 
            variant={scrolled ? "primary" : "none"} 
            className={!scrolled ? "border-2 border-white text-white hover:bg-white hover:text-primary font-bold" : ""}
            href="#contacto"
          >
            {d.common.requestQuote}
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
            <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={(scrolled || isMenuOpen) ? "text-primary" : "text-white"}
                aria-label="Toggle menu"
            >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isMenuOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    )}
                </svg>
            </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full left-0 py-6 px-4 shadow-xl">
            <div className="flex flex-col space-y-4">
                <div className="flex justify-center space-x-4 mb-4 pb-4 border-b border-slate-50">
                    <button 
                        onClick={() => { toggleLanguage(); }}
                        className={`px-4 py-2 rounded-lg font-bold text-sm ${locale === 'es' ? 'bg-primary text-white' : 'bg-slate-100 text-slate-500'}`}
                    >
                        Español
                    </button>
                    <button 
                        onClick={() => { toggleLanguage(); }}
                        className={`px-4 py-2 rounded-lg font-bold text-sm ${locale === 'en' ? 'bg-primary text-white' : 'bg-slate-100 text-slate-500'}`}
                    >
                        English
                    </button>
                </div>
                {d.nav.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-lg font-bold text-primary hover:text-accent transition-colors py-2 border-b border-slate-50"
                    >
                        {link.name}
                    </Link>
                ))}
                <Button size="lg" className="w-full mt-4" href="#contacto" onClick={() => setIsMenuOpen(false)}>
                    {d.common.requestQuoteFull}
                </Button>
            </div>
        </div>
      )}
    </nav>
  );
};
