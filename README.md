# Mi Sitio Optimizado - Next.js con SEO y Rendimiento

Este es un proyecto [Next.js](https://nextjs.org) optimizado para SEO y rendimiento, implementando las mejores prácticas de desarrollo web moderno.

## ✨ Características de Optimización

### 🎯 SEO Avanzado
- **Meta Tags Dinámicos**: Metadata personalizada por página con soporte para Open Graph y Twitter Cards
- **Sitemap Automático**: Generación dinámica de sitemap.xml para mejor indexación
- **Robots.txt**: Configuración optimizada para crawlers de búsqueda
- **Structured Data**: Datos estructurados para rich snippets en resultados de búsqueda

### ⚡ Optimización de Rendimiento
- **Optimización de Imágenes**: Uso de next/image con conversión automática a WebP/AVIF
- **Lazy Loading**: Carga diferida de componentes pesados con dynamic imports
- **Font Optimization**: Fuentes optimizadas con next/font/google
- **Code Splitting**: División automática del código para reducir bundle size

### 📊 Core Web Vitals
- LCP (Largest Contentful Paint) < 2.5s
- FID (First Input Delay) < 100ms
- CLS (Cumulative Layout Shift) < 0.1

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load fonts.

## 🚀 Configuración Inicial

1. **Clonar el repositorio**
```bash
git clone <tu-repositorio>
cd mi-proyecto-seo
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
Crea un archivo `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. **Ejecutar en desarrollo**
```bash
npm run dev
```

## 📁 Estructura del Proyecto

```
├── app/
│   ├── layout.tsx          # Layout raíz con metadata base
│   ├── page.tsx            # Homepage con metadata personalizada
│   ├── blog/               # Página de ejemplo
│   ├── sitemap.ts          # Generación de sitemap
│   └── components/         # Componentes reutilizables
├── lib/
│   ├── types/              # Definiciones de tipos TypeScript
│   └── utils/              # Funciones helper para metadata
├── public/
│   └── robots.txt          # Configuración de crawlers
└── docs/
    └── SEO_GUIDE.md        # Guía completa de SEO

```

## 🛠️ Herramientas de Validación

### SEO
- [Meta Tags Checker](https://metatags.io/) - Valida meta tags
- [Facebook Debugger](https://developers.facebook.com/tools/debug/) - Valida Open Graph
- [Twitter Card Validator](https://cards-dev.twitter.com/validator) - Valida Twitter Cards

### Rendimiento
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Auditoría completa
- [PageSpeed Insights](https://pagespeed.web.dev/) - Métricas de rendimiento
- [WebPageTest](https://www.webpagetest.org/) - Testing detallado

### Sitemap
- [Google Search Console](https://search.google.com/search-console) - Envía y valida sitemap
- [XML Sitemap Validator](https://www.xml-sitemaps.com/validate-xml-sitemap.html) - Valida formato

## 📖 Documentación

Para una guía completa sobre cómo usar las características de SEO y optimización, consulta [docs/SEO_GUIDE.md](docs/SEO_GUIDE.md).

### Temas Cubiertos:
- Cómo agregar metadata a nuevas páginas
- Actualizar el sitemap
- Optimización de imágenes
- Implementar lazy loading
- Optimización de fuentes
- Checklist de SEO

## 🔍 Verificar Optimizaciones

### Sitemap
Visita [http://localhost:3000/sitemap.xml](http://localhost:3000/sitemap.xml) para ver el sitemap generado.

### Robots.txt
Visita [http://localhost:3000/robots.txt](http://localhost:3000/robots.txt) para ver la configuración de robots.

### Meta Tags
Inspecciona el código fuente de cualquier página (Ctrl+U) para ver los meta tags en el `<head>`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
