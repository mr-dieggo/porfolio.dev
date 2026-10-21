import type { UIKey } from "@/i18n/ui"

// Page sections in order. Ids stay in Spanish in both languages so the
// language switch keeps the same #anchor and existing /#contacto links work.
export const sections = [
  { id: "experiencia", nav: "nav.experience", title: "experience.title" },
  { id: "proyectos", nav: "nav.projects", title: "projects.title" },
  { id: "servicios", nav: "nav.services", title: "services.title" },
  { id: "sobre-mi", nav: "nav.about", title: "about.title" },
  { id: "contacto", nav: "nav.contact", title: "contact.title" },
] as const satisfies readonly { id: string; nav: UIKey; title: UIKey }[]

export type SectionId = (typeof sections)[number]["id"]
