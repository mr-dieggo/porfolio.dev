import { getAbsoluteLocaleUrl, getRelativeLocaleUrl } from "astro:i18n"
import { defaultLang, ui, type Lang, type UIKey } from "./ui"

export const getLang = (locale: string | undefined): Lang =>
  locale === "en" ? "en" : defaultLang

export const useTranslations = (lang: Lang) => (key: UIKey) => ui[lang][key]

export const otherLang = (lang: Lang): Lang => (lang === "es" ? "en" : "es")

/** "/" for Spanish, "/en/" for English */
export const localeHome = (lang: Lang) => getRelativeLocaleUrl(lang)

/** "https://mrdieggo.dev/" or "https://mrdieggo.dev/en/" (plus an optional path) */
export const absoluteUrl = (lang: Lang, path = "") => getAbsoluteLocaleUrl(lang, path)

export const ogLocale: Record<Lang, string> = { es: "es_CL", en: "en_US" }

const escapeHtml = (text: string) =>
  text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")

/**
 * Escapes a translation and turns **bold** into <strong>. Only used with
 * strings written in ui.ts, never with user input.
 */
export const rich = (text: string) =>
  escapeHtml(text).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")

/** Removes the **bold** markers, for plain-text and Markdown output */
export const plain = (text: string) => text.replace(/\*\*(.+?)\*\*/g, "$1")
