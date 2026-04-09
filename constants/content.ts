export type Locale = "es" | "en";

export const SITE_CONFIG = {
  name: "LuxGlass Solutions",
  contact: {
    email: "info@luxglass.com",
    phone: "+34 900 000 000",
    address: "Polígono Industrial, Calle Cristal 12, Ciudad",
  },
  socials: {
    whatsapp: "#",
    instagram: "#",
    facebook: "#",
  },
};

export const DICTIONARY = {
  es: {
    nav: [
      { name: "Inicio", href: "#" },
      { name: "Servicios", href: "#servicios" },
      { name: "Nosotros", href: "#nosotros" },
      { name: "Proyectos", href: "#proyectos" },
      { name: "Contacto", href: "#contacto" },
    ],
    common: {
      requestQuote: "Presupuesto",
      requestQuoteFull: "Solicitar Presupuesto",
      learnMore: "Saber más",
      send: "Enviar Mensaje",
    },
    hero: {
      badge: "Expertos en Sistemas de Vidrio",
      title: "Artesanía en Vidrio y Ventanas de Alto Rendimiento",
      description: "Liderando la innovación en carpintería de PVC y soluciones en vidrio para proyectos arquitectónicos residenciales y comerciales.",
      viewProjects: "Ver Proyectos",
      ourServices: "Nuestros Servicios",
      stats: [
        { value: "+15", label: "Años de Experiencia" },
        { value: "500+", label: "Proyectos Completados" },
        { value: "100%", label: "Garantía de Calidad" },
      ],
    },
    services: {
      badge: "Lo que hacemos",
      title: "Soluciones Integrales en PVC y Vidrio",
      description: "Combinamos tecnología de vanguardia con artesanía tradicional para ofrecer los mejores resultados en cada obra.",
      items: [
        {
          title: "Residencial de Lujo",
          description: "Ventanas y puertas diseñadas para el confort, la eficiencia energética y la estética moderna.",
          image: "/residential",
        },
        {
          title: "Fachadas Comerciales",
          description: "Soluciones de acristalamiento estructural y muros cortina para edificios de alto impacto.",
          image: "/commercial",
        },
        {
          title: "Instalación Técnica",
          description: "Equipo propio especializado en montajes complejos y carpintería de precisión.",
          image: "/installation",
        },
      ],
    },
    about: {
      badge: "Sobre Nosotros",
      title: "Innovación y Transparencia en Cada Detalle",
      description1: "Empresa líder con más de 15 años transformando espacios a través del vidrio y el PVC. Nuestra filosofía se basa en la precisión técnica y la excelencia estética.",
      description2: "Ubicados en el corazón de la industria nacional, colaboramos con arquitectos y constructoras de primer nivel para llevar la luz natural a su máxima expresión, garantizando siempre el aislamiento térmico y acústico.",
      isoQuality: "Calidad ISO",
      isoDesc: "Certificados en los más altos estándares de seguridad y eficiencia.",
      mission: {
        title: "Misión",
        desc: "Proveer soluciones arquitectónicas sostenibles que mejoren la vida de las personas.",
      },
      vision: {
        title: "Visión",
        desc: "Ser el referente indiscutible en fachadas de vidrio de alto rendimiento en Europa.",
      },
    },
    projects: {
      badge: "Portafolio",
      title: "Nuestra Sello en la Arquitectura Moderna",
      viewAll: "Ver todo el portafolio",
      categories: {
        commercial: "Comercial",
        residential: "Residencial",
        interior: "Interiorismo",
        public: "Público",
      },
      items: [
        { title: "Torre Empresarial Alpha", category: "commercial" },
        { title: "Residencial La Moraleja", category: "residential" },
        { title: "Showroom Textil", category: "interior" },
        { title: "Centro Cultural G3", category: "public" },
      ],
    },
    testimonials: {
      badge: "Testimonios",
      title: "Lo que dicen nuestros clientes",
      items: [
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
      ],
    },
    cta: {
      title: "¿Preparado para elevar tu proyecto?",
      description: "Ofrecemos presupuestos personalizados sin compromiso en menos de 24 horas.",
    },
    contact: {
      title: "Hablemos de tu Próximo Proyecto",
      description: "Estamos listos para asesorarte y ofrecerte la mejor solución técnica para tus necesidades de vidrio y ventanas.",
      form: {
        name: "Nombre",
        namePlaceholder: "Tu nombre",
        company: "Empresa",
        companyPlaceholder: "Opcional",
        email: "Email",
        emailPlaceholder: "email@ejemplo.com",
        phone: "Teléfono",
        message: "Mensaje",
        messagePlaceholder: "Cuéntanos tu proyecto...",
      },
    },
    footer: {
      summary: "Liderando la industria del vidrio y PVC con soluciones arquitectónicas de alto rendimiento desde hace más de una década.",
      navigation: "Navegación",
      legal: "Legal",
      rights: "© {year} {name}. Todos los derechos reservados.",
      dev: "Desarrollado con precisión técnica por Antigravity",
    },
  },
  en: {
    nav: [
      { name: "Home", href: "#" },
      { name: "Services", href: "#servicios" },
      { name: "About", href: "#nosotros" },
      { name: "Projects", href: "#proyectos" },
      { name: "Contact", href: "#contacto" },
    ],
    common: {
      requestQuote: "Quote",
      requestQuoteFull: "Request a Quote",
      learnMore: "Learn More",
      send: "Send Message",
    },
    hero: {
      badge: "Experts in Glass Systems",
      title: "Glass Craftsmanship & High Performance Windows",
      description: "Leading innovation in PVC carpentry and glass solutions for residential and commercial architectural projects.",
      viewProjects: "View Projects",
      ourServices: "Our Services",
      stats: [
        { value: "+15", label: "Years of Experience" },
        { value: "500+", label: "Projects Completed" },
        { value: "100%", label: "Quality Guarantee" },
      ],
    },
    services: {
      badge: "What We Do",
      title: "Comprehensive PVC & Glass Solutions",
      description: "We combine cutting-edge technology with traditional craftsmanship to offer the best results in every project.",
      items: [
        {
          title: "Luxury Residential",
          description: "Windows and doors designed for comfort, energy efficiency, and modern aesthetics.",
          image: "/residential",
        },
        {
          title: "Commercial Facades",
          description: "Structural glazing solutions and curtain walls for high-impact buildings.",
          image: "/commercial",
        },
        {
          title: "Technical Installation",
          description: "Our own team specialized in complex assemblies and precision carpentry.",
          image: "/installation",
        },
      ],
    },
    about: {
      badge: "About Us",
      title: "Innovation and Transparency in Every Detail",
      description1: "A leading company with more than 15 years transforming spaces through glass and PVC. Our philosophy is based on technical precision and aesthetic excellence.",
      description2: "Located in the heart of the national industry, we collaborate with top-tier architects and construction companies to bring natural light to its maximum expression, always guaranteeing thermal and acoustic insulation.",
      isoQuality: "ISO Quality",
      isoDesc: "Certified in the highest safety and efficiency standards.",
      mission: {
        title: "Mission",
        desc: "Provide sustainable architectural solutions that improve people's lives.",
      },
      vision: {
        title: "Vision",
        desc: "To be the undisputed reference in high-performance glass facades in Europe.",
      },
    },
    projects: {
      badge: "Portfolio",
      title: "Our Signature in Modern Architecture",
      viewAll: "View all portfolio",
      categories: {
        commercial: "Commercial",
        residential: "Residential",
        interior: "Interior Design",
        public: "Public",
      },
      items: [
        { title: "Alpha Business Tower", category: "commercial" },
        { title: "La Moraleja Residential", category: "residential" },
        { title: "Textile Showroom", category: "interior" },
        { title: "G3 Cultural Center", category: "public" },
      ],
    },
    testimonials: {
      badge: "Testimonials",
      title: "What our clients say",
      items: [
        {
          quote: "The precision in installing the curtain walls in our corporate building was exceptional. A trusted partner.",
          author: "Carlos Méndez",
          role: "Project Director, InmoCorp",
        },
        {
          quote: "We were looking for energy efficiency and aesthetics for our passive house. LuxGlass exceeded all expectations.",
          author: "Elena Sanz",
          role: "Independent Architect",
        },
      ],
    },
    cta: {
      title: "Ready to elevate your project?",
      description: "We offer personalized quotes without commitment in less than 24 hours.",
    },
    contact: {
      title: "Let's Talk About Your Next Project",
      description: "We are ready to advise you and offer the best technical solution for your glass and window needs.",
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        company: "Company",
        companyPlaceholder: "Optional",
        email: "Email",
        emailPlaceholder: "email@example.com",
        phone: "Phone",
        message: "Message",
        messagePlaceholder: "Tell us about your project...",
      },
    },
    footer: {
      summary: "Leading the glass and PVC industry with high-performance architectural solutions for over a decade.",
      navigation: "Navigation",
      legal: "Legal",
      rights: "© {year} {name}. All rights reserved.",
      dev: "Developed with technical precision by Antigravity",
    },
  },
};

// Backwards compatibility/defaults - to be removed after refactoring components
export const SERVICES = DICTIONARY.es.services.items;
export const NAV_LINKS = DICTIONARY.es.nav;
