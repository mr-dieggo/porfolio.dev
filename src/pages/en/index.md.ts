import type { APIRoute } from "astro"
import { homeMarkdown } from "@/i18n/markdown"

export const GET: APIRoute = () =>
  new Response(homeMarkdown("en"), { headers: { "Content-Type": "text/markdown; charset=utf-8" } })
