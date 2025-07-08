import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./en/translation.json";
import translationES from "./es/translation.json";
import translationPT from "./pt/translation.json";

export enum AcceptedLanguages {
  pt = "pt",
  en = "en",
  es = "es",
}

export const languageNames = {
  [AcceptedLanguages.pt]: "Português (Brasil)",
  [AcceptedLanguages.en]: "English (US)",
  [AcceptedLanguages.es]: "Español (ES)",
};

const resources = {
  pt: { translation: translationPT },
  en: { translation: translationEN },
  es: { translation: translationES },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("language") || AcceptedLanguages.pt,
  fallbackLng: AcceptedLanguages.pt,
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
