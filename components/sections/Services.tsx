import React from "react";
import Image from "next/image";
import { Container } from "../ui/Container";
import { Heading } from "../ui/Heading";
import { SERVICES } from "@/constants/content";
import { IMAGES } from "@/constants/images";

export const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-light">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Lo que hacemos</p>
          <Heading level={2} className="mb-6">
            Soluciones Integrales en Aluminio y Vidrio
          </Heading>
          <p className="text-secondary text-lg">
            Combinamos tecnología de vanguardia con artesanía tradicional para ofrecer los mejores resultados en cada obra.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service: { title: string; description: string; image: string }) => {
            const imageKey = service.image.replace("/", "") as keyof typeof IMAGES.services;
            const imageUrl = IMAGES.services[imageKey];

            return (
              <div key={service.title} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors duration-500" />
                </div>
                <div className="p-8">
                  <Heading level={3} className="text-xl mb-4">
                    {service.title}
                  </Heading>
                  <p className="text-secondary leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <button className="text-accent font-bold text-sm uppercase tracking-wider flex items-center group-hover:translate-x-2 transition-transform duration-300">
                    Saber más 
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
