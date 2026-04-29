"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { Heading } from "../ui/Heading";
import { Button } from "../ui/Button";
import { IMAGES } from "@/constants/images";
import { DICTIONARY } from "@/constants/content";
import { useLanguage } from "../LanguageContext";

export const Hero = () => {
  const { locale } = useLanguage();
  const d = DICTIONARY[locale].hero;

  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Zoom Animation */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src={IMAGES.hero}
          alt="Modern Architectural Glass"
          fill
          sizes="100vw"
          className="object-cover brightness-[0.4]"
          priority
        />
      </motion.div>

      <Container className="relative z-10 pt-20">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-white uppercase bg-accent/20 border border-accent/40 rounded-full backdrop-blur-sm"
          >
            {d.badge}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Heading level={1} className="text-white mb-6 leading-[1.1]">
              {d.title}
            </Heading>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed"
          >
            {d.description}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="rounded-none" href="#proyectos">
              {d.viewProjects}
            </Button>
            <Button size="lg" variant="none" className="rounded-none border-2 border-white text-white hover:bg-white hover:text-primary font-bold" href="#servicios">
              {d.ourServices}
            </Button>
          </motion.div>
        </div>
      </Container>

      {/* Stats with Staggered Animation */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-0 left-0 w-full bg-primary/40 backdrop-blur-xl border-t border-white/10 py-8 hidden md:block"
      >
        <Container className="grid grid-cols-3 gap-8">
            {d.stats.map((stat, i) => (
                <div key={i} className="text-white">
                    <p className="text-3xl font-bold text-accent">{stat.value}</p>
                    <p className="text-sm opacity-60 uppercase tracking-widest">{stat.label}</p>
                </div>
            ))}
        </Container>
      </motion.div>
    </section>
  );
};
