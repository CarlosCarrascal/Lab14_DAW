import Image from "next/image";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

// Dynamic import con loading state
const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
  loading: () => (
    <div className="w-full max-w-4xl mx-auto mt-12 p-8 bg-zinc-100 dark:bg-zinc-900 rounded-xl animate-pulse">
      <div className="h-8 bg-zinc-300 dark:bg-zinc-700 rounded w-3/4 mb-6"></div>
      <div className="space-y-4">
        <div className="h-4 bg-zinc-300 dark:bg-zinc-700 rounded"></div>
        <div className="h-4 bg-zinc-300 dark:bg-zinc-700 rounded w-5/6"></div>
        <div className="h-4 bg-zinc-300 dark:bg-zinc-700 rounded w-4/6"></div>
      </div>
    </div>
  ),
});

export const metadata: Metadata = {
  title: "Home",
  description: "Bienvenido a Mi Sitio Optimizado. Aprende cómo mejorar el rendimiento y SEO en Next.js con técnicas avanzadas.",
  keywords: ["Next.js", "SEO", "optimización", "rendimiento web", "React", "desarrollo web"],
  openGraph: {
    title: "Home - Mi Sitio Optimizado",
    description: "Aprende cómo mejorar el rendimiento y SEO en Next.js con técnicas avanzadas",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mi Sitio Optimizado - Home",
      },
    ],
  },
};

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Logotipo de Next.js - Framework de React para producción"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Bienvenido a Mi Sitio Optimizado
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Aprende cómo mejorar el rendimiento y SEO en Next.js con técnicas avanzadas de optimización.
          </p>
          
          {/* Ejemplo de imagen optimizada con responsive sizing */}
          <div className="w-full max-w-md mt-4">
            <Image
              src="/next.svg"
              alt="Ejemplo de imagen optimizada con Next.js Image component"
              width={800}
              height={400}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="/blog"
          >
            Ver Blog
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentación
          </a>
        </div>
        
        {/* Componente cargado dinámicamente */}
        <HeavyComponent />
      </main>
    </div>
  );
}
