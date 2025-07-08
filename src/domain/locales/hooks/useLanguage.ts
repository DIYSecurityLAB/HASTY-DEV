import { useTranslation } from "react-i18next";
import { AcceptedLanguages } from "../i18n";

export function useLanguage() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: AcceptedLanguages) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const currentLang =
    (localStorage.getItem("language") as AcceptedLanguages) ||
    AcceptedLanguages.pt;

  return {
    currentLang,
    changeLanguage,
  };
}

export function useCurrentLang(): AcceptedLanguages {
  const currentLang =
    (localStorage.getItem("language") as AcceptedLanguages) ||
    AcceptedLanguages.pt;
  return currentLang;
}
