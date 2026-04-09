import React from "react";
import { Container } from "../ui/Container";
import { Heading } from "../ui/Heading";
import { Button } from "../ui/Button";
import { SITE_CONFIG } from "@/constants/content";
import { WhatsAppIcon, InstagramIcon, FacebookIcon } from "../ui/Icons";

export const Contact = () => {
    return (
        <section id="contacto" className="py-24 bg-white">
            <Container>
                <div className="bg-primary rounded-[2rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
                    <div className="lg:w-1/2 p-10 lg:p-20 text-white flex flex-col justify-between">
                        <div>
                            <Heading level={2} className="text-white mb-8">Hablemos de tu Próximo Proyecto</Heading>
                            <p className="text-white/70 text-lg mb-12">
                                Estamos listos para asesorarte y ofrecerte la mejor solución técnica para tus necesidades de vidrio y ventanas.
                            </p>
                            
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-white/50 uppercase tracking-widest font-bold">Email</p>
                                        <p className="text-lg">{SITE_CONFIG.contact.email}</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-white/50 uppercase tracking-widest font-bold">Teléfono</p>
                                        <p className="text-lg">{SITE_CONFIG.contact.phone}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 flex flex-wrap gap-8">
                            <a href={`https://wa.me/${SITE_CONFIG.contact.phone.replace(/\s/g, "")}`} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-accent font-bold transition-all hover:scale-110" aria-label="WhatsApp">
                                <WhatsAppIcon className="w-8 h-8" />
                            </a>
                            <a href={SITE_CONFIG.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-accent font-bold transition-all hover:scale-110" aria-label="Instagram">
                                <InstagramIcon className="w-8 h-8" />
                            </a>
                            <a href={SITE_CONFIG.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-accent font-bold transition-all hover:scale-110" aria-label="Facebook">
                                <FacebookIcon className="w-8 h-8" />
                            </a>
                        </div>
                    </div>

                    <div className="lg:w-1/2 bg-white p-10 lg:p-20">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-primary uppercase tracking-wider">Nombre</label>
                                    <input type="text" className="w-full bg-light border-none rounded-lg p-4 focus:ring-2 focus:ring-accent outline-none" placeholder="Tu nombre" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-primary uppercase tracking-wider">Empresa</label>
                                    <input type="text" className="w-full bg-light border-none rounded-lg p-4 focus:ring-2 focus:ring-accent outline-none" placeholder="Opcional" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-primary uppercase tracking-wider">Email</label>
                                <input type="email" className="w-full bg-light border-none rounded-lg p-4 focus:ring-2 focus:ring-accent outline-none" placeholder="email@ejemplo.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-primary uppercase tracking-wider">Mensaje</label>
                                <textarea className="w-full bg-light border-none rounded-lg p-4 h-32 focus:ring-2 focus:ring-accent outline-none resize-none" placeholder="Cuéntanos tu proyecto..."></textarea>
                            </div>
                            <Button size="lg" className="w-full py-5 text-xl font-bold uppercase tracking-widest shadow-xl shadow-accent/20">
                                Enviar Mensaje
                            </Button>
                        </form>
                    </div>
                </div>
            </Container>
        </section>
    );
};
