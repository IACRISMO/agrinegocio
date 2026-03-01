# AGRONORTE INGENIEROS — Landing Page

Landing page corporativa para AGRONORTE INGENIEROS. Diseño mobile-first con Next.js, Tailwind CSS y Lucide React.

## Requisitos

- Node.js 18+
- npm

## Instalación

```bash
npm install
```

## Configuración

1. **WhatsApp:** Edita el número en `src/components/HeroSection.tsx` y `src/components/CTASection.tsx` (constante `PHONE_WHATSAPP`). Formato: código país + número sin espacios (ej: `51987654321`).

2. **Imágenes:** Coloca fotos de campo y equipo en `public/images/` y reemplaza los placeholders en `HeroSection.tsx` e `ImagePlaceholderSection.tsx` por componentes `<Image>` de Next.js.

## Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Estructura

- `src/app/page.tsx` — Página principal que compone todas las secciones
- `src/components/` — Header, Hero, Servicios, Cultivos, Por qué elegirnos, CTA, Footer, placeholders de imágenes

Paleta: verde agrícola (principal), amarillo (resaltes), blanco/gris claro (fondos).
