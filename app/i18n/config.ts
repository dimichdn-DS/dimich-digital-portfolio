export const locales = ["de", "en", "ru"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "de";
export const localeCookieName = "kpts-werk-locale";

export const localeLabels: Record<Locale, string> = {
  de: "DE",
  en: "EN",
  ru: "RU",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function formatMessage(
  template: string,
  values: Record<string, string | number>,
) {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? String(values[key]) : match,
  );
}
