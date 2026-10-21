import type { Localized } from "@/i18n/types"

export const degree = {
  title: {
    es: "Ingeniería Civil en Informática",
    en: "Computer Engineering (Ingeniería Civil en Informática)",
  },
  institution: "Universidad de Los Lagos",
  place: "Osorno, Chile",
  date: "2019 – 2025",
  description: {
    es: "Proyecto de título: PICIR, una plataforma de ciberseguridad para analizar y proteger redes internas.",
    en: "Thesis project: PICIR, a cybersecurity platform to analyze and protect internal networks.",
  },
} satisfies {
  title: Localized
  institution: string
  place: string
  date: string
  description: Localized
}

export interface Certification {
  /** Official names, kept as issued */
  name: string
  issuer: string
  date: Localized
  dateTime: string
}

// Newest first
export const certifications = [
  {
    name: "IA para profesionales de negocios",
    issuer: "HP LIFE",
    date: { es: "ago. 2026", en: "Aug 2026" },
    dateTime: "2026-08",
  },
  {
    name: "IA para principiantes",
    issuer: "HP LIFE",
    date: { es: "jun. 2026", en: "Jun 2026" },
    dateTime: "2026-06",
  },
  {
    name: "Academy Accreditation — Generative AI Fundamentals",
    issuer: "Databricks Academy",
    date: { es: "ago. 2025", en: "Aug 2025" },
    dateTime: "2025-08",
  },
  {
    name: "Fundamentos de Privacidad y Cumplimiento (Essentials)",
    issuer: "Capacitación USACH",
    date: { es: "mar. 2025", en: "Mar 2025" },
    dateTime: "2025-03",
  },
] satisfies Certification[]
