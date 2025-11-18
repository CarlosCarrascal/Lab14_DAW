import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Artículos sobre optimización SEO, rendimiento web y mejores prácticas en Next.js",
  keywords: ["blog", "Next.js", "SEO", "tutoriales", "optimización web", "rendimiento"],
  openGraph: {
    title: "Blog - Mi Sitio Optimizado",
    description: "Artículos sobre optimización SEO, rendimiento web y mejores prácticas en Next.js",
    type: "website",
    images: [
      {
        url: "/og-image-blog.png",
        width: 1200,
        height: 630,
        alt: "Blog - Mi Sitio Optimizado",
      },
    ],
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black py-16 px-8">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-black dark:text-white mb-8">
          Blog
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-12">
          Descubre artículos sobre optimización SEO, rendimiento web y mejores prácticas en Next.js
        </p>
        
        <div className="space-y-8">
          <article className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-3">
              Optimización de Imágenes en Next.js
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              Aprende cómo usar el componente Image de Next.js para optimizar automáticamente tus imágenes y mejorar el rendimiento.
            </p>
            <span className="text-sm text-zinc-500">Publicado: Noviembre 2024</span>
          </article>

          <article className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-3">
              Meta Tags para SEO
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              Descubre cómo implementar meta tags dinámicos para mejorar tu posicionamiento en buscadores y redes sociales.
            </p>
            <span className="text-sm text-zinc-500">Publicado: Noviembre 2024</span>
          </article>

          <article className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-3">
              Lazy Loading de Componentes
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              Reduce el tamaño inicial de tu bundle con dynamic imports y mejora el tiempo de carga de tu aplicación.
            </p>
            <span className="text-sm text-zinc-500">Publicado: Noviembre 2024</span>
          </article>
        </div>

        <div className="mt-12">
          <Link 
            href="/"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            ← Volver al inicio
          </Link>
        </div>
      </main>
    </div>
  );
}
