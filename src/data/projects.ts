import type { Localized } from "@/i18n/types"

export type TagKey =
  | "NEXT"
  | "TAILWIND"
  | "PYTHON"
  | "QT"
  | "REACT"
  | "NODE"
  | "EXPRESS"
  | "MYSQL"
  | "TYPESCRIPT"
  | "ASTRO"
  | "GO"
  | "EXPO"
  | "POSTGRESQL"
  | "VITE"
  | "GOOGLECLOUD"

/** Plain tag names, for the Markdown and llms.txt versions of the site */
export const tagNames: Record<TagKey, string> = {
  NEXT: "Next.js",
  TAILWIND: "Tailwind CSS",
  PYTHON: "Python",
  QT: "PySide6 (Qt)",
  REACT: "React",
  NODE: "Node.js",
  EXPRESS: "Express",
  MYSQL: "MySQL",
  TYPESCRIPT: "TypeScript",
  ASTRO: "Astro",
  GO: "Go",
  EXPO: "Expo",
  POSTGRESQL: "PostgreSQL",
  VITE: "Vite",
  GOOGLECLOUD: "Google Cloud",
}

export interface ProjectEntry {
  title: Localized
  description: Localized
  /** Cover image per language (the covers carry text) */
  image?: Localized
  tags: TagKey[]
  link?: string
  github?: string
  note?: Localized
  experiment?: boolean
}

export const projects = [
  {
    title: {
      es: "Pide Sano - Delivery solo de comida saludable",
      en: "Pide Sano - Healthy-only food delivery",
    },
    description: {
      es: "Marketplace de delivery donde solo se vende comida saludable, con lanzamiento en Osorno. Monorepo con una API en Go, apps en Expo para comercios, repartidores y clientes, una consola de operaciones en Next.js e infraestructura en Google Cloud con Terraform.",
      en: "Delivery marketplace that only sells healthy food, launching in Osorno. Monorepo with a Go API, Expo apps for merchants, couriers and customers, a Next.js operations console and Google Cloud infrastructure managed with Terraform.",
    },
    image: { es: "/projects/pide-sano.svg", en: "/projects/pide-sano.en.svg" },
    tags: ["GO", "EXPO", "NEXT", "POSTGRESQL", "GOOGLECLOUD"],
    note: {
      es: "Cofundador · en desarrollo · repositorio privado",
      en: "Co-founder · in development · private repository",
    },
  },
  {
    title: {
      es: "PICIR - Plataforma de ciberseguridad para redes internas",
      en: "PICIR - Cybersecurity platform for internal networks",
    },
    description: {
      es: "Mi proyecto de título: una aplicación de escritorio para analizar y proteger redes internas. Descubre los equipos conectados, escanea sus puertos y servicios con Nmap y permite administrarlos de forma remota por SSH.",
      en: "My thesis project: a desktop app to analyze and protect internal networks. It discovers connected devices, scans their ports and services with Nmap and lets you manage them remotely over SSH.",
    },
    github: "https://github.com/mr-dieggo/PICIR",
    image: { es: "/projects/picir.svg", en: "/projects/picir.en.svg" },
    tags: ["PYTHON", "QT"],
  },
  {
    title: {
      es: "Transcriptor multimedia con IA local",
      en: "Multimedia transcriber with local AI",
    },
    description: {
      es: "Aplicación de escritorio, desarrollada en equipo para el Juzgado de Familia de Osorno, que transcribe audio y video con whisper.cpp. La inferencia corre en CPU, así que funciona en equipos de bajos recursos y el audio de las causas nunca sale del computador.",
      en: "Desktop app, built as a team for the Family Court of Osorno, that transcribes audio and video with whisper.cpp. Inference runs on the CPU, so it works on low-end computers and case audio never leaves the machine.",
    },
    github: "https://github.com/donmcontreras/Whisper-Transcriptor",
    image: { es: "/projects/transcriptor.svg", en: "/projects/transcriptor.en.svg" },
    tags: ["PYTHON"],
  },
  {
    title: {
      es: "Inventario PJUD - Gestor de inventario web",
      en: "PJUD Inventory - Web inventory manager",
    },
    description: {
      es: "Gestor de inventario full-stack para el Juzgado de Familia de Osorno. Lo puse en producción y lo entregué con un manual de usuario para que el personal administrativo lo operara de forma autónoma.",
      en: "Full-stack inventory manager for the Family Court of Osorno. I deployed it to production and delivered it with a user manual so the administrative staff could run it on their own.",
    },
    image: { es: "/projects/inventario-pjud.svg", en: "/projects/inventario-pjud.en.svg" },
    tags: ["NEXT", "TYPESCRIPT", "TAILWIND", "MYSQL"],
    note: { es: "Repositorio privado", en: "Private repository" },
  },
  {
    title: {
      es: "Mi Taller - Gestión para un taller automotriz",
      en: "Mi Taller - Management for an auto body shop",
    },
    description: {
      es: "Aplicación full-stack, hecha en un equipo de siete personas, para un taller de desabolladura y pintura: agenda de trabajos en calendario, inicio de sesión con JWT, gráficos y reportes en PDF.",
      en: "Full-stack app, built by a team of seven, for a body and paint shop: job scheduling on a calendar, JWT login, charts and PDF reports.",
    },
    github: "https://github.com/katiaarevalo/mi-taller-app",
    image: { es: "/projects/mi-taller.svg", en: "/projects/mi-taller.en.svg" },
    tags: ["REACT", "NODE", "EXPRESS", "MYSQL"],
  },
  {
    title: {
      es: "Cloud RAM - Descarga RAM desde la nube",
      en: "Cloud RAM - Download RAM from the cloud",
    },
    description: {
      es: "Experimento satírico que simula un servicio para descargar RAM: bilingüe español/inglés, tema claro y oscuro, carrusel accesible con teclado y una barra de descarga totalmente falsa.",
      en: "Satirical experiment that fakes a service to download RAM: Spanish/English, light and dark theme, keyboard-accessible carousel and a completely fake download bar.",
    },
    link: "https://cloudram.netlify.app/",
    github: "https://github.com/mr-dieggo/descargarRAM",
    tags: ["ASTRO", "TYPESCRIPT"],
    experiment: true,
  },
  {
    title: {
      es: "Departure Time - Cuentas regresivas",
      en: "Departure Time - Countdowns",
    },
    description: {
      es: "Experimento en colaboración: cuentas regresivas para fechas, horas del día o días del mes, con notificaciones del navegador, tema claro y oscuro, e importación y exportación en JSON.",
      en: "Collaborative experiment: countdowns for dates, times of day or days of the month, with browser notifications, light and dark theme, and JSON import and export.",
    },
    link: "https://departuretime.vercel.app/",
    github: "https://github.com/mr-dieggo/departure-time",
    tags: ["REACT", "TYPESCRIPT", "VITE", "TAILWIND"],
    experiment: true,
  },
] satisfies ProjectEntry[]
