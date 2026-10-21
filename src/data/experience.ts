import type { Localized } from "@/i18n/types"

export interface ExperienceEntry {
  date: Localized
  title: Localized
  company: Localized
  description: Localized
  link?: string
  current?: boolean
}

export const experience = [
  {
    date: { es: "Agosto 2026 - Actualidad", en: "August 2026 - Present" },
    title: { es: "Cofundador y desarrollador", en: "Co-founder and developer" },
    company: { es: "Pide Sano SpA", en: "Pide Sano SpA" },
    description: {
      es: "Cofundé la empresa junto a un socio y desarrollo la plataforma completa, desde la API hasta las apps y la infraestructura. La sociedad se constituyó en septiembre de 2026 y preparamos el lanzamiento en Osorno.",
      en: "I co-founded the company with a partner and build the whole platform, from the API to the apps and the infrastructure. The company was incorporated in September 2026 and we're preparing the launch in Osorno.",
    },
    current: true,
  },
  {
    date: { es: "Noviembre 2025 - Febrero 2026", en: "November 2025 - February 2026" },
    title: { es: "Técnico audiovisual", en: "Audiovisual technician" },
    company: {
      es: "Asociación del Rodeo Chileno Río Rahue Osorno",
      en: "Asociación del Rodeo Chileno Río Rahue Osorno",
    },
    description: {
      es: "Producción técnica de los eventos de principio a fin: sonido en recintos abiertos, transmisión en vivo por YouTube, registro con dron y cámara, y piezas promocionales para redes sociales.",
      en: "End-to-end technical production of the events: sound at outdoor venues, YouTube live streaming, drone and camera recording, and promotional pieces for social media.",
    },
    link: "https://www.youtube.com/@RodeoRioRahue",
  },
  {
    date: { es: "Mayo 2024 - Noviembre 2025", en: "May 2024 - November 2025" },
    title: {
      es: "Supervisor técnico: Olimpiadas de Química UMCE",
      en: "Technical supervisor: UMCE Chemistry Olympiad",
    },
    company: { es: "Universidad de Los Lagos", en: "Universidad de Los Lagos" },
    description: {
      es: "Logística del evento en Los Lagos, Los Ríos y Aysén, junto a la UMCE y los establecimientos participantes. Diseñé la base de datos de inscripciones, asistencia y resultados que unificó las sedes en un solo reporte.",
      en: "Event logistics in the Los Lagos, Los Ríos and Aysén regions, with UMCE and the participating schools. I designed the registration, attendance and results database that unified every venue into a single report.",
    },
  },
  {
    date: { es: "Enero 2025 - Marzo 2025", en: "January 2025 - March 2025" },
    title: {
      es: "Práctica profesional: soporte técnico de TI",
      en: "Professional internship: IT support",
    },
    company: {
      es: "Poder Judicial: Juzgado de Familia de Osorno",
      en: "Judiciary of Chile: Family Court of Osorno",
    },
    description: {
      es: "Puse en producción un gestor de inventario web y, en equipo, un transcriptor de audio y video con IA que corre en el propio equipo, sin enviar el audio de las causas a servicios externos. También di soporte de primera línea y capacité a funcionarios.",
      en: "I deployed a web inventory manager to production and, as part of a team, an AI audio and video transcriber that runs on the machine itself, without sending case audio to external services. I also provided first-line support and trained staff.",
    },
  },
  {
    date: { es: "Abril 2024 - Agosto 2024", en: "April 2024 - August 2024" },
    title: { es: "Técnico de soporte de TI", en: "IT support technician" },
    company: { es: "Universidad de Los Lagos", en: "Universidad de Los Lagos" },
    description: {
      es: "Configuré los laboratorios con Linux Mint y Raspberry Pi para hardware de gama baja, además de respaldos, mantención de salas y operación de impresoras 3D.",
      en: "I set up the labs with Linux Mint and Raspberry Pi for low-end hardware, along with backups, room maintenance and 3D printer operation.",
    },
  },
] satisfies ExperienceEntry[]
