"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { Heading } from "../ui/Heading";
import { DICTIONARY } from "@/constants/content";
import { IMAGES } from "@/constants/images";
import { useLanguage } from "../LanguageContext";

export const Projects = () => {
    const { locale } = useLanguage();
    const d = DICTIONARY[locale];
    const p = d.projects;

    const projectList = p.items.map((item, index) => ({
        ...item,
        image: IMAGES.projects[index],
        categoryLabel: p.categories[item.category as keyof typeof p.categories]
    }));

    return (
        <section id="proyectos" className="py-24 bg-light overflow-hidden">
            <Container>
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left"
                >
                    <div className="max-w-2xl">
                        <p className="text-accent font-bold uppercase tracking-widest text-sm mb-4">{p.badge}</p>
                        <Heading level={2}>{p.title}</Heading>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projectList.map((project, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="group relative h-[400px] overflow-hidden rounded-2xl cursor-pointer"
                        >

                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute bottom-0 left-0 p-10 translate-y-10 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                                <p className="text-accent font-bold text-sm uppercase tracking-widest mb-2">{project.categoryLabel}</p>
                                <h3 className="text-white text-3xl font-bold">{project.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
};
