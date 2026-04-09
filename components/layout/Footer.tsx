"use client";

import React from "react";
import { Container } from "../ui/Container";
import { SITE_CONFIG, DICTIONARY } from "@/constants/content";
import { WhatsAppIcon, InstagramIcon, FacebookIcon } from "../ui/Icons";
import { useLanguage } from "../LanguageContext";


export const Footer = () => {
    const { locale } = useLanguage();
    const d = DICTIONARY[locale];
    const f = d.footer;

    return (
        <footer className="bg-primary pt-20 pb-10 text-white border-t border-white/5">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <span className="text-3xl font-bold tracking-tighter mb-6 block">
                            {SITE_CONFIG.name.split(" ")[0]}
                            <span className="text-accent">{SITE_CONFIG.name.split(" ")[1]}</span>
                        </span>
                        <p className="text-white/50 text-lg max-w-sm leading-relaxed">
                            {f.summary}
                        </p>
                    </div>
                    
                    <div>
                        <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-accent">{f.navigation}</h4>
                        <ul className="space-y-4">
                            {d.nav.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-white/60 hover:text-white transition-colors">{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-accent">{f.legal}</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-white/60 hover:text-white transition-colors">{locale === 'es' ? 'Aviso Legal' : 'Legal Notice'}</a></li>
                            <li><a href="#" className="text-white/60 hover:text-white transition-colors">{locale === 'es' ? 'Política de Privacidad' : 'Privacy Policy'}</a></li>
                            <li><a href="#" className="text-white/60 hover:text-white transition-colors">Cookies</a></li>
                        </ul>
                    </div>

                    <div className="flex space-x-6 items-center">
                        <a href={`https://wa.me/${SITE_CONFIG.contact.phone.replace(/\s/g, "")}`} className="text-white/40 hover:text-white transition-all hover:scale-110" aria-label="WhatsApp">
                            <WhatsAppIcon className="w-6 h-6" />
                        </a>
                        <a href={SITE_CONFIG.socials.instagram} className="text-white/40 hover:text-white transition-all hover:scale-110" aria-label="Instagram">
                            <InstagramIcon className="w-6 h-6" />
                        </a>
                        <a href={SITE_CONFIG.socials.facebook} className="text-white/40 hover:text-white transition-all hover:scale-110" aria-label="Facebook">
                            <FacebookIcon className="w-6 h-6" />
                        </a>
                    </div>


                </div>

                <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-white/30 text-sm">
                        {f.rights.replace('{year}', new Date().getFullYear().toString()).replace('{name}', SITE_CONFIG.name)}
                    </p>
                    <div className="flex space-x-6 text-white/30 text-sm">
                        <p>{f.dev}</p>
                    </div>
                </div>
            </Container>
        </footer>
    );
};
