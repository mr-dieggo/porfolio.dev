import type { Lang } from "./ui"

/** A value written once per language */
export type Localized<T = string> = Record<Lang, T>
