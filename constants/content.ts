export type Locale = "es" | "en";
import { IMAGES } from "./images";

export const SITE_CONFIG = {
  name: "Nuvo PVC",
  contact: {
    email: "contacto@nuvopvc.cl",
    phone: "+56 9 1234 5678",
    address: "Santiago, Chile",
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
      badge: "Vanguardia en Ventanas y Puertas",
      title: "Diseño Moderno y Aislación Térmica Superior",
      description: "Transformamos tu hogar con ventanas y puertas de PVC de alto rendimiento. Estética europea y eficiencia energética a precios directos de fábrica.",
      viewProjects: "Ver Proyectos",
      ourServices: "Nuestros Servicios",
      stats: [
        { value: "+10", label: "Años en Chile" },
        { value: "1000+", label: "Hogares Protegidos" },
        { value: "100%", label: "Calidad Nuvo" },
      ],
    },
    services: {
      badge: "Soluciones Nuvo",
      title: "Especialistas en Ventanas y Puertas de PVC",
      description: "Combinamos tecnología de termopanel con perfiles de alta durabilidad para ofrecer el mejor confort térmico y acústico.",
      items: [
        {
          title: "Ventanas Termopanel",
          description: "Máxima aislación del frío y el ruido. Diseños modernos que ahorran energía en tu hogar.",
          image: IMAGES.services.residential,
        },
        {
          title: "Puertas de PVC",
          description: "Seguridad y estilo. Puertas exteriores e interiores resistentes a cualquier clima.",
          image: IMAGES.services.commercial,
        },
        {
          title: "Proyectos a Medida",
          description: "Cerramientos, ventanales y soluciones personalizadas con instalación técnica profesional.",
          image: IMAGES.services.installation,
        },
      ],
    },
    about: {
      badge: "Sobre Nuvo PVC",
      title: "Innovación y Ahorro en Cada Apertura",
      description1: "En Nuvo PVC redefinimos el confort de los hogares chilenos a través de soluciones de diseño y alta eficiencia, demostrando que la vanguardia arquitectónica puede ser accesible.",
      description2: "Somos expertos en la fabricación e instalación de ventanas y puertas de PVC, enfocados en mejorar la calidad de vida de nuestros clientes mediante la mejor relación precio-calidad del mercado.",
      isoQuality: "Alta Eficiencia",
      isoDesc: "Garantizamos el máximo ahorro en calefacción con nuestros sistemas de aislación.",
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2000",
      mission: {
        title: "Misión",
        desc: "Entregar confort térmico de alta gama a través de aberturas de PVC accesibles, eficientes y con un diseño moderno para todo Chile.",
      },
      vision: {
        title: "Visión",
        desc: "Liderar la transformación de los espacios habitables en Chile, creando hogares más inteligentes, térmicos y silenciosos con tecnología Nuvo.",
      },
    },
    projects: {
      badge: "Nuestro Trabajo",
      title: "Proyectos que Inspiran",
      viewAll: "Ver Portafolio Completo",
      categories: {
        commercial: "Comercial",
        residential: "Residencial",
        interior: "Interiorismo",
        public: "Público",
      },
      items: [
        { title: "Casa Lo Barnechea", category: "residential" },
        { title: "Edificio Oficinas Providencia", category: "commercial" },
        { title: "Renovación Integral Ñuñoa", category: "residential" },
        { title: "Showroom Vitacura", category: "interior" },
      ],
    },
    testimonials: {
      badge: "Clientes Felices",
      title: "Opiniones Reales",
      items: [
        {
          quote: "Cambiamos todas las ventanas de la casa por termopaneles de Nuvo PVC y el cambio en la temperatura fue inmediato. Muy recomendados.",
          author: "Andrés Silva",
          role: "Cliente Residencial",
        },
        {
          quote: "La mejor relación precio-calidad que encontré en Santiago. Las puertas de PVC quedaron impecables y muy seguras.",
          author: "Marcela Paz",
          role: "Arquitecta",
        },
      ],
    },
    cta: {
      title: "¿Listo para renovar tu hogar?",
      description: "Obtén un presupuesto gratuito para tus ventanas y puertas de PVC hoy mismo.",
    },
    contact: {
      title: "Cotiza tu Proyecto",
      description: "Estamos listos para asesorarte con la mejor solución técnica en PVC para tus necesidades.",
      form: {
        name: "Nombre",
        namePlaceholder: "Tu nombre",
        company: "Ciudad",
        companyPlaceholder: "Ej: Santiago",
        email: "Email",
        emailPlaceholder: "tu@email.com",
        phone: "Teléfono",
        message: "Mensaje",
        messagePlaceholder: "¿Qué necesitas para tu proyecto?...",
      },
    },
    footer: {
      summary: "Expertos en ventanas y puertas de PVC con alta eficiencia térmica. Calidad Nuvo para el hogar moderno.",
      navigation: "Navegación",
      legal: "Legal",
      rights: "© {year} {name}. Todos los derechos reservados.",
      dev: "Desarrollado para Nuvo PVC por Antigravity",
    },
  },
  en: {
    nav: [
      { name: "Home", href: "#" },
      { name: "Services", href: "#services" },
      { name: "About", href: "#about" },
      { name: "Projects", href: "#projects" },
      { name: "Contact", href: "#contact" },
    ],
    common: {
      requestQuote: "Quote",
      requestQuoteFull: "Request a Quote",
      learnMore: "Learn More",
      send: "Send Message",
    },
    hero: {
      badge: "PVC Windows & Doors Leaders",
      title: "Modern Design & Superior Thermal Insulation",
      description: "Transform your home with high-performance PVC windows and doors. European aesthetics and energy efficiency at factory prices.",
      viewProjects: "View Projects",
      ourServices: "Our Services",
      stats: [
        { value: "+10", label: "Years in Chile" },
        { value: "1000+", label: "Protected Homes" },
        { value: "100%", label: "Nuvo Quality" },
      ],
    },
    services: {
      badge: "Nuvo Solutions",
      title: "PVC Window & Door Specialists",
      description: "We combine double glazing technology with high-durability profiles to offer the best thermal and acoustic comfort.",
      items: [
        {
          title: "Double Glazed Windows",
          description: "Maximum cold and noise insulation. Modern designs that save energy in your home.",
          image: IMAGES.services.residential,
        },
        {
          title: "PVC Doors",
          description: "Security and style. Exterior and interior doors resistant to any climate.",
          image: IMAGES.services.commercial,
        },
        {
          title: "Custom Projects",
          description: "Enclosures, large windows, and personalized solutions with professional technical installation.",
          image: IMAGES.services.installation,
        },
      ],
    },
    about: {
      badge: "About Nuvo PVC",
      title: "Innovation and Savings in Every Opening",
      description1: "At Nuvo PVC we redefine the comfort of Chilean homes through design and high-efficiency solutions, demonstrating that architectural vanguard can be accessible.",
      description2: "We are experts in the manufacturing and installation of PVC windows and doors, focused on improving the quality of life of our clients through the best price-quality ratio on the market.",
      isoQuality: "High Efficiency",
      isoDesc: "We guarantee maximum heating savings with our insulation systems.",
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2000",
      mission: {
        title: "Mission",
        desc: "Deliver high-end thermal comfort through accessible, efficient PVC openings with a modern design for all of Chile.",
      },
      vision: {
        title: "Vision",
        desc: "To lead the transformation of living spaces in Chile, creating smarter, warmer, and quieter homes with Nuvo technology.",
      },
    },
    projects: {
      badge: "Our Work",
      title: "Inspiring Projects",
      viewAll: "View Full Portfolio",
      categories: {
        commercial: "Commercial",
        residential: "Residential",
        interior: "Interior Design",
        public: "Public",
      },
      items: [
        { title: "Lo Barnechea House", category: "residential" },
        { title: "Providencia Office Building", category: "commercial" },
        { title: "Ñuñoa Integral Renovation", category: "residential" },
        { title: "Vitacura Showroom", category: "interior" },
      ],
    },
    testimonials: {
      badge: "Happy Clients",
      title: "Real Reviews",
      items: [
        {
          quote: "We changed all the windows in the house for Nuvo PVC double glazing and the change in temperature was immediate. Highly recommended.",
          author: "Andrés Silva",
          role: "Residential Client",
        },
        {
          quote: "The best price-quality ratio I found in Santiago. The PVC doors were perfect and very safe.",
          author: "Marcela Paz",
          role: "Architect",
        },
      ],
    },
    cta: {
      title: "Ready to renovate your home?",
      description: "Get a free quote for your PVC windows and doors today.",
    },
    contact: {
      title: "Quote your Project",
      description: "We are ready to advise you with the best technical PVC solution for your needs.",
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        company: "City",
        companyPlaceholder: "e.g. Santiago",
        email: "Email",
        emailPlaceholder: "your@email.com",
        phone: "Phone",
        message: "Message",
        messagePlaceholder: "What do you need for your project?...",
      },
    },
    footer: {
      summary: "Experts in high thermal efficiency PVC windows and doors. Nuvo quality for the modern home.",
      navigation: "Navigation",
      legal: "Legal",
      rights: "© {year} {name}. All rights reserved.",
      dev: "Developed for Nuvo PVC by Antigravity",
    },
  },
};

// Backwards compatibility/defaults - to be removed after refactoring components
export const SERVICES = DICTIONARY.es.services.items;
export const NAV_LINKS = DICTIONARY.es.nav;
