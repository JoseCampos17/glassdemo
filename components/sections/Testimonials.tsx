"use client";

import React from "react";
import { Container } from "../ui/Container";
import { Heading } from "../ui/Heading";
import { DICTIONARY } from "@/constants/content";
import { useLanguage } from "../LanguageContext";

export const Testimonials = () => {
    const { locale } = useLanguage();
    const d = DICTIONARY[locale].testimonials;
    const testimonials = d.items;

    return (
        <section className="py-24 bg-primary text-white">
            <Container>
                <div className="text-center mb-16">
                    <p className="text-accent font-bold uppercase tracking-widest text-sm mb-4">{d.badge}</p>
                    <Heading level={2} className="text-white">{d.title}</Heading>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {testimonials.map((t, i) => (
                        <div key={i} className="relative p-10 bg-white/5 rounded-2xl border border-white/10 italic">
                            <span className="absolute -top-6 left-10 text-8xl text-accent/20 font-serif">“</span>
                            <p className="text-xl mb-8 relative z-10">{t.quote}</p>
                            <div>
                                <p className="font-bold text-white not-italic">{t.author}</p>
                                <p className="text-white/50 text-sm not-italic uppercase tracking-widest">{t.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};
