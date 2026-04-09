"use client";

import React from "react";
import { Container } from "../ui/Container";
import { Heading } from "../ui/Heading";
import { Button } from "../ui/Button";
import { DICTIONARY } from "@/constants/content";
import { useLanguage } from "../LanguageContext";

export const CTA = () => {
    const { locale } = useLanguage();
    const d = DICTIONARY[locale];
    const c = d.cta;

    return (
        <section className="py-20 bg-accent overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <Container className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-white max-w-2xl">
                    <Heading level={2} className="text-white mb-4">{c.title}</Heading>
                    <p className="text-white/80 text-lg font-medium">{c.description}</p>
                </div>
                <Button variant="none" size="lg" className="bg-white text-primary hover:bg-slate-100 px-10 rounded-none shadow-2xl font-bold" href="#contacto">
                    {d.common.requestQuoteFull}
                </Button>


            </Container>
        </section>
    );
};
