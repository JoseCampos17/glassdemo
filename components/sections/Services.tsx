"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { Heading } from "../ui/Heading";
import { DICTIONARY } from "@/constants/content";
import { useLanguage } from "../LanguageContext";

export const Services = () => {
  const { locale } = useLanguage();
  const d = DICTIONARY[locale];
  const s = d.services;

  return (
    <section id="servicios" className="py-24 bg-light overflow-hidden">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-accent font-bold uppercase tracking-widest text-sm mb-4">{s.badge}</p>
          <Heading level={2} className="mb-6">
            {s.title}
          </Heading>
          <p className="text-secondary text-lg">
            {s.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {s.items.map((service, index) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors duration-500" />
              </div>
              <div className="p-8 text-center">
                <Heading level={3} className="text-xl mb-4">
                  {service.title}
                </Heading>
                <p className="text-secondary leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
