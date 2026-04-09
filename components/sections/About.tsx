"use client";

import React from "react";
import Image from "next/image";
import { Container } from "../ui/Container";
import { Heading } from "../ui/Heading";
import { DICTIONARY } from "@/constants/content";
import { useLanguage } from "../LanguageContext";

export const About = () => {
  const { locale } = useLanguage();
  const d = DICTIONARY[locale].about;

  return (
    <section id="nosotros" className="py-24 bg-white overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/10 rounded-full z-0" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/5 rounded-full z-0" />
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
                alt="Working on glass project"
                width={600}
                height={600}
                className="relative z-10 object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute bottom-10 -right-4 lg:right-0 bg-white p-6 shadow-xl rounded-xl z-20 border border-slate-100 max-w-[200px]">
                <p className="text-accent font-bold text-xl mb-1">{d.isoQuality}</p>
                <p className="text-xs text-secondary leading-tight">{d.isoDesc}</p>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <p className="text-accent font-bold uppercase tracking-widest text-sm mb-4">{d.badge}</p>
            <Heading level={2} className="mb-8">
              {d.title}
            </Heading>
            <p className="text-secondary text-lg leading-relaxed mb-6">
              {d.description1}
            </p>
            <p className="text-secondary text-lg leading-relaxed mb-10">
              {d.description2}
            </p>
            
            <div className="grid grid-cols-2 gap-8">
                <div>
                    <h4 className="text-primary font-bold text-lg mb-2">{d.mission.title}</h4>
                    <p className="text-sm text-secondary">{d.mission.desc}</p>
                </div>
                <div>
                    <h4 className="text-primary font-bold text-lg mb-2">{d.vision.title}</h4>
                    <p className="text-sm text-secondary">{d.vision.desc}</p>
                </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
