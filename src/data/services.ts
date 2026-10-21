import type { Localized } from "@/i18n/types"

export interface ServiceEntry {
  id: string
  title: Localized
  description: Localized
  items: Localized<string[]>
}

export const services = [
  {
    id: "desarrollo",
    title: { es: "Desarrollo de software", en: "Software development" },
    description: {
      es: "Aplicaciones web y de escritorio a medida, desde el diseño hasta la puesta en producción.",
      en: "Custom web and desktop applications, from design to production.",
    },
    items: {
      es: [
        "Diseño de interfaces (UX/UI)",
        "Mantención de sitios web",
        "Posicionamiento en buscadores (SEO)",
        "Optimización de velocidad y rendimiento",
      ],
      en: [
        "Interface design (UX/UI)",
        "Website maintenance",
        "Search engine optimization (SEO)",
        "Speed and performance optimization",
      ],
    },
  },
  {
    id: "soporte",
    title: { es: "Soporte técnico", en: "Tech support" },
    description: {
      es: "Mantención y puesta a punto de equipos, en persona en Osorno o de forma remota con RustDesk.",
      en: "Computer maintenance and tune-ups, in person in Osorno or remotely with RustDesk.",
    },
    items: {
      es: [
        "Cambio a SSD, formateo y respaldos",
        "Instalación de Windows 7 en adelante (Linux, a evaluar según la distribución)",
        "Cotización de equipos según tu uso y presupuesto",
        "Asesoría e instalación de licencias de software",
      ],
      en: [
        "SSD upgrades, formatting and backups",
        "Windows 7 and later installs (Linux evaluated case by case, depending on the distribution)",
        "Equipment quotes for your needs and budget",
        "Software licensing advice and installation",
      ],
    },
  },
  {
    id: "redes",
    title: { es: "Redes y ciberseguridad", en: "Networking and cybersecurity" },
    description: {
      es: "Revisión de la red de tu casa u oficina con el método detrás de PICIR, mi proyecto de título.",
      en: "A review of your home or office network, using the approach behind PICIR, my thesis project.",
    },
    items: {
      es: [
        "Diagnóstico de la red interna",
        "Revisión de puertos y servicios expuestos",
        "Buenas prácticas de seguridad",
      ],
      en: [
        "Internal network diagnosis",
        "Open ports and exposed services review",
        "Security best practices",
      ],
    },
  },
  {
    id: "audiovisual",
    title: { es: "Audiovisual en vivo", en: "Live audiovisual" },
    description: {
      es: "Producción técnica de eventos, con la experiencia del Rodeo Río Rahue y Radio La Mega.",
      en: "Technical production for events, backed by my work at Rodeo Río Rahue and Radio La Mega.",
    },
    items: {
      es: ["Sonido y amplificación", "Transmisión en vivo", "Registro con cámara y dron"],
      en: ["Sound and amplification", "Live streaming", "Camera and drone recording"],
    },
  },
] satisfies ServiceEntry[]
