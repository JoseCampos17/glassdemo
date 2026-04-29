import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LanguageProvider } from "@/components/LanguageContext";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nuvopvc.cl"),
  title: {
    default: "Nuvo PVC | Ventanas y Puertas de Alta Eficiencia en Chile",
    template: "%s | Nuvo PVC Chile"
  },
  description: "Líderes en ventanas y puertas de PVC con tecnología de termopanel en Chile. Ahorra hasta un 40% en calefacción con nuestra aislación térmica y acústica superior. Precios de fábrica y calidad europea.",
  keywords: [
    "ventanas de pvc chile", 
    "puertas de pvc santiago", 
    "termopanel santiago", 
    "aislación térmica ventanas", 
    "ventanas antiruido", 
    "eficiencia energética hogar", 
    "perfiles de pvc para ventanas",
    "instalación de ventanas pvc",
    "nuvo pvc"
  ],
  authors: [{ name: "Nuvo PVC", url: "https://nuvopvc.cl" }],
  creator: "Nuvo PVC Chile",
  publisher: "Nuvo PVC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "es-CL": "/es",
      "en-US": "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://nuvopvc.cl",
    title: "Nuvo PVC | Expertos en Ventanas y Puertas de PVC de Alta Eficiencia",
    description: "Transforma tu hogar con la mejor aislación térmica de Chile. Ventanas y puertas de PVC de diseño europeo con tecnología termopanel.",
    siteName: "Nuvo PVC Chile",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Nuvo PVC - Soluciones de Vidrio y PVC de Vanguardia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuvo PVC Chile | Ventanas y Puertas Térmicas",
    description: "Máximo confort y ahorro energético con ventanas de PVC de alta gama.",
    images: ["/images/hero.jpg"],
    creator: "@nuvopvc",
  },
  icons: {
    icon: [
      { url: "/favicon.png" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/favicon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "google-site-verification-placeholder", // Reemplazar con el código real de Google Search Console
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Nuvo PVC",
  "image": "https://nuvopvc.cl/images/hero.jpg",
  "@id": "https://nuvopvc.cl",
  "url": "https://nuvopvc.cl",
  "telephone": "+56912345678",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Santiago",
    "addressLocality": "Santiago",
    "addressRegion": "Región Metropolitana",
    "postalCode": "8320000",
    "addressCountry": "CL"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -33.4489,
    "longitude": -70.6693
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://www.facebook.com/nuvopvc",
    "https://www.instagram.com/nuvopvc"
  ],
  "priceRange": "$$$"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white">
        <LanguageProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
