import React from "react";
import Image from "next/image";
import { Container } from "../ui/Container";
import { Heading } from "../ui/Heading";
import { IMAGES } from "@/constants/images";

export const Projects = () => {
    const projectList = [
        { title: "Torre Empresarial Alpha", category: "Comercial", image: IMAGES.projects[0] },
        { title: "Residencial La Moraleja", category: "Residencial", image: IMAGES.projects[1] },
        { title: "Showroom Textil", category: "Interiorismo", image: IMAGES.projects[2] },
        { title: "Centro Cultural G3", category: "Público", image: IMAGES.projects[3] },
    ];

    return (
        <section id="proyectos" className="py-24 bg-light">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
                    <div className="max-w-2xl">
                        <p className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Portafolio</p>
                        <Heading level={2}>Nuestra Sello en la Arquitectura Moderna</Heading>
                    </div>
                    <button className="text-accent font-bold border-b-2 border-accent pb-1 hover:text-primary hover:border-primary transition-colors">
                        Ver todo el portafolio
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projectList.map((project: { title: string; category: string; image: string }, index) => (
                        <div key={index} className="group relative h-[400px] overflow-hidden rounded-2xl cursor-pointer">

                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute bottom-0 left-0 p-10 translate-y-10 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                                <p className="text-accent font-bold text-sm uppercase tracking-widest mb-2">{project.category}</p>
                                <h3 className="text-white text-3xl font-bold">{project.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};
