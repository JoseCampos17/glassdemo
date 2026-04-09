import React from "react";
import Image from "next/image";
import { Container } from "../ui/Container";
import { Heading } from "../ui/Heading";
import { Button } from "../ui/Button";
import { IMAGES } from "@/constants/images";
import { SITE_CONFIG } from "@/constants/content";

export const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={IMAGES.hero}
          alt="Modern Architectural Glass"
          fill
          className="object-cover brightness-[0.4]"
          priority
        />
      </div>

      <Container className="relative z-10 pt-20">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-white uppercase bg-accent/20 border border-accent/40 rounded-full backdrop-blur-sm">
            Expertos en Sistemas de Vidrio
          </div>
          <Heading level={1} className="text-white mb-6 leading-[1.1]">
            {SITE_CONFIG.title}
          </Heading>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed">
            {SITE_CONFIG.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="rounded-none" href="#proyectos">
              Ver Proyectos
            </Button>
            <Button size="lg" variant="none" className="rounded-none border-2 border-white text-white hover:bg-white hover:text-primary font-bold" href="#servicios">
              Nuestros Servicios
            </Button>

          </div>

        </div>
      </Container>

      {/* Stats or Bottom Detail */}
      <div className="absolute bottom-0 left-0 w-full bg-primary/40 backdrop-blur-xl border-t border-white/10 py-8 hidden md:block">
        <Container className="grid grid-cols-3 gap-8">
            <div className="text-white">
                <p className="text-3xl font-bold text-accent">+15</p>
                <p className="text-sm opacity-60 uppercase tracking-widest">Años de Experiencia</p>
            </div>
            <div className="text-white">
                <p className="text-3xl font-bold text-accent">500+</p>
                <p className="text-sm opacity-60 uppercase tracking-widest">Proyectos Completados</p>
            </div>
            <div className="text-white">
                <p className="text-3xl font-bold text-accent">100%</p>
                <p className="text-sm opacity-60 uppercase tracking-widest">Garantía de Calidad</p>
            </div>
        </Container>
      </div>
    </section>
  );
};
