# Guía de Optimización SEO y Rendimiento

Esta guía documenta las mejores prácticas de SEO y optimización de rendimiento implementadas en este proyecto Next.js.

## Tabla de Contenidos

1. [Meta Tags Dinámicos](#meta-tags-dinámicos)
2. [Sitemap y Robots.txt](#sitemap-y-robotstxt)
3. [Optimización de Imágenes](#optimización-de-imágenes)
4. [Lazy Loading de Componentes](#lazy-loading-de-componentes)
5. [Optimización de Fuentes](#optimización-de-fuentes)
6. [Herramientas de Validación](#herramientas-de-validación)

## Meta Tags Dinámicos

### Cómo Agregar Metadata a una Nueva Página

En Next.js App Router, exporta un objeto `metadata` desde tu página:

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Título de tu Página",
  description: "Descripción de tu página (150-160 caracteres)",
  keywords: ["palabra1", "palabra2", "palabra3"],
  openGraph: {
    title: "Título para Redes Sociales",
    description: "Descripción para compartir en redes sociales",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Descripción de la imagen",
      },
    ],
  },
};

export default function MiPagina() {
  // Tu componente
}
```

### Usando Helpers de Metadata

Puedes usar las funciones helper en `lib/utils/metadata.ts`:

```typescript
import { generateMetadata } from "@/lib/utils/metadata";

export const metadata = generateMetadata({
  title: "Mi Página",
  description: "Descripción de mi página",
  keywords: ["next.js", "seo"],
  openGraph: {
    title: "Mi Página",
    description: "Descripción para redes sociales",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
});
```

### Mejores Prácticas

- **Títulos únicos**: Cada página debe tener un título único y descriptivo (50-60 caracteres)
- **Descripciones**: Mantén las descripciones entre 150-160 caracteres
- **Keywords**: Usa 5-10 palabras clave relevantes
- **Open Graph**: Siempre incluye imágenes de 1200x630px para redes sociales

## Sitemap y Robots.txt

### Actualizar el Sitemap

El sitemap se genera automáticamente desde `app/sitemap.ts`. Para agregar nuevas rutas:

```typescript
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/nueva-ruta`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
  ];
}
```

### Configurar Robots.txt

El archivo `public/robots.txt` controla qué pueden rastrear los buscadores:

```
User-agent: *
Allow: /
Disallow: /admin/

Sitemap: https://tu-dominio.com/sitemap.xml
```

## Optimización de Imágenes

### Usar el Componente Image de Next.js

Siempre usa el componente `Image` de Next.js para optimización automática:

```typescript
import Image from "next/image";

<Image
  src="/mi-imagen.jpg"
  alt="Descripción detallada de la imagen"
  width={800}
  height={600}
  priority={false} // true solo para imágenes above-the-fold
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

### Mejores Prácticas

- **Alt text**: Siempre incluye texto alternativo descriptivo
- **Dimensiones**: Especifica width y height para prevenir layout shift
- **Priority**: Solo marca como `priority` las imágenes above-the-fold
- **Sizes**: Usa el prop `sizes` para imágenes responsive
- **Formatos**: Next.js convierte automáticamente a WebP/AVIF

### Configuración de Imágenes

En `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};
```

## Lazy Loading de Componentes

### Implementar Dynamic Imports

Usa `dynamic()` para cargar componentes pesados solo cuando se necesiten:

```typescript
import dynamic from 'next/dynamic';

const ComponentePesado = dynamic(() => import('./ComponentePesado'), {
  loading: () => <div>Cargando...</div>,
  ssr: false, // Deshabilita SSR si el componente es solo cliente
});

export default function MiPagina() {
  return (
    <div>
      <h1>Mi Página</h1>
      <ComponentePesado />
    </div>
  );
}
```

### Cuándo Usar Lazy Loading

- Componentes grandes (>50KB)
- Contenido below-the-fold
- Modales y overlays
- Widgets de terceros
- Componentes que requieren interacción del usuario

### Loading States

Siempre proporciona un estado de carga para mejor UX:

```typescript
const ComponenteDinamico = dynamic(() => import('./Componente'), {
  loading: () => (
    <div className="animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-gray-200 rounded"></div>
    </div>
  ),
});
```

## Optimización de Fuentes

### Usar next/font/google

Next.js optimiza automáticamente las fuentes de Google:

```typescript
import { Inter, Roboto } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  );
}
```

### Mejores Prácticas

- **Subsets**: Solo carga los subsets necesarios (ej: 'latin')
- **Display**: Usa `display: 'swap'` para prevenir FOIT
- **Pesos**: Limita los pesos de fuente a los que realmente uses
- **Variables CSS**: Usa variables CSS para aplicar fuentes consistentemente
- **Límite**: No uses más de 2-3 familias de fuentes

## Herramientas de Validación

### SEO y Meta Tags

- [Meta Tags Checker](https://metatags.io/) - Valida meta tags
- [Facebook Debugger](https://developers.facebook.com/tools/debug/) - Valida Open Graph
- [Twitter Card Validator](https://cards-dev.twitter.com/validator) - Valida Twitter Cards
- [Google Rich Results Test](https://search.google.com/test/rich-results) - Valida datos estructurados

### Sitemap y Robots

- [Google Search Console](https://search.google.com/search-console) - Envía y valida sitemap
- [XML Sitemap Validator](https://www.xml-sitemaps.com/validate-xml-sitemap.html) - Valida formato XML

### Rendimiento

- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Auditoría completa
- [PageSpeed Insights](https://pagespeed.web.dev/) - Métricas de rendimiento
- [WebPageTest](https://www.webpagetest.org/) - Testing detallado

### Core Web Vitals

Objetivos a alcanzar:

- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

## Checklist de SEO

Antes de lanzar a producción:

- [ ] Todas las páginas tienen meta tags únicos
- [ ] Sitemap.xml está actualizado y accesible
- [ ] Robots.txt está configurado correctamente
- [ ] Todas las imágenes tienen alt text descriptivo
- [ ] Imágenes usan el componente Image de Next.js
- [ ] Componentes pesados usan lazy loading
- [ ] Fuentes están optimizadas con next/font
- [ ] NEXT_PUBLIC_SITE_URL está configurado en producción
- [ ] Open Graph images son 1200x630px
- [ ] Lighthouse score > 90 en todas las categorías
- [ ] Core Web Vitals están en verde

## Recursos Adicionales

- [Next.js Metadata API](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Next.js Font Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
- [Google SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)
