import React from "react";
import { Container } from "../ui/Container";
import { Heading } from "../ui/Heading";

export const Testimonials = () => {
    const testimonials = [
        {
            quote: "La precisión en la instalación de los muros cortina en nuestro edificio corporativo fue excepcional. Un socio de confianza.",
            author: "Carlos Méndez",
            role: "Director de Proyectos, InmoCorp",
        },
        {
            quote: "Buscábamos eficiencia energética y estética para nuestra casa pasiva. LuxGlass superó todas las expectativas.",
            author: "Elena Sanz",
            role: "Arquitecta Independiente",
        },
    ];

    return (
        <section className="py-24 bg-primary text-white">
            <Container>
                <div className="text-center mb-16">
                    <p className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Testimonios</p>
                    <Heading level={2} className="text-white">Lo que dicen nuestros clientes</Heading>
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
