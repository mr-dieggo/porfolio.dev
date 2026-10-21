# Diego Molina · Portafolio

<div align="center">
<a href="https://mrdieggo.dev/">
<img src="./public/og.jpg" alt="Portada del portafolio de Diego Molina">
</a>
<p></p>

![Astro](https://img.shields.io/badge/Astro-FF5D01?logo=astro&logoColor=fff&style=flat)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=flat)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=flat)
![Cloudflare Workers](https://img.shields.io/badge/Cloudflare%20Workers-F38020?logo=cloudflare&logoColor=fff&style=flat)

**[mrdieggo.dev](https://mrdieggo.dev/)** · [English version](https://mrdieggo.dev/en/)

</div>

Portafolio de **Diego Molina**, Ingeniero Civil en Informática de Osorno, Chile. Reúne mi experiencia, proyectos, servicios informáticos, formación y contacto, en español y en inglés.

> **English:** personal portfolio of Diego Molina, a Computer Engineer from Osorno, Chile. Bilingual (Spanish at `/`, English at `/en/`), built with Astro and Tailwind CSS and deployed on Cloudflare Workers.

## Qué incluye

- **Experiencia laboral**, en una línea de tiempo.
- **Proyectos**, con portadas propias, y una lista compacta de experimentos.
- **Servicios**: desarrollo de software, soporte técnico, redes y ciberseguridad, y audiovisual en vivo.
- **Sobre mí y formación**: título y certificaciones.
- **Contacto**, con botón para copiar el correo, y CV descargable en español e inglés.
- **Dos idiomas** con las rutas de Astro: `/` y `/en/`, con selector que mantiene la sección.
- **SEO**: canonical y `hreflang` por idioma, Open Graph, datos estructurados (JSON-LD) y sitemap con las dos versiones.
- **Para modelos de lenguaje**: [`/llms.txt`](https://mrdieggo.dev/llms.txt) y la página completa en Markdown ([`/index.md`](https://mrdieggo.dev/index.md), [`/en.md`](https://mrdieggo.dev/en.md)).
- **Accesibilidad y rendimiento**: Lighthouse 100 en las cuatro categorías, modo claro y oscuro sin destello, y navegación con teclado.

## Tecnologías

- [Astro 4](https://astro.build) (sitio estático, i18n nativo)
- [Tailwind CSS 3](https://tailwindcss.com)
- TypeScript
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) y astro-robots-txt
- [Cloudflare Workers](https://developers.cloudflare.com/workers/static-assets/) (archivos estáticos, despliegue automático desde `main`)

## Desarrollo local

Requiere Node.js 22 o superior y pnpm 10. La versión de pnpm está fijada en `package.json`; con [Corepack](https://nodejs.org/api/corepack.html) se usa sola.

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # revisa tipos (astro check) y genera dist/
pnpm preview    # sirve dist/ localmente
```

## Estructura

```text
src/
├── i18n/          # textos de la interfaz (ui.ts), utilidades y generador de Markdown
├── data/          # experiencia, proyectos, servicios, formación y secciones, en español e inglés
├── components/    # HomePage.astro arma la página; un componente por sección
├── layouts/       # Layout.astro: <head>, SEO, tema y estilos globales
└── pages/         # / y /en/ (envoltorios de HomePage), 404, llms.txt e index.md
public/            # imágenes, portadas de proyectos y CV en PDF
wrangler.jsonc     # configuración de Cloudflare Workers
```

## Cómo actualizar el contenido

- **Textos de la interfaz:** `src/i18n/ui.ts`.
- **Experiencia, proyectos, servicios y formación:** los archivos de `src/data/`.

Cada texto tiene su versión `es` y `en`. Si falta una traducción, `pnpm build` falla, así que ningún idioma queda incompleto. `llms.txt` y las versiones Markdown se generan desde esos mismos datos.

## Despliegue

Cada push a `main` se publica en Cloudflare Workers (Workers Builds): se compila con `pnpm run build` y se despliega con `npx wrangler deploy`. Las direcciones inexistentes muestran la página 404 del idioma que corresponde.

## Créditos y licencia

Basado en la plantilla [porfolio.dev](https://github.com/midudev/porfolio.dev) de [midudev](https://midu.dev), publicada bajo licencia [CC BY-NC 4.0](./LICENSE.md). Este proyecto mantiene esa licencia: puedes reutilizarlo con atribución y sin fines comerciales.
