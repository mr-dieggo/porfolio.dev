export const languages = { es: "Español", en: "English" } as const
export type Lang = keyof typeof languages
export const defaultLang: Lang = "es"

const es = {
  "meta.title": "Diego Molina - Ingeniero Civil en Informática, full-stack",
  "meta.description":
    "Porfolio de Diego Molina, Ingeniero Civil en Informática de Osorno, Chile. Desarrollo full-stack, aplicaciones de escritorio con IA local, herramientas de ciberseguridad y servicios informáticos.",
  "meta.siteName": "Diego Molina · Porfolio",
  "meta.jobTitle": "Ingeniero Civil en Informática",

  "nav.experience": "Experiencia",
  "nav.projects": "Proyectos",
  "nav.services": "Servicios",
  "nav.about": "Sobre mí",
  "nav.contact": "Contacto",

  "lang.switch": "Ver en inglés",

  "theme.choose": "Elige el tema",
  "theme.light": "Claro",
  "theme.dark": "Oscuro",
  "theme.system": "Sistema",

  "hero.avatarAlt": "Diego Molina",
  "hero.available": "Disponible para trabajar",
  "hero.greeting": "Hola, soy",
  "hero.role": "Ingeniero Civil en Informática",
  "hero.from": "de Osorno, Chile",
  "hero.summary":
    "Desarrollo software full-stack, aplicaciones de escritorio con IA local y herramientas de **ciberseguridad**.",
  "hero.seeking": "Busco roles en gestión de TI, desarrollo de software o ciberseguridad.",
  "hero.linksLabel": "Redes sociales y contacto",
  "hero.contact": "Contáctame",
  "cv.label": "Currículum",
  "cv.href": "/CV-Diego-Molina.pdf",

  "experience.title": "Experiencia laboral",
  "experience.learnMore": "Saber más sobre",

  "projects.title": "Proyectos",
  "projects.code": "Código",
  "projects.demo": "Ver demo",
  "projects.experiments": "Experimentos",
  "projects.readMore": "Leer más",
  "projects.readLess": "Leer menos",

  "services.title": "Servicios",
  "services.cta":
    "¿Necesitas alguno de estos servicios? Escríbeme y te respondo con una propuesta. Si prefieres conversarlo por teléfono, pídeme el número en el mismo correo.",
  "services.ctaButton": "Escríbeme",

  "about.title": "Sobre mí",
  "about.photoAlt": "Diego Molina al aire libre, con lentes y polerón celeste",
  "about.p1":
    "Me llamo Diego Gabriel Molina Rodríguez, de ahí el **mr-dieggo** que vas a ver en mis redes. Soy **Ingeniero Civil en Informática** de la Universidad de Los Lagos y me muevo entre el desarrollo de software, la infraestructura de TI y la ciberseguridad.",
  "about.p2":
    "En mi práctica en el Juzgado de Familia de Osorno **puse en producción un gestor de inventario web** y, en equipo, un transcriptor con IA que corre sin conexión, para que el audio de las causas nunca salga del computador. Mi proyecto de título, **PICIR**, analiza y protege redes internas.",
  "about.p3":
    "Antes de programar ya trabajaba con audio: edité y mastericé para Radio La Mega y luego me encargué de la **producción técnica y las transmisiones en vivo** del Rodeo Río Rahue. En 2025, como presidente del TRICEL de mi carrera, conduje el proceso que permitió **constituir su Centro de Estudiantes**.",

  "education.title": "Formación",
  "education.certifications": "Certificaciones",
  "education.thesisLink": "Ver PICIR en proyectos",

  "contact.title": "Contacto",
  "contact.lead": "¿Tienes un puesto o un proyecto en mente? Escríbeme y conversemos.",
  "contact.phone": "Si prefieres hablar por teléfono, pídeme el número en el correo.",
  "contact.copy": "Copiar correo",
  "contact.copied": "Correo copiado",
  "contact.copyFailed": "No se pudo copiar: el correo quedó seleccionado para que lo copies",
  "contact.otherLabel": "Otras formas de contacto",

  "footer.madeWith": "Hecho con",
  "footer.love": "cariño",
  "footer.template": "a partir de la plantilla de",

  "notFound.metaTitle": "Página no encontrada · Diego Molina",
  "notFound.metaDescription": "Esta dirección no existe en el porfolio de Diego Molina.",
  "notFound.title": "Esta página no existe",
  "notFound.text":
    "Puede que el enlace esté mal escrito o que la página se haya movido. Todo lo que hay en el porfolio está en la página de inicio.",
  "notFound.back": "Volver al inicio",
}

export type UIKey = keyof typeof es

// Typed against the Spanish keys: astro check fails if a translation is missing
const en: Record<UIKey, string> = {
  "meta.title": "Diego Molina - Computer Engineer and full-stack developer",
  "meta.description":
    "Portfolio of Diego Molina, a Computer Engineer from Osorno, Chile. Full-stack development, desktop apps with local AI, cybersecurity tools and IT services.",
  "meta.siteName": "Diego Molina · Portfolio",
  "meta.jobTitle": "Computer Engineer",

  "nav.experience": "Experience",
  "nav.projects": "Projects",
  "nav.services": "Services",
  "nav.about": "About",
  "nav.contact": "Contact",

  "lang.switch": "View in Spanish",

  "theme.choose": "Choose a theme",
  "theme.light": "Light",
  "theme.dark": "Dark",
  "theme.system": "System",

  "hero.avatarAlt": "Diego Molina",
  "hero.available": "Open to work",
  "hero.greeting": "Hi, I'm",
  "hero.role": "Computer Engineer",
  "hero.from": "from Osorno, Chile",
  "hero.summary":
    "I build full-stack software, desktop apps with local AI and **cybersecurity** tools.",
  "hero.seeking": "Looking for roles in IT management, software development or cybersecurity.",
  "hero.linksLabel": "Social links and contact",
  "hero.contact": "Contact me",
  "cv.label": "Résumé",
  "cv.href": "/CV-Diego-Molina-EN.pdf",

  "experience.title": "Work experience",
  "experience.learnMore": "Learn more about",

  "projects.title": "Projects",
  "projects.code": "Code",
  "projects.demo": "Live demo",
  "projects.experiments": "Experiments",
  "projects.readMore": "Read more",
  "projects.readLess": "Read less",

  "services.title": "Services",
  "services.cta":
    "Need one of these services? Email me and I'll reply with a proposal. If you'd rather talk on the phone, ask for my number in the same email.",
  "services.ctaButton": "Email me",

  "about.title": "About me",
  "about.photoAlt": "Diego Molina outdoors, wearing glasses and a light blue sweatshirt",
  "about.p1":
    "My name is Diego Gabriel Molina Rodríguez, hence the **mr-dieggo** you'll see on my profiles. I'm a **Computer Engineer** from Universidad de Los Lagos, and I work across software development, IT infrastructure and cybersecurity.",
  "about.p2":
    "During my internship at the Family Court of Osorno I **deployed a web inventory manager to production** and, as part of a team, built an AI transcriber that runs offline, so case audio never leaves the computer. My thesis project, **PICIR**, analyzes and protects internal networks.",
  "about.p3":
    "Before programming I already worked with audio: I edited and mastered for Radio La Mega and later ran the **technical production and live streams** for Rodeo Río Rahue. In 2025, as president of my program's TRICEL, I led the process that **established its Student Council**.",

  "education.title": "Education",
  "education.certifications": "Certifications",
  "education.thesisLink": "See PICIR in projects",

  "contact.title": "Contact",
  "contact.lead": "Have a role or a project in mind? Email me and let's talk.",
  "contact.phone": "If you'd rather talk on the phone, ask for my number by email.",
  "contact.copy": "Copy email",
  "contact.copied": "Email copied",
  "contact.copyFailed": "Couldn't copy: the email is selected so you can copy it",
  "contact.otherLabel": "Other ways to reach me",

  "footer.madeWith": "Made with",
  "footer.love": "love",
  "footer.template": "from the template by",

  "notFound.metaTitle": "Page not found · Diego Molina",
  "notFound.metaDescription": "This address doesn't exist on Diego Molina's portfolio.",
  "notFound.title": "This page doesn't exist",
  "notFound.text":
    "The link may be misspelled or the page may have moved. Everything in the portfolio is on the home page.",
  "notFound.back": "Back to home",
}

export const ui = { es, en } satisfies Record<Lang, Record<UIKey, string>>
