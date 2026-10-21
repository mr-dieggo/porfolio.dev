import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"

import robotsTxt from "astro-robots-txt"
import sitemap from "@astrojs/sitemap"
import { rename, rm } from "node:fs/promises"

// Astro writes src/pages/en/404.astro to en/404/index.html, but the Workers
// "404-page" handling looks for the nearest 404.html, so move it there.
const localized404 = {
  name: "localized-404",
  hooks: {
    "astro:build:done": async ({ dir }) => {
      await rename(new URL("en/404/index.html", dir), new URL("en/404.html", dir))
      await rm(new URL("en/404/", dir), { recursive: true, force: true })
    },
  },
}

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    sitemap({
      i18n: { defaultLocale: "es", locales: { es: "es", en: "en" } },
      // Only HTML pages; llms.txt and the Markdown copies are not pages
      filter: (page) => !/\.(md|txt)$/.test(page),
    }),
    robotsTxt(),
    localized404,
  ],
  site: 'https://mrdieggo.dev/',
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: { prefixDefaultLocale: false },
  },
})
