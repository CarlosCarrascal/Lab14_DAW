import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Mi Sitio Optimizado - SEO y Rendimiento",
    template: "%s | Mi Sitio Optimizado",
  },
  description: "Aprende sobre optimización SEO y rendimiento en Next.js con técnicas avanzadas para mejorar tu web.",
  keywords: ["Next.js", "SEO", "optimización web", "rendimiento", "React", "TypeScript"],
  authors: [{ name: "Tu Nombre" }],
  creator: "Tu Nombre",
  publisher: "Mi Sitio Optimizado",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  openGraph: {
    title: "Mi Sitio Optimizado - SEO y Rendimiento",
    description: "Descubre técnicas avanzadas para mejorar tu web con Next.js",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    siteName: "Mi Sitio Optimizado",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mi Sitio Optimizado - SEO y Rendimiento",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mi Sitio Optimizado - SEO y Rendimiento",
    description: "Descubre técnicas avanzadas para mejorar tu web con Next.js",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
