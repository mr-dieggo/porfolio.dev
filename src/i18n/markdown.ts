// Plain-text versions of the site for language models (llms.txt and /index.md),
// built from the same data as the HTML pages so they never drift apart.
import { certifications, degree } from "@/data/education"
import { experience, type ExperienceEntry } from "@/data/experience"
import { projects, tagNames, type ProjectEntry } from "@/data/projects"
import { services } from "@/data/services"
import { ui, type Lang } from "./ui"
import { plain } from "./utils"

const SITE = "https://mrdieggo.dev"
const EMAIL = "mrx.dieggo@gmail.com"
const GITHUB = "https://github.com/mr-dieggo"
const LINKEDIN = "https://linkedin.com/in/diego-molinar"

const home = (lang: Lang) => (lang === "es" ? `${SITE}/` : `${SITE}/en/`)
const absolute = (path: string) => (path.startsWith("http") ? path : `${SITE}${path}`)

const PROJECT_LIST = projects as ProjectEntry[]
const EXPERIENCE_LIST = experience as ExperienceEntry[]

const projectLinks = (project: ProjectEntry, lang: Lang) => {
  const t = ui[lang]
  const links = [
    project.github && `[${t["projects.code"]}](${project.github})`,
    project.link && `[${t["projects.demo"]}](${project.link})`,
  ].filter(Boolean)
  return links.join(" · ")
}

export function homeMarkdown(lang: Lang): string {
  const t = ui[lang]
  const featured = PROJECT_LIST.filter((p) => !p.experiment)
  const experiments = PROJECT_LIST.filter((p) => p.experiment)
  const out: string[] = []

  out.push(`# Diego Molina`, "")
  out.push(`> ${t["hero.role"]} ${t["hero.from"]}. ${plain(t["hero.summary"])} ${t["hero.seeking"]}`, "")
  out.push(`${t["hero.available"]}. ${home(lang)}`, "")

  out.push(`## ${t["experience.title"]}`, "")
  for (const job of EXPERIENCE_LIST) {
    out.push(`### ${job.title[lang]} — ${job.company[lang]}`, "")
    out.push(`${job.date[lang]}`, "")
    out.push(job.description[lang], "")
    if (job.link) out.push(`${t["experience.learnMore"]} ${job.company[lang]}: ${job.link}`, "")
  }

  out.push(`## ${t["projects.title"]}`, "")
  for (const project of featured) {
    out.push(`### ${project.title[lang]}`, "")
    out.push(project.description[lang], "")
    out.push(`Stack: ${project.tags.map((tag) => tagNames[tag]).join(", ")}`, "")
    const links = projectLinks(project, lang)
    if (links) out.push(links, "")
    if (project.note) out.push(`_${project.note[lang]}_`, "")
  }
  out.push(`### ${t["projects.experiments"]}`, "")
  for (const project of experiments) {
    out.push(`- **${project.title[lang]}**: ${project.description[lang]} ${projectLinks(project, lang)}`)
  }
  out.push("")

  out.push(`## ${t["services.title"]}`, "")
  for (const service of services) {
    out.push(`### ${service.title[lang]}`, "")
    out.push(service.description[lang], "")
    for (const item of service.items[lang]) out.push(`- ${item}`)
    out.push("")
  }
  out.push(t["services.cta"], "")

  out.push(`## ${t["about.title"]}`, "")
  for (const key of ["about.p1", "about.p2", "about.p3"] as const) out.push(plain(t[key]), "")

  out.push(`### ${t["education.title"]}`, "")
  out.push(`**${degree.title[lang]}** — ${degree.institution}, ${degree.place} (${degree.date}). ${degree.description[lang]}`, "")
  out.push(`${t["education.certifications"]}:`, "")
  for (const cert of certifications) out.push(`- ${cert.name} — ${cert.issuer}, ${cert.date[lang]}`)
  out.push("")

  out.push(`## ${t["contact.title"]}`, "")
  out.push(t["contact.lead"], "")
  out.push(`- Email: ${EMAIL}`)
  out.push(`- LinkedIn: ${LINKEDIN}`)
  out.push(`- GitHub: ${GITHUB}`)
  out.push(`- ${t["cv.label"]}: ${absolute(t["cv.href"])}`)
  out.push("", t["contact.phone"], "")

  return out.join("\n")
}

export function llmsTxt(): string {
  const en = ui.en
  const link = (p: ProjectEntry) => p.github ?? p.link ?? `${home("en")}#proyectos`
  const featured = PROJECT_LIST.filter((p) => !p.experiment)
  const experiments = PROJECT_LIST.filter((p) => p.experiment)

  return [
    "# Diego Molina",
    "",
    `> ${en["hero.role"]} (Ingeniero Civil en Informática, Universidad de Los Lagos, 2025) ${en["hero.from"]}. Full-stack developer, co-founder of Pide Sano SpA, with experience in IT support and cybersecurity. ${en["hero.seeking"]} Also offers IT services in Osorno and remotely.`,
    "",
    `The site is bilingual: Spanish at ${home("es")} and English at ${home("en")}. Contact is by email only (${EMAIL}); the phone number is shared by email on request.`,
    "",
    "## Portfolio",
    "",
    `- [Portfolio in English (Markdown)](${SITE}/en.md): full content of the English page`,
    `- [Portafolio en español (Markdown)](${SITE}/index.md): full content of the Spanish page`,
    `- [Résumé, English (PDF)](${absolute(en["cv.href"])})`,
    `- [Currículum, español (PDF)](${absolute(ui.es["cv.href"])})`,
    "",
    "## Projects",
    "",
    ...featured.map((p) => `- [${p.title.en}](${link(p)}): ${p.description.en}`),
    "",
    "## Services",
    "",
    ...services.map((s) => `- ${s.title.en}: ${s.description.en} (${s.items.en.join("; ")})`),
    "",
    "## Profiles",
    "",
    `- [GitHub](${GITHUB})`,
    `- [LinkedIn](${LINKEDIN})`,
    "",
    "## Optional",
    "",
    ...experiments.map((p) => `- [${p.title.en}](${link(p)}): ${p.description.en}`),
    "",
  ].join("\n")
}
