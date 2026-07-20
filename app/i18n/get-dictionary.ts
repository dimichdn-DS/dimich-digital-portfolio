import type { Locale } from "./config";
import type { SiteDictionary } from "./types";

const dictionaryLoaders: Record<Locale, () => Promise<SiteDictionary>> = {
  de: () => import("./dictionaries/de").then((module) => module.default),
  en: () => import("./dictionaries/en").then((module) => module.default),
  ru: () => import("./dictionaries/ru").then((module) => module.default),
};

export function getDictionary(locale: Locale) {
  return dictionaryLoaders[locale]();
}
