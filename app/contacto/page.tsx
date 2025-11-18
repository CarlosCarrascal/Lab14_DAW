import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Ponte en contacto con nosotros. Estamos aquí para ayudarte con tus proyectos de optimización SEO y rendimiento web.",
  keywords: ["contacto", "soporte", "ayuda", "consultoría SEO", "Next.js"],
  openGraph: {
    title: "Contacto - Mi Sitio Optimizado",
    description: "Ponte en contacto con nosotros para consultas sobre SEO y optimización web",
    type: "website",
    images: [
      {
        url: "/og-image-contacto.png",
        width: 1200,
        height: 630,
        alt: "Contacto - Mi Sitio Optimizado",
      },
    ],
  },
};

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black py-16 px-8">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-black dark:text-white mb-8">
          Contacto
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-12">
          ¿Tienes preguntas sobre optimización SEO o rendimiento web? Estamos aquí para ayudarte.
        </p>
      </main>
    </div>
  );
}
